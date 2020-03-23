
import styled from 'styled-components'

export const ProductBoxes = styled.div`

p{color: red!important;}
/*=====================
    10.Product Box CSS start
==========================*/

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

  .slick-slider {
    .product-box {
      margin-bottom: 3px;
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
        transform:scale(1.2) rotate(2deg);
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

`