import React from 'react';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    console.log("the current state is ", this.state);
  }
  handleSubmit(e) {
    alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
  }
  render() {
    return (
      <div className="container">
        <div className="col-md-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="First Name" label="Firstname"/>
            <input type="text" className="form-control" placeholder="Last Name" value={this.state.value}/>
            <input type="email" className="form-control" placeholder="Email" label="Email"/>
            <input type="password" className="form-control" placeholder="Password" label="Password"/>
            <input type="password" className="form-control" placeholder="Confirm Password" label="ConfirmPassword"/>
          </div>  
          <div className="input-group">
              <p>
                Positions I'm Interested In:
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
              <button type="submit" onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )
      }
    }