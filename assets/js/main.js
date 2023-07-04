import { drawProduct } from "./drawProduct.js";
import { buttonSearch, inputSearch, params } from "./variable.js";
import { drawCategory } from "./drawCategory.js";
import { paginationNext } from "./variable.js";
import { paginationPrev } from "./variable.js";
import { paginationNumber } from "./variable.js";
import { filter } from "./variable.js";

drawCategory();

drawProduct();

const search = () => {
    params.q = inputSearch.value;
    drawProduct();
}
buttonSearch.addEventListener("click", function(){
    search();
});
inputSearch.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        search();
    }
});

paginationNext.addEventListener("click", function(){
    params.page = params.page + 1;
    paginationNumber.innerHTML = params.page;
    drawProduct();
})

paginationPrev.addEventListener("click", function(){
    if(params.page > 1){
        params.page = params.page - 1;
        paginationNumber.innerHTML = params.page;
        drawProduct();
    }
});

filter.addEventListener("change", function(e){
    console.log(e.target.value);
    switch (e.target.value) {
        case "mac-dinh":
            params.sort = ``;
            params.order = ``;
            break;
        case "gia-thap-den-cao":
            params.sort = `price`;
            params.order = `asc`;
            break;
        case "gia-cao-den-thap":
            params.sort = `price`;
            params.order = `desc`;
            break;
        case "giam-gia-nhieu":
            params.sort = `discountPercentage`;
            params.order = `desc`;
            break;
        default:
            break;
    }
    drawProduct();
});