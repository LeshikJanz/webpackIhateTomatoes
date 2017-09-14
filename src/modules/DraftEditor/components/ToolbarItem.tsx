import * as React from "react";
const styles = require('../styles/toolbar.scss');
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);
import Separator from "./Separator";


export default class ToolbarItem extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleAction(action) {
    if (action.toggle) {
      action.toggle(!action.active);
    }
  }

  render() {
    const Icon = this.props.item.icon;

    if (this.props.item.type == "separator") {
      return (
        <Separator />
      );
    }

    return (
      <li className={cx(['toolbar__item', { 'toolbar__item--active': this.props.active }])}>
        <button
          onClick={() => this.toggleAction(this.props)}
          type="button"
          className="toolbar__button">
          <Icon />
        </button>
      </li>
    );
  }
}