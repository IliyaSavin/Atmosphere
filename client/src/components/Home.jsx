import React from 'react';
import Wrapper from './Wrapper';
import ControlPanel from './ControlPanel';
import ContentWrapper from './ContentWrapper';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMainContent: false,
      showAddSensor: false,
      showAddOptimal: false,
      showAddTerrain: false,
      showAddSensorData: true,
    };
    this.onShowMain = this.onShowMain.bind(this);
    this.onShowAddSensor = this.onShowAddSensor.bind(this);
    this.onShowAddOptimal = this.onShowAddOptimal.bind(this);
    this.onShowAddTerrain = this.onShowAddTerrain.bind(this);
    this.onShowAddSensorData = this.onShowAddSensorData.bind(this);
  }

  onShowMain() {
    this.setState({
      showAddSensor: false,
      showAddOptimal: false,
      showMainContent: true,
      showAddTerrain: false,
      showAddSensorData: false,
    });
  }

  onShowAddSensor() {
    this.setState({
      showAddSensor: true,
      showMainContent: false,
      showAddOptimal: false,
      showAddTerrain: false,
      showAddSensorData: false,
    });
  }

  onShowAddTerrain() {
    this.setState({
      showAddSensor: false,
      showMainContent: false,
      showAddOptimal: false,
      showAddTerrain: true,
      showAddSensorData: false,
    });
  }

  onShowAddOptimal() {
    this.setState({
      showAddSensor: false,
      showMainContent: false,
      showAddOptimal: true,
      showAddTerrain: false,
      showAddSensorData: false,
    });
  }

  onShowAddSensorData() {
    this.setState({
      showAddSensor: false,
      showMainContent: false,
      showAddOptimal: false,
      showAddTerrain: false,
      showAddSensorData: false,
      showAddSensorData: true,
    });
  }

  render() {
    return (
      <div className='home'>
        <Wrapper>
          <ControlPanel
            onShowMain={this.onShowMain}
            onShowAddSensor={this.onShowAddSensor}
            onShowAddOptimal={this.onShowAddOptimal}
            onShowAddTerrain={this.onShowAddTerrain}
            onShowAddSensorData={this.onShowAddSensorData}
          />
          <ContentWrapper
            onShowMain={this.onShowMain}
            showMainContent={this.state.showMainContent}
            showAddSensor={this.state.showAddSensor}
            showAddOptimal={this.state.showAddOptimal}
            showAddTerrain={this.state.showAddTerrain}
            showAddSensorData={this.state.showAddSensorData}
          />
        </Wrapper>
      </div>
    );
  }
}

export default Home;
