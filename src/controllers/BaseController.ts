export abstract class BaseController {
  protected config: any = {};
  // TypeError: Cannot assign to read only property 'resetConfig' of object '#<HelloWorldInterceptController>'
  protected resetConfig(){
     this.config = {};
  }
}