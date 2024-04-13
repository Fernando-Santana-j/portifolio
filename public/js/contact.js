var full_colors = [
    {
        nome:'select',
        hex:null
    },
    {
        nome:'roxo',
        hex: '#9055FF'
    },

    {
        nome:'vermelho',
        hex:'#f70000'
    },
    {
        nome:'rosa',
        hex:'#f700ce'
    },
    {
        nome:'verde',
        hex:'#15f700'
    },
]
var color = localStorage.getItem('color')
if (color == 'select') {
    full_colors[0].hex = localStorage.getItem('color-sec')
}

let colorSelected = full_colors.find((item)=> {return item.nome == color})


document.getElementById('enviar').addEventListener('click',async()=>{
    
    await $.ajax({
        traditional: true,
        url: '/contact/menssage',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify( {
            nome: document.getElementById('nome').value,
            email:document.getElementById('email').value,
            message: document.getElementById('message').value,
            color: colorSelected.hex,
            lang:localStorage.getItem('lang')
        } ),
        dataType: 'json',
        success: function(response) {
            if (response.success == true) {
                contact()
                document.getElementById('nome').value = ''
                document.getElementById('email').value = ''
                document.getElementById('message').value = ''
            }   
        },
        error: function(xhr, status, error) {
            console.error(error);
        }
    })
})

