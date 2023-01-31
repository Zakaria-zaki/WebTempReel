
# Projet Web en Temps Réel 

## Requirements

- Docker
- Docker Compose

## Commands

### add .env file in server folder

```
PORT=8000
JWT_SECRET=secret
```

### Docker Compose Startup

```bash
docker-compose up --d
```

### Load fixtures

```bash
docker exec -it server_websockets sh
npm run migrate-db
```

![alt text](https://gcdnb.pbrd.co/images/Dq9P25eBkkDm.png?o=1)
