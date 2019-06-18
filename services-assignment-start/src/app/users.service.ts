export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    public onSetTo(id: number, state: string) {
        if (state === 'active') {
            this.activeUsers.push(this.inactiveUsers[id]);
            this.inactiveUsers.splice(id, 1);
        } else if (state === 'inactive') {
            this.inactiveUsers.push(this.activeUsers[id]);
            this.activeUsers.splice(id, 1);
        }
    }
}