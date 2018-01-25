import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'; // importeer ce fichier ici

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
	name:string;
	age:number;
	email:string;
	address:Address;
	hobbies:string[];
	hello:any;

	constructor(private dataService: DataService) {  // mettre ici la variable  dataService  
  		console.log('constructor ran ....');
  	}


  ngOnInit() {
   this.name = 'John Doe 2';
   this.age = 2;
   this.email = "open@open.fr";
   this.address={
	   	street:'50 Main st',
	   	city:'Boston',
	   	state:'MA'
   }
   this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
   this.hello = "hello";

   // affiche le contenu du webService

   this.dataService.getPosts().subscribe((posts) => {
    console.log(posts);
   });  

  }
  onClick(){
  	this.name='Brad Pit';
  	this.hobbies.push('New hobby');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby){
  	for(let i = 0; i<this.hobbies.length; i++){
  		if(this.hobbies[i] == hobby){
  		this.hobbies.splice(i, 1);
  		}
  	}
  }
  }

interface Address{
	street:string,
	city:string,
	state:string
}