# Ejercicio 3: Preguntas de conocimiento

## Fragmento 1

Errores que detecté:

1. setRequestsLog(requestsLog + 1) debería usar el estado previo y a ese sumarle la unidad
2. Pareciera innecesario y problemático agregar a las dependencias del useEffect requestsCount
3. Se está importando React, pero esto no es realmente necesario, ya que como variable no se usa nunca
4. No es muy claro para qué se setea requestsLog con valores numéricos. Por semántica, pareciera deber recibir los logs generados por los llamados al API
5. En la línea LOG: You've made {requestsLog} requests pareciera errado pasar requestsLog, en vez de requestsCount, si lo que se pretende mostrar el la cantidad de llamados al API. Además, ambos valores difieren, porque requestsLog será 1 cuando se monte el componente, dado que al ejecutarse el useEffect se hará el incremento en la variable, pero no se ha realizado ningún llamado al API.

## Fragmento 2

Errores que detecté:

1. Nuevamente, se importa sin necesidad React
2. La línea <div>Editing user: {userFullName}</div> no mostrará al usuario a editar al montarse el componente, por lo que podría ponerse algún otro copy (a la espera...) mientras se setea algún valor en userFullName
3. El useEffect parece bastante costoso en términos de performance, porque se ejecutará cada vez que se cambie una de las variables de las dependencias, con cada cambio en esos inputs
