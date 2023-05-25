export function formatAsARS(price: number) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(price)
}

export function formatAsUSD(price: number) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }
  return new Intl.NumberFormat('en-US', options).format(price)
}
