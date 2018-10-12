
type User = {name: string, age: number, getJobs: () => string[], jobs: string[], logName?: () => void};
let user: User = {
name: 'wwe',
    age: 50,
    jobs: ['a', 'b'],
    getJobs(): string[] {
        return this.jobs;
    },
    logName(): void {
        console.log(this.name);
    }
};

let user2: User = {
    name: 'Max',
    age: 30,
    jobs: ['2'],
    getJobs(): string[] {
        return this.jobs;
    }
}