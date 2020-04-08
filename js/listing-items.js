"use strict"


    let products = [
        {
            name: "Наушники Audeze LCD-4z",
            image: "audeze-lcd-4z.png",
            vendorCode: 181151,
            fav: true,
            price: "44 900"            
        },

        {
            name: "Наушники Ritmix RH-455BTH Black",
            image: "ritmix.png",
            vendorCode: 189128,
            fav: false,
            price: "730"            
        },

        {
            name: "Наушники Focal Stellia",
            image: "focal.png",
            vendorCode: 189944,
            fav: false,
            price: "229 900"            
        },


        {
            name: "Наушники Sennheiser MOMENTUM",
            image: "sennheiser-momentum.png",
            vendorCode: 189834,
            fav: true,
            price: "44 900"            
        },

        {
            name: "Наушники Audio Technica ATH-ANC900BTBK",
            image: "AT-anc-900.png",
            vendorCode: 189128,
            fav: false,
            price: "22 990"            
        },

        {
            name: "Наушники Audio Technica ATH-SR50BT BW",
            image: "AT-bt-bw.png",
            vendorCode: 193729,
            fav: true,
            price: "14 990"            
        },

        {
            name: "Наушники Soul PURE Wireless + Charcoal",
            image: "soul.png",
            vendorCode: 196524,
            fav: false,
            price: "1 890"            
        },

        {
            name: "Наушники Panasonic RP-HF300GC-A",
            image: "panasonic.png",
            vendorCode: 192211,
            fav: false,
            price: "1 310"            
        },

        {
            name: "JBL Tune 600BTNC blue (JBLT600BTNCBLU)",
            image: "jbl.png",
            vendorCode: 192218,
            fav: true,
            price: "4 190"            
        },

        {
            name: "Наушники Audeze LCD-4z",
            image: "audeze-lcd-4z.png",
            vendorCode: 181151,
            fav: true,
            price: "44 900"            
        },

        {
            name: "Наушники Ritmix RH-455BTH Black",
            image: "ritmix.png",
            vendorCode: 189128,
            fav: false,
            price: "730"            
        },

        {
            name: "Наушники Focal Stellia",
            image: "focal.png",
            vendorCode: 189944,
            fav: false,
            price: "229 900"            
        },


        {
            name: "Наушники Sennheiser MOMENTUM",
            image: "sennheiser-momentum.png",
            vendorCode: 189834,
            fav: true,
            price: "44 900"            
        },

        {
            name: "Наушники Audio Technica ATH-ANC900BTBK",
            image: "AT-anc-900.png",
            vendorCode: 189128,
            fav: false,
            price: "22 990"            
        },

        {
            name: "Наушники Audio Technica ATH-SR50BT BW",
            image: "AT-bt-bw.png",
            vendorCode: 193729,
            fav: true,
            price: "14 990"            
        },

        {
            name: "Наушники Sennheiser MOMENTUM",
            image: "sennheiser-momentum.png",
            vendorCode: 189834,
            fav: true,
            price: "44 900"            
        },

        {
            name: "Наушники Audio Technica ATH-ANC900BTBK",
            image: "AT-anc-900.png",
            vendorCode: 189128,
            fav: false,
            price: "22 990"            
        },

        {
            name: "Наушники Audio Technica ATH-SR50BT BW",
            image: "AT-bt-bw.png",
            vendorCode: 193729,
            fav: true,
            price: "14 990"            
        }

    ]

    let items = products.map(function(item){
        if (item.fav == true) {
        return `
        <div class="listing-item">
            <div class="listing-item__image-container">
                <img src="images/${item.image}" alt="${item.name}" class="listing-item__image">
            </div>
            <a class="listing-item__title" href="javascript:void(0)">${item.name}</a> 
            <div class="listing-item__info">
                <span class="listing-item__vendor-code">Артикул: ${item.vendorCode}</span>
                <div class="listing-item__fav">
                    <div class="icon-star-filled"></div>
                    <p class="listing-item__fav-text">&nbsp;в&nbsp;избранном</p>
                </div>
                <span class="listing-item__price">${item.price}</span>
                <a href="javascript:void(0)" class="button button_theme_gold">В корзину</a>
            </div>
        </div>
        `
        } else {
            return `
        <div class="listing-item">
            <div class="listing-item__image-container">
                <img src="images/${item.image}" alt="${item.name}" class="listing-item__image">
            </div>
            <a class="listing-item__title" href="javascript:void(0)">${item.name}</a> 
            <div class="listing-item__info">
                <span class="listing-item__vendor-code">Артикул: ${item.vendorCode}</span>
                <div class="listing-item__fav">
                    <div class="icon-star-empty"></div>
                    <p class="listing-item__fav-text">&nbsp;в&nbsp;избранное</p>
                </div>
                <span class="listing-item__price">${item.price}</span>
                <a href="javascript:void(0)" class="button button_theme_gold">В корзину</a>
            </div>
        </div>
        `
        }
    });

    $(".listing-container__column_products").append(items);
