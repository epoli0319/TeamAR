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

    best_guess = (soup.find('a', attrs={'class':'_gUb'}).get_text()).decode('utf-8')
    search_results =[]
    for title in soup.findAll('h3', attrs={'class':'r'}):
        search_results.append(title.get_text())
    print'Best Guess: ', best_guess
    print'Search Results: ', search_results


dictofimages=['http://www.rd.com/wp-content/uploads/sites/2/2016/01/01-statue-of-liberty-facts.jpg','https://thenypost.files.wordpress.com/2016/07/statue_liberty1a.jpg?quality=90&strip=all&strip=all','https://assets.libertyellisfoundation.org/cms/editor/pedestal.jpg','https://media-cdn.tripadvisor.com/media/photo-o/0f/38/33/f6/beautiful-day-to-see.jpg','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg']

for pic in dictofimages:
    reverse_image(pic)
