import React, { Component } from 'react';
import { CommentList } from '../';
import './Post.css';

/*
const Post = ({ title, body, comments }) => (
  <div className="Post">
    <h1>{title}</h1>
    <p>
      {body}
    </p>
    <CommentList comments={comments}/>
  </div>
);
*/

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postInfo: {
        title: null,
        body: null,
        comments: []
      },
      animate: false,
      direction: 'left'
    }
  }

  componentWillReceiveProps(nextProps) {
    const { title, body, comments } = nextProps;

    if (this.props.postId !== nextProps.postId) {
      // identify the animation direction: left or right
      const direction = this.props.postId < nextProps.postId ? 'left' : 'right';
      this.setState({
        direction,
        animate: true
      });

      // sync the props to state 0.4 sec later
      setTimeout (
        () => {
          this.setState({
            postInfo: {
              title,
              body,
              comments
            },
            animate: false
          });
        }, 400
      );

      return;
    }

    // sync the props to state directly
    // this is the first post
    this.setState({
      postInfo: {
        title,
        body,
        comments
      }
    });
  }

  render() {
    const { title, body, comments } = this.state.postInfo;
    const { animate, direction } = this.state;
    const animation =
      animate ? (direction === 'left' ? 'bounceOutLeft' : 'bounceOutRight')
      : (direction === 'left' ? 'bounceInRight' : 'bounceInLeft');

    // check if data is not loaded
    if (title !== null) {
      return (
        <div className={`Post animated ${animation}`}>
          <h1>{title}</h1>
          <p>
            {body}
          </p>
          <CommentList comments={comments} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Post;