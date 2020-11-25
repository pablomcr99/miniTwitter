  
export class UpdateUserProfile{
    username:string;
    email:string;
    descripcion:string;
    website:string;
    password:string;

    constructor(username:string,email:string,descripcion:string,website:string,password:string){
        this.username=username
        this.email=email
        this.descripcion=descripcion
        this.website=website
        this.password=password

    }
}