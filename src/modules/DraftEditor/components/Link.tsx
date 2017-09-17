/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import * as React from "react";


export default class Link extends React.Component {
  render() {
    const contentState = this.props.contentState;
    const {url} = contentState.getEntity(this.props.entityKey).getData();
    return (
      <a className="editor__link" href={url} title={url}>
        {this.props.children}
      </a>
    );
  }
}