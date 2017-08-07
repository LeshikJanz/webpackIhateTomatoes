import * as React from 'react';
import { urls } from "modules/urls";
import { Link } from 'react-router';
import { connect } from "react-redux";
import { handleModalAction } from "modules/actions";
import { IModal } from "interfaces/index";
import { push } from "react-router-redux";
import { DEFAULT_PROFILE_IMG } from "../../../../../constants/index";

const Card = (props) => {
  const { style, item, handleModal, goToUser } = props;

  // Sorting only unic objects according to accountId key
  const renewers = item.relations.filter((rel, index, self) => self.findIndex((t) => t.accountId === rel.accountId) === index)

  return (
    <div style={style} className="item" id={style ? item.id : null}>
      <div className="item-name">
        <div className="name">{item.name}</div>
        {
          item.accountId === localStorage.getItem('UserId') &&
          <img
            onClick={() =>
          handleModal({
                       type: "Delete",
                       title: "Confirm?",
                       text: `Are you sure you want to delete <b>${item.name}?</b> This cloud will be archive and you will not see it on the Board.`,
                       itemId: item.id,
                       callback: "deleteCloud"
                      })
          }
            src="assets/icons/del.png"/>
        }

      </div>
      <div className="item-container">
        <div className="item-preview">
          <div className="item-avatar-wrap">
            <img src={item.account.avatar || DEFAULT_PROFILE_IMG} alt=""/>
          </div>
          <div className="item-content">
            <div className="item-author">{item.account.realm || item.account.username}</div>
            <div className="item-goal">{item.goal}</div>
          </div>
        </div>
      </div>
      <div className="item-name renew-actions">
        <div className="group-renewers">
          <div className="group-label">There are { renewers.length } Renewers</div>
          <div className="group_renewers_images">
            {
              renewers.map((item, i) =>
                <img key={i}
                     onClick={ () => goToUser(item.accountId) }
                     src={item.account.avatar || DEFAULT_PROFILE_IMG}
                     title={item.account.realm || item.account.username}
                     alt={item.account.realm || item.account.username}
                />
              )
            }
          </div>
        </div>
      </div>
      <div className="actions">
        <Link to={ urls.cloud + '/' + item.id }>
          <button onClick={ this.openModal } className="tertiary small add">
            Open Cloud
          </button>
        </Link>
      </div>
    </div>
  );
};


const mapDispatchToProps: any = dispatch => ({
  handleModal: (modal: IModal) => {
    dispatch(handleModalAction(modal))
  },
  goToUser: (accountId: string) => dispatch(push(`${urls.user}/${accountId}/${urls.board}`))
});

export default connect(
  null,
  mapDispatchToProps,
  null
)(Card);
