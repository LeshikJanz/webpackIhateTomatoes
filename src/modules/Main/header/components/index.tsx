import * as React from "react";
import AuthBar from "../../auth/containers/AuthBar";
import LogOutBar from "../../auth/containers/LogOutBar";
import { IKnowledge } from "interfaces/index";
const styles = require('../styles/main.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);
const moment = require('moment');

/**
 * Main page's header
 */
export const Header = (props) => {

  /**
   * Get empty(default) knowledge
   *
   * @returns {IKnowledge} knowledge - default knowledge
   */
  const getEmptyKnowledge = (): IKnowledge => ({
    name: "New knowledge",
    createDate: moment(),
    updateDate: moment(),
    text: {},
    cloudId: props.cloudId
  });

  console.log('props');
  console.log(props);

  return (
    <div className={cx([{ 'blur': props.isModalOpen }])}>
      <div className="navbar navbar-default">
        <div className="header-container">
          <div>
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a onClick={() => { props.handleKnowledgeCreateModal() }}
               className="navbar-brand"
               href="javascript:void(0)"><i className="fa fa-bolt"></i></a>
          </div>
          <div id="hello">
            <h2>Hurry up to fill your Big Head up. <br/>
              World's knowledge is here!
            </h2>
          </div>
          <div>
            {
              !localStorage.getItem('Token') ?
                <AuthBar/> : <LogOutBar/>
            }
          </div>
        </div>
        {/*<CustomModal*/}
          {/*title="Adding knowledge"*/}
          {/*isModalOpen={modal.isOpen && modal.type == 'CloudGroupAdd'}*/}
        {/*>*/}
          {/*<KnowledgeCreateForm*/}
            {/*clouds={clouds}*/}
            {/*handleModalAction={handleModal}*/}
            {/*onSubmit={handleKnowledgeCreateFormSubmit}*/}
          {/*/>*/}
        {/*</CustomModal>*/}
      </div>
      {props.children}
    </div>
  )
}
