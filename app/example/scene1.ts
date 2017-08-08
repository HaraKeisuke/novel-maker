import { EventType } from '../src/enum/EventType';
import { ActionType } from '../src/enum/ActionType';
import { UIType } from '../src/enum/UIType';
import { HorizontalLayoutType, VerticalLayoutType } from '../src/enum/LayoutType';
import { SpecificationInterface } from '../src/interface/SpecificationInterface';

let scene: SpecificationInterface = {
  ui: [
    {
      type: UIType.BACKGROUND,
      src: "app/assets/image/dummy/back.jpg"
    },
    {
      type: UIType.TEXTBOX,
      src: "app/assets/image/dummy/text_box.png",
      vertical: VerticalLayoutType.BOTTOM,
      horizontal: HorizontalLayoutType.CENTER
    }
  ],
  events: [{
    id: "1",
    type: EventType.IMAGE,
    action: ActionType.ADD,
    src: "app/assets/image/dummy/dummy.png",
    vertical: VerticalLayoutType.MIDDLE,
    horizontal: HorizontalLayoutType.CENTER
  }, {
    type: EventType.TEXT,
    text: "テストの文言はこんな感じになります"
  }, {
    type: EventType.TEXT,
    text: "次の文章"
  }, {
    type: EventType.TEXT,
    text: "文章が次々と入れ替わります"
  }, {
    id: "1",
    type: EventType.IMAGE,
    action: ActionType.MOVE,
    vertical: VerticalLayoutType.MIDDLE,
    horizontal: HorizontalLayoutType.RIGHT
  }, {
    id: "2",
    type: EventType.IMAGE,
    action: ActionType.ADD,
    src: "app/assets/image/dummy/dummy.png",
    vertical: VerticalLayoutType.MIDDLE,
    horizontal: HorizontalLayoutType.CENTER
  },
  {
    id: "1",
    type: EventType.IMAGE,
    action: ActionType.MOVE,
    vertical: VerticalLayoutType.MIDDLE,
    horizontal: HorizontalLayoutType.LEFT
  }, {
    id: "2",
    type: EventType.IMAGE,
    action: ActionType.MOVE,
    vertical: VerticalLayoutType.MIDDLE,
    horizontal: HorizontalLayoutType.RIGHT
  }, {
    type: EventType.TEXT,
    text: "いろんなストーリー"
  }, {
    type: EventType.TEXT,
    text: "夢と希望を乗せて"
  }, {
    type: EventType.TEXT,
    text: "物語は加速する"
  }, {
    id: "1",
    type: EventType.IMAGE,
    action: ActionType.REMOVE
  }
  ]
};

export default scene;
