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


dictofimages=['http://theclassytraveler.com/wp-content/uploads/2013/01/Charging-Bull-2.jpg','https://c1.staticflickr.com/1/142/348546345_ed90e9d509_b.jpg','http://4.bp.blogspot.com/-kT97-SjIz5Y/Uz_vb1iJWJI/AAAAAAAADRQ/6RI6fOLcPzM/s1600/bull2.jpg','http://assets.atlasobscura.com/article_images/23453/image.jpg','https://upload.wikimedia.org/wikipedia/en/c/c9/Charging_Bull_statue.jpg']

for pic in dictofimages:
    reverse_image(pic)
