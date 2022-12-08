import { Router } from "express";
import * as API from '../controllers/apiController'

const router = Router();

router.get('/ping', API.ping);
router.get('/random', API.random)
router.get('/nome/:nome', API.name)


export default router