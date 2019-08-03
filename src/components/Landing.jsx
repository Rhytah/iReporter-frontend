import React, { Component } from 'react';
import '../assets/css/Landing.css';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div id="page-top">
          <div className="container">
            <article>
              <h1>Welcome to iReporter</h1>

              <p>
                Corruption is a huge bane to Africa’s development. African countries must develop
                novel and localised solutions that will curb this menace, hence the birth of
                iReporter. iReporter enables any/every citizen to bring any form of corruption to
                the notice of appropriate authorities and the general public. Users can also report
                on things that needs government intervention
              </p>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
