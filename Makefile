
docker-build:
	docker build --no-cache -t gcr.io/pigdevonlyx:test -f Dockerfile .

run:
	docker run --rm -it gcr.io/pigdevonlyx:test
