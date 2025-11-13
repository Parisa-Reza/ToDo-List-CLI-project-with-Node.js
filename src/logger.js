const chalk = require('chalk')

class Logger {
    constructor(parameters) {
       this._logger=console.log; 
    }

    info(message){
        this._logger(chalk.green(message))
    }

    warn(message)
    {
        this._logger(chalk.yellow(message))
    }

    error(message)
    {
        this._logger(chalk.red(message))
    }
}

const logger= new Logger()

module.exports= logger