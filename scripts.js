var typed = new Typed('.typewriter-text', {
	strings: [
		' ',
		'Front-End Developer',
		' Bodybuilder',
		'Freelancer',
		'Youtuber',
	],
	typeSpeed: 100,
	backSpeed: 70,
	loop: true,
})

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

let section = document.querySelectorAll('.section')
let navLinks = document.querySelectorAll('.header nav a')

function sendMail() {
	var params = {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		message: document.getElementById('message').value,
	}

	const serviceID = 'service_p7k560x'
	const templateID = 'template_sz6wnvv'

	emailjs
		.send(serviceID, templateID, params)
		.then(res => {
			document.getElementById('name').value = ''
			document.getElementById('email').value = ''
			document.getElementById('message').value = ''
			console.log(res)
			alert('Your message sent successfully!!')
		})
		.catch(err => console.log(err))
}
