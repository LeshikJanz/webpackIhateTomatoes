import * as React from 'react';
import '../styles/renewer.scss';

export const RenewBlock = ({ knowledge, relations, handleModal, goToUser }) => (
  <div className="renew-actions">
    { (knowledge.accountId !== localStorage.getItem('UserId')
    && !relations.find(r => r.accountId === localStorage.getItem('UserId')
    )) &&
    <button onClick={handleModal}
            className="tertiary renew-button get-knowledge-button">
      Renew
    </button>
    }
    <div className="group-renewers">
      <div className="thin-label">{ relations.length }</div>
      <div className="group_renewers_images">
        { relations.length <= 3 ?
          relations.map((item, i) =>
            <img key={i}
                 onClick={ () => goToUser(item.accountId) }
                 src={item.account.avatar}
                 title={item.account.realm || item.account.username}
                 alt={item.account.realm || item.account.username}
            />
          ) : <img src="assets/icons/group-renewers.svg" alt="Open whole renewer list"/>
        }
      </div>
    </div>
  </div>
);