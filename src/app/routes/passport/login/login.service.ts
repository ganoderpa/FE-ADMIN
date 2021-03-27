import { Injectable } from "@angular/core";
import { HttpService } from '../../../shared/HttpService';



@Injectable()
export class LoginService{

    constructor(
        private httpService:HttpService
    ){

    }

    private baseUrl='/fe-admin/rest'
    private loginUrl=this.baseUrl+'/login'


    /**
     * login request
     * @param params 
     */
    login(params){
        return this.httpService.post(this.loginUrl,params)
    }

}