def my_function(first_name, last_name, address=None, phone=None):
    global customer_data
    customer_data = f'Hello {first_name} {last_name}'
    if address is not None:
        customer_data += f', a:{address}'
    if phone is not None:
        customer_data += f', p:{phone}'
    return customer_data
yo = my_function('John', 'Doe')
print(my_function('John', 'Doe'))
print(my_function('Andrew', 'Doe', '80 Elm street', '516-888-8888'))
print(my_function('Andrew', 'Doe', '80 Elm street', '516-888-8888'))
print(my_function('Andrew', 'Jones', phone='516-888-8888', address='75 Elm street'))
print('customer_data', customer_data)

def other_function(num1, num2, other_num=None):
    if other_num is not None:
        sum = num1 + num2 + other_num
    else:
        sum = num1 + num2
    return sum

print(other_function(1, 5))
print(other_function(1,7,24))