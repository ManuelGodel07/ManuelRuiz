let password = 'manuel'
let pass
do{
	pass = prompt('Ingrese la contraseña')
} while(pass !== password)

let answer = prompt('Dime cual es tu numero favorito del 1 al 10').trim()
	switch (answer) {
		case '1':
			alert('Eres un ganador')
			break
		case '2':
			alert('Casi eres un ganador')
			break
		case '3':
			alert('Tienes que esforzarte mas')
			break
		case '4':
			alert('Eres normal')
			break
		case '5':
			alert('Sigue esforzandote')
			break
		case '6':
			alert('Puedes hacerlo mejor')
			break
		case '7':
			alert('Tienes que analizar tus acciones para mejorar')
			break
		case '8':
			alert('Busca ayuda')
			break
		case '9':
			alert('En serio busca ayuda')
			break
		case '10':
			alert('¿quiere un paño?')
			break
		default:
			alert('Por favor, tienes que seguir la instrucción')
	}
