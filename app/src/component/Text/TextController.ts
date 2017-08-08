import { EventInterface } from "../../interface/EventInterface";
import { EventType } from "../../enum/EventType";
import BaseImage from '../Image/BaseImage';
import ImageLayout from "../Layout/ImageLayout";
import Scene from '../Scene/Scene';

export default class TextController {
    currentText: createjs.Text = null;

    constructor(public scene: Scene) { }

    change(text: string) {
        let source = new createjs.Text(text, "20px arel", "#fff");
        source.id = 500;
        source.x = 50;
        source.y = 480;
        this.scene.stage.removeChild(this.currentText);
        this.scene.stage.addChild(source);
        this.currentText = source;
    }
}
