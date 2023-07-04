import { fetchApi } from "./fetch.js";
import { api_category } from "./constans.js";
import { drawProduct } from "./drawProduct.js";
import { params } from "./variable.js";

const category = document.querySelector("#category");

export const drawCategory = () => {
    fetchApi(api_category)
    .then(data => {

        const arrayHtml = data.map(item => {
            return `
                <div class="category__item">
                    ${item}
                </div>
            `;
        });
        const stringHtml = arrayHtml.join("");
        category.innerHTML = stringHtml;
        const listCategory = document.querySelectorAll("#category .category__item");
        listCategory.forEach(item => {
            item.addEventListener("click", function(){
                params.category = item.innerText;
                drawProduct();
            });
        });
    })
}