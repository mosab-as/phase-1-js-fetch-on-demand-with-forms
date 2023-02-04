const init = () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const input = document.querySelector('input#searchByID');
        
        fetch(`${window.location.origin}/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            const title = document.querySelector('#movieDetails h4')
            const summary = document.querySelector('#movieDetails p')

            title.innerText = data.title
            summary.innerText = data.summary
            console.log(title,summary)
        })
  })
}

document.addEventListener('DOMContentLoaded', init);