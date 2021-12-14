import React, { FC } from "react";
import ReactDOM from "react-dom";

import logo from "./logo.svg";

import "./index.css";

interface AppProps {
    name: string;
    logo: string;
}

const App: FC<AppProps> = ({ name, logo }) => {
    return (
        <div>
            <img src={logo} />
            Hello, {name}!!!
        </div>
    );
};

ReactDOM.render(<App name="User" logo={logo} />, document.querySelector("#root"));
