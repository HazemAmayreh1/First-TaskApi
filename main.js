async function getProduct(){
    const response= await fetch("https://dummyjson.com/products");
    const data =  await response.json();
    const results= data.products.map( function (ele) {
        return `
        <div class="all">
        <div class="proimg">
        <img src="${ele.thumbnail}" alt="this is product img"/>
        <div class="proinfo">
        <h1>${ele.id}</h1>
        <h1>${ele.title}</h1>    
        <span>${ele.price}$</span>
        </div>
        </div>
        </div>
        
        `
    } ).join('');
    document.querySelector(".ProFromJs").innerHTML=results;

}
getProduct();