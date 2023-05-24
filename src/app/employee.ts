import { Department } from "./department";
import { Role } from "./role";

export interface Employee {

    id: number;
    name: string;
    email:string;
    role:Role ;
    department:Department ;
    
  }

