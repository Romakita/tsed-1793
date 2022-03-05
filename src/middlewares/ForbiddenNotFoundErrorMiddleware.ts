import {NotFound} from "@tsed/exceptions";
import {Err, Middleware} from "@tsed/common";

@Middleware()
export class ForbiddenNotFoundErrorMiddleware {
  async use(@Err() err: Error & { status: number }) {
    console.log('====> err', err)
    if ([403, 404].includes(err.status)) {
      throw new NotFound("Not found");
    }

    throw err;
  }
}
