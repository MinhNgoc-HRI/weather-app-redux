import axios from "axios"

class AxiosService {
    constructor() {
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess,this.handleError)
        this.instance = instance;
    }
    handleSuccess(response){
        return response
    }
    handleError(err){
        return Promise.reject(err)
    }
    get(url,config){
        return this.instance.get(url,config)
    }
    post(url,data,config){
        return this.instance.post(url,data,config)
    }
    put(url,data,config){
        return this.instance.put(url,data,config)
    }

};


export default  new AxiosService();