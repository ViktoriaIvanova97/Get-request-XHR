const requestURL = 'https://rickandmortyapi.com/api/character/2'

const xhr = new XMLHttpRequest()

xhr.open('GET', requestURL)

xhr.onload = () => {
    console.log(xhr.response)
}

xhr.send()
