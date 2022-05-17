import {createRoot} from "react-dom/client"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import SideBySideDisplay from './Components/SideBySidePicker/SideBySideDisplay'

const rootElement = document.getElementById("react-case-picker")
const root = createRoot(rootElement)
root.render(<SideBySideDisplay />)
