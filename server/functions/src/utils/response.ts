const formatResponse = (status: number, message: string, data: any) => {
  return {
    status,
    message,
    data,
  };
};

export class SendResponse {
  success(res: any, data: any, message = "Success") {
    return res.status(200).json(formatResponse(200, message, data));
  }

  created(res: any, data: any, message = "Created") {
    return res.status(201).json(formatResponse(201, message, data));
  }

  error(res: any, message = "Error", status = 400) {
    return res.status(status).json(formatResponse(status, message, null));
  }
}

