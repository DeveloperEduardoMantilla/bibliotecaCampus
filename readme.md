## Biblioteca CampusLands

## Despliegue :racing_car:

Para este filtro se hara uso de las siguientes librerias 
   * class-transformer   
   * class-validator
   * dotenv
   * express
   * jose
   * mysql2   
   * nodemon   
   * reflect-metadata
   * typescript

### Ejecutar en terminal :hammer_and_wrench:
1. Ejecutamos el siguiente comando en la terminal estando ubicados en la ruta que queremos que repose el proyecto 

```shell
   git clone https://github.com/EduardoMantillaCampus/bibliotecaCampus.git
```

### Ejecutar en terminal :hammer_and_wrench:
2. Ya teniendo abierto el proyecto en Visual Studio Code, nos dirigimos a la terminal donde instalaremos el siguiente comando. 

```shell
   npm i
```
3. Hora vamos a tomar el archivo .env-example y lo vamos a dejar con el nombre **.env**.

Dentro de este archivo reponsan las varibales de entorno que se requieren para el funcionamiento de la herramienta, por ende necesitaremos configurar la conexion la base de datos entre otras cosas.


### EndPoint disponibles

1. Obtener todos los autores y su nacionalidad.
* (Get) => http://direccionIp:puerto/autor/

2. Listar todas las categorías disponibles.
* (Get) => http://direccionIp:puerto/categoria/

3. Mostrar todas las editoriales y sus direcciones.
* (Get) => http://direccionIp:puerto/editorial/

4. Obtener los estados de los libros y sus descripciones.
* (Get) => http://direccionIp:puerto/estadoLibro/

5. Mostrar todos los libros con su título, autor y editorial.
* (Get) => http://direccionIp:puerto/libro/

6. Listar los préstamos realizados con fecha de préstamo,
fecha de devolución y estado.
* (Get) => http://direccionIp:puerto/prestamo/

7. Obtener todas las reservas realizadas con su fecha de
reserva y estado.
* (Get) => http://direccionIp:puerto/reserva/

8. Mostrar los libros disponibles para préstamo con su título y
autor.
* (Get) => http://direccionIp:puerto/libro/disponibles

9. Obtener los libros prestados y su fecha de devolución.
* (Get) => http://direccionIp:puerto/libro/prestados

10. Listar los usuarios y sus correos electrónicos.
* (Get) => http://direccionIp:puerto/usuario

11. Mostrar los libros escritos por un autor específico (ejemplo:
Gabriel García
* (Get) => http://direccionIp:puerto/libro?nombre=:nombre

12. Obtener los libros de cierta categoría (ejemplo: Novela). 
* (Get) => http://direccionIp:puerto/categoria/cate?nombre=nov

13. Listar los préstamos realizados por un usuario (ejemplo:
Juan Pérez). 
* (Get) => http://direccionIp:puerto/usuario/prestamos?usuario=Laura

14. Mostrar los libros con más de 500 páginas y su autor. 
* (Get) => http://direccionIp:puerto/libro/pag500

15. Listar los autores de nacionalidad española. 
* (Get) => http://direccionIp:puerto/autor/espanola

16. Mostrar los libros que están en reserva actualmente. 
* (Get) => http://direccionIp:puerto/libro/reserva

17. Mostrar los libros con título que contengan la palabra
"Tokio". 
* (Get) => http://direccionIp:puerto/libro/tokio