import React from 'react';
import { Comment } from '../';
import './CommentList.css';

const CommentList = ({ comments }) => {

  // map comment data to components
  const commentList = comments.map(
    (comment, index) => (
      <Comment
        name={comment.email.split('@')[0]}
        body={comment.body}
        key={index}
      />
    )
  );

  return (
    <ul className="CommentList">
      {commentList}
    </ul>
  );
}

export default CommentList;