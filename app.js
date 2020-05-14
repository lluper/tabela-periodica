
import CreateTable from './js/table.js'

App()

async function App() {
    var table = await CreateTable()
    table.Render()

}