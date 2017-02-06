//全局变量
var appkey = '3e71af0ff0937226f9690f000ce27c3f';
var cities = [];

/**   
 * getCityResults 获得城市列表
 */
function getCityResults() {
  var juheUrl = "http://v.juhe.cn/weather/citys";
  var getUrl = juheUrl + "?dtype=&key=" + appkey + "&callback=?";
  $.getJSON(getUrl, function(response) {
    // console.log(response);
    $.each(response.result, function(i, e) {
      if ($.inArray(e.city, cities) === -1) {
        cities.push(e.city);
      }
    });
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
  var $currentWeatherArr = {
    temp: $('#current-temp'),
    wind_direction: $('#wind-direction'),
    wind_strength: $('#wind-strength'),
    humidity: $('#humidity'),
    time: $('#update-time')
  };
  for (var key in currentWeather) {
    updateText($currentWeatherArr.key, currentWeather.key);
  }
}

/**
 * updateTodayWeather 更新今天天气
 * 
 * @param {object} todayWeather 从API获得的天气数据
 */
function updateTodayWeather(todayWeather) {
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
  for (var key in todayWeather) {
    updateText($todayWeatherArr.key, todayWeather.key);
  }
}

/**
 * updateFutureWeather 更新未来几天天气信息
 * 
 * @param {Array} futureWeather 未来几日天气
 */
function updateFutureWeather(futureWeather) {
  var $futureArr = $('#future-weather .well');
  for (var i = 0, max = futureWeather.length; i < max; i++) {
    var dayWeather = futureWeather[i];
    var $el = $($futureArr[i]);
    $el.children('.future-date').text(dayWeather.date);
    $el.children('.future-week').text(dayWeather.week);
    $el.after(
      '<tr><td>温度：</td><td>' + dayWeather.temperature + '</td></tr>' +
      '<tr><td>天气：</td><td>' + dayWeather.weather + '</td></tr>' +
      '<tr><td>风向风力：</td><td>' + dayWeather.wind + '</td><tr>'
    );
  }
}
/**
 * getWeatherByCityName由城市名获得天气数据
 * 
 * @param {string} cityname 城市名，汉字形式
 */
function getWeatherByCityName(cityname) {
  var juheUrl = "http://v.juhe.cn/weather/index";
  cityname = encodeURI(cityname);
  var getUrl = juheUrl + '?format=2&cityname=' + cityname +
    "&key=" + appkey + "&callback=?";
  $.getJSON(getUrl, function(response) {
    var currentWeather = response.result.sk;
    var todayWeather = response.result.today;
    var futureWeather = response.result.future;
    updateCurrentWeather(currentWeather);
    updateTodayWeather(todayWeather);
    updateFutureWeather(futureWeather);
  });
}

/**
 * checkCityName 检查城市名是否在API支持列表中
 * 
 * @returns
 */
function checkCityName() {
  var cityname = $('#city-input').val();
  if (cities.indexOf(cityname)) {
    return true;
  } else {
    return false;
  }
}

//绑定点击事件
$('#search-btn').on('click', function() {
  e.preventDefault();
  if (cities.length === 0) {
    // getCityResults();
    console.log('test4');
  }
  // if (checkCityName()) {
  //   console.log('test2');
  //   // updateText($cityName, cityname);
  //   // getWeatherByCityName(cityname);
  //   // $('.widgets').css('display', 'block');
  // } else {
  //   $('#error-prompt').css('display', 'block')
  //     .text('无此城市天气信息，请检查您的输入!');
  // }
});

//监控键盘
// $(window).keydown(function(event) {
//   if (event.which === 13) {
//     if (checkCityName()) {
//       updateText($cityName, cityname);
//       getWeatherByCityName(cityname);
//       $('.widgets').css('display', 'block');
//     } else {
//       $('#error-prompt').css('display', 'block')
//         .text('无此城市天气信息，请检查您的输入!');
//     }
//   }
// });