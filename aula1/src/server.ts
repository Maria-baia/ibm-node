class ServerApplication {
    static start(): void {
        const application = new SetupApplication(port: 8080);
        application.init()
        application.start()
    }
}
ServerApplication.start()