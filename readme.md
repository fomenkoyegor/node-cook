#

sudo docker run --publish 3306:3306 --name node-mysql --env MYSQL_ROOT_PASSWORD=PASSWORD --detach mysql:5

#

sudo docker run --publish 5432:5432 --name node-postgres --env POSTGRES_PASSWORD=PASSWORD --detach postgres:12

#

sudo docker run --publish 27017:27017 --name node-mongo --detach mongo:4

#

sudo docker run --publish 6379:6379 --name node-redis --detach redis

#

sudo docker run --publish 6380:6379 --name node-redis-pw --detach redis redis-server --requirepass PASSWORD
