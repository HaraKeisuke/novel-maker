import { EventInterface } from './EventInterface'
import { UIInterface } from "./UIInterface";
export interface SpecificationInterface {
  ui: UIInterface[];
  events: EventInterface[];
}
