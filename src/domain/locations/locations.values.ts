import { localityEntity, provinceEntity, countryEntity } from "./locations.entities";

export class localityValue implements localityEntity{
    id: number | undefined;
    name: string;
    province: provinceEntity
    
    constructor({id, name, province} : {id?:number, name:string, province:provinceEntity}){
        this.id = id ?? undefined;
        this.name = name;
        this.province = province;
    }
}

export class provinceValue implements provinceEntity{
    id: number | undefined;
    name: string;
    localities: localityEntity[] | undefined;
    country: countryEntity | undefined;
    
    constructor({id, name, localities, country} : {id?:number, name:string, localities?:localityValue[], country?:countryEntity}){
        this.id = id ?? undefined;
        this.name = name;
        this.localities = localities ?? undefined;
        this.country = country ?? undefined;
    }
}

export class countryValue implements countryEntity{
    id: number | undefined;
    name: string;
    provinces: provinceEntity[] | undefined;

    constructor({id, name, provinces} : {id?:number, name:string, provinces?:provinceValue[]}){
        this.id = id ?? undefined;
        this.name = name;
        this.provinces = provinces ?? undefined
    }
}