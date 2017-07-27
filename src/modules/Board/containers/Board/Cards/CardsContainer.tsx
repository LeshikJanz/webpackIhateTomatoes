import * as React from 'react';
import { DropTarget, DragSource } from 'react-dnd';

import Cards from './Cards';
import PropTypes = React.PropTypes;
import { connect } from "react-redux";
import { deleteCloudGroupInit } from "../../../actions";
import { handleModalAction } from "../../../../actions";
import { IModal } from "../../../../../interfaces/index";

const listSource = {
  beginDrag(props) {
    return {
      id: props.id,
      x: props.x
    };
  },
  endDrag(props) {
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
  }

  render() {
    const {
      connectDropTarget, connectDragSource, item, x, moveCard, update, isDragging,
      handleModal, handleDeleteCloudGroup
    } = this.props;

    item.cards = item.clouds;

    const opacity = isDragging ? 0.5 : 1;

    return connectDragSource(connectDropTarget(
      <div className="desk" style={{ opacity }}>
        <div className="desk-head">
          <div className="desk-name">{item.name}</div>
          {
            !item.cards.length &&
            <img onClick={ () => {
              handleModal({
                            type: "Delete",
                            title: `Are you sure?`,
                            text:  `You're going to delete ${item.name} group`
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps: any = dispatch => ({
  handleDeleteCloudGroup: (id) => {
    dispatch(deleteCloudGroupInit(id))
  },
  handleModal: (modal: IModal) => {
    dispatch(handleModalAction(modal))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(CardsContainer);