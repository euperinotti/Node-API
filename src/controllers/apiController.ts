import { Request, Response } from "express";

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