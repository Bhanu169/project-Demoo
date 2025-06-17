import jwt  from "jsonwebtoken"

const tokens = (key)=>{
    try {
        const tokenGenerate= jwt.sign({id:key},process.env.seckey)
        const tokenVerify= jwt.verify(tokenGenerate,process.env.seckey)
        return {tokenGenerate,tokenVerify}
    } catch (error) {
        console.log(error,"error in token generation")
    }
}
export default tokens;