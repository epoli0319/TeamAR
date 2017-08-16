#Assuming that the images are processed to be grayscaled and made the same size.
from PIL import Image
from PIL import ImageChops
import math
from functools import reduce
import operator
im1 = Image.open('Images/Image3.jpg')
im2 = Image.open('Images/cat.jpg')
arrofimages= [] #Acting as Database for me to iterate through.
#fname = 'Images/Image1.jpg'
#def readfile():
#	with open(fname, 'rb') as f:
#		arrofimages.append(f.read())
#readfile()	
#print(arrofimages)
#print('1')
	
print(type(im1))
#this function calculates how much two pictures are alike.
#The two images that will be compared are the paramters.
def calculateRMS(img1, img2): #Or img src? or Variable?
	h = ImageChops.difference(img1, img2).histogram()
	return math.sqrt(reduce(operator.add, map(lambda h, i: h*(i**2), h, range(256))) / (float(im1.size[0]) * im1.size[1]))
	
	#Img 1 will be taken picture, imgs will be each image in the database, so imgs two will be changing a lot.
	#This function comapres the taken image to each image in the database(For testing I will use the empty array above)
def otherthing(img1, img2):
		num = calculateRMS(img1,img2)
		print (num)
		if num < 15:
			print('yes')
		else :
			print('no')
			#Give information based on image
otherthing(im1,im2)

		
	
