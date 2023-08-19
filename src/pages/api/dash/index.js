import { Sav } from "@/server/server";

export default function handler(req, res) {
    if(req.method == "POST"){
        try {
            const {tittle,description}= req.body;
           Sav(tittle,description) ;
            res.status(201).send();
        } catch (error) {
            console.error(error);
        }   
    }
    else if(req.method === "Get"){

    }
  }