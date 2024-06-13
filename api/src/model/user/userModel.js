import UserSchema from "./UserSchema.js";


//insert user

export const insertUser=(userObj)=>{
    return UserSchema(userObj).save()
}
//find email

export const findEmail = (email)=>{
    return UserSchema.findOne(email)
}