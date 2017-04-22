import * as React from 'react';
const styles = require('../styles/style.css');

export const Login = (props) => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="panel panel-login">
            <div className="panel-body">
              <div className="row">
                <div className="col-lg-12">
                  <form id="login-form" action="#" method="post" role="form" style={{display: 'block'}}>
                    <h2>LOGIN</h2>
                    <div className="form-group">
                      <input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username" value=""/>
                    </div>
                    <div className="form-group">
                      <input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password"/>
                    </div>
                    <div className="col-xs-6 form-group pull-left checkbox">
                      <input id="checkbox1" type="checkbox" name="remember"></input>
                        <label for="checkbox1">Remember Me</label>
                    </div>
                    <div className="col-xs-6 form-group pull-right">
                      <input type="submit" name="login-submit" id="login-submit" tabindex="4" className="form-control btn btn-login" value="Log In"/>
                    </div>
                  </form>
                  <form id="register-form" action="#" method="post" role="form" style={{display: 'none'}}>
                    <h2>REGISTER</h2>
                    <div className="form-group">
                      <input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username" value=""/>
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" id="email" tabindex="1" className="form-control" placeholder="Email Address" value=""/>
                    </div>
                    <div className="form-group">
                      <input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                      <input type="password" name="confirm-password" id="confirm-password" tabindex="2" className="form-control" placeholder="Confirm Password"/>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                          <input type="submit" name="register-submit" id="register-submit" tabindex="4" className="form-control btn btn-register" value="Register Now"/>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="panel-heading">
              <div className="row">
                <div className="col-xs-6 tabs">
                  <a href="#" className="active" id="login-form-link"><div className="login">LOGIN</div></a>
                </div>
                <div className="col-xs-6 tabs">
                  <a href="#" id="register-form-link"><div className="register">REGISTER</div></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div className="container">
        <div className="col-md-10 col-md-offset-1 text-center">
          <h6 style={{fontSize: '14px', fontWeight: '100', color: '#fff'}}>Coded with <i className="fa fa-heart red" style={{color: '#BC0213'}}></i> by <a href="http://hashif.com" style={{color: '#fff'}} target="_blank">Hashif</a></h6>
        </div>
      </div>
    </footer>
    </div>
    );

