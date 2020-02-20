PROJECT = mchirico
NAME = nodenotes
TAG = test


docker-build:
ifeq ($(PORT), 8080)
	echo "build for port.."
	docker build --no-cache -t gcr.io/$(PROJECT)/$(NAME):$(PORT) -f Dockerfile .
#	gcloud config set gcloudignore/enabled false
#	gcloud builds submit --tag gcr.io/$(PROJECT)/$(NAME):$(PORT)
else
	docker build --no-cache -t gcr.io/$(PROJECT)/$(NAME):$(TAG) -f Dockerfile .
endif

push:
ifeq ($(PORT), 8080)
	docker push gcr.io/$(PROJECT)/$(NAME):$(PORT) 
else
	docker push gcr.io/$(PROJECT)/$(NAME):$(TAG) 
endif


pull:
ifeq ($(PORT), 8080)
	docker pull gcr.io/$(PROJECT)/$(NAME):$(PORT) 
else
	docker pull gcr.io/$(PROJECT)/$(NAME):$(TAG) 
endif


run:
ifeq ($(PORT), 8080)
	docker run -p 8080:8080 --rm -it -d --name $(NAME) gcr.io/$(PROJECT)/$(NAME):$(PORT) 
else
	docker run -p 3000:3000 --rm -it -d --name $(NAME) gcr.io/$(PROJECT)/$(NAME):$(TAG) 
endif



runnod:
	docker run -p 3000:3000 --rm -it --name $(NAME) gcr.io/$(PROJECT)/$(NAME):$(TAG) 

stop:
	docker stop $(NAME)

logs:
	docker logs nodenotes



