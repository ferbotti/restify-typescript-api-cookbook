import { Repository } from '../model/repository.model';
import { RestClient, IRequestOptions } from 'typed-rest-client/RestClient';


export class RepositoryService {
    private restClient: RestClient;
    private restSSAPOC: RestClient;
    private restRandon: RestClient;
    private _uriPF: string;
    private _uriPJ: string;
    
    constructor() {
        this.restClient = new RestClient('restfy-api', 'http://httpbin.org//post');
        this.restSSAPOC = new RestClient('restfy-api', 'https://api.github.com');
        this.restRandon = new RestClient('restfy-api', 'https://www.random.org');
        
        this._uriPF = 'http://srvbigpvlbr13.bs.br.bsch:2711/run/SSAPF';
        this._uriPJ = 'http://srvbigpvlbr13.bs.br.bsch:2711/run/SSAPJ';    

    }

    getRepositories(username: string): Promise<Array<Repository>> {
      return this.restSSAPOC.get<Array<Repository>>('/users/' + username + '/repos')
          .then(res => res.result);
    }

    getLogSSAPF(): Promise<string> {
        let SSA_Log = {
            url: '/device-manager/pick-challenge',
            endpointPath: '/pick-challenge',
            request_id: 'D127\r\nX',
            hostname: 'backend-169-170g8',
            method: 'POST',
            logMessage: 'TKScUbF2utdbtYa63bxVpr3ewPPkhlqphUTiomlaliUnmiYlL5l1RMKlPFpPJExYnKVDGpfFLFN6mcVLyhclIxqUwVk8pUcaIyVbxxsdZat4u11'
          }
        let strlog: string = JSON.stringify(SSA_Log);
        return this.restClient.create<string> ('http://httpbin.org//post', strlog)
        .then(res => res.result);
    }

    getLogSSAPJ(): Promise<string> {
        let SSA_Log = {
            url: '/device-manager/pick-challenge',
            endpointPath: '/pick-challenge',
            request_id: 'D127\r\nX',
            hostname: 'backend-169-170g8',
            method: 'POST',
            logMessage: 'TKScUbF2utdbtYa63bxVpr3ewPPkhlqphUTiomlaliUnmiYlL5l1RMKlPFpPJExYnKVDGpfFLFN6mcVLyhclIxqUwVk8pUcaIyVbxxsdZat4u11'
          }
        let b: string = JSON.stringify(SSA_Log);
        return this.restClient.create<string> (this._uriPJ, b)
        .then(res => res.result);
    }

}