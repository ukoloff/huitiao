(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

},{}],2:[function(require,module,exports){
module.exports = "<a href='#' title='Закрыть окно'>&times;</a>\n<form autocomplete=\"off\">\n<p>Укажите Ваш телефон<br>и мы Вам перезвоним:</p>\n<label><div>Имя</div><input type=\"text\" name=\"name\"></label>\n<label><div>Телефон\n(<span class=\"text-error\">обязательно</span>)</div>\n<input type=\"text\" name=\"tel\" autofocus required></label>\n<label><div>E-mail</div><input type=\"text\" name=\"mail\"></label>\n<label><div>Когда удобно звонить</div><input type=\"text\" name=\"time\"></label>\n<label><div>Примечания</div><textarea name=\"notes\"></textarea></label>\n<br><input type=\"submit\" value=\"Позвоните мне!\">\n<p></p>\n</form>";

},{}],3:[function(require,module,exports){
var jsonp, merge, random;

merge = require(1);

jsonp = function(options) {
  var Clear, Error, callback, cbname, data, h, js, k, q, timeout, url, v, _ref;
  _ref = merge(jsonp.defaults, options), url = _ref.url, callback = _ref.callback, timeout = _ref.timeout;
  while (window[cbname = "_" + (random(15))]) {}
  data = merge(options.data);
  data[callback] = cbname;
  q = '';
  for (k in data) {
    v = data[k];
    if ((v = String(v || '')).length) {
      q += (q.length || 0 <= url.indexOf('?') ? '&' : '?') + encodeURIComponent(k) + '=' + encodeURIComponent(v);
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
  js.async = true;
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

html = require(2);

submit = require(1);

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

},{"1":6,"2":2}],5:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOlxcVGVtcFxcZ2l0XFxodWl0aWFvXFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJDOi9UZW1wL2dpdC9odWl0aWFvL3NyYy9lbWFpbC5jb2ZmZWUiLCJDOi9UZW1wL2dpdC9odWl0aWFvL3NyYy9odG1sLmNvZmZlZSIsIkM6L1RlbXAvZ2l0L2h1aXRpYW8vc3JjL2pzb25wLmNvZmZlZSIsIkM6L1RlbXAvZ2l0L2h1aXRpYW8vc3JjL21haW4uY29mZmVlIiwiQzovVGVtcC9naXQvaHVpdGlhby9zcmMvbWVyZ2UuY29mZmVlIiwiQzovVGVtcC9naXQvaHVpdGlhby9zcmMvc3VibWl0LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gL14oKChbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKFxcLihbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKSopfCgoXFx4MjIpKCgoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oKFtcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmXXxcXHgyMXxbXFx4MjMtXFx4NWJdfFtcXHg1ZC1cXHg3ZV18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfChcXFxcKFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3Zl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSkpKigoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oXFx4MjIpKSlAKCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKVxcLikrKChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpJC9pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxhIGhyZWY9JyMnIHRpdGxlPSfQl9Cw0LrRgNGL0YLRjCDQvtC60L3Qvic+JnRpbWVzOzwvYT5cXG48Zm9ybSBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCI+XFxuPHA+0KPQutCw0LbQuNGC0LUg0JLQsNGIINGC0LXQu9C10YTQvtC9PGJyPtC4INC80Ysg0JLQsNC8INC/0LXRgNC10LfQstC+0L3QuNC8OjwvcD5cXG48bGFiZWw+PGRpdj7QmNC80Y88L2Rpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibmFtZVxcXCI+PC9sYWJlbD5cXG48bGFiZWw+PGRpdj7QotC10LvQtdGE0L7QvVxcbig8c3BhbiBjbGFzcz1cXFwidGV4dC1lcnJvclxcXCI+0L7QsdGP0LfQsNGC0LXQu9GM0L3Qvjwvc3Bhbj4pPC9kaXY+XFxuPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInRlbFxcXCIgYXV0b2ZvY3VzIHJlcXVpcmVkPjwvbGFiZWw+XFxuPGxhYmVsPjxkaXY+RS1tYWlsPC9kaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm1haWxcXFwiPjwvbGFiZWw+XFxuPGxhYmVsPjxkaXY+0JrQvtCz0LTQsCDRg9C00L7QsdC90L4g0LfQstC+0L3QuNGC0Yw8L2Rpdj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwidGltZVxcXCI+PC9sYWJlbD5cXG48bGFiZWw+PGRpdj7Qn9GA0LjQvNC10YfQsNC90LjRjzwvZGl2Pjx0ZXh0YXJlYSBuYW1lPVxcXCJub3Rlc1xcXCI+PC90ZXh0YXJlYT48L2xhYmVsPlxcbjxicj48aW5wdXQgdHlwZT1cXFwic3VibWl0XFxcIiB2YWx1ZT1cXFwi0J/QvtC30LLQvtC90LjRgtC1INC80L3QtSFcXFwiPlxcbjxwPjwvcD5cXG48L2Zvcm0+XCI7XG4iLCJ2YXIganNvbnAsIG1lcmdlLCByYW5kb207XG5cbm1lcmdlID0gcmVxdWlyZSgxKTtcblxuanNvbnAgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHZhciBDbGVhciwgRXJyb3IsIGNhbGxiYWNrLCBjYm5hbWUsIGRhdGEsIGgsIGpzLCBrLCBxLCB0aW1lb3V0LCB1cmwsIHYsIF9yZWY7XG4gIF9yZWYgPSBtZXJnZShqc29ucC5kZWZhdWx0cywgb3B0aW9ucyksIHVybCA9IF9yZWYudXJsLCBjYWxsYmFjayA9IF9yZWYuY2FsbGJhY2ssIHRpbWVvdXQgPSBfcmVmLnRpbWVvdXQ7XG4gIHdoaWxlICh3aW5kb3dbY2JuYW1lID0gXCJfXCIgKyAocmFuZG9tKDE1KSldKSB7fVxuICBkYXRhID0gbWVyZ2Uob3B0aW9ucy5kYXRhKTtcbiAgZGF0YVtjYWxsYmFja10gPSBjYm5hbWU7XG4gIHEgPSAnJztcbiAgZm9yIChrIGluIGRhdGEpIHtcbiAgICB2ID0gZGF0YVtrXTtcbiAgICBpZiAoKHYgPSBTdHJpbmcodiB8fCAnJykpLmxlbmd0aCkge1xuICAgICAgcSArPSAocS5sZW5ndGggfHwgMCA8PSB1cmwuaW5kZXhPZignPycpID8gJyYnIDogJz8nKSArIGVuY29kZVVSSUNvbXBvbmVudChrKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2KTtcbiAgICB9XG4gIH1cbiAgd2luZG93W2NibmFtZV0gPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgQ2xlYXIoKTtcbiAgICByZXR1cm4gdHlwZW9mIG9wdGlvbnMuc3VjY2VzcyA9PT0gXCJmdW5jdGlvblwiID8gb3B0aW9ucy5zdWNjZXNzKGRhdGEpIDogdm9pZCAwO1xuICB9O1xuICBFcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIENsZWFyKCk7XG4gICAgcmV0dXJuIHR5cGVvZiBvcHRpb25zLmVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBvcHRpb25zLmVycm9yKCkgOiB2b2lkIDA7XG4gIH07XG4gIGpzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIGpzLmFzeW5jID0gdHJ1ZTtcbiAganMub25lcnJvciA9IEVycm9yO1xuICBqcy5zcmMgPSB1cmwgKyBxO1xuICAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdKS5hcHBlbmRDaGlsZChqcyk7XG4gIGggPSBzZXRUaW1lb3V0KEVycm9yLCB0aW1lb3V0KTtcbiAgQ2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgZGVsZXRlIHdpbmRvd1tjYm5hbWVdO1xuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgICAgd2luZG93W2NibmFtZV0gPSBudWxsO1xuICAgIH1cbiAgICBjbGVhclRpbWVvdXQoaCk7XG4gICAganMub25lcnJvciA9IG51bGw7XG4gICAganMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChqcyk7XG4gICAgcmV0dXJuIGpzID0gbnVsbDtcbiAgfTtcbn07XG5cbmpzb25wLmRlZmF1bHRzID0ge1xuICBjYWxsYmFjazogJ2NhbGxiYWNrJyxcbiAgdGltZW91dDogMzAwMFxufTtcblxucmFuZG9tID0gZnVuY3Rpb24ocSkge1xuICB2YXIgbiwgcztcbiAgaWYgKHEgPT0gbnVsbCkge1xuICAgIHEgPSAxO1xuICB9XG4gIHMgPSAnJztcbiAgd2hpbGUgKHMubGVuZ3RoIDwgcSkge1xuICAgIG4gPSBNYXRoLmZsb29yKDYyICogTWF0aC5yYW5kb20oKSk7XG4gICAgcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG4gJSAyNiArICdBYTAnLmNoYXJDb2RlQXQobiAvIDI2KSk7XG4gIH1cbiAgcmV0dXJuIHM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGpzb25wO1xuIiwidmFyIGh0bWwsIHN1Ym1pdDtcblxuaHRtbCA9IHJlcXVpcmUoMik7XG5cbnN1Ym1pdCA9IHJlcXVpcmUoMSk7XG5cbnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gIHZhciBhLCBoaWRlLCBsaW5wZW4sIHBvcHVwLCB0b2tlbjtcbiAgaWYgKCEoYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodWl0aWFvJykpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRva2VuID0gYS5jbGFzc05hbWU7XG4gIHBvcHVwID0gbnVsbDtcbiAgYS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHBvcHVwKSB7XG4gICAgICByZXR1cm4gaGlkZSgpO1xuICAgIH1cbiAgICBhLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQocG9wdXAgPSBsaW5wZW4oKSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBsaW5wZW4gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGl2O1xuICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pZCA9ICdodWl0aWFvLXBvcHVwJztcbiAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcbiAgICBkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKVswXS5vbmNsaWNrID0gaGlkZTtcbiAgICBkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXS5vbnN1Ym1pdCA9IHN1Ym1pdCh0b2tlbiwgaGlkZSk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcbiAgcmV0dXJuIGhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICBwb3B1cC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBvcHVwKTtcbiAgICBwb3B1cCA9IG51bGw7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xufSk7XG4iLCJ2YXIgbWVyZ2U7XG5cbm1lcmdlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBrLCByLCB2LCB4LCBfaSwgX2xlbjtcbiAgciA9IHt9O1xuICBmb3IgKF9pID0gMCwgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgIHggPSBhcmd1bWVudHNbX2ldO1xuICAgIGlmICh4ICE9IG51bGwpIHtcbiAgICAgIGZvciAoayBpbiB4KSB7XG4gICAgICAgIHYgPSB4W2tdO1xuICAgICAgICByW2tdID0gdjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlO1xuIiwidmFyIGVtYWlsLCBqc29ucCwgc3VibWl0O1xuXG5lbWFpbCA9IHJlcXVpcmUoMSk7XG5cbmpzb25wID0gcmVxdWlyZSgyKTtcblxuc3VibWl0ID0gZnVuY3Rpb24odG9rZW4sIGhpZGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciAkaW5mbywgZGF0YSwgZXJyb3IsIGksIGluZm8sIF9pLCBfbGVuO1xuICAgIGRhdGEgPSB7XG4gICAgICBmb3JtX2FwaV90b2tlbjogdG9rZW5cbiAgICB9O1xuICAgICRpbmZvID0gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZSgncCcpO1xuICAgICRpbmZvID0gJGluZm9bJGluZm8ubGVuZ3RoIC0gMV07XG4gICAgaW5mbyA9IGZ1bmN0aW9uKHR4dCwga2xhc3MpIHtcbiAgICAgICRpbmZvLmlubmVySFRNTCA9IHR4dDtcbiAgICAgIGlmIChrbGFzcykge1xuICAgICAgICByZXR1cm4gJGluZm8uY2xhc3NOYW1lID0ga2xhc3M7XG4gICAgICB9XG4gICAgfTtcbiAgICBlcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGluZm8oXCLQodCx0L7QuSDQvtGC0L/RgNCw0LLQutC4INGB0L7QvtCx0YnQtdC90LjRj1wiLCAnZXJyb3InKTtcbiAgICB9O1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gdGhpcy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgaSA9IHRoaXNbX2ldO1xuICAgICAgaWYgKGkubmFtZSkge1xuICAgICAgICBkYXRhW2kubmFtZV0gPSBpLnZhbHVlLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKChkYXRhLnRlbC5yZXBsYWNlKC9cXEQrLywgJycpKS5sZW5ndGggPCA3KSB7XG4gICAgICBpbmZvKCfQndC10LLQtdGA0L3Ri9C5INGC0LXQu9C10YTQvtC9JywgJ2Vycm9yJyk7XG4gICAgICB0aGlzLnRlbC5mb2N1cygpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZGF0YS5tYWlsICYmICFlbWFpbC50ZXN0KGRhdGEubWFpbCkpIHtcbiAgICAgIGluZm8oJ9Cd0LXQstC10YDQvdGL0LkgRS1tYWlsJywgJ2Vycm9yJyk7XG4gICAgICB0aGlzLm1haWwuZm9jdXMoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaW5mbygn0J7RgtC/0YDQsNCy0LrQsCDRgdC+0L7QsdGJ0LXQvdC40Y8uLi4nLCAnaW5mbycpO1xuICAgIGpzb25wKHtcbiAgICAgIHVybDogXCJodHRwOi8vZ2V0c2ltcGxlZm9ybS5jb20vbWVzc2FnZXMvYWpheFwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgIHN1Y2Nlc3M6IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGlmICghZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5mbygn0KHQvtC+0LHRidC10L3QuNC1INC+0YLQv9GA0LDQstC70LXQvdC+Jyk7XG4gICAgICAgICAgX3RoaXMub25zdWJtaXQgPSBoaWRlO1xuICAgICAgICAgIHJldHVybiBfdGhpc1tfdGhpcy5sZW5ndGggLSAxXS52YWx1ZSA9ICfQl9Cw0LrRgNGL0YLRjCc7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKVxuICAgIH0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc3VibWl0O1xuIl19
