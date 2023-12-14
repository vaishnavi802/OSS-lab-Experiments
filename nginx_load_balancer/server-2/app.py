from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_geek():
    return '<h1>Server-2 is here</h2>'


if __name__ == "__main__":
    app.run(debug=True)