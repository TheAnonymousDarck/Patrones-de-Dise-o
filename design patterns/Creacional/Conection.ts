function createClient(config:any) {
    
    return {
        ...config,
        query: (query) => {
            return 'result of '+query;
        }
    }
}

class Connection {
    private static instance: Connection;
    static client:any;

    constructor(client:any) {
        Connection.client = client;
    }

    public static getInstance(): Connection {
        if (!Connection.instance) {
            const client = createClient({
                user:'',
                password:'',
                db:'',
                port: 0
            });
            Connection.instance = new Connection(client);
        }
        return Connection.instance;
    }
}