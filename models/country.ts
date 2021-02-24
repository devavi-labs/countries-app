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
  /** The id (alpha-2 code) of this country */
  id: string;

  /** The full name of this country */
  name: string;

  /** The capital of this country */
  capital: string;

  /** The region this country is in*/
  region: string;

  /** The sub-region this country is in*/
  subregion: string;

  /** The population in this country*/
  population: number;

  /** The area of this country*/
  area: number;

  /** The flag this country*/
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

  /**
   * Converts the JSON object fetched from API to a new Country instance
   *
   * @param countryJSON {JSON} The JSON object fetched from API
   *
   * @returns {Country} Returns a new Country object
   */
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

  /**
   * Converts the country object into a JSON object
   */
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
