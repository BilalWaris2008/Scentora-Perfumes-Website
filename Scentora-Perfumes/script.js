


let rough = ""

let productData = [
    {
        id: "1",
        title: "Durvesh",
        des: "Grapefruit, Lemon, Bergamot",
        image: "https://saeedghani.pk/cdn/shop/files/durvesh_1024x1024.jpg?v=1756815246",
        price: "4,990"
    },

    {
        id: "2",
        title: "Jalal",
        des: "Mandarin Orange, Sea Notes",
        image: "https://saeedghani.pk/cdn/shop/files/Jalal_1024x1024.webp?v=1759673054",
        price: "4,490"
    },

    {
        id: "3",
        title: "Khan",
        des: "Lemon, Mint, Pink Pepper, Grapefruit",
        image: "https://saeedghani.pk/cdn/shop/files/KHAN100ml_1024x1024.webp?v=1759673121",
        price: "4,490"
    },

    {
        id: "4",
        title: "Haider",
        des: "Pineapple, Bergamot, Black Currant",
        image: "https://saeedghani.pk/cdn/shop/files/Haider_100ml_1024x1024.jpg?v=1756815278",
        price: "4,990"
    },

    {
        id: "5",
        title: "Zahra - Gift Edition",
        des: "The Essence of Timeless Beauty",
        image: "https://saeedghani.pk/cdn/shop/files/zahra_1024x1024.webp?v=1759665742",
        price: "2,490"
    },

    {
        id: "6",
        title: "Her",
        des: "Pear, Citrus",
        image: "https://saeedghani.pk/cdn/shop/files/HER50ml4_1024x1024.webp?v=1759665405",
        price: "1,890"
    },

    {
        id: "7",
        title: "Obsession",
        des: "Pineapple, Apple, Bergamot",
        image: "https://saeedghani.pk/cdn/shop/files/HP_1024x1024.webp?v=1764273648",
        price: "1,890"
    },

    {
        id: "8",
        title: "Thrive",
        des: "Peach, Gardenia",
        image: "https://saeedghani.pk/cdn/shop/files/HS_1024x1024.webp?v=1764273648",
        price: "1,490"
    }
]

function showProducts() {

    productData.forEach(element => {

        rough += `
        <div class="card m-3" style="width: 20rem;">
           <img src=${element.image} class="card-img-top" alt="...">
                <div class="card-body">
                   <h5 class="card-title">${element.title}</h5>
                   <p class="card-text">${element.des}</p>
                   <h5 class="card-title">Rs.<span>${element.price}</span></h5>
                   <a href="#" class="btn btn-dark"><i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Add To Cart</a>
                 </div>
        </div>
`
        document.getElementById("show-all-product").innerHTML = rough

    });
}

showProducts()