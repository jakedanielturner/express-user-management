import { Request, Response } from 'express';

export const robots = (req: Request, res: Response) => {
    res.type('text/plain');
    res.send('User-agent: *\nDisallow: /');
};

export const index = (req: Request, res: Response) => {
    res.render('index', { title: 'Hello, World!', message: 'I am a message' });
};
