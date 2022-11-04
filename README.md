# Graylog GELF HTTP Client

A client logger for GELF messages sent via HTTP to a Graylog server based on preconfigured log level.

#Usage 

```
const graylogLogger = require('graylog-http-gelf-client');
const logger = new graylogLogger.GraylogLogger({
    graylogUrl: localhost:12001/gelf 
    logOrigin: my-application
    logLevel: int value based on syslog level
    connectionTimeout: connectionTimeout for axios
})

logger.error(short_message, long_message)
```