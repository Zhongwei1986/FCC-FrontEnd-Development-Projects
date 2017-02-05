//全局变量
var $window = $(window);
var $citySearch = $('#city-search');
var $searchBtn = $('#search-btn');
var $cityName = $('#city-name');
var $currentWeatherArr = [
  $('#current-temp'), $('#wind-direction'), $('#wind-strength'),
  $('#humidity'), $('#update-time'),
];
var $todayWeatherArr = [
  $("#date"), $("#date"), $("#temperature"),
  $('#weather-info'), $('#wind-today'), $('#dressing-index'),
  $('#dressing-advice'), $('#uv-index'), $('#comfort-index'),
  $('#wash-index'), $('#travel-index'), $('#exercise-index'),
  $('#drying-index')
];
var appkey = '3e71af0ff0937226f9690f000ce27c3f';
var cities = [];

/**
 * getCityResults 获得城市列表
 */
function getCityResults() {
  var preUrl = "http://v.juhe.cn/weather/citys";
  var getUrl = preUrl + "?key=" + appkey;
  $.getJSON(getUrl, function(data) {;
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
      for (var i = 0, max = currentWeather.length; i < max; i++) {
        updateText($currentWeatherArr[i], currentWeather[index]
        }
      });
  }