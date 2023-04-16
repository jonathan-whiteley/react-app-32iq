import os
from main import app
from ludwig.api import LudwigModel
from PIL import Image
from torchvision import transforms
from util import download_ludwig_model, remove_model

test_client = app.test_client()
tensor_converter = transforms.ToTensor()


def test_detect_abnormality(download_model):
    with open('./../tests/test_image.png', 'rb') as f:
        response = test_client.post('/detect_abnormality', data={'image': f})
        assert response.status_code == 200
        assert response.json['abnormality'] is False
        assert response.json['confidence'] > 0.99


def test_load_and_predict(download_model):
    model = LudwigModel.load("./ludwig_model")

    with open('./../tests/test_image.png', 'rb') as f:
        image = Image.open(f)
        img_tensor = tensor_converter(image)

        model_input = {'radiographs_image_link': [img_tensor]}
        preds = model.predict(model_input)

        abnormality = bool(preds[0]["label_predictions"][0])
        confidence = float(preds[0]["label_probability"][0])

    assert abnormality is False
    assert confidence > 0.99
    assert model is not None
    assert preds is not None


def test_download_ludwig_model():
    try:
        print("Downloading Ludwig Model")
        download_ludwig_model()

        assert os.path.exists('./ludwig_model/model_hyperparameters.json')
        assert os.path.exists('./ludwig_model/model_weights')
        assert os.path.exists('./ludwig_model/training_set_metadata.json')
        assert os.path.exists('./ludwig_model')
    except Exception as download_error:
        print("Error downloading model: ", download_error)
    finally:
        remove_model()
