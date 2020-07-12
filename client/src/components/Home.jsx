import React from 'react';
import Wrapper from './Wrapper';
import ControlPanel from './ControlPanel';
import ContentWrapper from './ContentWrapper';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='home'>
        <Wrapper>
          <ControlPanel />
          <ContentWrapper />
        </Wrapper>
      </div>
    );
  }
}

export default Home;
