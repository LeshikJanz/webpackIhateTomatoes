import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from "jquery";

function textarea2editor(parent) {
  var $parent = $(parent);
  var $editor = $('<div contenteditable/>');
  $editor.css('background', "#333");
  $editor.css("color", "#efefef");
  $parent.find('textarea').replaceWith($editor);
  /*...*/
  return {
    setText: function (text) {
      $editor.html(text);
    },
    /*...*/
  }
}

class ReactIgnore extends React.Component {
  shouldComponentUpdate = () =>{
    return false;
  };

  render = () => React.Children.only(this.props.children);
}

export class JQueryTest extends React.Component {

  componentDidMount = () => {
    this.editor = textarea2editor(ReactDOM.findDOMNode(this));
    this.editor.setText(this.props.contents);
  };

  componentDidUpdate = () => {
    this.editor.setText(this.props.contents);
  };

  render = () => {
    return (
      <div>
        <ReactIgnore>
          <textarea value={this.props.contents}/>
        </ReactIgnore>
      </div>
    )
  }
};

//var Component = React.render(<JQueryTest contents="#./configure" />, document.body);
// setTimeout(function(){
//   Component.setProps({
//     contents: "#/.configure<br/>#make"
//   });
// }, 1000);
// setTimeout(function(){
//   JQueryTest.setProps({
//     contents: "#/.configure<br/>#make<br/>#make install"
//   });
// }, 2000);
