import * as React from 'react';
import { CustomModal } from "components/CustomModal/components/index";
import { MODAL_TYPES } from "constants/index";
import SettingsForm from "./form/settingsForm";

export const Settings = ({ modal }) => (
  <CustomModal
    title="Settings"
    isModalOpen={modal.isOpen && modal.type == MODAL_TYPES.settings}
  >
    <SettingsForm/>
  </CustomModal>
);