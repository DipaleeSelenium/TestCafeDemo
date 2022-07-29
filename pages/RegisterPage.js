import { Selector, t } from "testcafe";

class RegisterPage {
    constructor() {
        this.pageHeader_Register = Selector('h1').withText('Register Account')
        this.txt_FirstName = Selector('input[id=input-firstname]')
        this.txt_LastName = Selector('input[id=input-lastname]')
        this.txt_Email = Selector('input[id=input-email]')
        this.num_Telephone = Selector('input[id=input-telephone]')
        this.txt_Password = Selector('input[id=input-password]')
        this.txt_CnfPassword = Selector('input[id=input-confirm]')
        this.rad_YesNewsLetter  = Selector('input[type=radio][value=1]')
        //   this.rad_NoNewsLetter = Selector('input[value=0]')
        this.lnk_PrivacyPolicy = Selector('b').withText('Privacy Policy')
        this.chk_PrivacyPolicy = Selector('input[name=agree]')
        this.btn_ContinueReg = Selector('input[type=submit][value=Continue]')
        this.txt_AccountSuccessMsg = Selector('h1').withText('Your Account Has Been Created!')

    }


//     async clickRadioButton()
//     {
//         // select a radio button by it's input value
//     const radioButtonValue = "value"; // the value to search
//     const radioButton = Selector('input[type="radio"]')
//         .withAttribute("name", "newsletter") // select all radio buttons within the group groupName
//             .filter((node) => {
//                 if (node && node.value === radioButtonValue) {
//                     return true;
//                 }
//                 return false;
//             }, {radioButtonValue})
//             .nth(0);
//     await t
//         .hover(radioButton)
//         .expect(radioButton.hasAttribute("checked")).notOk({timeout: 5000})
//         .click(radioButton)
//         .pressKey("tab");

// }
}

export default new RegisterPage;

