export interface ICountry {
  name: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  area: number;
  flag: string;
}

export class Country implements ICountry {
  name: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  area: number;
  flag: string;

  constructor({
    name,
    capital,
    region,
    subregion,
    population,
    area,
    flag,
  }: ICountry) {
    this.name = name;
    this.capital = capital;
    this.region = region;
    this.subregion = subregion;
    this.population = population;
    this.area = area;
    this.flag = flag;
  }

  static fromJSON(country: ICountry): Country {
    return new Country(country);
  }

  toJSON(): ICountry {
    return {
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
