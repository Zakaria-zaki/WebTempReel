
# Projet Web en Temps Réel 

## Requirements

- Docker
- Docker Compose

## Commands

### Docker Compose Startup

```bash
docker-compose up --d
```

### Dependencies Installation node

```bash
docker-compose exec node npm install
```

### Dependencies Installation vue

```bash
docker-compose exec vue npm init vue@latest
```

```bash
docker-compose exec vue npm install
```

### Front Startup

```bash
docker-compose exec vue npm run dev
```

### Docker Compose Shutdown

```bash
docker-compose down --remove-orphans --volumes --timeout 0
```