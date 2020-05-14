export default function Components() {

    function CreateLine(optionalClass) {
        let line = document.createElement('div')
        line.classList = 'line '+ optionalClass
        return line
    }

    function CreateElement(item) {
        let element = document.createElement('div')
        // var color = [
        //     {group:"nonmetal" , color: "#a8de56"},
        //     {group:"noble gas" , color: "#76b4df"},
        //     {group:"alkali metal" , color: "#f2c64f"},
        //     {group:"alkaline earth metal" , color:"#ece557"},
        //     {group:"metalloid" , color:"#78cbbc"},
        //     {group:"halogen" , color:"#b5e3f3"},
        //     {group:"metal" , color:"#a6cbd7"},
        //     {group:"transition metal" , color: "#f19fae"},
        //     {group:"lanthanoid" , color: "#9de1df"},
        //     {group:"actinoid" , color: "#e6b2dc"},
        //     {group:"post-transition metal" , color: "#a6cbd7"},
            
        // ]

        // var colorSelect = color.find(color => color.group == item.groupBlock)
        //console.log(item)
        element.classList = 'element'
        element.dataset.id = item.atomicNumber
        element.style.background = "#"+item.cpkHexColor


        let numberAtom = CreateNumberAtom(item)
        let chemicalSymbol = CreateChemicalSymbol(item)
        let nameElement = CreateNameElement(item)
        let weightAtom = CreateWeightAtom(item)

        element.appendChild(numberAtom)
        element.appendChild(chemicalSymbol)
        element.appendChild(nameElement)
        element.appendChild(weightAtom)

        return element
    }
    function CreateSpace(type) {
        if (type == "2_18") {
            let space_2_to_18 = document.createElement('div')
            space_2_to_18.classList = "space_2_to_18"
            return space_2_to_18
        }

        if (type == "3_13") {
            let space_3_to_13 = document.createElement('div')
            space_3_to_13.classList = "space_3_to_13"
            return space_3_to_13
        }

        if (type == "3_4") {
            let space_3_to_4 = document.createElement('div')
            space_3_to_4.classList = "space_3_to_4"
            return space_3_to_4
        }

        if (type == "1_4") {
            let space_1_to_4 = document.createElement('div')
            space_1_to_4.classList = "space_1_to_4"
            return space_1_to_4
        }


    }


    function CreateNumberAtom(item) {
        let numberAtom = document.createElement('span')
        numberAtom.classList = "numberAtom"
        numberAtom.innerHTML = item.atomicNumber
        return numberAtom
    }

    function CreateChemicalSymbol(item) {
        let chemicalSymbol = document.createElement('span')
        chemicalSymbol.classList = "chemicalSymbol"
        chemicalSymbol.innerHTML = item.symbol
        return chemicalSymbol
    }

    function CreateNameElement(item) {
        let nameElement = document.createElement('span')
        nameElement.classList = "nameElement"
        nameElement.innerHTML = item.name
        return nameElement
    }

    function CreateWeightAtom(item) {
        let weightAtom = document.createElement('span')
        weightAtom.classList = "weightAtom"
        if(item.atomicMass.length > 6){
            weightAtom.innerHTML = item.atomicMass.substr(0,6)
        }else{
           weightAtom.innerHTML = item.atomicMass 
        }
        
        return weightAtom
    }

    
    return {
        CreateLine,
        CreateElement,
        CreateSpace
    }

}