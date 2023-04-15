import os
from flask import Flask, send_from_directory, render_template, request, make_response, jsonify
from flask_cors import CORS
from model import preprocess_img, predict_result


app = Flask(__name__, static_folder='public')
CORS(app)

# # Home route
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

# Prediction route
@app.route('/prediction', methods=['POST'])
def predict_image_file():
    try:
        if request.method == 'POST':
            # in model.py
            img = preprocess_img(request.files['photo'].stream)
            pred = predict_result(img) # in model.py
            # pred = 1
            conf = 0.925
            response = jsonify({'prediction': pred},
                               {'confidence score':conf})
            

            response.headers.add('Access-Control-Allow-Origin', '*')
            # return response
            # return render_template("result.html")

            return render_template("result.html", predictions=str(pred), confidence=str(conf))
            # response = "CAT"
            # return {"message": response}
            # return render_template("result.html", predictions=str(pred))

    except:
        error = "File cannot be processed."
        response = jsonify({'message': 'error on processing'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

        # return render_template("public/templates/result.html", err=error)

if __name__ == '__main__':
    app.run(use_reloader=True, port=3000, threaded=True)


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