import { SetupApplication } from "./app";

class ServerApplication {
  static iniciar(): void {
    const application = new SetupApplication();
    application.start();
    application.routeGet();
  }
}

ServerApplication.iniciar();
