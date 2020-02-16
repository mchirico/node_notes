PROJECT = mchirico
NAME = nodenotes
TAG = test

docker-build:
	docker build --no-cache -t gcr.io/$(PROJECT)/$(NAME):$(TAG) -f Dockerfile .

push:
	docker push gcr.io/$(PROJECT)/$(NAME):$(TAG) 

run:
	docker run -p 3000:3000 --rm -it -d --name $(NAME) gcr.io/$(PROJECT)/$(NAME):$(TAG) 

stop:
	docker stop $(NAME)

logs:
	docker logs nodenotes
