export default function formatPrice(price: number | bigint): string {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'EUR'
  }).format(price)
}
