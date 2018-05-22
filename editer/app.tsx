///<reference path="../typings/index.d.ts"/>
import * as React from "react";
import * as ReactDOM from 'react-dom';
import ComponentPanel from "./Component/ComponentPanel";
import WorkspacePanel from "./Component/Workspace/WorkspacePanel";
import SimulatorPanel from "./Component/Simulator/SimulatorPanel";

export default class Application extends React.Component<any, any> {
    render() {
        return (
            <div className="application">
                <ComponentPanel />
                <WorkspacePanel />
                <SimulatorPanel />
            </div>
        )
    }
}

ReactDOM.render(<Application />, document.getElementById("application"));
