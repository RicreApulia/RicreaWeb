
	[...document.getElementsByClassName("postcard-component")].forEach(comp => {
		const figure = comp.children[0]
		figure.addEventListener("click", event => {
			figure.classList.toggle("open")
			document.body.classList.toggle("prevent-scroll")
		})
	})
