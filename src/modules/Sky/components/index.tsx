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
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const OPEN_BUTTON_WIDTH = 170;

export const GridLayout = ({ sky, modal, params, handleModal, handleCloudFormSubmit, updateLayout, zoom }) => {
  const actionMenu: IMenu[] = [
    { callback: 'handleModal', arg: 'CloudAdd', placeholder: 'Create cloud', icon: 'fa fa-menu fa-cloud' },
    { callback: 'handleSettings', placeholder: 'Settings', icon: 'fa fa-menu fa-cog' }
  ];

  const fitByWidth = (element: HTMLElement) => {
    const nameBlock = element.querySelector(".name");
    const openCloudButton = element.querySelector(".open-cloud");

    if ( element.offsetWidth - nameBlock.offsetWidth <= OPEN_BUTTON_WIDTH ) {
      openCloudButton.style.display = 'none';
    } else {
      openCloudButton.style.display = 'block';
    }
  }

  const fitByHeight = (element: HTMLElement) => {

  }

  const handleSize = (element: HTMLElement) => {
    if ( element ) {
      fitByWidth(element);
      fitByHeight(element);
    }
  }

  const handleItemClick = ({ target }) => {
    console.log('handleItemClick');
    console.log(target);
  };


  return (
    <div>
      <ResponsiveReactGridLayout className="layout"
                                 onLayoutChange={updateLayout}
                                 onResize={(l, o, n, p, e, element) => handleSize(element.parentNode)}
                                 breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                                 cols={{ lg: 12 / zoom, md: 8 / zoom, sm: 4 / zoom, xs: 2 / zoom, xxs: 1 }}
                                 rowHeight={100 * zoom}
      >
        {
          sky.clouds.map((c: ICloud) =>
            <div key={c.id} data-grid={ sky.layout.find(l => l.i === c.id) } ref={handleSize} onClick={handleItemClick}>
              <SkyItem cloud={c} />
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