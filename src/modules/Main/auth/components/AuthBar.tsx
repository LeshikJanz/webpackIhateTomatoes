import * as React from "react";
import CustomModal from "components/CustomModal/containers/index";
import AuthForm from "./AuthForm";
import '../styles/style.scss';

/**
 * Header authorization menu bar
 */
export const AuthBar = (props) => {
  const { handleModal, modal, handleAuthFormSubmit, goRegistrationPage } = props;

  return (
    <div className="authContainer">
      <button style={{ marginBottom: '10px' }}
              onClick={ handleModal }
              className="log-in-button tertiary">
        Log In
      </button>
      <button
        onClick={ goRegistrationPage }
        className="register-button secondary">
        Create account
      </button>

      <CustomModal
        title="Log In"
        isModalOpen={ modal.isOpen && modal.type === 'Auth' }
      >
        <AuthForm onSubmit={ handleAuthFormSubmit }
                  handleModal={ handleModal }/>
      </CustomModal>
    </div>
  )
};