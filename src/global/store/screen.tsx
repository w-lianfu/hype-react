import { observable, action } from 'mobx';

class Screen {
  @observable public width: number = 0;
  @observable public height: number = 0;

  @action.bound
  public setSize = () => {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  };
}

const screen = new Screen();
export default screen;
