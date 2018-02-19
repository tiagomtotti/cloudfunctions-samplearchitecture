import * as functions from 'firebase-functions';
import * as express from "express";
import * as cors from "cors";
import * as agendaController from './controllers/agendaController';
import * as postController from './controllers/postController'
import * as errorHandlers from './errorHandlers/'
import { PostAppBootstrapper } from "./bootstrap/postAppBootstrapper";
// Express with CORS & automatic trailing '/' solution
const agendaApp = express();
agendaApp.use(cors({ origin: true }));
agendaApp.get("*", agendaController.getAll);

//Export modules
export const agenda = functions.https.onRequest((request, response) => {
  request = fixTrailingSlash(request);
  return agendaApp(request, response);
});

const postBootstrapper = new PostAppBootstrapper();
const postApp = postBootstrapper.bootstrap();

export const post = functions.https.onRequest((request, response) => {
  request = fixTrailingSlash(request);
  return postApp(request, response);
});

function fixTrailingSlash(request){
  if (!request.path) {
    request.url = `/${request.url}`; // prepend '/' to keep query params if any
  }
  return request;
}
