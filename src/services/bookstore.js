export class BookstoreService {
	data = [
		{
			'id': 1,
			'title': 'Production-Ready Microservices',
			'author': 'Susan J. Fowler',
		},
		{
			'id': 2,
			'title': 'Release It!',
			'author': 'Michael T. Nygard',
		},
	]

	getBooks() {
		return this.data;
	}
}
