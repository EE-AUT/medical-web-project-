import tensorflow as tf
from keras.applications.inception_v3 import InceptionV3
from keras.models import Model
from tensorflow.keras.applications.vgg16 import preprocess_input
import keras
import numpy as np
import sys
from PIL import Image

def loadModel(name='mskin10'):
  model = keras.models.load_model(name)
  print('Model Loaded Successfully!')
  return model

def predict(image, model, is_filename=True):
  if is_filename:
    img = np.array(Image.open(image).resize((224, 224)), dtype=np.float32)
  else:
    img = np.array(Image.fromarray(image).resize((224, 224)))
  img = preprocess_input(img)
  output = model.predict(img[np.newaxis, ...])[0, 0]
  return output

if __name__=='__main__':
  # img = np.array(Image.open('gilbert.jpeg'))
  my_model = loadModel('mskin20')
  # print(predict(img, my_model, False))
  print(predict(sys.argv[1], my_model))