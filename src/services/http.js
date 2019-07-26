export default class Http {
    constructor() {
        this.baseUrl = 'http://localhost:4000/api';
    }

    async get( endpoint ) {
        const tasks = await fetch( endpoint ).then( data => data.json() );
        return tasks;
    }

    async post( endpoint, body ) {
        const createdTask = await fetch( endpoint, {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( body )
        }).then( data => data.json() );

        return createdTask;
    }
}
