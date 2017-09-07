import { compose, withState, lifecycle } from 'recompose';
import { UserList } from "../components/UserList";
import { getUsersInit } from "../actions";
import { ImageBlock } from "../components/ImageBlock";
import { DEFAULT_WIDTH } from "../constants/index";

export default compose(
  withState('imgPosition', 'setImgPosition'),
  withState('imgZoom', 'handleZoom', DEFAULT_WIDTH),
)(ImageBlock);