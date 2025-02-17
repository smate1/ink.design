document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('burger').addEventListener('click', function () {
		document.querySelector('.header').classList.toggle('open')
	})
})

function changeColorOnScroll() {
	const paragraphs = document.querySelectorAll('.benefits__text')
	const middleY = window.innerHeight / 2

	paragraphs.forEach(p => {
		const rect = p.getBoundingClientRect()
		const center = rect.top + rect.height / 2

		if (Math.abs(center - middleY) < rect.height / 2) {
			p.classList.add('benefits__active')
		} else {
			p.classList.remove('benefits__active')
		}
	})
}

window.addEventListener('scroll', changeColorOnScroll)

document.querySelectorAll('.work__item').forEach(item => {
	const overlay = item.querySelector('.hover-overlay')

	item.addEventListener('mousemove', e => {
		const rect = item.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top

		overlay.style.left = `${x}px`
		overlay.style.top = `${y}px`
		overlay.style.opacity = '1'
		overlay.style.transform = 'translate(-50%, -50%)'
		overlay.style.position = 'absolute'
	})

	item.addEventListener('mouseleave', () => {
		overlay.style.opacity = '0'
	})
})

function toggleMenu() {
	const menu = document.querySelector('.menu')
	const header = document.querySelector('.header')

	menu.classList.toggle('active')
	header.classList.toggle('open')
}

document.querySelectorAll('.menu__link').forEach(link => {
	link.addEventListener('click', () => {
		document.querySelector('.menu').classList.remove('active')
		document.querySelector('.header').classList.remove('open')
	})
})




