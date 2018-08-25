import React, { Component } from "react"
import "./index.css"

class CodeWindow extends Component {
  render() {
    const {
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
      <pre style={{ background: background }}>
        <code>
          <span style={{ color: keyword }}>class</span>{" "}
          <span style={{ color: classFunc }}>Warrior</span>{" "}
          <span style={{ color: keyword }}>extends</span>{" "}
          <span style={{ color: classFunc }}>Hero</span>{" "}
          <span style={{ color: brackets }}>{"{"}</span>{" "}
        </code>
      </pre>
    )
  }
}

export default CodeWindow
