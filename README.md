Front End : Next ; Back End : Laravel, MySQL, RabbitMQ ; Docker </br>

copy isi .env.docker ke .env

```
docker compose up --build
```

Tunggu hingga akhir lalu 

```
docker compose exec app php artisan optimize:clear
```

lalu 

```
docker compose exec app php artisan migrate:fresh --seed
```
lalu

```
docker compose exec app php artisan schedule:work
```

```
username : dennis01 , password : dennis01, role : superadmin (Jika tidak masuk, login 2x)
```