import * as React from "react";
import { DraftJS, insertDataBlock } from "megadraft";
import { uploadImage } from "api/user";

export const BlockButton = ({ editorState, onChange }) => {

  /**
   * Async uploading images to Cloudinary
   *
   * See: https://www.youtube.com/watch?v=6uHfIv4981U
   *
   * @param {File} file - uploading file
   * @returns {Promise}
   */
  const uploadImageAsync = (file: File): Promise<any> => {
    const blobUrl = URL.createObjectURL(file);
    const data = { "type": "image", "src": blobUrl, "caption": "", imgPosition: 'left', isLoading: true };
    onChange(insertDataBlock(editorState, data));

    return new Promise(
      (resolve, reject) =>
        uploadImage(file)
          .then((res) => resolve({ src: res.data.link }))
          .catch((err) => reject(err))
    );
  };

  const onImageOpen = ({ target }) =>
    uploadImageAsync(target.files[0])
      .then(({ src }) => {
        const data = { "type": "image", "src": src, "caption": "", imgPosition: 'left', isLoading: false };
        onChange(insertDataBlock(editorState, data));
      });

  return (
    <button className="draft-leftmenu-button">
      <img src="assets/icons/picture-icon.svg"/>
      <input type="file" id="imgupload" onChange={onImageOpen} accept="image/jpeg,image/png,image/gif,image/svg"/>
    </button>
  );
};