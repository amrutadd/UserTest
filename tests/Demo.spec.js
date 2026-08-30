import {test, chromium}from '@playwright/test'

test("Tc for demo test", async()=>{

    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://copyright.gov.in/UserRegistration/frmNewUser.aspx");
    await page.locator("//select[@id='ctl00_ContentPlaceHolder1_ddlTitle']").selectOption({label : "Ms."});

    await page.locator("//input[@id='ctl00_ContentPlaceHolder1_txtFName']").fill("Amruta");
    await page.locator("//input[@id='ctl00_ContentPlaceHolder1_txtAddress']").fill("Pune");
    await page.locator("//input[@id='ctl00_ContentPlaceHolder1_txtCity']").fill("Pune");
    await page.locator("//select[@id='ctl00_ContentPlaceHolder1_ddlCountry']").selectOption({value : "80"});

    await page.locator("//select[@id='ctl00_ContentPlaceHolder1_ddlState']").selectOption({label : "MAHARASHTRA"});
    await page.locator("//select[@id='ctl00_ContentPlaceHolder1_ddlDistrict']").selectOption({label : "-Select-"});

    await page.locator("//input[@id='ctl00_ContentPlaceHolder1_txtEmail']").fill("amruta123@gmail.com");
    await page.locator("//input[@id='ctl00_ContentPlaceHolder1_txtMobileNum']").fill("12345678909");
    await page.locator("//input[@id='ctl00_ContentPlaceHolder1_rdoSociety']").click();





})