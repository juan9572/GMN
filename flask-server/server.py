from flask import Flask

app = Flask(__name__)

#Rincon bobo hpta

@app.route("/hello_world")
def hello_world():
    return {"Datos": ["Primero","Segundo","Tercero"]}

if __name__ == "__main__":
    app.run(debug=True)