module.exports = """
<a href='#' title='Закрыть окно'>&times;</a>
<form autocomplete="off">
<p>Укажите Ваш телефон<br>и мы Вам перезвоним:</p>
<label><div>Имя</div><input type="text" name="name"></label>
<label><div>Телефон
(<span class="text-error">обязательно</span>)</div>
<input type="text" name="tel" autofocus required></label>
<label><div>E-mail</div><input type="text" name="mail"></label>
<label><div>Когда удобно звонить</div><input type="text" name="time"></label>
<label><div>Примечания</div><textarea name="notes"></textarea></label>
<br><input type="submit" value="Позвоните мне!">
<p></p>
</form>
"""
