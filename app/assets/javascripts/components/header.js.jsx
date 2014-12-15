var Header = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="/">Home</a>
          </div>
          <div className="collapse navbar-collapse">
            { this.props.logged ? <LoggedInLinks currentPage={this.props.currentPage} /> : <LoggedOffLinks currentPage={this.props.currentPage} /> }
          </div>
        </div>
      </nav>
    );
  }
});

var LoggedOffLinks = React.createClass({
  render: function() {
    return (
      <ul className="nav navbar-nav">
        <li className={ this.props.currentPage.indexOf("/posts") == 0 ? "active" : null }><a href="/posts">Posts</a></li>
        <li className={ this.props.currentPage == "/about" ? "active" : null }><a href="/about">About</a></li>
        <li className={ this.props.currentPage == "/contact" ? "active" : null }><a href="/contact">Contact</a></li>
        <li className={ this.props.currentPage == "/users/sign_in" ? "active" : null }><a href="/users/sign_in">Sign in</a></li>
      </ul>
    );
  }
});

var LoggedInLinks = React.createClass({
  render: function() {
    return (
      <ul className="nav navbar-nav">
        <li className={ this.props.currentPage.indexOf("/posts") == 0 ? "active" : null }><a href="/posts">Posts</a></li>
        <li className={ this.props.currentPage == "/about" ? "active" : null }><a href="/about">About</a></li>
        <li className={ this.props.currentPage == "/contact" ? "active" : null }><a href="/contact">Contact</a></li>
        <li className={ this.props.currentPage.indexOf("/admin") == 0 ? "active" : null }><a href="/admin">Admin</a></li>
        <li><a data-method="delete" href="/users/sign_out">Sign out</a></li>
      </ul>
    );
  }
});
