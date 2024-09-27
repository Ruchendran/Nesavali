import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productsList=[
    {
      url:"../../assets/products-images/shirt1.webp",
      text:"Oxford cloth is an awesome fabric that's just as suitable for a casual gathering as it is for a formal event. It has a  unique basket weave texture that gives it a super durable and wrinkle-resistant quality. So, you can wear it all day long without having to worry about it getting all crumpled."
    },
      {
        url:"../../assets/products-images/shirt2.webp",
        text:"Poplin is a lightweight and smooth shirt material that has a crisp feeling to it, with a silky surface. It's a good choice for formal occasions or summer wear. Moreover, It's the type of fabric that feels super cool and refreshing against your skin, making it ideal for those hot and humid days when you still want to look sharp and put together."
      },
    
    {
      url:"../../assets/products-images/shirt3.webp",
      text:"This tightly woven fabric has a really subtle texture that gives it a unique look and feel.  In fact,  when you see it up close, you'll notice how the tight weave creates this really interesting pattern that adds depth and dimension to the fabric. Although pinpoint is generally seen as a more sophisticated fabric, it's still comfortable to wear. It has a nice weight to it that feels substantial without being too heavy."
    },
    {
      url:"../../assets/products-images/shirt4.webp",
      text:"Herringbone is a type of fabric weave that produces a distinctive V-shaped pattern, resembling the skeleton of a herring fish. One of the benefits of herringbone fabric is its durability, as the weave creates a strong and sturdy fabric that can withstand frequent wear. Moreover, the texture is visually appealing and is a smart choice for business dress shirts. On the flip side, herringbone is prone to wrinkles and requires some ironing to maintain its look."
    },
    {
      url:"../../assets/products-images/shirt5.webp",
      text:"Linen is the typical kind of fabric you'll especially see throughout the summer. Not only does it come with several benefits, such as being highly absorbent and breathable,  but it's a great choice for people with skin sensitivities. Moreover, Linen is hypoallergenic and has antibacterial properties. In fact, one of the fabric's best features is that it's a natural insect-repelling agent, so there's no need to worry about moths.  If you're in need of a casual summer outfit, a linen dress shirt is always a good option."
    },
    {
      url:"../../assets/products-images/shirt6.webp",
      text:"Polyester is a common fabric used in textile production, and you're sure to have at least one shirt made out of it.  It's an affordable fabric that is especially used for outdoor gear, such as jackets and sleeping bags, due to its ability to repel water and resist mildew.  The great thing about this fabric is its strong wrinkle resistance"
    },
    {
      url:"../../assets/products-images/shirt7.webp",
      text:"Flannel has a very cozy feel to it, which makes it suitable for winter days due to its insulating properties. It's usually made from wool, cotton, or synthetic fibers that have been brushed to create a soft, fuzzy texture. Moreover, flannel shirts are durable and long lasting, making them a good investment for those who want a shirt that will hold up over time."
    },
    {
      url:"../../assets/products-images/shirt8.webp",
      text:"Seersucker is a lightweight cotton fabric that is woven in a way that creates a puckered or crinkled texture. This texture is achieved by weaving some threads tighter than others, which causes the fabric to bunch up and create a raised textured surface. Seersucker shirts are typically designed with a relaxed fit, and the fabric's lightweight and breathable nature makes them perfect for hot and humid weather."
    },
 
  ]
}
