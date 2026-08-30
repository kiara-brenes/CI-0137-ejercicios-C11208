# Ejercicio 1 - Ambiente de desarrollo local

**Servidor web seleccionado:** Caddy

**Razón de elección:** Se eligió Caddy principalmente por la simplicidad de su
configuración. Debido a que a diferencia de Apache o Nginx, que requieren archivos de configuración más grandes, Caddy utiliza un Caddyfile que es considerablemente más breve y de sintaxis clara. Adicionalmente, incorpora HTTPS automático por defecto y su instalación en Ubuntu resultó directa siguiendo la documentación.

**Puerto utilizado:** 80

**URL:** http://localhost/

**Configuración:** Se instaló Caddy agregando su repositorio oficial a apt.
Dentro de la carpeta ejercicio-01/ se creó un archivo Caddyfile en el que se
definió el puerto de escucha (:80) y, mediante la directiva `root *`, la ruta
hacia esta misma carpeta del repositorio, indicando así el document root del
servidor. La directiva `file_server` habilita el servicio de estos archivos
estáticos al navegador. El servidor se ejecutó con `sudo caddy run` desde la
carpeta del proyecto y su correcto funcionamiento se verificó accediendo a
localhost desde el navegador.
