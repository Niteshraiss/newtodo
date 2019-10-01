import { Injectable } from '@angular/core';
@Injectable()
export class myservice
{
 
    mystore=[{list:''}]
    getdatas()
    {
        return this.mystore;
    }
    putdata(ins)
    {
        this.mystore.push(ins);
    }
}