email = require './email.coffee'
jsonp = require './jsonp.coffee'
html  = require './html.coffee'

setTimeout ->
  return unless a = document.getElementById 'huitiao'

  popup = null
  a.onclick = ->
    return do hide if popup
    a.parentElement.appendChild popup = do linpen
    false

  linpen = ->
    div = document.createElement 'div'
    div.id = 'huitiao-popup'
    div.innerHTML = html
    div.getElementsByTagName('a')[0].onclick = hide
    div

  hide = ->
    popup.parentNode.removeChild popup
    popup = null
    false
