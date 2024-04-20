Front End : Next ; Back End : Laravel, MySQL, RabbitMQ ; Docker </br>

copy isi .env.docker ke .env lalu di cmd ketik :

```
docker compose up --build
```

Tunggu hingga akhir lalu :

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

tunggu hingga seperti gambar :

![image](https://github.com/dennis2908/pemesanan-makanan/assets/42124503/345661fc-c316-405d-8be5-c60030ea5f5e)

lalu buka http://localhost:3000 di browser

![image](https://github.com/dennis2908/pemesanan-makanan/assets/42124503/0171c9fa-8052-4e6f-9c1f-d7d54cae055f)

![image](https://github.com/dennis2908/pemesanan-makanan/assets/42124503/eb2406df-161a-4f33-adba-a13091b0dc06)