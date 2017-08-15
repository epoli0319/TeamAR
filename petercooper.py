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


dictofimages=['https://c1.staticflickr.com/1/44/112713870_9621e7ce89_b.jpg','http://www.log24.com/log/pix09A/090801-CooperCube2.jpg','https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Just_another_Alamo_afternoon.jpg/267px-Just_another_Alamo_afternoon.jpg','https://metes.files.wordpress.com/2007/04/cooper-union-cube.jpg','http://1.bp.blogspot.com/-DHuqbUkEPsM/Uk2C9Ldm-9I/AAAAAAAAAc8/PaWmhmzu-98/s640/AstorPlaceCube.jpg']

for pic in dictofimages:
    reverse_image(pic)
