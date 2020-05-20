export class BookstoreService {
	data = [
		{
			'id': 1,
			'title': 'Structure and Interpretation of Computer Programs',
			'author': 'Harold Abelson',
			'price': 58.35,
			'coverImage': '/images/cover4.jpg',
		},
		{
			'id': 2,
			'title': 'Introduction to Algorithms',
			'author': 'Thomas H. Cormen',
			'price': 52.64,
			'coverImage': '/images/cover1.jpg',
		},
		{
			'id': 3,
			'title': 'Clean Code',
			'author': 'Robert C. Martin',
			'price': 34.93,
			'coverImage': '/images/cover2.jpg',
		},
		{
			'id': 4,
			'title': 'The Pragmatic Programmer',
			'author': 'Andy Hunt',
			'price': 42.35,
			'coverImage': '/images/cover3.jpg',
		},
		{
			'id': 5,
			'title': 'Design Patterns',
			'author': 'Erich Gamma',
			'price': 27.15,
			'coverImage': '/images/cover6.jpg',
		},
		{
			'id': 6,
			'title': 'Code',
			'author': 'Charles Petzold',
			'price': 19.95,
			'coverImage': '/images/cover5.jpg',
		},
	]

	getBooks() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() > 0.75) {
					reject(new Error('Something went wrong.'));
				} else {
					resolve(this.data);
				}
			}, 1800);
		});
	}
}
