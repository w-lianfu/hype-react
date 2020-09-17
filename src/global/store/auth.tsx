import { observable, action } from 'mobx';

class Auth {
  @observable public isAuth: boolean = true;
  @observable public showPwd: boolean = false;
  @observable public pwd: string = '';
  @observable public isError: boolean = false;

  @action.bound
  public setAuth = (value: boolean) => {
    this.isAuth = value;
  };

  @action.bound
  public toggleShow = () => {
    this.showPwd = !this.showPwd;
  };

  @action.bound
  public setPwd = (value: string) => {
    this.pwd = value;
  };

  @action.bound
  public setError = (value: boolean) => {
    this.isError = value;
  };

  @action.bound
  public reset = () => {
    // this.isAuth = true;
    this.showPwd = false;
    this.pwd = '';
    this.isError = false;
  };
}

const auth = new Auth();
export default auth;
