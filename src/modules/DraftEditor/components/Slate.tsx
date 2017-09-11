import * as React from 'react'
import { Editor, State, Plain, Selection } from 'slate'
import { DONE_TYPING_INTERVAL } from "../constants/index";

let typingTimer;

export default class Slate extends React.Component<any, any> {
  state = {
    state: Plain.deserialize(this.props.knowledge.text)
  };

  handleTimer = () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(this.props.updateKnowledge, DONE_TYPING_INTERVAL);
  };

  onChange = ({ state }) => {
    if ( state.document != this.state.state.document ) {
      const content = Plain.serialize(state);
      this.props.editKnowledge(content);
    }
    console.log('Selection');
    console.log(Selection);
    this.setState({ state });
    this.handleTimer();
  };

  render() {
    return (
      <Editor
        state={this.state.state}
        onChange={this.onChange}
      />
    )
  }
}