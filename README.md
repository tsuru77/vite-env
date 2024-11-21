# React + Vite + ImportMetaEnv + Docker

## 1 - Building the docker image
```bash
docker build . -t "vite:test:"
```

## 2 - Running the container with the image
```bash
docker run --name vite-env-change -d -p 3000:3000 vite:test
```

## 3 - Changing the env variable
```bash
docker exec -it vite-env-change /bin/sh -c "export VITE_APITEST=your_secret_var && npx import-meta-env -x .env.example -p dist/index.html"
```


