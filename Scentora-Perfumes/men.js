
let menproduct = ""

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
        title: "Obsession",
        des: "Pineapple, Apple, Bergamot",
        image: "https://saeedghani.pk/cdn/shop/files/HP_1024x1024.webp?v=1764273648",
        price: "1,890"
    },

    {
        id: "6",
        title: "Thrive",
        des: "Peach, Gardenia",
        image: "https://saeedghani.pk/cdn/shop/files/HS_1024x1024.webp?v=1764273648",
        price: "1,490"
    },

    {
        id: "7",
        title: "Imagination",
        des: "Bergamot, Citrus",
        image: "https://saeedghani.pk/cdn/shop/files/imagination_1024x1024.webp?v=1759667224",
        price: "1,352"
    },

    {
        id: "8",
        title: "Mir",
        des: "Lavender, Birch",
        image: "https://saeedghani.pk/cdn/shop/files/MIR100ml_1024x1024.webp?v=1759673223",
        price: "3,592"
    },

    {
        id: "9",
        title: "Luxury Attar Duo",
        des: "Luxury Attar",
        image: "https://saeedghani.pk/cdn/shop/files/deal21_1024x1024.webp?v=1759679976",
        price: "2,835"
    },

    {
        id: "10",
        title: "Sultan",
        des: "Cardamom and Amber",
        image: "https://saeedghani.pk/cdn/shop/files/Sultan_1024x1024.webp?v=1759673367",
        price: "3,192"
    }
]

function menProducts() {

    productData.forEach(element => {

        menproduct += `
        <div class="card m-3 border" style="width: 20rem;">
            <img src=${element.image} class="card-img-top" alt="...">
                <div class="card-body">
                   <h5 class="card-title">${element.title}</h5>
                   <p class="card-text">${element.des}</p>
                   <h5 class="card-title text-center">Rs.<span>${element.price}</span> </h5> 
                   <a href="#" class="btn btn-dark custom-hover"><i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Add To Cart</a>
                </div>
        </div>
`
        document.getElementById("men-products").innerHTML = menproduct

    });
}

menProducts()