import fsPromises from "fs/promises";
import path from "path";

// Footer structure ------------------------
export interface IFooterStructure {
    label: string;
    content: string[];
    id: number;
}

// Team structure --------------------------
export interface ITeamStructure {
    id: number;
    name: string;
    title: string;
    img: string;
}

// Carousal structure --------------------------
export interface ICarousalStructure {
    title: string;
    description: string;
    img: string;
    id: number;
}

// Nav structure --------------------------
export interface INavStructure {
    id: number;
    name: string;
    img: string;
    content: {
        title: string;
        items: string[]
        contentId: number;
    }[];
}

const basePath = "/src/data";

const readJsonFile = async <T>(name: string): Promise<T[]> => {
    const filePath = path.join(process.cwd(), `${basePath}${name}`)
    const jsonData = await fsPromises.readFile(filePath);
    return JSON.parse(jsonData.toString()) as T[];
};

export const getTeamContent = async (): Promise<ITeamStructure[]> => {
    return readJsonFile<ITeamStructure>('/team-content.json');
};

export const getFooterContent = async (): Promise<IFooterStructure[]> => {
    return readJsonFile<IFooterStructure>("/footer-content.json");
};

export const getCarousalContent = async (): Promise<ICarousalStructure[]> => {
    return readJsonFile<ICarousalStructure>("/carousal-content.json");
};

export const getNavContent = async (): Promise<INavStructure[]> => {
    return readJsonFile<INavStructure>('/nav-content.json');
};
