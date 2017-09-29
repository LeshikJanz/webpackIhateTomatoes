import * as React from 'react';
const Dropzone = require('react-dropzone');

/**
 * Dropzone input for Redux Form Field
 */
export const DropzoneField = ({ avatar, loading, handleImageUpload }) => {
  const onDrop = (acceptedFiles, rejectedFiles) => {
    if ( acceptedFiles.length ) {
      handleImageUpload(acceptedFiles[0]);
    }
  };

  return (
    <Dropzone onDrop={ onDrop }
              accept="image/jpeg, image/png, image/svg"
              className="dropzone-area"
              activeClassName="dropzone-area-active"
              rejectClassName="dropzone-area-reject">
      {
        avatar ? <img src={avatar}/> :
          <div>
            { !loading &&
            <p className="default">Drag n drop a profile picture here or&nbsp;
              <ins>browse for one on your computer</ins>
            </p>
            }
            { loading &&
            <p>
              Uploading...
            </p>
            }
            <p className="reject-warning">
              Supports only JPEG, PNG, SVG formats
            </p>
          </div>
      }
    </Dropzone>
  )
};