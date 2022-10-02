interface IAgent {
    name: string;
    picture: string;
    role: string;
}

export interface IData {
    agent: IAgent;
    maps: any;
}
