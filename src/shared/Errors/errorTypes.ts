interface IStringToString {
    [key: string]: string;
  }

export const ERROR_RUS : IStringToString = {
    'crypto/bcrypt: hashedPassword is not the hash of the given password': 'Неправильный пароль',
    'User not found': 'Пользователь не найден',
    'Network Error': 'Ошибка соединения с сервером',
    'Request failed with status code 401': 'Пользователь не найден', // 401 - Unauthorized
    '403': 'Доступ запрещен',
    '404': 'Страница не найдена',
    'You should be a teacher': 'Вы не являетесь преподавателем',
    'Request failed with status code 500': 'Ошибка сервера',
}