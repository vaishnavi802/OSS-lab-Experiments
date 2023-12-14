from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    # Add your authentication logic here
    # For simplicity, let's just check if username and password are not empty
    if username and password:
        return f'Login successful! Welcome, {username}!'
    else:
        return 'Invalid login credentials.'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=7000)
