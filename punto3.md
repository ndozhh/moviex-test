1.

- no estoy seguro si setRequestsCount((prev) => prev + 1) funcione, tal vez tenga que ser setRequestsCount(requestsLog + 1), esto lo probaría porque no estoy del todo seguro
- makeRequest cambia requestsCount lo que activa el useEffect y este cambia requestsLog, esto se puede corregir eliminando una de las dependencias del useEffect, se puede dejar solo requestsCount

2.

- isEditing no se está usando
- El useEffect es innecesario, se está usando para creal el fullNAme que solo se usa en el header del formulario, creo que es mejor hacer eso concatenando el nombre y apellido directamente ahí

3. En este no logro identificar el error
