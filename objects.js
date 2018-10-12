var user = {
    name: 'wwe',
    age: 50,
    jobs: ['a', 'b'],
    getJobs: function () {
        return this.jobs;
    },
    logName: function () {
        console.log(this.name);
    }
};
var user2 = {
    name: 'Max',
    age: 30,
    jobs: ['2'],
    getJobs: function () {
        return this.jobs;
    }
};
