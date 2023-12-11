import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import {marked} from 'marked';
import DOMPurify from 'dompurify';

marked.setOptions({
  breaks: true
})

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: example
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div class="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <div class="form-floating w-50">
          <h4 class="text-center">Markdown Previewer</h4>
          <h6>Editor:</h6>
          <textarea id="editor" class="form-control" style={{"height": "30vh"}} value={this.state.input} onChange={this.handleChange}></textarea>
          <br />
          <h6>Preview:</h6>
          <div id="preview" class="border border-primary" style={{"height": "30vh", "overflow": "auto"}} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked.parse(this.state.input))}} />
        </div>
      </div>
    );
  }

}

const example = "Welcome to my React Markdown Previewer!\n# This is heading element\n\n## This is sub heading element\n\nThis is [link](https://codepen.io/ivmourav-the-reactor)\n\nThis is inline code `<div></div>`\n\nThis is code block:\n```\n// this is multi-line code:\nfunction boo() {\n  return \"Hello World!\";\n}\n```\n\nThis is list:\n  - one\n    - two\n      - three\n\n>This is blockquote\n\nThis is **different** _text_ **_types_**\n\nThis is image:\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";

ReactDOM.render(<App />, document.getElementById("root"));