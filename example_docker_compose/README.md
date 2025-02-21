Interresting Stuff
```bash
docker inspect my-app_backend_1
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' my-app_backend_1
docker logs my-app_backend_1
docker logs -f my-app_backend_1
docker exec -it my-app_backend_1 bash
docker exec -it my-app_backend_1 sh

```