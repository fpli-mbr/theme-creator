import React, { Component } from "react"
import CodeWindow from "./CodeWindow.js"
import CodeEditor from "./CodeEditor.js"

class App extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      background: "#343434",
      foreground: "#dedede",
      selection: "#414141",
      string: "#99cc99",
      keyword: "#ffeea6",
      attribute: "#ffd479",
      Function: "#ffffff",
      tag: "#78aad6",
      comment: "#8a8a80",
      variable: "#f2777a",
      number: "#fca369",
      supportFunction: "#d6acd6",
      operator: "#cda869",
      brackets: "#d3d0c8",
      variableAlternative: "#76d4d6",
    }
    this.state = this.initialState
  }

  updateColors = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Syntax Theme Creator</h1>

        <div className="flex">
          <CodeWindow colors={this.state} />
          <CodeEditor colorUpdater={this.updateColors} colors={this.state} />
        </div>
      </div>
    )
  }
}

export default App
