import * as React from "react";
import AuthBar from "../../auth/containers/AuthBar";
import LogOutBar from "../../auth/containers/LogOutBar";
import { CustomModal } from "components/CustomModal/components/index";
import KnowledgeCreateForm from "modules/Cloud/components/KnowledgeCreateForm";
import { urls } from "modules/urls";
import { Navigation } from "../../navigation/components/index";
const styles = require('../styles/main.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);

/**
 * Main page's header
 */
export const Header = (props) => {
  const { modal, handleKnowledgeCreateModal, handleModal, addKnowledge, getCloudGroups, clouds, params } = props;

  const createKnowledge = () => {
    if(props.location.pathname !== `/${urls.board}`) {
      getCloudGroups();
    }
    handleKnowledgeCreateModal();
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
            <a onClick={ createKnowledge }
               className="navbar-brand"
               href="javascript:void(0)"><i className="fa fa-bolt"></i></a>
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
          isModalOpen={modal.isOpen && modal.type == 'KnowledgeCreate'}
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
      </div>
      {props.children}
    </div>
  )
};
