import * as React from "react";
import * as ReactDOM from 'react-dom';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import EventList from './EventList';

export default class WorkspacePanel extends React.Component<Prop, State> {
    state: State = { events: [1, 2, 3, 4] }

    render() {
        return (
            <div className="workspacePanel">
                <EventList events={this.state.events} updateEvents={(events) => { this.setState({ events: events }) }} />
            </div>
        )
    }
}

interface State {
    events: any[];
}

interface Prop {

}
