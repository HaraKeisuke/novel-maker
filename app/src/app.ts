/// <reference path="../../typings/index.d.ts" />
import SceneManager from './manager/scene/sceneManager';
export default class Application {
  constructor() {
    SceneManager.getInstanse().create();
  }
}

$(document).ready(() => {
  let app = new Application();
})
