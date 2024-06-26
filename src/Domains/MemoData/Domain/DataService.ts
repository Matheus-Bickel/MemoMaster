import { IData } from "./IData";

export interface DataService {
    store(data: IData[]): Promise<IData[]>
    getAll(): Promise<IData[]>
    getById(id: number): Promise<IData>
    update(id: number): Promise<IData>
    remove(id: number): Promise<IData>
}