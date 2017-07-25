import * as React from "react";
import RegistrationForm from "./RegistrationForm";

/**
 * Registration page
 */
export const Registration = (props) => (
  <RegistrationForm
    onSubmit={props.handleRegistrationFormSubmit}
  />
)