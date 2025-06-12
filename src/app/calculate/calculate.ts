import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
interface  Button {
  key: string;
  buttonText: string;
  value: number | ((a:number,b:number) => number);
  isSignal:  boolean;
}

@Component({
  selector: 'app-calculate',
  imports: [
    FormsModule
  ],
  templateUrl: './calculate.html',
  standalone: true,
  styleUrl: './calculate.css'
})
export class Calculate {
  protected data:string = '';
  protected result:number = 0;
  protected buttons:Button[] = [{
    key: "uno",
    buttonText: "1",
    value: 1,    isSignal: false
  },{
    key: "dos",
    buttonText: "2",
    value: 2,
    isSignal: false
  },{
    key: "tres",
    buttonText: "3",
    value: 3,
    isSignal: false
  },{
    key: "sumar",
    buttonText: "+",
    value: (a,b)=> a+b,
    isSignal: true
  },{
    key: "cuatro",
    buttonText: "4",
    value: 4,
    isSignal: false
  },{
    key: "cinco",
    buttonText: "5",
    value: 5,
    isSignal: false
  },{
    key: "seis",
    buttonText: "6",
    value: 6,
    isSignal: false
  },{
    key: "restar",
    buttonText: "-",
    value: (a,b)=> a-b,
    isSignal: true
  },{
    key: "siete",
    buttonText: "7",
    value: 7,
    isSignal: false
  },{
    key: "ocho",
    buttonText: "8",
    value: 8,
    isSignal: false
  },{
    key: "nueve",
    buttonText: "9",
    value: 9,
    isSignal: false
  },{
    key: "multiplicar",
    buttonText: "*",
    value: (a,b)=> a*b,
    isSignal: true
  },{
    key: "cero",
    buttonText: "0",
    value: 0,
    isSignal: false
  },{
    key: "division",
    buttonText: "/",
    value:(a,b)=> a/b,
    isSignal: true
  },{
    key: "result",
    buttonText: "=",
    value: null as unknown as number,
    isSignal: true
  }]

  calculatedata(e: Button) {
    if (e.isSignal){
      this.data += e.buttonText;
      if(e.buttonText === '='){
        const [dat] = this.data.split("=");
        this.buttons.filter((i) => i.isSignal).forEach(button => {
          const temp = dat.split(button.buttonText);
          console.log({button},{temp});
          if (temp.length > 1) {

            // @ts-ignore
            this.result = button.value(Number(temp[0]),Number(temp[1]));
            this.data = "";
            return;
          }
        })
      }
      return;
    }
    this.data += e.value;
  }
}
