import React from 'react';
import Wrapper from './Wrapper';
import ControlPanel from './ControlPanel';
import ContentWrapper from './ContentWrapper';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMainContent: false,
      showAddSensor: true,
    };
    this.onShowMain = this.onShowMain.bind(this);
    this.onShowAddSensor = this.onShowAddSensor.bind(this);
  }

  onShowMain() {
    this.setState({
      showAddSensor: false,
      showMainContent: true,
    });
  }

  onShowAddSensor() {
    this.setState({
      showAddSensor: true,
      showMainContent: false,
    });
  }

  render() {
    return (
      <div className='home'>
        <Wrapper>
          <ControlPanel
            onShowMain={this.onShowMain}
            onShowAddSensor={this.onShowAddSensor}
          />
          <ContentWrapper
            onShowMain={this.onShowMain}
            showMainContent={this.state.showMainContent}
            showAddSensor={this.state.showAddSensor}
          />
        </Wrapper>
      </div>
    );
  }
}

export default Home;
