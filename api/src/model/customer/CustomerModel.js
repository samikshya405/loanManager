import CustomerSchema from "./CustomerSchema.js"

export const postNewCustomer=(userObj)=>{
    return CustomerSchema(userObj).save()

}
export const findUser =(name)=>{
    return CustomerSchema.findOne({name})
}