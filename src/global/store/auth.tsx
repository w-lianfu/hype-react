import { observable, action } from 'mobx';

class Auth {
  @observable public isAuth: boolean = false;

  @action.bound
  public setAuth = (value: boolean) => {
    this.isAuth = value;
  };
}

const auth = new Auth();
export default auth;
