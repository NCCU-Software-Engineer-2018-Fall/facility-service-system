import React, { Component } from 'react';
import { connect } from 'react-redux';

import WelcomeBlock from '../components/WelcomeBlock';

class WelcomeBlockContainer extends Component {
  render() {
    return (
      <WelcomeBlock />
    );
  }
}

export default connect(null, null)(WelcomeBlockContainer);
