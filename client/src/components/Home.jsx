import React from 'react';
import Wrapper from './Wrapper';
import ControlPanel from './ControlPanel';
import ContentWrapper from './ContentWrapper';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMainContent: true,
    };
    this.onShowHide = this.onShowHide.bind(this);
  }

  onShowHide() {
    const newValue = !this.state.showMainContent;
    this.setState({showMainContent: newValue});
  }

  render() {
    return (
      <div className='home'>
        <Wrapper>
          <ControlPanel onShowHide={this.onShowHide} />
          <ContentWrapper showMainContent={this.state.showMainContent} />
        </Wrapper>
      </div>
    );
  }
}

export default Home;
