import Image from "./Image";

export type TechnologyKey = "react" | "react-native" | "typescript" | "nextjs" | "expo" | "mobx" | "redux" | "nestjs" | "cypress"; 

export default class Technology {
    private static _technologies: Map<TechnologyKey, Technology>;

    public readonly name: string;
    public readonly color: string;
    public readonly link: string;
    public readonly image?: Image;

    constructor(name: string, color: string, link: string, image?: Image) {
        this.name = name;
        this.color = color;
        this.link = link;
        this.image = image;
    }

    private static get technologies() {
        if(this._technologies) return this._technologies;

        this._technologies = new Map();
        this._technologies.set("nextjs", new Technology("Next.JS", "#000000", "https://nextjs.org"));
        this._technologies.set("react", new Technology("React", "#000000", "https://reactjs.org/"));
        this._technologies.set("react-native", new Technology("React Native", "#000000", "https://reactnative.dev/"));
        this._technologies.set("expo", new Technology("Expo", "#000000", "https://expo.dev/"));
        this._technologies.set("nestjs", new Technology("NestJS", "#000000", "https://nestjs.com/"));
        this._technologies.set("cypress", new Technology("Cypress", "#000000", "https://www.cypress.io/"));
        return this._technologies;
    }

    public static get(key: TechnologyKey) {
        const technology = this.technologies.get(key);
        if(!technology) throw new Error(`Technology not found with given name: ${key}`);
        return technology;
    }
}