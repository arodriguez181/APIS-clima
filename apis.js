const request = require('postman-request');
request('http://api.weatherstack.com/current?access_key=8ebc8bb04f8cf1fdde77f4e5220e23ff&query=19.249101,-103.697361', function(error, response, body) {
    if (error != null) {
        console.log('error:', error); // Print the error if one occurred
    } else {
        request('http://api.airvisual.com/v2/nearest_city?lat=19.249147&lon=-103.697362&key=2d33f008-3250-4dc0-868b-d838c8000f4d', function(error1, response2, body2) {
            if (error1 != null) {
                console.log('error:', error1); // Print the error if one occurred
            } else {
                // console.log('statusCode:', response2 && response2.statusCode); // Print the response status code if a response was received
                //console.log('body:', body2); // Print the HTML for the Google homepage.

                let eljson2 = JSON.parse(body2);
                //console.log(eljson2)


                //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                //console.log('body:', body); // Print the HTML for the Google homepage.

                let eljson = JSON.parse(body);
                console.log(eljson.current.temperature)
                console.log(eljson.current.weather_descriptions)
                console.log(eljson.current.wind_speed)
                console.log(eljson.current.humidity)
                console.log("La contaminacion aqius " + eljson2.data.current.pollution.aqius)
                console.log("La contaminacion aqicn " + eljson2.data.current.pollution.aqicn)
                console.log(eljson2.data.current.weather.tp)
                console.log(eljson2.data.current.weather.hu)


            }
        });
    }
});