import * as React from 'react';
import { urls } from "modules/urls";
import { Link } from 'react-router';

const Card = (props) => {
  const { style, item } = props;

  return (
    <div style={style} className="item" id={style ? item.id : null}>
      <div className="item-name">{item.name}</div>
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

export default Card;
