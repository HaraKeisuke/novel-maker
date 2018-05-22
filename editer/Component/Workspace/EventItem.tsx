import * as React from "react";
import * as ReactDOM from 'react-dom';

var Sortable = require('react-sortable-hoc');
var SortableContainer = Sortable.SortableContainer;
var SortableElement = Sortable.SortableElement;
var arrayMove = Sortable.arrayMove;

const SortableItem = SortableElement(({ value }) =>
    <li className="event_item">{value}</li>
);

export default class EventItem extends React.Component<Prop, State> {
    render() {
        return (
          <SortableItem index={this.props.index} value={this.props.event} />
        )
    }
}

interface State {
}

interface Prop {
  event:any;
  index:number;
}
