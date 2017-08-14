from PIL import Image

image= Image.open("cubestatue.jpg").convert('L')
new_image = image.resize((500, 500))
new_image.save("cubestatue_500.jpg")

print(new_image.size)
print(image.size)
image.show()

from PIL import Image

image= Image.open("statueofliberty.jpg").convert('L')
new_image = image.resize((500, 500))
new_image.save("statueofliberty_500.jpg")


print(new_image.size)
print(new_image.size)
image.show()

from PIL import Image

image= Image.open("petercooperstatue.jpg").convert('L')
new_image = image.resize((500, 500))
new_image.save("petercooperstatue_500.jpg")

print(image.size)
print(new_image.size)
image.show()

from PIL import Image

image= Image.open("chargingbullstatue.jpg").convert('L')
new_image= image.resize((500, 500))
new_image.save("chargingbullstatue.jpg")

print(new_image.size)
print(image.size)
image.show()


