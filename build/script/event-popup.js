
	
	function useDialog(dialogTarget, closeTarget = null, openTarget = null) {
		const target = select(dialogTarget)
		const open = () => target.showModal()
		const close = () => target.close() 
		const res = { target, open, close }

		if (!!openTarget) {
			res.targetOpen = select(openTarget)
			res.targetOpen.addEventListener("click", open)
		}

		if (!!closeTarget) {
			res.targetClose = select(closeTarget);
			res.targetClose.addEventListener("click", close)
		}

		return res
	}

