import { Interface } from "readline";

export enum NavOptions {
    Home = 'home',
    About = 'about',
    Skills = 'skills',
    Projects = 'projects',
    Contact = 'contact',
}


export interface StacksType {
    title: string;
    imgGreen: string;
    imgOrig: string;
}

export interface ProjectsType {
    title: string;
    img: string;
    imgHovered: string;
    description: string;
}