import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

interface Food {
  value: string;
  viewValue: string;
}
interface Car {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, MatButtonModule, CommonModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class InscricaoComponent {
  inscritoName:string;
  selectedValue: string;
  selectedCar!: string;
  
  constructor(){
    this.inscritoName="";
    this.selectedValue="";           
  } 

enviarinscricao(): void{
  console.log(this.inscritoName);
  console.log(this.selectedValue)
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];


  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'},
  ];
}
