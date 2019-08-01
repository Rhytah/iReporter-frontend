import React from 'react';

const Login = () => (
  <div>
    <button className="btn btn-primary" type="button" data-toggle="modal" data-target="#modalLogin">
      MODAL LOGIN
    </button>
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
                <button type="submit" className="form-check-label text-left" htmlFor="formCheck-1">
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
);

export default Login;
