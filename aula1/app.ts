import express from 'express';
import {Server} from 'http'
import route from './routes'
import bodyParser from 'body-parser'

export class SetupApplication{
    private server?: Server;

    constructor(private port:number=3000, public app:Express=express()) {

    }

    public init(): void {
        this.setupExpress()
        this.setupRoutes()
    }

    private setupRoutes(): void {
        this.app.use(route)
        this.app.use(route2)
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded(opstions:{extended:true}))
    }

    public start(): void {
        this.server = this.app.listen(this.port, callback: () => {
            console.log('Servidor funcionando na porta ${this.port}')
        })
    }
}