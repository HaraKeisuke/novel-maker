(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventType_1 = require("../src/enum/EventType");
var ActionType_1 = require("../src/enum/ActionType");
var UIType_1 = require("../src/enum/UIType");
var LayoutType_1 = require("../src/enum/LayoutType");
var scene = {
    ui: [
        {
            type: UIType_1.UIType.BACKGROUND,
            src: "app/assets/image/dummy/back.jpg"
        },
        {
            type: UIType_1.UIType.TEXTBOX,
            src: "app/assets/image/dummy/text_box.png",
            vertical: LayoutType_1.VerticalLayoutType.BOTTOM,
            horizontal: LayoutType_1.HorizontalLayoutType.CENTER
        }
    ],
    events: [{
            id: "1",
            type: EventType_1.EventType.IMAGE,
            action: ActionType_1.ActionType.ADD,
            src: "app/assets/image/dummy/dummy.png",
            vertical: LayoutType_1.VerticalLayoutType.MIDDLE,
            horizontal: LayoutType_1.HorizontalLayoutType.CENTER
        }, {
            type: EventType_1.EventType.TEXT,
            text: "テストの文言はこんな感じになります"
        }, {
            type: EventType_1.EventType.TEXT,
            text: "次の文章"
        }, {
            type: EventType_1.EventType.TEXT,
            text: "文章が次々と入れ替わります"
        }, {
            id: "1",
            type: EventType_1.EventType.IMAGE,
            action: ActionType_1.ActionType.MOVE,
            vertical: LayoutType_1.VerticalLayoutType.MIDDLE,
            horizontal: LayoutType_1.HorizontalLayoutType.RIGHT
        }, {
            id: "2",
            type: EventType_1.EventType.IMAGE,
            action: ActionType_1.ActionType.ADD,
            src: "app/assets/image/dummy/dummy.png",
            vertical: LayoutType_1.VerticalLayoutType.MIDDLE,
            horizontal: LayoutType_1.HorizontalLayoutType.CENTER
        },
        {
            id: "1",
            type: EventType_1.EventType.IMAGE,
            action: ActionType_1.ActionType.MOVE,
            vertical: LayoutType_1.VerticalLayoutType.MIDDLE,
            horizontal: LayoutType_1.HorizontalLayoutType.LEFT
        }, {
            id: "2",
            type: EventType_1.EventType.IMAGE,
            action: ActionType_1.ActionType.MOVE,
            vertical: LayoutType_1.VerticalLayoutType.MIDDLE,
            horizontal: LayoutType_1.HorizontalLayoutType.RIGHT
        }, {
            type: EventType_1.EventType.TEXT,
            text: "いろんなストーリー"
        }, {
            type: EventType_1.EventType.TEXT,
            text: "夢と希望を乗せて"
        }, {
            type: EventType_1.EventType.TEXT,
            text: "物語は加速する"
        }, {
            id: "1",
            type: EventType_1.EventType.IMAGE,
            action: ActionType_1.ActionType.REMOVE
        }
    ]
};
exports.default = scene;

},{"../src/enum/ActionType":14,"../src/enum/EventType":15,"../src/enum/LayoutType":16,"../src/enum/UIType":17}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../typings/index.d.ts" />
var sceneManager_1 = require("./manager/scene/sceneManager");
var Application = (function () {
    function Application() {
        sceneManager_1.default.getInstanse().create();
    }
    return Application;
}());
exports.default = Application;
$(document).ready(function () {
    var app = new Application();
});

},{"./manager/scene/sceneManager":18}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Prop = (function () {
    function Prop() {
    }
    return Prop;
}());
exports.default = Prop;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventType_1 = require("../../enum/EventType");
var ActionType_1 = require("../../enum/ActionType");
var EventController = (function () {
    function EventController(scene, events) {
        this.scene = scene;
        this.events = events;
    }
    EventController.prototype.process = function () {
        var event = this.events.shift();
        this.work(event);
        this.scene.stage.update();
        if (EventType_1.EventType.TEXT !== event.type && ActionType_1.ActionType.MOVE !== event.action) {
            this.process();
        }
    };
    EventController.prototype.work = function (event) {
        switch (event.type) {
            case EventType_1.EventType.IMAGE:
                this.scene.ImageController.work(event);
                break;
            case EventType_1.EventType.TEXT:
                this.scene.textController.change(event.text);
                break;
        }
    };
    return EventController;
}());
exports.default = EventController;

},{"../../enum/ActionType":14,"../../enum/EventType":15}],5:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Prop_1 = require("../Common/Prop");
var BaseImage = (function (_super) {
    __extends(BaseImage, _super);
    function BaseImage(event) {
        var _this = _super.call(this) || this;
        _this.event = event;
        _this.id = null;
        _this.source = null;
        _this.source = new createjs.Bitmap(event.src);
        _this.id = event.id;
        return _this;
    }
    BaseImage.prototype.getSource = function () { return this.source; };
    ;
    return BaseImage;
}(Prop_1.default));
exports.default = BaseImage;

},{"../Common/Prop":3}],6:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseImage_1 = require("./BaseImage");
var NumberUtils_1 = require("../../utils/NumberUtils");
var CharacterImage = (function (_super) {
    __extends(CharacterImage, _super);
    function CharacterImage(event) {
        var _this = _super.call(this, event) || this;
        _this.BASE_INDEX = 100;
        _this.MIN_INDEX = 100;
        _this.MAX_INDEX = 200;
        _this.setIndex(event.zIndex);
        return _this;
    }
    CharacterImage.prototype.setIndex = function (index) {
        if (index === void 0) { index = 0; }
        this.getSource().id = NumberUtils_1.default.roundRange(this.BASE_INDEX + index, this.MIN_INDEX, this.MAX_INDEX);
    };
    return CharacterImage;
}(BaseImage_1.default));
exports.default = CharacterImage;

},{"../../utils/NumberUtils":19,"./BaseImage":5}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharacterImage_1 = require("./CharacterImage");
var ImageLayout_1 = require("../Layout/ImageLayout");
var MoveLayout_1 = require("../Layout/MoveLayout");
var ActionType_1 = require("../../enum/ActionType");
var ImageController = (function () {
    function ImageController(scene) {
        this.scene = scene;
        this.images = [];
    }
    ImageController.prototype.work = function (event) {
        switch (event.action) {
            case ActionType_1.ActionType.ADD:
                this.add(event);
                break;
            case ActionType_1.ActionType.MOVE:
                this.move(event);
                break;
            case ActionType_1.ActionType.REMOVE:
                this.remove(event);
                break;
        }
    };
    ImageController.prototype.add = function (event) {
        var image = new CharacterImage_1.default(event);
        this.images.push(image);
        this.scene.stage.addChild(image.getSource());
        ImageLayout_1.default.getInstanse(this.scene).setLayout(image.getSource(), event);
    };
    ImageController.prototype.remove = function (event) {
        var image = this.getImage(event.id);
        this.scene.stage.removeChild(image.getSource());
    };
    ImageController.prototype.move = function (event) {
        var image = this.getImage(event.id).getSource();
        MoveLayout_1.default.getInstanse(this.scene).move(image, event);
    };
    ImageController.prototype.getImage = function (id) {
        return this.images.filter(function (val) {
            return val.id === id;
        })[0];
    };
    return ImageController;
}());
exports.default = ImageController;

},{"../../enum/ActionType":14,"../Layout/ImageLayout":9,"../Layout/MoveLayout":10,"./CharacterImage":6}],8:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseImage_1 = require("./BaseImage");
var CharacterImage = (function (_super) {
    __extends(CharacterImage, _super);
    function CharacterImage(ui) {
        return _super.call(this, ui) || this;
    }
    return CharacterImage;
}(BaseImage_1.default));
exports.default = CharacterImage;

},{"./BaseImage":5}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LayoutType_1 = require("../../enum/LayoutType");
var ImageLayout = (function () {
    function ImageLayout(scene) {
        this.scene = scene;
        this.bitmap = null;
    }
    ImageLayout.prototype.setLayout = function (imageSource, event) {
        this.bitmap = imageSource;
        this.setVerticalPosition(event);
        this.setHorizontalPosition(event);
    };
    ImageLayout.prototype.setHorizontalPosition = function (event) {
        var x = 0;
        switch (event.horizontal) {
            case LayoutType_1.HorizontalLayoutType.LEFT:
                x = 0;
                break;
            case LayoutType_1.HorizontalLayoutType.CENTER:
                x = this.scene.stage.getBounds().width / 2 - this.bitmap.getBounds().width / 2;
                break;
            case LayoutType_1.HorizontalLayoutType.RIGHT:
                x = this.scene.stage.getBounds().width - this.bitmap.getBounds().width;
                break;
        }
        this.bitmap.x = x;
    };
    ImageLayout.prototype.setVerticalPosition = function (event) {
        var y = 0;
        switch (event.vertical) {
            case LayoutType_1.VerticalLayoutType.TOP:
                y = 0;
                break;
            case LayoutType_1.VerticalLayoutType.MIDDLE:
                y = this.scene.stage.getBounds().height / 2 - this.bitmap.getBounds().height / 2;
                break;
            case LayoutType_1.VerticalLayoutType.BOTTOM:
                y = this.scene.stage.getBounds().height - this.bitmap.getBounds().height;
                break;
        }
        this.bitmap.y = y;
    };
    ImageLayout.getInstanse = function (scene) {
        return new ImageLayout(scene);
    };
    return ImageLayout;
}());
exports.default = ImageLayout;

},{"../../enum/LayoutType":16}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LayoutType_1 = require("../../enum/LayoutType");
var MoveLayout = (function () {
    function MoveLayout(scene) {
        this.scene = scene;
    }
    MoveLayout.prototype.move = function (imageSource, event) {
        var _x = this.getHorizon(imageSource, event);
        var _y = this.getVertical(imageSource, event);
        var _speed = this.getSpeed(event);
        createjs.Tween.get(imageSource).to({ x: _x, y: _y }, _speed, createjs.Ease.linear);
    };
    MoveLayout.prototype.getSpeed = function (event) {
        //FIXME スピード対応
        return 100;
    };
    MoveLayout.prototype.getHorizon = function (imageSource, event) {
        var x = null;
        switch (event.horizontal) {
            case LayoutType_1.HorizontalLayoutType.LEFT:
                x = 0;
                break;
            case LayoutType_1.HorizontalLayoutType.CENTER:
                x = this.scene.stage.getBounds().width / 2 - imageSource.getBounds().width / 2;
                break;
            case LayoutType_1.HorizontalLayoutType.RIGHT:
                x = this.scene.stage.getBounds().width - imageSource.getBounds().width;
                break;
        }
        return x;
    };
    MoveLayout.prototype.getVertical = function (imageSource, event) {
        var y = null;
        switch (event.vertical) {
            case LayoutType_1.VerticalLayoutType.TOP:
                y = 0;
                break;
            case LayoutType_1.VerticalLayoutType.MIDDLE:
                y = this.scene.stage.getBounds().height / 2 - imageSource.getBounds().height / 2;
                break;
            case LayoutType_1.VerticalLayoutType.BOTTOM:
                y = this.scene.stage.getBounds().height - imageSource.getBounds().height;
                break;
        }
        return y;
    };
    MoveLayout.getInstanse = function (scene) {
        return new MoveLayout(scene);
    };
    return MoveLayout;
}());
exports.default = MoveLayout;

},{"../../enum/LayoutType":16}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scene1_1 = require("../../../example/scene1");
var UIController_1 = require("../UI/UIController");
var EventController_1 = require("../Event/EventController");
var TextController_1 = require("../Text/TextController");
var ImageController_1 = require("../Image/ImageController");
var Scene = (function () {
    function Scene() {
        this.stage = new createjs.Stage("myCanvas");
        this.uiController = new UIController_1.default(this);
        this.ImageController = new ImageController_1.default(this);
        this.textController = new TextController_1.default(this);
        this.eventController = new EventController_1.default(this, scene1_1.default.events);
        this.uiController.load(scene1_1.default);
        this.eventController.process();
        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener('tick', this.draw.bind(this));
        document.addEventListener("click", this.eventController.process.bind(this.eventController));
    }
    Scene.prototype.draw = function () {
        this.stage.sortChildren(function (a, b) { return a.id - b.id; });
        this.stage.update();
    };
    return Scene;
}());
exports.default = Scene;

},{"../../../example/scene1":1,"../Event/EventController":4,"../Image/ImageController":7,"../Text/TextController":12,"../UI/UIController":13}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextController = (function () {
    function TextController(scene) {
        this.scene = scene;
        this.currentText = null;
    }
    TextController.prototype.change = function (text) {
        var source = new createjs.Text(text, "20px arel", "#fff");
        source.id = 500;
        source.x = 50;
        source.y = 480;
        this.scene.stage.removeChild(this.currentText);
        this.scene.stage.addChild(source);
        this.currentText = source;
    };
    return TextController;
}());
exports.default = TextController;

},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UIType_1 = require("../../enum/UIType");
var ImageLayout_1 = require("../Layout/ImageLayout");
var UIImage_1 = require("../Image/UIImage");
var UIController = (function () {
    function UIController(scene) {
        this.scene = scene;
        this.specification = null;
        this.text_box = null;
    }
    UIController.prototype.load = function (specification) {
        var _this = this;
        this.specification = specification;
        this.specification.ui.forEach(function (ui) {
            var image = new UIImage_1.default(ui);
            switch (ui.type) {
                case UIType_1.UIType.BACKGROUND:
                    image.getSource().id = 1;
                    break;
                case UIType_1.UIType.TEXTBOX:
                    image.getSource().id = 400;
                    break;
            }
            _this.scene.stage.addChild(image.getSource());
            ImageLayout_1.default.getInstanse(_this.scene).setLayout(image.getSource(), ui);
        });
        this.scene.stage.sortChildren(function (a, b) { return a.id - b.id; });
    };
    return UIController;
}());
exports.default = UIController;

},{"../../enum/UIType":17,"../Image/UIImage":8,"../Layout/ImageLayout":9}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActionType;
(function (ActionType) {
    ActionType[ActionType["ADD"] = 0] = "ADD";
    ActionType[ActionType["REMOVE"] = 1] = "REMOVE";
    ActionType[ActionType["MOVE"] = 2] = "MOVE";
})(ActionType = exports.ActionType || (exports.ActionType = {}));

},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventType;
(function (EventType) {
    EventType[EventType["IMAGE"] = 0] = "IMAGE";
    EventType[EventType["BACKGROUND"] = 1] = "BACKGROUND";
    EventType[EventType["TEXT"] = 2] = "TEXT";
})(EventType = exports.EventType || (exports.EventType = {}));

},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VerticalLayoutType;
(function (VerticalLayoutType) {
    VerticalLayoutType[VerticalLayoutType["TOP"] = 0] = "TOP";
    VerticalLayoutType[VerticalLayoutType["MIDDLE"] = 1] = "MIDDLE";
    VerticalLayoutType[VerticalLayoutType["BOTTOM"] = 2] = "BOTTOM";
})(VerticalLayoutType = exports.VerticalLayoutType || (exports.VerticalLayoutType = {}));
var HorizontalLayoutType;
(function (HorizontalLayoutType) {
    HorizontalLayoutType[HorizontalLayoutType["LEFT"] = 0] = "LEFT";
    HorizontalLayoutType[HorizontalLayoutType["CENTER"] = 1] = "CENTER";
    HorizontalLayoutType[HorizontalLayoutType["RIGHT"] = 2] = "RIGHT";
})(HorizontalLayoutType = exports.HorizontalLayoutType || (exports.HorizontalLayoutType = {}));

},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UIType;
(function (UIType) {
    UIType[UIType["TEXTBOX"] = 0] = "TEXTBOX";
    UIType[UIType["BACKGROUND"] = 1] = "BACKGROUND";
})(UIType = exports.UIType || (exports.UIType = {}));

},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Scene_1 = require("../../component/Scene/Scene");
var SceneManager = (function () {
    function SceneManager() {
        this.currentScene = null;
        this.scenes = [];
        createjs.Ticker.setFPS(60);
    }
    SceneManager.prototype.create = function () {
        this.currentScene = new Scene_1.default();
        this.scenes.push(this.currentScene);
    };
    SceneManager.prototype.getCurrentScene = function () {
        return this.currentScene;
    };
    SceneManager.getInstanse = function () {
        if (!this.instance) {
            this.instance = new SceneManager();
        }
        return this.instance;
    };
    SceneManager.instance = null;
    return SceneManager;
}());
exports.default = SceneManager;

},{"../../component/Scene/Scene":11}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberUtils = (function () {
    function NumberUtils() {
    }
    NumberUtils.roundRange = function (val, min, max) {
        if (val > max) {
            val = max;
        }
        else if (val < min) {
            val = min;
        }
        return val;
    };
    return NumberUtils;
}());
exports.default = NumberUtils;

},{}]},{},[2]);
