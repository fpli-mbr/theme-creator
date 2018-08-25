import React, { Component } from "react"
import "./index.css"

class CodeEditor extends Component {
  handleChange = event => {
    this.props.colorUpdater(event)
  }
  render() {
    const {
      colorUpdater,
      background,
      foreground,
      selection,
      string,
      keyword,
      attribute,
      func,
      classFunc,
      comment,
      variable,
      number,
      method,
      operators,
      brackets,
    } = this.props.colors
    return (
      <form>
        <label>Background</label>
        <input
          type="text"
          name="background"
          value={background}
          onChange={this.handleChange}
        />
        <label>Keyword</label>
        <input
          type="text"
          name="keyword"
          value={keyword}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default CodeEditor
