//-------------importes------------
const express = require('express')
const fs = require('fs');
const bodyParser = require('body-parser');
const session = require('express-session')
const path = require('path');
const nodemailer = require('nodemailer')
const ejs = require('ejs')
const { Octokit } = require('@octokit/rest');


//------------Configs--------------
const app = express();

require('dotenv').config()

app.use(session({
    secret: process.env.SECRET || 'dmafdnawoifnaoif1oirnrobnroiri5asfa',
    resave: false,
    saveUninitialized: false,
}))

const SMTP_CONFIG = require('./configs/smtp');
const trasporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    service: 'gmail',
    secure: true,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
    },
    tls: {
        rejectUnauthorized: false
    }
})



const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use('/public', express.static(path.join(__dirname, '/public')));
app.set('views', './views')
app.set('view engine', 'ejs');




//----------------ROUTES-------------------

let repo_cache = { ts: 0, data: null };
const CACHE_TTL = 30 * 1000;  

async function getRepos() {
    const filePath = 'portifolio_data.json'; 

    if (Date.now() - repo_cache.ts < CACHE_TTL && repo_cache.data && repo_cache.data.filePath === filePath) {
        return repo_cache.data.payload;
    }

    try {
        const repos = await octokit.paginate(octokit.rest.repos.listForAuthenticatedUser, {
            visibility: 'all',
            per_page: 100
        });

        const results = await Promise.all(repos.map(async (r) => {
            let fileContent = null;

            try {
                const resp = await octokit.rest.repos.getContent({
                    owner: process.env.GITHUB_USER || r.owner.login,
                    repo: r.name,
                    path: filePath
                });
                
                if (!Array.isArray(resp.data) && resp.data.content) {
                    fileContent = Buffer.from(resp.data.content, 'base64').toString('utf8');
                }
            } catch (err) {
                if (err.status && err.status !== 404) {
                    console.warn(`Erro ao ler ${r.full_name}/${filePath}:`, err.message);
                }
            }

            fileContent = fileContent ? JSON.parse(fileContent) : null;
            
            return {
                name: fileContent ? fileContent.name : '' || r.name,
                rep_name: r.name,
                private: r.private,
                url: r.html_url,
                description: r.description || fileContent ? fileContent.description : '',
                status: fileContent ? fileContent.status : 'disabled',
                type: fileContent ? fileContent.type : 'personal',
                deploy: fileContent ? fileContent.deploy : null,
                language: r.language,
                visible: fileContent ? fileContent.visible : true,
                created_at: r.created_at.slice(0, 4)
            };
        }));

        repo_cache = { ts: Date.now(), data: { filePath, payload: results } };
        return results
    } catch (err) {
        console.error(err);
        return { err: "Erro ao buscar repositórios",error: true }
    }
}

app.get('/', async (req, res) => {
    let repositorios = await getRepos();
    console.log(repositorios);
    
    res.render('index', { repositorios });
})




app.get('/adm/:route', (req, res) => {
    if (req.params.route === process.env.ADMIN_ROUTE) {
        res.render('admin');
    } else {
        res.redirect('/')
    }
})




//----------------SERVER-------------------

const port = process.env.PORT || 3131
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});