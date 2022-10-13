from flask import Flask, make_response

app = Flask(__name__)

#Rincon bobo hpta

@app.route("/hello_world", methods=["GET"])
def hello_world():
    response = make_response({"Datos": ["Primero","Segundo","Tercero"]})
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

if __name__ == "__main__":
    app.run(debug=True)