import apiUrl from '../config/apiUrl.js'
import CreateLoading from './loading.js'

export default function Api() {
    var url = apiUrl;
    var loading = CreateLoading()
    var elements = []

    async function Request() {
        loading.HideContainer()
        for (let count = 1; count <= 118; count++) {
            var responseRough = await fetch(url.AtomicNumber + count)
            var element = await responseRough.json()
            //console.log(element)
            elements.push(element);
            //console.log(element)
            loading.UpdateContent(count, 118)
        }
        //console.log(elements)
        
        loading.LoadingClose()
        loading.ShowContainer()
        return await elements
    }

    return {
        Request
    }
}