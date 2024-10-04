export interface Character {
    id: number;
    name: string;
    images?: string[];
    personal: {
        team?: string[];
        clan?: string;
    }
}
