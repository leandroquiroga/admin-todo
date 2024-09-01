

export const formatPrice = (price: number): string => {
  let formattedPrice, parts;

  formattedPrice = price.toFixed(2); // Obtenemos los decimales
  parts = formattedPrice.split('.'); // Dividimos la parte entera de la decimal

  parts[0] = parseInt(parts[0], 10).toLocaleString('es');// Formateamos la parte entera con comas

  return parts.join(',');
}