/* eslint-disable react/prop-types */
function Books({ bookList, handleAddToCart }) {
  return (
    <>
      <ul className="list-group">
        {bookList.map(book => (
          <li key={book.id} className="list-group-item d-flex justify-content-between">
            <span>{book.title}</span>
            <span>
              <button
                onClick={() => {
                  handleAddToCart(book.id);
                }}
                className="btn btn-primary"
              >
                Add To Cart
              </button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Books;
