import React, { Component } from 'react';
import { PostWrapper, Navigator, Post, Warning } from '../../components';
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
   * - warningVisibility: default false, visibility of warning message
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
      comments: [],
      warningVisibility: false
    }
  }

  showWarning = () => {
    this.setState({
      warningVisibility: true
    });

    // after 1 sec
    setTimeout(
      () => {
        this.setState({
          warningVisibility: false
        });
      }, 1000
    );
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

    try {
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
    } catch(e) {
      // if err, stop at this point
      this.setState({
        fetching: false
      });
      this.showWarning();
    }
  }


  /**
   * handleNavigateClick
   * - get data of previous or next post
   * @param type: NEXT or PREVious
   */
  
   handleNavigateClick = (type) => {
    const postId = this.state.postId;

    // check if type is NEXT or PREV
    if (type === 'NEXT') {
      this.fetchPostInfo(postId + 1);
    } else {
      this.fetchPostInfo(postId - 1);
    }
  }

  componentDidMount() {
    // send asynchonous request twice for post and comments and wait
    this.fetchPostInfo(1);
  }

  render() {
    const { postId, fetching, post, comments, warningVisibility } = this.state;

    return (
      <PostWrapper>
        <Navigator
          postId={postId}
          disabled={fetching}
          onClick={this.handleNavigateClick}
        />
        <Post
          title={post.title}
          body={post.body}
          comments={comments}
        />
        <Warning visible={warningVisibility} message="Post does not exist!" />
      </PostWrapper>
    );
  }
}

export default PostContainer;