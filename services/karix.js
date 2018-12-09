const request = require('request-promise');
module.exports = class {

    constructor(UID, TOKEN) {
        this.karix_uid = UID || process.env.KARIX_UID;
        this.karix_token = TOKEN || process.env.KARIX_TOKEN;
    }
    sendMessage(from, to, message) {
        const options = {
            method: 'POST',
            uri: 'https://api.karix.io/message/',
            headers: {
                "Authorization": `Basic ${Buffer.from(`${this.karix_uid}:${this.karix_token}`).toString('base64')}`
            },
            body: {
                "source": from,
                "destination": to,
                "text": message
            },
            json: true
        }
        return request(options);

    }
    getMessages(page=1,limit=10) {
        const options = {
            method: 'GET',
            uri: 'https://api.karix.io/message/',
            headers: {
                "Authorization": `Basic ${Buffer.from(`${this.karix_uid}:${this.karix_token}`).toString('base64')}`
            },
            qs:{
                limit,
                offset:(page-1)*limit
            },
            json: true
        }
        return request(options);

    }
}