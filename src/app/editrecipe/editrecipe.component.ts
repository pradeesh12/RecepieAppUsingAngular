import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { stringify } from 'querystring';
import { ItemService } from 'src/Services/item.service';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-editrecipe',
  templateUrl: './editrecipe.component.html',
  styleUrls: ['./editrecipe.component.css']
})
export class EditrecipeComponent implements OnInit {
  i:Item;
  name:string;
  des:string;
  price:number;
  allowEdit:boolean;
  num:number;
  constructor(private itemService:ItemService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.num=this.route.snapshot.params['id'];
    this.i=this.itemService.find(this.num);
    this.name=this.i.name;
    this.des=this.i.description;
    this.price=this.i.price;
    this.route.queryParams.subscribe((params:Params)=>{
        this.allowEdit=params['allowEdit']==='1'?true:false;
    });
  }
  onUpdate()
  {
        let servi:{name:string,des:string,price:number}={
        name:this.name,des:this.des,price:this.price};
        this.route.params.subscribe((params:Params)=>{
        this.itemService.update(this.num,servi);
        return this.router.navigate['/profile'];
  });

  }

}
