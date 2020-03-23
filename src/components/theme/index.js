import styled from 'styled-components'
import {ProductBoxes} from './product-boxes'
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
no-arrow {
  .slick-next , .slick-prev {
    display: none !important;
  }
}
.icon-angle-left:before {
  content: "\E64A";
}
.form-control {
  border-radius: 0;
}
.small-section {
  padding-top: 35px;
  padding-bottom: 35px;
}
.banner-padding {
  padding-top: 30px;
}
.border-section {
  border-top: 1px solid lighten($black, 86.5%);
  border-bottom: 1px solid lighten($black, 86.5%);
}
.border-b {
  border-bottom: 1px solid $border-color;
}
.border-bottom-grey {
  border-bottom: 1px solid $grey3;
}
.border-top-grey {
  border-top: 1px solid $grey3;
}
.darken-layout{
  background-color: $grey-darken;
}
.dark-layout{
  background-color: $grey-dark;
}
.light-layout{
  background-color: $grey-lighter;
}
.white-layout {
  background-color: $white;
}
.bg-light0 {
  background-color:$light-grey;
}
.bg-light1 {
  background-color:$pink ;
}
.bg-light2 {
  background-color:$blue ;
}
.bg-blog {
  background-color: $white-dark;
}
.Toastify__toast {
  min-height: 36px;
}
.input-range__track--active{
  background: $theme-deafult !important;
}
.input-range__slider {
  background: $theme-deafult !important;
  border: 1px solid $theme-deafult !important;
}
.block-price-content{
  .custom-control {
    padding-right: 1.5rem;
    padding-bottom: 18px;
  }
}
del {
  font-size: 14px;
  color: $font-grey;
  font-weight: 400;
}
.sidenav .sidebar-back {
  display: flex;
  align-items: center;
}
.srv-validation-message {
  color: red;
}
.sticky {
  &.fixed {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999;
    transition: all 300ms ease;
    background: #fff;
    box-shadow: 0px 0px 8px #ddd;
    animation: smoothScroll 1s forwards;
    .brand-logo{
      padding-top: 15px;
      padding-bottom: 15px;
    }
    .onhover-div {
      .show-div {
        top:66px;
      }
    }
    .pixelstrap > li > a, .pixelstrap > li > a:hover, .pixelstrap > li > a:active{

    }
    .onhover-div {

    }

    .top-header {
      display: none;
    }
    .cart-qty-cls {
      top: 13%;
      right: -11px;
    }
  }
}
@-webkit-keyframes smoothScroll {
  0% {
    -webkit-transform: translateY(-40px);
    transform: translateY(-40px);
  }
  100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
}
@keyframes smoothScroll {
  0% {
    -webkit-transform: translateY(-40px);
    transform: translateY(-40px);
  }
  100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
}
.shopping-cart {
  &::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #ddd;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: $theme-deafult;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}
[data-notify="progressbar"] {
  margin-bottom: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
}
.progress-bar{
  background-color: #19a340;
}
.progress-bar-info{
  background-color: #00829a;
}
// image ratio //
.ratio_40{
  .bg-size {
    &:before {
      padding-top: 40%;
      content: "";
      display: block;
    }
  }
}
.ratio_45{
  .bg-size {
    &:before {
      padding-top: 45%;
      content: "";
      display: block;
    }
  }
}
.ratio2_1{
  .bg-size {
    &:before {
      padding-top: 50%;
      content: "";
      display: block;
    }
  }
}
.ratio2_3 {
  .bg-size {
    &:before {
      padding-top: 60%;
      content: "";
      display: block;
    }
  }
}
.ratio3_2{
  .bg-size {
    &:before {
      padding-top: 66.66%;
      content: "";
      display: block;
    }
  }
}
.ratio_landscape{
  .bg-size {
    &:before {
      padding-top: 75%;
      content: "";
      display: block;
    }
  }
}
.ratio_square{
  .bg-size {
    &:before {
      padding-top: 100%;
      content: "";
      display: block;
    }
  }
}
.ratio_asos{
  .bg-size {
    &:before {
      padding-top: 127.7777778%;
      content: "";
      display: block;
    }
  }
}
.ratio_portrait{
  .bg-size {
    &:before {
      padding-top: 150%;
      content: "";
      display: block;
    }
  }
}
.ratio1_2{
  .bg-size {
    &:before {
      padding-top: 200%;
      content: "";
      display: block;
    }
  }
}
.b-top {
  background-position: top !important;
}
.b-bottom {
  background-position: bottom !important;
}
.b-center {
  background-position: center !important;
}
.b_size_content {
  background-size: contain !important;
  background-repeat: no-repeat;
}


/*=====================
    1.1.Button CSS start
==========================*/
button {
  cursor: pointer;
}
.btn{
  line-height: 20px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  border-radius: 0;
  transition: .3s ease-in-out;
  &:hover {
    transition: .3s ease-in-out;
  }
  &:focus{
    box-shadow: none;
  }
}
.btn-solid {
  padding:13px 29px;
  color: $white !important;
  letter-spacing: 0.05em;
  border: 2px solid $theme-deafult;
  background-image: -webkit-linear-gradient(30deg, $theme-deafult 50%, transparent 50%);
  background-image: linear-gradient(30deg, $theme-deafult 50%, transparent 50%);
  background-size: 540px;
  background-repeat: no-repeat;
  background-position: 0;
  -webkit-transition: background 300ms ease-in-out;
  transition: background 300ms ease-in-out;
  &:hover{
    background-position: 100%;
    color: $black !important;
    background-color: $white;
  }
  &.black-btn {
    background-image: -webkit-linear-gradient(30deg, $dark-font 50%, transparent 50%);
    background-image: linear-gradient(30deg, $dark-font 50%, transparent 50%);
    border: 2px solid $dark-font;
  }
  &:focus {
    color: $white;
  }
}
.btn-outline {
  display:inline-block;
  padding:13px 29px;
  letter-spacing: 0.05em;
  border:2px solid $theme-deafult;
  position:relative;
  color: $black;
  &:before {
    -webkit-transition:0.5s all ease;
    transition:0.5s all ease;
    position:absolute;
    top:0;
    left:50%;
    right:50%;
    bottom:0;
    opacity:0;
    content:'';
    background-color:$theme-deafult;
    z-index:-2;
  }
  &:hover {
    color: $white;
    &:before {
      -webkit-transition:0.5s all ease;
      transition:0.5s all ease;
      left:0;
      right:0;
      opacity:1;
    }
  }
  &:focus {
    &:before {
      transition:0.5s all ease;
      left:0;
      right:0;
      opacity:1;
    }
  }
}
button {
  &.btn {
    &.btn-solid, &.btn-outline {
      &:active {
        background-image: -webkit-linear-gradient(30deg, $theme-deafult 50%, transparent 50%);
        background-image: linear-gradient(30deg, $theme-deafult 50%, transparent 50%);
        color: $white;
        background: $theme-deafult;
      }
    }
  }
}
.btn-classic {
  &:hover {
    background-color: $theme-deafult;
  }
}
.btn-theme {
  background-color: $theme-deafult;
  color: $white;
}


/*=====================
    1.2.Title CSS start
    ==========================*/
.title1 {
  text-align: center;

  h4 {
    color: $theme-deafult;
    padding-bottom: 10px;
    margin-bottom: 0;
    margin-top: -3px;
  }

  .title-inner1 {
    padding-bottom: 15px;
    margin-bottom: 30px;
    position: relative;

    &:after {
      position: absolute;
      height: 5px;
      width: 70px;
      background-color: $theme-deafult;
      content: "";
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: 0;
    }
  }
  &.title5 {
    .title-inner1 {
      padding-bottom: 0;
      margin-bottom: 0;
      &:after {
        display: none;
      }
    }
    hr[role="tournament6"] {
      border: 0px solid;
      height: 1px;
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba($theme-deafult, 0.75), rgba(0, 0, 0, 0));
      display: block;
      width: 25%;
      margin: 15px auto 30px auto;
    }
    hr[role="tournament6"]::before {
      position: absolute;
      background-color: #efefef;
      border: 1px solid;
      border-color: $theme-deafult;
      padding: 5px;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      left: 50%;
      margin: -6px 0px 0px 0;
      content: "";
    }
  }
}
.title2 {
  text-align: center;
  h4{
    color: $theme-deafult;
    padding-bottom: 10px;
    margin-bottom: 0;
    text-transform: uppercase;
    margin-top: -3px;
  }
  .title-inner2{
    margin-bottom: 50px;
    position: relative;
    display: inline-block;
    padding: 0 25px;
    &:after{
      position: absolute;
      height:5px;
      width: 100%;
      background-color:lighten( $theme-deafult, 10% );
      content: "";
      left: 0;
      right: 0;
      margin:0 auto;
      bottom: 3px;
      z-index: -1;
    }
  }
}
.title3 {
  text-align: center;
  h4{
    color: $theme-deafult;
    padding-bottom: 10px;
    margin-bottom:5px;
    margin-top: -3px;
  }
  .title-inner3{
    margin-bottom: 20px;
    position: relative;
    margin-top: -5px;
  }
  .line {
    position: relative;
    height:5px;
    width: 45px;
    background-color: $theme-deafult;
    content: "";
    left: 0;
    right: 0;
    margin:0 auto;
    bottom: 0;
    margin-bottom: 50px;
    &:after,&:before {
      position: absolute;
      height:5px;
      width: 10px;
      content: "";
      background-color: $theme-deafult;
    }
    &:after{
      right:50px;
    }
    &:before {
      left: 50px;
    }
  }
}
.title4 {
  text-align: center;
  .title-inner4 {
    padding-bottom: 25px;
    margin-bottom: 0;
    position: relative;
    margin-top: -5px;
  }
  .line {
    position: relative;
    height: 1px;
    width: 180px;
    background-color: $theme-deafult;
    margin: 0 auto;
    margin-bottom: 55px;
    bottom: 0;
    top:0;
    &:after,&:before{
      position: absolute;
      height: 10px;
      width: 10px;
      content: "";
      background-color: $theme-deafult;
      top: -4px;
    }
    &:after {
      left: 78px;
    }
    &:before {
      left: 64px;
    }
    span {
      &:after,&:before{
        position: absolute;
        height: 10px;
        width: 10px;
        content: "";
        background-color: $theme-deafult;
        top: -4px;
      }
      &:after {
        right: 78px;
      }
      &:before {
        right: 64px;
      }
    }
  }
}
.title-borderless {
  margin-bottom: 30px;
  text-align: center;
  margin-top: -5px;
}


/*=====================
LOGO
==========================*/


.logo-img{
  width:30px;
}
.logo-block {
  a {
    &:focus {
      outline: none;
    }
  }

  img {
    filter: grayscale(100%);
    opacity: 0.5;
    transition: .5s ease;
    margin: 0 auto;
    &:focus {
      outline: none;
    }

    &:hover {
      filter: grayscale(0);
      opacity: 1;
      transition: .5s ease;
    }
  }
}


/*=====================
    2.Header CSS start
==========================*/
header {
  background-color: $white;
}
.onhover-dropdown {
  position: relative;
  font-size: 14px;
  &:before {
    content: "\f107";
    font-family: $font-awesome;
    position: absolute;
    right: 3px;
  }
  .onhover-show-div {
    top: 50px;
    position: absolute;
    z-index: 10;
    background-color: $white;
    transition: all linear 0.3s;
    min-width: 160px;
    text-align: left;
    -webkit-box-shadow: 0 0 1px 0 #ebebeb;
    -moz-box-shadow: 0 0 1px 0 #ebebeb;
    box-shadow: 0 0 1px 0 #ebebeb;
    transform: translateY(30px);
    opacity: 0;
    visibility: hidden;
    right:0;
    padding: 15px 20px;
    border-radius: 0 !important;
    &.product-page-full {
      z-index: 99999;
    }
  }
  &:hover {
    .onhover-show-div {
      opacity: 1;
      transform: translateY(0px);
      visibility: visible;
    }
  }
}
.onhover-div {
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;
  font-family: $font_0, $font_1;
  img, i {
    cursor: pointer;
  }
  .show-div {
    top: 103px;
    position: absolute;
    z-index: 9;
    background-color: $white;
    transition: all linear 0.3s;
    min-width: 236px;
    text-align: left;
    -webkit-box-shadow: 0 0 1px 0 #ebebeb;
    -moz-box-shadow: 0 0 1px 0 #ebebeb;
    box-shadow: 0 0 1px 0 #ebebeb;
    transform: translateY(30px);
    opacity: 0;
    visibility: hidden;
    right:0;
    padding: 0;
    border-radius: 0 !important;

  }
  &:hover {
    .show-div {
      opacity: 1;
      transform: translateY(0px);
      visibility: visible;
    }
  }
}
.search-overlay{
  height: 100%;
  width: 100%;
  display: none;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: lighten($white, 5%);
  > div{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .overlay-content{
      width: 100%;
      .form-control {
        &:focus {
          box-shadow: none;
        }
      }
      input{
        background-color: transparent;
        border: 0;
        border-bottom: 2px solid lighten($black, 46.5%);
        border-radius: 0;
        padding: 20px 0;
        &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
          color: lighten($black, 46.5%);
          font-size: 18px;
        }
        &::-moz-placeholder { /* Firefox 19+ */
          color: lighten($black, 46.5%);
          font-size: 18px;
        }
        &:-ms-input-placeholder { /* IE 10+ */
          color: lighten($black, 46.5%);
          font-size: 18px;
        }
        &:-moz-placeholder { /* Firefox 18- */
          color: lighten($black, 46.5%);
          font-size: 18px;
        }
      }
      button{
        position: absolute;
        top: 10px;
        background-color: transparent;
        border: 0;
        font-size: 24px;
        color: lighten($black, 46.5%);
        right: 10px;
      }
    }
    .closebtn{
      position: fixed;
      top: 10px;
      right: 25px;
      color:lighten($black, 46.5%);
      font-size: 40px;
      cursor: pointer;
    }
  }
}
.top-header {
  background-color: $top-header;
  .header-contact {
    padding: 15px 0;
    li {
      color: $header-font;
      font-size: 14px;
      padding-right: 25px;
      i {
        color: $theme-deafult;
        padding-right: 10px;
      }
    }
  }
  .header-dropdown {
    li {
      cursor: pointer;
      color:$header-font;
      padding: 15px 25px;
      padding-right: 20px;
      font-size: 14px;
      &:first-child {
        padding-right: 0;
      }r
      &:nth-child(2) {
        padding-right: 25px;
      }
      a {
        text-transform: capitalize;
        color:$header-font;
      }
      i {
        padding-right: 5px;
        transition:all 0.5s ease ;
      }
      ul {
        li {
          padding-top: 0;
          padding-bottom: 0;
        }
      }
      a {
        i {
          color:$header-font;
          transition:all 0.5s ease ;
        }
        &:hover {
          i {
            color: $theme-deafult;
            transition:all 0.5s ease ;
          }
        }
      }
      &:hover {
        i {
          color: $theme-deafult;
          transition:all 0.5s ease ;
        }
      }
    }
    .onhover-dropdown {
      .onhover-show-div {
        li {
          padding-left: 0;
          display: flex;
          font-size: 15px;
          padding-bottom: 5px;
          &:last-child {
            padding-bottom: 0;
          }
          a {
            color:$font-color;
          }
        }
      }
    }
  }
  &.top-header-dark {
    background-color: $dark-font;
    .header-contact {
      li {
        color: $grey;
        i {
          color: $grey;
        }
      }
    }
    .header-dropdown {
      li {
        color:$grey;
        a {
          color: $grey;
          i {
            color:$grey;
          }
          &:hover {
            i {
              color: $theme-deafult;
            }
          }
        }
      }
    }
  }
  &.top-header-dark2 {
    background-color: $grey-dark;
    .header-contact {
      li {
        color: $grey-shade;
        i {
          color: $grey-shade;
        }
      }
    }
    .header-dropdown {
      li {
        color:$grey-shade;
        a {
          color: $grey-shade;
          i {
            color:$grey-shade;
          }
          &:hover {
            i {
              color: $theme-deafult;
            }
          }
        }
      }
    }
  }
  &.top-header-dark3 {
    background-color: $grey-darken;
    .header-contact {
      li {
        color: $grey-link;
        i {
          color: $grey-link;
        }
      }
    }
    .header-dropdown {
      li {
        color:$grey-link;
        a {
          color: $grey-link;
          i {
            color:$grey-link;
          }
          &:hover {
            i {
              color: $theme-deafult;
            }
          }
        }
      }
    }
  }
}
.layout3-menu {
  .main-menu {
    .menu-left {
      .navbar {
        i {
          font-size: 22px;
        }
      }
    }
  }
}
.main-menu {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9;
  &.product-full-page {
    z-index: 9999;
  }
  .brand-logo {
    display: inline-block;
    padding-top: 35px;
    padding-bottom: 35px;
  }
  .menu-left {
    display: flex;
    align-items: center;
    .navbar {
      display: inline-block;
      padding: 40px 45px 40px 0;
      i {
        font-size: 28px;
        color: $dark-font;
        cursor: pointer;
      }
      &.white-navbar {
        i {
          color: $white;
        }
      }
    }
    &.around-border {
      .navbar {
        > a {
          border: 2px solid lighten($theme-deafult, 35%);
          padding: 11px 10px 6px;
        }
      }
    }
    &.category-nav-right {
      .navbar {
        padding-right: 0;
        padding-left: 45px;
        > a {
          padding: 0;
        }
        i {
          color: $sidebar-color;
        }
      }
    }
  }
  .menu-right {
    display: flex;
    float: right;
    .icon-nav {
      display: inline-block;
      li {
        padding-left: 20px;
      }
      .onhover-div {
        .show-div {
          &.shopping-cart {
            padding: 15px 15px;
            min-width: 270px;
            left: unset;
            right:0;
            max-height: 250px;
            overflow-y: auto;
            li {
              position: relative;
              padding-bottom: 10px;
              width: 100%;
              &:last-child {
                padding-bottom: 0;
              }
              .media {
                img {
                  height: 90px;
                }
                .media-body {
                  align-self: center;
                  h4 {
                    color: $font-color;
                    span {
                      color: $grey;
                      font-size: 16px;
                    }
                  }
                }
              }
              .close-circle {
                position: absolute;
                top: 0;
                right: 0;
                i {
                  color: $grey-light;
                  transition: all 0.3s ease;
                  &:hover {
                    color: $black;
                    transition: all 0.3s ease;
                  }
                }
              }
              .total {
                border-top: 1px solid $border-grey;
                border-bottom: 1px solid $border-grey;
                padding-top: 10px;
                padding-bottom: 10px;
                h5 {
                  text-transform: capitalize;
                  margin-bottom: 0;
                  color:$header-font ;
                  span {
                    float: right;
                  }
                }
              }
              .buttons {
                a {
                  font-size: 16px;
                  color: $font-color;
                  text-transform: capitalize;
                  font-weight: 700;
                  &:hover {
                    color: $theme-deafult;
                  }
                }
                .checkout {
                  float: right;
                }
              }
            }
          }
          &.setting {
            padding: 15px 20px 20px;
            min-width: 175px;
            right: 0;
            left: unset;
            h6 {
              font-size: 16px;
              text-transform: capitalize;
              color: $font-color;
              font-weight: 700;
              margin-bottom: 0;
              margin-top: 5px;
              &:first-child {
                margin-top: 0;
              }
            }
            ul {
              li {
                display: flex;
                padding-bottom: 0;
                padding-left: 17px;
                padding-top: 5px;
                a {
                  color: $font-color;
                  font-weight: 400;
                  font-size: 16px;
                  text-transform: capitalize;
                }
              }
            }
          }
          li {
            padding: 0;
            .form-control {
              border-radius: 0;
              &:focus {
                border:1px solid #ced4da;
                box-shadow: none;
              }
            }
            .search-btn {
              padding: 8px 12px;
              background-color: $theme-deafult;
              color: $white;
            }
          }
          ul {
            li {
              a {
                cursor: pointer;
              }
            }
          }
        }
      }
      &.white-icon {
        .onhover-div {
          img {
            filter: brightness(5);
          }
          .show-div {
            img {
              filter: none;
            }
          }
        }
      }
    }
  }
}
.nav-cat {
  li {
    position: relative;
    display: flex;
    padding-left: 25px;
    padding-right: 25px;
    .round-cat {
      height: 50px;
      width: 50px;
      border: 1px solid #dddddd;
      padding: 12px;
      border-radius: 100%;
      margin-right: 10px;
    }
    a {
      color: $dark-font;
      font-size: 16px;
      text-transform: uppercase;
    }
  }
}
.Toastify__toast--info {
  background: #007bff; }
.Toastify__toast--success {
  background: #22af47; }
.Toastify__toast--warning {
  background: #ff850d; }
.Toastify__toast--error {
  background: #ff2046; }
@keyframes smoothScroll {
  0% {
    transform: translateY(-40px);
  }
  100% {
    transform: translateY(0px);
  }
}

${ProductBoxes}
`


