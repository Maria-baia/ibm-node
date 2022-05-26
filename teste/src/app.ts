import express from "express";

export class SetupApplication {
  constructor(private port = 8080, public app = express()) {}
  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Servidor started on ${this.port}`);
    });
  }
  public routeGet(): void {
    this.app.get("/", (req, res) => {
      res.status(200).send("Maria");
    });
  }
}
