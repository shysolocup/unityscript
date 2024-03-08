const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class UnityscriptError {
    constructor(attachment, name, message) {
        const { stackTraceLimit } = Error;
        Error.stackTraceLimit = 0;
        
        this.attachment = attachment;
        this.name = name;
        this.message = message;
        
        Error.stackTraceLimit = stackTraceLimit;
    }
    
    fire(name, message, crash) {
        
        // capturing the error
        let error = new Error();
        if (this.attachment) Error.captureStackTrace(error, this.attachment);
        
        // settings
        error.name = (name) ? name : this.name;
        error.message = (message) ? message : this.message;

        // if it should crash
        if (crash) throw error;
        else console.log(error);
    }
}


OUT.push("UnityscriptError", aepl.init("UnityscriptError", UnityscriptError));
module.exports = OUT.pour();