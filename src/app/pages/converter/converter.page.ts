import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.page.html',
  styleUrls: ['./converter.page.scss'],
})
export class ConverterPage implements OnInit {

public changeRate = 0;
public yenValue = 1;
public isHidden = true;

public buttonName = "Afficher";

public buttonColor = "primary";

public countries:Array<string> = ["France", "Espagne", "Italie", "Croatie", "Serbie", "Bulgarie"];

public currencies:Array<{label:string, rate:number, symbol:string}> =
[
  {label:"Euro", rate: .0086, symbol:"€"},
  {label:"Dollar US", rate:.0094, symbol:"$"},
  {label:"Livre Sterling", rate:.0079, symbol:"£"},
  {label:"Shekel", rate:.033, symbol:"₪"},
];

public selectedCurrency = {
  label: "",
  rate: 0,
  symbol: ""
};
  constructor() { }

  ngOnInit() {
  }

  // Ne pas oublier de mettre en parametre l'argument qui change
  showHideForm(color) {
    this.isHidden = ! this.isHidden;
    // this.buttonName = this.isHidden ? 'Afficher' : 'Masquer';

    if(this.isHidden){
      this.buttonName = "Afficher";
      this.buttonColor = "primary";
        } else {
      this.buttonName = "masquer";
      this.buttonColor = color;
    }

    // if (this.isHidden) {
    //   this.buttonColor = "primary";
    // } else {
    //   this.buttonColor = color;
    // }
    }
  }


