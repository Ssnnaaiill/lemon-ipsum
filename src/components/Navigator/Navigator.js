import React from 'react';
import { Button } from 'semantic-ui-react';
import './Navigator.css';

const Navigator = () => (
  <div className="Navigator">
    <Button
      color="violet"
      content="Previous"
      icon="left arrow"
      labelPosition="left"
    />
    <div className="Navigator-page-num">1</div>
    <Button
      className="Navigator-right-button"
      color="violet"
      content="Next"
      icon="right arrow"
      labelPosition="right"
    />
  </div>
);

export default Navigator;