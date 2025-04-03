
type Error = { message: string; };

export interface Config {

}

class Client {

  private config?: Config;

  constructor(config?: Config) {
    this.config = config;
  }

  static createClient(config?: Config) {
    return new Client(config);
  }

}

export default Client;