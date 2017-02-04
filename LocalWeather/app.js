//数据填充

//天气信息相关DOM
var $cityName = $('#city-name');
var $updateTime = $('#update-time');
var $currenTemp = $('#current-temp');
var $windDirection = $('#wind-direction');
var $windStrength = $('#wind-strength');
var $humidity = $('#humidity')
var $date = $("#date");
var $week = $('#week');
var weatherInfo =$('#weather-info');
var windToday = $('#wind-today')
var dressingIndex = $('#dressing-index');
var dressingAdvice = $('#dressing-advice');
var uvIndex = $('#uv-index');
var comfortIndex = $('#comfort-index');
var washIndex = $('#wash-index');
var travelIndex = $('#travel-index');
var exerciseIndex = $('#exercise-index');
var dryingIndex = $('#drying-index');

//update DOM elements' text
//@param  el  [Object]   DOM elements
//@param  str [String]   text for the element's content
function updateText (el, str) {
    el.text(str);
}

//DOM ready操作
$(function () {
    var url = "http://v.juhe.cn/weather/index";
    var city = '武汉';
    
})