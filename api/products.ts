import { Router, Request, Response } from 'express';
const data=require("../db.json")

const router = Router()
import fs from 'fs';
router.use('/products', (req: Request, res: Response) => {
    res.send(data.products)
})

module.exports = router
