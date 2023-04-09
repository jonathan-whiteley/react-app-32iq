import pytest
from util import download_ludwig_model, remove_model


@pytest.fixture(scope="session")
def download_model(request):
    try:
        print("Downloading Ludwig Model")

        download_ludwig_model()

        print("Model downloaded successfully")
    except Exception as download_error:
        print("Error downloading model: ", download_error)

    def teardown():
        try:
            print("Deleting Ludwig Model")

            remove_model()

            print("Model deleted successfully")
        except FileNotFoundError as file_error:
            print("Error deleting model: ", file_error)

    request.addfinalizer(teardown)
