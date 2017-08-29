import * as React from 'react';
import { withState } from 'recompose';
import '../styles/style.module.scss';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { ICloud, IMenu } from "interfaces/index";
import { SkyItem } from "./SkyItem";
import { GooeyMenu } from "components/GooeyMenu/components/GooeyMenu";
import CustomModal from "components/CustomModal/containers";
import CloudForm from "./form/cloudForm";
import ZoomPanel from "../containers/zoomContainer";
import { OPEN_BUTTON_HEIGHT, OPEN_BUTTON_WIDTH } from "../constants/index";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const GridLayout = ({ sky, modal, params, handleModal, handleCloudFormSubmit, updateLayout, zoom }) => {
  const actionMenu: IMenu[] = [
    { callback: 'handleModal', arg: 'CloudAdd', placeholder: 'Create cloud', icon: 'fa fa-menu fa-cloud' },
    { callback: 'handleSettings', placeholder: 'Settings', icon: 'fa fa-menu fa-cog' }
  ];

  const fitByWidth = (element: HTMLElement) => {
    const nameBlock = element.querySelector(".name");
    const openCloudButton = element.querySelector(".open-cloud");
    const viewsCounter = element.querySelector(".views-counter");
    const reviewsCounter = element.querySelector(".reviews-counter");

    if (element.offsetWidth - nameBlock.offsetWidth <= OPEN_BUTTON_WIDTH) {
      openCloudButton.style.display = reviewsCounter.style.display = 'none';
    } else {
      openCloudButton.style.display = reviewsCounter.style.display = 'flex';
    }
  }
  const fitByHeight = (element: HTMLElement) => {
    const itemFooter = element.querySelector(".item-footer");
    const nameBlock = element.querySelector(".name");

    if (element.offsetHeight - nameBlock.offsetHeight <= OPEN_BUTTON_HEIGHT) {
      itemFooter.style.display = 'none';
    } else {
      itemFooter.style.display = 'flex';
    }
  }

  const handleSize = (element: HTMLElement) => {
    if (element) {
      fitByWidth(element);
      fitByHeight(element);
    }
  };

  return (
    <div>
      <ResponsiveReactGridLayout className="layout"
                                 layout={sky.layout}
                                 onLayoutChange={updateLayout}
                                 onResize={(l, o, n, p, e, element) => handleSize(element.parentNode)}
                                 breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                                 cols={{ lg: 12 / zoom, md: 8 / zoom, sm: 4 / zoom, xs: 2 / zoom, xxs: 1 }}
                                 rowHeight={100 * zoom}
      >
        {
          sky.clouds.map((c: ICloud) =>
            <div key={c.id} data-grid={ sky.layout.find(l => l.i === c.id) || { x: 0, y: 0, w: 2, h: 2 } }
                 ref={handleSize}>
              <SkyItem cloud={c}/>
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

      <ZoomPanel/>
    </div>
  )
};