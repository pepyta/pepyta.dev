import Technology from "./Technology";

export default class Award {
    private static _awards: Award[];
    
    public readonly name: string;
    public readonly technologies: Technology[];

    constructor(name: string, technologies: Technology[]) {
        this.name = name;
        this.technologies = technologies;
    }

    public static getAll() {
        if(this._awards) return this._awards;
        this._awards = [];
        
        return this._awards;
    }
}