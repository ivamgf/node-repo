const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {

    const filePath = path.join(__dirname, '../data/users.json');

    fs.readFile(filePath, 'utf8', (err, data) => {

        if (err) {
            return res.status(500).send('Erro ao ler arquivo JSON');
        }

        const users = JSON.parse(data);

        res.render('users', {
            title: 'Lista de Usuários',
            users: users
        });

    });

});

module.exports = router;