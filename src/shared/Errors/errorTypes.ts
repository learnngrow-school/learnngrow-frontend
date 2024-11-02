interface IStringToString {
    [key: string]: string;
  }

export const ERROR_CODES : IStringToString = {
    '400': 'Bad Request',
    '401': 'Неправильный логин или пароль',
    '402': 'Требуется оплата',
    '403': 'Доступ запрещен',
    '404': 'Страница не найдена',

    '500': 'Внутренняя ошибка сервера',
}