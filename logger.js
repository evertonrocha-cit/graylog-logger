'use strict';

const axios = require('axios');
const _ = require('underscore');

class GraylogLogger {
    constructor(
        graylogUrl,
        logOrigin,
        logLevel,
        connectionTimeout,
        env,
    ) {
        this.graylogUrl = graylogUrl,
            this.logOrigin = logOrigin,
            this.logLevel = logLevel,
            this.connectionTimeout = connectionTimeout
        this.env = env
    }

    async info(shortMessage, longMessage, extraFields = {}) {
        const createDefaultInstance = () => axios.create({
            baseURL: this.graylogUrl,
            timeout: this.connectionTimeout,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const request = createDefaultInstance();

        if (this.logLevel >= 6) {
            var logRegister = {
                short_message: shortMessage,
                full_message: longMessage,
                host: this.logOrigin,
                level: 6,
                _env: this.env,
            }

            if (extraFields) {
                logRegister = _.extend(logRegister, extraFields);
            }

            request.post('/gelf', logRegister)
                .then(function (response) {
                    console.log(`Graylog response: ${response.status} - ${response.statusText}`);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    async debug(shortMessage, longMessage, extraFields = {}) {
        const createDefaultInstance = () => axios.create({
            baseURL: this.graylogUrl,
            timeout: this.connectionTimeout,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const request = createDefaultInstance();

        if (this.logLevel >= 7) {

            var logRegister = {
                short_message: shortMessage,
                full_message: longMessage,
                host: this.logOrigin,
                level: 7,
                _env: this.env,
            }

            if (extraFields) {
                logRegister = _.extend(logRegister, extraFields);
            }

            request.post('/gelf', logRegister)
                .then(function (response) {
                    console.log(`Graylog response: ${response.status} - ${response.statusText}`);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    async warning(shortMessage, longMessage, extraFields = {}) {
        const createDefaultInstance = () => axios.create({
            baseURL: this.graylogUrl,
            timeout: this.connectionTimeout,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const request = createDefaultInstance();

        if (this.logLevel >= 4) {

            var logRegister = {
                short_message: shortMessage,
                full_message: longMessage,
                host: this.logOrigin,
                level: 4,
                _env: this.env,
            }

            if (extraFields) {
                logRegister = _.extend(logRegister, extraFields);
            }

            request.post('/gelf', logRegister)
                .then(function (response) {
                    console.log(`Graylog response: ${response.status} - ${response.statusText}`);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    async error(shortMessage, longMessage, extraFields = {}) {
        const createDefaultInstance = () => axios.create({
            baseURL: this.graylogUrl,
            timeout: this.connectionTimeout,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const request = createDefaultInstance();

        if (this.logLevel >= 3) {

            var logRegister = {
                short_message: shortMessage,
                full_message: longMessage,
                host: this.logOrigin,
                level: 3,
                _env: this.env,
            }

            if (extraFields) {
                logRegister = _.extend(logRegister, extraFields);
            }

            request.post('/gelf', logRegister)
                .then(function (response) {
                    console.log(`Graylog response: ${response.status} - ${response.statusText}`);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}

module.exports = GraylogLogger;
