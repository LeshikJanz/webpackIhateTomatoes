import * as React from 'react';
import { urls } from "urls";
import { Link } from 'react-router';
import Hint from "components/Hint/containers";
const SVG = require('react-svg');

export const SkyItem = ({ cloud, handleModal, route }) => (
  <div className='sky-item-container'>
    <div className="item-header">
      <Hint text={`This is your ${cloud.name} cloud! \n Hint: Double click for opening`}
            style={{ paddingLeft: '10px', }}>
        <span className="name">{cloud.name}</span>
      </Hint>
      <div className="open-cloud">
        <SVG path="assets/icons/open-cloud-collapsed.svg" className="open-cloud-collapsed"/>
        <Link to={ urls.cloud + '/' + cloud.id }>
          <button className="tertiary small add">
            Open Cloud
          </button>
        </Link>
      </div>
    </div>
    <div className="goal thin-label">
      {cloud.goal}
    </div>
    <div className="item-footer">
      <div className="views-counter">
        <SVG path="assets/icons/views.svg" className="counter-icon"/>
        <div className="thin-label">{cloud.views.length}</div>
      </div>
      <div className="reviews-counter">
        <SVG path="assets/icons/review.svg" className="counter-icon"/>
        <div className="thin-label">0</div>
      </div>
    </div>
    {
      route === `/${urls.board}` &&
      <div className="delete-icon"
           onClick={() =>
             handleModal({
               type: "Confirm",
               title: "Confirm?",
               text: `Are you sure you want to delete <b>${cloud.name}?</b> This cloud will be archive and you will not see it on the Board.`,
               itemId: cloud.id,
               callback: "deleteCloud"
             })
           }
      >
        <SVG path="assets/icons/deleteHat.svg" className="delete-hat"/>
        <SVG path="assets/icons/deleteBox.svg" className="delete-box"/>
      </div>
    }
  </div>
);