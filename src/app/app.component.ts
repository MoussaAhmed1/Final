import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatRadioModule,MatButtonModule, MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Final';
}
