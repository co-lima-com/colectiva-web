# colectiva-web

Integrantes:
- Johel Cueva
- Michael Límaco

1. Resumen de la idea.
    Es un aplicativo para poder agendar el servicio de transporte colectivo de forma privada o independiente. 
2. ¿Qué problema o molestia soluciona?
    Hay un problema para los grupos que tienen la necesidad de tomar un bus mediano, de rutas definidas, pero que no cueste caro, normalmente tienen que recurrir a colectivos, pero dependes de la suerte para lograr abarcar uno. El aplicativo pretende poder agendar el servicio para estas casuisticas. 
3. Definición de su Producto mínimo viable (MVP).
    - Home informativa
    - Formulario Registro Usuario
    - Formulario Registro de Conductor
    - Formulario de Registro de Colectivo
    - Catálogo de Colectivos con Horarios
   	- Formulario de Solicitud de Servicio
    - Pasarela de Pago Simple

Modelo de Dominio

Usuario

    - Nombre
    - Apellido Paterno
    - Apellido Materno
    - Fecha de Nacimiento
    - DNI
    - Dirección
    - Correo Electrónico
    - Contraseña
    - DNI Cara
    - DNI Contracara

Conductor

    - Nombre
    - Apellido Paterno
    - Apellido Materno
    - Fecha de Nacimiento
    - DNI
    - Dirección
    - Correo Electrónico
    - Contraseña
    - SOAT Cara
    - SOAT Contracara
    - DNI Cara
    - DNI Contracara

Colectivo

    - Marca
    - Modelo
    - Año
    - Placa
    - Distrito Inicio
    - Distrito Fin
    - Número Asientos
    - Paradero 1
    - Hora Estimada
    - Foto del Vehículo