const request = require('request')


const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b46eccda1d3cb72c5b2f60f7259ea0e8&query=' + long + ',' + lat + '&units=f'
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        }
        else if (body.error) {
            callback('Location not found.', undefined)
        }
        else {
            const temp = body.current.temperature
            const feels = body.current.feelslike
            const desc = body.current.weather_descriptions[0]
            const humidity = body.current.humidity
            callback(undefined, desc + '. It is currently ' + temp + ' degrees out. It feels like ' + feels + ' degrees. The humidity is ' + humidity + '.')
        }
    })
}

module.exports = forecast
