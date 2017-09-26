import * as React from "react";
import { MegadraftPlugin } from "megadraft";
const { BlockData, CommonBlock, BlockContent, BlockWrapper } = MegadraftPlugin;
import { DraftJS, insertDataBlock } from "megadraft";
import { withState } from 'recompose';
import { NotificationManager } from 'react-notifications';
import { EditorState, SelectionStsate, Modifier } from "draft-js";
import '../styles/style.scss';

const doneTypingInterval = 1000;
let typingTimer;

export const VoiceBlock = (props) => {
  const handleTimer = () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(updateKnowledge, doneTypingInterval);
  };

  const handleChange = ({ target }) => {
    props.container.updateData({ [target.name]: target.value });
    handleTimer();
  };

  return (
    <div className="voice-recognition-container">

    </div>
  );
};