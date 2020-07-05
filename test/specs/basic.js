

describe('create new account', () => {
    before(()=> {
      browser.maximizeWindow();
      browser.deleteAllCookies();
      browser.url('https://www.amazon.com/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3F_encoding%3DUTF8%26ref_%3Dnav_newcust&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&');
    })

  it('should create account', function() {
    const createAccount = $('[class="a-spacing-small"]');
    const result = createAccount.isDisplayed();
    expect(result).true;
  });

  it('should verify Your Name input', function() {
    const yourNameInput = $('[id="ap_customer_name"]');
    yourNameInput.setValue('Bob');
    //browser.pause(1000);
  });

  it('should verify Email input', function() {
    const emailInput = $('[id="ap_email"]');
    emailInput.setValue('abc@ya.ru');
   // browser.pause(1000);
  });

  it('should verify Password input', function() {
    const passwordInput = $('[id="ap_password"]');
    passwordInput.setValue('12345');
    browser.pause(1000);
  });

  it('should verify Re enter Password input', function() {
    const passwordReInput = $('#ap_password_check');
    passwordReInput.setValue('123456');
    browser.pause(1000);
  });


  it('should verify password error message', function() {
    const createBtn = $('#continue');
    createBtn.click();
    const errorMsg = $("div#auth-password-invalid-password-alert").isDisplayed();
    expect(errorMsg).true;
  });

  it('should verify password error message text', function() {
    // const createBtn = $('#continue');
    // createBtn.click();
    const errorMsgTxt = $("div#auth-password-invalid-password-alert").getText();
    expect(errorMsgTxt).eq('Passwords must be at least 6 characters.');
  });

  it('should verify password mismatch error message', function() {
    const errorMsg = $("#auth-password-mismatch-alert").isDisplayed();
    expect(errorMsg).true;
  });


})

//====================================================================================

describe.skip('should navigate to Your Garage page', () => {
  
  before(()=> {
    browser.maximizeWindow();
    browser.deleteAllCookies();
    browser.url('https://www.amazon.com');
  })

  it('should open Account&List', function() {
    const accountList = $('a#nav-link-accountList');
    accountList.moveTo();
    browser.pause(2000);
  });

  it('should click Your Garage', function() {
    const yourGarageBtn = $('//span[text()="Your Garage"]');
    yourGarageBtn.click();
    browser.pause(2000);

    // it('should click Your Watchlist', function() {
    //   const yourWatchlistBtn = $('//span[text()="Your Watchlist"]');
    //   yourWatchlistBtn.click();
    //   browser.pause(2000);
    
  });

  it('should verify Your Garage title', function() {
    const title = $('h1').getText();
    expect(title).eq('Your Garage');
    
  });


})