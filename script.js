function headerComponent()
{
    let main = document.getElementById("main");
    let headerContainer = document.createElement("div");
    headerContainer.setAttribute("style" ,"height:50px;");
    headerContainer.setAttribute("id" ,"header");
    headerContainer.setAttribute("class" , "d-flex justify-content-between bg-dark");
    
    let logoDiv = document.createElement("div");
    logoDiv.setAttribute("style","width:20%; height:45px;");
    logoDiv.setAttribute("class" ,"d-flex flex-column align-items-center justify-content-center" );
    let titleSmall = document.createElement("small");
    titleSmall.innerHTML = `<b class = 'text-danger' style = 'font-size:20px;'>E-</b><i class = 'text-white'>shop</i>`;
    let tagSmall = document.createElement("small");
    tagSmall.innerHTML = "<span class = 'text-white'>Purchase on one tap</span>";
    logoDiv.appendChild(titleSmall);
    logoDiv.appendChild(tagSmall);
    headerContainer.appendChild(logoDiv);
     
    let serchDiv = document.createElement("div");
    serchDiv.setAttribute("style" , "width:70%; height: 45px;");
    serchDiv.setAttribute("class" , "d-flex justify-content-center align-items-center");
    let searchInput = document.createElement("input");
    searchInput.setAttribute("placeholder", "search product here ");
    searchInput.setAttribute("style" , "width:90%; height:35px; " );

    serchDiv.appendChild(searchInput);
    headerContainer.appendChild(serchDiv);

    let optionDiv = document.createElement("div");
    optionDiv.setAttribute("style" , "width:20%; height:45px;" );
    optionDiv.setAttribute("class" , "text-white d-flex align-items-center justify-content-around");
    let signInOption = document.createElement("small");
    signInOption.innerHTML = "Sign-In";
    signInOption.setAttribute("class" , "btn text-white");
    signInOption.addEventListener("click" ,function(){
           singInComponent();
    });

    let signUpOption = document.createElement("small");
    signUpOption.innerHTML = "Sign-Up";
    signUpOption.setAttribute("class" , "btn text-white");
    signUpOption.addEventListener("click" , function(){
          signUpComponent();
    });

    optionDiv.appendChild(signInOption);
    optionDiv.appendChild(signUpOption);
    headerContainer.appendChild(optionDiv);

    main.appendChild(headerContainer);
}

function cardComponent(d)
{
    
    let main = document.querySelector("#main");
    let cardContainer = document.createElement("div");
    cardContainer.setAttribute("id", "card-container");
    cardContainer.setAttribute("class", "container");

    let rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row");
    
    for (let product of d) {
        let colDiv = document.createElement("div");
        colDiv.setAttribute("class", "col-md-3 p-3");

        let cardDive = document.createElement("div");  // Corrected name
        cardDive.setAttribute("style", "box-shadow:10px 10px 10px grey; height:320px; border-radius:20px");
        cardDive.setAttribute("class", "d-flex flex-column align-items-center");
        

        cardDive.style.transition = "all 0.3s ease";
        cardDive.addEventListener("mouseenter", () => {
          cardDive.style.transform = "scale(1.05)";
          cardDive.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
          cardDive.style.backgroundColor = "#ffecec";
        });
        
        cardDive.addEventListener("mouseleave", () => {
          cardDive.style.transform = "scale(1)";
          cardDive.style.boxShadow = "none";
          cardDive.style.backgroundColor = "#f0f0f0";
        });
        
        
        let productImage = document.createElement("img");
        productImage.setAttribute("style", "width:100%; height:200px;");
        productImage.src = product.thumbnail;
        cardDive.appendChild(productImage); 

        let h6 = document.createElement("h6");
        h6.innerHTML = product.title.substring(0,25);
        h6.setAttribute("style","color:green; font-weight:bold;");
        cardDive.appendChild(h6);

        let price = document.createElement("p");
        price.innerHTML = `<b class="text-sucses">${product.price} Rs.</b>`;
        cardDive.appendChild(price);
         
        let viewMore = document.createElement("button");
        viewMore.setAttribute("class" , "btn btn-warning");
        viewMore.setAttribute("style" ,"width:90%;");
        
        viewMore.innerHTML ="View-More";
        viewMore.addEventListener("click",()=>
        {
            veiwMoreComponent(product);
        });
        cardDive.appendChild(viewMore);
        colDiv.appendChild(cardDive);       
        rowDiv.appendChild(colDiv);      
    }

    cardContainer.appendChild(rowDiv);
    main.appendChild(cardContainer);
}

function veiwMoreComponent(product)
{
    let main = document.querySelector("#main");

    let footerCopyWrite = document.getElementById("Copywrite");
    let Footer = document.getElementById("Footer");

    Footer.style.border = "1px solid black";
    Footer.style.marginTop = "10px";
    main.removeChild(document.getElementById("card-container"));
    
    let vierMoreContainer = document.createElement("div");
    vierMoreContainer.setAttribute("class" , "container mt-3");
   
    let rowDiv = document.createElement("div");
    rowDiv.setAttribute("class" , "row");
    rowDiv.setAttribute("style","border: 2px solid black");
    vierMoreContainer.appendChild(rowDiv);
 
    let leftDiv = document.createElement("div");
    leftDiv.setAttribute("class","col-md-6 d-flex flex-column");
    leftDiv.setAttribute("style","height:500px; box-shadow:10px 10px 10px grey ");

    let mainImage = document.createElement("img");
    mainImage.src = product.thumbnail;
    mainImage.setAttribute("style","width:100%; height:400px");
    mainImage.addEventListener("mouseover" ,function(){

        mainImage.style.transition = "all 0.3s ease";
        mainImage.addEventListener("mouseenter", () => {
          mainImage.style.transform = "scale(1.1)";
        });
        
        mainImage.addEventListener("mouseleave", () => {
          mainImage.style.transform = "scale(1)";
        });
        
    })
    leftDiv.appendChild(mainImage);

    let multiImageContainer = document.createElement("div");
    multiImageContainer.setAttribute("class","d-flex justify-content-center align-items-center ");
    for(let productImage of product.images)
    {
        let smallImage = document.createElement("img");
        smallImage.src = productImage;
        smallImage.setAttribute("style" , "width:30%; height:80px;");
        smallImage.addEventListener("click", function(){
               let temp = mainImage.src;
               mainImage.src = smallImage.src;
               smallImage.src = temp;
        });
        multiImageContainer.appendChild(smallImage);
        
    }
    leftDiv.appendChild(multiImageContainer);
    rowDiv.appendChild(leftDiv);

    let rightDiv = document.createElement("div");
    rightDiv.setAttribute("class","col-md-6 d-flex flex-column p-5 pl-2 pr-2");
    rightDiv.setAttribute("style","height:500px; box-shadow:10px 10px 10px grey");

    let productTitle = document.createElement("h4");
    productTitle.innerHTML = `${product.title}<b class = "text-primary">[${product.brand}]</b></hr>`;
    rightDiv.appendChild(productTitle);

    let productDecription = document.createElement("p");
    productDecription.innerHTML = product.description;
    rightDiv.appendChild(productDecription);

    let warrantyInfo = document.createElement("p");
    warrantyInfo.innerHTML = `<b>Warranty Information :</b>${product.warrantyInformation}`;
    rightDiv.appendChild(warrantyInfo);

    let returnInfo = document.createElement("p");
    returnInfo.innerHTML = `Return-Policy :</b>${product.returnPolicy}`;
    rightDiv.appendChild(returnInfo);

    let ratingInfo = document.createElement("p");
    ratingInfo.innerHTML = `<b>Rating :</b><span class = 'taxt-warning' style = 'font-size:20px; font-weight:bolder;'>(${product.rating}/5)</span>`;
    rightDiv.appendChild(ratingInfo);

    let priceInfo = document.createElement("p");
    priceInfo.innerHTML = `<b>Offer price :</b><del class = 'text-danger '>${product.price}</del><span class = 'text-success' style = 'font-weight: bolder ; font-size:25px;'>${(product.price-(product.price*product.discountPercentage)/100).toFixed(2)} Rs. </span>`;
    rightDiv.appendChild(priceInfo);

    let buyButton = document.createElement("button");
    buyButton.innerHTML = "<b>Buy now</b>";
    buyButton.setAttribute("class" , "btn btn-warning mt-2");
    buyButton.setAttribute("style" ,"width:100%;");
    buyButton.setAttribute("id","BuyID");
    buyButton.addEventListener("mouseover" ,function(){
            buyButton.setAttribute("style", "background-color: green");
    });
    
    buyButton.addEventListener("mouseleave" ,function(){
        buyButton.style.backgroundColor = "";
    })
    rightDiv.appendChild(buyButton);

    rowDiv.appendChild(rightDiv);
    vierMoreContainer.appendChild(rowDiv);
    main.appendChild(vierMoreContainer);
    main.appendChild(Footer);
    main.appendChild(footerCopyWrite);
    
   
    

}

function loadData(){
    let d = [{"id":1,"title":"Essence Mascara Lash Princess","description":"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.","category":"beauty","price":9.99,"discountPercentage":10.48,"rating":2.56,"stock":99,"tags":["beauty","mascara"],"brand":"Essence","sku":"BEA-ESS-ESS-001","weight":4,"dimensions":{"width":15.14,"height":13.08,"depth":22.99},"warrantyInformation":"1 week warranty","shippingInformation":"Ships in 3-5 business days","availabilityStatus":"In Stock","reviews":[{"rating":3,"comment":"Would not recommend!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Eleanor Collins","reviewerEmail":"eleanor.collins@x.dummyjson.com"},{"rating":4,"comment":"Very satisfied!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Lucas Gordon","reviewerEmail":"lucas.gordon@x.dummyjson.com"},{"rating":5,"comment":"Highly impressed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Eleanor Collins","reviewerEmail":"eleanor.collins@x.dummyjson.com"}],"returnPolicy":"No return policy","minimumOrderQuantity":48,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"5784719087687","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"},{"id":2,"title":"Eyeshadow Palette with Mirror","description":"The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.","category":"beauty","price":19.99,"discountPercentage":18.19,"rating":2.86,"stock":34,"tags":["beauty","eyeshadow"],"brand":"Glamour Beauty","sku":"BEA-GLA-EYE-002","weight":9,"dimensions":{"width":9.26,"height":22.47,"depth":27.67},"warrantyInformation":"1 year warranty","shippingInformation":"Ships in 2 weeks","availabilityStatus":"In Stock","reviews":[{"rating":5,"comment":"Great product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Savannah Gomez","reviewerEmail":"savannah.gomez@x.dummyjson.com"},{"rating":4,"comment":"Awesome product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Christian Perez","reviewerEmail":"christian.perez@x.dummyjson.com"},{"rating":1,"comment":"Poor quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Nicholas Bailey","reviewerEmail":"nicholas.bailey@x.dummyjson.com"}],"returnPolicy":"7 days return policy","minimumOrderQuantity":20,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"9170275171413","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"},{"id":3,"title":"Powder Canister","description":"The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.","category":"beauty","price":14.99,"discountPercentage":9.84,"rating":4.64,"stock":89,"tags":["beauty","face powder"],"brand":"Velvet Touch","sku":"BEA-VEL-POW-003","weight":8,"dimensions":{"width":29.27,"height":27.93,"depth":20.59},"warrantyInformation":"3 months warranty","shippingInformation":"Ships in 1-2 business days","availabilityStatus":"In Stock","reviews":[{"rating":4,"comment":"Would buy again!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Alexander Jones","reviewerEmail":"alexander.jones@x.dummyjson.com"},{"rating":5,"comment":"Highly impressed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Elijah Cruz","reviewerEmail":"elijah.cruz@x.dummyjson.com"},{"rating":1,"comment":"Very dissatisfied!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Avery Perez","reviewerEmail":"avery.perez@x.dummyjson.com"}],"returnPolicy":"No return policy","minimumOrderQuantity":22,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"8418883906837","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"},{"id":4,"title":"Red Lipstick","description":"The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.","category":"beauty","price":12.99,"discountPercentage":12.16,"rating":4.36,"stock":91,"tags":["beauty","lipstick"],"brand":"Chic Cosmetics","sku":"BEA-CHI-LIP-004","weight":1,"dimensions":{"width":18.11,"height":28.38,"depth":22.17},"warrantyInformation":"3 year warranty","shippingInformation":"Ships in 1 week","availabilityStatus":"In Stock","reviews":[{"rating":4,"comment":"Great product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Liam Garcia","reviewerEmail":"liam.garcia@x.dummyjson.com"},{"rating":5,"comment":"Great product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Ruby Andrews","reviewerEmail":"ruby.andrews@x.dummyjson.com"},{"rating":5,"comment":"Would buy again!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Clara Berry","reviewerEmail":"clara.berry@x.dummyjson.com"}],"returnPolicy":"7 days return policy","minimumOrderQuantity":40,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"9467746727219","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp"},{"id":5,"title":"Red Nail Polish","description":"The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.","category":"beauty","price":8.99,"discountPercentage":11.44,"rating":4.32,"stock":79,"tags":["beauty","nail polish"],"brand":"Nail Couture","sku":"BEA-NAI-NAI-005","weight":8,"dimensions":{"width":21.63,"height":16.48,"depth":29.84},"warrantyInformation":"1 month warranty","shippingInformation":"Ships overnight","availabilityStatus":"In Stock","reviews":[{"rating":2,"comment":"Poor quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Benjamin Wilson","reviewerEmail":"benjamin.wilson@x.dummyjson.com"},{"rating":5,"comment":"Great product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Liam Smith","reviewerEmail":"liam.smith@x.dummyjson.com"},{"rating":1,"comment":"Very unhappy with my purchase!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Clara Berry","reviewerEmail":"clara.berry@x.dummyjson.com"}],"returnPolicy":"No return policy","minimumOrderQuantity":22,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"4063010628104","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp"},{"id":6,"title":"Calvin Klein CK One","description":"CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.","category":"fragrances","price":49.99,"discountPercentage":1.89,"rating":4.37,"stock":29,"tags":["fragrances","perfumes"],"brand":"Calvin Klein","sku":"FRA-CAL-CAL-006","weight":7,"dimensions":{"width":29.36,"height":27.76,"depth":20.72},"warrantyInformation":"1 week warranty","shippingInformation":"Ships overnight","availabilityStatus":"In Stock","reviews":[{"rating":2,"comment":"Very disappointed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Layla Young","reviewerEmail":"layla.young@x.dummyjson.com"},{"rating":4,"comment":"Fast shipping!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Daniel Cook","reviewerEmail":"daniel.cook@x.dummyjson.com"},{"rating":3,"comment":"Not as described!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Jacob Cooper","reviewerEmail":"jacob.cooper@x.dummyjson.com"}],"returnPolicy":"90 days return policy","minimumOrderQuantity":9,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"2451534060749","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp","https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp","https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp"},{"id":7,"title":"Chanel Coco Noir Eau De","description":"Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.","category":"fragrances","price":129.99,"discountPercentage":16.51,"rating":4.26,"stock":58,"tags":["fragrances","perfumes"],"brand":"Chanel","sku":"FRA-CHA-CHA-007","weight":7,"dimensions":{"width":24.5,"height":25.7,"depth":25.98},"warrantyInformation":"3 year warranty","shippingInformation":"Ships overnight","availabilityStatus":"In Stock","reviews":[{"rating":4,"comment":"Highly impressed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Ruby Andrews","reviewerEmail":"ruby.andrews@x.dummyjson.com"},{"rating":5,"comment":"Awesome product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Leah Henderson","reviewerEmail":"leah.henderson@x.dummyjson.com"},{"rating":5,"comment":"Very happy with my purchase!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Xavier Wright","reviewerEmail":"xavier.wright@x.dummyjson.com"}],"returnPolicy":"No return policy","minimumOrderQuantity":1,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"4091737746820","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp","https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp","https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp"},{"id":8,"title":"Dior J'adore","description":"J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.","category":"fragrances","price":89.99,"discountPercentage":14.72,"rating":3.8,"stock":98,"tags":["fragrances","perfumes"],"brand":"Dior","sku":"FRA-DIO-DIO-008","weight":4,"dimensions":{"width":27.67,"height":28.28,"depth":11.83},"warrantyInformation":"1 week warranty","shippingInformation":"Ships in 2 weeks","availabilityStatus":"In Stock","reviews":[{"rating":5,"comment":"Great value for money!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Nicholas Bailey","reviewerEmail":"nicholas.bailey@x.dummyjson.com"},{"rating":4,"comment":"Great value for money!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Penelope Harper","reviewerEmail":"penelope.harper@x.dummyjson.com"},{"rating":4,"comment":"Great product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Emma Miller","reviewerEmail":"emma.miller@x.dummyjson.com"}],"returnPolicy":"7 days return policy","minimumOrderQuantity":10,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"1445086097250","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp","https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/2.webp","https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/3.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp"},{"id":9,"title":"Dolce Shine Eau de","description":"Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.","category":"fragrances","price":69.99,"discountPercentage":0.62,"rating":3.96,"stock":4,"tags":["fragrances","perfumes"],"brand":"Dolce & Gabbana","sku":"FRA-DOL-DOL-009","weight":6,"dimensions":{"width":27.28,"height":29.88,"depth":18.3},"warrantyInformation":"3 year warranty","shippingInformation":"Ships in 1 month","availabilityStatus":"Low Stock","reviews":[{"rating":4,"comment":"Would buy again!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Mateo Bennett","reviewerEmail":"mateo.bennett@x.dummyjson.com"},{"rating":4,"comment":"Highly recommended!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Nolan Gonzalez","reviewerEmail":"nolan.gonzalez@x.dummyjson.com"},{"rating":5,"comment":"Very happy with my purchase!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Aurora Lawson","reviewerEmail":"aurora.lawson@x.dummyjson.com"}],"returnPolicy":"7 days return policy","minimumOrderQuantity":2,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"3023868210708","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp","https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp","https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/3.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp"},{"id":10,"title":"Gucci Bloom Eau de","description":"Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.","category":"fragrances","price":79.99,"discountPercentage":14.39,"rating":2.74,"stock":91,"tags":["fragrances","perfumes"],"brand":"Gucci","sku":"FRA-GUC-GUC-010","weight":7,"dimensions":{"width":20.92,"height":21.68,"depth":11.2},"warrantyInformation":"6 months warranty","shippingInformation":"Ships overnight","availabilityStatus":"In Stock","reviews":[{"rating":1,"comment":"Very dissatisfied!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Cameron Perez","reviewerEmail":"cameron.perez@x.dummyjson.com"},{"rating":5,"comment":"Very happy with my purchase!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Daniel Cook","reviewerEmail":"daniel.cook@x.dummyjson.com"},{"rating":4,"comment":"Highly impressed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Addison Wright","reviewerEmail":"addison.wright@x.dummyjson.com"}],"returnPolicy":"No return policy","minimumOrderQuantity":2,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"3170832177880","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp","https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/2.webp","https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/3.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp"},{"id":11,"title":"Annibale Colombo Bed","description":"The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.","category":"furniture","price":1899.99,"discountPercentage":8.57,"rating":4.77,"stock":88,"tags":["furniture","beds"],"brand":"Annibale Colombo","sku":"FUR-ANN-ANN-011","weight":10,"dimensions":{"width":28.16,"height":25.36,"depth":17.28},"warrantyInformation":"1 year warranty","shippingInformation":"Ships in 1 month","availabilityStatus":"In Stock","reviews":[{"rating":2,"comment":"Would not recommend!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Christopher West","reviewerEmail":"christopher.west@x.dummyjson.com"},{"rating":4,"comment":"Highly impressed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Vivian Carter","reviewerEmail":"vivian.carter@x.dummyjson.com"},{"rating":1,"comment":"Poor quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Mason Wright","reviewerEmail":"mason.wright@x.dummyjson.com"}],"returnPolicy":"No return policy","minimumOrderQuantity":1,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"3610757456581","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp","https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/2.webp","https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/3.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp"},{"id":12,"title":"Annibale Colombo Sofa","description":"The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.","category":"furniture","price":2499.99,"discountPercentage":14.4,"rating":3.92,"stock":60,"tags":["furniture","sofas"],"brand":"Annibale Colombo","sku":"FUR-ANN-ANN-012","weight":6,"dimensions":{"width":12.75,"height":20.55,"depth":19.06},"warrantyInformation":"Lifetime warranty","shippingInformation":"Ships in 1 week","availabilityStatus":"In Stock","reviews":[{"rating":3,"comment":"Very unhappy with my purchase!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Christian Perez","reviewerEmail":"christian.perez@x.dummyjson.com"},{"rating":5,"comment":"Fast shipping!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Lillian Bishop","reviewerEmail":"lillian.bishop@x.dummyjson.com"},{"rating":1,"comment":"Poor quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Lillian Simmons","reviewerEmail":"lillian.simmons@x.dummyjson.com"}],"returnPolicy":"7 days return policy","minimumOrderQuantity":1,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"1777662847736","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp","https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/2.webp","https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/3.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"},{"id":13,"title":"Bedside Table African Cherry","description":"The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.","category":"furniture","price":299.99,"discountPercentage":19.09,"rating":2.87,"stock":64,"tags":["furniture","bedside tables"],"brand":"Furniture Co.","sku":"FUR-FUR-BED-013","weight":2,"dimensions":{"width":13.47,"height":24.99,"depth":27.35},"warrantyInformation":"5 year warranty","shippingInformation":"Ships overnight","availabilityStatus":"In Stock","reviews":[{"rating":4,"comment":"Excellent quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Aaliyah Hanson","reviewerEmail":"aaliyah.hanson@x.dummyjson.com"},{"rating":4,"comment":"Excellent quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Liam Smith","reviewerEmail":"liam.smith@x.dummyjson.com"},{"rating":4,"comment":"Highly recommended!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Avery Barnes","reviewerEmail":"avery.barnes@x.dummyjson.com"}],"returnPolicy":"7 days return policy","minimumOrderQuantity":3,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"6441287925979","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp","https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/2.webp","https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/3.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp"},{"id":14,"title":"Knoll Saarinen Executive Conference Chair","description":"The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.","category":"furniture","price":499.99,"discountPercentage":2.01,"rating":4.88,"stock":26,"tags":["furniture","office chairs"],"brand":"Knoll","sku":"FUR-KNO-KNO-014","weight":10,"dimensions":{"width":13.81,"height":7.5,"depth":5.62},"warrantyInformation":"2 year warranty","shippingInformation":"Ships overnight","availabilityStatus":"In Stock","reviews":[{"rating":2,"comment":"Waste of money!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Ella Cook","reviewerEmail":"ella.cook@x.dummyjson.com"},{"rating":2,"comment":"Very dissatisfied!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Clara Berry","reviewerEmail":"clara.berry@x.dummyjson.com"},{"rating":5,"comment":"Would buy again!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Elena Long","reviewerEmail":"elena.long@x.dummyjson.com"}],"returnPolicy":"60 days return policy","minimumOrderQuantity":5,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"8919386859966","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp","https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/2.webp","https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/3.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp"},{"id":15,"title":"Wooden Bathroom Sink With Mirror","description":"The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.","category":"furniture","price":799.99,"discountPercentage":8.8,"rating":3.59,"stock":7,"tags":["furniture","bathroom"],"brand":"Bath Trends","sku":"FUR-BAT-WOO-015","weight":10,"dimensions":{"width":7.98,"height":8.88,"depth":28.46},"warrantyInformation":"3 year warranty","shippingInformation":"Ships in 3-5 business days","availabilityStatus":"Low Stock","reviews":[{"rating":4,"comment":"Fast shipping!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Logan Torres","reviewerEmail":"logan.torres@x.dummyjson.com"},{"rating":5,"comment":"Very pleased!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Aria Parker","reviewerEmail":"aria.parker@x.dummyjson.com"},{"rating":3,"comment":"Poor quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Dylan Wells","reviewerEmail":"dylan.wells@x.dummyjson.com"}],"returnPolicy":"60 days return policy","minimumOrderQuantity":2,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"1958104402873","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp","https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/2.webp","https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/3.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp"},{"id":16,"title":"Apple","description":"Fresh and crisp apples, perfect for snacking or incorporating into various recipes.","category":"groceries","price":1.99,"discountPercentage":12.62,"rating":4.19,"stock":8,"tags":["fruits"],"sku":"GRO-BRD-APP-016","weight":9,"dimensions":{"width":13.66,"height":11.01,"depth":9.73},"warrantyInformation":"3 year warranty","shippingInformation":"Ships in 2 weeks","availabilityStatus":"In Stock","reviews":[{"rating":5,"comment":"Very satisfied!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Sophia Brown","reviewerEmail":"sophia.brown@x.dummyjson.com"},{"rating":1,"comment":"Very dissatisfied!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Scarlett Bowman","reviewerEmail":"scarlett.bowman@x.dummyjson.com"},{"rating":3,"comment":"Very unhappy with my purchase!","date":"2025-04-30T09:41:02.053Z","reviewerName":"William Gonzalez","reviewerEmail":"william.gonzalez@x.dummyjson.com"}],"returnPolicy":"90 days return policy","minimumOrderQuantity":7,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"7962803553314","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/apple/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp"},{"id":17,"title":"Beef Steak","description":"High-quality beef steak, great for grilling or cooking to your preferred level of doneness.","category":"groceries","price":12.99,"discountPercentage":9.61,"rating":4.47,"stock":86,"tags":["meat"],"sku":"GRO-BRD-BEE-017","weight":10,"dimensions":{"width":18.9,"height":5.77,"depth":18.57},"warrantyInformation":"3 year warranty","shippingInformation":"Ships overnight","availabilityStatus":"In Stock","reviews":[{"rating":3,"comment":"Would not recommend!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Eleanor Tyler","reviewerEmail":"eleanor.tyler@x.dummyjson.com"},{"rating":4,"comment":"Fast shipping!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Alexander Jones","reviewerEmail":"alexander.jones@x.dummyjson.com"},{"rating":5,"comment":"Great value for money!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Natalie Harris","reviewerEmail":"natalie.harris@x.dummyjson.com"}],"returnPolicy":"60 days return policy","minimumOrderQuantity":43,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"5640063409695","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp"},{"id":18,"title":"Cat Food","description":"Nutritious cat food formulated to meet the dietary needs of your feline friend.","category":"groceries","price":8.99,"discountPercentage":9.58,"rating":3.13,"stock":46,"tags":["pet supplies","cat food"],"sku":"GRO-BRD-FOO-018","weight":10,"dimensions":{"width":18.08,"height":9.26,"depth":21.86},"warrantyInformation":"1 year warranty","shippingInformation":"Ships overnight","availabilityStatus":"In Stock","reviews":[{"rating":3,"comment":"Would not recommend!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Noah Lewis","reviewerEmail":"noah.lewis@x.dummyjson.com"},{"rating":3,"comment":"Very unhappy with my purchase!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Ruby Andrews","reviewerEmail":"ruby.andrews@x.dummyjson.com"},{"rating":2,"comment":"Very disappointed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Ethan Thompson","reviewerEmail":"ethan.thompson@x.dummyjson.com"}],"returnPolicy":"No return policy","minimumOrderQuantity":18,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"1483991328610","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp"},{"id":19,"title":"Chicken Meat","description":"Fresh and tender chicken meat, suitable for various culinary preparations.","category":"groceries","price":9.99,"discountPercentage":13.7,"rating":3.19,"stock":97,"tags":["meat"],"sku":"GRO-BRD-CHI-019","weight":1,"dimensions":{"width":11.03,"height":22.11,"depth":16.01},"warrantyInformation":"1 year warranty","shippingInformation":"Ships in 1 month","availabilityStatus":"In Stock","reviews":[{"rating":5,"comment":"Great product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Mateo Bennett","reviewerEmail":"mateo.bennett@x.dummyjson.com"},{"rating":4,"comment":"Highly recommended!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Jackson Evans","reviewerEmail":"jackson.evans@x.dummyjson.com"},{"rating":3,"comment":"Not worth the price!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Sadie Morales","reviewerEmail":"sadie.morales@x.dummyjson.com"}],"returnPolicy":"7 days return policy","minimumOrderQuantity":22,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"8829514594521","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/chicken-meat/1.webp","https://cdn.dummyjson.com/product-images/groceries/chicken-meat/2.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp"},{"id":20,"title":"Cooking Oil","description":"Versatile cooking oil suitable for frying, sautéing, and various culinary applications.","category":"groceries","price":4.99,"discountPercentage":9.33,"rating":4.8,"stock":10,"tags":["cooking essentials"],"sku":"GRO-BRD-COO-020","weight":5,"dimensions":{"width":19.95,"height":27.54,"depth":24.86},"warrantyInformation":"Lifetime warranty","shippingInformation":"Ships in 1-2 business days","availabilityStatus":"In Stock","reviews":[{"rating":5,"comment":"Very happy with my purchase!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Victoria McDonald","reviewerEmail":"victoria.mcdonald@x.dummyjson.com"},{"rating":2,"comment":"Would not recommend!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Hazel Evans","reviewerEmail":"hazel.evans@x.dummyjson.com"},{"rating":5,"comment":"Would buy again!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Zoe Bennett","reviewerEmail":"zoe.bennett@x.dummyjson.com"}],"returnPolicy":"30 days return policy","minimumOrderQuantity":46,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"4874727824518","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/cooking-oil/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp"},{"id":21,"title":"Cucumber","description":"Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.","category":"groceries","price":1.49,"discountPercentage":0.16,"rating":4.07,"stock":84,"tags":["vegetables"],"sku":"GRO-BRD-CUC-021","weight":4,"dimensions":{"width":12.8,"height":28.38,"depth":21.34},"warrantyInformation":"2 year warranty","shippingInformation":"Ships in 1-2 business days","availabilityStatus":"In Stock","reviews":[{"rating":4,"comment":"Great product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Lincoln Kelly","reviewerEmail":"lincoln.kelly@x.dummyjson.com"},{"rating":4,"comment":"Great value for money!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Savannah Gomez","reviewerEmail":"savannah.gomez@x.dummyjson.com"},{"rating":2,"comment":"Poor quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"James Davis","reviewerEmail":"james.davis@x.dummyjson.com"}],"returnPolicy":"7 days return policy","minimumOrderQuantity":2,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"5300066378225","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/cucumber/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp"},{"id":22,"title":"Dog Food","description":"Specially formulated dog food designed to provide essential nutrients for your canine companion.","category":"groceries","price":10.99,"discountPercentage":10.27,"rating":4.55,"stock":71,"tags":["pet supplies","dog food"],"sku":"GRO-BRD-FOO-022","weight":10,"dimensions":{"width":16.93,"height":27.15,"depth":9.29},"warrantyInformation":"No warranty","shippingInformation":"Ships in 1-2 business days","availabilityStatus":"In Stock","reviews":[{"rating":5,"comment":"Excellent quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Nicholas Edwards","reviewerEmail":"nicholas.edwards@x.dummyjson.com"},{"rating":5,"comment":"Awesome product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Zachary Lee","reviewerEmail":"zachary.lee@x.dummyjson.com"},{"rating":4,"comment":"Great product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Nova Cooper","reviewerEmail":"nova.cooper@x.dummyjson.com"}],"returnPolicy":"60 days return policy","minimumOrderQuantity":43,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"5906686116469","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/dog-food/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp"},{"id":23,"title":"Eggs","description":"Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.","category":"groceries","price":2.99,"discountPercentage":11.05,"rating":2.53,"stock":9,"tags":["dairy"],"sku":"GRO-BRD-EGG-023","weight":2,"dimensions":{"width":11.42,"height":7.44,"depth":16.95},"warrantyInformation":"1 week warranty","shippingInformation":"Ships in 1 week","availabilityStatus":"In Stock","reviews":[{"rating":3,"comment":"Disappointing product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Penelope King","reviewerEmail":"penelope.king@x.dummyjson.com"},{"rating":3,"comment":"Poor quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Eleanor Tyler","reviewerEmail":"eleanor.tyler@x.dummyjson.com"},{"rating":4,"comment":"Very pleased!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Benjamin Foster","reviewerEmail":"benjamin.foster@x.dummyjson.com"}],"returnPolicy":"No return policy","minimumOrderQuantity":32,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"3478638588469","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/eggs/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp"},{"id":24,"title":"Fish Steak","description":"Quality fish steak, suitable for grilling, baking, or pan-searing.","category":"groceries","price":14.99,"discountPercentage":4.23,"rating":3.78,"stock":74,"tags":["seafood"],"sku":"GRO-BRD-FIS-024","weight":6,"dimensions":{"width":14.95,"height":26.31,"depth":11.27},"warrantyInformation":"1 month warranty","shippingInformation":"Ships in 3-5 business days","availabilityStatus":"In Stock","reviews":[{"rating":2,"comment":"Would not buy again!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Caleb Perkins","reviewerEmail":"caleb.perkins@x.dummyjson.com"},{"rating":5,"comment":"Excellent quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Isabella Jackson","reviewerEmail":"isabella.jackson@x.dummyjson.com"},{"rating":4,"comment":"Great value for money!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Nathan Dixon","reviewerEmail":"nathan.dixon@x.dummyjson.com"}],"returnPolicy":"60 days return policy","minimumOrderQuantity":50,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"9595036192098","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/fish-steak/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp"},{"id":25,"title":"Green Bell Pepper","description":"Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.","category":"groceries","price":1.29,"discountPercentage":0.16,"rating":3.25,"stock":33,"tags":["vegetables"],"sku":"GRO-BRD-GRE-025","weight":2,"dimensions":{"width":15.33,"height":26.65,"depth":14.44},"warrantyInformation":"1 month warranty","shippingInformation":"Ships in 1 week","availabilityStatus":"In Stock","reviews":[{"rating":4,"comment":"Highly recommended!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Avery Carter","reviewerEmail":"avery.carter@x.dummyjson.com"},{"rating":3,"comment":"Would not recommend!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Henry Hill","reviewerEmail":"henry.hill@x.dummyjson.com"},{"rating":5,"comment":"Excellent quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Addison Wright","reviewerEmail":"addison.wright@x.dummyjson.com"}],"returnPolicy":"30 days return policy","minimumOrderQuantity":12,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"2365227493323","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp"},{"id":26,"title":"Green Chili Pepper","description":"Spicy green chili pepper, ideal for adding heat to your favorite recipes.","category":"groceries","price":0.99,"discountPercentage":1,"rating":3.66,"stock":3,"tags":["vegetables"],"sku":"GRO-BRD-GRE-026","weight":7,"dimensions":{"width":15.38,"height":18.12,"depth":19.92},"warrantyInformation":"2 year warranty","shippingInformation":"Ships in 1 week","availabilityStatus":"Low Stock","reviews":[{"rating":4,"comment":"Great product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Luna Russell","reviewerEmail":"luna.russell@x.dummyjson.com"},{"rating":1,"comment":"Waste of money!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Noah Lewis","reviewerEmail":"noah.lewis@x.dummyjson.com"},{"rating":3,"comment":"Very disappointed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Clara Berry","reviewerEmail":"clara.berry@x.dummyjson.com"}],"returnPolicy":"30 days return policy","minimumOrderQuantity":39,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"9335000538563","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp"},{"id":27,"title":"Honey Jar","description":"Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.","category":"groceries","price":6.99,"discountPercentage":14.4,"rating":3.97,"stock":34,"tags":["condiments"],"sku":"GRO-BRD-HON-027","weight":2,"dimensions":{"width":9.28,"height":21.72,"depth":17.74},"warrantyInformation":"1 month warranty","shippingInformation":"Ships in 1-2 business days","availabilityStatus":"In Stock","reviews":[{"rating":1,"comment":"Very disappointed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Autumn Gomez","reviewerEmail":"autumn.gomez@x.dummyjson.com"},{"rating":4,"comment":"Highly impressed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Benjamin Wilson","reviewerEmail":"benjamin.wilson@x.dummyjson.com"},{"rating":2,"comment":"Very disappointed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Nicholas Edwards","reviewerEmail":"nicholas.edwards@x.dummyjson.com"}],"returnPolicy":"90 days return policy","minimumOrderQuantity":47,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"6354306346329","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp"},{"id":28,"title":"Ice Cream","description":"Creamy and delicious ice cream, available in various flavors for a delightful treat.","category":"groceries","price":5.49,"discountPercentage":8.69,"rating":3.39,"stock":27,"tags":["desserts"],"sku":"GRO-BRD-CRE-028","weight":1,"dimensions":{"width":14.83,"height":15.07,"depth":24.2},"warrantyInformation":"1 month warranty","shippingInformation":"Ships in 2 weeks","availabilityStatus":"In Stock","reviews":[{"rating":5,"comment":"Very pleased!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Elijah Cruz","reviewerEmail":"elijah.cruz@x.dummyjson.com"},{"rating":4,"comment":"Excellent quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Jace Smith","reviewerEmail":"jace.smith@x.dummyjson.com"},{"rating":5,"comment":"Highly impressed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Sadie Morales","reviewerEmail":"sadie.morales@x.dummyjson.com"}],"returnPolicy":"No return policy","minimumOrderQuantity":42,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"0788954559076","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/ice-cream/1.webp","https://cdn.dummyjson.com/product-images/groceries/ice-cream/2.webp","https://cdn.dummyjson.com/product-images/groceries/ice-cream/3.webp","https://cdn.dummyjson.com/product-images/groceries/ice-cream/4.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp"},{"id":29,"title":"Juice","description":"Refreshing fruit juice, packed with vitamins and great for staying hydrated.","category":"groceries","price":3.99,"discountPercentage":12.06,"rating":3.94,"stock":50,"tags":["beverages"],"sku":"GRO-BRD-JUI-029","weight":1,"dimensions":{"width":18.56,"height":21.46,"depth":28.02},"warrantyInformation":"6 months warranty","shippingInformation":"Ships in 1 week","availabilityStatus":"In Stock","reviews":[{"rating":5,"comment":"Excellent quality!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Nolan Gonzalez","reviewerEmail":"nolan.gonzalez@x.dummyjson.com"},{"rating":4,"comment":"Would buy again!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Bella Grant","reviewerEmail":"bella.grant@x.dummyjson.com"},{"rating":5,"comment":"Awesome product!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Aria Flores","reviewerEmail":"aria.flores@x.dummyjson.com"}],"returnPolicy":"No return policy","minimumOrderQuantity":25,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"6936112580956","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/juice/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp"},{"id":30,"title":"Kiwi","description":"Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.","category":"groceries","price":2.49,"discountPercentage":15.22,"rating":4.93,"stock":99,"tags":["fruits"],"sku":"GRO-BRD-KIW-030","weight":5,"dimensions":{"width":19.4,"height":18.67,"depth":17.13},"warrantyInformation":"6 months warranty","shippingInformation":"Ships overnight","availabilityStatus":"In Stock","reviews":[{"rating":4,"comment":"Highly recommended!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Emily Brown","reviewerEmail":"emily.brown@x.dummyjson.com"},{"rating":2,"comment":"Would not buy again!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Jackson Morales","reviewerEmail":"jackson.morales@x.dummyjson.com"},{"rating":4,"comment":"Fast shipping!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Nora Russell","reviewerEmail":"nora.russell@x.dummyjson.com"}],"returnPolicy":"7 days return policy","minimumOrderQuantity":30,"meta":{"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"2530169917252","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"},"images":["https://cdn.dummyjson.com/product-images/groceries/kiwi/1.webp"],"thumbnail":"https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp"}]

    d = JSON.stringify(d);
    localStorage.setItem("product-list",d);
}

function getData(){
   let data  = localStorage.getItem("product-list");
   data = JSON.parse(data);
   return data;
}

function  signUpComponent(){
       let main = document.querySelector("#main");
       main.innerHTML = "";
       main.setAttribute("class", "d-flex  justify-content-center align-items-center");
       main.setAttribute("style", "min-height:600px; background-color: beige;");
       

       let formDiv = document.createElement("div");
       formDiv.setAttribute("id","ForDiv");
       formDiv.setAttribute("style","width:35%; min-height:100px; border-radius:10px; border:2px solid black; background-color: #f8f9fa ;");
       formDiv.setAttribute("class","p-2");

       let h4 = document.createElement("h4");
       h4.innerHTML="Sign-up form";
       h4.setAttribute("class" , "d-flex justify-content-center align-items-center");
       formDiv.appendChild(h4);
       
       let nameLable = document.createElement("label");
       nameLable.innerHTML = "<b>Enter Name :</b>";
       nameLable.setAttribute("class", "form-label mt-2");

       let nameInput = document.createElement("input");
       nameInput.setAttribute("id","nameInput1");
       nameInput.addEventListener("keyup", validateUserName);
       let nameInputError = document.createElement("small");
       nameInputError.setAttribute("id" , "nameInputError1");

       nameInput.setAttribute("class","form-control ");
       nameInput.setAttribute("placeholder","enter your name here");
       nameInput.setAttribute("type","text");
       
    
       formDiv.appendChild(nameLable);  
       formDiv.appendChild(nameInput);
       formDiv.appendChild(nameInputError);  

       let EmailLable = document.createElement("label");
       EmailLable.innerHTML = "<b>Enter Email :</b>";
       EmailLable.setAttribute("class", "form-label mt-2");

       let EmailInput = document.createElement("input");
       EmailInput.setAttribute("id","EmailInput1");
       EmailInput.addEventListener("keyup" , validateUserEmail);
       let EmailInputError = document.createElement("small");
       EmailInputError.setAttribute("id","EmailInputError1");

       EmailInput.setAttribute("class","form-control ");
       EmailInput.setAttribute("placeholder","enter your email here");
       EmailInput.setAttribute("type","email");

       formDiv.appendChild(EmailLable);
       formDiv.appendChild(EmailInput);
       formDiv.appendChild(EmailInputError);

       let PassLable = document.createElement("label");
       PassLable.innerHTML = "<b>Enter Password :</b>";
       PassLable.setAttribute("class", "form-label mt-2");

       let PassInput = document.createElement("input");
       PassInput.setAttribute("id","passInput1");
       PassInput.addEventListener("keyup" , validateUserPass);
       let passUserError = document.createElement("small");
       passUserError.setAttribute("id","passError1");

       PassInput.setAttribute("class","form-control ");
       PassInput.setAttribute("placeholder","enter your password here");
       PassInput.setAttribute("type","password");

       formDiv.appendChild(PassLable);
       formDiv.appendChild(PassInput);
       formDiv.appendChild(passUserError);

       let MobileLable = document.createElement("label");
       MobileLable.innerHTML = "<b>Enter PhoneNo. :</b>";
       MobileLable.setAttribute("class", "form-label mt-2");

       let MobileInput = document.createElement("input");
       MobileInput.setAttribute("id", "mobileInput1");
       MobileInput.addEventListener("keyup",validateUserMobile);
       let MobileInputError = document.createElement("small");
       MobileInputError.setAttribute("id","MoblieInputError1");
       
       MobileInput.setAttribute("class","form-control ");
       MobileInput.setAttribute("placeholder","enter phone no. here");
       MobileInput.setAttribute("type","password");

       formDiv.appendChild(MobileLable);
       formDiv.appendChild(MobileInput);
       formDiv.appendChild(MobileInputError);

       let signUpButton = document.createElement("button");
       signUpButton.innerHTML = "<b>sign-up</b>";
       signUpButton.setAttribute("class","btn  mt-3");
       signUpButton.setAttribute("style","width:100%;");
       signUpButton.style.backgroundColor = "blue";
       signUpButton.style.color = "white";

        signUpButton.addEventListener("mouseover" ,function(){
            signUpButton.style.backgroundColor = "green";
        });

       signUpButton.addEventListener("mouseleave" ,function(){
           signUpButton.style.backgroundColor = "blue";
       });

       signUpButton.addEventListener("click" , function(){
          if(validateForm())
          {

                let userName = nameInput.value;
                let email = EmailInput.value;
                let password = PassInput.value;
                let phone = MobileInput.value; 
                let userList = JSON.parse(localStorage.getItem("user-list"));
                let newUser = {userName , email , password , phone};
                userList.push(newUser);
                localStorage.setItem("user-list",JSON.stringify(userList));
                window.alert("Sign up success");

                 nameInput.value = "";
                 EmailInput.value = "";
                 PassInput.value = "";
                 MobileInput.value = "";
 
          }
                
       });
       
       formDiv.appendChild(signUpButton);
       main.appendChild(formDiv);

}

function  singInComponent()
{
     let main = document.querySelector("#main");
     main.innerHTML = "";
     main.setAttribute("class" , "d-flex justify-content-center align-items-center" );
     main.setAttribute("style", "min-height:600px; background-color : beige");
     
     let formDiv = document.createElement("div");
     formDiv.setAttribute("style" , "width:35%; min-height:100px; border-radius:10px ; border:2px solid black; background-color: #f8f9fa ;");
     formDiv.setAttribute("class" ,"p-2");
     
     let h4 = document.createElement("h4");
     h4.setAttribute("class","d-flex justify-content-center align-items-center");
     h4.innerHTML = "Sign-in form";
     formDiv.appendChild(h4);

     let EmailLable = document.createElement("label");
     EmailLable.innerHTML = "<b>Enter email :</b>";
     EmailLable.setAttribute("class" , "form-label mt-2");
     formDiv.appendChild(EmailLable);

     let EmailInput = document.createElement('input');
     EmailInput.setAttribute("class" ,"form-control");
     EmailInput.setAttribute("placeholder","enter email here ");
     EmailInput.setAttribute("type","email");
     EmailInput.style.border = '2px solid black';
     formDiv.appendChild(EmailInput);

     let passlabel = document.createElement("label");
     passlabel.innerHTML = "<b>Enter password :</b>";
     passlabel.setAttribute("class","form-label mt-2");
     formDiv.appendChild(passlabel);

     let passInput = document.createElement("input");
     passInput.setAttribute("class","form-control");
     passInput.setAttribute("placeholder","enter password here ");
     passInput.setAttribute("type","password");
     passInput.style.border = '2px solid black';
     formDiv.appendChild(passInput);
     
     let signInButton = document.createElement("button");
     signInButton.setAttribute("class","btn mt-3");
     signInButton.innerHTML = "<b>Sign-in</b>";
     signInButton.setAttribute("style","width:100%; background-color:blue; color:white;");
     formDiv.appendChild(signInButton);

     signInButton.addEventListener("mouseover", function(){
            signInButton.style.backgroundColor = "green";
     })

     signInButton.addEventListener("mouseleave" , function(){
          signInButton.style.backgroundColor = 'blue';
     })
     main.appendChild(formDiv);
}

function rakeTask()
{
   (!localStorage.getItem("user-list"))&& localStorage.setItem("user-list","[]");
}

function footerComponent()
{
   let main = document.getElementById("main");
   
   let Footer = document.createElement("footer");
   Footer.setAttribute("class" ,"d-flex justify-content-around align-items-center mt-3 ");
   Footer.setAttribute("id" ,"Footer")
    Footer.style.backgroundColor = "#2f3e46";
   Footer.style.height = "340px";
   Footer.style.width = "100%";
   let CompayDiv = document.createElement("div");
   CompayDiv.style.color = "white";
   CompayDiv.innerHTML = `
        <b>Company</b>
        <p>About</p>
        <p >Contact</p>
        <p >Careers</p>
        <p >Team</p>
        <p >Press releases</p>
        <p>In the media</p>
        <p>Testimonials</p>
        <p>99nonprofits</p>
   `;
    
   CompayDiv.style.marginTop = "-40px"
   let DesingServise = document.createElement("div");
   DesingServise.style.color = "white";
   DesingServise.innerHTML = `
        <b>Design Services</b>
        <p>1-to-1 projects</p>
        <p>Find a designer</p>
        <p>Discover Inspiration</p>
        <p>Pricing</p>
        <p>99designs Studio</p>
        <p>99designs Pro</p>
   `;
   
    DesingServise.style.marginTop = "-100px";
    let getDesign = document.createElement("div");
    getDesign.style.color = "white";
    getDesign.innerHTML = `
         <b>Get a Design</b>
         <p id="getMarign">Logo design</p>
         <p>Business card</p>
         <p>Web page design</p>
         <p>Brand guide</p>
         <p>Packaging design</p>
         <p>T-shirt design</p>
         <p>Book cover design</p>
         <p>Browse all categories</p>
   `;
    // let getDesignMaring = document.getElementById("getMarign");
    // getDesignMaring.style.marginTop = "5px";
    getDesign.style.marginTop = "-40px"
   let Resouces = document.createElement("div");
   Resouces.style.color = "white";
   Resouces.innerHTML = `
        <b>Resources</b>
        <p>Become a designer</p>
        <p>Blog</p>
        <p>Design without borders</p>
        <p>99awards</p>
        <p>Affiliates</p>
        <p>Logo ideas</p>
        <p>T-shirt ideas</p>
        <p>Designer resources</p>
        <p>Featured partners</p>
        <p>Help</p>
   `;
   
    

   Resouces.style.marginTop = "15px";
   Footer.style.lineHeight = "12px"
   
   Footer.appendChild(CompayDiv);
   Footer.appendChild(DesingServise);
   Footer.appendChild(getDesign);
   Footer.appendChild(Resouces);
   main.appendChild(Footer);

    let allParagraphs = Footer.getElementsByTagName("p");
    for (let i = 0; i < allParagraphs.length; i++) 
    {
        allParagraphs[i].style.fontSize = "13px";  
        allParagraphs[i].style.marginTop = "10px";
    }

    let AllBold = Footer.getElementsByTagName("b");
    for(let i = 0; i<AllBold.length; i++)
    {
        AllBold[i].style.textDecoration = "underline";
    }
}


function FooterCopyRightComponent()
{
    let main = document.querySelector("#main");
    
    let buttoDiv = document.createElement("div");
    buttoDiv.setAttribute("id" ,"Copywrite")
    buttoDiv.setAttribute("class","d-flex justify-content-center align-items-center");
    buttoDiv.innerHTML = "<span style = 'font-size:25px'><b>&copy;</b></span> 2025 Your Company Name. All rights reserved.";
    buttoDiv.style.width = "100%";
    buttoDiv.style.height = "40px";
    buttoDiv.style.border = "1.5px solid black";
    // buttoDiv.style.marginTop = "20px";
    buttoDiv.style.marginBottom = "5px"
    buttoDiv.style.backgroundColor = "#ffffff";
    
    main.appendChild(buttoDiv);
}

function validateUserName()
{
           let status = true;
           let username = document.getElementById("nameInput1").value;
           let usernameError = document.getElementById("nameInputError1");
        
           if(username.length==0)
           {
              usernameError.innerHTML = "*username is required<br>";
              usernameError.style.color = "red";
              status = false;
           }
           else{
               usernameError.innerText = "";
            }

        return status;
}

function validateUserEmail()
{
    let status = true;
    let userEmail = document.getElementById("EmailInput1").value;
    let userEmailInput = document.getElementById("EmailInputError1");

    if(userEmail.length ==0)
    {
       userEmailInput.innerHTML = "*email is required.<br>";
       userEmailInput.style.color = "red";
       status = false;
    }
    else if(!userEmail.includes("@"))
    {
       userEmailInput.innerHTML = "*@ is required.<br>"
       userEmailInput.style.color = "red";
       status = false;
    }
    else if(!userEmail.endsWith(".com"))
    {
        userEmailInput.innerHTML = "*email domain is required.<br>"
        userEmailInput.style.color = "red";
        status = false;
    }
    else
    {
        userEmailInput.innerText = "";
    }
     return status;
}

function validateUserPass()
{
    let status = true;
    let userPass = document.getElementById("passInput1").value;
    let userPassError = document.getElementById("passError1")

    if(userPass.length === 0)
    {
        userPassError.innerHTML = "*password required.<br>"
        userPassError.style.color = "red";
        status = false;
    }
    else if(userPass.length<6 && userPass.length<10)
    {
         userPassError.innerHTML = "*password should be B/W 6 to 10<br>";
         userPassError.style.color = "red";
         status = false;
    }
    else if(!userPass.includes("@"))
    {
         userPassError.innerHTML = "*atleast one special character<br>";
         userPassError.style.color = "red";
         status = false;
    }
    else
    {
        userPassError.innerHTML = "";
    }
    return status;
}

function validateUserMobile()
{
    let status = true;
    let userMoblie = document.getElementById("mobileInput1").value;
    let userMoblieError = document.getElementById("MoblieInputError1");

    if(userMoblie.length === 0)
    {
        userMoblieError.innerHTML = "*mobile no. is required.<br>";
        userMoblieError.style.color = "red";
        status  = false;
    }
    else if(userMoblie.length>10 || userMoblie.length<10)
    {
         userMoblieError.innerHTML = "*enter valid number ";
         userMoblieError.style.color = "red";
         status = false;
    }
    else{
           userMoblieError.innerHTML = "";
    }

    return status;
}

function validateForm()
{
     let usernameStatus = validateUserName();
     let userEmailStatus = validateUserEmail();
     let userPassStatus = validateUserPass();
     let userPhoneStatus = validateUserMobile();
     if(usernameStatus && userEmailStatus && userPassStatus && userPhoneStatus)
     {
       return true;
     }
     else
     {
       return false;
     }
}

