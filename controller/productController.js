import path from "path"
export default function productRout(req,res) {
    
   
    res.sendFile(path.join(process.cwd(),'views','index.html'))
    
    // if you console upper line then you se the path in your local device like
    // consol.log(path.join(process.cwd(),'views','index.html'))
    // its show you the location of file

}