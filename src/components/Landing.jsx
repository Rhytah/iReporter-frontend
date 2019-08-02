import React, { Component } from 'react';
import '../assets/css/Landing.css';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div id="page-top">
          <nav id="navigation">
            <div className="container text-center">
              <ul className="navHold">
                <li>
                  <a href="/">Home</a>
                </li>

                <li>
                  <a href="/">Redflags</a>
                </li>
                <li>
                  <a href="/">Interventions</a>
                </li>
                <li className="subNav">
                  Get started
                  <ul>
                    <li>
                      <Link to="/signup">Sign up</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="logosmall hidels">
              <img alt="pic" src="assets/img/testlogosmall.png" height="24px" />
            </div>
            <div className="navResponsive" />
          </nav>
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
