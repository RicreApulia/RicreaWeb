function useDialog(dialogID, closeQuery, openQuery) {
    const target = document.getElementById(dialogID)
    const open = () => target.showModal()
    const close = () => target.close() 
    const res = { target, open, close }

    if (!!openQuery) {
        res.targetOpen = document.querySelector(openQuery)
        res.targetOpen.addEventListener("click", open)
    }

    if (!!closeQuery) {
        res.targetClose = target.querySelector(closeQuery);
        res.targetClose.addEventListener("click", close)
    }

    return res
}

const mailDialog = useDialog('mail-dialog', 'button')

