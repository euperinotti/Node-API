import { Router } from "express";
import * as API from '../controllers/apiController'

const router = Router();

router.get('/ping', API.ping);
router.get('/random', API.random)
router.get('/nome/:nome', API.name)


router.post('/frases', API.createPhrase);
router.get('/frases', API.listPhrases)

export default router