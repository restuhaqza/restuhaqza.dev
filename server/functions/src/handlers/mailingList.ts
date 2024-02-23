import {Request, Response} from 'express'
import { MailingListModel } from '../models/mailingList'
import * as logger from "firebase-functions/logger";
import * as Joi from 'joi'
import { SendResponse } from '../utils/response';

export default class MailingHandler {
    private mailingListModel: MailingListModel
    private sendResponse: SendResponse

    constructor() {
        this.mailingListModel = new MailingListModel()
        this.sendResponse = new SendResponse()
    }

    async subscribe(req: Request, res: Response): Promise<Response<any> | undefined> {
        const data = req.body

        // validate data
        const schema = {
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required()
        }

        const { error } = Joi.object(schema).validate(data)

        if (error) {
            return this.sendResponse.error(res, error.details[0].message, 400)
        }


        logger.info('New user subscribed', data)

        // check is exist or not
        const isExist = await this.mailingListModel.getByEmail(data.email)

        console.log(isExist)

        if (isExist) {
            // update data
            const mailingList = await this.mailingListModel.update(isExist.id, data)
            return this.sendResponse.success(res, mailingList)
        }

        const mailingList = await this.mailingListModel.create(data)
        return this.sendResponse.created(res, mailingList)
    }
}