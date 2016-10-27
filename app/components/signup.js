import React from 'react'
// import Form from 'muicss/lib/react/form';
// import Input from 'muicss/lib/react/input';
// import Textarea from 'muicss/lib/react/textarea';
// import Button from 'muicss/lib/react/button';
import {form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'

export default class SignUp extends React.Component {
  
  function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
  }

  render() {
    return (
      <div>
      <div className="col-md-3"> 
        <h1> Signup Form </h1>
        <form>
          <FormGroup>
            <div className="row">
            <div className="col-md-6">
              <FieldGroup
                type="text"
                label="First Name"
                placeholder="First Name"
              />
            </div>
            <div className="col-md-6">
              <FieldGroup
                type="text"
                label="Last Name"
                placeholder="Last Name"
              />
            </div>
            </div>
            <FieldGroup
              type="email"
              label="Email Address"
              placeholder="Enter email"
            />
          <FieldGroup
              type="password"
              label="Password"
              placeholder="password"
            />
          </FormGroup>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
}