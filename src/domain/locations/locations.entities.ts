export interface localityEntity{
    id:number | undefined;
    name:string
    province:provinceEntity;
}

export interface provinceEntity {
    id:number | undefined;
    name:string;
    localities:localityEntity[] | undefined;
    country:countryEntity | undefined;
}

export interface countryEntity {
    id:number | undefined;
    name:string;
    provinces:provinceEntity[] | undefined;
}