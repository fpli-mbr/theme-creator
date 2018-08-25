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
      Function,
      tag,
      comment,
      variable,
      number,
      supportFunction,
      operator,
      brackets,
      variableAlternative,
    } = this.props.colors

    return (
      <section>
        <pre style={{ background: background }}>
          <code>
            <span style={{ color: keyword }}>class</span>{" "}
            <span style={{ color: tag }}>Warrior</span>{" "}
            <span style={{ color: keyword }}>extends</span>{" "}
            <span style={{ color: string }}>Hero</span>{" "}
            <span style={{ color: brackets }}>{"{"}</span>{"\n  "}
            <span style={{ color: keyword }}>constructor</span><span style={{ color: brackets }}>(</span>
            <span style={{ color: variable }}>name</span>
            <span style={{ color: foreground }}>,</span>{" "}
            <span style={{ color: variable }}>level</span>
            <span style={{ color: foreground }}>,</span>{" "}
            <span style={{ color: variable }}>weapon</span>
            <span style={{ color: brackets }}>)</span>{" "}
            <span style={{ color: brackets }}>{"{"}</span>{"\n    "}
            <span style={{ color: keyword }}>this</span>
            <span style={{ color: operator }}>.</span>
            <span style={{ color: foreground }}>weapon</span>{" "}
            <span style={{ color: operator }}>=</span>{" "}
            <span style={{ color: variableAlternative }}>weapon</span>{"\n  "}
            <span style={{ color: brackets }}>{"}"}</span>{"\n\n  "}
            <span style={{ color: Function }}>attack</span>
            <span style={{ color: brackets }}>{"() {"}</span>{"\n    "}
            <span style={{ color: keyword }}>return</span>{" "}
            <span style={{ color: string }}>`</span>
            <span style={{ color: variable }}>{"${"}</span>
            <span style={{ color: keyword }}>this</span>
            <span style={{ color: operator }}>.</span>
            <span style={{ color: foreground }}>name</span>
            <span style={{ color: variable }}>{"}"}</span>{" "}
            <span style={{ color: string }}>attacks with the</span>{" "}
            <span style={{ color: variable }}>{"${"}</span>
            <span style={{ color: keyword }}>this</span>
            <span style={{ color: operator }}>.</span>
            <span style={{ color: foreground }}>weapon</span>
            <span style={{ color: variable }}>{"}"}</span>
            <span style={{ color: string }}>{".`"}</span>{"\n  "}
            <span style={{ color: brackets }}>{"}"}</span>{"\n"}
            <span style={{ color: brackets }}>{"}"}</span>{"\n\n"}
            <span style={{ color: comment }}>// Initialize a new class</span>{"\n"}
            <span style={{ color: keyword }}>const</span>{" "}
            <span style={{ color: variable }}>hero1</span>{" "}
            <span style={{ color: operator }}>=</span>{" "}
            <span style={{ color: keyword }}>new</span>{" "}
            <span style={{ color: tag }}>Warrior</span>
            <span style={{ color: brackets }}>(</span>
            <span style={{ color: string }}>"Tania"</span>
            <span style={{ color: foreground }}>,</span>{" "}
            <span style={{ color: number }}>1</span>
            <span style={{ color: foreground }}>,</span>{" "}
            <span style={{ color: string }}>"Hammer"</span>
            <span style={{ color: brackets }}>)</span>{"\n"}
            <span style={{ color: keyword }}>const</span>{" "}
            <span style={{ color: variable }}>entries</span>{" "}
            <span style={{ color: operator }}>=</span>{" "}
            <span style={{ color: tag }}>Object</span>
            <span style={{ color: operator }}>.</span>
            <span style={{ color: supportFunction }}>entries</span>
            <span style={{ color: brackets }}>(</span>
            <span style={{ color: variableAlternative }}>hero1</span>
            <span style={{ color: brackets }}>)</span>{"\n\n"}
            <span style={{ color: comment }}>// Some HTML</span>{"\n"}
            <span style={{ color: brackets }}>{"<"}</span>
            <span style={{ color: tag }}>div</span>{" "}
            <span style={{ color: attribute }}>class</span>
            <span style={{ color: operator }}>=</span>
            <span style={{ color: string }}>"demo"</span>
            <span style={{ color: brackets }}>{">"}</span>
            <span style={{ color: foreground }}>Some text here</span>
            <span style={{ color: brackets }}>{"</"}</span>
            <span style={{ color: tag }}>div</span>
            <span style={{ color: brackets }}>{">"}</span>
          </code>
        </pre>
      </section>
    )
  }
}

export default CodeWindow
