import os
from flask_cors import CORS
from PIL import Image
from ludwig.api import LudwigModel
from torchvision import transforms
from flask import Flask, request, send_from_directory, jsonify
from util import download_ludwig_model


tensor_converter = transforms.ToTensor()
app = Flask(__name__, static_folder='public')
CORS(app)

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
def detect_abnormality():
    try:
        if request.method == 'POST':
            image = Image.open(request.files['file'].stream)
            img_tensor = tensor_converter(image)

            model_input = {'radiographs_image_link': [img_tensor]}
            preds = ludwig_model.predict(model_input)

            abnormality = bool(preds[0]["label_predictions"][0])
            confidence = float(preds[0]["label_probability"][0])

            response = jsonify({"abnormality": abnormality, "conf": confidence})
            response.headers.add("Access-Control-Allow-Origin", "*")

            return response
    except Exception as e:
        print("Error detecting abnormality: ", e)
        response = jsonify({"abnormality": False, "conf": 0.0})
        response.headers.add("Access-Control-Allow-Origin", "*")

        return response


if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)
