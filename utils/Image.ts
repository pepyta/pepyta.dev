export default class Image {
    public readonly url: string;
    public readonly blurhash: string;
    public readonly width: number;
    public readonly height: number;
    public readonly alt?: string;

    constructor(url: string, blurhash: string, width: number, height: number, alt?: string){
        this.url = url;
        this.blurhash = blurhash;
        this.width = width;
        this.height = height;
        this.alt = alt;
    }
}