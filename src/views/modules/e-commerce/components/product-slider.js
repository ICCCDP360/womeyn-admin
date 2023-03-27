import {memo,Fragment} from 'react'

//React-bootstrap
import {Row} from 'react-bootstrap'

//Components
import ProductCard from "./product-card"

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";    

//Img
import img1 from '../../../../assets/modules/e-commerce/images/01.png'
import img2 from '../../../../assets/modules/e-commerce/images/02.png'
import img3 from '../../../../assets/modules/e-commerce/images/03.png'
import img4 from '../../../../assets/modules/e-commerce/images/04.png'
import img5 from '../../../../assets/modules/e-commerce/images/05.png'
import img6 from '../../../../assets/modules/e-commerce/images/06.png'

const ProductSlider = memo((props) => {
    return(
        <Fragment>
            <Row className="row-cols-1">
                <div className="d-flex py-4 pt-0">
                    <h4 className="mb-0">Featured Products</h4>
                </div>
                <div className="overflow-hidden slider-circle-btn" id="ecommerce-slider">

                    <Swiper className="p-0 m-0 mb-4 swiper-wrapper list-inline"
                        slidesPerView={3}
                        spaceBetween={32}
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }}
                        breakpoints= {{
                            320: { slidesPerView: 1 },
                            550: { slidesPerView: 2 },
                            991: { slidesPerView: 3 },
                            1400: { slidesPerView: 3 },
                            1500: { slidesPerView: 3 },
                            1920: { slidesPerView: 4 },
                            2040: { slidesPerView: 4 },
                            2440: { slidesPerView: 4 }
                        }}>
                            <SwiperSlide  className="card-slide">
                                <ProductCard productName="Casual Shoes" productImage={img1} productRating="3.5"  productPrice="$56.00" />
                            </SwiperSlide>
                            <SwiperSlide  className="card-slide">
                                <ProductCard productName="Biker's Jacket" productImage={img2} productRating="3.5"  productPrice="$56.00" statusDetails="New" statusColor="primary" />
                            </SwiperSlide>
                            <SwiperSlide  className="card-slide">
                                <ProductCard productName="Knitted Shrug" productImage={img3} productRating="3.5"  productPrice="$56.00" />
                            </SwiperSlide>
                            <SwiperSlide  className="card-slide">
                                <ProductCard productName="Blue Handbag" productImage={img4} productRating="3.5"  productPrice="$56.00" />
                            </SwiperSlide>
                            <SwiperSlide  className="card-slide">
                                <ProductCard productName="Pink Sweater" productImage={img5} productRating="3.5"  productPrice="$56.00" statusDetails="Sold" statusColor="warning" />
                            </SwiperSlide>
                            <SwiperSlide  className="card-slide">
                                <ProductCard productName="Pink Handbag" productImage={img6} productRating="3.5"  productPrice="$56.00" />
                            </SwiperSlide>
                            <SwiperSlide  className="card-slide">
                                <ProductCard productName="Casual Shoes" productImage={img1} productRating="3.5"  productPrice="$56.00" />
                            </SwiperSlide>
                    </Swiper>
                    <div className="swiper-button swiper-button-next"></div>
                    <div className="swiper-button swiper-button-prev"></div>
                </div>
            </Row>
        </Fragment>
    )
})
ProductSlider.displayName="ProductSlider"
export default ProductSlider