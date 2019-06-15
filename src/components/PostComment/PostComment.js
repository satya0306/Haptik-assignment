import React, { Component } from "react";
import { withRouter } from "react-router";
import "./PostComment.css";

class PostComment extends Component {
  state = {
    data: this.props.location.state.data
  };
  cancelledHandler = () => {
    this.props.history.goBack();
  };
  render() {
    console.log(this.state.data);
    return (
      <div>
        <div className=" Comment">
          <div className="userDeatils">
            <div className="Content">
              <span className="HeadLine">Name</span>
            </div>
            <div className="CommentContainer CommentBorder">
              <div className="CommentArea">there are few cats</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PostComment);
