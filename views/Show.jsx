const React = require("react");
const Layout = require("./Layout/Layout.jsx");

class Show extends React.Component {
  render() {
    const book = this.props.book;
    console.log(book);
    return (
      <Layout>
        <h1>This is the {book.name} page!</h1>
        <div>
          <div>
            <h1>{book.name}</h1>
            <h3>By: {book.author}</h3>
            <img src={book.img} />
          </div>
          <div>
            <h2>Product:</h2>
            <button>BUY</button>
            <p>{`Order soon! Currently ${book.quantity} remaining.`}</p>
            <a href={`/books/${book._id}/edit`}>
              <p>{`CLICK to Edit ${book.name}`}</p>
            </a>
            <button>DELETE</button>
          </div>
          {/* *** ADD MORE BOOK-SPECIFIC INFO... Description, Synopsis, Genre, etc. */}
          <div>
            <h3> SYNOPSIS:</h3>
            <p>{book.synopsis}</p>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Show;
