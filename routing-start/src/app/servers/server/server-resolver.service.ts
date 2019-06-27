import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ServersService } from "../servers.service";

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {

    constructor(private serversService: ServersService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        Server | Observable<Server> | Promise<Server> {
            // return this.serversService.getServer(+route.params['id']);
            // return null;
            const promise: Promise<Server> = new Promise(
                (resolve, reject) => {
                    setTimeout(() => {
                        resolve(this.serversService.getServer(+route.params['id']))
                    }, 1000);
                }
            );

            return promise;
    }
    
}