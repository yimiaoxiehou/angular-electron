import {Injectable} from '@angular/core';
import {ElectronService} from "../electron/electron.service";

@Injectable({
  providedIn: 'root'
})
export class CrowdService {

  constructor(private electronService: ElectronService) {
  }

  async auth(username: string, password: string): Promise<string> {

    const crowd = new this.electronService.CrowdClient({
      baseUrl: 'https://www.eingsoft.com/crowd/',
      application: {
        name: 'wireguard-client',
        password: 'Rdis2fun'
      }
    });

    try {
      const session = await crowd.session.create(username, password);
      const user = await crowd.session.getUser(session.token);
      window.localStorage.setItem("session", JSON.stringify(session));
      console.log(user);
      return user;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
