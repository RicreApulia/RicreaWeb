

	var zoomPicture = (() => {
		const tag = document.getElementById("postcard-dialog")
		const picture = useBinds(tag)
		const dialog = useDialog(tag, tag)

		return (imgsrc, desc) => {
			picture.img = imgsrc
			picture.desc = desc
			dialog.open()
		}
	})()

