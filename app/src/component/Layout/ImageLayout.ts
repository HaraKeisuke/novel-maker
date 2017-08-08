import Scene from '../Scene/Scene';
import BaseImage from "../Image/BaseImage";
import { EventInterface } from '../../interface/EventInterface';
import { PropInterface } from '../../interface/PropInterface';
import { HorizontalLayoutType, VerticalLayoutType } from '../../enum/LayoutType';

export default class ImageLayout {
    bitmap: createjs.Bitmap = null;
    constructor(public scene: Scene) { }

    setLayout(imageSource: createjs.Bitmap, event: PropInterface) {
        this.bitmap = imageSource;
        this.setVerticalPosition(event);
        this.setHorizontalPosition(event);
    }

    setHorizontalPosition(event: PropInterface) {
        let x = 0;
        switch (event.horizontal) {
            case HorizontalLayoutType.LEFT:
                x = 0;
                break;
            case HorizontalLayoutType.CENTER:
                x = this.scene.stage.getBounds().width / 2 - this.bitmap.getBounds().width / 2;
                break;
            case HorizontalLayoutType.RIGHT:
                x = this.scene.stage.getBounds().width - this.bitmap.getBounds().width;
                break;
        }

        this.bitmap.x = x;
    }

    setVerticalPosition(event: PropInterface) {
        let y = 0;
        switch (event.vertical) {
            case VerticalLayoutType.TOP:
                y = 0;
                break;
            case VerticalLayoutType.MIDDLE:
                y = this.scene.stage.getBounds().height / 2 - this.bitmap.getBounds().height / 2;
                break;
            case VerticalLayoutType.BOTTOM:
                y = this.scene.stage.getBounds().height - this.bitmap.getBounds().height;
                break;
        }
        this.bitmap.y = y;
    }

    static getInstanse(scene: Scene) {
        return new ImageLayout(scene);
    }
}
