# Título

Prueba de diseño de software

## Soluciones Consideradas

- Se plantea un pequeño ajuste en la estructura del proyecto con el fin de dar una mayor escalabilidad y orden al proyecto ya que es una app en constante crecimiento y de esta forma se separa muy bien el alcance de los componentes y servicios.
- Según los diseños también se sugiere una mejor distribución de las secciones para una mejor organización y visión del modulo, (aquí la sugerencia)[https://excalidraw.com/#json=8NUy60_Q0pfW2sAwz2Z9c,Yyw7W2HP0OPAALIy1aSTSg].
  - Consideraciones para la propuesta del nuevo diseño:
    - Al tener estos días de la semana dentro de un componente tipo acordeon podemos gestionar desde el servidor una carga en bg de los items a renderisar y adicional manejar cache desde el mismo servidor para que cuando se genere nuevamente una carga de items sea mucho mas transparente para el usuario final.

## Consecuencias y Riesgos

- Una consecuencia importante a tener en cuenta es que se pueden dar mayor numero de carpetas y archivos.

## Arquitectura

```
aleluya_app/
└── apps/
    └── src/
        ├── assets/
        ├── utils/
        ├── hooks/
        ├── config/
        |── services/
        │   |── AuthService.ts
        │   |── LoggingService.ts
        |── components/
        │   └── Button/
        |       ├── variant-A.tsx
        |       ├── variant-B.tsx
        |       └── __test__/
        │   └── Table/
        |       ├── index.tsx
        |       ├── helpers.tsx
        |       └── __test__/
        │   └── Modal/
        |       ├── index.tsx
        |       ├── helpers.tsx
        |       └── __test__/
        |── ShiftsManager/
        │   |── components/
        │   │   |── index.tsx
        │   │   |── shifts-summary-table.js
        │   │   |── shifts-details-by-days-table.js
        │   │   |── shifts-modal.js
        |   |   ├── __test__/
        │   |── services/
        │   │   |── shiftsManagerServices.js
```
