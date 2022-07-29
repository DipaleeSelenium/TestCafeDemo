import { Selector, t } from "testcafe";

class LoginPage{
    constructor()
    {
        this.txt_LoginEmail = Selector('input[id=input-email]')
        this.txt_LoginPassword = Selector('input[id=input-password]')
        this.btn_Login = Selector('input[type=submit][value=Login]')
        this.lnk_LoginForgetPwd = Selector('a').withText('Forgotten Password')
        this.txt_pageHeaderLogin = Selector('h2').withText('Returning Customer')
        this.btn_LogOut = Selector('a').withText('Logout')
        this.txt_accountLogoutMsg = Selector('h1').withText('Account Logout')
        this.btn_logoutContinue = Selector('a').withText('Continue')
        }
}

export default new LoginPage