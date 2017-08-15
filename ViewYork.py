## To activate the virtual environment
## . venv/bin/activate

import os
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy import Table
from sqlalchemy import create_engine
app = Flask(__name__)

##****************************Database Connection******************************

os.system('sudo /etc/init.d/mysql start') ## starts mysql database
engine = create_engine('mysql+mysqldb://root:Aelin101$$@localhost/Statues')
metadata= MetaData(bind=engine)
Info = Table('Info', metadata,autoload=True)

##*****************************************************************************



def install_secret_key(app, filename='secret_key'):
    filename = os.path.join(app.instance_path, filename)
    try:
        app.config['SECRET_KEY'] = open(filename, 'rb').read()
    except IOError:
        print 'Error: No secret key. Create it with:'
        if not os.path.isdir(os.path.dirname(filename)):
            print 'mkdir -p', os.path.dirname(filename)
        print 'head -c 24 /dev/urandom >', filename
        sys.exit(1)

install_secret_key(app, filename='secret_key')


@app.route('/')
def home():
    return "VIEW YORK"

@app.route('/Database/<info_type>')
def Data(info_type):
    result=engine.execute("SELECT * FROM Info WHERE name = 'Peter Cooper Statue'")
    for row in result:
        print row [0]
    return "Info: " % info
    

if __name__ == "__main__":
	app.run(debug=True)
