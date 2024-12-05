Prueba técnica Aleluya

## 1. Estructura de archivos:

Estructura tipo fichero:

- Components
  - Avatar
    - Avatar.tsx
    - avatar.test.ts
  - Button
    - Button.tsx
    - Button.test.ts
- Context
  - UserContext
    - UserContext.ts
- Hooks
  - useMediaQuery
    - useMediaQuery.js
- Pages
  - USerProfile
    - Components
      - userProfileData
    - UserProfile.jsx
    - UserProfile.test.js
- routes
  - routes.tsx
  - routes.test.ts
- utils
  - someUtil
    - index.ts
- services
  - someService
    - index.tsx
- App.tsx
- Index.ts

## 2. Modulos Necesarios

Funcionalidades principales
[](https://github.com/ndozhh/moviex-test?tab=readme-ov-file#funcionalidades-principales) • El usuario puede ver un resumen de la cantidad de turnos por persona.

- El usuario puede ver un resumen de los turnos asignados en cada día de la semana.
- El usuario puede filtrar el historial de semanas y descargar toda la información de una semana en específico como un archivo de excel.
- El usuario puede hacer las siguientes acciones sobre un turno:
  - **Editarlo**: para cambiar la persona a la que fue asignado o cambiar su horario.
  - **Marcarlo como completado**: en este caso las horas totales del turno serán sumadas a la nómina de la persona.
  - **Descartarlo**: en caso de que el turno no sea ejecutado o que la persona asignada no lo realice. En cualquiera de los dos casos a la persona no se le suman horas a la nómina.
- El usuario puede ver el detalle completo de los turnos de la semana por persona.
- El usuario puede ver el detalle completo de los turnos de un día de la semana y a quienes están asignados.

Modulos necesarios:

- Gestión de turnos
- Informes
- Gestión de personas

## 3. Estrategias para resolver los retos relevantes

Retos:

- Tiempos de respuesta muy altos:
  - Si el tiempo no es exagerado se puede gestionar con feedback visual como indicadores de carga o de progreso
  - De pendiendo de como funciona la API si es posible ir mostrando información parcial (caso extremo)
  - Optimizar el caché de información cuando se pueda
  - Si los datos cambian en tiempo real usar. Websockets
  - Si es posible usar prefetching para tener la información disponible antes que el usuario la solicite
- Empresas de mas de 5000 personas pueden tener muchos datos:
  - Usar paginaciòn cuando se deban presentar muchos datos
  - Infinite scrolling
  - Agrupación de datos
