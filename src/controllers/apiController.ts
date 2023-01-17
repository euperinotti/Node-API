import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import { Phrase } from "../models/Phrase";
import multer from "multer";

export const ping = async (req: Request, res: Response) => {
    res.json({pong: true});
}

export const random = async (req: Request, res: Response) => {
    let randomNumber: number = Math.floor(Math.random() * 10);
    res.json({"number": randomNumber})
}

export const name = async (req: Request, res: Response) => {
    let name: string = req.params.nome;
    res.json({name: name})
}

export const createPhrase = async (req: Request, res: Response) => {
    let { author, text } = req.body;

    let newPhrase = await Phrase.create({
        author,
        text
    })

    res.status(201);
    res.json({newPhrase});
}

export const listPhrases =async (req: Request, res: Response) => {
    let phrases = await Phrase.findAll();

    res.json(phrases);
}

export const getPhrase = async (req: Request, res: Response) => {
    let { id } = req.params;

    let phrase = await Phrase.findByPk(id);
    if(phrase) {
        res.json({ phrase });
    } else {
        res.json({
            error: "Not Found"
        })
    }
}

export const updatePhrase = async (req: Request, res: Response) => {
    let { id } = req.params;
    let { author, text } = req.body;

    let phrase = await Phrase.findByPk(id);
    if(phrase) {
        phrase.author = author;
        phrase.text = text;

        await phrase.save();
        
        res.json({phrase});
    } else {
        res.json({
            error: "Not Found"
        })
    }
}

export const deletePhrase = async (req: Request, res: Response) => {
    let { id } = req.params;

    await Phrase.destroy({ where: { id } });
}

export const randomPhrase = async (req: Request, res: Response) => {
    let phrase = await Phrase.findOne({
        order: [
            Sequelize.fn('RANDOM')
        ]
    })

    if(phrase) {
        res.json({ phrase });
    } else {
        res.json({
            error: "Not Found"
        })
    }
}

export const uploadFile = async (req: Request, res: Response) => {
    console.log(req.file);

    const storageConfig = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './tmp');
        },
        filename: (req, file, cb) => {
            cb(null, `${file.fieldname}-${Date.now()}.jpg`);
        }
    });

    const upload = multer({
        storage: storageConfig,
        fileFilter: (req, file, cb) => {
            const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png'];
            cb(null, allowed.includes(file.mimetype));
        },
        limits: {
            fieldSize: 30000000
        }
    })

    res.json({Status: "Done"});
}