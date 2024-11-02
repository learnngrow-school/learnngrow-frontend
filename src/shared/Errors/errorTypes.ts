interface IStringToString {
    [key: string]: string;
  }

export const ERROR_RUS : IStringToString = {
    'crypto/bcrypt: hashedPassword is not the hash of the given password': 'Неправильный пароль',
    'User not found': 'Пользователь не найден',
    '402': 'Требуется оплата',
    '403': 'Доступ запрещен',
    '404': 'Страница не найдена',

    '500': 'Внутренняя ошибка сервера',
}