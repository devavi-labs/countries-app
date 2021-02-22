export interface ICurrency {
  code: string;
  name: string;
  symbol: string;
}

export class Currency implements ICurrency {
  code: string;
  name: string;
  symbol: string;

  constructor({ code, name, symbol }: ICurrency) {
    this.code = code;
    this.name = name;
    this.symbol = symbol;
  }

  static fromJSON(currencyJSON: ICurrency): Currency {
    return new Currency(currencyJSON);
  }

  toJSON(): ICurrency {
    return {
      code: this.code,
      name: this.name,
      symbol: this.symbol,
    };
  }
}
