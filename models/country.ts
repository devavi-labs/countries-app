export interface ICountry {
  alpha2Code: string;
  name: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  area: number;
  flag: string;
}

export class Country implements ICountry {
  alpha2Code: string;
  name: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  area: number;
  flag: string;

  constructor({
    alpha2Code,
    name,
    capital,
    region,
    subregion,
    population,
    area,
    flag,
  }: ICountry) {
    this.alpha2Code = alpha2Code;
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
      alpha2Code: this.alpha2Code,
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
