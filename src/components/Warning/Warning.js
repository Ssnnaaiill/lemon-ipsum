import React, { Component } from 'react';
import './Warning.css';

class Warning extends Component {

  constructor(props) {
    super(props);
    this.state = {
      closing: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.visible && !nextProps.visible) {
      // change visible props to false from true
      this.setState({
        closing: true
      });

      // 1 sec after
      setTimeout(
        () => {
          this.setState({
            closing: false
          });
        }, 1000
      );
    }
  }

  render() {
    const { visible, message } = this.props;
    const { closing } = this.state;

    if(!visible && !closing) {
      return null;
    } else {
      return (
        <div className="Warning-wrapper">
          <div className={`Warning ${ closing ? 'bounceOut': 'bounceIn' } animated`}>
            {message}
          </div>
        </div>
      );
    }
  }
}

export default Warning;