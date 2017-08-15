import pycurl, json, io

data = json.dumps({"image_url": "https://s3.us-east-2.amazonaws.com/viewyorkpic/Cookie.jpg"})
url = 'http://localhost/search'

storage = io.BytesIO()

c = pycurl.Curl()
c.setopt(c.URL, str(url))
c.setopt(c.PORT, 5000)
c.setopt(c.HTTPHEADER, ['Content-Type: application/json'])
c.setopt(pycurl.POST, 1)
c.setopt(pycurl.POSTFIELDS, data)
c.setopt(c.WRITEFUNCTION, storage.write)
c.perform()
c.close()

returned_json = storage.getvalue()
print(returned_json)
#print(returned_json.[titles][0])