from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/dummydata')
def dummydata():
    return jsonify([{"id": 1, "name": "John"}, {"id": 2, "name": "Jane"}, {"id": 3, "name": "Jim"}, {"id": 4, "name": "Jill"}, {"id": 5, "name": "Jack"}, {"id": 6, "name": "Alex"}, {"id": 7, "name": "Leo"}, {"id": 8, "name": "frank"}, {"id": 9, "name": "robert"}, {"id": 10, "name": "will"}])   

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
