export class Gridbox {
  indexOf: any;
  constructor(
    public id: number,
    public container: HTMLElement,
    public filled: boolean,
    public hasX: boolean,
    public hasO: boolean
  ) {}
}
