// Envió de formulario

const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
	event.preventDefault()
	const form = new FormData(this)
	const response = await fetch(this.action, {
		method: this.method,
		body: form, 
		headers: {
			'Accept': 'application/json'
		}
	})
	if (response.ok) {
		this.reset()
		Swal.fire({
			title: "¡GRACIAS!",
			text: "Correo enviado correctamente",
			iconColor: '#faffbe',
			color: '#faffbe',
			background: '#141212',
			icon: "success"
		  });
	}
	else {
		this.reset()
		Swal.fire({
			title: "¡UPSS!",
			text: "Algo salio mal intetalo de nuevo",
			iconColor: '#faffbe',
			color: '#faffbe',
			background: '##141212',
			icon: "warning"
		  });
	}
}