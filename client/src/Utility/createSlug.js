
// make slug

export const createSlug = (data) =>{
    let datasplit = data.split(' ')
    return datasplit.join('-').toLowerCase()
    
}
