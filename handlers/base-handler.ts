import { IQuery } from "../queries/query";
import { IHandler } from "./handler";

export class BaseHandler implements IHandler {
    constructor() {}
    static handlerName: string = '/'

    handlersQueries: Map<string, IQuery>
    SetQueries(...query: IQuery[]) {}

    Implement() {}
}