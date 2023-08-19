import fs from 'fs'
import path from 'path';
import {compare, hash} from 'bcryptjs'


const filepath=path.join(process.cwd(),"src","db","users.json");

export const getAll= ()=>{
    const data = fs.readFileSync(filepath);
    return JSON.parse(data);
}
export const getByEmail= (email)=>{
    const data = getAll();
   return data.find(p=>p.email.toLowerCase() === email.toLowerCase());
  
    
}
export const VerifyPassword= async(hashpass,password)=>{
    const isValid = await compare(password,hashpass)
   return isValid;
  
    
}

export const Save= async(firstname,lastname,email, password)=>{
    const found = getByEmail(email);
    if(found){
        throw new error("user Aldeady Exist")
    }
    const data = getAll();
    const hashpass = await hash(password,12)
    data.push({
        id : data.length +1,
        firstname,lastname,email, password :hashpass
    } );

    fs.writeFileSync(filepath,JSON.stringify(data))

}
