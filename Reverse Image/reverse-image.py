import argparse
import pycurl
import json
import StringIO
import io as bytesIOModule
from bs4 import BeautifulSoup
import certifi


def reverse_image(IMAGE_URL):
    SEARCH_URL = 'https://www.google.com/searchbyimage?&image_url='

    returned_code = bytesIOModule.BytesIO()
    full_url = SEARCH_URL + IMAGE_URL

    conn = pycurl.Curl()
    conn.setopt(conn.URL, str(full_url))
    conn.setopt(conn.FOLLOWLOCATION, 1)
    conn.setopt(conn.USERAGENT, 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11')
    conn.setopt(conn.WRITEFUNCTION, returned_code.write)
    conn.perform()
    conn.close()

    html = returned_code.getvalue()

    soup = BeautifulSoup(html, 'html.parser')
    results=[]

    best_guess = (soup.find('a', attrs={'class':'_gUb'}).get_text())
    search_results =[]
    for title in soup.findAll('h3', attrs={'class':'r'}):
        search_results.append(title.get_text())
    print('Best Guess: ', best_guess)
    print('Search Results: ', search_results)


dictofimages=['https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Statue_of_Liberty_April_2008.JPG/210px-Statue_of_Liberty_April_2008.JPG','https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cristo_Redentor_-_Rio_de_Janeiro%2C_Brasil.jpg/186px-Cristo_Redentor_-_Rio_de_Janeiro%2C_Brasil.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Obelisk_central_park_nyc.jpg/300px-Obelisk_central_park_nyc.jpg',  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Central_Park_NYC_-_Eagles_and_Prey_Sculpture_by_Christophe_Fratin_-_IMG_5715.JPG/300px-Central_Park_NYC_-_Eagles_and_Prey_Sculpture_by_Christophe_Fratin_-_IMG_5715.JPG', 'http://www.boweryboyshistory.com/wp-content/uploads/2008/01/Peter.jpg']

for pic in dictofimages:
    reverse_image(pic)