import { Repository, SSA_PF } from '../model/repository.model';
import { RestClient, IRequestOptions } from 'typed-rest-client/RestClient';


export class RepositoryService {
    private restClient: RestClient;
    private restSSAPOC: RestClient;
    private restRandon: RestClient;
    private SSAPF: SSA_PF;
    
    constructor() {
        this.restClient = new RestClient('restfy-api', 'http://httpbin.org/ip');
        this.restSSAPOC = new RestClient('restfy-api', 'https://api.github.com');
        this.restRandon = new RestClient('restfy-api', 'https://www.random.org');
        this.SSAPF =new SSA_PF();
        ///
        
    }

    getRepositories(username: string): Promise<Array<Repository>> {
      return this.restSSAPOC.get<Array<Repository>>('/users/' + username + '/repos')
          .then(res => res.result);
    }

    getLogSSA(): Promise<string> {
        let b: string = JSON.stringify(this.SSAPF);
        return this.restClient.create<string> ('http://httpbin.org/post?app=SSA', b)
        .then(res => res.result);
  }

}