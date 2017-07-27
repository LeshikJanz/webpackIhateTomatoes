import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import '../../assets/temp.styl';
const SVG = require('react-svg');
require('../../styles/board.scss');
import * as ListsActions from '../../actions/lists';
import CardsContainer from './Cards/CardsContainer';
import CustomDragLayer from './CustomDragLayer';
import PropTypes = React.PropTypes;
import { ICloud, ICloudGroup } from "interfaces/index";
import CustomModal from "components/CustomModal/containers/index";
import CloudForm from "./form/cloudForm";
import CloudGroupForm from "./form/cloudGroupForm";
import ConfirmModal from "components/ConfirmModal/containers";

function mapStateToProps(state) {
  return {
    lists: state.Trello.lists,
    modal: state.Modal
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ListsActions, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
@DragDropContext(HTML5Backend)
export default class CloudBoard extends React.Component {
  static propTypes = {
    getLists: PropTypes.func.isRequired,
    moveCard: PropTypes.func.isRequired,
    moveList: PropTypes.func.isRequired,
    lists: PropTypes.array.isRequired,
  }

  /**
   * Modal type
   *
   * Accept values: Cloud, CloudGroup
   * @type {string}
   */
  private modalType: string;

  public isOptionsOpen: boolean = false;

  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.update = this.update.bind(this);
    this.openModal = this.openModal.bind(this);
    this.moveList = this.moveList.bind(this);
    this.findList = this.findList.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.stopScrolling = this.stopScrolling.bind(this);
    this.startScrolling = this.startScrolling.bind(this);
    this.state = { isScrolling: false, isOptionsOpen: false };
  }

  componentWillMount() {
    this.props.getLists(this.props.params && this.props.params.id);
  }

  startScrolling(direction) {
    // if (!this.state.isScrolling) {
    switch ( direction ) {
      case 'toLeft':
        this.setState({ isScrolling: true }, this.scrollLeft());
        break;
      case 'toRight':
        this.setState({ isScrolling: true }, this.scrollRight());
        break;
      default:
        break;
    }
    // }
  }

  scrollRight() {
    function scroll() {
      // document.getElementsByTagName('main')[0].scrollLeft += 10;
    }

    this.scrollInterval = setInterval(scroll, 10);
  }

  scrollLeft() {
    function scroll() {
      // document.getElementsByTagName('main')[0].scrollLeft -= 10;
    }

    this.scrollInterval = setInterval(scroll, 10);
  }

  stopScrolling() {
    this.setState({ isScrolling: false }, clearInterval(this.scrollInterval));
  }

  moveCard(lastX, lastY, nextX, nextY) {
    this.props.moveCard(lastX, lastY, nextX, nextY);
  }

  update(cloud: ICloud) {
    setTimeout(() => {
      cloud.cloudGroupId = this.props.lists.find((cg: ICloudGroup) => cg.clouds.find((c: ICloud) => c === cloud)).id;
      this.props.update(cloud);
    }, 1000)
  }

  moveList(listId, nextX) {
    const { lastX } = this.findList(listId);
    this.props.moveList(lastX, nextX);
  }

  openModal(type: string) {
    this.setState({ isOptionsOpen: !this.state.isOptionsOpen })
    this.modalType = type;
    this.props.handleModal({ type });
  }

  handleOptionMenu() {
    this.setState({ isOptionsOpen: !this.state.isOptionsOpen })
  }

  findList(id) {
    const { lists } = this.props;
    const list = lists.filter(l => l.id === id)[0];

    return {
      list,
      lastX: lists.indexOf(list)
    };
  }

  render() {
    const { lists, modal } = this.props;

    return (
      <div>
        <div className="board-menu">
          <div className="options-button" onClick={ this.handleOptionMenu.bind(this) }>
            <SVG className="option-svg" path="assets/icons/settings.svg"/>
          </div>
          <div className="options" style={ this.state.isOptionsOpen ? { display: 'flex' } : { display: 'none' }}>
            <button onClick={() => this.openModal('CloudAdd') } className="primary big add">
              <SVG path="assets/icons/add-icon.svg"/>
              Create cloud
            </button>
            <button onClick={() => this.openModal('CloudGroupAdd') } className="primary big wider add">
              <SVG path="assets/icons/add-icon.svg"/>
              Create cloud group
            </button>
          </div>
        </div>
        <div>
          <CustomDragLayer snapToGrid={false}/>
          {
            lists.length > 0 && lists.map((item, i) =>
              <CardsContainer
                key={item.id}
                id={item.id}
                item={item}
                moveCard={this.moveCard}
                update={this.update}
                moveList={this.moveList}
                startScrolling={this.startScrolling}
                stopScrolling={this.stopScrolling}
                isScrolling={this.state.isScrolling}
                x={i}
              />
            )
          }
        </div>

        <CustomModal
          title="Adding new cloud"
          customStyles={{ height: '700px' }}
          isModalOpen={modal.isOpen && modal.type == "CloudAdd"}
        >
          <CloudForm cloudGroups={lists}
                     handleModalAction={this.props.handleModal}
                     onSubmit={this.props.handleCloudFormSubmit}
          />
        </CustomModal>

        <CustomModal
          onSubmit={ this.props.onSubmit }
          title="Adding new cloud group"
          isModalOpen={modal.isOpen && modal.type == 'CloudGroupAdd'}
        >
          <CloudGroupForm
            handleModalAction={this.props.handleModal}
            onSubmit={this.props.handleCloudGroupFormSubmit}
          />
        </CustomModal>

        <ConfirmModal
          title={this.props.modal.title}
          text={this.props.modal.text}
          isModalOpen={modal.isOpen && modal.type === 'Delete'}
        />

        { (lists.length === 1 && !lists[0].clouds.length) &&
        <div className="centered-container">
          <h1>Welcome to the board. You're already have one default cloud group - Main.
         Let's start working with Big Head from creating first cloud
          </h1>
        </div>
        }
      </div>
    )
  }
}
