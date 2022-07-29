import { Selector, t } from "testcafe";

class HomePage {
   constructor() {

      this.dd_MyAccount = Selector('span').withText('My Account')
      this.lnk_Register = Selector('a').withText('Register')
      this.lnk_Login = Selector('a').withText('Login')
      this.txt_SearchField = Selector('input[name=search]')
      this.btn_Search = Selector('button[class = btn btn-default btn-lg]')
      this.lnk_Cart = Selector('span [id = cart-total]')
      this.lnk_ContactUs = Selector('i[class=fa fa-phone]')
      this.lnk_WishList = Selector('span[class=hidden-xs hidden-sm hidden-md]')
      this.lnk_ShoppingCart = Selector('span').withText('Shopping Cart')
      this.lnk_CheckOut = Selector('span').withText('Checkout')
      this.pageHeader_ContactUs = Selector('h1').withText('Contact Us')
      this.pageHeader_ShoppingCart = Selector('h1').withText('Shopping Cart')
   }

   async searchProduct(product) {
      await t
         .typeText(this.txt_SearchField, product)
         .click(this.btn_Search)
   }

   async checkLinks() {
      await t
         .click(this.lnk_ContactUs)
         .expect(this.pageHeader_ContactUs).eql('Contact Us')
         .click(this.lnk_WishList)
         .click(this.lnk_ShoppingCart)
         .expect(this.pageHeader_ShoppingCart).eql('Shopping Cart')
   }

}

export default new HomePage();

