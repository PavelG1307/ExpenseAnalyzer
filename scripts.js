const page = 'main'
const url = 'http://localhost:8080/api'
const token = 'sdfhjadsjkdfhkjashjdhafjahjfkshj'
const buttons = document.getElementsByClassName('menu_btn')
for (const i in buttons){
    buttons[i].onclick = (ev) => {
        const id = ev.target.id
        if (id === page) return
        document.location.href = `/${id}`
    }
}

document.getElementById('save').addEventListener('click', async () => {
    const value = Number(document.getElementById('summ').value)
    const unexpected = document.getElementById('unexpected').checked
    const profit = document.getElementById('profit').checked
    const comment = document.getElementById('comment').value
    const type = 1
    console.log({ value, unexpected, comment, profit, type })
    const res = await axios({
        method: 'post',
        url,
        data: { value, unexpected, comment, profit, type }
    })
})