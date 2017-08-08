import BaseImage from './BaseImage';
import { EventInterface } from '../../interface/EventInterface';
import NumberUtils from "../../utils/NumberUtils";

export default class CharacterImage extends BaseImage {
  BASE_INDEX = 100;
  MIN_INDEX = 100;
  MAX_INDEX = 200;

  constructor(event: EventInterface) {
    super(event);
    this.setIndex(event.zIndex);
  }
  setIndex(index: number = 0) {
    this.getSource().id = NumberUtils.roundRange(this.BASE_INDEX + index, this.MIN_INDEX, this.MAX_INDEX);
  }
}
