import * as React from "react";
import { DraftJS, insertDataBlock } from "megadraft";
import { uploadImage } from "../../../../../../api/user";

export const BlockButton = ({ editorState, onChange }) => {

  /**
   * Async uploading images to Cloudinary
   *
   * See: https://www.youtube.com/watch?v=6uHfIv4981U
   *
   * @param {File} file - uploading file
   * @returns {Promise}
   */
  const uploadImageAsync = (file: File): Promise<any> =>
    new Promise(
      (resolve, reject) =>
        uploadImage(file)
          .then((res) => resolve({ src: res.data.secure_url }))
          .catch((err) => reject(err))
    )

  const onImageOpen = ({ target }) =>
    uploadImageAsync(target.files[0])
      .then(({ src }) => {
        const data = { "type": "image", "src": src, "caption": "", imgPosition: 'left' };
        onChange(insertDataBlock(editorState, data));
      });

  return (
    <button className="draft-leftmenu-button">
      <img src="assets/icons/picture-icon.svg"/>
      <input type="file" id="imgupload" onChange={onImageOpen}/>
    </button>
  );
};