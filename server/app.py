import os
from flask_cors import CORS, cross_origin
from PIL import Image
from ludwig.api import LudwigModel
from torchvision import transforms
from flask import Flask, request, send_from_directory, jsonify
from util import download_ludwig_model


tensor_converter = transforms.ToTensor()
app = Flask(__name__, static_folder='public')
CORS(app, support_credentials=True)

download_ludwig_model()
ludwig_model = LudwigModel.load("./ludwig_model")


# # Home route
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


@app.route('/detect_abnormality', methods=['POST'])
@cross_origin(supports_credentials=True)
def detect_abnormality():
    try:
        if request.method == 'POST':
            image = Image.open(request.files['image'].stream)
            img_tensor = tensor_converter(image)

            model_input = {'radiographs_image_link': [img_tensor]}
            preds = ludwig_model.predict(model_input)

            abnormality = bool(preds[0]["label_predictions"][0])
            confidence = float(preds[0]["label_probability"][0])

            response = jsonify({"abnormality": abnormality, "confidence": confidence})
            response.headers.add('Access-Control-Allow-Origin', 'localhost:5000')

            return response
    except Exception as e:
        print("Error detecting abnormality: ", e)
        response = jsonify({"abnormality": False, "confidence": 0.0})
        response.headers.add('Access-Control-Allow-Origin', 'localhost:5000')

        return response


# Prediction route
# @app.route('/prediction', methods=['POST'])
# def predict_image_file():
#     try:
#         if request.method == 'POST':
#             # in model.py
#             img = preprocess_img(request.files['file'].stream)
#             pred = predict_result(img) # in model.py
#             response = jsonify({'data': pred})
#             response.headers.add('Access-Control-Allow-Origin', '*')
#             # return response
#             return render_template("public/templates/result.html", predictions=str(pred))
#
#     except:
#         error = "File cannot be processed."
#         response = jsonify({'some': 'data'})
#         response.headers.add('Access-Control-Allow-Origin', '*')
#         return response
#
#         # return render_template("public/templates/result.html", err=error)


if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)


# Importing required libs
# from flask import Flask, render_template, request
# from model import preprocess_img, predict_result

# # Instantiating flask app
# app = Flask(__name__)


# # Home route
# @app.route("/")
# def main():
#     return render_template("index.html")


# Prediction route
# @app.route('/prediction', methods=['POST'])
# def predict_image_file():
#     try:
#         if request.method == 'POST':
#             img = preprocess_img(request.files['file'].stream)
#             pred = predict_result(img)
#             return render_template("result.html", predictions=str(pred))

#     except:
#         error = "File cannot be processed."
#         return render_template("result.html", err=error)


# Driver code
# if __name__ == "__main__":
#     app.run(port=3001, debug=True)


# import os
# from flask import Flask, flash, request, redirect, url_for, session, send_from_directory
# from werkzeug.utils import secure_filename
# from flask_cors import CORS, cross_origin
# import logging

# logging.basicConfig(level=logging.INFO)

# logger = logging.getLogger('HELLO WORLD')


# UPLOAD_FOLDER = 'static/uploads/'
# ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

# app = Flask(__name__, static_url_path='', static_folder='public')
# app.secret_key = "secret key"
# app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
# app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024


# @app.route("/", defaults={'path':''})
# def serve(path):
#     return send_from_directory(app.static_folder,'index.html')


# @app.route('/image', methods=['POST'])
# def fileUpload():
#     target=os.path.join(UPLOAD_FOLDER,'test_docs')
#     if not os.path.isdir(target):
#         os.mkdir(target)
#     logger.info("welcome to upload`")
#     file = request.files['file'] 
#     filename = secure_filename(file.filename)
#     destination="/".join([target, filename])
#     file.save(destination)
#     session['uploadFilePath']=destination
#     response="Whatever you wish too return"
#     return response

# # if __name__ == "__main__":
# #     app.secret_key = os.urandom(24)
# #     app.run(debug=True,host="0.0.0.0",use_reloader=False)

# CORS(app, expose_headers='Authorization')