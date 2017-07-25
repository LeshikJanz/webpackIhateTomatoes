import * as React from "react";
import RegistrationForm from "./RegistrationForm";

export const Registration = (props) => {

  return (
    <div>
      <RegistrationForm
        onSubmit={props.handleRegistrationFormSubmit}
      />
    </div>
  )
};