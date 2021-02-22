export interface ILanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export class Language implements ILanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;

  constructor({ iso639_1, iso639_2, name, nativeName }: ILanguage) {
    this.iso639_1 = iso639_1;
    this.iso639_2 = iso639_2;
    this.name = name;
    this.nativeName = nativeName;
  }

  static fromJSON(languageJSON: ILanguage): Language {
    return new Language(languageJSON);
  }

  toJSON(): ILanguage {
    return {
      iso639_1: this.iso639_1,
      iso639_2: this.iso639_2,
      name: this.name,
      nativeName: this.nativeName,
    };
  }
}
