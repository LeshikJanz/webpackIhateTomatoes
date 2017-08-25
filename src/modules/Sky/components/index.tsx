import * as React from 'react';
import { withState } from 'recompose';
import '../styles/style.module.scss';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { ICloud, IMenu } from "interfaces/index";
import { SkyItem } from "./SkyItem";
import { GooeyMenu } from "components/GooeyMenu/components/GooeyMenu";
import CustomModal from "components/CustomModal/containers";
import CloudForm from "./form/cloudForm";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const GridLayout = ({ clouds, modal, params, handleModal, handleCloudFormSubmit }) => {

  const actionMenu: IMenu[] = [
    // { callback: 'openModal', arg: 'CloudGroupAdd', placeholder: 'Create cloud group', icon: 'fa fa-menu fa-sitemap' },
    { callback: 'openModal', arg: 'CloudAdd', placeholder: 'Create cloud', icon: 'fa fa-menu fa-cloud' }
  ];

  const handleDrag = (layout) => {
    console.log('layout');
    console.log(layout);
  };

  const openModal = (type) => {
    handleModal({ type });
    console.log('openModal');
  }

  return (
    <div>
      <ResponsiveReactGridLayout className="layout" onDragStop={handleDrag}
                                 breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                                 cols={{lg: 12, md: 8, sm: 4, xs: 2, xxs: 1}}>

        {
          clouds.map((c: ICloud) => <div key={c.id} data-grid={{w: 2, h: 2, x: 0, y: 0}}>
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
    </div>

  )
};