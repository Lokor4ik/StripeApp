export default function getApplePrice(numDonuts) {
  return (Math.round(numDonuts * 1.5 * 100) / 100).toFixed(2);
}