const axios = require('axios');

const apiCall = async (req, res) => {
    try {
        const apiKey = '5xEKlDvWzrZGRvKU18e5DD4MqmzQCOpx';
        const baseUrl = 'https://api.nytimes.com/svc/topstories/v2';
        const section = 'technology';
        const format = 'json';
        const queryParams = {
            'api-key': apiKey
        };
        const apiUrl = `${baseUrl}/${section}.${format}`;
        const response = await axios.get(apiUrl, { params: queryParams })
        console.log(response?.data)
        res.send({ status: 200, data: response?.data })
    } catch (err) {
        console.log(err?.message)
    }
}

module.exports = apiCall;