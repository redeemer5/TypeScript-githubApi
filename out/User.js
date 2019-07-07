"use strict";
//import {Repo} from "./Repo";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    //repos? : Repo[];
    function User(userResponse) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
        //this.login = userResponse.login;
    }
    return User;
}());
exports.User = User;
