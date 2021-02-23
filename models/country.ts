export interface CountryJSON {
  alpha2Code: string;
  name: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  area: number;
  flag: string;
}

export interface ICountry {
  id: string;
  name: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  area: number;
  flag: string;
}

export class Country implements ICountry {
  id: string;
  name: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  area: number;
  flag: string;

  constructor({
    id,
    name,
    capital,
    region,
    subregion,
    population,
    area,
    flag,
  }: ICountry) {
    this.id = id;
    this.name = name;
    this.capital = capital;
    this.region = region;
    this.subregion = subregion;
    this.population = population;
    this.area = area;
    this.flag = flag;
  }

  static fromJSON({
    alpha2Code,
    name,
    capital,
    region,
    subregion,
    population,
    area,
    flag,
  }: CountryJSON): Country {
    return new Country({
      id: alpha2Code,
      name,
      capital,
      region,
      subregion,
      population,
      area,
      flag,
    });
  }

  toJSON(): ICountry {
    return {
      id: this.id,
      name: this.name,
      capital: this.capital,
      region: this.region,
      subregion: this.subregion,
      population: this.population,
      area: this.area,
      flag: this.flag,
    };
  }
}
