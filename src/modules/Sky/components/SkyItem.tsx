import * as React from 'react';
import { urls } from "modules/urls";
import { Link } from 'react-router';

const OPEN_BUTTON_WIDTH = 150;

export const SkyItem = ({ cloud, isActive, handleActive }) => {
  const fitByWidth = (element: HTMLElement) => {
    const nameBlock = element.querySelector(".name");
    const openCloudButton = element.querySelector(".open-cloud");

    if(element.offsetWidth - nameBlock.offsetWidth <= OPEN_BUTTON_WIDTH) {
      openCloudButton.style.display = 'none';
    }
  }

  const fitByHeight = (element: HTMLElement) => {

  }

  const handleInitialization = (element: HTMLElement) => {
    fitByWidth(element);

  }

  return (
    <div className='sky-item-container' ref={handleInitialization}>
      <div className="item-header">
        <span className="name">{cloud.name}</span>
        <div className="open-cloud">
          <Link to={ urls.cloud + '/' + cloud.id }>
            <button className="tertiary small add">
              Open Cloud
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
};