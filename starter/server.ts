const express = require('express')
const fs = require('fs')

import { ConfigType } from "../config/config"
import { BaseHandler } from "../handlers/base-handler"
import { IHandler } from "../handlers/handler"

class ServerFixture {
    constructor(config: ConfigType) {
        this.mExpress = express()
        this.mExpress.listen(config.port)
    }
    mExpress: any
    handlersMap: Map<string, IHandler>
    initHandlers(): any {
        this.handlersMap[BaseHandler.handlerName] = new BaseHandler()
    }
}

export function Start(config: ConfigType, err: any) {
    let server = new ServerFixture(config)
    server.initHandlers()
}