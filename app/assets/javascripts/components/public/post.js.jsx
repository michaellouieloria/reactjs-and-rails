/** @jsx React.DOM **/
var Post = React.createClass({
  render: function() {
    return (
      <div className="row">
        <PostHeader post={this.props.post} formattedDate={this.props.formattedDate} />
        <PostContent post={this.props.post} />
      </div>
    );
  }
});

var PostHeader = React.createClass({
  render: function() {
    return (
      <div className="col-sm-3"><h3><small><i className="fa fa-calendar" />  {this.props.formattedDate}</small></h3></div>
    );
  }
});

var PostContent = React.createClass({
  render: function() {
    return (
      <div className="col-sm-9">
        <span dangerouslySetInnerHTML={{__html: this.props.post.content_html}} />
      </div>
    );
  }
});
