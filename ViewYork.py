## To activate the virtual environment
## . venv/bin/activate


from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy import Table
from sqlalchemy import create_engine
app = Flask(__name__)
##db = SQLAlchemy(app)

engine = create_engine('mysql+mysqldb://root:Aelin101$$@localhost/Statues')
metadata= MetaData(bind=engine)

users = Table('Info', metadata, autoload=True)
con = engine.connect()
##metadata = MetaData()
##metadata.reflect(bind=engine)
##Session = orm.sessionmaker(bind=engine)
##session = Session()


##class User(db.Model):
##    __tablename__='Info'
##    name= db.Column(db.VARCHAR(255), unique=True)
##    subject = db.Column(db.VARCHAR(255), unique=True)
##    artist = db.Column(db.VARCHAR(255), unique=True)
##    location = db.Column(db.VARCHAR(255), unique=True)
##    why = db.Column(db.VARCHAR(255), unique=True)
##    funFacts = db.Column(db.VARCHAR(255), unique=True)
##    def __init__(self, username, email):
##        self.name = name
##        self.subject = subject
##        self.artist = artist
##        self.location = location
##        self.why = why
##        self.funFacts = funFacts
    
##---------------##
## Website Pages ##
##---------------##
@app.route('/')
def home():
    return render_template ('OpeningPage.html')

@app.route('/Artist/')
def Artist():
    return render_template ('Artist.html')

@app.route('/Camera/')
def Camera():
    return render_template ('Camera.html')

@app.route('/FunFacts/')
def FunFacts():
    return render_template ('FunFacts.html')

@app.route('/InformationPage/')
def InformationPage():
    return render_template ('Informationpage.html')

@app.route('/Location/')
def Location():
    return render_template ('Location.html')

@app.route('/Subject/')
def Subject():
    return render_template ('Subject.html')

@app.route('/Visited/')
def Visited():
    return render_template ('visited.html')

@app.route('/Why/')
def Why():
    return render_template ('Why.html')

@app.route('/Database/')
def Database():
    engine.execute('SELECT*FROM Info')
    return 'Hello World'
