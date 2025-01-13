import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ToastrService  } from 'ngx-toastr';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatRadioModule,MatButtonModule, MatMenuModule,TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Final';
  constructor(private _toaster:ToastrService,public translate: TranslateService){
    this.translate.addLangs(['ar', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
  
  ngOnInit(): void {
  }

}
