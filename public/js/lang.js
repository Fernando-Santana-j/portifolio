var open_lang_popup = false
var langSelected = document.getElementById('lang_selected')
var index = Number(document.getElementById('index').value)

var textLangs = {
    'en-US':{
        index:{
            'main-title': "<span id='index-ola'>Hello</span>, <br> My name is Fernando,<br> I'm a full-stack developer",
            'contact-button':'Contact Me!',
            'text-paragrafo':'Back-End Developer / JavaScript Expert',
            'picker-text': 'Select your favorite color!'
        },
        about:{
            "main-title":'A little about myself',
            'text-paragrafo':"I'm a programmer located in Brazil, I have a huge passion for programming, especially with the back-end, which is where I develop better. <br><br>In general, I consider myself a shy person, but over time I adapt better with the people next to me, I like to play with friends, I also like to help my friends who are starting to program now, because in addition to them learning, I also learn soon we all win. <br><br>My goal is to revolutionize people's lives through technology."
        },
        contact:{
            "main-title":'Contact Me',
            'text-paragrafo':"I'm interested in freelance opportunities, especially ambitious or large projects. however, if you have any other request or question, you can use the form below to communicate with me or through the other means of contact in the menu bar.",
            'enviar':'Submit',
        },
        skills:{
            "main-title":'A little about myself',
            'text-paragrafo':`I started programming thanks to a course I took here in my city approximately 5 years ago, since then I've been studying and making an effort to conquer my space, I've already taught classes, worked for a company, done volunteer work and others to acquire knowledge. <br><br>I'm a complete front-end and back-end developer, I create entire systems by myself and I'm improving my techniques every time. <br><br>I'm currently programming with JavaScript using Nodejs on the Back-end. I also develop with HTML, CSS and pure JavaScript. <br><br>I also have other knowledge such as Hosting, Firebase, relational and non-relational databases, APIS.`,
            'work-title': 'Full-Stack Developer',
            'work-resume': 'Contributes to the development of a system on the platform that served education networks in Brazil.'
        },
        work:{
            "work-aviso":"* This application is under development, which may lead to technical problems!",
            "sounifyme-descricao":"This is a project that I am creating from scratch, a music platform connected with the main streaming music like spotify, the purpose of this platform is to bring people together, it is not just a common music platform it will have means of communication via chat text and voice, options such as creating a band, posting your personal songs at no cost and the best thing about being able to listen to music with several people.",
            "infoeduc-descricao":"This was my first job in a real company as a programmer, my main role within the company was to develop plugins in <b>nodejs</b> and <b>ejs</b> for the platform that was on <b>bubble</b>, in addition to developing these plugins I was responsible for creating the report templates for our PDF generator, and I was also responsible for maintaining the platform within <b>bubble</b>.",
            "work-title":"Below are some of my work or personal projects.",
            "portifolio-descricao":"This is the current one and my current portfolio which is what you are accessing now, it was developed in <b>EJS </b> , <b> CSS </b> , <b> Nodejs </b> and mainly <b>JavaScript</b> , this portfolio is covered with features such as changing the theme, changing the color of fonts and assets, changing the language and others, this with the intention of showing my knowledge in javascript.",
            "devtools-descricao":"This is a simple desktop application that I developed for programmers or even normal people used after formatting the computer, through it it is possible to install the main applications and more using it, it is also possible to activate optimizations in the computer such as disabling unnecessary functions or deleting unnecessary files and also enable some important settings in windows.",
            "virtualdeck-descricao":"This is an application that I developed with the aim of saving money, if you see the price of a streamdeck it is currently in the range of 1,200 reais, so to solve this problem I created an application that has functionalities similar to that of a streamdeck but in a virtual way, you can access it on your cell phone or any other device and connect to a device via a desktop application so that it can interact with the machine. volume. In the future I want to implement a system where the user can dictate how they want to use shortcuts, whether to open applications, Windows controls, features in other applications, etc."
        },
        curriculo:{
            'main-title':"My Curriculum! &#x2661;",
            'resumo':"Here you can see the preview of my resume and if you wish you can also download it!",
            'certificado-button':"Check the Certificates",
            'download-button':"Download Curriculum"
        },
        certificados:{
            'main-title':"My Certificates📜",
            'resumo':"Below you can see all my course certificates I was able to complete, if you feel like it and you can download them in PDF format by clicking the button!",
            "certificado-presencial":"Classroom Course Certificates",
            'prepara-title':"Certificate Prepara Cursos",
            'certificado-online':"Online Course Certificates",
            "voltar-curriculo": "Back to curriculum"
        }
    },
    'pt-BR':{
        index:{
            'main-title': "<span id='index-ola'>Olá</span>, <br> Meu nome é Fernando,<br> Sou um desenvolvedor full-stack",
            'contact-button':'Entre em contato!',
            'text-paragrafo':'Desenvolvedor Back-End / Especialista em JavaScript',
            'picker-text': 'Selecione a sua cor favorita!'
        },
        about:{
            "main-title":'Um pouco sobre mim',
            'text-paragrafo':"Sou um programador localizado no Brasil, tenho uma paixão enorme por programação, principalmente com o back-end, que é onde me desenvolvo melhor. <br><br>No geral, me considero uma pessoa tímida, mas com o tempo me adapto melhor com as pessoas ao meu lado, gosto de brincar com os amigos, gosto também de ajudar meus amigos que estão começando a programar agora, pois além deles aprendendo, também posso aprender logo todos nós ganhamos. <br><br>Meu objetivo é revolucionar a vida das pessoas por meio da tecnologia."
        },
        contact:{
            "main-title":'Fale comigo',
            'text-paragrafo':"Estou interessado em oportunidades freelance, especialmente projetos ambiciosos ou grandes. No entanto, se você tiver qualquer outro pedido ou pergunta, pode usar o formulário abaixo para se comunicar comigo ou através dos outros meios de contato em a barra de menus.",
            'enviar':'Enviar',
        },
        skills:{
            "main-title":'Um pouco sobre mim',
            'text-paragrafo':`Comecei a programar graças a um curso que fiz aqui na minha cidade há aproximadamente 5 anos, desde então venho estudando e me esforçando para conquistar meu espaço, já dei aulas, trabalhei para empresas, fiz trabalhos voluntários e outros para adquirir conhecimento. <br><br>Sou um desenvolvedor front-end e back-end completo, crio sistemas inteiros sozinho e estou sempre aprimorando minhas técnicas. <br><br>Atualmente estou programando com JavaScript usando Nodejs no Back-end. Também desenvolvo com HTML, CSS e JavaScript puro. <br><br>Possuo também outros conhecimentos como Hospedagem, Firebase, bancos de dados relacionais e não relacionais, APIS.`,
            'work-title': 'Desenvolvedor Full-Stack',
            'work-resume': 'Contribui para o desenvolvimento de um sistema na plataforma que atendeu redes de ensino no Brasil.'
        },
        work:{
            "work-aviso":"* Esta aplicação está em desenvolvimento, o que pode acarretar em problemas técnicos!",
            "sounifyme-descricao":"Esse e um projeto que eu estou criando do zero, uma plataforma de música conectada com os principais streaming de música como spotify, o objetivo dessa plataforma e unir pessoas, não e apenas uma plataforma de música comum ela ira contar com meios de comunicação por chat de texto e voz, opções como criação de uma banda, postar as suas músicas pessoais sem nenhuma despesa e o melhor poder escutar música com várias pessoas.",
            "infoeduc-descricao":"Este foi meu primeiro emprego em uma empresa real como programador, minha principal função dentro da empresa era desenvolver plugins em <b>nodejs</b> e <b>ejs</b> para a plataforma que estava em <b> bubble</b>, além de desenvolver esses plugins fui responsável pela criação dos templates de relatórios para nosso gerador de PDF, e também fui responsável pela manutenção da plataforma dentro do <b>bubble</b>.",
            "work-title":"Abaixo são alguns dos meus trabalhos ou projetos pessoais.",
            "portifolio-descricao":"Esse e o atual e o meu atual portifólio que e oque você esta acessando agora, ele foi desenvolvido em <b>EJS </b> , <b> CSS </b> , <b> Nodejs </b> e principalmente <b> JavaScript </b> , este portifólio e coberto de funcionalidades como mudar o tema, mudar cor das fontes e assets, mudar o idioma e outros, isso com intuito de mostrar meus conhecimentos em javascript.",
            "devtools-descricao":"Esse e um aplicativo simples de desktop simples que eu desenvolvi para programadores ou até pessoas normais usaram após formatarem o computador, através dele e possível instalar os principais aplicativos e mais usando, também e possível ativar otimizações no computador como desativar funções desnecessárias ou apagar arquivos desnecessários e também ativar algumas configurações importantes no windows.",
            "virtualdeck-descricao":"Essa e uma aplicação que desenvolvi com o intuito de economizar, se você ver o preço de um streamdeck atualmente esta na faixa dos 1.200 reais, então para solucionar esse problema criei um aplicativo que tem funcionalidades parecidas com a de um streamdeck porem de forma virtual, você pode acessar ele pelo celular ou qualquer outro dispositivo e se conectar a um dispositivo via uma aplicação desktop para que ela possa interagir com a máquina atualmente ele esta em desenvolvimento e tem apenas funcionalidades básicas como abrir aplicativos padrões, controle de música, e controle de volume. Futuramente quero implementar um sistema aonde o usuário possa ele mesmo ditar como quer usar os atalhos, seja para abrir aplicativos, controles do Windows, funcionalidades em outros aplicativos, etc."
        },
        curriculo:{
            'main-title':"Meu Curriculo! &#x2661;",
            'resumo':"Aqui voce pode ver o preview do meu curriculo e caso deseje tambem pode ser feito o download do mesmo!",
            'certificado-button':"Conferir os Certificados",
            'download-button':"Baixar Currículo"
        },
        certificados:{
            'main-title':"Meus Certificados📜",
            'resumo':"Abaixo é possível ver todos os meus certificados de cursos que pude concluir, caso tenha vontade e possível baixá-los no formato PDF ao clicar no botão!",
            "certificado-presencial":"Certificados de Cursos Presenciais",
            'prepara-title':"Certificado Prepara Cursos",
            'certificado-online':"Certificados de Cursos Online",
            "voltar-curriculo": "Voltar para o curriculo"
        }
    }
}



langVerification()
function langVerification(){
    const idioma = localStorage.getItem('lang')
    function textSelect(ids,page) {
        ids.forEach((res)=>{
            if (res) {
                document.querySelector("#"+res).innerHTML = page[res]
            }
        })
    }
    
    switch (idioma) {
        case undefined:
        case null:
            let navLang = window.navigator.language
            if (navLang == null || navLang == undefined || navLang == "") {
                localStorage.setItem('lang', "en-US");
            }else{
                localStorage.setItem('lang', navLang);
            }
            break;
        case 'en-US':
            document.querySelector('html').setAttribute('lang', 'en-US')
            langSelected.src = '../public/assets/svgs/US.svg'
            break;
        case 'pt-BR':
            document.querySelector('html').setAttribute('lang', 'pt-BR')
            langSelected.src = '../public/assets/svgs/BR.svg'
            break;
    }
    switch (index) {
        case 0:
            textSelect(['contact-button','main-title',"text-paragrafo","picker-text"],textLangs[idioma].index)
            break;
        case 1:
            textSelect(['main-title',"text-paragrafo"],textLangs[idioma].about)
            break;
        case 2:
            textSelect(['main-title',"text-paragrafo","work-resume","work-title"],textLangs[idioma].skills)
            break;
        case 3:
            textSelect(["devtools-descricao","portifolio-descricao",'sounifyme-descricao',"infoeduc-descricao","work-title","virtualdeck-descricao"],textLangs[idioma].work)
            document.querySelectorAll('.work-aviso').forEach((element)=>{
                element.innerHTML = textLangs[idioma].work['work-aviso']
            })
            break;
        case 4:
            textSelect(["main-title","resumo",'certificado-button',"download-button"], textLangs[idioma].curriculo)
            break;
        case 5:
            textSelect(["main-title","text-paragrafo"], textLangs[idioma].contact)
            document.getElementById('enviar').value = textLangs[idioma].contact['enviar']
            break;
        case 6:
            textSelect(["main-title","resumo","voltar-curriculo","certificado-online","prepara-title",'certificado-presencial'], textLangs[idioma].certificados)
            break;
    }
}
document.getElementById('lang-containner').addEventListener('click',()=>{
    document.getElementById('lang-containner').style.display = 'none'
    open_lang_popup = false
})
document.getElementById('lang_selected').addEventListener('click',()=>{
    if (open_lang_popup == false) {
        document.getElementById('lang-containner').style.display = 'flex'
        open_lang_popup = true
    }else{
        document.getElementById('lang-containner').style.display = 'none'
        open_lang_popup = false
    }
})
document.querySelectorAll('.lang-icons').forEach((item)=>{
    item.addEventListener('click',()=>{
        let lang = item.getAttribute('data-lang')
        localStorage.setItem('lang', lang);
        if (lang == 'en-US') {
            langSelected.src = '../public/assets/svgs/US.svg'
            
        }else if (lang == 'pt-BR') {
            langSelected.src = '../public/assets/svgs/BR.svg'
        }
        open_lang_popup = false
        document.getElementById('lang-containner').style.display = 'none'
        document.getElementById('load-containner').style.display = "flex"
        setTimeout(()=>{     
            langVerification()
            document.getElementById('load-containner').style.display = "none"
            
        }, 2000);
        setTimeout(()=>{     
            langVerification()
            document.getElementById('load-containner').style.display = "none"
            saveNot()
        }, 2200);
        
        
    })
})