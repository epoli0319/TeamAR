from skimage.measure import compare_ssim as ssim
import matplotlib.pyplot as plt
import numpy as np
import cv2

def mse(imageA, imageB):
#        try:
                # the 'Mean Squared Error' between the two images is the
                # sum of the squared difference between the two images;
                # NOTE: the two images must have the same dimension
                err = np.sum((imageA.astype("float") - imageB.astype("float")) ** 2)
                err /= float(imageA.shape[0] * imageA.shape[1])
	
        	# return the MSE, the lower the error, the more "similar"
                # the two images are
                return err
#        except(ValueError):
#                pass
 
def compare_images(imageA, imageB, title):
	# compute the mean squared error and structural similarity
	# index for the images
	m = mse(imageA, imageB)
	s = ssim(imageA, imageB)
 
	# setup the figure
	fig = plt.figure(title)
	plt.suptitle("MSE: %.2f, SSIM: %.2f" % (m, s))
 
	# show first image
	ax = fig.add_subplot(1, 2, 1)
	plt.imshow(imageA, cmap = plt.cm.gray)
	plt.axis("off")
 
	# show the second image
	ax = fig.add_subplot(1, 2, 2)
	plt.imshow(imageB, cmap = plt.cm.gray)
	plt.axis("off")
 
	# show the images
	plt.show()


# load the images -- the original, the original + contrast,
# and the original + photoshop
sol1 = cv2.imread("statueofliberty.png")
sol2 = cv2.imread("statueofliberty2.png")
sol3 = cv2.imread("statueofliberty3.png")



# convert the images to grayscale
sol1 = cv2.cvtColor(sol1, cv2.COLOR_BGR2GRAY)
sol2 = cv2.cvtColor(sol2, cv2.COLOR_BGR2GRAY)
sol3 = cv2.cvtColor(sol3, cv2.COLOR_BGR2GRAY)

# initialize the figure
fig = plt.figure("Images")
images = ("Statue of Liberty 1", sol1), ("Statue of Liberty 2", sol2), ("Statue of Liberty 3", sol3)
 
# loop over the images
for (i, (name, image)) in enumerate(images):
	# show the image
	ax = fig.add_subplot(1, 3, i + 1)
	ax.set_title(name)
	plt.imshow(image, cmap = plt.cm.gray)
	plt.axis("off")
 
# show the figure
plt.show()
 
# compare the images
compare_images(sol1, sol1, "Statue of Liberty 1 vs. Statue of Liberty 1")
compare_images(sol1, sol2, "Statue of Liberty 1 vs. Statue of Liberty 2")
compare_images(sol1, sol3, "Statue of Liberty 1 vs. Statue of Liberty 3")
