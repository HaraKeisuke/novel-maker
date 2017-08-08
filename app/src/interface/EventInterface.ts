import { EventType } from '../enum/EventType';
import { ActionType } from '../enum/ActionType';
import { HorizontalLayoutType, VerticalLayoutType } from '../enum/LayoutType';
import { PropInterface } from "./PropInterface";

export interface EventInterface extends PropInterface {
  id?: string;
  zIndex?: number;
  type: EventType;
  action?: ActionType;

  src?: string;
  text?: string;
}
