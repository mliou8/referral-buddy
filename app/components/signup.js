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
      <div>
        <form>
       
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
  );
  }
}

