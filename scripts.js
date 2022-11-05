const page = 'main'
const url = 'http:/localhost:8080'
const buttons = document.getElementsByClassName('menu_btn')
for (const i in buttons){
    buttons[i].onclick = (ev) => {
        const id = ev.target.id
        if (id === page) return
        document.location.href = `/${id}`
    }
}

document.getElementById('save').addEventListener('ckick', async () => {
    const summ = document.getElementById('summ').value
    const emergency = document.getElementById('chp').checked
    const comment = document.getElementById('comment').value
    const res = await axios({
        method: 'post',
        url,
        data: { summ, emergency, comment }
    })
})