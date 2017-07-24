import * as React from "react";
import { CustomModal } from "../../../../components/CustomModal/components/index";

export const AuthBar = (props) => {

  return (
    <div className="navbar-collapse collapse">
      <button style={{ width: '90px', margin: '10px' }}
              className="tertiary small add">
        Log In
      </button>
      <button style={{ width: '190px' }}
              className="secondary small add">
        Create new account
      </button>

      {true === false &&
        <CustomModal
          title="Log In"
          isModalOpen={this.props.isModalOpen}
        >
        </CustomModal>
      }
    </div>
  )
}