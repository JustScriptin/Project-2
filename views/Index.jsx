const React = require("react");
const Layout = require("./Layout/Layout.jsx");

class Index extends React.Component {
  render() {
    const bookData = this.props.books;
    return (
      <Layout>
        <ul>
          {bookData.map((book) => {
            return (
              <li>
                <div class="book-product-card">
                  <img src={book.img} />
                  <h2>
                    <a href={`/books/${book._id}`}>{book.name}</a>
                    <br />
                    {book.author}
                  </h2>
                  <p>{book.genre}</p>
                </div>

                {/*                 
                // *** DO I WANT THESE TO BE ON INDEX STILL??? OR MOVE TO SHOW??? 
                <div class="buttons">
                  <form action={`/books/${index}?_method=DELETE`} method="POST">
                    <input class="submit-button" type="submit" value="REMOVE" />
                  </form>
                  <a class="edit-button" href={`/books/${index}/edit`}>
                    Edit {book.name}
                  </a>
                </div> */}
              </li>
            );
          })}
        </ul>
      </Layout>
    );
  }
}

module.exports = Index;
