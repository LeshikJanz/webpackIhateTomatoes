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
import { HEADER_HEIGHT } from "modules/DraftEditor/components/plugins/imagePlugin/constants";
import { TABLET_MINI_WIDTH } from "constants/variables";
const styles = require('../styles/main.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);

/**
 * Main page's header
 */
export const Header = (props) => {
  const {
    modal, handleKnowledgeCreateModal, handleNotAuthorizedModal,
    handleModal, addKnowledge, getClouds, clouds, params, isProfileSidebarOpened,
    closeProfileSidebar
  } = props;

  const handleSidebar = () => {
    const profileContainer = document.querySelector('.profile-container > form');
    if ( profileContainer && profileContainer.style.width !== '0px' ) {
      closeProfileSidebar();
    }
  };

  const getProfileWidth = () =>
    window.innerWidth || document.documentElement.clientWidth > TABLET_MINI_WIDTH ? '40%' : '100%';

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
      <div className="navbar-container">
        <div className="header-container">
          <div>
            <Hint name="createKnowledge"
                  text="Use this button for creating new knowledge"
            >
              <a className="navbar-lightning"
                 href="javascript:void(0)"><i onClick={ createKnowledge } className="fa fa-bolt"></i></a>
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
        <div className="profile-container">
          <Profile handleClickOutside={ handleSidebar }
                   style={{
                     position: 'fixed',
                     top: `${HEADER_HEIGHT}px`,
                     right: 0,
                     width: isProfileSidebarOpened ? 'inherit' : 0
                   }}/>
        </div>
        {props.children}
      </div>
    </div>
  )
};
