const parrafos = document.querySelectorAll('.parrafo')
const sections = document.querySelectorAll('.section')
const papelera = document.querySelector('.papelera')

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", (e) => {
        //console.log(`Estoy arrastrando el párrafo: ${parrafo.textContent}`)
        //parrafo.classList.toggle('dragging')
        parrafo.classList.add('dragging')
        e.dataTransfer.setData("id", parrafo.id)
    })

    parrafo.addEventListener("dragend", (e) => {
        //console.log(`He terminado de arrastrar el párrafo: ${parrafo.textContent}`)
        //parrafo.classList.toggle('dragging')
        parrafo.classList.remove('dragging')
    })
})

sections.forEach(section => {
    section.addEventListener('dragover', (e) => {
        e.preventDefault()
        e.dataTransfer.dropEffect = 'copy'
        //console.log('Drag Over')
    })

    section.addEventListener('drop', (e) => {
        console.log('Drop')
        
        const id_parrafo = e.dataTransfer.getData('id')
        const parrafo = document.getElementById(id_parrafo)
        
        section.appendChild(parrafo)
    })
})

papelera.addEventListener('dragover', (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
    //console.log('Drag Over')
})

papelera.addEventListener('drop', (e) => {
    const id_parrafo = e.dataTransfer.getData('id')
    const parrafo = document.getElementById(id_parrafo)
    
    parrafo.remove()
})