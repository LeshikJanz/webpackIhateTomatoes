import * as React from 'react';
import { urls } from "modules/urls";
import { Link } from 'react-router';
import { connect } from "react-redux";
import { handleModalAction } from "modules/actions";
import { IModal } from "interfaces/index";

const Card = (props) => {
  const { style, item, handleModal } = props;

  return (
    <div style={style} className="item" id={style ? item.id : null}>
      <div className="item-name">
        <div>{item.name}</div>
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
      </div>
      <div className="item-container">
        <div className="item-avatar-wrap">
          <img src={`https://randomuser.me/api/portraits/med/men/1.jpg`} alt=""/>
        </div>
        <div className="item-content">
          <div className="item-author" title={item.accountId}>ID: {item.accountId}</div>
          <p>{item.goal}</p>
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
  }
});

export default connect(
  null,
  mapDispatchToProps,
  null
)(Card);
