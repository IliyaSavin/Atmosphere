import React from 'react';
import MainContent from './MainContent';

class ContentWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMainContent: true,
    };
  }

  render() {
    return (
      <div className='content_wrapper'>
        {this.state.showMainContent ? <MainContent /> : 'sadas'}
      </div>
    );
  }
}

export default ContentWrapper;
