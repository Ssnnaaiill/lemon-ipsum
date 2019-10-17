import React, { Component } from 'react';
import { PostWrapper, Navigator, Post } from '../../components';
import * as service from '../../services/post';

class PostContainer extends Component {


  /**
   * @constructor
   * initialize component states
   * - postId: post id
   * - fetching: default false, tells whether the request is waiting for response or not
   * - post
   *   - title: default null
   *   - body: default null
   * - comments: default array []
   * @param props
   */
  
  constructor(props) {
    super();

    this.state = {
      postId: 1,
      fetching: false,
      post: {
        title: null,
        body: null
      },
      comments: []
    }
  }


  /**
   * fetchPostInfo
   * - get context and comments of given post
   * @param postId
   */

  fetchPostInfo = async(postId) => {

    // switch fetching true when requesting
    this.setState({
      fetching: true
    });

    // await: wait for promise
    // this will be changed into generator code through babel plugin
    const info = await Promise.all([
      service.getPost(postId),
      service.getComments(postId)
    ]);

    // object destructuring syntax
    // takes out required values and create references to then
    const { title, body } = info[0].data;
    const comments = info[1].data;

    this.setState({
      postId,
      post: {
        title,
        body
      },
      comments,
      fetching: false
    });
  }

  componentDidMount() {
    // send asynchonous request twice for post and comments and wait
    this.fetchPostInfo(1);
  }

  render() {
    const { postId, fetching, post, comments } = this.state;

    return (
      <PostWrapper>
        <Navigator
          postId={postId}
          disabled={fetching}
        />
        <Post
          title={post.title}
          body={post.body}
          comments={comments}
        />
      </PostWrapper>
    );
  }
}

export default PostContainer;