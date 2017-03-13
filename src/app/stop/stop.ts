export class Stop {
  constructor(
    public paradas: Stop[],
    public codigo: number,
    public nombre: string,
    public pais: string,
    public rank: number,
    public paisIso: string
  ){}
}
