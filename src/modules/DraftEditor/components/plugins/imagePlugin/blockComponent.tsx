import * as React from "react";

export default class ImageBlock extends React.Component {
  render(){
    return (
      <img src={this.props.data.src} />
    );
  }
}