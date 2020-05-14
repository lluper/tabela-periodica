import Api from './api.js'
import CreateElements from './elements.js'

async function CreateTable() {
    var api = Api()
    console.log('vai travar um pouco')
    var response = await api.Request()

    async function Render() {

        var elements = CreateElements()
        var collectionElements = elements.Render(response)
        elements.AddEventToElements(collectionElements, response)
    }

    return {
        Render,
    }
}

export default CreateTable;

