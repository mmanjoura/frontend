FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install --force --omit=dev 
RUN npm run build . --force --omit=dev
CMD ["npm", "start"]


# run this command to build the image
# docker build -t niya-backend-app .
# run this command to test the container
# docker run -p 8888:8080 niya-backen-app
# netstat -aon | findstr 8080
# taskkill /PID xxxx /F


#deloyment to GCP
# gcloud auth login
# -- Tag the image with the registry name
# docker tag app gcr.io/niya-voyage/app
# -- give docker access to the registry
# gcloud auth configure-docker
# -- Push the image to the registry
# docker push gcr.io/niya-voyage/app

# -- Googles Cloud Run service

# -------------------------------------------------------------------------------- Start Instructions Backend --------------------------------------------------------------------------------
# Run these commands from ther roots of backend project
# gcloud config set project niya-voyage

# docker build -t niya-voyage-backend-app .
# docker run -p 8888:80 niya-voyage-backend-app
# docker tag niya-voyage-backend-app gcr.io/niya-voyage/niya-voyage-backend-app
# gcloud auth configure-docker
# docker push  gcr.io/niya-voyage/niya-voyage-backend-app

# -------------------------------------------------------------------------------- Start Instructions Frontend --------------------------------------------------------------------------------
# # Run these commands from ther roots of frontend project
# docker build -t niya-voyage-frontend-app .
# docker tag niya-voyage-frontend-app gcr.io/niya-voyage/niya-voyage-frontend-app
# gcloud auth configure-docker
# docker push  gcr.io/niya-voyage/niya-voyage-frontend-app