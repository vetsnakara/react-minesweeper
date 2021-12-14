import React, { FC } from "react";
import ReactDOM from "react-dom";

interface AppProps {
    name: string;
}

const App: FC<AppProps> = ({ name }) => {
    return <div>Hello, {name}</div>;
};

ReactDOM.render(<App name="User" />, document.querySelector("#root"));
