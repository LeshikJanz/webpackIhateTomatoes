import * as React from 'react';
import PropTypes = React.PropTypes;
import { urls } from "../../../../urls";
import { Link } from 'react-router';

const propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object
};

const Card = (props) => {
  const { style, item } = props;

  return (
    <div style={style} className="item" id={style ? item.id : null}>
      <div className="item-name">{item.name}</div>
      <div className="item-container">
        <div className="item-avatar-wrap">
          <img src={`https://randomuser.me/api/portraits/med/men/1.jpg`} alt="" />
        </div>
        <div className="item-content">
          <div className="item-author" title={item.accountId}>ID: {item.accountId}</div>
          <p>{item.goal}</p>
        </div>
      </div>
      <div className="actions">
        <li><Link to={ urls.cloud + '/' + item.id }>Go to cloud</Link></li>
      </div>
    </div>
  );
};

Card.propTypes = propTypes;

export default Card;
