import Scene from "../Scene/Scene";
import { EventInterface } from "../../interface/EventInterface";
import { EventType } from "../../enum/EventType";
import { ActionType } from "../../enum/ActionType";
import BaseImage from '../Image/BaseImage';
import ImageLayout from "../Layout/ImageLayout";

export default class EventController {
  constructor(public scene: Scene, public events: EventInterface[]) { }
  process() {
    var event = this.events.shift();
    this.work(event);
    this.scene.stage.update();
    if (EventType.TEXT !== event.type && ActionType.MOVE !== event.action) {
      this.process();
    }
  }

  private work(event: EventInterface) {
    switch (event.type) {
      case EventType.IMAGE:
        this.scene.ImageController.work(event);
        break;
      case EventType.TEXT:
        this.scene.textController.change(event.text);
        break;
    }
  }
}
