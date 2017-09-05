import * as React from "react";
import { DraftJS, insertDataBlock } from "megadraft";
import { uploadImage } from "api/user";

export default class BlockButton extends React.Component {

  /**
   * Async uploading images to Cloudinary
   *
   * See: https://www.youtube.com/watch?v=6uHfIv4981U
   *
   * @param {File} file - uploading file
   * @returns {Promise}
   */
  uploadImageAsync(file: File): Promise<any> {
    return new Promise(
      (resolve, reject) =>
        uploadImage(file)
          .then((res) => resolve({ src: res.data.secure_url }))
          .catch((err) => reject(err))
    )
  }

  onImageOpen = ({ target }) =>
    this.uploadImageAsync(target.files[0])
      .then(({ src }) => {
        const data = { "type": "image", "src": src };
        this.props.onChange(insertDataBlock(this.props.editorState, data));
      });

  render() {
    return (
      <button className="draft-leftmenu-button">
        <img src="assets/icons/picture-icon.svg"/>
        <input type="file" id="imgupload" onChange={this.onImageOpen}/>
      </button>
    );
  }
}