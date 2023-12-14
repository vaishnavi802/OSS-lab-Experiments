# calculator_switch.py

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y != 0:
        return x / y
    else:
        return "Error: Cannot divide by zero."

def perform_operation(operator, x, y):
    operations = {
        'add': add,
        'subtract': subtract,
        'multiply': multiply,
        'divide': divide,
    }

    # Get the function from the dictionary
    operation_func = operations.get(operator)

    # Call the function and return the result
    if operation_func:
        return operation_func(x, y)
    else:
        return "Error: Invalid operator."

if __name__ == "__main__":
    num1 = float(input("Enter the first number: "))
    num2 = float(input("Enter the second number: "))

    operator = input("Enter the operator (add, subtract, multiply, divide): ")

    result = perform_operation(operator, num1, num2)

    print(f"Result: {result}")
