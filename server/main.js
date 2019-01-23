const express = require('express'),
    conf = require('./config.json')[process.env.NODE_ENV || 'development'],
    credentials = require('./credentials_non_commit.json'),
    http = require('http'),
    server = express(),
    testServer = new (require('./testServer'))(),
    logger = testServer.app.get('logg');

server.use('/', testServer.app);

const listenerCallback = (err) => {
    if (!!err) {
        console.error(err.message || err.stack || err);
    }
    logger.info(`Server is listening on port ${conf.port}, in ${process.env.NODE_ENV} mode`);
};

/*HTTP*/
let _testInstance = http.createServer(testServer.app).listen(conf.port, listenerCallback);

/*Exception Handler*/
process.on('uncaughtException', (err) => {
    logger.fatal(`FATAL_EXCEPTION: ${err}`);
    logger.fatal(`FATAL_EXCEPTION: ${err.stack}`);
    logger.fatal(`**SERVER_CRASHED**`);

    _testInstance.close(() => {
        logger.info(`Shutting Down Server...`);
        process.exit(0);
    });
});
