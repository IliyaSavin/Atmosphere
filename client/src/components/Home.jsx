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
      showAddOptimal: true,
    };
    this.onShowMain = this.onShowMain.bind(this);
    this.onShowAddSensor = this.onShowAddSensor.bind(this);
    this.onShowAddOptimal = this.onShowAddOptimal.bind(this);
  }

  onShowMain() {
    this.setState({
      showAddSensor: false,
      showAddOptimal: false,
      showMainContent: true,
    });
  }

  onShowAddSensor() {
    this.setState({
      showAddSensor: true,
      showMainContent: false,
      showAddOptimal: false,
    });
  }

  onShowAddOptimal() {
    this.setState({
      showAddSensor: false,
      showMainContent: false,
      showAddOptimal: true,
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
          />
          <ContentWrapper
            onShowMain={this.onShowMain}
            showMainContent={this.state.showMainContent}
            showAddSensor={this.state.showAddSensor}
            showAddOptimal={this.state.showAddOptimal}
          />
        </Wrapper>
      </div>
    );
  }
}

export default Home;
