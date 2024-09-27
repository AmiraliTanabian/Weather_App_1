let searchBtn = document.querySelector('button')
let containerBox = document.querySelector('div')
let searchBar = document.querySelector('input')
let afterClickStyle = document.querySelectorAll('h1,h4,img')

const citys = [
    { name: 'کرج', temp: 30, weather: 'بارانی', humidity: 13, windSpeed: 7 },
    { name: 'تهران', temp: 32, weather: 'آفتابی', humidity: 2, windSpeed: 34 },
    { name: 'قزوین', temp: 34, weather: 'برفی', humidity: 5, windSpeed: 3},
    { name: 'تبریز', temp: 9, weather: 'بارانی', humidity: 19, windSpeed: 8 },
    { name: 'مشهد', temp: 28, weather: 'بارانی', humidity: 17, windSpeed: 1 },
    { name: 'اصفهان', temp: 26, weather: 'ابری', humidity: 7, windSpeed: 17 },
    { name: 'اراک', temp: 24, weather: 'طوفانی', humidity: 3, windSpeed: 19 },
    { name: 'مازندران', temp: 20, weather: 'مه و ابر شدید', humidity: 11, windSpeed: 12 }
]



function clickBtn() {
    cityDates = citys.find(function(city){
        return city.name === searchBar.value.trim()
    })

    console.log(cityDates)
    // some style for show dates 
    containerBox.style.height = '65%'
    containerBox.style.top = '10%'
    searchBar.style.height = '10%'
    searchBar.style.top = '15%'
    searchBtn.style.top = '5%'
    searchBtn.style.height = '10%'
    

    // we can't find the city in the database
    if (cityDates === undefined){
        console.log('City Can not found!')
    }else{

        // show the elements for show dates 
        afterClickStyle.forEach(function(element){
            element.style.display = 'block'
        })

        document.querySelector('h1').innerHTML = ' آب و هوا برای ' + cityDates.name
        document.querySelector('#temp').innerHTML = cityDates.temp + '°C'
        document.querySelector('#weather').innerHTML = cityDates.weather
        document.querySelector('#humidity').innerHTML = 'رطوبت: ' + cityDates.humidity + '% '
        document.querySelector('#windSpeed').innerHTML = 'سرعت باد:' + cityDates.windSpeed + 'km/h'
        let imgSrc = 'icon/' + cityDates.weather + '.png'
        document.querySelector('img').setAttribute('src', imgSrc)

    }

}

searchBtn.addEventListener('click', clickBtn)

(function () { 
    console.log("Enter to IIFE")
    let randomNum = Math.floor(Math.random() * 5)
    console.log(randomNum)
    document.body.style.backgroundImage = 'url(Image/' + randomNum + '.jpg'
}())
