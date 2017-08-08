import Background from "../Background/Background";
import sampleScene from '../../../example/scene1';
import { EventType } from '../../enum/EventType';
import { HorizontalLayoutType, VerticalLayoutType } from '../../enum/LayoutType';
import BaseImage from '../Image/BaseImage';
import ImageLayout from "../Layout/ImageLayout";
import UIController from '../UI/UIController';
import Prop from "../Common/Prop";
import EventController from "../Event/EventController";
import TextController from "../Text/TextController";
import ImageController from '../Image/ImageController';

export default class Scene {
  stage: createjs.Stage = new createjs.Stage("myCanvas");
  uiController: UIController = new UIController(this);
  ImageController: ImageController = new ImageController(this);
  textController: TextController = new TextController(this);
  eventController: EventController = new EventController(this, sampleScene.events);
  constructor() {
    this.uiController.load(sampleScene);
    this.eventController.process();
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener('tick', this.draw.bind(this));

    document.addEventListener("click", this.eventController.process.bind(this.eventController));
  }

  draw() {
    this.stage.sortChildren((a, b) => { return a.id - b.id; });
    this.stage.update();
  }
}
