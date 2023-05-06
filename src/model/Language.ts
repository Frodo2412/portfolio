import Technology from "./Technology.ts";

export default interface Language {

    name: string;
    logo: string;
    link: string;

    technologies: Technology[];

}