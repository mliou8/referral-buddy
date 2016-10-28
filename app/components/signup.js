import React from 'react'
import {form, FormControl, FormGroup, ControlLabel, HelpBlock  } from 'react-bootstrap'

class SignUp extends React.Component {
  
  //  FieldGroup({ id, label, help, ...props }) {
  //   return (
  //     <FormGroup controlId={id}>
  //       <ControlLabel>{label}</ControlLabel>
  //       <FormControl {...props} />
  //       {help && <HelpBlock>{help}</HelpBlock>}
  //     </FormGroup>
  //   );
  // }
  let variabel = 6;
  render() {
    return (
      <div>
        <form>
        <FieldGroup
          id="formControlsText"
          type="text"
          label="Text"
          placeholder="Enter text"
          />
        
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
  );
  }
}

export default SignUp