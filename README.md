Это сайт-портфолио специалиста по автоматизации. 
Представляет собой React SPA приложение, маршрутизация осуществляется при помощи библиотеки react-router-dom. Со структурой приложения и его маршрутами можно познакомиться в файле App.jsx
Приложение полностью адаптировано под все основные мобильные устройства. Адекватно отображается как на десктопных так и на мобильных устройствах. В основном я добилась этого при помощи flex-box верстки. 
Все повторяющиеся элементы на сайте генерируются при помощи метода map(), что значительно сокращает код и позволяет избежать дублирование кода, а также упрощает чтение.

Сейчас расскажу про самые интересные моменты при разработке сайта.

Header

При разрешении менее 1024px navbar сворачивается в гамбургер это реализует функция handleClick, которая инвертирует значение переменной click. Далее в зависимости от значения переменной применяются стили css.  

В блоке About me я использовала псевдоклассы для отрисовки графических элементов. Так же этот метод я использовала и в разделе Wore experience.

Самым сложным модулем стал раздел projects. Из карточки проекта требовался переход на новую страницу и необходимо было показать схемы и изображения проекта крупным планом. Для решения этой задачи я использовала библиотеку react-slick, эта библиотека идеально решала мою задачу. 

Все svg иконки я брала из библиотека react-icons. 

Demo:(https://www.zelendim.com/);


