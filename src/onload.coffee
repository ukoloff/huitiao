onload = (fn)->
  if window.addEventListener
    window.addEventListener 'DOMContentLoaded', fn, false
  else
    window.attachEvent 'onload', fn

module.exports = onload
