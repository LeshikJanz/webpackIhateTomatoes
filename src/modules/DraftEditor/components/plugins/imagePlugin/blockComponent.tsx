import * as React from "react";
import { MegadraftPlugin } from "megadraft";
const { BlockContent, BlockData, BlockInput, CommonBlock } = MegadraftPlugin;
import { DraftJS, insertDataBlock } from "megadraft";

export default class ImageBlock extends React.Component {


  render() {

    const { blockProps: { editorState, onChange }, container: { updateData } } = this.props;

    const handleCaptionChange = ({ target }) => {
      this.props.container.updateData({caption: target.value});
    }

    console.log('this.props.data');
    console.log(this.props.data);

    return (
      <div>
        <BlockContent>
          <img src={this.props.data.src}/>
        </BlockContent>

        <BlockData>
          <BlockInput placeholder="Enter an image caption"
                      value={this.props.data.caption}
                      onChange={handleCaptionChange}/>
        </BlockData>
      </div>
    );
  }
}