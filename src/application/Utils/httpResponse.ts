import { statusCode } from "./httpStatus";
class HttpResponse {
    statusCode: any;
    body: any;
    constructor(statusCode, body) {
        this.statusCode = statusCode;
        this.body = body;
    }
    static create(responseCode, body) {
        if (responseCode === statusCode.SERVER_ERROR || responseCode === statusCode.NOT_FOUND || responseCode === statusCode.UNAUTHORIZED) {
            return new HttpResponse(responseCode, { message: body });
        }
        return new HttpResponse(responseCode, {data: body});
    }

    static convertToExpress(res, httpResponse) {
        return res.status(httpResponse.statusCode).json(httpResponse.body);

    }

}

export default HttpResponse;