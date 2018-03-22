"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RestClient_1 = require("typed-rest-client/RestClient");
var RepositoryService = /** @class */ (function () {
    function RepositoryService() {
        this.restClient = new RestClient_1.RestClient('restfy-api', 'http://httpbin.org/ip');
        this.restSSAPOC = new RestClient_1.RestClient('restfy-api', 'http://httpbin.org/ip');
        //https://api.github.com
        //http://httpbin.org/post?app=SSA
    }
    //getRepositories(username: string): Promise<Array<Repository>> {
    //    return this.restClient.get<Array<Repository>>('/users/' + username + '/repos')
    //        .then(res => res.result);
    //}
    RepositoryService.prototype.getRepositories = function (username) {
        return this.restClient.get('/')
            .then(function (res) { return res.result; });
    };
    return RepositoryService;
}());
exports.RepositoryService = RepositoryService;
//# sourceMappingURL=repository.service.js.map