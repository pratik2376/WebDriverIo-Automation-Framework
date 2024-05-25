describe("Demo", () => {
  it("tests Demo @Regression", async () => {
    await browser.setWindowSize(811, 607)
    await browser.url("https://the-internet.herokuapp.com/login")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    await browser.$("#username").click()
    await browser.$("#username").setValue("tomsmith")
    await browser.$("#password").click()
    await browser.$("#password").setValue("S")
    await browser.$("#password").setValue("SuperS")
    await browser.$("#password").setValue("SuperSecretP")
    await browser.$("#password").setValue("SuperSecretPassword!")
    await browser.$("//*[@id=\"login\"]/button/i").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
  });
});
