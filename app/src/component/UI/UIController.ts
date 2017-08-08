import { SpecificationInterface } from "../../interface/SpecificationInterface";
import { UIType } from "../../enum/UIType";
import BaseImage from "../Image/BaseImage";
import Scene from "../Scene/Scene";
import ImageLayout from "../Layout/ImageLayout";
import UIImage from "../Image/UIImage";

export default class UIController {
    specification: SpecificationInterface = null;
    text_box: createjs.Bitmap = null;

    constructor(public scene: Scene) { }

    load(specification: SpecificationInterface) {
        this.specification = specification;
        this.specification.ui.forEach((ui) => {
            let image = new UIImage(ui);
            switch (ui.type) {
                case UIType.BACKGROUND:
                    image.getSource().id = 1;
                    break;
                case UIType.TEXTBOX:
                    image.getSource().id = 400;
                    break;
            }
            this.scene.stage.addChild(image.getSource());
            ImageLayout.getInstanse(this.scene).setLayout(image.getSource(), ui);
        });
        this.scene.stage.sortChildren((a, b) => { return a.id - b.id; });
    }
}
