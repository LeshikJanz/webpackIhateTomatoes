import * as React from "react";
import AuthBar from "../../auth/containers/AuthBar";
import LogOutBar from "../../auth/containers/LogOutBar";
import { CustomModal } from "components/CustomModal/components/index";
import KnowledgeCreateForm from "modules/Cloud/components/KnowledgeCreateForm";
import { urls } from "urls";
import Navigation from "modules/Main/navigation/containers";
import Hint from "components/Hint/containers";
import ConfirmModal from "components/ConfirmModal/containers";
import { MODAL_TYPES } from "constants/index";
import Profile from 'modules/Profile/containers';
const styles = require('../styles/main.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);

/**
 * Main page's header
 */
export const Header = (props) => {
  const {
    modal, handleKnowledgeCreateModal, handleNotAuthorizedModal,
    handleModal, addKnowledge, getClouds, clouds, params, isProfileSidebarOpened
  } = props;

  const createKnowledge = () => {
    if ( props.location.pathname !== `/${urls.board}` ) {
      getClouds();
    }
    localStorage.getItem('UserId') ? handleKnowledgeCreateModal() : handleNotAuthorizedModal();
  };

  return (
    <div className={cx([{ 'blur': modal.isOpen }])}>
      {
        localStorage.getItem('UserId') && <Navigation />
      }
      <div className="navbar navbar-default">
        <div className="header-container">
          <div>
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Hint name="createKnowledge"
                  text="Use this button for creating new knowledge"
            >
              <a onClick={ createKnowledge }
                 className="navbar-brand"
                 href="javascript:void(0)"><i className="fa fa-bolt"></i></a>
            </Hint>
          </div>
          <div id="hello">
            <h2>Hurry up to fill your Big Head up. <br/>
              World's knowledge is here!
            </h2>
          </div>
          <div className="profile-bar">
            {
              !localStorage.getItem('Token') ?
                <AuthBar/> : <LogOutBar/>
            }
          </div>
        </div>
        <CustomModal
          title="Adding knowledge"
          isModalOpen={modal.isOpen && modal.type === MODAL_TYPES.knowledgeCreate}
          handleModal={handleModal}
        >
          <KnowledgeCreateForm
            cloudId={params && params.id}
            clouds={clouds.map(
              o => ({
                ...o,
                label: o.name,
                value: o.id,
              }))}
            handleModal={handleModal}
            onSubmit={addKnowledge}
          />
        </CustomModal>
        <ConfirmModal
          handleConfirm={handleModal}
          hideCancelButton={true}
          confirmLabel='OK'
          isModalOpen={modal.isOpen && modal.type === MODAL_TYPES.notAuthorized}
        />
        <ConfirmModal
          handleConfirm={handleModal}
          hideCancelButton={true}
          confirmLabel='OK'
          isModalOpen={modal.isOpen && modal.type === MODAL_TYPES.successfulRegistration}
        />
      </div>
      <Profile style={{ position: 'fixed', right: 0, width: isProfileSidebarOpened ? '40%' : 0 }}/>
      {props.children}
    </div>
  )
};
