import * as React from "react";
import CustomModal from "components/CustomModal/containers/index";
import AuthForm from "./authForm";

export const AuthBar = (props) => {
  const { handleModal, isModalOpen } = props;

  return (
    <div className="navbar-collapse collapse">
      <button style={{ width: '90px', margin: '10px' }}
              onClick={handleModal}
              className="tertiary small add">
        Log In
      </button>
      <button style={{ width: '190px' }}
              className="secondary small add">
        Create new account
      </button>

      <CustomModal
        title="Log In"
        isModalOpen={isModalOpen}
      >
        <AuthForm handleModal={handleModal}/>
      </CustomModal>
    </div>
  )
}