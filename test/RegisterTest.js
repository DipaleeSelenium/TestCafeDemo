import { ClientFunction, t } from "testcafe";

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import properties from '../config/properties';
import Eyes from '@applitools/eyes-testcafe';


const eyes = new Eyes();
const dataSet = require("../data/data.json");
const getURL = ClientFunction(() => window.location.href);

fixture`Register fixture`
    .page(properties.URL)
    .beforeEach(async t => { await t
    .maximizeWindow() })
    .afterEach(async () => eyes.close())
    .after(async () => eyes.waitForResults());

dataSet.forEach(data => {
    test('Register new user with valid information', async t => {
        await eyes.open({
            appName: 'Shopping Demo',
            testName: 'Register new user with valid information',
            //    browser: [{ width: 800, height: 600, name: 'firefox' }],
            t
        });
        await eyes.checkWindow('Home Page')
        await t
            //.expect(getURL()).eql(properties.URL)
            .click(HomePage.dd_MyAccount)
            .click(HomePage.lnk_Register)
            // await eyes.checkWindow('register page')
            .expect(RegisterPage.pageHeader_Register.exists).ok()
            .typeText(RegisterPage.txt_FirstName, data.firstName)
            .typeText(RegisterPage.txt_LastName, data.lastName)
            .typeText(RegisterPage.txt_Email, data.emailId)
            .typeText(RegisterPage.num_Telephone, data.telephoneNo)
            .typeText(RegisterPage.txt_Password, data.password)
            .typeText(RegisterPage.txt_CnfPassword, data.password)
            // .click(RegisterPage.rad_YesNewsLetter)
            .click(RegisterPage.chk_PrivacyPolicy)
            .click(RegisterPage.btn_ContinueReg)
            .expect(RegisterPage.txt_AccountSuccessMsg.exists).ok()
            //await eyes.checkWindow('Your account has been created')
            .click(HomePage.dd_MyAccount)
            .click(LoginPage.btn_LogOut)
            .expect(LoginPage.txt_accountLogoutMsg.exists).ok()
            .click(LoginPage.btn_logoutContinue)

    })
});