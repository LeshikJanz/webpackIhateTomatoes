import * as React from 'react';
import { withState } from 'recompose';
import '../styles/style.scss';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { ICloud, IMenu } from "interfaces";
import SkyItem from "../containers/skyItemContainer";
import { GooeyMenu } from "components/GooeyMenu/components/GooeyMenu";
import CustomModal from "components/CustomModal/containers";
import CloudForm from "./form/cloudForm";
import ZoomPanel from "../containers/zoomContainer";
import { OPEN_BUTTON_HEIGHT, OPEN_BUTTON_WIDTH, VIEW_CONTAINER_HEIGHT } from "../constants";
import ConfirmModal from "components/ConfirmModal/containers";
import { urls } from "urls";
import { MODAL_TYPES } from "constants/index";
import SkyUserProfile from "../containers/skyUserProfile";
import SettingsModal from "../containers/settingsModal";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const GridLayout = ({
                             sky, modal, params, handleModal, handleCloudFormSubmit, updateLayout, zoom,
                             route, openCloud, ...props
                           }) => {
  const actionMenu: IMenu[] = [
    {
      callback: 'handleModal',
      arg: { type: MODAL_TYPES.cloudAdd },
      placeholder: 'Create cloud',
      icon: 'fa fa-menu fa-cloud'
    },
    { callback: 'handleSettings', placeholder: 'Settings', icon: 'fa fa-menu fa-cog' }
  ];

  const globalSettings = JSON.parse(localStorage.getItem('Account')).settings;

  const handleSettings = () =>
    handleModal({ type: MODAL_TYPES.settings });

  const fitByWidth = (element: HTMLElement) => {
    const nameBlock = element.querySelector(".name");
    const openCloudButton = element.querySelector(".open-cloud");
    const reviewsCounter = element.querySelector(".reviews-counter");
    const goalBlock = element.querySelector(".goal");
    const deleteIcon = element.querySelector(".delete-icon") || document.createElement('div');

    element.offsetWidth - nameBlock.offsetWidth <= OPEN_BUTTON_WIDTH ?
      [openCloudButton, reviewsCounter, goalBlock, deleteIcon].forEach(e => e.style.display = 'none') :
      [openCloudButton, reviewsCounter, goalBlock, deleteIcon].forEach(e => e.style.display = '');
  };

  const fitByHeight = (element: HTMLElement) => {
    const itemFooter = element.querySelector(".item-footer");
    const nameBlock = element.querySelector(".name");
    const goalBlock = element.querySelector(".goal");
    const deleteIcon = element.querySelector(".delete-icon") || document.createElement('div');

    element.offsetHeight - goalBlock.offsetHeight - VIEW_CONTAINER_HEIGHT <= OPEN_BUTTON_HEIGHT ?
      goalBlock.style.display = 'none' : goalBlock.style.display = '-webkit-box';

    element.offsetHeight - nameBlock.offsetHeight <= OPEN_BUTTON_HEIGHT ?
      [itemFooter, deleteIcon].forEach(e => e.style.display = 'none') :
      [itemFooter, deleteIcon].forEach(e => e.style.display = '')
  };

  const handleSize = (element: HTMLElement) => {
    if (element) {
      fitByWidth(element);
      fitByHeight(element);
    }
  };

  return (
    <div className="sky-container">
      <ResponsiveReactGridLayout className="layout"
                                 autoSize={false}
                                 verticalCompact={globalSettings.verticalCompactEnabled}
                                 onLayoutChange={route === `/${urls.board}` ? updateLayout : () => null}
                                 onResize={(l, o, n, p, e, element) => handleSize(element.parentNode)}
                                 breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 600, xxs: 0 }}
                                 cols={{ lg: 24 / zoom, md: 20 / zoom, sm: 12 / zoom, xs: 8 / zoom, xxs: 4 / zoom }}
                                 rowHeight={ 10 * zoom }
      >
        {
          sky.clouds.map((c: ICloud) =>
            <div key={c.id}
                 data-grid={ sky.layout.find(l => l.i === c.id) || { x: 0, y: 0, w: 4, h: 5, minW: 2, minH: 5 } }
                 ref={handleSize}
                 onDoubleClick={() => openCloud(c.id)}
            >
              <SkyItem cloud={c}/>
            </div>)
        }
      </ResponsiveReactGridLayout>
      {
        params.id ?
          <SkyUserProfile/> :
          <GooeyMenu onSelect={ (callback, arg) => eval(callback)(arg) } menuItems={actionMenu}/>
      }
      <CustomModal
        title="Adding cloud"
        customStyles={{ height: '700px' }}
        isModalOpen={modal.isOpen && modal.type == MODAL_TYPES.cloudAdd}
      >
        <CloudForm handleModalAction={handleModal}
                   onSubmit={handleCloudFormSubmit}
        />
      </CustomModal>

      <ConfirmModal
        handleConfirm={ () => props[modal.callback](modal.itemId) }
        isModalOpen={modal.isOpen && modal.type === MODAL_TYPES.confirm}
      />
      <SettingsModal/>

      {/*<ZoomPanel/>*/}
    </div>
  )
};