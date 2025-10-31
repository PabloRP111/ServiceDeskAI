# Variables
COMPOSE_FILE=docker-compose.yml
PROJECT_NAME=servicedeskai

build:
	@echo "Construyendo imágenes Docker..."
	docker-compose -p $(PROJECT_NAME) -f $(COMPOSE_FILE) build

up:
	@echo "Levantando contenedores..."
	docker-compose -p $(PROJECT_NAME) -f $(COMPOSE_FILE) up -d --build

down:
	@echo "Deteniendo contenedores..."
	docker-compose -p $(PROJECT_NAME) -f $(COMPOSE_FILE) down

clean:
	@echo "Limpiando contenedores y volúmenes..."
	docker-compose -p $(PROJECT_NAME) -f $(COMPOSE_FILE) down -v

fclean:
	@echo "Limpiando TODO: contenedores, volúmenes e imágenes..."
	docker-compose -p $(PROJECT_NAME) -f $(COMPOSE_FILE) down -v --rmi all
	docker image prune -f
	rm -rf mongo-data

seed:
	docker exec -it servicedesk-backend node seedOffices.js

reup: down up
	@echo "Contenedores reiniciados"

logs:
	@echo "Mostrando logs de los contenedores:"
	docker-compose -p $(PROJECT_NAME) -f $(COMPOSE_FILE) logs -f

default: up
