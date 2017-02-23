import SecuredPage from '../pages/SecuredPage';

export default interface ILoginPage {
    username : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>>;
    password : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>>;
    loginButton : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>>;
    enterLoginInformation(usernameValue : string, passwordValue : string) : void;
    clickSubmitButton() : void;
    login(usernameValue : string, passwordValue : string) : SecuredPage;
}
