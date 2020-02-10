import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
	
	private temp : number;
	private signe : number;
	private vider : number;
	constructor()
	{
		this.resultat = 0;
		this.temp = 0;
		this.signe = 0;
		this.reset = 0;
	}

	effacer()
	{
		this.resultat = 0;
		this.temp = 0;
		this.signe = 0;
		this.vider = 0;
	}
	
	signe()
	{
		
	}
	
	operation(operateur : int)
	{
		this.temp = this.resultat;
		this.signe = operateur;
		this.vider = 1;
	}

	afficherNombre(nombre : number)
	{
		if(this.vider == 1)
		{
			this.resultat = 0;
			this.vider = 0;
		}
		else if(this.vider == 2)
		{
			this.resultat = 0;
			this.temp = 0;
			this.signe = 0;
			this.vider = 0;
		}
		if(this.resultat == 0)
		{
			this.resultat = nombre;
		}
		else
		{
			
			this.resultat = this.resultat + nombre;
		}
	}
	
	virgule()
	{
		
	}
	
	calculer()
	{
		if(this.signe == 1)
		{
			this.resultat = this.temp % this.resultat;
		}
		else if(this.signe == 2)
		{
			this.resultat = this.temp / this.resultat;
		}
		else if(this.signe == 3)
		{
			this.resultat = this.temp * this.resultat;
		}
		else if(this.signe == 4)
		{
			this.resultat = this.temp - this.resultat;
		}
		else if(this.signe == 5)
		{
			this.resultat = this.temp + this.resultat;
		}
		this.vider = 2;
	}
}
