import React from 'react';
import MainContent from './MainContent';
import AddSensor from './AddSensor';
import AddOptimal from './AddOptimal';
import AddTerrain from './AddTerrain';
import AddSensorData from './AddSensorData';
import AddMeasuredValue from './AddMeasuredValue';

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
        {this.props.showAddOptimal && (
          <AddOptimal onShowMain={this.props.onShowMain} />
        )}
        {this.props.showAddTerrain && (
          <AddTerrain onShowMain={this.props.onShowMain} />
        )}
        {this.props.showAddSensorData && (
          <AddSensorData onShowMain={this.props.onShowMain} />
        )}
        {this.props.showAddMeasuredValue && (
          <AddMeasuredValue onShowMain={this.props.onShowMain} />
        )}
      </div>
    );
  }
}

export default ContentWrapper;
