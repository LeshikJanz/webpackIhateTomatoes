import * as React from "react";
import RegistrationForm from "../containers/RegistrationForm";

/**
 * Registration page
 */
export const Registration = ( props ) => (
  <RegistrationForm
    onSubmit={ props.handleRegistrationFormSubmit }
  />
)