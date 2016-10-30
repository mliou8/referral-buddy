import React from 'react';

export default class SignUp extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    console.log("yay")
  }
  render() {
    return (
      <div className="container">
        <div className="col-md-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="First Name" label="Firstname"/>
            <input type="text" className="form-control" placeholder="Last Name"/>
            <input type="email" className="form-control" placeholder="Email" label="Email"/>
            <input type="password" className="form-control" placeholder="Password" label="Password"/>
            <input type="password" className="form-control" placeholder="Confirm Password" label="ConfirmPassword"/>
          </div>  
          <div className="input-group">
              <p>
                Jobs I'm Interested In:
              </p>
              <span className="input-group">
                <input type="checkbox" name="FrontEnd"/>
                <label htmlFor="FrontEnd">Front End</label>
              </span>
              <span className="input-group">
                <input type="checkbox" name="BackEnd"/>
                <label htmlFor="BackEnd">Back End</label>
              </span>
              <span className="input-group">
                <input type="checkbox" name="FullStack"/>
                <label htmlFor="FullStack">Full Stack</label>
              </span>
              <button type="submit" onClick={this.onSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )
      }
    }