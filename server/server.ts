import json from 'json-server'
import * as dotenv from 'dotenv'
dotenv.config()
const server = json.create()
const router = json.router('./db.json') 
import { NextFunction, Request, Response } from "express";

const PORT = 3001

const middlewares = json.defaults()

import db from './db.json'  assert { type: "json" };

server.use(middlewares)
server.use(json.bodyParser)
server.use(checkToken)

server.get('/cars', (req, res)=>{
    if(db.cars){
        res.status(200).json(db.cars)
    }
    else{
        res.status(404).json({msg: 'DB not found', code: 404})
    }
})

function checkToken(req: Request, res: Response, next: NextFunction){
    const token = req.query['token']
    if(token == undefined){
        res.status(403).json({reason: "Access fobidden. Please provide token."})
    }
    if(token){
        if(token == process.env['TOKEN']){
            next()
        }
        else{
            res.status(401).json({reason: "Invalid token."})
        }
        
    }
}

server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
  });
  // "server": "json-server -p 3001 ./server/db.json"