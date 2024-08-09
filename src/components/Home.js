import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";
import Product from "./product/Product";
import  {toast} from 'react-toastify';
import Pagination from 'react-js-pagination';

export  default function Home(){
    const dispatch = useDispatch();
    const {products, loading, error, productsCount, resPerPage} =    useSelector((state) => state.productsState)
    const [currentPage, setCurrentPage] = useState(1);
 
    const setCurrentPageNo = (pageNo) =>{

        setCurrentPage(pageNo)
       
    }

    useEffect(()=>{
        if(error) {
            return toast.error(error,{
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
        dispatch(getProducts(null, null, null, null, currentPage)) 
    }, [error, dispatch, currentPage])


    return (
        <Fragment>
            {loading ? <Loader/>:
                <Fragment>
                    <MetaData title={'Buy Best Products'} />
                    <h1 id="products_heading">Latest Products</h1>
                    <section id="products" className="container mt-5">
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                          <img className="card-img-top mx-auto" src="./images/products/1.jpg" />
                          <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                              <a href>OPPO F21s Pro 5G (Dawnlight Gold, 8GB RAM, 128 Storage) with No Cost EMI/Additional Exchange Offers</a>
                            </h5>
                            <div className="ratings mt-auto">
                              <div className="rating-outer">
                                <div className="rating-inner" />
                              </div>
                              <span id="no_of_reviews">(5 Reviews)</span>
                            </div>
                            <p className="card-text">$245.67</p>
                            <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                          <img className="card-img-top mx-auto" src="./images/products/2.jpg" />
                          <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                              <a href>WRISTIO HD, Bluetooth Calling Smart Watch, 15 days battery life, Water Resistant</a>
                            </h5>
                            <div className="ratings mt-auto">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-half-o" />
                              <i className="fa fa-star-o" />
                              <span id="no_of_reviews">(5 Reviews)</span>
                            </div>
                            <p className="card-text">$150.32</p>
                            <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                          <img className="card-img-top mx-auto" src="./images/products/3.jpg" />
                          <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                              <a href>Dell Inspiron 3511 Laptop, Intel i3-1115G4, 8GB, 512GB</a>
                            </h5>
                            <div className="ratings mt-auto">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-half-o" />
                              <i className="fa fa-star-o" />
                              <span id="no_of_reviews">(5 Reviews)</span>
                            </div>
                            <p className="card-text">$440.57</p>
                            <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                          <img className="card-img-top mx-auto" src="./images/products/4.jpg" />
                          <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                              <a href>PTron Newly Launched Tangent Sports, 60Hrs Playtime</a>
                            </h5>
                            <div className="ratings mt-auto">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-half-o" />
                              <i className="fa fa-star-o" />
                              <span id="no_of_reviews">(5 Reviews)</span>
                            </div>
                            <p className="card-text">$15.46</p>
                            <a type="button" href="#" id="view_btn" className="btn btn-block">View Details</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                          <img className="card-img-top mx-auto" src="./images/products/5.jpg" />
                          <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                              <a href>Campus Men's Maxico Running Shoes</a>
                            </h5>
                            <div className="ratings mt-auto">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-half-o" />
                              <i className="fa fa-star-o" />
                              <span id="no_of_reviews">(5 Reviews)</span>
                            </div>
                            <p className="card-text">$10.12</p>
                            <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                    {productsCount > 0 && productsCount > resPerPage?
                    <div className="d-flex justify-content-center mt-5">
                           <Pagination 
                                activePage={currentPage}
                                onChange={setCurrentPageNo}
                                totalItemsCount={productsCount}
                                itemsCountPerPage={resPerPage}
                                nextPageText={'Next'}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                itemClass={'page-item'}
                                linkClass={'page-link'}
                           />     
                    </div> : null }
                </Fragment>
           }
        </Fragment>
    )
}