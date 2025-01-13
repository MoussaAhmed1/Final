import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ToastrService  } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatRadioModule,MatButtonModule, MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Final';

  constructor(private _toaster:ToastrService){}

  ngOnInit(): void {
    this._toaster.success('Hello world!', 'Toastr fun!');
  }

}
