export class CpfInvalidError extends Error {
  constructor() {
    super("CPF é inválido");
  }
}
