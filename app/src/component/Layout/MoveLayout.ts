import Scene from '../Scene/Scene';
import BaseImage from "../Image/BaseImage";
import { EventInterface } from '../../interface/EventInterface';
import { PropInterface } from '../../interface/PropInterface';
import { HorizontalLayoutType, VerticalLayoutType } from '../../enum/LayoutType';

export default class MoveLayout {
    constructor(public scene: Scene) { }

    move(imageSource: any, event: PropInterface) {
        let _x = this.getHorizon(imageSource, event);
        let _y = this.getVertical(imageSource, event);
        let _speed = this.getSpeed(event);

        createjs.Tween.get(imageSource).to({ x: _x, y: _y }, _speed, createjs.Ease.linear);
    }

    private getSpeed(event: PropInterface) {
        //FIXME スピード対応
        return 100;
    }

    private getHorizon(imageSource: any, event: PropInterface): Number {
        let x = null;
        switch (event.horizontal) {
            case HorizontalLayoutType.LEFT:
                x = 0;
                break;
            case HorizontalLayoutType.CENTER:
                x = this.scene.stage.getBounds().width / 2 - imageSource.getBounds().width / 2;
                break;
            case HorizontalLayoutType.RIGHT:
                x = this.scene.stage.getBounds().width - imageSource.getBounds().width;
                break;
        }
        return x;
    }
    private getVertical(imageSource: any, event: PropInterface): Number {
        let y = null;
        switch (event.vertical) {
            case VerticalLayoutType.TOP:
                y = 0;
                break;
            case VerticalLayoutType.MIDDLE:
                y = this.scene.stage.getBounds().height / 2 - imageSource.getBounds().height / 2;
                break;
            case VerticalLayoutType.BOTTOM:
                y = this.scene.stage.getBounds().height - imageSource.getBounds().height;
                break;
        }
        return y;
    }
    static getInstanse(scene: Scene) {
        return new MoveLayout(scene);
    }
}
