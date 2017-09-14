import { DEFAULT_WIDTH } from "../modules/DraftEditor/components/plugins/imagePlugin/constants/index";
import { uploadImage } from "./user";
import { insertDataBlock } from "megadraft";

/**
 * Async uploading images to Imagur
 *
 * See: https://www.youtube.com/watch?v=6uHfIv4981U
 *
 * @param {File} file - uploading file
 * @param editorState
 * @param onChange
 * @returns {Promise}
 */
export const uploadImageAsync = (file: File, editorState, onChange): Promise<any> => {
  const blobUrl = URL.createObjectURL(file);
  const data = {
    "type": "image",
    "src": blobUrl,
    "caption": "",
    imgPosition: 'center',
    width: DEFAULT_WIDTH,
    isLoading: true
  };
  // Adding preview blob file original is uploading
  onChange(insertDataBlock(editorState, data));

  return new Promise(
    (resolve, reject) =>
      uploadImage(file)
        .then((res) => {
          // Deleting preview file while original is uploading
          onChange(editorState);
          return resolve({ src: res.data.link })
        })
        .catch((err) => reject(err))
  );
};