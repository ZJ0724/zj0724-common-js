import ResponseResult from "../model/ResponseResult";
import HttpOption from "../model/HttpOption";
import Service from "../Service";

export default class BaseService extends Service {

    data: {
        [key: string]: {
            request: any,
            response: ResponseResult
        }
    } = {};

    constructor(url: string) {
        super(url);
    }

    $send(httpOption: HttpOption, requestHandler?: (requestData: HttpOption) => HttpOption): Promise<any> {
        return new Promise<any>((success, error) => {
            super.$send(httpOption, requestHandler).then((responseData) => {
                if (responseData.flag) {
                    success(responseData);
                } else {
                    error(responseData);
                }
            }).catch((e) => {
                error(e);
            });
        });
    }

};