import Books from './Book';

function BookList() {
  const bookList = [
    { id: 1, title: 'Book1' },
    { id: 2, title: 'Book2' },
    { id: 3, title: 'Book3' },
    { id: 4, title: 'Book4' },
    { id: 5, title: 'Book5' }
  ];
  const handleAddToCart = id => {
    const bookName = bookList.find(book => book.id === id).title;
    console.log(`${bookName} has been added to cart.`);
  };

  return (
    <>
      <section className="container mt-5">
        <h1 className="text-center">Book List</h1>

        <Books bookList={bookList} handleAddToCart={handleAddToCart}></Books>
      </section>
    </>
  );
}
export default BookList;

// rafce
