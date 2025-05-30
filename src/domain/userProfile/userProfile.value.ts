import { userProfileEntity } from "./userProfile.entity";

export class userProfileValue implements userProfileEntity {
    id: number | undefined;
    firstName: string;
    lastname: string;
    email: string;
    password:string;
    phoneNumber: string | undefined;
    
    constructor({id, firstName, lastname, email, password, phoneNumber}: {id?:number; firstName:string; lastname:string; email:string; password:string; phoneNumber?:string}){
        this.id = id ?? undefined;
        this.firstName = firstName;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber ?? undefined;
    }
}