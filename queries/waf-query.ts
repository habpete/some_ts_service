import { IQuery } from "./query";
import { request } from "http"

export class WafQuery implements IQuery {
    constructor() {}

    static serviceName:string = 'waf'
    static handlerQuery:string = 'base'

    send(userid: number): any {
        const req = request({
            host: '.',
            port: 82,
            method: 'POST'
        }, (response) => {
            return response
        })
    }
}