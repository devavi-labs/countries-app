import { ICountry } from "./country";
import { Currency, ICurrency } from "./currency";
import { ILanguage, Language } from "./language";

export interface IExtendedCountry extends ICountry {
  altSpellings: Array<string>;
  latlng: [number, number];
  timezones: Array<string>;
  nativeName: string;
  currencies: Array<ICurrency>;
  languages: Array<ILanguage>;
}

export class ExtendedCountry implements IExtendedCountry {
  altSpellings: string[];
  latlng: [number, number];
  timezones: string[];
  nativeName: string;
  currencies: Array<Currency>;
  languages: Array<Language>;
  alpha2Code: string;
  name: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  area: number;
  flag: string;

  constructor({
    altSpellings,
    latlng,
    timezones,
    nativeName,
    currencies,
    languages,
    alpha2Code,
    name,
    capital,
    region,
    subregion,
    population,
    area,
    flag,
  }: IExtendedCountry) {
    this.altSpellings = altSpellings;
    this.latlng = latlng;
    this.timezones = timezones;
    this.nativeName = nativeName;
    this.currencies = currencies.map((currencyJSON) =>
      Currency.fromJSON(currencyJSON)
    );
    this.languages = languages.map((languageJSON) =>
      Language.fromJSON(languageJSON)
    );
    this.alpha2Code = alpha2Code;
    this.name = name;
    this.capital = capital;
    this.region = region;
    this.subregion = subregion;
    this.population = population;
    this.area = area;
    this.flag = flag;
  }

  static fromJSON(countryJSON: IExtendedCountry): ExtendedCountry {
    return new ExtendedCountry(countryJSON);
  }

  toJSON(): IExtendedCountry {
    return {
      altSpellings: this.altSpellings,
      latlng: this.latlng,
      timezones: this.timezones,
      nativeName: this.nativeName,
      currencies: this.currencies.map((currency) => currency.toJSON()),
      languages: this.languages.map((languages) => languages.toJSON()),
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
