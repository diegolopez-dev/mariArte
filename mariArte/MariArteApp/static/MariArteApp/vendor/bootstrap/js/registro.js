// Registro

window.addEventListener("load", function() {
	document.getElementById('submit-btn').addEventListener("click", function() {
		const Toast = Swal.mixin({
			toast: true,
			position: "center",
			showConfirmButton: false,
			timer: 4000,
			timerProgressBar: true,
			didOpen: (toast) => {
			  toast.onmouseenter = Swal.stopTimer;
			  toast.onmouseleave = Swal.resumeTimer;
			}
		  });
		  Toast.fire({
			title: "ENHORABUENA!",
			text: "Se ha registrado correctamente.",
			iconColor: '#faffbe',
			color: '#faffbe',
			background: '#141212',
		  });
	})
})