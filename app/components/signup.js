import React from 'react'
import {form, FormControl, FormGroup, ControlLabel, HelpBlock  } from 'react-bootstrap'

export default class SignUp extends React.Component {
  
  //  FieldGroup({ id, label, help, ...props }) {
  //   return (
  //     <FormGroup controlId={id}>
  //       <ControlLabel>{label}</ControlLabel>
  //       <FormControl {...props} />
  //       {help && <HelpBlock>{help}</HelpBlock>}
  //     </FormGroup>
  //   );
  // }
  
  render() {
    return (
      <div className = "container">
        <div className = "col-md-6">
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">
            </span>
            <input type="text" className="form-control" placeholder="First Name" label="Firstname"/>
            <input type="text" className="form-control" placeholder="Last Name"/>
            <input type="email" className="form-control" placeholder="Email" label="Email"/>
            
            <div className="row">
              <div className="col-lg-6">
                <div className="input-group">
                  <span className="input-group-addon">
                    <input type="checkbox"/>
                    </span>
                    <input type="text" className="form-control"/>
                    </div>
                  </div> 
                </div>
                <button type="submit">
                  Submit
                </button>
              </div>    
            </div>
          </div>
        );
      }
    }
    
