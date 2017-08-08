import Prop from "../Common/Prop";
import { EventInterface } from "../../interface/EventInterface";
import { UIInterface } from "../../interface/UIInterface";

export default class BaseImage extends Prop {
  id: string = null;
  private source: createjs.Bitmap = null;
  constructor(public event: EventInterface | UIInterface) {
    super();
    this.source = new createjs.Bitmap(event.src);
    this.id = event.id;
  }


  getSource(): createjs.Bitmap { return this.source };
}
