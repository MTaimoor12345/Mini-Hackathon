import { Save } from "../../../services/user";



export default function handler(req, res) {
    if(req.method !== "POST"){
        res.status(404).send();
    }
    try {
        const {firstname,lastname,email, password}= req.body;
        
        Save(firstname,lastname,email, password);
        res.status(201).send();
    } catch (error) {
        console.error(error);
    }
  }