# Docker Demo (Echo API)

This demo provides examples for building a Docker image for a Node.js API server (with Express) and running the application using Docker Compose.

## Prerequisites

Before you start, ensure you have the following tools installed:

- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/en/)

You can check if Docker and Docker Compose are installed by running:

```bash
docker --version
docker-compose --version
```

## Build Docker Image for Echo API
```bash
docker build -t <container_image_name>:<container_image_version> .
```

For example:
```bash
docker build -t echo-api:latest .   # Build the latest version of echo-api
docker build -t echo-api .          # Build the latest version of echo-api
docker build -t echo-api:1.0.0 .    # Build echo-api with tag version 1.0.0
```

Check if `echo-api` docker image is build successfully
```bash
$ docker images
REPOSITORY         TAG            IMAGE ID       CREATED         SIZE
echo-api           1.0.0          3de57b6026c0   6 minutes ago   155MB
echo-api           latest         7504b705a6bb   6 hours ago     155MB
```

## Run Docker Image for Echo API
```bash
docker run -p 8080:3000 --name docker-demo -d echo-api:latest   # Run the latest version of echo-api and expose port 8080
docker run -p 8080:3000 --name docker-demo -d echo-api:1.0.0    # Run echo-api with tag version 1.0.0 and expose port 8080
```
Check if `echo-api` docker image is running
```bash
$ docker ps  
CONTAINER ID   IMAGE             COMMAND                  CREATED         STATUS         PORTS                    NAMES
4f890f5b30a9   echo-api:latest   "docker-entrypoint.s…"   2 seconds ago   Up 2 seconds   0.0.0.0:8080->3000/tcp   docker-demo
```

## Run Docker Compose for Echo API and MongoDB
```bash
docker-compose up -d        # Start
docker-compose down         # Stop
```
