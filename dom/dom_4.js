

const langs = document.querySelector('.langs')

const addLangs = (lang) => {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(lang))
    //    li.textContent = lang
    langs.appendChild(li)
}

const editLangs = (number, lang) => {
    const elem = document.querySelector(`li:nth-child(${number})`)
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(lang))
    elem.replaceWith(li)
}

addLangs('go')
addLangs('typescript')
addLangs('kotlin')

editLangs(3, 'pascal')
editLangs(4, 'golang')