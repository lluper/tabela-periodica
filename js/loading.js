
export default function Createloading() {

    var loading = document.getElementById('loading')
    var startEnd = document.getElementById('startEnd')
    var container = document.getElementById('container')

    function UpdateContent(start, end) {
        startEnd.innerHTML = ""
        startEnd.innerHTML = start + ' de ' + end
    }

    function LoadingClose() {
        loading.style.display = "none"
    }

    function ShowContainer(){
        container.style.display = "flex"
        
    }

    function HideContainer(){
        container.style.display = "none"
    }

    return {
        UpdateContent,
        LoadingClose,
        ShowContainer,
        HideContainer
    }
}

