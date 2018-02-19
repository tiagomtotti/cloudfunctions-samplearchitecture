import * as express from "express";
import * as cors from "cors";
import * as postController from '../controllers/postController'
import * as errorHandlers from '../errorHandlers/'

export class PostAppBootstrapper{

    private app: express.Express;

    constructor(){
        this.app = null;
    }

    private configureMiddlewares(){
        this.app.use(cors({ origin: true }));
    }

    private buildRoutes(){
        this.app.post('/', postController.createPost);
        this.app.get('*', postController.getAllPosts);
    }

    private registerErrorHandlers(){
        this.app.use(errorHandlers.objectValidationErrorHandler);
        this.app.use(errorHandlers.defaultErrorHandler);
    }

    bootstrap() {
        if(this.app == null) {
            this.app = express();
            this.configureMiddlewares();
            this.buildRoutes();
            this.registerErrorHandlers();
        }
        return this.app;
    }
}