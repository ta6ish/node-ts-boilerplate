import {Response} from 'express';

enum ResponseStatus {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

abstract class ApiResponse {
  constructor(
    protected res: Response,
    protected statusCode: ResponseStatus,
    protected message: string,
    protected data: unknown | null = null
  ) {}

  public send(): void {
    this.res.status(this.statusCode).json({
      data: this.data,
      message: this.message,
    });
  }
}

export class NotFoundResponse extends ApiResponse {
  constructor(res: Response, message = 'Not Found') {
    super(res, ResponseStatus.NOT_FOUND, message);
  }
}

export class InternalErrorResponse extends ApiResponse {
  constructor(res: Response, message = 'Unkown error occurred') {
    super(res, ResponseStatus.INTERNAL_ERROR, message);
  }
}

export class BadRequestResponse extends ApiResponse {
  constructor(res: Response, message: string) {
    super(res, ResponseStatus.BAD_REQUEST, message);
  }
}

export class SuccessResponse extends ApiResponse {
  constructor(res: Response, message: string, data?: unknown) {
    super(res, ResponseStatus.SUCCESS, message, data);
  }
}
