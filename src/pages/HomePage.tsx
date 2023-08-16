import React from "react";
import CustomNavbar from "../components/navbar/NavBar";
import Imag from "../components/box-img/image";
import SideBar from "../components/sidebar/SideBar";
import Search from "../components/serachbox/SerchBox";
import Button from "../components/button/Button";
import Box from "../components/box/Box";
import Footer from "../components/footer/Footer";
import "./HomePage.css";
import Typography from "../components/typography/typography";
import Presbutton from "../components/button/Button";

export const HomePage = () => {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>

      <Imag />
      <SideBar />
      <div className="category">
        <Box
          src="https://clauem2.arrowtheme.com/media/wysiwyg/fbuilder/mk2-cate-01.jpeg"
          alt="none"
          width={200}
          height={70}
          className="category-items"
          style={{ marginRight: "50px" }}
        >
          <div className="women">
            <Typography msg="Women" tag="p" size="l" color="white" bolder />
          </div>
        </Box>
        <Box
          src="https://clauem2.arrowtheme.com/media/wysiwyg/fbuilder/mk2-cate-02.jpeg"
          alt="none"
          width={200}
          height={70}
          style={{ marginRight: "50px" }}
          className="category-items"
        >
          <div className="men">
            <Typography msg="Mens" tag="p" size="l" color="white" bolder />
          </div>
        </Box>
        <Box
          src="https://clauem2.arrowtheme.com/media/wysiwyg/fbuilder/mk2-cate-03.jpeg"
          alt="none"
          width={200}
          height={70}
          top={50}
          left={50}
          style={{ marginRight: "50px" }}
          className="category-items"
        >
          <div className="accessories">
            <Typography msg="Accessories" tag="p" size="l" color="white" bold />
          </div>
        </Box>
        <Box
          src="https://clauem2.arrowtheme.com/media/wysiwyg/fbuilder/mk2-cate-04.jpeg"
          alt="none"
          width={200}
          height={70}
          style={{ marginRight: "50px" }}
          className="category-items"
        >
          <div className="shoes">
            <Typography msg="Shoes" tag="p" size="l" color="white" bold />
          </div>
        </Box>
        <Box
          src="https://clauem2.arrowtheme.com/media/wysiwyg/fbuilder/mk2-cate-05.jpeg"
          alt="none"
          width={200}
          height={70}
          top={50}
          left={50}
          className="category-items"
        >
          <div className="new-arrival">
            <Typography msg="New Arrival" tag="p" size="l" color="white" bold />
          </div>
        </Box>
      </div>

      <div className="items">
        <div className="cart-iems1">
          <Box
            src="https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/m/k/mk2-banner-02.jpeg"
            alt="none"
            width={250}
            height={250}
          >
            <div className="banner1">
              <Typography
                msg="VIEW COLLECTIONS"
                size="l"
                color="black"
                tag="div"
                bold
              />
              <Typography
                msg="LOOKBOOK"
                size="xxl"
                color="black"
                tag="div"
                bolder
              />
              <Typography
                msg="your world of fashion in numbers"
                size="xs"
                color="grey"
                tag="div"
              />
            </div>
          </Box>

          <Box
            src="https://clauem2.arrowtheme.com/media/catalog/product/cache/de6bec506494940b8fbc8b6822d59d20/o/r/orson_prd_12_1_1_2.jpg"
            alt="none"
            width={200}
            height={180}
            className="cart1"
          >
            <Typography msg="cuffed beanie" tag="div" size="l" color="black" />
            <Typography msg="$115.0" tag="div" size="xs" color="black" bold />
          </Box>

          <Box
            src="https://clauem2.arrowtheme.com/media/catalog/product/cache/de6bec506494940b8fbc8b6822d59d20/1/4/14759082921406855888_1_1.jpg"
            alt="none"
            width={200}
            height={180}
            className="cart1"
          >
            <Typography msg="Brownie sneaky" tag="div" size="l" color="black" />
            <Typography msg="$6.0" tag="div" size="xs" color="black" bold />
          </Box>

          <Box
            src="https://clauem2.arrowtheme.com/media/catalog/product/cache/de6bec506494940b8fbc8b6822d59d20/o/r/orson_prd_24_1_2.jpg"
            alt="none"
            width={200}
            height={180}
            className="cart1"
          >
            <Typography msg="Pinl Leather" tag="div" size="l" color="black" />
            <Typography msg="$245.0" tag="div" size="xs" color="black" bold />
          </Box>

          <Box
            src="https://clauem2.arrowtheme.com/media/catalog/product/cache/de6bec506494940b8fbc8b6822d59d20/9/_/9_2_5.jpg"
            alt="none"
            width={200}
            height={180}
            className="cart1"
          >
            <Typography msg="Rose Gold" tag="div" size="l" color="black" />
            <Typography msg="$115.0" tag="div" size="xs" color="black" bold />
          </Box>
        </div>

        <div className="cart-iems2">
          <Box
            src="https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/m/k/mk2-banner-01.jpeg"
            alt="none"
            width={250}
            height={250}
          >
            <div className="banner1">
            
              <Typography
                msg="SUMMER SALE"
                size="l"
                color="black"
                tag="div"
                align="center"
                bold
              />
              <Typography
                msg="UP TO 70%"
                size="xl"
                color="black"
                tag="div"
                align="center"
                bolder
              />
              <Presbutton
                width={150}
                height={30}
                classname="shop"
                borderradius={20}
                text="Shop Now"
              />{" "}
            </div>
          </Box>

          <Box
            src="https://clauem2.arrowtheme.com/media/catalog/product/cache/59b1262395c63358e20f9f58438e2dce/8/_/8_1_6.jpg"
            alt="none"
            width={200}
            height={180}
            className="cart1"
          >
            <Typography msg="cuffed beanie" tag="div" size="l" color="black" />
            <Typography msg="$115.0" tag="div" size="xs" color="black" bold />
          </Box>
          <Box
            src="https://clauem2.arrowtheme.com/media/catalog/product/cache/de6bec506494940b8fbc8b6822d59d20/1/4/14759082921406855888_1_1.jpg"
            alt="none"
            width={200}
            height={180}
            top={120}
            left={30}
            className="cart1"
          >
            <Typography msg="Brownie sneaky" tag="div" size="l" color="black" />
            <Typography msg="$6.0" tag="div" size="xs" color="black" bold />
          </Box>
          <Box
            src="https://clauem2.arrowtheme.com/media/catalog/product/cache/de6bec506494940b8fbc8b6822d59d20/o/r/orson_prd_24_1_2.jpg"
            alt="none"
            width={200}
            height={180}
            top={120}
            left={25}
            className="cart1"
          >
            <Typography msg="Pinl Leather" tag="div" size="l" color="black" />
            <Typography msg="$245.0" tag="div" size="xs" color="black" bold />
          </Box>
          <Box
            src="https://clauem2.arrowtheme.com/media/catalog/product/cache/de6bec506494940b8fbc8b6822d59d20/9/_/9_2_5.jpg"
            alt="none"
            width={200}
            height={180}
            top={120}
            left={25}
            className="cart1"
          >
            <Typography msg="Rose Gold" tag="div" size="l" color="black" />
            <Typography msg="$115.0" tag="div" size="xs" color="black" bold />
          </Box>
        </div>
      </div>

      <div className="items2">
        <div className="cart-img">
          <Box
            src="https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/l/o/lookbook2016_3.jpg"
            alt="none"
            width={600}
            height={250}
          >
            <div className="cart-imag1">
              <Typography
                msg="LOOKBOOK 2023"
                size="xl"
                color="white"
                tag="div"
                align="center"
                bold
              />
              <Typography
                msg="MAKE LOVE THIS LOOK"
                size="l"
                color="white"
                tag="div"
                align="center"
                bolder
              />
            </div>
          </Box>
          <Box
            src="https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/s/u/summer-sale_3.jpg"
            alt="none"
            width={600}
            height={250}
          >
            <div className="cart-imag1">
              <Typography
                msg="SUMMER SALE"
                size="l"
                color="white"
                tag="div"
                align="center"
                bold
              />
              <Typography
                msg="UP TO 70%"
                size="xxl"
                color="white"
                tag="div"
                align="center"
                bolder
              />
            </div>
          </Box>
        </div>
      </div>

      <div className="cart-services">
        <div className="service1">
          <Box
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAZlBMVEX///8AAACSkpLGxsYrKyukpKTLy8tnZ2dhYWEnJyf39/cvLy/09PTb29tdXV23t7dBQUGKiop6enqtra3AwMDt7e00NDRISEjl5eXS0tKEhIQgICCdnZ0SEhIYGBg5OTlvb29SUlKZqQ/BAAADJUlEQVRoge2a6dKqMAyGEflUFmV3RdH7v8kjamgLAVoIOmcmz8+a9rWQJmmLZTEMwzAM8128LD74zhT8g52N087jy4ICtwjMxUMa7QrHdP7emUy7wjZTv5OKLxaJifha9HPPxd84iuQ2Sj6tO11Cz+yhKXip0Nd/93WXwwh3Vcj3MNRVt8sf9IimTPxN4MJgoWaPEjpsJ4tb1goGexjaGzlqJ2uzudwpp246maPhoxrCi2D95BrWNqinNOpWYTCgV/vcdId/k9frd9g2A1vD2NxDAkOuBk0fYHokUz/BkOshyy2xz73wdWdUZ1bd0KRDHTyLAUOw0w7LOgRXGLbfrs5udD5XUfvdstfs8LG60flcRY/fBWGSFKdXINp2W01DXUn5qUiS8JW9t+/w4t/T3GRlmhGKN5qn9/caKJ95JJDKnxLqWILErpJDmncjIXcLRFiX+SMWt3AZ24qwZp1sZMYRk4ksrJWmrFDZYEKo+mkG9QwTwtQvM4hb6DSxRqqyQqVAlBD129QiHgfzO2vfajrPIq5szz7srbjVNofPVSxbSrFIAABlWaHSCi3PeTYnP1QBjKepFCON9FEWsBHxZ/bdlG5dfZAnV8Gj1rheyo1wr+B4EP9prslLU9/lyqreLiT2Z5uesyMpNEqnZPFd1LKR7nhMD1cWRxPQrMghjfqAbBj50X9dXM7i22FrcsSSS4eNyRHnd99ebxXixbdz/PzsQNz7gbg4mPmF04k9QzhsOgOwVUR3ObMDqVR1eXvVZtmuCPuxl8ggakSNsTjbsXc2uynpOIxXqigoneWJRXg/ceSnRccggWxz/zTKG7xdR0ejVenrDAIVHKuzOqv/Sn1Dob4fq94V69ATr046BlFiHabedYpMH+dR9au9bLHKDAt+nUFQ9a/B6qzO6qzO6r9Vz9qJYiT40Ui/Ot2FIL5D71enux9hdVb/P9TpVhxejYM6XrCSiXfsRODkBD0xo7wcQu/46xN6v+9HAtq3kPInX4hb0N4JIjsh6V5o5TZ+o74Vax5IOup3i+nOdz84UUH7rU/F0S4dEPDXlB9xMQzDMAzT5B/mpTUUNNBRbgAAAABJRU5ErkJggg=="
            alt="none"
            width={30}
            height={30}
            className="service-img"
          ></Box>
          <div className="service1-content">
            <Typography
              msg="FREE SHIPPING "
              tag="div"
              size="l"
              color="black"
              bold
            />{" "}
            <Typography
              msg="FREE Free shipping on all US order or order above $200 "
              tag="div"
              size="xs"
              color="grey"
              align="justify"
              bold
            />
          </div>
        </div>

        <div className="service1">
          <Box
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAFcQL3sBeS0X0l7sjf_kTr_hoE0kWgqcQJw&usqp=CAU"
            alt="none"
            width={30}
            height={30}
            className="service-img"
          ></Box>
          <div className="service1-content">
            <Typography
              msg="SUPPORT 24/7 "
              tag="div"
              size="l"
              color="black"
              bold
            />{" "}
            <Typography
              msg="Contact us 24 hours a day, 7 days a week"
              tag="div"
              size="xs"
              color="grey"
              align="justify"
              bold
            />
          </div>
        </div>

        <div className="service1">
          <Box
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVlV9612OfDrizC30WjDBbUnriyY6hTNIxGg&usqp=CAU"
            alt="none"
            width={30}
            height={30}
            className="service-img"
          ></Box>
          <div className="service1-content">
            <Typography
              msg="30 DAYS RETURN"
              tag="div"
              size="l"
              color="black"
              bold
            />{" "}
            <Typography
              msg="Simply return it within 30 days for an exchange."
              tag="div"
              size="xs"
              color="grey"
              align="justify"
              bold
            />
          </div>
        </div>

        <div className="service1">
          <Box
            src="https://cdn-icons-png.flaticon.com/512/1746/1746650.png"
            alt="none"
            width={30}
            height={30}
            className="service-img"
          ></Box>
          <div className="service1-content">
            <Typography
              msg="100% PAYMENT SECURE"
              tag="div"
              size="l"
              color="black"
              bold
            />{" "}
            <Typography
              msg="We ensure secure payment with PEV"
              tag="div"
              size="xs"
              color="grey"
              align="justify"
              bold
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
