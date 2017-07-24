import * as React from 'react';
const styles = require('../styles/style.css');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);

export const Login = ({ onChange, authType, setAuthMethod }) => {
  let isLogin = authType == "login" ? true : false;
  console.log("authType");
  console.log(authType);
  // const setAuthMethod = ({ target }) => {
  //   target.className == 'register' ? isLogin = false : isLogin = true;
  //   // console.log(target.className);
  // };
  return (
    <div className={cx('lContainer')}>
      <div >
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-login">
              <div className="panel-body">
                <div className="row">
                  <div className="col-lg-12">
                    { isLogin &&
                    <form id="login-form" action="#" method="post" role="form">
                      <h2>LOGIN</h2>
                      <div className="form-group">
                        <input type="text" name="username" tabIndex="1" onChange={onChange} className="form-control"
                               placeholder="Username"/>
                      </div>
                      <div className="form-group">
                        <input type="password" name="password" id="password" tabIndex="2" onChange={onChange}
                               className="form-control" placeholder="Password"/>
                      </div>
                      <div className="col-xs-6 form-group pull-left checkbox">
                        <input id="checkbox1" type="checkbox" name="remember"></input>
                        <label htmlFor="checkbox1">Remember Me</label>
                      </div>
                      <div className="col-xs-6 form-group pull-right">
                        <input type="submit" name="loginSubmit" id="login-submit" tabIndex="4"
                               className="form-control btn btn-login" value="Log In"/>
                      </div>
                    </form>
                    }
                    {
                      !isLogin &&
                      <form id="register-form" action="#" method="post" role="form">
                        <h2>REGISTER</h2>
                        <div className="form-group">
                          <input type="text" name="username" id="username" onChange={onChange} tabIndex="1"
                                 className="form-control" placeholder="Username" value=""/>
                        </div>
                        <div className="form-group">
                          <input type="email" name="email" id="email" tabIndex="1" onChange={onChange}
                                 className="form-control" placeholder="Email Address" value=""/>
                        </div>
                        <div className="form-group">
                          <input type="password" name="password" id="password" onChange={onChange} tabIndex="2"
                                 className="form-control" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                          <input type="password" name="confirmPassword" id="confirm-password" onChange={onChange}
                                 tabIndex="2" className="form-control" placeholder="Confirm Password"/>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                              <input type="submit" name="register-submit" id="register-submit" tabIndex="4"
                                     className="form-control btn btn-register" value="Register Now"/>
                            </div>
                          </div>
                        </div>
                      </form>
                    }
                  </div>
                </div>
              </div>
              <div className="panel-heading">
                <div className="row">
                  <div onClick={setAuthMethod} className={cx(['col-xs-6','tabs'])} style={{ cursor: "pointer" }}>
                    <a id="login-form-link"><div className="login">LOGIN</div></a>
                  </div>
                  <div onClick={setAuthMethod} className={cx(['col-xs-6','tabs'])} style={{ cursor: "pointer" }}>
                    <a id="register-form-link"><div className="register">REGISTER</div></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<footer>*/}
        {/*<div className="container">*/}
          {/*<div className="col-md-10 col-md-offset-1 text-center">*/}
            {/*<h6 style={{fontSize: '14px', fontWeight: '100', color: '#fff'}}>Coded with <i className="fa fa-heart red" style={{color: '#BC0213'}}></i> by <a href="http://hashif.com" style={{color: '#fff'}} target="_blank">Hashif</a></h6>*/}
          {/*</div>*/}
        {/*</div>*/}
      {/*</footer>*/}
    </div>
  );
}

