// selection of the elements
const move_to_top = document.querySelector(".scroll_to_top")


// functions are defined here
const move_page = () => {
	window.scrollTo({
		top: 0,
		scrollBehavior: "smooth",
	})
}

// event listeners
move_to_top.addEventListener(("click"), move_page)

// Carousel

const slides = document.querySelectorAll(".carousel__photo")
const next = document.querySelector("#next")
const prev = document.querySelector("#prev")
const auto = true
const intervalTime = 5000
let slideInterval


const nextSlide = () => {
	const current = document.querySelector(".initial")
	current.classList.remove('initial')

	if(current.nextElementSibling) {
		current.nextElementSibling.classList.add('initial')
	} else {
		slides[0].classList.add("initial")
	}

	setTimeout(() => current.classList.remove('initial'), 200)

}

const prevSlide = () => {
	const current = document.querySelector(".initial")
	current.classList.remove('initial')

	if(current.previousElementSibling) {
		current.previousElementSibling.classList.add('initial')
	} else {
		slides[slides.length - 1].classList.add("initial")
	}

	setTimeout(() => current.classList.remove('initial'), 200)

}

next.addEventListener('click', e => {
	nextSlide()
	if(auto) {
		clearInterval(slideInterval)
		slideInterval = setInterval(nextSlide,intervalTime)
	}
})

prev.addEventListener('click', e => {
	prevSlide()
	if(auto) {
		clearInterval(slideInterval)
		slideInterval = setInterval(nextSlide,intervalTime)
	}
})



if(auto) {
	slideInterval = setInterval(nextSlide,intervalTime)
}


// Send emails using javascript smtp.js
const submitBtn = document.querySelector("#submitBtn")
let name = document.querySelector(".name")
let email = document.querySelector(".email")
let message = document.querySelector(".message")


const sendEmail = (e) => {

	e.preventDefault()
	Email.send({
		Host:"smtp.gmail.com",
		Username: name,
		To:"ferozeby@gmail.com",
		From:email,
		Subject:message,
		body:message,
	}).then(message => alert("Mail send successfully"))
}

submitBtn.addEventListener("click", sendEmail)