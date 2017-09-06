import { compose, withState, lifecycle } from 'recompose';
import { UserList } from "../components/UserList";
import { getUsersInit } from "../actions";
import { ImageBlock } from "../components/ImageBlock";

export default compose(
  withState('imgPosition', 'setImgPosition')
)(ImageBlock);
