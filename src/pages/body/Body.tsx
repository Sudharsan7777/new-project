
import Box from "../../components/box/Box";
import Typography from "../../components/typography/typography";
import Presbutton from "../../components/button/Button";
import Cart from "../../components/cart/Cart";
import CartItems from "../../components/cart-items/CartItems";

const Body = () => {
  

  return (
    <>
      <div className="category">
        <div className="category-items1">
          <Box
            src="https://clauem2.arrowtheme.com/media/wysiwyg/fbuilder/mk2-cate-01.jpeg"
            alt="none"
          >
            <div className="women">
              <Typography msg="Women" tag="p" size="xl" color="white" bolder />
            </div>
          </Box>
        </div>
        <div className="category-items2">
          <Box
            src="https://clauem2.arrowtheme.com/media/wysiwyg/fbuilder/mk2-cate-02.jpeg"
            alt="none"
          >
            <div className="men">
              <Typography msg="Men" tag="div" size="xl" color="white" bolder />
            </div>
          </Box>
        </div>
        <div className="category-items3">
          <Box
            src="https://clauem2.arrowtheme.com/media/wysiwyg/fbuilder/mk2-cate-03.jpeg"
            alt="none"
          >
            <div className="accessories">
              <Typography
                msg="Accessories"
                tag="p"
                size="xl"
                color="white"
                bold
              />
            </div>
          </Box>
        </div>
        <div className="category-items4">
          <Box
            src="https://clauem2.arrowtheme.com/media/wysiwyg/fbuilder/mk2-cate-04.jpeg"
            alt="none"
          >
            <div className="shoes">
              <Typography msg="Shoes" tag="p" size="xl" color="white" bold />
            </div>
          </Box>
        </div>
        <div className="category-items5">
          <Box
            src="https://clauem2.arrowtheme.com/media/wysiwyg/fbuilder/mk2-cate-05.jpeg"
            alt="none"
          >
            <div className="new-arrival">
              <Typography
                msg="New Arrival"
                tag="p"
                size="xl"
                color="white"
                bold
              />
            </div>
          </Box>
        </div>
      </div>

      <div className="items">
        <div className="cart-items1">
          <Box
            src="https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/m/k/mk2-banner-02.jpeg"
            alt="none"
            className="banner-imag1"
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
          <CartItems src="https://clauem2.arrowtheme.com/media/catalog/product/cache/de6bec506494940b8fbc8b6822d59d20/2/7/27_5_1.jpg"
      itemName="vector shoes"
      price="$199.00"
      className="sample"/>
      <CartItems src="https://clauem2.arrowtheme.com/media/catalog/product/cache/de6bec506494940b8fbc8b6822d59d20/2/7/27_5_1.jpg"
      itemName="vector shoes"
      price="$199.00"
      className="sample"/>
      <CartItems src="https://clauem2.arrowtheme.com/media/catalog/product/cache/de6bec506494940b8fbc8b6822d59d20/2/7/27_5_1.jpg"
      itemName="vector shoes"
      price="$199.00"
      className="sample"/>
      <CartItems src="https://clauem2.arrowtheme.com/media/catalog/product/cache/de6bec506494940b8fbc8b6822d59d20/2/7/27_5_1.jpg"
      itemName="vector shoes"
      price="$199.00"
      className="sample"/>
 </div>
        <div className="cart-items2">
          <Box
            src="https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/m/k/mk2-banner-01.jpeg"
            alt="none"
            className="banner-imag2"
          >
            <div className="banner2">
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
          
          <CartItems src="https://clauem2.arrowtheme.com/media/catalog/product/cache/de6bec506494940b8fbc8b6822d59d20/2/7/27_5_1.jpg"
      itemName="vector shoes"
      price="$199.00"
      className="sample"/>
      <CartItems src="https://clauem2.arrowtheme.com/media/catalog/product/cache/de6bec506494940b8fbc8b6822d59d20/2/7/27_5_1.jpg"
      itemName="vector shoes"
      price="$199.00"
      className="sample"/>
      <CartItems src="https://clauem2.arrowtheme.com/media/catalog/product/cache/de6bec506494940b8fbc8b6822d59d20/2/7/27_5_1.jpg"
      itemName="vector shoes"
      price="$199.00"
      className="sample"/>
      <CartItems src="https://clauem2.arrowtheme.com/media/catalog/product/cache/de6bec506494940b8fbc8b6822d59d20/2/7/27_5_1.jpg"
      itemName="vector shoes"
      price="$199.00"
      className="sample"/>
          </div>
          </div>

      <div className="offers">
        <div className="offer-imag1">
          <Box
            src="https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/l/o/lookbook2016_3.jpg"
            alt="none"
            className="offer-image1"
          >
            <div className="offer-cart1">
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
          </div>  
          <div className="offer-imag1">
            <Box
              src="https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/s/u/summer-sale_3.jpg"
              alt="none"
              className="offer-image2"
            >
              <div className="offer-cart1">
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
            className="service-imag1"
          ></Box>
          <div className="service1-content1">
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
            className="service-imag2"
          ></Box>
          <div className="service1-content2">
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
            className="service-imag3"
          ></Box>
          <div className="service1-content3">
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

        <div className="service4">
          <Box
            src="https://cdn-icons-png.flaticon.com/512/1746/1746650.png"
            alt="none"
            width={30}
            height={30}
            className="service-imag4"
          ></Box>
          <div className="service1-content4">
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
    </>
  );
};

export default Body;
