import React, { useState } from 'react';

function Register({ onRouteChange, loadUser }) {

  const [registerEmail, setEmail] = useState('');
  const [registerPassword, setPassword] = useState('');
  const [registerName, setName] = useState('');

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function onNameChange(event) {
    setName(event.target.value);
  }  

  function onSubmit() {
    // fetch('https://8p4d6k6qei.execute-api.ap-south-1.amazonaws.com/dev/user/register', {
    //   method: 'post',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({
    //     email: registerEmail,
    //     password: registerPassword,
    //     name: registerName 
    //   })
    // })
    //   .then(response => response.json())
    //   .then(user => {
    //     if (user._id) {
    //       loadUser(user);
    //       onRouteChange('home');
    //     }
    //   })

    console.log(registerEmail);
    console.log(registerPassword);
    console.log(registerName);
  }

  return (
    <div>
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={onSubmit}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
      <p>You can register through the Face Detection App and use the same email and password to sign in here:
      <a style={{color: 'white'}} href="http://localhost:8080/">Register here</a>
      </p>
    </div>
  );
}

export default Register;