
// if (indexPage == 0) {
//     document.getElementById('scrollPage-not-content-top').style.display = 'none'
// }
let pages = [
    {
        index:0,
        href:'/'
    },
    {
        index:1,
        href:'/about'
    },
    {
        index:2,
        href:'/skills'
    },
    {
        index:3,
        href:'/work'
    },
    {
        index:4,
        href:'/curriculo'
    },
    {
        index:5,
        href:'/contact'
    }
]

async function reqPageHref(indexPage) {
    let data
    pages.forEach((element,index)=>{
        if(indexPage == element.index){
            data = element.href
        }
        
    })
    return data
}

if (window.innerHeight < document.documentElement.scrollHeight) {
    console.log('Uma barra de rolagem vertical está ativa.');
  } else{
    window.addEventListener('wheel',async(event)=>{
        if (event.deltaY > 0) {
            if (indexPage < 5) {
                location.href = await reqPageHref(indexPage + 1)
            }
        } else if (event.deltaY < 0) {
            if (indexPage > 0) {
                location.href = await reqPageHref(indexPage - 1)
            }
        }
    })
}
