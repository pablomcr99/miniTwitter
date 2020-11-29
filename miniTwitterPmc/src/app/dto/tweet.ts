
import {Like} from './like';
import {User} from './usuario';

export interface Tweet {
    id:number;
    mensaje:string;
    likes:Like[];
    user:User;
}
