export class CardNumberInvalidError extends Error {
  constructor() {
    super("Número do cartão inválido!");
  }
}
