const formatResponse = (status: number, message: string, data: any) => {
    return {
        status,
        message,
        data
    }
}

export class SendResponse {
    success(res: any, data: any, message: string = "Success") {
        return res.status(200).json(formatResponse(200, message, data))
    }

    created(res: any, data: any, message: string = "Created") {
        return res.status(201).json(formatResponse(201, message, data))
    }

    error(res: any, message: string = "Error", status: number = 400) {
        return res.status(status).json(formatResponse(status, message, null))
    }
}

