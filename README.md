## Trash Classification and Recycling Assistant using YOLO Variants

## Overview:
This project aims to develop a Trash Classification and Recycling Assistant using various YOLO (You Only Look Once) object detection models. The assistant helps in identifying different types of waste and provides guidance on proper recycling practices. The goal is to improve waste management and promote recycling through the use of advanced computer vision techniques.

## Features:
Real-time Object Detection: Utilizes YOLO variants (YOLOv3, YOLOv4, YOLOv5, YOLOv7 etc.) for real-time trash detection.
Multi-class Classification: Classifies waste into multiple categories such as plastic, metal, paper, glass, and cardboard etc.
Recycling Guidance: Provides information on how to properly recycle or dispose of detected waste items.
User-Friendly Interface: Easy-to-use interface for uploading image and receiving classification result.

## Dataset:
The project uses a custom dataset consisting of images of various types of trash. The dataset is annotated with bounding boxes and labels for different categories of waste. The dataset can be expanded and improved by collecting more images and annotations.

## Model Training:
To train the YOLO models on your custom dataset, follow these steps:
Prepare the dataset:
Organize your dataset into the required format (images and annotations).
Modify the configuration files:
Update the configuration files in the configs directory with the paths to your dataset and other parameters.
Train the model:
python train.py --config configs/yolov5.yaml  # Replace with your configuration file
Evaluate the model:
python evaluate.py --config configs/yolov5.yaml  # Replace with your configuration file

## Results:
The results of the trained models, including accuracy, precision, recall, and example detections, will be documented here. Comparative analysis of different YOLO variants can also be included.

## License:
[MIT](https://choosealicense.com/licenses/mit/) This project is licensed under the MIT License. See the LICENSE file for more details.


