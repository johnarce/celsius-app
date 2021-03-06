import currency from "currency-formatter";

export default {
  usd,
  cel,
  crypto,
  ordinalSuffixOf,
}

function usd(amount, options = {}) {
  return currency.format(amount, { code: 'USD', ...options });
}

function cel(amount) {
  return currency.format(amount, { precision: 0, thousand: ',', symbol: 'CEL', format: '%v %s' })
}

function crypto(amount, cryptocurrency) {
  return currency.format(amount, { precision: 2, thousand: ',', symbol: cryptocurrency, format: '%v %s' })
}

function ordinalSuffixOf (number) {
  const j = number % 10;
  const k = number % 100;

  if (j === 1 && k !== 11) {
    return `${ number }st`;
  }
  if (j === 2 && k !== 12) {
    return `${ number }nd`;
  }
  if (j === 3 && k !== 13) {
    return `${ number }rd`;
  }
  return `${ number }th`;
}

