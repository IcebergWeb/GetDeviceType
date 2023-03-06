# get-device-type
## Подключение скрипта
```html
<script src="adaptive.js"></script>
```
## Пример
Начало работы
```js
let adaptive = new Adaptive();
```
<br>

1. Получить agent клиента (тип устройства)
```js
adaptive.getDeviceType();
```
<br>

2. Проверить, что устройство является компьютером (ПК)
```js
adaptive.isPC();
```

2.1. Проверить, что компьютер имеет ОС Windows
```js
adaptive.isWindows();
```
  
2.2 Проверить, что компьютер имеет OC Mac Os X
```js
adaptive.isMac();
```
  
2.3 Проверить, что компьютер имеет ОС Linux
```js
adaptive.isLinux();
```
<br>

3. Проверить, что устройство является Android (Планшет/Смартфон)
```js
adaptive.isAndroid();
```
<br>

4. Проверить, что устройство является IOS (Планшет/Смартфон)
```js
adaptive.isIOS();
```

4.1 Проверить, что устройство является IPhone
```js
adaptive.isIPhone();
```
  
4.2 Проверить, что устройство является IPad
```js
adaptive.isIPad();
```
<br>

5. Получить размер окна браузера (сайта)
```js
adaptive.getWindowSize();
```

5.1 Получить ширину окна браузера (сайта)
```js
adaptive.getWindowWidth(); 
```
  
5.2 Получить высоту окна браузера (сайта)
```js
adaptive.getWindowHeight();
```
<br>

6. Получить размер экрана
```js
adaptive.getDisplaySize();
```

6.1. Получить ширину экрана
```js
adaptive.getDisplayWidth();
```
  
6.2. Получить высоту экрана
```js
adaptive.getDisplayHeight();
```
