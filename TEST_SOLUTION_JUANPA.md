# 1. MVP Gestión de turnos

## Problema
La gestion de horarios y turnos en algunas empresas es un caos, muchas veces los horarios se confunden, es difícil tener todos los detalles al día y esto es aun mas verdad cuando la empresa tiene muchos empleados y muchas sedes. Esto es un proceso super manual y operativo que puede fácilemente caer en errores que deriven en pagos erróneos a los empleados, mal funcionamiento de un proceso o multas por parte de la UGPP y la DIAN

## Solución
Vamos a crear EL módulo de Gestión de Horarios y Turnos (MVP) en donde se podran crear, editar, eliminar y reorganizar turnos, de este modo podamos mantener, gestionar y centralizar de forma rápida y automática los horarios de todos los empleados de una empresa. La idea es que los usuarios puedan descargar de manera fácil un resumen de los horarios de la semana y que puedan filtrar la semana que quieren visualizar.
Por defecto, al nevegar al nuevo módulo, la vista estará retornando el horario de la semana actual

Para este proyecto vamos a utilizar una nueva línea UI de componentes, para lo cual hemos de crear algunos componentes transversales a la aplicación de modo que se puedan seguir utilizando en desarrollos futuros.

## Tecnologías
- **Remix:** Framework base del proyecto
- **Typescript:** Lengiaje base del proyecto
- **Tailwind:** Para los estilos estilos
- **React Aria Components:**  Componentes UI
- **Zod:** Validaciones para la data que se envía al API
- **React hook forms:** Para la creación y validación de formularios

## Estructura de directorios
```
root/
├── src/
│   ├── components/
|   |   ├── ui
|   |   |   ├── button.tsx
|   |   |   ├── icon.tsx
|   |   |   ├── table.tsx
|   |   |   ├── card.tsx
|   |   |   ├── Theme.tsx
|   |   |   ├── icon-button.tex
|   |   |   └── tooltip.tsx
|   |   └── schedule-manager/
|   |      ├── index.tsx
|   |      ├── services.jsx
|   |      ├── week-schedule.tsx
|   |      ├── worker-id.tsx
|   |      ├── tableCard.tex
|   |      └── utils/
|   |         ├── ...otherUtils
|   |         └── helpers.tsx
│   ├── routes/
|   |   ├── ...restRoutes
|   |   ├── _app.schedule-manager.tsx
|   |   └── _app.schedule-manager.$worker-id.tsx
|   |   ├── _app.schedule-manager.week-schedule.tsx
│   └── appp.tsx
└── package.json
```

# Etapas del proyecto
Este proyecto como MVP contará con un periodo de desarrollo de 6 semanas + 2 semanas para QA y cooldown que serán divididas en 3 estapas diferentes con el propósito de tener entregables claros.

## 1. Creación de los componentes UI
En la semana uno, dos y tres se estará trabajando casi por entero en la contrucción de los componentes UI de la nueva línea de Diseño.
**Criterios de aceptación:**
- [] Importables desde todas las partes
- [] Deben contener sus respectivas variaciones, en caso de que apliquen variaciones

## 2. Creación muck-up componentes del módulo
Durante la semana tre, cuatro y cinco se estaremos creando e implementando el muckup de la vista de `/schedule-manager`
**Criterios de aceptación:**
- [] Se puede navegar a la vista
- [] En la vista puedo visualizar las tablas con con los datos quemados
- [] Los icon-buttons me dan el tooltip conrrecto
- [] Tiene botón de descarga y botón para filtrar la semana
- [] La UI debe tener condicionamientos que permitan al usuario ver algo en la app mientras los request responden ya que estos suelen tomar bastante tiempo
- El nombre de cada empleado es clickeable y me crea un

## 3. Conectar con API
Durante la semana cuatro, cinco y seis estarmos trabajando en la conexión con las diferentes API
**Criterios de aceptación:**
- [] Servicio GET para listar la semanas. Si lleva un parámetro `historical_date` debe edevolver el horario de los turnos de la fecha que se envía en el parámetro
- [] Servicio GET para consultar el detalle completo de una semana
- [] Servicio POST Editar, descartar y aprobar  un turno


# 3. PUNTO TRES DEL RETO

## Fragmento 1
```
import { useState, useEffect } from "react";

function RequestsHandler() {
  const [requestsCount, setRequestsCount] = useState(0);
  const [requestsLog, setRequestsLog] = useState(0);

  useEffect(() => {
    setRequestsLog(requestsCount);
  }, [requestsCount]);

  function makeRequest() {
    // Simulates an API call
    setRequestsCount((prev) => prev + 1);
  }

  return (
    <div>
      <button onClick={makeRequest}>Make API request</button>
      <div>LOG: You've made {requestsLog} requests</div>
    </div>
  );
}

export default RequestsHandler;
```

## Fragmento 2

1. Demasiado useState. Esto se puede cambiar por objestos que contengan la data necesaria
2. datos nos utilizados
3. Mucho código repetido: El codigo que se retorna es una repetición de los mismo, creando un array de objetos, con los objetos del primer punto, se puede hacer un array.map para hacer un loop en la info y poder renderizarla toda.
4. useEffect inncecesario

## Fragmento 3
