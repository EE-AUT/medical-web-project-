export const updateObjec = (oldObject, updateProperties) =>{
    return{
        ...oldObject,
        ...updateProperties 
    }
}