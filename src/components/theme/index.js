import styled from 'styled-components'
import * as GlobalVariables from './global-variables'
export const StyledGlobal = styled.div`
  font-family: ${GlobalVariables.fonts.primary};
  position: relative;
  background: ${GlobalVariables.colors.white};
  font-size: 14px;
  overflow-x: hidden;
  letter-spacing: 0.8px;


h1 {
  font-size: 60px;
  color: ${GlobalVariables.colors.darkGrey};
  font-weight: 700;
  text-transform: uppercase;
    span{
      font-size: 105px;
      font-weight: 700;
      color: red; 
    }
}
h2 {
  font-size: 36px;
  color: ${GlobalVariables.colors.darkGrey};
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.02em;
}
h3 {
  font-size: 24px;
  font-weight: 400;
  color: ${GlobalVariables.colors.darkGrey};
  letter-spacing:0.03em;
}
h4 {
  font-size: 18px;
  text-transform:capitalize;
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 1;
}
h5 {
  font-size: 16px;
  font-weight: 400;
  color: ${GlobalVariables.colors.darkGrey};
  line-height: 24px;
  letter-spacing: 0.05em;
}
h6 {
  font-size: 14px;
  font-weight: 400;
  color: ${GlobalVariables.colors.darkGrey};
  line-height: 24px;
}
ul {
  padding-left: 0;
  margin-bottom: 0;
}
li {
  display: inline-block;
}
p {
  font-size: 14px;
  color: $grey;
  line-height: 1;
}
a {
  transition: 0.5s ease;
  &:hover {
    text-decoration: none;
    transition: 0.5s ease;
  }
  &:focus {
    outline: none;
  }
}
button {
  &:focus {
    outline: none;
  }
}
.white {
  background-color: #fff;
  border: 1px solid #aaa;
}
.blue {
  background-color: #4695b1;
}
.pink {
  background-color: pink;
}
.yellow {
  background-color: #fdf791;
}
.red {
  background-color: #b65d60;
}
.gray {
  background-color: #bababa;
}
.green {
  background-color: #7ee768;
}
.orange {
  background-color: rgba(230, 184, 71, 0.92);
}
.black {
  background-color: #1b1b1b;
}
section ,.section-t-space{
  padding-top: 70px;
}
.section-b-space {
  padding-bottom: 70px;
}
.p-t-0 {
  padding-top: 0;
}
hr.style1{
  width: 75px;
  height: 3px;
  margin-top: 13px;
  background-color: ${GlobalVariables.colors.primary};
  text-align: center;
}



/*=====================
    10.Product Box CSS start
==========================*/
.absolute-product {
  .theme-tab {
    .tab-title {
      .current {
        a {
          font-weight: 700;
        }
      }
    }
  }
  .product-box {
    width: 100%;
    display: inline-block;
    padding-bottom: 10px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    .img-wrapper {
      border-radius: 5px 5px 0 0 ;
    }
    .product-detail {
      text-align: center;
      margin-top: 0;
      padding: 0 15px;
      .color-variant {
        padding-top: 5px;
        li {
          height: 16px;
          width: 16px;
        }
      }
      .cart-bottom {
        border-top: 1px solid #ddd;
        padding-top: 10px;
        margin-top: 10px;
        button {
          border: none;
          background-color: transparent;
        }
        i {
          color: #828282;
          font-size: 18px;
          padding-right: 7px;
          padding-left: 7px;
          transition: all 0.5s ease;
          &:hover {
            color: $theme-deafult;
            transition: all 0.5s ease;
          }
        }
      }
      .rating {
        margin-top: 10px;
      }
    }
  }
  .slick-slider {
    .product-box {
      margin-bottom: 3px;
    }
  }
  &.digital-product {
    .product-box {
      padding-bottom: 15px;
      .img-wrapper {
        .digital-wrapper {
          display: flex;
          width: 100%;
          .live-demo, .details_product {
            width: 50%;
            background-color: rgba($theme-deafult, 0.6);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 6px 0;
            position: absolute;
            bottom:0;
            h4 {
              margin-bottom: 0;
              line-height: 1.2;
            }
          }
          .live-demo {
            left: -50%;
            transition: all 0.5s ease;
          }
          .details_product {
            right: -50%;
            transition: all 0.5s ease;
            //border-left: 1px solid white;
          }
        }
      }
      .product-detail {
        h6 {
          padding-top: 15px;
          color: $black;
          font-weight: 700;
        }
        h4 {
          color: $black;
          font-weight: 100;
        }
      }
      &:hover {
        .img-wrapper {
          .digital-wrapper {
            .live-demo {
              left: 0;
              transition: all 0.5s ease;
            }
            .details_product {
              right: 0;
              transition: all 0.5s ease;
            }
          }
        }
      }
    }
  }
}
.product-m {
  .slick-slide {
    > div {
      margin: 0 10px;
    }
  }
}
.color-variant {
  li {
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 100%;
    margin-right: 5px;
    transition: all 0.1s ease;
    vertical-align: middle;
  }
}
.no-slider {
  .product-box {
    width: 100%;
    flex: 0 0 25%;
    max-width: calc(25% - 30px);
    margin: 0 15px 30px;
    &:nth-last-child(-n+4) {
      margin: 0 15px 0;
    }
  }
}
.product-para {
  p {
    margin-bottom: 0;
    padding-bottom: 25px;
    line-height: 24px;
    letter-spacing: 0.05em;
    margin-top: -7px;
  }
}
.portfolio-section {
  .article-title {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    color: white;
    transition: all 0.5s ease;
    text-align:center;
    float:left;
    font-size:18px;
    line-height:24px;
    a {
      color:white;
    }
  }
  .isotopeSelector {
    float:left;
    width:100%;
    position:relative;
    .overlay {
      position: relative;
      border: 1px solid $round-border;
    }
    img {
      width:100%;
      height:auto;
    }
  }
  .isotopeSelector {
    margin-bottom: 30px;
    img {
      transition:all .4s ease;
    }
    .overlay-background {
      transform:scale(0);
      transition:all .4s ease;
      i {
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: white;
        padding: 10px;
        border-radius: 100%;
        transform: translate(-50%, -50%);
        color: $theme-deafult;
        font-size: 22px;
        display: none;
        transition: all 0.4s ease;
        width: 40px;
        height: 40px;
        align-items: center;
        justify-content: center;
      }
    }
    &:hover {
      img {
        transform:scale(1.1);
        transition:all .4s ease;
      }
      .overlay-background {
        transform: scale(1);
        border: 3px solid white;
        position: absolute;
        left: 0;
        top:0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: rgba($theme-deafult, 0.2);
        transition: all 0.4s ease;
        i {
          display: flex;
          transition: all 0.4s ease;
        }
      }
    }
  }
  .border-portfolio {
    margin: 3px;
    overflow: hidden;
  }
  #form1 {
    padding-bottom: 20px;
  }
  .filter-button {
    padding: 0 24px;
    font-size: 20px;
    line-height: 35px;
    border: none;
    background-color: white;
    &.active {
      background-color: $theme-deafult;
      color: $white;
    }
  }
  &.fullwidth-portfolio {
    .isotopeSelector {
      padding-left: 7px;
      padding-right: 7px;
      margin-bottom: 14px;
    }
  }
  &.metro-section {
    .isotopeSelector {
      &:hover {
        img {
          //transform: scale(1) rotate(0deg);
          //transition: all 0.5s ease;
        }
      }
    }
    .product-box {
      .product-detail {
        opacity: 0;
        position: absolute;
        background-color: $white;
        padding: 10px;
        transition: all 0.5s ease;
        width: 65%;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: -10px;
        text-align: center;
        h6 {
          color: #525252;
          padding-top: 0;
          margin-top: -2px;
        }
        h4 {
          font-weight: 400;
          color: $black;
        }
      }
      .cart-wrap {
        top: 7px;
        right: 7px;
        opacity: 1;
        button {
          border: 1px solid $white;
          border-radius: 100%;
          background-color: rgba($white, 0.8);
          opacity: 1;
          i {
            padding: 7px;
            color: $font-color;
          }
        }
        a {
          i {
            border-radius: 100%;
            border: 1px solid $white;
            margin: 5px 0;
            background-color: rgba($white, 0.8);
            padding: 7px;
            color: $font-color;
            opacity: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      &:hover {
        .product-detail {
          opacity: 1;
          transition: all 0.5s ease;
          bottom: 15px;
        }
        .cart-wrap {
          button {
            animation: none;
          }
          a {
            i {
              opacity: 1;
            }
            &:nth-child(2) {
              i {
                animation: fadeInDown 500ms ease-in-out;
              }
            }
            &:nth-child(3) {
              i {
                animation: fadeInDown 700ms ease-in-out;
              }
            }
            &:nth-child(4) {
              i {
                animation: fadeInDown 1000ms ease-in-out;
              }
            }
          }
        }
      }
    }
  }
}
.product-box, .product-wrap {
  position: relative;
  transition: all 0.5s ease;
  &.product-wrap {
    //padding-bottom: 15px;
  }
  .img-block {
    background-color: $grey-lighter;
    position: relative;
    overflow: hidden;
    .front {
      opacity: 1;
      top:0;
      left: 0;
      transition: all 0.5s ease;
    }
    .back {
      opacity: 0;
      position: absolute;
      backface-visibility: hidden;
      top:0;
      left: 0;
      transition: all 0.5s ease;
      transform: translateX(-100px);
    }
    .lable-wrapper {
      margin: 0 auto;
      top: 40px;
      position: absolute;
      left: 0;
      right: 0;
      text-align: center;
      transition: all 0.5s ease;
      z-index: 2;
      .lable1, .lable2 {
        font-size: 14px;
        padding: 10px 14px 10px 20px;
        display: inline-block;
        text-transform: uppercase;
        text-align: center;
      }
      .lable1 {
        background-color: $theme-deafult;
        color: $white;
        border-bottom-left-radius: 25px;
        border-top-left-radius: 25px;
      }
      .lable2 {
        background-color: $white;
        color: $black;
        border-bottom-right-radius: 25px;
        border-top-right-radius: 25px;
      }
    }
  }
  .img-wrapper {
    position: relative;
    overflow: hidden;
    .front {
      opacity: 1;
      top:0;
      left: 0;
      transition: all 0.5s ease;
    }
    .back {
      opacity: 0;
      position: absolute;
      backface-visibility: hidden;
      top:0;
      left: 0;
      transition: all 0.5s ease;
      transform: translateX(-100px);
    }
    .cart-box {
      position: absolute;
      margin: 0 auto;
      display: inline-block;
      right: 0;
      left: 0;
      border-radius: 50px;
      width: max-content;
      padding: 12px 15px;
      box-shadow: 0 0 12px 0 $round-border;
      bottom: 30px;
      background-color: $white;
      opacity: 0;
      transition: all 0.2s ease;
      button {
        background: none;
        box-shadow: none;
        border: none;
        padding: 0;
      }
      i {
        color: #bbbbbb;
        font-size: 18px;
        padding-left: 8px;
        padding-right: 8px;
        transition: all 0.2s ease;
        display: inline-block;
        &:hover {
          color: $theme-deafult;
          transition: all 0.2s ease;
        }
      }
    }
    .lable-block {
      .lable3 {
        border-radius: 100%;
        background-color: $theme-deafult;
        text-align: center;
        font-size: 14px;
        font-weight: 700;
        position: absolute;
        padding: 12px 6px;
        text-transform: uppercase;
        color: $white;
        top: 7px;
        left: 7px;
      }
      .lable4 {
        position: absolute;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        writing-mode: vertical-rl;
        transform: rotate(-180deg);
        top: 7px;
        right:7px;
        letter-spacing: 0.1em;
      }
    }
    .product-thumb-list{
      position: absolute;
      bottom: 0;
      left: 0;
      li{
        display: block;
        opacity: 0.3;
        &.active{
          opacity:1;
        }
        img{
          height: 50px;
        }
      }
    }
  }
  .cart-info, .cart-wrap {
    position: absolute;
    bottom: 40px;
    text-align: center;
    margin: 0 auto;
    display: inline-block;
    right:0;
    left: 0;
    justify-content: center;
    opacity: 0;
    transition: all 0.5s ease;
    a {
      [class^="icon-"], [class*=" icon-"] {
        display: inline-block;
      }
    }
    &.cart-wrap {
      bottom: 0;
      text-align: right;
      left: unset;
      i {
        display: block;
        padding-bottom: 10px;
        padding-top: 10px;
      }
      &.cart-effect-left {
        left:0;
        right:unset;
      }
    }
    button {
      background: none;
      box-shadow: none;
      border: none;
      padding: 0;
    }
    i {
      color: #bbbbbb;
      font-size: 18px;
      padding-right: 10px;
      padding-left: 10px;
      &:hover {
        color: $theme-deafult;
      }
    }
  }
  .cart-detail{
    position: absolute;
    top:15px;
    right:20px;
    opacity: 0;
    i {
      color: $icon;
      font-size: 18px;
      display: flex;
      padding-top: 8px;
      padding-bottom: 8px;
    }
    button {
      background: none;
      box-shadow: none;
      border: none;
      padding: 0;
    }
  }
  .product-detail, .product-info{
    padding-left: 5px;
    .rating {
      margin-top: 15px;
      i {
        padding-right: 5px;
        &:nth-child(-n + 4){
          color: $star-yellow;
        }
        &:last-child {
          color:$round-border;
        }
      }
    }
    h6 {
      line-height: 1;
      margin-bottom: 0;
      padding-top: 2px;
      padding-bottom: 5px;
      transition: all 0.5s ease;
      font-size: 16px;
    }
    h4 {
      font-size: 18px;
      color: $dark-font;
      font-weight: 700;
      margin-bottom: 0;
      transition: all 0.5s ease;
    }
    .color-variant {
      padding-top: 15px;
      li {
        display: inline-block;
        height: 20px;
        width: 20px;
        border-radius: 100%;
        margin-right: 5px;
        transition: all 0.1s ease;
        cursor: pointer;
      }
    }
  }
  .product-info {
    padding: 0;
    text-align: center;
    position: relative;
    .add-btn {
      position: absolute;
      bottom: 110px;
      margin: 0 auto;
      left: 0;
      right: 0;
      opacity: 0;
      transition: all 0.2s ease;
      z-index: 1;
      i {
        color: $theme-deafult;
      }
      .btn-outline {
        transition: all 0.2s ease;
        color: $theme-deafult;
        &:hover {
          color: $white;
          i {
            color: $white;
          }
        }
      }
    }
  }
  &.effect-center {
    .front {
      img {
        transition: all 0.5s ease;
      }
    }
    .img-wrapper {
      .cart-box {
        bottom: 20%;
        transition: all 0.5s ease;
      }
    }
  }
  &:hover {
    &.effect-center {
      .front {
        img {
          opacity: 0.3;
          transition: all 0.5s ease;
        }
      }
      .img-wrapper {
        .cart-box {
          bottom: 35%;
          transition: all 0.5s ease;
        }
      }
    }
    .img-block, .img-wrapper {
      .first {
        opacity: 0;
        transition: all 0.5s ease;
      }
      .back {
        opacity: 1;
        transition: all 0.5s ease;
        transform: translateX(0);
      }
    }
    .cart-info {
      opacity: 1;
      transition: all 0.5s ease;
      button {
        animation: fadeInUp 300ms ease-in-out;
      }
      a {
        &:nth-child(2) i{
          animation: fadeInUp 500ms ease-in-out;
        }
        &:nth-child(3) i{
          animation: fadeInUp 700ms ease-in-out;
        }
        &:nth-child(4) i{
          animation: fadeInUp 1000ms ease-in-out;
        }
      }
    }
    .cart-wrap {
      button {
        animation: fadeInRight 300ms ease-in-out;
      }
      a {
        &:nth-child(2) i{
          animation: fadeInRight 500ms ease-in-out;
        }
        &:nth-child(3) i{
          animation: fadeInRight 700ms ease-in-out;
        }
        &:nth-child(4) i{
          animation: fadeInRight 1000ms ease-in-out;
        }
      }
      &.cart-effect-left {
        button {
          animation: fadeInLeft 300ms ease-in-out;
        }
        a {
          &:nth-child(2) i{
            animation: fadeInLeft 500ms ease-in-out;
          }
          &:nth-child(3) i{
            animation: fadeInLeft 700ms ease-in-out;
          }
          &:nth-child(4) i{
            animation: fadeInLeft 1000ms ease-in-out;
          }
        }
      }
    }
    .cart-detail {
      opacity: 1;
      transition: all 0.5s ease;
      button {
        animation: fadeInRight 300ms ease-in-out;
      }
      a {
        &:nth-child(2) i{
          animation: fadeInRight 500ms ease-in-out;
        }
        &:nth-child(3) i{
          animation: fadeInRight 700ms ease-in-out;
        }
        &:nth-child(4) i{
          animation: fadeInRight 1000ms ease-in-out;
        }
      }
    }
    .product-info {
      .add-btn {
        opacity: 1;
        transition: all 0.2s ease;
        animation: fadeInUp 500ms ease-in-out;
      }
    }
    .img-wrapper {
      .cart-box {
        opacity: 1;
        transition: all 0.2s ease;
        animation: fadeInUp 400ms ease-in-out;
      }
    }
  }
}
.addtocart_count {
  position: relative;
  .product-box {
    .product-detail {
      text-align: center;
    }
    .cart-info {
      bottom: 40px;
      right: 10px;
      a {
        i {
          background-color: #e2e2e2;
          border-radius: 100%;
          margin: 10px 0;
          padding: 8px;
          font-size: 16px;
          color: #313131;
        }
      }
    }
    .add-button {
      background-color: #efefef;
      color: black;
      text-align: center;
      font-size: 18px;
      text-transform: capitalize;
      width: 100%;
      padding: 5px 0;
      transition: all 0.5s ease;
      border: none;
      cursor: pointer;
    }
    &:hover {
      .cart-info {
        a {
          &:nth-child(1) {
            i {
              animation: fadeInRight 300ms ease-in-out;
            }
          }
        }
      }
      .add-button {
        bottom: 0;
        transition: all 0.5s ease;
      }
    }
  }
  .addtocart_btn {
    position: relative;
    .cart_qty {
      width: 100%;
      &.qty-box {
        position: absolute;
        bottom: 0;
        display: none;
        .input-group {
          .form-control {
            width: 100%;
            &:focus {
              border-color: #efefef;
              box-shadow: none;
            }
          }
          button {
            background: $grey3 !important;
            position: absolute;
            height: 100%;
            z-index: 9;
            &.quantity-left-minus {
              left: 0;
            }
            &.quantity-right-plus {
              right: 0;
            }
          }
          button {
            i {
              color: $black;
            }
          }
        }
      }
      &.open {
        display: block;
      }
    }
  }
}
.game-product {
  .theme-tab {
    .tab-title,.tab-title2  {
      .current {
        a {
          border-bottom: 2px solid $theme-deafult;
          padding-bottom: 5px;
        }
      }
    }
  }
  .product-box {
    .product-detail {
      text-align: center;
    }
    .cart-info {
      bottom: 40px;
      right: 10px;
      a {
        i {
          background-color: white;
          border-radius: 100%;
          margin: 10px 0;
          padding: 8px;
          font-size: 16px;
        }
      }
    }
    .add-button {
      background-color: $theme-deafult;
      color: white;
      text-align: center;
      font-size: 18px;
      text-transform: capitalize;
      position: absolute;
      width: 100%;
      bottom: -40px;
      padding: 5px 0;
      transition: all 0.5s ease;
      cursor: pointer;
    }
    &:hover {
      .cart-info {
        a {
          &:nth-child(1) {
            i {
              animation: fadeInRight 300ms ease-in-out;
            }
          }
        }
      }
      .add-button {
        bottom: 0;
        transition: all 0.5s ease;
      }
    }
  }
  .img-wrapper {
    img {
      width: 100%;
    }
  }
}


/*=====================
    11.Theme tab CSS start
==========================*/
.react-tabs__tab--selected {
  background: unset !important;
  border-color:transparent !important;
  color: $theme-deafult !important; ;
  border-radius: 0 !important;
  .nav-link {
    color: $theme-deafult !important;
  }
}
.tab-content {
  &.nav-material {
    .react-tabs__tab--selected {
      border-bottom: 2px solid $theme-deafult !important;
    }
  }
}
.react-tabs__tab {
  &:focus {
    border-color: transparent !important;
    box-shadow:none !important;
  }
}
.theme-tab {
  position: relative;
  .tab-content {
    display: block;
    &[style="display: block;"]{
      .product-box, .tab-box {
        animation: zoomIn 300ms ease-in-out;
      }
    }
    .product-tab {
      .tab-box {
        background-color: $white;
        width: 100%;
        flex: 0 0 25%;
        max-width: calc(25% - 10px);
        margin: 0 5px 10px;
        &:nth-last-child(-n + 4) {
          margin: 0 5px 0;
        }
        .product-box2 {
          img {
            height: 250px;
            padding: 15px;
            transition: all 0.5s ease;
          }
          .media {
            .media-body {
              .rating {
                margin-top: 0;
                i {
                  padding-right: 0;
                  &:nth-child(-n + 4) {
                    color: $star-yellow;
                  }
                  &:last-child {
                    color: $round-border;
                  }
                }
              }
              a {
                h6 {
                  margin-right: 35px;
                  line-height: 17px;
                  margin-top: 5px;
                  margin-bottom: 0;
                }
              }
              h4 {
                font-size: 20px;
                margin-top: 5px;
                font-weight: 700;
                color: $dark-font;
                margin-bottom: 0;
              }
              .color-variant {
                li {
                  display: inline-block;
                  height: 20px;
                  width: 20px;
                  border-radius: 100%;
                  margin-right: 2px;
                  margin-top: 20px;
                  transition: all 0.1s ease;
                  margin-bottom: 0;
                  cursor: pointer;
                }
              }
            }
          }
        }
        &:hover {
          .product-box2 {
            img {
              transform: scale(1.03);
              transition: all 0.5s ease;
            }
          }
        }
      }
    }
  }
  .tab-title, .tab-title2 {
    text-align: center;
    font-size: 18px;
    margin-bottom: 25px;
    margin-top: -9px;
    .current {
      a {
        color: $theme-deafult;
      }
    }
    li {
      padding-left: 25px;
      padding-right: 25px;
      padding-top: 0;
      line-height: 1;
    }
    a {
      color: $grey-dark;
      text-transform: uppercase;
    }
  }
  .tab-title2 {
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: -8px;
    &:after {
      content: "";
      position: absolute;
      border: 1px solid $border-grey;
      width: 100%;
      left: 0;
      top: 17px;
      z-index: -1;
    }
    .current {
      background-color: $white;
      a {
        background-color: $white;
      }
    }
  }
}
.tab-bg {
  background-color: lighten( $theme-deafult, 37% );
  padding: 70px 50px 60px 50px;
  &.tab-grey-bg {
    background-color: $grey-lighter;
  }
  .theme-tab {
    .tab-title {
      margin-bottom: 30px;
    }
  }
}


/*=====================
    12.Banner CSS start
==========================*/
.full-banner {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 190px;
  padding-bottom: 190px;
  background-position: center;
  @for $i from 1 through 28 {
    &.parallax-banner#{$i} {
      background-image:url("#{$assetspath}/parallax/#{$i}.jpg");
    }
  }
  &.parallax-layout {
    padding-top: 350px;
    padding-bottom: 350px;
    .banner-contain {
      h4 {
        color: $grey-shade;
      }
    }
  }
  &.banner-layout-3 {
    .banner-contain {
      h4 {
        color: $white;
      }
      h3 {
        color: $white;
        margin-top: 10px;
      }
      .color {
        color: $theme-deafult;
        line-height: 1;
      }
    }
  }
  &.parallax{
    background-attachment: fixed;
  }
  &.p-left {
    .banner-contain{
      float: left;
    }
  }
  &.p-right {
    .banner-contain{
      float: right;
    }
  }
  &.p-center {
    .banner-contain{
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
  .banner-contain {
    .btn-solid, .btn-outline {
      margin-top: 20px;
    }
    h2 {
      font-size: 100px;
      font-weight: 700;
      color: $theme-deafult;
      text-transform: uppercase;
      margin-top: -15px;
    }
    h3 {
      font-size: 60px;
      color: $font-color;
      text-transform: uppercase;
      font-weight: 700;
    }
    h4 {
      font-size: 24px;
      color: $grey;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5em;
      padding-top: 10px;
      margin-bottom: -5px;
      line-height: 1.3;
    }
  }
}
.parallax-cls {
  section {
    &:nth-child(odd) {
      .full-banner {
        background-position: right;
      }
    }

    &:nth-child(even) {
      .full-banner {
        background-position: left;
      }
    }
    .banner-contain {
      margin-top: -12px;
    }
  }
}



`

