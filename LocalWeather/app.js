//全局变量
var $window = $(window);
var $citySearch = $('#city-search');
var $searchBtn = $('#search-btn');
var $cityName = $('#city-name');
var $currentWeatherArr = {
  temp: $('#current-temp'),
  wind_direction: $('#wind-direction'),
  wind_strength: $('#wind-strength'),
  humidity: $('#humidity'),
  time: $('#update-time')
};

var $todayWeatherArr = {
  date_y: $("#date"),
  week: $("#week"),
  temperature: $("#temperature"),
  weather: $('#weather'),
  wind: $('#wind-today'),
  dressing_index: $('#dressing-index'),
  dressing_advice: $('#dressing-advice'),
  uv_index: $('#uv-index'),
  comfort_index: $('#comfort-index'),
  wash_index: $('#wash-index'),
  travel_index: $('#travel-index'),
  exercise_index: $('#exercise-index'),
  drying_index: $('#drying-index')
};
var appkey = '3e71af0ff0937226f9690f000ce27c3f';
var cities = [];

/**
 * getCityResults 获得城市列表
 */
function getCityResults() {
  var preUrl = "http://v.juhe.cn/weather/citys";
  var getUrl = preUrl + "?key=" + appkey;
  $.getJSON(getUrl, function(data) {
    data = JSON.parse(data);
    cities = data.result;
  });
  return cities;
}


/**
 * updateText 更新DOM节点的文本
 * 
 * @param {Object} el 元素节点
 * @param {String} str 文本字符串
 */
function updateText(el, str) {
  el.text(str);
}


/**
 * updateCurrentWeather 更新当天天气信息
 * 
 * @param {object} currentWeather 从API获得的当前天气数据
 */
function updateCurrentWeather(currentWeather) {
  for (var key in currentWeather) {
    updateText($currentWeatherArr.key, currentWeather.key);
  }
}

/**
 * updateTodayWeather 更新今天天气
 * 
 * @param {object} todayWeather
 */
function updateTodayWeather(todayWeather) {
  for (var key in todayWeather) {
    updateText($todayWeatherArr.key, todayWeather.key);
  }
}

/**
 * getWeatherByCityName由城市名获得天气数据
 * 
 * @param {string} cityname 城市名，汉字形式
 */
function getWeatherByCityName(cityname) {
  var preUrl = "http://v.juhe.cn/weather/index";
  cityname = encodeURI(cityname);
  var getUrl = api + '?format=2&cityname=' + cityname + "&key=" + appkey;
  $.getJSON(getUrl, function(data) {
    data = JSON.parse(data);
    var currentWeather = data.result.sk;
    var todayWeather = data.result.today;
    var futureWeather = data.result.future;

  });
}