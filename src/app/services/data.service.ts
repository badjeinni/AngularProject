import { Injectable } from '@angular/core';
import { Http} from '@angular/http'; // importer http module pour utiliser
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {   // ajouter public httpp
  	console.log('Data service connected...');
   }


   //creer la methode getPosts()

   getPosts(){
   	return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
   }
}
