import {Router} from "express"
import UserRouter from "./src/app/modules/User/Router"

class Routes {
    static define(router: Router): Router {
        return router.use('/user', UserRouter)
    }
}

export default Routes.define(Router())