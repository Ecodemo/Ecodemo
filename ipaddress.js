String.prototype.format = function(args) {
  if (arguments.length > 0) {
    var result = this;
    if (arguments.length == 1 && typeof(args) == "object") {
      for (var key in args) {
        var reg = new RegExp("({" + key + "})", "g");
        result = result.replace(reg, args[key]);
      }
    } else {
      for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] == undefined) {
          return "";
        } else {
          var reg = new RegExp("({[" + i + "]})", "g");
          result = result.replace(reg, arguments[i]);
        }
      }
    }
    return result;
  } else {
    return this;
  }
}
var moieo_prompt = function (message, time) {
  time = (time === undefined) ? 1000 : time;
  $('<div id="promptModal">')
    .appendTo('body')
    .css({"position":"fixed",
      "opacity": "0.8",
      "border-radius": "15px",
      "background": "#A29AA9",
      "color": "#fff",
      "z-index": 99999,
      "text-align": "center",
      "padding": "10px",
      "width": "300px",
      "justify-content": "center",
      "top": "50%",
      "left": "50%",
      "transform": "translate(-50%,-50%)"
    })
    .html(message)
    .show()
    .delay(time)
    .fadeOut(800,function(){
      $('#promptModal').remove();
    });
};

function getOS() {
  var sUserAgent = navigator.userAgent;
  var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
  var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
  if (isMac) return "Mac";
  var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
  if (isUnix) return "Unix";
  var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
  if (isLinux) return "Linux";
  if (isWin) {
    var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
    if (isWin2K) return "Windows 2000";
    var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
    if (isWinXP) return "Windows XP";
    var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
    if (isWin2003) return "Windows 2003";
    var isWinVista= sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
    if (isWinVista) return "Windows Vista";
    var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
    if (isWin7) return "Windows 7";
    var isWin10 = sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") > -1;
    if (isWin10) return "Windows 10";
    var isWin11 = sUserAgent.indexOf("Windows NT 11") > -1 || sUserAgent.indexOf("Windows 11") > -1;
    if (isWin11) return "Windows 11";
  }
  return "未知";
}

function getBrowse () {
  var browser = {};
  var userAgent = navigator.userAgent.toLowerCase();
  var s;
  (s = userAgent.match(/msie ([\d.]+)/)) ? browser.ie = s[1] : (s = userAgent.match(/firefox\/([\d.]+)/)) ? browser.firefox = s[1] : (s = userAgent.match(/chrome\/([\d.]+)/)) ? browser.chrome = s[1] : (s = userAgent.match(/opera.([\d.]+)/)) ? browser.opera = s[1] : (s = userAgent.match(/version\/([\d.]+).*safari/)) ? browser.safari = s[1] : 0;
  var version = "";
  if (browser.ie) {
    version = 'Internet Explorer/' + browser.ie;
  }
  else {
    if (browser.firefox) {
      version = 'Firefox/' + browser.firefox;
    }
    else {
      if (browser.chrome) {
        version = 'Chrome/' + browser.chrome;
      }
      else {
        if (browser.opera) {
          version = 'Opera/' + browser.opera;
        }
        else {
          if (browser.safari) {
            version = 'Safari' + browser.safari;
          }
          else {
            version = '未知';
          }
        }
      }
    }
  }
  return version;
}

function moieo_ipaddress_callback(data) {
  const template_1 = "IP地址：{ip}<br/>IP属地：{country} {province} {city} {isp} {net}";
  $('#ips').html(template_1.format({
    ip: data.ip,
    country: data.country,
    province: data.province,
    city: data.city,
    isp: data.isp,
    net: data.net
  }));
  const template_2 = "✧*｡٩(ˊω`*)ﻭ✧*｡<br />欢迎来自 {country} {province} {city} 的朋友<br/>您的 IP 是：{ip} <br/>使用的是 {system} 操作系统 {browser} 浏览器";
  // $('#ips').html("IP地址："+ data.ip+"<br/>IP属地："+ data.country + " " + data.province+" "+data.city +" " + data.isp + " " + data.net);
  moieo_prompt(template_2.format({
    country: data.country,
    province: data.province,
    city: data.city,
    ip: data.ip,
    system: getOS(),
    browser: getBrowse()
  }), 2200);
  // moieo_prompt("✧*｡٩(ˊω`*)و✧*｡<br />欢迎来自 "+ data.country + " " + data.province+" "+data.city + " 的朋友<br/>您的 IP 地址是："+data.ip, 2200);
}

const moieo_script = document.createElement('script');
moieo_script.src = "https://ip.useragentinfo.com/jsonp?callback=moieo_ipaddress_callback";
document.body.appendChild(moieo_script);
