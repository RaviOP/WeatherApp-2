const request = require('postman-request')
const WeatherStackApi = process.env.WEATHER_API_KEY

const Weather = (address,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key='+WeatherStackApi+'&query='+encodeURIComponent(address)

    request({url: url,json : true},(error,data)=>{
        if (error) {
            callback('Unable to Connect to Weather Services',undefined)
        }
        else if (data.body.error){
            callback('Unable to find Location.Please Specify a Valid Location',undefined)
        }
        else {
            callback(undefined,{
                Latitude: data.body.location.lat,
                Longitude: data.body.location.lon,
                Location: data.body.request.query,
                Temperature: `${data.body.current.temperature} °C`,
                Description: data.body.current.weather_descriptions[0],
                Humidity: `${data.body.current.humidity}%`,
                FeelsLike: `${data.body.current.feelslike} °C`
            })
        }
    })
}

module.exports = Weather