var check = document.getElementById('checkbox')

themeVerificarion()
function themeVerificarion(){
    let themeLocal = localStorage.getItem('theme')
    if (themeLocal == null || themeLocal == undefined) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches == false) {
            localStorage.setItem('theme', 'light')
        }else{
            localStorage.setItem('theme', 'dark')
        }
        
        location.reload()
    }
    if (themeLocal == 'dark') {
        document.body.setAttribute('data-theme', themeLocal);
        document.getElementById('theme-description').innerText = "Dark Mode"
        check.checked = true
    }else{
        document.body.setAttribute('data-theme', themeLocal);
        document.getElementById('theme-description').innerText = "Light Mode"
        check.checked = false
    }
}

function theme(){
    if (check.checked == true) {
        localStorage.setItem('theme', 'dark')
    }else{
        localStorage.setItem('theme', 'light')
    }
    saveNot()
    themeVerificarion()
}

