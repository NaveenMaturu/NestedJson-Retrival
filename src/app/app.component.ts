import { Component,OnInit } from '@angular/core';

import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
  title = 'MiracleSoftwareSystems';
  a;
   m;
   userNames=[];
   c=[];
   d=[];
   z=[];
   s;
   card1=[];
   back1=[];
   under;
	namearr;
	idarr;
	id;
	name;
	title1;
	able;
  private apiURL = "assets/nav.json"

  data: any ={};

  constructor(public http: Http){

	  console.log('hello world');
	  this.getData();
	  this.getNaveen();
	  
  }

  getData(){

	  return this.http.get(this.apiURL)
	  .map(response=>response.json())
  }
  getNaveen(){
	  
	  this.getData().subscribe(data =>{
	  //console.log(JSON.stringify(data));;
	  this.a=data;
	  for(let i=0;i<this.a.users.length;i++){
		this.userNames[i]=this.a.users[i].name;
	  }
	  this.z.push(this.a);
	  console.log(JSON.stringify(this.z));
		console.log('inside function '+this.a.users.length);
	})
	}
	/* x(){
		alert("hi");
		this.c=[];
		console.log(this.a.users.length);
	for(var i=0;i<this.a.users.length;i++)
	{	 alert('this is for loop'+this.name); 
		if(this.a.users[i].name==this.name){
			alert('inner hi success');
			this.c.push(this.a.users[i]);
			this.namearr=JSON.stringify(this.c);
			console.log(JSON.stringify(this.c));

		}
	}
	} 
	y(){
		this.d=[];
		console.log(this.a.users.length);
	for(var i=0;i<this.a.users.length;i++)
	{	
		for(var j=0;j<this.a.users[i].members.length;j++){
			if(this.id==this.a.users[i].id&&this.id==this.a.users[i].members[j].id){
				var output={
					"id":this.a.users[i].id,
					"name":this.a.users[i].name,
					"memebers":this.a.users[i].members[j]
				}
				this.d.push(output);
			}
		}
	}
this.idarr=JSON.stringify(this.d)
	console.log(JSON.stringify(this.d));
	}  */ 
	card(title){
		
		this.title1=title;
		this.card1=[];
		console.log(this.a.users.length);
	for(var i=0;i<this.a.users.length;i++)
	{	/* alert('this is for loop'+this.name); */
		
			//alert('inner hi success');
			this.card1.push(this.a.users[i].name);
			var card2=JSON.stringify(this.card1);
			console.log(JSON.stringify(this.card1));

		
	}
	}
 	  
app(s){
	//alert(s);
this.title=s
this.able=s;
/* console.log(this.a.users.length);
 */for(var i=0;i<this.a.users.length;i++)
{
if(this.a.users[i].name==s){
			var a1=this.card1.pop();
			var a2=this.card1.pop();
			var a3=this.card1.pop();
	// console.log(a3);
 //alert('inner hi success');
for(let j=0;j<this.a.users[i].members.length;j++){
//this.membersData.push(this.a.users[i].members[j].name);
this.card1.push(this.a.users[i].members[j].name);
}
}
this.under=this.card1
console.log(JSON.stringify(this.card1));
}
}

back(){
	
	this.back1=[]
	this.back1.push(this.title1)
	this.back1.push(this.title)
	console.log(this.back1);
	var b1=this.back1.pop();
	this.app(this.back1);
	console.log(this.back1);
}


}
