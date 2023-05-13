import express, {Aplication, Response, RequestHandler} from 'express';


export interface IStartOptions{
    port: number;
    basePath: string;
}


export const startExpressServer = (
    handlers: RequestHandler | RequestHandler[],
    options: IStartOptions
) => { 
    const { basePath, port } = options;
    const app: Aplication = express();

    app.use(express.json({ limit: '2mb' }));
    app.use(express.urlencoded({ extended: false }));

    app.use(basePath, handlers);

    app.listen(port, () => {
        console.info(`Server running on port ${port}`);
    });
}