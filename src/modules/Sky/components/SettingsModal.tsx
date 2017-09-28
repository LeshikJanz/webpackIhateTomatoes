import * as React from 'react';
import { CustomModal } from "components/CustomModal/components/index";
import { MODAL_TYPES } from "constants/index";
import SettingsShortForm from "./form/settingsShortForm";

export const SettingsModal = ({ modal, handleSettingsSubmit, handleModal, goToSettings }) => (
  <CustomModal
    title="Settings"
    handleModal={handleModal}
    isModalOpen={modal.isOpen && modal.type == MODAL_TYPES.settings}
  >
    <SettingsShortForm
      goToSettings={goToSettings}
      handleModalAction={ handleModal }
      onSubmit={ handleSettingsSubmit }/>
  </CustomModal>
);