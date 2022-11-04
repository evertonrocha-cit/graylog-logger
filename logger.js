'use strict';

const axios = require('axios');

class GraylogLogger {
    constructor(
        graylogUrl, 
        logOrigin, 
        logLevel,
        connectionTimeout
    ) {
        this.graylogUrl = graylogUrl,
        this.logOrigin = logOrigin,
        this.logLevel = logLevel,
        this.connectionTimeout = connectionTimeout
    }

    async info(shortMessage, longMessage) {
        const createDefaultInstance = () => axios.create({
            baseURL: this.graylogUrl,
            timeout: this.connectionTimeout,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const request = createDefaultInstance();

        if (this.logLevel <= 6){
            request.post('/gelf', {
                short_message: shortMessage,
                full_message: longMessage,
                host: this.logOrigin,
                level: 6
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
   }

    async debug(shortMessage, longMessage) {
        const createDefaultInstance = () => axios.create({
            baseURL: this.graylogUrl,
            timeout: this.connectionTimeout,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const request = createDefaultInstance();

        if (this.logLevel <= 7){
            request.post('/gelf', {
                short_message: shortMessage,
                full_message: longMessage,
                host: this.logOrigin,
                level: 7
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    async warning(shortMessage, longMessage) {
        const createDefaultInstance = () => axios.create({
            baseURL: this.graylogUrl,
            timeout: this.connectionTimeout,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const request = createDefaultInstance();

        if (this.logLevel <= 4) {
            request.post('/gelf', {
                short_message: shortMessage,
                full_message: longMessage,
                host: this.logOrigin,
                level: 4
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    }

    async error(shortMessage, longMessage) {
        const createDefaultInstance = () => axios.create({
            baseURL: this.graylogUrl,
            timeout: this.connectionTimeout,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const request = createDefaultInstance();

        if(this.logLevel <= 3) {
            request.post('/gelf', {
                short_message: shortMessage,
                full_message: longMessage,
                host: this.logOrigin,
                level: 3
            },
            )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}

module.exports = GraylogLogger;
