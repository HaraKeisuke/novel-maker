///<reference path="../typings/index.d.ts"/>
import * as React from "react";
import * as ReactDOM from 'react-dom';
import ComponentPanel from "./Component/ComponentPanel";

export default class Application extends React.Component<any, any> {
  render() {
    return (
      <div>
        <ComponentPanel />
        aaaaaaa
      </div>
    )
  }
}

ReactDOM.render(<Application />, document.getElementById("application"));
