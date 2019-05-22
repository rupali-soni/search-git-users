# Search Git Users

## Prerequisites
* npm 6+
* node.js 10+

## Getting started

1. Checkout the repository and move to the created repository in terminal and hit

```npm install```


Now use the dockerfile to build docker image on your system. 
Please follow the steps mentioned below:

2. To build the image (Please mind the "." at the end)

```$ docker build -t <your username>/search-git-users .```
 
3. You can see your docker image in the list

```$ docker images```

4. To run the docker image

```$ docker run -p 4600:4600 -d <your username>/search-git-users```

5. To see running containers

```$ docker ps```

6. To see logs on your docker server

```$ docker logs <container_id>```

### Try to hit swagger

```http://localhost:4600/api-docs/```

### Queries/Concerns: write here

```rupali.soni19@gmail.com```
