
import newComponents from './components.js'


export default function Elements() {
    var components = newComponents();

    function Render(elements) {
        console.log('rodando')
        var container = document.getElementById('container')
        var content = document.getElementById('content')

        content.innerHTML = ""
        for (let count = 1; count <= 9; count++) {

            if (count == 1) {
                let line = components.CreateLine()

                for (let line1 = 1; line1 <= 2; line1++) {
                    var elementSelect = elements.find(element => element.atomicNumber == line1)
                    let element = components.CreateElement(elementSelect)
                    line.appendChild(element)

                    if (line1 == 1) {
                        let space = components.CreateSpace("2_18")
                        line.appendChild(space)
                    }
                }

                content.appendChild(line)
            }

            if (count == 2) {
                let line = components.CreateLine()

                for (let line2 = 3; line2 <= 10; line2++) {
                    var elementSelect = elements.find(element => element.atomicNumber == line2)

                    let element = components.CreateElement(elementSelect)
                    line.appendChild(element)

                    if (line2 == 4) {
                        let space = components.CreateSpace("3_13")
                        line.appendChild(space)
                    }
                }
                content.appendChild(line)
            }

            if (count == 3) {
                let line = components.CreateLine()

                for (let line2 = 11; line2 <= 18; line2++) {
                    var elementSelect = elements.find(element => element.atomicNumber == line2)
                    //console.log(elementSelect.cpkHexColor)
                    let element = components.CreateElement(elementSelect)
                    line.appendChild(element)

                    if (line2 == 12) {
                        let space = components.CreateSpace("3_13")
                        line.appendChild(space)
                    }
                }
                content.appendChild(line)
            }

            if (count == 4) {
                let line = components.CreateLine()

                for (let line2 = 19; line2 <= 36; line2++) {
                    var elementSelect = elements.find(element => element.atomicNumber == line2)
                    let element = components.CreateElement(elementSelect)
                    line.appendChild(element)
                }
                content.appendChild(line)
            }

            if (count == 5) {
                let line = components.CreateLine()

                for (let line2 = 37; line2 <= 54; line2++) {
                    var elementSelect = elements.find(element => element.atomicNumber == line2)
                    let element = components.CreateElement(elementSelect)
                    line.appendChild(element)
                }
                content.appendChild(line)
            }

            if (count == 6) {
                let line = components.CreateLine()

                for (let line2 = 55; line2 <= 86; line2++) {

                    if (line2 <= 56 || line2 >= 72) {
                        var elementSelect = elements.find(element => element.atomicNumber == line2)
                        let element = components.CreateElement(elementSelect)
                        line.appendChild(element)
                    }
                    if (line2 == 56) {
                        let space = components.CreateSpace("3_4")
                        line.appendChild(space)
                    }

                }
                content.appendChild(line)
            }

            if (count == 7) {
                let line = components.CreateLine()

                for (let line2 = 87; line2 <= 118; line2++) {

                    if (line2 <= 88 || line2 >= 104) {
                        var elementSelect = elements.find(element => element.atomicNumber == line2)
                        let element = components.CreateElement(elementSelect)
                        line.appendChild(element)
                    }
                    if (line2 == 88) {
                        let space = components.CreateSpace("3_4")
                        line.appendChild(space)
                    }

                }
                content.appendChild(line)
            }

            if (count == 8) {
                let line = components.CreateLine('m_top')

                for (let line2 = 57; line2 <= 71; line2++) {

                    if (line2 == 57) {
                        let space = components.CreateSpace("1_4")
                        line.appendChild(space)
                    }
                    var elementSelect = elements.find(element => element.atomicNumber == line2)
                    let element = components.CreateElement(elementSelect)
                    line.appendChild(element)
                }

                content.appendChild(line)
            }

            if (count == 9) {
                let line = components.CreateLine()

                for (let line2 = 89; line2 <= 103; line2++) {

                    if (line2 == 89) {
                        let space = components.CreateSpace("1_4")
                        line.appendChild(space)
                    }
                    var elementSelect = elements.find(element => element.atomicNumber == line2)
                    let element = components.CreateElement(elementSelect)
                    line.appendChild(element)
                }

                content.appendChild(line)
            }

        }


        return document.getElementsByClassName('element')
    }

    function AddEventToElements(collection, response) {
        var tbody = document.getElementById('tbody')


        Array.from(collection).forEach(item =>{
           item.addEventListener('click', function(){
               var id = this.dataset.id

               var elementSelect = response.find(element => element.atomicNumber == id)

               var keys = Object.keys(elementSelect)
               var value = Object.values(elementSelect)

                var titleTable = document.getElementById('titleTable')
                var titleSymbol = document.getElementById('titleSymbol')

                titleTable.innerHTML = elementSelect.name
                titleSymbol.innerHTML = elementSelect.symbol
                titleSymbol.style.background = "#"+ elementSelect.cpkHexColor
                tbody.innerHTML = ""
               for(let count =0 ; count< keys.length; count++){
                var tr= document.createElement('tr')
                var tdPropertie  = document.createElement('td')
                tdPropertie.innerHTML = keys[count]

                var tdValue  = document.createElement('td')
                tdValue.innerHTML = value[count]

                tr.appendChild(tdPropertie)
                tr.appendChild(tdValue)

                tbody.appendChild(tr)
               }
                   
              

               //console.log('clicou', value)
               var modalTitle = document.getElementById('modal-1-title')

               

               MicroModal.show('modal-1')
           })
        })
    }

    return {
        Render,
        AddEventToElements
    }
}