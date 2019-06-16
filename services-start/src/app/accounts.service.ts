import { LoggingService } from "./logging.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AccountsService {
    public accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private loggingService: LoggingService) {

      }

      public addAccount(name: string, status: string): void {
          this.accounts.push({name: name, status: status});
          this.loggingService.logStatusChange(status);
      }

      public updateStatus(id: number, status: string) {
          this.accounts[id].status = status;
          this.loggingService.logStatusChange(status);
      }
}