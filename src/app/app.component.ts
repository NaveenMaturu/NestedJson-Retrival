import { Component,OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
				selector: 'app-root',
				templateUrl: './app.component.html',
				styleUrls: ['./app.component.css']
			})
export class AppComponent
{

	title = 'MiracleSoftwareSystems';
	a;
	m;
	userNames=[];
	c=[];
	d=[];
	z=[];
	s;
	card1=[];
	card2=[];
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

	constructor(public http: Http)
	{
		console.log('hello world');
		this.getData();
		this.getNaveen();
	}

	getData()
	{
		return this.http.get(this.apiURL)
		.map(response=>response.json())
	}
	getNaveen()
	{
	  this.getData().subscribe(data =>
		{
			this.a=data;
			for(let i=0;i<this.a.users.length;i++)
			{
				this.userNames[i]=this.a.users[i].name;

			}
      this.z.push(this.a);
			console.log(JSON.stringify(this.z));
			console.log('inside function '+this.a.users.length);
		})
	}
	/* x()
		{
			alert("hi");
			this.c=[];
			console.log(this.a.users.length);
			for(var i=0;i<this.a.users.length;i++)
			{
				alert('this is for loop'+this.name);
				if(this.a.users[i].name==this.name)
				{
					alert('inner hi success');
					this.c.push(this.a.users[i]);
					this.namearr=JSON.stringify(this.c);
					console.log(JSON.stringify(this.c));

				}
			}
		}
	y()
	{
		this.d=[];
		console.log(this.a.users.length);
		for(var i=0;i<this.a.users.length;i++)
		{
			for(var j=0;j<this.a.users[i].members.length;j++)
			{
				if(this.id==this.a.users[i].id&&this.id==this.a.users[i].members[j].id)
				{
					var output=
					{
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
	card(title)
	{
		this.title1=title;
		this.card1=[];
		//console.log(this.a.users.length);
		for(let i=0;i<this.a.users.length;i++)
		{
			this.card1.push(this.a.users[i].name);
			var card2=JSON.stringify(this.card1);
		}
	}

	app(s)
	{
		//alert(s);
		this.title=s;
		this.able=s;
		for(var i=0;i<this.a.users.length;i++)
		{    //console.log("1st loop"+s);
	         //console.log("intialloop"+this.a.users[i].name);

			if(this.a.users[i].name==s)
			{  // alert("if"+s);
				var a1=this.card1.pop();
				var a2=this.card1.pop();
				var a3=this.card1.pop();
				for(let j=0;j<this.a.users[i].members.length;j++)
				{
					//this.membersData.push(this.a.users[i].members[j].name);
					this.card1.push(this.a.users[i].members[j].name);
					//console.log("card1"+this.card1);
					//console.log("inner"+this.a.users[i].members[j].name);
					//console.log("s"+s);

				}
			}
			else
			{	//alert("else"+s);
					this.title=s

				for(let j=0;j<this.a.users[i].members.length;j++)
				{
					if(this.a.users[i].members[j].name==s)
					{
						var z1=this.card1.pop()
						var z2=this.card1.pop()



						for(let k=0;k<this.a.users[i].members[j].members.length;k++)
						{
							//alert(this.a.users[i].members[j].members.length);
							this.card1.push(this.a.users[i].members[j].members[k].name);
							//console.log("inner k"+this.card1);
						}
					}
				}

			}

				//console.log("naveennnnnnn"+JSON.stringify(this.card1));

		}
	}

	back()
	{

		this.back1=[]
		this.back1.push(this.title1)
		this.back1.push(this.title)
		var b1=this.back1.pop();

		 //console.log("b1"+b1);

		this.app(this.back1);
		this.card(this.back1);
		//console.log(this.back1);
	}


}
