import * as React from 'react';

export const RenewBlock = ({ knowledge, relations, handleModal, goToUser }) => (
  <div className="renew-actions" style={{ visibility: 'hidden' }}>
    { (knowledge.accountId !== localStorage.getItem('UserId')
    && !relations.find(r => r.accountId === localStorage.getItem('UserId')
    )) &&
    <button onClick={handleModal}
            className="tertiary small get-knowledge-button">
      Renew
    </button>
    }
    <div className="group-renewers">
      <div className="group-label">{ relations.length } Renewers</div>
      <div className="group_renewers_images">
        {
          relations.map((item, i) =>
            <img key={i}
                 onClick={ () => goToUser(item.accountId) }
                 src={item.account.avatar}
                 title={item.account.realm || item.account.username}
                 alt={item.account.realm || item.account.username}
            />
          )
        }
      </div>
    </div>
  </div>
)