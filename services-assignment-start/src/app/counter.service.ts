export class CounterService {
    private inactiveToActiveCtr: number = 0;
    private activeToInactiveCtr: number = 0;

    public incrementCounter(type: string) {
        if (type === 'active') {
            this.inactiveToActiveCtr++;
            console.log("Inactive to Active " + this.inactiveToActiveCtr);
        } else if (type === 'inactive') {
            this.activeToInactiveCtr++;
            console.log("Active to Inactive " + this.activeToInactiveCtr);
        }
    }
}