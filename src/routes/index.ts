import { Router } from "express";

const router = Router();

router.get('/ping', (req, res) => {
    res.json({pong: true});
})

router.get('/random', (req, res) => {
    let randomNumber = Math.floor(Math.random() * 10);
    res.json({"number": randomNumber})
})

router.get('/nome/:nome', (req, res) => {
    let name = req.params.nome;
    res.json({name: name})
})


export default router