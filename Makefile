PROJECT = mchirico

docker-build:
	docker build --no-cache -t gcr.io/$(PROJECT)/nodenotes:test -f Dockerfile .

push:
	docker push gcr.io/$(PROJECT)/nodenotes:test 

run:
	docker run -p 3000:3000 --rm -it gcr.io/$(PROJECT)/nodenotes:test
