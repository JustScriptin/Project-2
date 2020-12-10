const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Lit Literature</title>
          {/* BOOTSTRAP */}
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossorigin="anonymous"
          />
          <link rel="stylesheet" href="/css/style.css" />
        </head>
        <body>
          <nav>
            <a href="/books">HOME</a>
            <br />
            <a href="/books/new">NEW</a>
            <br />
          </nav>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = Layout;
