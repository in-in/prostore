export class BookstoreService {
	data = [
		{
			'id': 1,
			'title': 'Production-Ready Microservices',
			'author': 'Susan J. Fowler',
			'price': 32,
			'coverImage': 'https://images-na.ssl-images-amazon.com/images/I/51oxXEG6TRL._SX379_BO1,204,203,200_.jpg',
		},
		{
			'id': 2,
			'title': 'Release It!',
			'author': 'Michael T. Nygard',
			'price': 42,
			'coverImage': 'https://images-na.ssl-images-amazon.com/images/I/419zAwJJH4L._SX415_BO1,204,203,200_.jpg',
		},
		{
			'id': 3,
			'title': 'Production-Ready Microservices',
			'author': 'Lorem ipsum sitamet consectetur, adipisicing elit. Molestiae nemo, voluptatem ',
			'price': 32583,
			'coverImage': 'http://satyr.io/1200x1:1/0?type=png&text=fallback&texture=cross',
		},
		{
			'id': 4,
			'title': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, minima deserunt.',
			'author': 'Michael T. Nygard',
			'price': 42,
			'coverImage': 'http://satyr.io/1200x1:2/2?type=png&text=fallback&texture=cross',
		},
		{
			'id': 5,
			'title': 'Production-Ready Microservices',
			'author': 'Susan J. Fowler',
			'price': 32,
			'coverImage': 'http://satyr.io/1200x2:1/3?type=png&text=fallback&texture=cross',
		},
		{
			'id': 6,
			'title': 'Release It!',
			'author': 'Michael T. Nygard',
			'price': 42,
			'coverImage': 'http://satyr.io/720x3:4/6?type=png&text=3/4&texture=cross',
		},
	]

	getBooks() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(this.data);
			}, 1800);
		});
	}
}
