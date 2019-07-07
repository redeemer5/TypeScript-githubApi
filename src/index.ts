import {GithubserviceApi} from './GithubserviceApi';
import { User } from './User';
import { Repo } from './Repo';

let svc  = new GithubserviceApi;
svc.getUserInfo('redeemer5', (user:User)=>{
    console.log(user);
});


svc.getRepos('redeemer5', (repos: Repo[])=>{
    console.log(repos);
})