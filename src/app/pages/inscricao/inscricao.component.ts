import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, MatButtonModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class InscricaoComponent {
  inscritoName:string;
  
  constructor(){
    this.inscritoName="";
  }

enviarinscricao(): void{
  console.log(this.inscritoName);
  }

}
