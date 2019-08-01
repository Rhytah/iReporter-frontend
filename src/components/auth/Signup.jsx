/* eslint-disable max-len */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as registrationActions from '../../storeRedux/actions/auth/registerActions';
import Input from './Input';
import Button from './Button';

export class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      emailError: '',
      usernameError: '',
      passwordError: '',
      confirmpassword: '',
      confirmPasswordError: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.validateFormData = this.validateFormData.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        this.validateFormData();
      },
    );
  }

  validateFormData() {
    const {
      email, username, password, confirmpassword,
    } = this.state;

    // eslint-disable-next-line no-useless-escape
    const passwordValidation = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
    // eslint-disable-next-line no-useless-escape
    const usernameValidation = new RegExp('^([a-zA-Zd]+[-_])*[a-zA-Zd*]+$');

    this.setState({
      emailError: email.length > 3 ? null : 'Email must be longer than 3 characters',
      usernameError:
        username > 3 || usernameValidation.test(username)
          ? null
          : 'Username should be 4 characters and cannot be integers, have white spaces or symbol',
      passwordError: passwordValidation.test(password)
        ? null
        : 'Password should be 8 to more characters with atleast a number, capital and small letter.',
      confirmPasswordError: confirmpassword === password ? null : "Passwords don't match",
    });
  }

  submitForm(event) {
    event.preventDefault();
    const { email, username, password } = this.state;
    const { actions } = this.props;
    const newUser = { email, username, password };
    actions.registerUser(newUser);
    this.handleClearForm(event);
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      email: '',
      username: '',
      password: '',
      confirmpassword: '',
    });
  }

  render() {
    const {
      email,
      username,
      password,
      confirmpassword,
      emailError,
      usernameError,
      passwordError,
      confirmPasswordError,
    } = this.state;

    const { user } = this.props;

    return (
      <div id="page-top">
        <div
          className="modal fade portfolio-modal text-center"
          role="dialog"
          tabIndex="-1"
          id="portfolioModal1"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="modal-body">
                        <h2 className="text-uppercase">Project Name</h2>
                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img alt="placeholder-pic" src="/portfolio/1-full.jpg" className="img-fluid d-block mx-auto" />
                        <p>
                          Use this area to describe your project. Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus
                          dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                          cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
                        </p>
                        <ul className="list-unstyled">
                          <li>Date: January 2017</li>
                          <li>Client: Threads</li>
                          <li>Category: Illustration</li>
                        </ul>
                        <button className="btn btn-primary" type="button" data-dismiss="modal">
                          <i className="fa fa-times" />
                          <span>&nbsp;Close Project</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="modal fade" role="dialog" tabIndex="-1" id="modalLogin">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title text-primary">
                    <i className="fa fa-edit" />
&nbsp;CREA TU CUENTA
                  </h3>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col padMar margenesCajas">
                      <p className="text-secondary p-0 m-0 p-2">
                        Para acceder a nuestros productos debes estar inscrito en nuestro sitio web.
                      </p>
                    </div>
                  </div>
                  <form method="post" className="p-4">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Repetir contraseña"
                      />
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary btn-block" type="submit">
                        ENVIAR
                      </button>
                    </div>
                    <div className="form-check pb-2">
                      <input className="form-check-input" type="checkbox" id="formCheck-1" />
                      <button type="button" className="form-check-label text-left" htmlFor="formCheck-1">
                        Recordarme
                      </button>
                    </div>
                    <a href="/" className="forgot">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              className="btn btn-primary btn-Oscuro"
              type="button"
              data-bs-hover-animate="tada"
              data-toggle="modal"
              data-target="#modal"
            >
              MODAL
            </button>
            <div className="modal fade centro" role="dialog" tabIndex="-1" id="modal">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h6 className="modal-title txtsGrises">REGISTER </h6>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <h2 className="titulos">Register form: </h2>
                    <p className="text-left margenesEspacio">
                      Write your information to be part of our community and have access to the
                      system.
                      {' '}
                    </p>
                    <div className="col padMar">
                      <input type="text" placeholder="Name" className="margenesEspacio inputLargo" />
                      <input
                        type="text"
                        placeholder="Lastname"
                        className="margenesEspacio inputLargo"
                      />
                      <input type="text" placeholder="Email " className="margenesEspacio inputLargo" />
                      <input
                        type="password"
                        placeholder="Create a password"
                        className="margenesEspacio inputLargo"
                      />
                      <input
                        type="password"
                        placeholder="Confirm your password"
                        className="margenesEspacio inputLargo"
                      />
                      <input
                        type="tel"
                        placeholder="Mobile phone"
                        className="margenesEspacio inputLargo"
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-primary btn-Oscuro" type="button">
                      REGISTER
                      {' '}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade portfolio-modal text-center"
          role="dialog"
          tabIndex="-1"
          id="portfolioModal2"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="modal-body">
                        <h2 className="text-uppercase">Project Name</h2>
                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img alt="placeholder-pic" src="/portfolio/2-full.jpg" className="img-fluid d-block mx-auto" />
                        <p>
                          Use this area to describe your project. Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus
                          dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                          cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
                        </p>
                        <ul className="list-unstyled">
                          <li>Date: January 2017</li>
                          <li>Client: Threads</li>
                          <li>Category: Illustration</li>
                        </ul>
                        <button className="btn btn-primary" type="button" data-dismiss="modal">
                          <i className="fa fa-times" />
                          <span>&nbsp;Close Project</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade portfolio-modal text-center"
          role="dialog"
          tabIndex="-1"
          id="portfolioModal3"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="modal-body">
                        <h2 className="text-uppercase">Project Name</h2>
                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img alt="placeholder-pic" src="/portfolio/3-full.jpg" className="img-fluid d-block mx-auto" />
                        <p>
                          Use this area to describe your project. Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus
                          dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                          cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
                        </p>
                        <ul className="list-unstyled">
                          <li>Date: January 2017</li>
                          <li>Client: Threads</li>
                          <li>Category: Illustration</li>
                        </ul>
                        <button className="btn btn-primary" type="button" data-dismiss="modal">
                          <i className="fa fa-times" />
                          <span>&nbsp;Close Project</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade portfolio-modal text-center"
          role="dialog"
          tabIndex="-1"
          id="portfolioModal4"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="modal-body">
                        <h2 className="text-uppercase">Project Name</h2>
                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img alt="placeholder-pic" src="/portfolio/4-full.jpg" className="img-fluid d-block mx-auto" />
                        <p>
                          Use this area to describe your project. Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus
                          dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                          cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
                        </p>
                        <ul className="list-unstyled">
                          <li>Date: January 2017</li>
                          <li>Client: Threads</li>
                          <li>Category: Illustration</li>
                        </ul>
                        <button className="btn btn-primary" type="button" data-dismiss="modal">
                          <i className="fa fa-times" />
                          <span>&nbsp;Close Project</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade portfolio-modal text-center"
          role="dialog"
          tabIndex="-1"
          id="portfolioModal5"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="modal-body">
                        <h2 className="text-uppercase">Project Name</h2>
                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img alt="placeholder-pic" src="/portfolio/5-full.jpg" className="img-fluid d-block mx-auto" />
                        <p>
                          Use this area to describe your project. Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus
                          dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                          cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
                        </p>
                        <ul className="list-unstyled">
                          <li>Date: January 2017</li>
                          <li>Client: Threads</li>
                          <li>Category: Illustration</li>
                        </ul>
                        <button className="btn btn-primary" type="button" data-dismiss="modal">
                          <i className="fa fa-times" />
                          <span>&nbsp;Close Project</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade portfolio-modal text-center"
          role="dialog"
          tabIndex="-1"
          id="portfolioModal6"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="modal-body">
                        <h2 className="text-uppercase">Project Name</h2>
                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img alt="placeholder-pic" src="/portfolio/6-full.jpg" className="img-fluid d-block mx-auto" />
                        <p>
                          Use this area to describe your project. Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus
                          dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                          cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
                        </p>
                        <ul className="list-unstyled">
                          <li>Date: January 2017</li>
                          <li>Client: Threads</li>
                          <li>Category: Illustration</li>
                        </ul>
                        <button className="btn btn-primary" type="button" data-dismiss="modal">
                          <i className="fa fa-times" />
                          <span>&nbsp;Close Project</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  actions: PropTypes.shape({ registerUser: PropTypes.func }).isRequired,
  user: PropTypes.shape({ registerUser: PropTypes.func }).isRequired,
};

export const mapStateToProps = state => ({
  user: state.user,
});

export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(registrationActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpForm);
