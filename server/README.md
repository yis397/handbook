# env
MONGO_URL=
SECRET_KEY=

AWS_BUCKET_NAME=
AWS_ID=
AWS_CLAVE=
# docker-compose.yaml
services:
  handbookdb:
    image: 
    container_name: 
    ports:
      - ###
    volumes:
      - ###
# Next.js Basar
Para correr localmente, se necesita la base de datos.
```
docker-compose up -d
```

* El -d, significa __detached__



## Configurar las variables de entorno
Renombrar el archivo __.env.template__ a __.env__
* MongoDB URL Local:
```
MONGO_URL=mongodb://localhost:27017/handbook
```

* Reconstruir los módulos de node y levantar Next
```
yarn install
yarn dev
```


## Llenar la base de datos con información de pruebas

Llamara:
```
http://localhost:3000/api/seed
```