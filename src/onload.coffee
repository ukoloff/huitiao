onload = (fn)->
  if window.addEventListener
    addEventListener 'DOMContentLoaded', fn, false
  else
      attachEvent('onload', runScripts);

module.exports = onload
