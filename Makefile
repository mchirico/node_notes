
docker-build:
	docker build --no-cache -t gcr.io/pigdevonlyx/nodenotes:test -f Dockerfile .

run:
	docker run --rm -it gcr.io/pigdevonlyx/nodenotes:test
