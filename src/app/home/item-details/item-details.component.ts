import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/Services/item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  i:Item;
  constructor(private itemService:ItemService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    let num=this.route.snapshot.params['id'];
    this.i=this.itemService.find(num);  
  }
  goto()
  {
   // console.log("back");
    return this.router.navigate['/'];
  }
  onEdit(item:number)
  {
      this.router.navigate(['/edit',item]);
  }

}
