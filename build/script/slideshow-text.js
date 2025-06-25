
	window.setInterval(() => document.querySelectorAll(".slideshow-text-component").forEach(comp => {
		const items = Array.from(comp.children[0].children, span => span.classList)
		const ind = items.findIndex(span => span.contains("display"))
		items[ind].toggle("display")
		items[ind == items.length -1 ? 0 : ind +1].toggle("display")
	}), 2000)
