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
import * as cors from "cors";

const app = express();

const mailingListHandler = new MailingHandler();

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({message: "Hello from Restu Universe!"});
});

// cors policy
const corsOptions = {
  origin: (origin: any, callback: any) => {
    const isEmulator = process.env.FUNCTIONS_EMULATOR === "false";
    const allowedOrigin = [
      "https://restuhaqza.dev",
      "https://www.restuhaqza.dev",
    ];

    if (isEmulator || allowedOrigin.includes(origin)) {
      callback(null, true);
    } else {
      callback({message: "Not allowed by CORS"});
    }
  },
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));
app.post("/newsletter/subscribe", mailingListHandler.subscribe.bind(mailingListHandler));

export const api = onRequest(app);
