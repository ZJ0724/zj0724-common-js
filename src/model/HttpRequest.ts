import httpType from "./httpType";

class HttpRequest {

    url: string;
    type: httpType;
    header?: { [key: string]: string };
    param?: { [key: string]: string };
    data?: any;
    config?: {
        dataType: "BODY" | "FORM_DATA"
    };

    constructor(data: HttpRequest) {
        this.url = data.url;
        this.type = data.type;
        this.header = data.header ? data.header : {};
        this.param = data.param ? data.param : {};
        this.data = data.data ? data.data : {};
        this.config = data.config;
    }

}

export default HttpRequest;