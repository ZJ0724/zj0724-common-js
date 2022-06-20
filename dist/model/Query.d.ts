import filter from "./filter";
export default class Query<FILTER extends filter<T> | null = null, T extends object = {}> {
    page?: number | string;
    size?: number | string;
    filter?: FILTER;
    sort?: {
        column?: string;
        orderBy?: string;
    };
    constructor(data?: object);
}