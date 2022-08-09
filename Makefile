server-dev-build:
	docker-compose -f docker-compose.dev.yml build --no-cache
dev-up:
	docker-compose -f docker-compose.dev.yml up -d
dev-down: 
	docker-compose -f docker-compose.dev.yml down
server-dev-test:
	docker-compose -f docker-compose.test.yml up
dev-destroy: 
	docker-compose -f docker-compose.dev.yml rm
server-dev-sh: 
	docker-compose -f docker-compose.dev.yml exec node_app sh
client-dev-sh: 
	docker-compose -f docker-compose.dev.yml exec react_app sh
client-dev-logs:
	 docker-compose -f docker-compose.dev.yml logs react_app --tail 1000 -f
server-dev-logs:
	 docker-compose -f docker-compose.dev.yml logs node_app --tail 1000 -f
prod-up:
	docker-compose up -d
client-logs:
	 docker-compose logs react_app_prod --tail 1000 -f
server-logs:
	 docker-compose logs node_app_prod --tail 1000 -f