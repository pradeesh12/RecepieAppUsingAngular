import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/Services/item.service';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items:Item[];
 
  constructor(private itemService:ItemService,private router:Router) {

   }

  ngOnInit(): void {
    this.items=this.itemService.getItems();
  }
  find(id:number)
  {
       this.router.navigate(['/profile',id]);
  }

}
