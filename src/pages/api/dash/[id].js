




 
import { delet, getById, updateTodo } from '@/server/server';

const handler = async (req, res) => {
  if (req.method === "DELETE") {
    const { id } = req.query;
    await delet(id);
    res.status(200).json({ message: 'Item deleted successfully' });
    
  } 
  else if(req.method ==="GET"){
    const {id}=req.query;
    getById(id);
    return res.status(200).send();
  }
  else if(req.method === "PUT"){
    const {id}=req.query;
    const { tittle, description } = req.body;
    updateTodo(id,tittle,description);
    res.status(201).json({success:"success"})   
  }
};

export default handler;
