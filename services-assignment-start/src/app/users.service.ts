import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable({providedIn: 'root'})
export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterService: CounterService) {

    }

    public onSetTo(id: number, state: string) {
        if (state === 'active') {
            this.activeUsers.push(this.inactiveUsers[id]);
            this.inactiveUsers.splice(id, 1);
            this.counterService.incrementCounter(state);
        } else if (state === 'inactive') {
            this.inactiveUsers.push(this.activeUsers[id]);
            this.activeUsers.splice(id, 1);
            this.counterService.incrementCounter(state);
        }
    }
}