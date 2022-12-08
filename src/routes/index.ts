import { Router } from "express";
import * as API from '../controllers/apiController'

const router = Router();

router.get('/ping', API.ping);
router.get('/random', API.random)
router.get('/nome/:nome', API.name)


router.post('/frases', API.createPhrase);
router.get('/frases', API.listPhrases);
router.get('/frase/:id', API.getPhrase);
router.put('/frase/:id', API.updatePhrase);

export default router