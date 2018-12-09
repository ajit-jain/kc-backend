module.exports = function (app) {
    app.use('/api/v1',require('./sms_api'));
    return app;
}