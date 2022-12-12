import { Router } from "express";
import * as API from '../controllers/apiController'
import multer from "multer";

const router = Router();
const upload = multer({
    dest: './tmp'
})

router.get('/ping', API.ping);
router.get('/random', API.random)
router.get('/nome/:nome', API.name)

router.post('/frases', API.createPhrase);
router.get('/frases', API.listPhrases);
router.get('/frases/random', API.randomPhrase);
router.get('/frase/:id', API.getPhrase);
router.put('/frase/:id', API.updatePhrase);
router.delete('/frase/:id', API.deletePhrase);

router.post('/upload', upload.single('avatar'), API.uploadFile);

export default router