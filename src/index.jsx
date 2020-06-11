import React from "react";
import { render } from "react-dom";
import App from "./app";
import "./index.scss";

const mountNode = document.querySelector("#root");
render(<App />, mountNode);
