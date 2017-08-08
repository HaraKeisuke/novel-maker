import { UIType } from '../enum/UIType';
import { PropInterface } from "./PropInterface";
export interface UIInterface extends PropInterface {
  id?: string;
  type: UIType;
  src: string;
}
