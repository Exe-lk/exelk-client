const getAllDocuments = () => {
    try {
        return {status:200,msg:'Successfully fetched!'}
    }catch (e) {
        return {status:400,msg:'Faild to fetch data'}
    }
}