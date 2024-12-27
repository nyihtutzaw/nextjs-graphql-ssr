export type CountryEdge={
    code:string;
    name:string;
    continent:{
        name:string;
    }
}

export type GetCountriesResponse={
    countries:CountryEdge[];
}