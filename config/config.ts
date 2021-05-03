const fs = require('fs')

export type ConfigType = {
    port: number
}

export class Config {
    config: ConfigType
    constructor(pathToConfig: string) {
        let buff = fs.readFileSync(pathToConfig)
        this.config = JSON.parse(buff)
    }
    Get (): ConfigType {
        return this.config
    }
}