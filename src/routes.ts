import {Express, Request, Response} from "express"
function routes(app: Express){
    app.get('/healthcheck', (req: Request, res: Response)=>{
        res.sendStatus(200).send('OKAY')
    })

}
export default routes