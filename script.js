let ul = document.querySelector(".category ul");
let productsContainer = document.querySelector(".products");

//fetching all products

let getproducts = async () => {
  let fetchData = await fetch('https://dummyjson.com/products');
  let finallFetchData = await fetchData.json();

//   console.log("All products:", finallFetchData.products);
  productsContainer.innerHTML= finallFetchData.products.map(element=>{
    // console.log(element)
    return `            <div class="product-card">
                <img src="${element.thumbnail}" alt="">
                <p>${element.price}</p>
                <button>Add to cart</button>
                <h3>${element.title}</h3>
            </div>`
  }).join("")
}
getproducts()

//fetching all category list

let categorylist = async () => {
    let fetchData = await fetch('https://dummyjson.com/products/category-list');
    let finallFetchData = await fetchData.json();

    ul.innerHTML = finallFetchData.map((category) => {
        return `<li><a href="#" class="category-name" category="${category}">${category}</a></li>`;
    }).join("");
    let categoryName = document.querySelectorAll(".category-name");
    categoryName.forEach(link=>{
        link.addEventListener("click",(e)=>{
          e.preventDefault();
          let selectedCategory = e.target.getAttribute("category")
          getProductsByCategory(selectedCategory)
        })
    })
};
categorylist();

//fetching products by category

let getProductsByCategory =async(category)=>{
    let fetchData =await fetch(`https://dummyjson.com/products/category/${category}`);
    let finallFetchData = await fetchData.json();
    console.log(finallFetchData.products);
    productsContainer.innerHTML= finallFetchData.products.map(element=>{
        console.log(element)
        return `<div class="product-card">
                <img src="${element.thumbnail}" alt="">
                <p>${element.price}</p>
                <button>Add to cart</button>
                <h3>${element.title}</h3>
            </div>
        
        `
    }).join("")
}


