import React, { Component } from 'react';
import { Layout, Divider } from 'antd';
import '../assets/css/Landing.css';
import '../assets/images/2.jpg';

const { Content } = Layout;
const siteImage = require('../assets/images/2.jpg');


class LandingPage extends Component {
  render() {
    return (
      <Layout className="layout" style={{ minWidth: '50vw', minHeight: '100vh' }}>
        <Content style={{ padding: '0 50px' }} className="layout-content">

          <div className="site-layout-content">
            <div className="container">
              <Divider />
              <article style={{ background: 'white' }}>
                <h1>Welcome to iReporter</h1>

                <p>
                Corruption is a huge bane to Africa’s development. African countries must develop
                novel and localised solutions that will curb this menace, hence the birth of
                iReporter. iReporter enables any/every citizen to bring any form of corruption to
                the notice of appropriate authorities and the general public. Users can also report
                on things that needs government intervention
                </p>
              </article>
              <article>
                <h3>{sessionStorage.getItem('message')}</h3>
              </article>

            </div>
            {/* <img src={siteImage} alt="site-img" style={{ width: '100%' }} /> */}

          </div>
        </Content>
      </Layout>
    );
  }
}

export default LandingPage;
