import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

//仅在整个应用程序注入一个服务
@Injectable({providedIn: 'root'})
export class MessageService{
    constructor(){

    }
    //map保存所有Subject
    private messageObservableMap =new Map<string,any>();

    /**
     * @description send a message
     * @param id 
     * @param message 
     */
    public send(messageKey:string,message: any):void{
        this.getMessageObservable(messageKey).next(message);

    }
    
    /**
     * @description listen message
     * @param messageKey 
     * @param callback  prefer ()=>{}
     */
    public on(messageKey:string,callback:any){
        return this.getMessageObservable(messageKey).subscribe(callback)

    }

    /**
     * @description delete message subject
     * @param messageKey 
     */
    public delete(messageKey: string) {
        if (this.messageObservableMap.has(messageKey)) {
            this.messageObservableMap.delete(messageKey);
        }
    }

    /**
     * @description get message subject from map
     * @param messageKey 
     */
    private getMessageObservable(messageKey:string) {
        let messageObservable =this.messageObservableMap.get(messageKey)
        if(messageObservable){

        }else{
            //没有的话创建一个Subject并添加到map中
            messageObservable= new Subject()
            this.messageObservableMap.set(messageKey,messageObservable)
        }
        return  messageObservable;

    }
}