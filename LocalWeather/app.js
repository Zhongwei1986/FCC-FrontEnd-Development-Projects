//数据填充

//天气信息相关DOM
var $citySearch = $('#city-search');
var $searchBtn = $('#search-btn');
var $cityName = $('#city-name');
var $updateTime = $('#update-time');
var $currenTemp = $('#current-temp');
var $windDirection = $('#wind-direction');
var $windStrength = $('#wind-strength');
var $humidity = $('#humidity');
var $date = $("#date");
var $week = $('#week');
var weatherInfo = $('#weather-info');
var windToday = $('#wind-today');
var dressingIndex = $('#dressing-index');
var dressingAdvice = $('#dressing-advice');
var uvIndex = $('#uv-index');
var comfortIndex = $('#comfort-index');
var washIndex = $('#wash-index');
var travelIndex = $('#travel-index');
var exerciseIndex = $('#exercise-index');
var dryingIndex = $('#drying-index');



/**
 * updateText 更新DOM节点的文本
 * 
 * @param {Object} el
 * @param {String} str
 */
function updateText(el, str) {
  el.text(str);
}

$searchBtn.on('click', function() {
  var url = "http://v.juhe.cn/weather/index";
  var cityName;
});