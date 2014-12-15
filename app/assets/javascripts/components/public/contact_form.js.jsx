/** @jsx React.DOM **/
var ContactForm = React.createClass({
  getInitialState: function() {
    return { showError: false, showSuccess: false };
  },
  handleSubmit: function ( event ) {
    event.preventDefault();

    var formData = $( this.refs.form.getDOMNode() ).serialize();

    $.ajax({
      data: formData,
      url: this.props.form.action,
      type: "POST",
      dataType: "json",
      success: function ( data ) {
        this.setState({ showError: false });
        this.setState({ showSuccess: true });
        this.refs.name.getDOMNode().value = "";
        this.refs.email.getDOMNode().value = "";
        this.refs.message.getDOMNode().value = "";
      }.bind(this),
      error: function ( data ) {
        this.setState({ showSuccess: false });
        this.setState({ showError: true });
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="contact-form">
        { this.state.showError ? <ContactError /> : null }
        { this.state.showSuccess ? <ContactSuccess /> : null }
        <div className="row">
          <div className="col-sm-6">
            <form ref="form" acceptCharset="UTF-8" action={ this.props.form.action } method="post" onSubmit={ this.handleSubmit }>
              <input name="utf8" type="hidden" value="✓" />
              <input name={ this.props.form.csrf_param } type="hidden" value={ this.props.form.csrf_token } />
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <div className="row">
                  <div className="col-xs-12">
                    <input autofocus="autofocus" className="form-control" ref="name" name="name" placeholder="Enter your name..." type="text" required />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Your email</label>
                <div className="row">
                  <div className="col-xs-12">
                    <input className="form-control" ref="email" name="email" placeholder="Enter your email..." type="email" required />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your message</label>
                <div className="row">
                  <div className="col-xs-12">
                    <textarea className="form-control" ref="message" name="message" placeholder="Enter your message..." rows={10} required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 padded">
                  <button className="btn btn-primary">
                    <i className="fa fa-envelope" /> Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

var ContactError = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3 text-center">
          <div className="alert alert-danger">
            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
            <div id="flash_alert">Please complete the form below. Thank you..</div>
          </div>
        </div>
      </div>
    );
  }
});

var ContactSuccess = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3 text-center">
          <div className="alert alert-success">
            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
            <div id="flash_alert">Your message was sent. Thank you.</div>
          </div>
        </div>
      </div>
    );
  }
});
