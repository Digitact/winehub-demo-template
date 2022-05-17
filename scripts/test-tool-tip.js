import ReactDOM from "react-dom"
import React from "react"
import { TestToolTip } from "./Components/TestToolTip"

const rootElement = document.getElementById("react-test-tool-tip")

rootElement && ReactDOM.render(<TestToolTip/>, rootElement)