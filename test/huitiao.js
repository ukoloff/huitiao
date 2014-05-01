(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

},{}],2:[function(require,module,exports){
module.exports = "<a href='#' title='Закрыть окно'>&times;</a>\n<form autocomplete=\"off\">\n<p>Укажите Ваш телефон<br>и мы Вам перезвоним:</p>\n<label><div>Имя</div><input type=\"text\" name=\"name\"></label>\n<label><div>Телефон\n(<span class=\"text-error\">обязательно</span>)</div>\n<input type=\"tel\" name=\"tel\" autofocus required></label>\n<label><div>E-mail</div><input type=\"email\" name=\"mail\"></label>\n<label><div>Когда удобно звонить</div><input type=\"text\" name=\"time\"></label>\n<label><div>Примечания</div><textarea name=\"notes\"></textarea></label>\n<br><input type=\"submit\" value=\"Позвоните мне!\">\n<p></p>\n</form>";

},{}],3:[function(require,module,exports){
var jsonp, merge, quote, random;

merge = require(1);

quote = encodeURIComponent;

jsonp = function(options) {
  var Clear, Error, callback, cbname, data, h, js, k, q, timeout, url, v, _ref;
  _ref = merge(jsonp.defaults, options), url = _ref.url, callback = _ref.callback, timeout = _ref.timeout;
  while (window[cbname = "_" + (random(15))]) {}
  data = merge(options.data);
  data[callback] = cbname;
  q = '';
  for (k in data) {
    v = data[k];
    if ((v != null) && (v = String(v)).length) {
      q += "" + (q.length || 0 <= url.indexOf('?') ? '&' : '?') + (quote(k)) + "=" + (quote(v));
    }
  }
  window[cbname] = function(data) {
    Clear();
    return typeof options.success === "function" ? options.success(data) : void 0;
  };
  Error = function() {
    Clear();
    return typeof options.error === "function" ? options.error() : void 0;
  };
  js = document.createElement('script');
  js.onerror = Error;
  js.src = url + q;
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(js);
  h = setTimeout(Error, timeout);
  Clear = function() {
    try {
      delete window[cbname];
    } catch (_error) {
      window[cbname] = null;
    }
    clearTimeout(h);
    js.onerror = null;
    js.parentNode.removeChild(js);
    return js = null;
  };
};

jsonp.defaults = {
  callback: 'callback',
  timeout: 3000
};

random = function(q) {
  var n, s;
  if (q == null) {
    q = 1;
  }
  s = '';
  while (s.length < q) {
    n = Math.floor(62 * Math.random());
    s += String.fromCharCode(n % 26 + 'Aa0'.charCodeAt(n / 26));
  }
  return s;
};

module.exports = jsonp;

},{"1":5}],4:[function(require,module,exports){
var html, submit;

html = require(1);

submit = require(2);

setTimeout(function() {
  var a, hide, linpen, popup, token;
  if (!(a = document.getElementById('huitiao'))) {
    return;
  }
  token = a.className;
  popup = null;
  a.onclick = function() {
    if (popup) {
      return hide();
    }
    a.parentElement.appendChild(popup = linpen());
    return false;
  };
  linpen = function() {
    var div;
    div = document.createElement('div');
    div.id = 'huitiao-popup';
    div.innerHTML = html;
    div.getElementsByTagName('a')[0].onclick = hide;
    div.getElementsByTagName('form')[0].onsubmit = submit(token, hide);
    return div;
  };
  return hide = function() {
    popup.parentNode.removeChild(popup);
    popup = null;
    return false;
  };
});

},{"1":2,"2":6}],5:[function(require,module,exports){
var merge;

merge = function() {
  var k, r, v, x, _i, _len;
  r = {};
  for (_i = 0, _len = arguments.length; _i < _len; _i++) {
    x = arguments[_i];
    if (x != null) {
      for (k in x) {
        v = x[k];
        r[k] = v;
      }
    }
  }
  return r;
};

module.exports = merge;

},{}],6:[function(require,module,exports){
var email, jsonp, submit;

email = require(1);

jsonp = require(2);

submit = function(token, hide) {
  return function() {
    var $info, data, error, i, info, _i, _len;
    data = {
      form_api_token: token
    };
    $info = this.getElementsByTagName('p');
    $info = $info[$info.length - 1];
    info = function(txt, klass) {
      $info.innerHTML = txt;
      if (klass) {
        return $info.className = klass;
      }
    };
    error = function() {
      return info("Сбой отправки сообщения", 'error');
    };
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      i = this[_i];
      if (i.name) {
        data[i.name] = i.value.replace(/^\s+|\s+$/g, '');
      }
    }
    if ((data.tel.replace(/\D+/, '')).length < 7) {
      info('Неверный телефон', 'error');
      this.tel.focus();
      return false;
    }
    if (data.mail && !email.test(data.mail)) {
      info('Неверный E-mail', 'error');
      this.mail.focus();
      return false;
    }
    info('Отправка сообщения...', 'info');
    jsonp({
      url: "http://getsimpleform.com/messages/ajax",
      data: data,
      error: error,
      success: (function(_this) {
        return function(data) {
          if (!data.success) {
            return error();
          }
          info('Сообщение отправлено');
          _this.onsubmit = hide;
          return _this[_this.length - 1].value = 'Закрыть';
        };
      })(this)
    });
    return false;
  };
};

module.exports = submit;

},{"1":1,"2":3}]},{},[4])


//# sourceMappingURL=huitiao.map