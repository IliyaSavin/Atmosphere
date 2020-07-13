import React from 'react';
import MainContent from './MainContent';
import AddSensor from './AddSensor';

class ContentWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='content_wrapper'>
        {this.props.showMainContent && <MainContent />}
        {this.props.showAddSensor && (
          <AddSensor onShowMain={this.props.onShowMain} />
        )}
      </div>
    );
  }
}

export default ContentWrapper;
