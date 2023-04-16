import boto3
import os
import settings


def download_ludwig_model():
    try:
        AWS_REGION = "us-west-1"
        S3_BUCKET_NAME = "210-capstone"

        session = boto3.Session(
            aws_access_key_id=settings.AWS_SERVER_PUBLIC_KEY,
            aws_secret_access_key=settings.AWS_SERVER_SECRET_KEY,
        )

        s3_resource = session.resource("s3", region_name=AWS_REGION)

        model_hyperparameters = s3_resource.Object(S3_BUCKET_NAME, 'models/ludwig_model/model_hyperparameters.json')
        model_weights = s3_resource.Object(S3_BUCKET_NAME, 'models/ludwig_model/model_weights')
        training_set_metadata = s3_resource.Object(S3_BUCKET_NAME, 'models/ludwig_model/training_set_metadata.json')
    except Exception as boto_error:
        print("Error connecting to S3: ", boto_error)
        raise

    try:
        print("Downloading Ludwig Model")
        if not os.path.exists('./ludwig_model'):
            os.mkdir('./ludwig_model')
        else:
            print("Model directory already exists")

        if not os.path.exists('./ludwig_model/model_hyperparameters.json'):
            model_hyperparameters.download_file('./ludwig_model/model_hyperparameters.json')
        else:
            print("Model hyperparameters already downloaded")

        if not os.path.exists('./ludwig_model/model_weights'):
            model_weights.download_file('./ludwig_model/model_weights')
        else:
            print("Model weights already downloaded")

        if not os.path.exists('./ludwig_model/training_set_metadata.json'):
            training_set_metadata.download_file('./ludwig_model/training_set_metadata.json')
        else:
            print("Training set metadata already downloaded")
    except OSError as download_error:
        print("Error downloading model: ", download_error)
        raise


def remove_model():
    try:
        print("Deleting Ludwig Model")

        # Try to delete the model_hyperparameters.json file
        if os.path.exists('./ludwig_model/model_hyperparameters.json'):
            os.remove('ludwig_model/model_hyperparameters.json')
        else:
            print("Model hyperparameters file does not exist")

        # Try to delete the model_weights file
        if os.path.exists('./ludwig_model/model_weights'):
            os.remove('ludwig_model/model_weights')
        else:
            print("Model weights file does not exist")

        # Try to delete the training_set_metadata.json file
        if os.path.exists('./ludwig_model/training_set_metadata.json'):
            os.remove('ludwig_model/training_set_metadata.json')
        else:
            print("Training set metadata file does not exist")

        # Try to delete the empty ludwig_model directory
        if os.path.exists('./ludwig_model'):
            os.rmdir('ludwig_model')
        else:
            print("Model directory does not exist")
    except FileNotFoundError as file_error:
        print("Error deleting model: ", file_error)
        raise
