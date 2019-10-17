import React from 'react';
import { Button } from 'semantic-ui-react';
import './Navigator.css';

const Navigator = ({ onClick, postId, disabled }) => (
  <div className="Navigator">
    <Button
      color="violet"
      content="Previous"
      icon="left arrow"
      labelPosition="left"
      onClick={
        () => onClick('PREV')
      }
      disabled={disabled}
    />
    <div className="Navigator-page-num">
      {postId}
    </div>
    <Button
      className="Navigator-right-button"
      color="violet"
      content="Next"
      icon="right arrow"
      labelPosition="right"
      onClick={
        () => onClick('NEXT')
      }
      disabled={disabled}
    />
  </div>
);

export default Navigator;