import { Item } from "src/app/models/item.model";


export class ItemService
{
  
    items:Item[]=[
        {
            id:1,
            name:'pizza',
            description:'with lots of flavor',
            imageUrl:'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?t=st=1656325401~exp=1656326001~hmac=ec5e3bba9387b142f958c3b114a848f8f6c5f168e349114016a024acb4d6f20a&w=740',
            price:2,
        },
        {
            id:2,
            name:'Sandwitch',
            description:'with lots of flavor',
            imageUrl:'https://content.jdmagicbox.com/comp/chennai/a8/044pxx44.xx44.190716183052.z1a8/catalogue/sandwitch-chennai-fast-food-delivery-services-44jx9vznst.jpg',
            price:3,
        },
        {
            id:3,
            name:'Burger',
            description:'with lots of flavor',
            imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1024px-Hamburger_%28black_bg%29.jpg',
            price:5,
        }
];
update(num:number,ser:{name:string,des:string,price:number})
{
    let flag=0;
    i1:ItemService;
    for (let i = 0; i < this.items.length; i++) {
        //console.log(num+" "+this.items[i].id);
       if(num==this.items[i].id)
       {
            flag=i;
            break;
       }

    }
    const i1=this.items[flag];
    i1.description=ser.des;
    i1.name=ser.name;
    i1.price=ser.price


}
find(num: number) {
    for (let i = 0; i < this.items.length; i++) {
        console.log(num+" "+this.items[i].id);
       if(num==this.items[i].id)
       {
            //console.log("Anser");
            return this.items[i];
       }
      }
    return this.items[1];
 //   return this.items.find(items=>items.id===num);
  }
getItems():Item[]
{
    return this.items;
}
}