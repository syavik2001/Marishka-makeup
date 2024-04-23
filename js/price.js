const price = {
  makeup: '600',
  hair: '400-600',
  expressHair: '300',
  formBrows: '250',
  corectBrows: '150',
  colorBrows: '150',
  lamiBrows: '400',
  lamiEyes: '400',
  colorEyes: '100',
  vaxing: '100',
  makeupOutside: '700',
  hairOutside: '600-700',
}

window.addEventListener('DOMContentLoaded', () => {
  const makeupPriceElement = document.getElementById('makeupPrice');
  makeupPriceElement.textContent = `${price.makeup} грн.`;
  const hairPriceElement = document.getElementById('hairPrice');
  hairPriceElement.textContent = `${price.hair} грн.`;
  const expressHairPriceElement = document.getElementById('expressHairPrice');
  expressHairPriceElement.textContent = `від ${price.expressHair} грн.`;
  const formBrows = document.getElementById('formBrowsPrice');
  formBrows.textContent = `${price.formBrows} грн.`;
  const corectBrows = document.getElementById('corectBrowsPrice');
  corectBrows.textContent = `${price.corectBrows} грн.`;
  const colorBrows = document.getElementById('colorBrowsPrice');
  colorBrows.textContent = `${price.colorBrows} грн.`;
  const lamiBrows = document.getElementById('lamiBrowsPrice');
  lamiBrows.textContent = `${price.lamiBrows} грн.`;
  const lamiEyes = document.getElementById('lamiEyesPrice');
  lamiEyes.textContent = `${price.lamiEyes} грн.`;
  const colorEyes = document.getElementById('colorEyesPrice');
  colorEyes.textContent = `${price.colorEyes} грн.`;
  const vaxing = document.getElementById('vaxingPrice');
  vaxing.textContent = `${price.vaxing} грн.`;
  const makeupOutside = document.getElementById('makeupOutsidePrice');
  makeupOutside.textContent = `${price.makeupOutside} грн.`;
  const hairOutside = document.getElementById('hairOutsidePrice');
  hairOutside.textContent = `${price.hairOutside} грн.`;
})