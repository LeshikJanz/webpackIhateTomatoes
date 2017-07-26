import * as React from "react";
import CustomModal from "components/CustomModal/containers/index";
import AuthForm from "./AuthForm";

/**
 * Header authorization menu bar
 */
export const AuthBar = ( props ) => {
  const { handleModal, isModalOpen, handleAuthFormSubmit, goRegistrationPage } = props;

  return (
    <div>
      <button style={{ width: '90px', marginBottom: '10px' }}
              onClick={ handleModal }
              className="tertiary small add">
        Log In
      </button>
      <button
        onClick={ goRegistrationPage }
        style={{ width: '190px' }}
        className="secondary small add">
        Create new account
      </button>

      <CustomModal
        title="Log In"
        isModalOpen={ isModalOpen }
      >
        <AuthForm onSubmit={ handleAuthFormSubmit }
                  handleModal={ handleModal }/>
      </CustomModal>
    </div>
  )
}