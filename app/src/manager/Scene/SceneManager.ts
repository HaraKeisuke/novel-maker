import Scene from "../../component/Scene/Scene";
export default class SceneManager {
  currentScene: Scene = null;
  scenes: Scene[] = [];

  constructor(){
    createjs.Ticker.setFPS(60);
  }

  create() {
    this.currentScene = new Scene();
    this.scenes.push(this.currentScene);
  }

  getCurrentScene() {
    return this.currentScene;
  }

  static instance: SceneManager = null;
  static getInstanse(): SceneManager {
    if (!this.instance) {
      this.instance = new SceneManager();
    }
    return this.instance;
  }
}
