import jwt from 'jsonwebtoken';

const authUser = (req, res, next) => {
    const { token } = req.cookies;

    if(!token) {
        return res.json({success: false, message: 'Not Authorized User'})
    }

    try{
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if(tokenDecode.id){
            req.userId = tokenDecode.id;
        }else{
            return res.json({success: false, message: 'Not Authorized User'})
        }
        next();
    } catch (error){
        console.log(error.message);
        return res.json({message: error.message});
    }
}

export default authUser;