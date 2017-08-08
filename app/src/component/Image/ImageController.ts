import Scene from '../Scene/Scene';
import { EventInterface } from "../../interface/EventInterface";
import BaseImage from "./BaseImage";
import CharacterImage from "./CharacterImage";
import ImageLayout from "../Layout/ImageLayout";
import MoveLayout from "../Layout/MoveLayout";
import { ActionType } from "../../enum/ActionType";

export default class ImageController {
    images: BaseImage[] = [];

    constructor(public scene: Scene) { }

    work(event: EventInterface) {
        switch (event.action) {
            case ActionType.ADD:
                this.add(event);
                break;
            case ActionType.MOVE:
                this.move(event);
                break;
            case ActionType.REMOVE:
                this.remove(event);
                break;
        }
    }

    add(event: EventInterface) {
        let image = new CharacterImage(event);
        this.images.push(image);
        this.scene.stage.addChild(image.getSource());
        ImageLayout.getInstanse(this.scene).setLayout(image.getSource(), event);
    }
    remove(event: EventInterface) {
        let image = this.getImage(event.id);
        this.scene.stage.removeChild(image.getSource());
    }

    move(event: EventInterface) {
        let image = this.getImage(event.id).getSource();
        MoveLayout.getInstanse(this.scene).move(image, event)
    }

    getImage(id: string) {
        return this.images.filter(function(val) {
            return val.id === id;
        })[0];
    }

}
