# Ejercicio: Servidor con Express

Currículum servido desde un servidor hecho con Node.js y Express 5. El HTML se genera con plantillas EJS a partir de los datos que están en `datos/curriculum.js`.

## Requisitos

- Node.js 20 o más reciente (para usar `node --watch`).

## Cómo correrlo

1. Entrar a la carpeta del proyecto:

   ```
   cd ejercicio-servidor
   ```

2. Instalar las dependencias:

   ```
   npm install
   ```

3. Levantar el servidor:

   ```
   npm start
   ```

   Para desarrollo, con recarga automática cuando se guarda un archivo:

   ```
   npm run dev
   ```

4. Abrir en el navegador `http://localhost:3000`.

## Rutas

| Método | Ruta        | Qué hace                                                        |
|--------|-------------|-----------------------------------------------------------------|
| GET    | `/`         | Muestra el currículum renderizado con EJS.                      |
| POST   | `/contacto` | Recibe el formulario de contacto y muestra una página de gracias. |
| -      | cualquier otra | Responde con la página 404.                                   |

Cuando se envía el formulario, los datos recibidos se imprimen en la terminal donde corre el servidor. Si falta algún campo, se vuelve a mostrar el currículum con un mensaje de error.

## Estructura

```
ejercicio-servidor/
├── server.js                  configuración de Express y manejo del 404
├── datos/curriculum.js        datos del CV
├── controladores/             funciones que atienden cada ruta
├── rutas/                     definición de las rutas GET y POST
├── views/                     plantillas EJS (currículum, gracias, 404)
└── public/                    archivos estáticos (CSS, JS, imágenes)
```
