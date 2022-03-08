import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";
import {ForbiddenNotFoundErrorInterceptor, UseInterceptor} from "../interceptors/ForbiddenNotFoundErrorInterceptor";
import {BaseController} from "./BaseController";
// import {UseAfter} from "@tsed/common";
// import {ForbiddenNotFoundErrorMiddleware} from "../middlewares/ForbiddenNotFoundErrorMiddleware";

@Controller("/hello-world-intercept")
@UseInterceptor(ForbiddenNotFoundErrorInterceptor)
export abstract class HelloWorldInterceptController extends BaseController{
  @Get("/")
  // @Intercept(ForbiddenNotFoundErrorInterceptor)
  // @UseAfter(ForbiddenNotFoundErrorMiddleware)
  get() {
    const error: any = new Error("test");
    error.status = 403;

    throw error;
  }
}
