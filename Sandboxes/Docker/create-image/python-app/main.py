import calendar

print('Welcome to calendar\n')

year = int(input('Пожалуйста введите год:'))
month = int(input('Пожалуйста введите месяц:'))

print(calendar.month(year, month))

print('Всего хорошего!');