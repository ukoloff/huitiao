(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

},{}],2:[function(require,module,exports){
module.exports = "<a href='#' title='Закрыть окно'>&times;</a>\n<form autocomplete=\"off\">\n<div>Укажите Ваш телефон<br>и мы Вам перезвоним:</div>\n<label><div>Имя</div><input type=\"text\" name=\"name\"></label>\n<label><div>Телефон\n(<span class=\"text-error\">обязательно</span>)</div>\n<input type=\"text\" name=\"tel\" autofocus required></label>\n<label><div>E-mail</div><input type=\"text\" name=\"mail\"></label>\n<label><div>Когда удобно звонить</div><input type=\"text\" name=\"time\"></label>\n<label><div>Примечания</div><textarea name=\"notes\"></textarea></label>\n<br><input type=\"submit\" value=\"Позвоните мне!\">\n<div></div>\n</form>";

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
    $info = this.getElementsByTagName('div');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOlxcVGVtcFxcZ2l0XFxodWl0aWFvXFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJDOi9UZW1wL2dpdC9odWl0aWFvL3NyYy9lbWFpbC5jb2ZmZWUiLCJDOi9UZW1wL2dpdC9odWl0aWFvL3NyYy9odG1sLmNvZmZlZSIsIkM6L1RlbXAvZ2l0L2h1aXRpYW8vc3JjL2pzb25wLmNvZmZlZSIsIkM6L1RlbXAvZ2l0L2h1aXRpYW8vc3JjL21haW4uY29mZmVlIiwiQzovVGVtcC9naXQvaHVpdGlhby9zcmMvbWVyZ2UuY29mZmVlIiwiQzovVGVtcC9naXQvaHVpdGlhby9zcmMvc3VibWl0LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gL14oKChbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKFxcLihbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKSopfCgoXFx4MjIpKCgoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oKFtcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmXXxcXHgyMXxbXFx4MjMtXFx4NWJdfFtcXHg1ZC1cXHg3ZV18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfChcXFxcKFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3Zl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSkpKigoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oXFx4MjIpKSlAKCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKVxcLikrKChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpJC9pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxhIGhyZWY9JyMnIHRpdGxlPSfQl9Cw0LrRgNGL0YLRjCDQvtC60L3Qvic+JnRpbWVzOzwvYT5cXG48Zm9ybSBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCI+XFxuPGRpdj7Qo9C60LDQttC40YLQtSDQktCw0Ygg0YLQtdC70LXRhNC+0L08YnI+0Lgg0LzRiyDQktCw0Lwg0L/QtdGA0LXQt9Cy0L7QvdC40Lw6PC9kaXY+XFxuPGxhYmVsPjxkaXY+0JjQvNGPPC9kaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm5hbWVcXFwiPjwvbGFiZWw+XFxuPGxhYmVsPjxkaXY+0KLQtdC70LXRhNC+0L1cXG4oPHNwYW4gY2xhc3M9XFxcInRleHQtZXJyb3JcXFwiPtC+0LHRj9C30LDRgtC10LvRjNC90L48L3NwYW4+KTwvZGl2PlxcbjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ0ZWxcXFwiIGF1dG9mb2N1cyByZXF1aXJlZD48L2xhYmVsPlxcbjxsYWJlbD48ZGl2PkUtbWFpbDwvZGl2PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJtYWlsXFxcIj48L2xhYmVsPlxcbjxsYWJlbD48ZGl2PtCa0L7Qs9C00LAg0YPQtNC+0LHQvdC+INC30LLQvtC90LjRgtGMPC9kaXY+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInRpbWVcXFwiPjwvbGFiZWw+XFxuPGxhYmVsPjxkaXY+0J/RgNC40LzQtdGH0LDQvdC40Y88L2Rpdj48dGV4dGFyZWEgbmFtZT1cXFwibm90ZXNcXFwiPjwvdGV4dGFyZWE+PC9sYWJlbD5cXG48YnI+PGlucHV0IHR5cGU9XFxcInN1Ym1pdFxcXCIgdmFsdWU9XFxcItCf0L7Qt9Cy0L7QvdC40YLQtSDQvNC90LUhXFxcIj5cXG48ZGl2PjwvZGl2PlxcbjwvZm9ybT5cIjtcbiIsInZhciBqc29ucCwgbWVyZ2UsIHJhbmRvbTtcblxubWVyZ2UgPSByZXF1aXJlKDEpO1xuXG5qc29ucCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgdmFyIENsZWFyLCBFcnJvciwgY2FsbGJhY2ssIGNibmFtZSwgZGF0YSwgaCwganMsIGssIHEsIHRpbWVvdXQsIHVybCwgdiwgX3JlZjtcbiAgX3JlZiA9IG1lcmdlKGpzb25wLmRlZmF1bHRzLCBvcHRpb25zKSwgdXJsID0gX3JlZi51cmwsIGNhbGxiYWNrID0gX3JlZi5jYWxsYmFjaywgdGltZW91dCA9IF9yZWYudGltZW91dDtcbiAgd2hpbGUgKHdpbmRvd1tjYm5hbWUgPSBcIl9cIiArIChyYW5kb20oMTUpKV0pIHt9XG4gIGRhdGEgPSBtZXJnZShvcHRpb25zLmRhdGEpO1xuICBkYXRhW2NhbGxiYWNrXSA9IGNibmFtZTtcbiAgcSA9ICcnO1xuICBmb3IgKGsgaW4gZGF0YSkge1xuICAgIHYgPSBkYXRhW2tdO1xuICAgIGlmICgodiA9IFN0cmluZyh2IHx8ICcnKSkubGVuZ3RoKSB7XG4gICAgICBxICs9IChxLmxlbmd0aCB8fCAwIDw9IHVybC5pbmRleE9mKCc/JykgPyAnJicgOiAnPycpICsgZW5jb2RlVVJJQ29tcG9uZW50KGspICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHYpO1xuICAgIH1cbiAgfVxuICB3aW5kb3dbY2JuYW1lXSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBDbGVhcigpO1xuICAgIHJldHVybiB0eXBlb2Ygb3B0aW9ucy5zdWNjZXNzID09PSBcImZ1bmN0aW9uXCIgPyBvcHRpb25zLnN1Y2Nlc3MoZGF0YSkgOiB2b2lkIDA7XG4gIH07XG4gIEVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgQ2xlYXIoKTtcbiAgICByZXR1cm4gdHlwZW9mIG9wdGlvbnMuZXJyb3IgPT09IFwiZnVuY3Rpb25cIiA/IG9wdGlvbnMuZXJyb3IoKSA6IHZvaWQgMDtcbiAgfTtcbiAganMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAganMuYXN5bmMgPSB0cnVlO1xuICBqcy5vbmVycm9yID0gRXJyb3I7XG4gIGpzLnNyYyA9IHVybCArIHE7XG4gIChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0pLmFwcGVuZENoaWxkKGpzKTtcbiAgaCA9IHNldFRpbWVvdXQoRXJyb3IsIHRpbWVvdXQpO1xuICBDbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICBkZWxldGUgd2luZG93W2NibmFtZV07XG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICB3aW5kb3dbY2JuYW1lXSA9IG51bGw7XG4gICAgfVxuICAgIGNsZWFyVGltZW91dChoKTtcbiAgICBqcy5vbmVycm9yID0gbnVsbDtcbiAgICBqcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGpzKTtcbiAgICByZXR1cm4ganMgPSBudWxsO1xuICB9O1xufTtcblxuanNvbnAuZGVmYXVsdHMgPSB7XG4gIGNhbGxiYWNrOiAnY2FsbGJhY2snLFxuICB0aW1lb3V0OiAzMDAwXG59O1xuXG5yYW5kb20gPSBmdW5jdGlvbihxKSB7XG4gIHZhciBuLCBzO1xuICBpZiAocSA9PSBudWxsKSB7XG4gICAgcSA9IDE7XG4gIH1cbiAgcyA9ICcnO1xuICB3aGlsZSAocy5sZW5ndGggPCBxKSB7XG4gICAgbiA9IE1hdGguZmxvb3IoNjIgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICBzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUobiAlIDI2ICsgJ0FhMCcuY2hhckNvZGVBdChuIC8gMjYpKTtcbiAgfVxuICByZXR1cm4gcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ganNvbnA7XG4iLCJ2YXIgaHRtbCwgc3VibWl0O1xuXG5odG1sID0gcmVxdWlyZSgxKTtcblxuc3VibWl0ID0gcmVxdWlyZSgyKTtcblxuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgdmFyIGEsIGhpZGUsIGxpbnBlbiwgcG9wdXAsIHRva2VuO1xuICBpZiAoIShhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1aXRpYW8nKSkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdG9rZW4gPSBhLmNsYXNzTmFtZTtcbiAgcG9wdXAgPSBudWxsO1xuICBhLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAocG9wdXApIHtcbiAgICAgIHJldHVybiBoaWRlKCk7XG4gICAgfVxuICAgIGEucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChwb3B1cCA9IGxpbnBlbigpKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGxpbnBlbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkaXY7XG4gICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlkID0gJ2h1aXRpYW8tcG9wdXAnO1xuICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICAgIGRpdi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpWzBdLm9uY2xpY2sgPSBoaWRlO1xuICAgIGRpdi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdLm9uc3VibWl0ID0gc3VibWl0KHRva2VuLCBoaWRlKTtcbiAgICByZXR1cm4gZGl2O1xuICB9O1xuICByZXR1cm4gaGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgIHBvcHVwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocG9wdXApO1xuICAgIHBvcHVwID0gbnVsbDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG59KTtcbiIsInZhciBtZXJnZTtcblxubWVyZ2UgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGssIHIsIHYsIHgsIF9pLCBfbGVuO1xuICByID0ge307XG4gIGZvciAoX2kgPSAwLCBfbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgeCA9IGFyZ3VtZW50c1tfaV07XG4gICAgaWYgKHggIT0gbnVsbCkge1xuICAgICAgZm9yIChrIGluIHgpIHtcbiAgICAgICAgdiA9IHhba107XG4gICAgICAgIHJba10gPSB2O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWVyZ2U7XG4iLCJ2YXIgZW1haWwsIGpzb25wLCBzdWJtaXQ7XG5cbmVtYWlsID0gcmVxdWlyZSgxKTtcblxuanNvbnAgPSByZXF1aXJlKDIpO1xuXG5zdWJtaXQgPSBmdW5jdGlvbih0b2tlbiwgaGlkZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyICRpbmZvLCBkYXRhLCBlcnJvciwgaSwgaW5mbywgX2ksIF9sZW47XG4gICAgZGF0YSA9IHtcbiAgICAgIGZvcm1fYXBpX3Rva2VuOiB0b2tlblxuICAgIH07XG4gICAgJGluZm8gPSB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdkaXYnKTtcbiAgICAkaW5mbyA9ICRpbmZvWyRpbmZvLmxlbmd0aCAtIDFdO1xuICAgIGluZm8gPSBmdW5jdGlvbih0eHQsIGtsYXNzKSB7XG4gICAgICAkaW5mby5pbm5lckhUTUwgPSB0eHQ7XG4gICAgICBpZiAoa2xhc3MpIHtcbiAgICAgICAgcmV0dXJuICRpbmZvLmNsYXNzTmFtZSA9IGtsYXNzO1xuICAgICAgfVxuICAgIH07XG4gICAgZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbmZvKFwi0KHQsdC+0Lkg0L7RgtC/0YDQsNCy0LrQuCDRgdC+0L7QsdGJ0LXQvdC40Y9cIiwgJ2Vycm9yJyk7XG4gICAgfTtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IHRoaXMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIGkgPSB0aGlzW19pXTtcbiAgICAgIGlmIChpLm5hbWUpIHtcbiAgICAgICAgZGF0YVtpLm5hbWVdID0gaS52YWx1ZS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgoZGF0YS50ZWwucmVwbGFjZSgvXFxEKy8sICcnKSkubGVuZ3RoIDwgNykge1xuICAgICAgaW5mbygn0J3QtdCy0LXRgNC90YvQuSDRgtC10LvQtdGE0L7QvScsICdlcnJvcicpO1xuICAgICAgdGhpcy50ZWwuZm9jdXMoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGRhdGEubWFpbCAmJiAhZW1haWwudGVzdChkYXRhLm1haWwpKSB7XG4gICAgICBpbmZvKCfQndC10LLQtdGA0L3Ri9C5IEUtbWFpbCcsICdlcnJvcicpO1xuICAgICAgdGhpcy5tYWlsLmZvY3VzKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGluZm8oJ9Ce0YLQv9GA0LDQstC60LAg0YHQvtC+0LHRidC10L3QuNGPLi4uJywgJ2luZm8nKTtcbiAgICBqc29ucCh7XG4gICAgICB1cmw6IFwiaHR0cDovL2dldHNpbXBsZWZvcm0uY29tL21lc3NhZ2VzL2FqYXhcIixcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBlcnJvcjogZXJyb3IsXG4gICAgICBzdWNjZXNzOiAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBpZiAoIWRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGluZm8oJ9Ch0L7QvtCx0YnQtdC90LjQtSDQvtGC0L/RgNCw0LLQu9C10L3QvicpO1xuICAgICAgICAgIF90aGlzLm9uc3VibWl0ID0gaGlkZTtcbiAgICAgICAgICByZXR1cm4gX3RoaXNbX3RoaXMubGVuZ3RoIC0gMV0udmFsdWUgPSAn0JfQsNC60YDRi9GC0YwnO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcylcbiAgICB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN1Ym1pdDtcbiJdfQ==
