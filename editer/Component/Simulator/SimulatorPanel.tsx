import * as React from "react";
import * as ReactDOM from 'react-dom';

export default class SimulatorPanel extends React.Component<any, any> {
  render() {
    return (
      <div className="simulatorPanel">
        <div className="simulator"></div>
        <div className="properties"></div>
      </div>
    )
  }
}
