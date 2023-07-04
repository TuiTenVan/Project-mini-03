import { fetchApi } from "./fetch.js";
import { paginationNext,params } from "./variable.js";
import { api_products } from "./constans.js";

const product = document.querySelector("#product");

export const drawProduct = () => {
    let category = "";
    if (params.category != "") {
        category = `&category=${params.category}`;
    }
    const api = `${api_products}?q=${params.q}&_page=${params.page}&_limit=${params.limit}&_sort=${params.sort}&_order=${params.order}${category}`;
    fetchApi(api).then((data) => {
        const arrayHtml = data.map((item) => {
            return `
        <div class="product__item">
            <div class="product__image">
                <img src="${item.thumbnail}" alt="${item.title}">
                <div class="product__percent">
                    ${item.discountPercentage}%
                </div>
            </div>
            <div class="product__content">
                <h3 class="product__title">
                    ${item.title}
                </h3>
                <div class="product__meta">
                    <div class="product__price">
                        ${item.price}$
                    </div>
                    <div class="product__stock">
                        Còn lại: ${item.stock}sp
                    </div>
                </div>
            </div>
        </div>
         `;
        });
        const stringHtml = arrayHtml.join("");
        product.innerHTML = stringHtml;
        if (data.length < params.limit) {
            paginationNext.style.display = "none";
        } else {
            paginationNext.style.display = "inline-block";
        }
    });
};