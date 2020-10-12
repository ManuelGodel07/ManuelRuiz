const fila = document.querySelector('.contenedor-carousel'),
	pics = document.querySelectorAll('.pic'),
	flechaIzquierda = document.getElementById('flecha-izquierda'),
	flechaDerecha = document.getElementById('flecha-derecha');

// ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});



// ? ----- ----- Hover ----- -----
pics.forEach((pic) => {
	pic.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			pics.forEach(pic => pic.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	pics.forEach(pic => pic.classList.remove('hover'));
});





const fila2 = document.querySelector('.contenedor-carousel2'),
	pics2 = document.querySelectorAll('.pic2'),
	flechaIzquierda2 = document.getElementById('flecha-izquierda2'),
	flechaDerecha2 = document.getElementById('flecha-derecha2');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha2.addEventListener('click', () => {
	fila2.scrollLeft += fila2.offsetWidth;

	const indicadorActivo2 = document.querySelector('.indicadores .activo');
	if(indicadorActivo2.nextSibling){
		indicadorActivo2.nextSibling.classList.add('activo');
		indicadorActivo2.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda2.addEventListener('click', () => {
	fila2.scrollLeft -= fila2.offsetWidth;

	const indicadorActivo2 = document.querySelector('.indicadores .activo');
	if(indicadorActivo2.previousSibling){
		indicadorActivo2.previousSibling.classList.add('activo');
		indicadorActivo2.classList.remove('activo');
	}
});



// ? ----- ----- Hover ----- -----
pics.forEach((pic2) => {
	pic2.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			pics.forEach(pic2 => pic2.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	pics.forEach(pic2 => pic2.classList.remove('hover'));
});



const fila3 = document.querySelector('.contenedor-carousel3'),
	pics3 = document.querySelectorAll('.pic3'),
	flechaIzquierda3 = document.getElementById('flecha-izquierda3'),
	flechaDerecha3 = document.getElementById('flecha-derecha3');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha3.addEventListener('click', () => {
	fila3.scrollLeft += fila3.offsetWidth;

	const indicadorActivo3 = document.querySelector('.indicadores .activo');
	if(indicadorActivo3.nextSibling){
		indicadorActivo3.nextSibling.classList.add('activo');
		indicadorActivo3.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda3.addEventListener('click', () => {
	fila3.scrollLeft -= fila3.offsetWidth;

	const indicadorActivo3 = document.querySelector('.indicadores .activo');
	if(indicadorActivo3.previousSibling){
		indicadorActivo3.previousSibling.classList.add('activo');
		indicadorActivo3.classList.remove('activo');
	}
});



// ? ----- ----- Hover ----- -----
pics.forEach((pic3) => {
	pic3.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			pics.forEach(pic3 => pic3.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila3.addEventListener('mouseleave', () => {
	pics.forEach(pic3 => pic3.classList.remove('hover'));
});