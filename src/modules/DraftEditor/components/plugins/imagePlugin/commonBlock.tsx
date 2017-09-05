import React, {Component} from "react";
import {MegadraftPlugin} from "megadraft";
const {BlockContent, BlockData, BlockInput, CommonBlock} = MegadraftPlugin;

export default class ImageBlock extends Component {
  render(){
    return (
      <CommonBlock {...this.props}>
        <BlockContent>
          <img src={this.props.data.src} />
        </BlockContent>

        <BlockData>
          <BlockInput placeholder="Enter an image caption" />
        </BlockData>
      </CommonBlock>
    );
  }
}