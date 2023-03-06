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

1) Получить agent клиента (тип устройства)
```js
adaptive.getDeviceType();
```
<br>
2) Проверить, что устройство является компьютером (ПК)
```js
adaptive.isPC();
```

  - Проверить, что компьютер имеет ОС Windows
  ```js
  adaptive.isWindows();
  ```
  
  - Проверить, что компьютер имеет OC Mac Os X
  ```js
  adaptive.isMac();
  ```
  
  - Проверить, что компьютер имеет ОС Linux
  ```js
  adaptive.isLinux();
  ```
<br>
3) Проверить, что устройство является Android (Планшет/Смартфон)
```js
adaptive.isAndroid();
```
<br>
4) Проверить, что устройство является IOS (Планшет/Смартфон)
```js
adaptive.isIOS();
```

  - Проверить, что устройство является IPhone
  ```js
  adaptive.isIPhone();
  ```
  
  - Проверить, что устройство является IPad
  ```js
  adaptive.isIPad();
  ```
<br>
5) Получить размер окна браузера (сайта)
```js
adaptive.getWindowSize();
```

  - Получить ширину окна браузера (сайта)
  ```js
  adaptive.getWindowWidth();
  ```
  
  - Получить высоту окна браузера (сайта)
  ```js
  adaptive.getWindowHeight();
  ```
<br>
6) Получить размер экрана
```js
adaptive.getDisplaySize();
```

  6.1) Получить ширину экрана
  ```js
  adaptive.getDisplayWidth();
  ```
  
  6.2) Получить высоту экрана
  ```js
  adaptive.getDisplayHeight();
  ```
