// Вибір всіх елементів <p> та зміна тексту на "Змінений текст"
$('p').text('Змінений текст');
// Вибір елементу з ідентифікатором task1 та додавання класу highlight
$('#task1').addClass('highlight');
// Вибір всіх елементів <li> та додавання класу list-item
$('li').addClass('list-item');

// Зміна кольору тексту всіх елементів з класом highlight на червоний
$('.highlight').css('color', 'red');
// Зміна фону всіх елементів з класом list-item на світло-сірий
$('.list-item').css('background-color', 'lightgray');

// Анімаційний ефект для елементів з класом highlight (наприклад, fadeIn)
$('.highlight').fadeIn(2000);

// Зміна тексту останнього елемента <p> у блоку з ідентифікатором task1
$('#task1 p:last').text('Новий останній текст');

// Додавання кнопки та обробка події для видалення елементів з класом list-item
$('<button/>', {
    text: 'Видалити елементи з класом list-item',
    click: function () {
        $('.list-item').remove();
    }
}).appendTo('body');
