import { Request, Response } from "express";
import { Phrase } from "../models/Phrase";

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