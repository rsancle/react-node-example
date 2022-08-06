server-dev-build:
	docker-compose -f docker-compose.dev.yml build --no-cache
server-dev-up:
	docker-compose -f docker-compose.dev.yml up
server-dev-test:
	docker-compose -f docker-compose.test.yml up
server-dev-down: 
	docker-compose -f docker-compose.dev.yml down
server-dev-destroy: 
	docker-compose -f docker-compose.dev.yml rm
server-dev-sh: 
	docker-compose -f docker-compose.dev.yml exec node_app sh