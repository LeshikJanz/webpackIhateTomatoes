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
import { DEFAULT_ZOOM } from "../constants/index";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const GridLayout = ({ sky, modal, params, handleModal, handleCloudFormSubmit, updateSky, zoom }) => {
  const actionMenu: IMenu[] = [
    { callback: 'handleModal', arg: 'CloudAdd', placeholder: 'Create cloud', icon: 'fa fa-menu fa-cloud' },
    { callback: 'handleSettings', placeholder: 'Settings', icon: 'fa fa-menu fa-cog' }
  ];

  return (
    <div>
      <ResponsiveReactGridLayout className="layout"
                                 onLayoutChange={updateSky}
                                 breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                                 cols={{ lg: 12 / zoom, md: 8 / zoom, sm: 4 / zoom, xs: 2 / zoom, xxs: 1 }}
                                 rowHeight={150 * zoom}
      >
        {
          sky.clouds.map((c: ICloud) =>
            <div key={c.id} data-grid={ sky.layout.find(l => l.i === c.id) }>
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