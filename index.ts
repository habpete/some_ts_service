const Express = require('express')
const Path = require('path')
const FS = require('fs')

import { Http2ServerRequest } from "node:http2"
import { config, mainModule } from "node:process"
import { start } from "node:repl"
import {ConfigType, Config} from "./config/config"
import { Start } from "./starter/server"

start() {
    let cfgInstance = new Config('')
    let config = cfgInstance.Get()
    Start(config, (err) => {
        console.log(err)
        return
    })
}

