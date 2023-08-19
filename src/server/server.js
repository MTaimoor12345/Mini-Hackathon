import fs from 'fs'
import path from 'path';

const filepath=path.join(process.cwd(),"src","db","vlog.json");

export const getAl= ()=>{
    const data = fs.readFileSync(filepath);
    return JSON.parse(data);
}


export const Sav= async(tittle,description)=>{
    
  let d = new Date();
 
    const data = getAl();
   
    data.push({
        id : data.length +1,tittle,description,datetime: d
    } );

    fs.writeFileSync(filepath,JSON.stringify(data))

}



export const delet = (id) => {
    try {
      const data = getAl();
      const updatedData = data.filter(item => item.id !== parseInt(id));
  
      fs.writeFileSync(filepath, JSON.stringify(updatedData, null, 2));
  
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };


  export const updateTodo = (id) => {
    const data = getAl();
    const index = data.findIndex((todo) => todo.id === id);
  
    if (index !== -1) {
      data[index] = updatedTodo;
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    }
  };