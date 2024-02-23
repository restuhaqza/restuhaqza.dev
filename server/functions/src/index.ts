/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as express from "express";
import {Request, Response} from "express";
import MailingHandler from "./handlers/mailingList";

const app = express();

const mailingListHandler = new MailingHandler();

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({message: "Hello from Restu Universe!"});
});
app.post("/newsletter/subscribe", mailingListHandler.subscribe.bind(mailingListHandler));

export const api = onRequest(app);
