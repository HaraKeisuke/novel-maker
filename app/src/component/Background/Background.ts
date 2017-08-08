import Prop from "../Common/Prop";

export default class Background {
  load(url: string) {
    return new createjs.Bitmap(url);
  }
}
