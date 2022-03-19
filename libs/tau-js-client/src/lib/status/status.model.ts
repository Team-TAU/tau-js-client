export interface RawTauStatus {
  id: string;
}
export class TauStatus {
  constructor(raw: RawTauStatus) {
    this.id = raw.id;
  }
  id: string;
}
