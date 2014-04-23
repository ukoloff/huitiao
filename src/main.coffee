html = require './html.coffee'
submit  = require './submit.coffee'

setTimeout ->
  return unless a = document.getElementById 'huitiao'
  token = a.className

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
    div.getElementsByTagName('form')[0].onsubmit = submit token, hide
    div

  hide = ->
    popup.parentNode.removeChild popup
    popup = null
    false
