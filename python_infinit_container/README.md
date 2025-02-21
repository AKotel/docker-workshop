Create container
```bash
docker build -t python-infinite-container .
docker run -d --name python-infinite -v $(pwd):/app -it python-infinite-container
```

exec into container
```bash
docker exec -it python-dev bash
```