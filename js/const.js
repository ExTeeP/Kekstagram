'use strict';

window.const = (function () {

  // Количество фото
  var PICTURES_COUNT = 25;

  // Переменные для изменения масштаба
  var SCALE_STEP = 25;
  var SCALE_MIN = 25;
  var SCALE_MAX = 100;

  // Максимальное колличество символов в описании к фото
  var MAX_LENGTH_DESC = 140;

  // Валидация хештегов
  var HASHTAG_REGEXP = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  var MAX_HASHTAGS = 5;
  var MAX_HASHTAG_CHARACTERS = 20;

  // Массив имен
  var USERS = [
    'Александр',
    'Артём',
    'Снежанна',
    'Мария',
    'Кирилл',
    'Рома',
    'Изабель',
    'Юра',
    'Эльвира',
    'Владимир',
    'Николай',
    'Сергей',
    'Евгений',
    'Егор',
    'Оксана',
    'Светлана',
    'Августин',
    'Дмитрий',
    'Алевтина',
    'Инокентий',
    'Иван',
    'Анатолий',
    'Геральд',
    'Антон',
    'Трисс'
  ];

  // Массив комментариев от пользователей
  var COMMENTS = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  // Массив подписи к фото от автора
  var PICTURE_CAPTION = [
    'Отдых это хорошо: все знают, и кто ты, а кто нет. И знаешь, что нужно делать.',
    'И что на нем написано, в этой твоей Вселенной? «Золото Дола»? «Медалей»? «Пурпурного галстука»?',
    'Какой предел продуктивной паранойи может быть у железного человека? Да ещё в мирное время?',
    'Девушка оказалась гораздо легче.',
    '«Звёздная война». Главный герой Антон Шлемин – оптимист и переживающий за судьбу человека вне рамок мундира.',
    'Пинский баллон в программе. Бис первый в своем роде.',
    'На этот раз Барби показалось, что на ее спине кроме того квадрата вырезали еще и сердце.',
    'Многие говорят, что это вовсе не то, что вы думаете, а «не большее количество людей».',
    'В культурном центре — эти люди спокойно читают газеты, сидя у компьютера, наблюдая за происходящим на улицах.',
    'Москва? Откуда она взялась, когда другие ломали голову над этой таинственной темой.',
    'Котикистрия. По-моему, это книга, которая должна быть на каждом книжном прилавке.',
    'Каждый хочет изменить человечество, но никто не задумывается о том, как изменить себя.',
    'Наша жизнь начинает подходить к концу, когда мы перестаём говорить о действительно важных вещах.',
    'Стоит только поверить, что вы можете – и вы уже на полпути к цели.',
    'Приносить пользу миру — это единственный способ стать счастливым.',
    'У каждого свои недостатки.',
    'Запомните, что не достичь успеха – иногда тоже большая удача.',
    'Суши. Именно так меня называла жена. Холодный, как рыба.',
    'У всего есть своя красота, но не каждый может ее увидеть.',
    'Мир делится на два класса — одни веруют в невероятное, другие совершают невозможное.',
    'Неосмысленная жизнь не стоит того, чтобы жить.',
    'Стремитесь не к успеху, а к ценностям, которые он даёт​.',
    'Сложнее всего начать действовать, все остальное зависит только от упорства.',
    'Успех — это способность идти от поражения к поражению, не теряя оптимизма.',
    'Не столь важно, как медленно ты идешь, как то, как долго ты идешь, не останавливаясь.',
  ];

  return {
    PICTURES_COUNT: PICTURES_COUNT,
    SCALE_STEP: SCALE_STEP,
    SCALE_MIN: SCALE_MIN,
    SCALE_MAX: SCALE_MAX,
    MAX_LENGTH_DESC: MAX_LENGTH_DESC,
    HASHTAG_REGEXP: HASHTAG_REGEXP,
    MAX_HASHTAGS: MAX_HASHTAGS,
    MAX_HASHTAG_CHARACTERS: MAX_HASHTAG_CHARACTERS,
    USERS: USERS,
    COMMENTS: COMMENTS,
    PICTURE_CAPTION: PICTURE_CAPTION
  };

})();
