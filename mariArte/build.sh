#!/usr/bin/env bash
# Exit on error
set -o errexit

pip install --upgrade pip

pip install -r ./mariArte/requirements.txt

python ./mariArte/manage.py collectstatic --no-input

python ./mariArte/manage.py migrate
