
docker-build:
	docker build --no-cache -t gcr.io/pigdevonlyx/nodenotes:test -f Dockerfile .

push:
	docker push gcr.io/pigdevonlyx/nodenotes:test 

run:
	docker run --rm -it gcr.io/pigdevonlyx/nodenotes:test
