import SecuredPage from '../pages/SecuredPage';

export default interface ILoginPage {
    username : WebdriverIO.Element;
    password : WebdriverIO.Element;
    loginButton : WebdriverIO.Element;
    enterLoginInformation(usernameValue : string, passwordValue : string) : void;
    clickSubmitButton() : void;
    login(usernameValue : string, passwordValue : string) : SecuredPage;
}
