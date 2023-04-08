# from keras._to_array
# import numpy as np
# from PIL import Image
#
# # Loading model
# # model = load_model("keras_model.h5")
#
#
# # Preparing and pre-processing the image
# def preprocess_img(img_path):
#     op_img = Image.open(img_path)
#     img_resize = op_img.resize((224, 224))
#     img2arr = img_to_array(img_resize) / 255.0
#     img_reshape = img2arr.reshape(1, 224, 224, 3)
#     return img_reshape
#
#
# # Predicting function
# def predict_result(predict):
#     # pred = model.predict(predict)
#     pred = len(predict)
#     # pred = [1,0]
#     return predutils import img