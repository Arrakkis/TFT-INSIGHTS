from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS, cross_origin
from flask_restplus import Resource, Api, fields
from werkzeug.contrib.fixers import ProxyFix
import os

app = Flask(__name__)
app.wsgi_app = ProxyFix(app.wsgi_app)
cors = CORS(app)
api = Api(app,
          version='0.1',
          title='Our sample API',
          description='This is our sample API'
)
app.config['CORS_HEADERS'] = 'Content-Type'

basedir = os.path.abspath(os.path.dirname(__file__))

#database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#Init db
db = SQLAlchemy(app)
#init Marshmallow
ma = Marshmallow(app)

@app.route('/data/', methods=['GET'])
def get_data():
    return jsonify({
			"summoner": {
				3: {
					"blademaster": {
						6: {
							"inferno": {
								3: { "null": { 0: { "winrate": 0.55, "popularity": 0.34 } } }
							}
						}
					}
				}
			},
			"ocean": {
				4: {
					"blademaster": {
						6: {
							"inferno": {
								3: { "warden": { 6: { "winrate": 0.55, "popularity": 0.34 } } }
							}
						}
					}
				}
			}
		})

if __name__ == '__main__':
    app.run(debug=True)