export class BookstoreService {
	data = [
		{
			'id': 1,
			'title': 'Structure and Interpretation of Computer Programs',
			'author': 'Harold Abelson',
			'price': 58.35,
			'coverImage': 'cover4',
		},
		{
			'id': 2,
			'title': 'Introduction to Algorithms',
			'author': 'Thomas H. Cormen',
			'price': 52.64,
			'coverImage': 'cover1',
		},
		{
			'id': 3,
			'title': 'Clean Code',
			'author': 'Robert C. Martin',
			'price': 34.93,
			'coverImage': 'cover2',
		},
		{
			'id': 4,
			'title': 'The Pragmatic Programmer',
			'author': 'Andy Hunt',
			'price': 42.35,
			'coverImage': 'cover3',
		},
		{
			'id': 5,
			'title': 'Design Patterns',
			'author': 'Erich Gamma',
			'price': 27.15,
			'coverImage': 'cover6',
		},
		{
			'id': 6,
			'title': 'Code',
			'author': 'Charles Petzold',
			'price': 19.95,
			'coverImage': 'cover5',
		},
	]

	getBooks() {
		return new Promise((resolve) => {
			resolve(this.data);
		});
	}
}
