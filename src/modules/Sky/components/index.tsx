import * as React from 'react';
import { withState } from 'recompose';
import '../styles/style.module.scss';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { ICloud, IMenu } from "interfaces";
import { SkyItem } from "./SkyItem";
import { GooeyMenu } from "components/GooeyMenu/components/GooeyMenu";
import CustomModal from "components/CustomModal/containers";
import CloudForm from "./form/cloudForm";
import ZoomPanel from "../containers/zoomContainer";
import { OPEN_BUTTON_HEIGHT, OPEN_BUTTON_WIDTH, VIEW_CONTAINER_HEIGHT } from "../constants";
import ConfirmModal from "components/ConfirmModal/containers";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const GridLayout = ({ sky, modal, params, handleModal, handleCloudFormSubmit, updateLayout, zoom, ...props }) => {
  const actionMenu: IMenu[] = [
    {
      callback: 'handleModal', arg: { type: 'CloudAdd' }, placeholder: 'Create cloud', icon: 'fa fa-menu fa-cloud'
    },
    { callback: 'handleSettings', placeholder: 'Settings', icon: 'fa fa-menu fa-cog' }
  ];

  const fitByWidth = (element: HTMLElement) => {
    const nameBlock = element.querySelector(".name");
    const openCloudButton = element.querySelector(".open-cloud");
    const reviewsCounter = element.querySelector(".reviews-counter");
    const goalBlock = element.querySelector(".goal");
    const deleteIcon = element.querySelector(".delete-icon");

    if ( element.offsetWidth - nameBlock.offsetWidth <= OPEN_BUTTON_WIDTH ) {
      [openCloudButton, reviewsCounter, goalBlock, deleteIcon].forEach(e => e.style.display = 'none');
    } else {
      [openCloudButton, reviewsCounter, goalBlock, deleteIcon].forEach(e => e.style.display = '');
    }
  };

  const fitByHeight = (element: HTMLElement) => {
    const itemFooter = element.querySelector(".item-footer");
    const nameBlock = element.querySelector(".name");
    const goalBlock = element.querySelector(".goal");
    const deleteIcon = element.querySelector(".delete-icon");

    if ( element.offsetHeight - goalBlock.offsetHeight - VIEW_CONTAINER_HEIGHT <= OPEN_BUTTON_HEIGHT ) {
      goalBlock.style.display = 'none';
    } else {
      goalBlock.style.display = '-webkit-box';
    }

    if ( element.offsetHeight - nameBlock.offsetHeight <= OPEN_BUTTON_HEIGHT ) {
      [itemFooter, deleteIcon].forEach(e => e.style.display = 'none');
    } else {
      [itemFooter, deleteIcon].forEach(e => e.style.display = '');
    }
  };

  const handleSize = (element: HTMLElement) => {
    if ( element ) {
      fitByWidth(element);
      fitByHeight(element);
    }
  };

  return (
    <div>
      <ResponsiveReactGridLayout className="layout"
                                 autoSize={false}
                                 onLayoutChange={updateLayout}
                                 onResize={(l, o, n, p, e, element) => handleSize(element.parentNode)}
                                 breakpoints={{ lg: window.innerWidth }}
                                 cols={{ lg: 48 / zoom }}
                                 rowHeight={ 10 * zoom }
      >
        {
          sky.clouds.map((c: ICloud) =>
            <div key={c.id} data-grid={ sky.layout.find(l => l.i === c.id) || { x: 0, y: 0, w: 10, h: 10 } }
                 ref={handleSize}>
              <SkyItem cloud={c} handleModal={handleModal}/>
            </div>)
        }
      </ResponsiveReactGridLayout>
      {
        !params.id &&
        <GooeyMenu onSelect={ (callback, arg) => eval(callback)(arg) } menuItems={actionMenu}/>
      }
      <CustomModal
        title="Adding cloud"
        customStyles={{ height: '700px' }}
        isModalOpen={modal.isOpen && modal.type == "CloudAdd"}
      >
        <CloudForm handleModalAction={handleModal}
                   onSubmit={handleCloudFormSubmit}
        />
      </CustomModal>

      <ConfirmModal
        handleConfirm={ () => props[modal.callback](modal.itemId) }
        isModalOpen={modal.isOpen && modal.type === 'Confirm'}
      />

      <ZoomPanel/>
    </div>
  )
};