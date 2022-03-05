import {NotFound} from "@tsed/exceptions";
import {Injectable, Intercept, InterceptorContext, InterceptorNext} from "@tsed/di";
import {decorateMethodsOf} from "@tsed/core";


export function UseInterceptor(interceptor: any) {
  return (target) => decorateMethodsOf(target, Intercept(interceptor));
}

@Injectable()
export class ForbiddenNotFoundErrorInterceptor {
  async intercept(context: InterceptorContext<any>, next: InterceptorNext) {
    try {
      return await next();
    } catch (err) {
      const fetchError = err as any;
      if ([403, 404].includes(fetchError.status)) {
        throw new NotFound("Not found");
      }
    }
  }
}
