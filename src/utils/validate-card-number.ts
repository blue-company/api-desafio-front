export function validateCardNumber(cardNumber: string) {
  cardNumber = cardNumber.replace(/\D/g, "");

  let soma = 0;
  let multiplicarPorDois = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digito = parseInt(cardNumber.charAt(i));

    if (multiplicarPorDois) {
      digito *= 2;
      if (digito > 9) {
        digito -= 9;
      }
    }

    soma += digito;
    multiplicarPorDois = !multiplicarPorDois;
  }

  return soma % 10 === 0;
}
