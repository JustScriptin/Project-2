const React = require("react");
const Layout = require("./Layout/Layout.jsx");

class Edit extends React.Component {
  render() {
    const book = this.props.book;
    const index = this.props.index;
    return (
      <Layout>
        <h1 class="first-element"> Edit: {book.name}</h1>
        <form
          class="embedded"
          action={`/books/${index}?_method=PUT`}
          method="POST"
        >
          {/* *** REPLACE THE BELOW ONCE WE HAVE OUR SCHEMA BUILT */}
          Name: <input type="text" name="name" value={book.name} />
          Name: <input type="text" name="name" value={book.name} />
          Name: <input type="text" name="name" value={book.name} />
          Name: <input type="text" name="name" value={book.name} />
          Name: <input type="text" name="name" value={book.name} />
          Name: <input type="text" name="name" value={book.name} />
          <input
            id="submit-edits"
            class="submit-button"
            type="submit"
            name=""
            value="Submit Edits"
          />
        </form>
      </Layout>
    );
  }
}

module.exports = Edit;
