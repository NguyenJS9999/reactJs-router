import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './css/product.css'

function Breadcrumb() {
    return(
        <div className="breadcrumb-container     container-fluid ">
            <div className=" breadcrumb-content container ">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="./index.html">TRANG CHỦ</Link></li>
                <li className="breadcrumb-item active" aria-current="page">SẢN PHẨM</li>
                </ol>
            </nav>
            </div>
        </div>
    ) 
}

export function Product() {
    return (
        <>
           <Breadcrumb/>
                   
            <main>
                <section>
                {/* Lọc sản phẩm */}
                <div className=" filter-container  container ">
                    <div className=" filters    ">
                    <div className="filter-by-brand">
                        <div className="filter-title">CHỌN SẢN PHẨM THEO THƯƠNG HIỆU</div>
                        {/* Bọc Carousel */}
                        <div className="list-brand">
                        {/* Div được gắn Carousel */}
                        {/* <div class="list-brand-carousel"> */}
                        <div className="brand-logo"><img src="https://nguyenkeo.github.io/MasterAudio/img/Brands/brand-logo/logo-4-acoustic.png" alt="logo" />
                        </div>
                        <div className="brand-logo"><img src="https://nguyenkeo.github.io/MasterAudio/img/Brands/brand-logo/Nexo.png" alt="logo" /></div>
                        <div className="brand-logo"><img src="https://nguyenkeo.github.io/MasterAudio/img/Brands/brand-logo/logo-Adamson.png" alt="logo" />
                        </div>
                        <div className="brand-logo"><img src="https://nguyenkeo.github.io/MasterAudio/img/Brands/brand-logo/logo-Amate.png" alt="logo" />
                        </div>
                        <div className="brand-logo"><img src="https://nguyenkeo.github.io/MasterAudio/img/Brands/brand-logo/logo-Kuledy.png" alt="logo" />
                        </div>
                        <div className="brand-logo"><img src="https://nguyenkeo.github.io/MasterAudio/img/Brands/brand-logo/logo-DK.png" alt="logo" /></div>
                        <div className="brand-logo"><img src="https://nguyenkeo.github.io/MasterAudio/img/Brands/brand-logo/logo-Baiervires.png" alt="logo" />
                        </div>
                        <div className="brand-logo"><img src="https://nguyenkeo.github.io/MasterAudio/img/Brands/brand-logo/logo-Hours.png" alt="logo" />
                        </div>
                        <div className="brand-logo"><img src="https://nguyenkeo.github.io/MasterAudio/img/Brands/brand-logo/Pioneer-dj.png" alt="logo" />
                        </div>
                        {/* </div>  */}
                        {/* Div được gắn Carousel,list-brand-carousel */}
                        </div>
                    </div>
                    {/* Lọc theo kiểu loại sản phẩm */}
                    <div className="filter-by-classify">
                        <div className="filter-title">CHỌN THEO PHÂN LOẠI SẢN PHẨM </div>
                        <div className="list-classify">
                        {/* Div được gắn Carousel */}
                        {/* <div class="list-brand-carousel"> */}
                        <div className="brand-classify"> <span> Subwoofer </span> </div>
                        <div className="brand-classify"> <span> Full range </span> </div>
                        <div className="brand-classify"> <span> Line array </span> </div>
                        <div className="brand-classify"> <span> Mid low </span> </div>
                        <div className="brand-classify"> <span> Amplifier </span> </div>
                        <div className="brand-classify"> <span> Micro </span> </div>
                        <div className="brand-classify"> <span> Digital echo </span> </div>
                        <div className="brand-classify"> <span> Mixer </span> </div>
                        <div className="brand-classify"> <span> Auto power </span> </div>
                        </div>
                        {/* </div>  */}
                        {/* list-brand */}
                    </div>
                    </div> {/* filters Các bộ lọc (2) */}
                    {/* Lọc theo giá và tìm kiếm */}
                    <div className="filter-by-price-search-container   container  ">
                    <div className="filter-by-price-buttons">
                        <span className="filter-by-price-button">Giá tăng dần</span>
                        <span className="filter-by-price-button">Giá giảm dần</span>
                    </div>
                    <span>
                        <span className="product-search">
                        <input className="search-input" type="text" placeholder="Tìm kiếm sản phẩm" />
                        <span className="search-icon" type="button"> <i className="fas fa-search "> </i></span>
                        </span>
                    </span>
                    </div> {/* Lọc theo giá và tìm kiếm */}
                </div> {/* filters-container */}
                </section> {/* Lọc sản phẩm */}
                <section className="products-pagination-container    container">
                <div className="list-products">
                    {/* 1 */}
                    <div className="product">
                    <Link to="./product-detail/product-detail.html">
                        <div className="product-img">
                            <img src=" https://nguyenkeo.github.io/MasterAudio/img/4-acoustic/Subwoofer-PCS-318NB.png " alt="product" />
                        </div>
                    </Link>
                    <div className="product-details">
                        <div className="product-infor    container ">
                        <div className="product-infor-brand">4 Acoustic</div>
                        <div className="product-infor-name-product">Subwoofer PCS 318NB</div>
                        <div className="product-infor-price"> 65,200,000₫ &nbsp;</div>
                        &nbsp;<i className="far fa-heart  like-product " />
                        </div>
                        <div className="product-details-button    container ">
                        <span className=" product-details-button-cart " type="button">
                            <i className="fas fa-cart-arrow-down" /> Thêm vào giỏ hàng
                        </span>
                        <Link to="/shoppingCart" className=" product-details-button-buynow " type="button">
                            <i className="fas fa-coins" />&nbsp;Mua ngay
                        </Link>
                        </div>
                    </div>
                    </div>
                    {/* 2 */}
                    <div className="product">
                    <Link to="./product-detail/product-detail.html">
                        <div className="product-img">
                        <img src=" https://nguyenkeo.github.io/MasterAudio/img/nexo/nexo-ps15.png " alt="product" />
                        </div>
                    </Link>
                    <div className="product-details">
                        <div className="product-infor    container ">
                        <div className="product-infor-brand">Nexo</div>
                        <div className="product-infor-name-product">Fullrange PS15</div>
                        <div className="product-infor-price"> 87,715,000₫&nbsp; </div>
                        &nbsp;<i className="far fa-heart  like-product " />
                        </div>
                        <div className="product-details-button    container ">
                        <span className=" product-details-button-cart " type="button">
                            <i className="fas fa-cart-arrow-down" /> Thêm vào giỏ hàng
                        </span>
                        <Link to="/shoppingCart" className=" product-details-button-buynow " type="button">
                            <i className="fas fa-coins" />&nbsp;Mua ngay
                        </Link>
                        </div>
                    </div>
                    </div>
                    {/* 3 */}
                    <div className="product">
                    <Link to="./product-detail/product-detail.html">
                        <div className="product-img">
                        <img src=" https://nguyenkeo.github.io/MasterAudio/img/adamson/adamson-point15.jpg " alt="product" />
                        </div>
                    </Link>
                    <div className="product-details">
                        <div className="product-infor    container ">
                        <div className="product-infor-brand">Adamson</div>
                        <div className="product-infor-name-product">Fullrange Point 15</div>
                        <div className="product-infor-price">99,111,000₫</div>
                        &nbsp;<i className="far fa-heart  like-product " />
                        </div>
                        <div className="product-details-button    container ">
                        <span className=" product-details-button-cart " type="button">
                            <i className="fas fa-cart-arrow-down" /> Thêm vào giỏ hàng
                        </span>
                        <Link to="/shoppingCart" className=" product-details-button-buynow " type="button">
                            <i className="fas fa-coins" />&nbsp;Mua ngay
                        </Link>
                        </div>
                    </div>
                    </div>
                    {/*  4  */}
                    <div className="product">
                    <Link to="./product-detail/product-detail.html">
                        <div className="product-img">
                        <img src=" https://nguyenkeo.github.io/MasterAudio/img//amate/amate-X218WF.png " alt="product" />
                        </div>
                    </Link>
                    <div className="product-details">
                        <div className="product-infor    container ">
                        <div className="product-infor-brand">Amate</div>
                        <div className="product-infor-name-product">Subwoofer X218WFD</div>
                        <div className="product-infor-price">179.697.708₫</div>
                        &nbsp;<i className="far fa-heart  like-product " />
                        </div>
                        <div className="product-details-button    container ">
                        <span className=" product-details-button-cart " type="button">
                            <i className="fas fa-cart-arrow-down" /> Thêm vào giỏ hàng
                        </span>
                        <Link to="/shoppingCart" className=" product-details-button-buynow " type="button">
                            <i className="fas fa-coins" />&nbsp;Mua ngay
                        </Link>
                        </div>
                    </div>
                    </div>
                    {/*  5  */}
                   
                </div>
                {/* list-products */}
                <div className="paginations">
                    <span className="previous-pagination">&lt;</span>
                    <span className id="paginations-active">1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span className="next-pagination">&gt;</span>
                </div>
                </section>
            </main>
        </>
    )
}