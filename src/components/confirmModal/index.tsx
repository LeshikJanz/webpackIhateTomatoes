import * as React from 'react';

export const ConfirmModal = (props) => {
  const { title, message } = props;

  return (
    <button className="reg-button">{title}</button>
  )
}