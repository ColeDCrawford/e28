export const axios = require('axios').create({
    // TODO update this for local/prod
    baseURL: 'https://e28-api.coledcrawford.me',
    // baseURL: 'http://e28-api.testing.loc',
    responseType: 'json'
})