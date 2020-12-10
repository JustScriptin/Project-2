const React = require("react");
const Layout = require("./Layout/Layout.jsx");

class New extends React.Component {
  render() {
    return (
      <Layout>
        <h1 class="first-element">Create a new Book Entry!</h1>
        <form class="embedded" action="/pokedex/" method="POST">
          Name: <input type="text" name="name" />
          <br />
          Author: <input type="text" name="author" placeholder="First, Last" />
          <br />
          Genre: <input type="text" name="genre" />
          <br />
          Image URL: <input type="text" name="img" />
          <br />
          Synopsis: <input type="textarea" name="synopsis" />
          <br />
          Price: <input type="text" name="price" />
          <br />
          Quantity: <input type="text" name="quantity" />
          <br />
          <input
            id="submit-new"
            class="submit-button"
            type="submit"
            name=""
            value="New Book Listing"
          />
        </form>
      </Layout>
    );
  }
}

module.exports = New;
