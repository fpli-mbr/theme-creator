import React, { Component } from "react"
import "./index.css"

class CodeEditor extends Component {
  handleChange = event => {
    this.props.colorUpdater(event)
  }
  updateColorInput = event => {
    console.log(event.target)
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
      Function,
      tag,
      comment,
      variable,
      number,
      supportFunction,
      operator,
      brackets,
      VariableAlternative,
    } = this.props.colors

    const palette = Object.entries(this.props.colors)

    return (
      <section>
        <form>
          {palette.map((scope, i) => {
            let key = scope[0]
            let value = scope[1]
            let title = key.charAt(0).toUpperCase() + key.slice(1)

            return (
              <div className="input-group" key={i}>
                <label>{title}</label>
                <input
                  type="color"
                  value={value}
                  tabindex="-1"
                  onChange={this.updateColorInput}
                />
                <input
                  type="text"
                  name={key}
                  value={value}
                  onChange={this.handleChange}
                />
              </div>
            )
          })}
          <button>Generate JSON</button> <button>Reset Values</button>
        </form>
      </section>
    )
  }
}

export default CodeEditor
