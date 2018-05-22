import * as React from "react";
import * as ReactDOM from 'react-dom';
import EventItem from "./EventItem";

var Sortable = require('react-sortable-hoc');
var SortableContainer = Sortable.SortableContainer;
var SortableElement = Sortable.SortableElement;
var arrayMove = Sortable.arrayMove;

const SortableList = SortableContainer(({ items }) => {
    return (
        <ul className="event_list">
            {items.map((value, index) => (
                <EventItem key={`item-${index}`} index={index} event={value} />
            ))}
        </ul>
    );
});


export default class EventList extends React.Component<Prop, State> {
    state: State = { events: [1, 2, 3, 4] }

    onSortEnd({ oldIndex, newIndex }) {
      this.props.updateEvents(arrayMove(this.props.events, oldIndex, newIndex));
    }

    render() {
        return (
            <SortableList items={this.props.events} onSortEnd={this.onSortEnd.bind(this)} />
        )
    }
}

interface State {

}

interface Prop {
    events: any[];
    updateEvents: (events) => void;
}
