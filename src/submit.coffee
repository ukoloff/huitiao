email = require './email.coffee'
jsonp = require './jsonp.coffee'

submit = (token, hide)-> ->
  data = form_api_token: token

  $info = @.getElementsByTagName 'div'
  $info = $info[$info.length-1]
  info = (txt, klass)->
    $info.innerHTML = txt
    $info.className = klass if klass

  for i in @ when i.name
    data[i.name] = i.value.replace /^\s+|\s+$/g, ''

  if (data.tel.replace /\D+/, '').length<7
    info 'Неверный телефон', 'error'
    do @tel.focus
    return false

  if data.mail && !email.test data.mail
    info 'Неверный E-mail', 'error'
    do @mail.focus
    return false

  info 'Отправка сообщения...', 'info'

  jsonp
    url: "http://getsimpleform.com/messages/ajax"
    data: data
    success: ->
    error: ->

  false

module.exports = submit
