import * as React from 'react';

export class ReactIgnore extends React.Component {
  shouldComponentUpdate = () => {
    console.log("shouldComponentUpdate");
    return false;
  };

  render = () => React.Children.only(this.props.children);
}
