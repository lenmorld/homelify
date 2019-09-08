const axios = require('axios');
const cheerio = require('cheerio');
const db = require('diskdb');
db.connect('./data', ['condos']);

// TEST CODE
// if (!db.condos.find().length) {
// 	const condo = { id: "c1", features: "2 Bed 3 Bath", price: "$300000", thumbnail: "", images: [] };
// 	db.condos.save(condo);
// }
// console.log(db.condos.find());

module.exports = function () {
	axios.get('https://www.centris.ca/en/properties~for-sale~montreal-island?uc=1&view=Thumbnail').then(res => {
		if (res.status === 200) {
			// console.log(res.data);
			const $ = cheerio.load(res.data);
			const real_estates = [];
			// $('.thumbnailItem .shell .description .address').each((i, item) => {
			$('.thumbnailItem').each(function (i, item) {
				// 'this' here is the Node object, cheerio allows us to find('selector')
				// caregory: House | Condo
				const real_estate = {
					id: $(this).find('meta[itemprop="sku"]').attr('content'),
					thumbnail: $(this).find('img[itemprop="image"]').attr('src'),
					category: $(this).find('.description .category div span').first().text().trim(),
					address: $(this).find('.address').text().trim(),
					features: $(this).find('.features').text().trim(),
					price: $(this).find('.price [itemprop="price"]').text().trim(),
					description: $(this).find('.thumbnail meta[itemprop="name"]').attr('content'),
				};

				real_estates.push(real_estate);
			})
			// this currently duplicates all of them
			// db.condos.save(real_estates);
			// TODO loop and check one by one, or do an update instead
			const update_options = {
				multi: true, // update multiple
				upsert: true // if object is not found, add it (update-insert)
			}
			var updated = db.articles.update({}, real_estates, update_options);
			console.log(updated);
		}
	}, (err) => {
		console.error(err);
	});
}


// https://www.centris.ca/en/properties~for-sale~montreal-island?uc=1&view=Thumbnail