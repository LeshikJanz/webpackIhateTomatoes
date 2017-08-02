import * as React from 'react';
import { DropTarget, DragSource } from 'react-dnd';
import Cards from './Cards';
import PropTypes = React.PropTypes;
import { connect } from "react-redux";
import { handleModalAction } from "modules/actions";
import { IModal, ICloudGroup, IUser } from "interfaces/index";
import { updateAccountInit } from "../../../actions";

const listSource = {
  beginDrag(props) {
    return {
      id: props.id,
      x: props.x
    };
  },
  endDrag(props) {
    const user = {
      id: localStorage.getItem('UserId'),
      cloudGroupOrders: props.lists.reduce((sum, c: ICloudGroup) => sum.concat(c.id), [])
    };
    props.updateUser(user);

    props.stopScrolling();
  }
};

const listTarget = {
  canDrop() {
    return false;
  },
  hover(props, monitor) {
    if ( !props.isScrolling ) {
      if ( window.innerWidth - monitor.getClientOffset().x < 200 ) {
        props.startScrolling('toRight');
      } else if ( monitor.getClientOffset().x < 200 ) {
        props.startScrolling('toLeft');
      }
    } else {
      if ( window.innerWidth - monitor.getClientOffset().x > 200 &&
        monitor.getClientOffset().x > 200
      ) {
        props.stopScrolling();
      }
    }
    const { id: listId } = monitor.getItem();
    const { id: nextX } = props;
    if ( listId !== nextX ) {
      props.moveList(listId, props.x);
    }
  }
};

@DropTarget('list', listTarget, connectDragSource => ({
  connectDropTarget: connectDragSource.dropTarget(),
}))
@DragSource('list', listSource, (connectDragSource, monitor) => ({
  connectDragSource: connectDragSource.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class CardsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    item: PropTypes.object,
    x: PropTypes.number,
    moveCard: PropTypes.func.isRequired,
    moveList: PropTypes.func.isRequired,
    isDragging: PropTypes.bool,
    startScrolling: PropTypes.func,
    stopScrolling: PropTypes.func,
    isScrolling: PropTypes.bool
  };

  render() {
    const {
      connectDropTarget, connectDragSource, item, x, moveCard, update, isDragging,
      handleModal, lists
    } = this.props;

    item.cards = item.clouds;

    const opacity = isDragging ? 0.5 : 1;

    return connectDragSource(connectDropTarget(
      <div className="desk" style={{ opacity }}>
        <div className="desk-head">
          <div className="desk-name">{item.name}</div>
          {
            (!item.cards.length && lists.length > 1) &&
            <img onClick={ () => {
              handleModal({
                            type: "Delete",
                            title: `Confirm?`,
                            text:  `Are you sure you want to delete <b>${item.name}?</b> This cloud group will be archive and you will not see it on the Board.`,
                            itemId: item.id,
                            callback: 'deleteCloudGroup'
                          });
            } } src="assets/icons/del.png"/>
          }
        </div>
        <Cards
          moveCard={moveCard}
          update={update}
          x={x}
          cards={item.cards}
          startScrolling={this.props.startScrolling}
          stopScrolling={this.props.stopScrolling}
          isScrolling={this.props.isScrolling}
        />
      </div>
    ));
  }
}

const mapStateToProps = (state) => ({
  lists: state.Board.lists
});

const mapDispatchToProps: any = dispatch => ({
  handleModal: (modal: IModal) => {
    dispatch(handleModalAction(modal))
  },
  updateUser: (user: IUser) => dispatch(updateAccountInit(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(CardsContainer);