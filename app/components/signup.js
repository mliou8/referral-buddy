import React from 'react';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  onSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="container">
        <div className="col-md-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="This is a Name" label="Firstname" value={this.state.value}/>
            <input type="text" className="form-control" placeholder="Last Name"/>
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
              <button type="submit" onClick={this.onSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )
      }
    }