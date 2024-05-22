class Utils {

    /**
     * Navigate to the specified URL
     * @param {string} url URL to navigate to
     */
      async navigateToURL(url) {
        await browser.url(url);
    }
    /**
     * Wait for the given element to be displayed
     * @param {WebdriverIO.Element} element Element to wait for
     * @param {number} timeout Timeout in milliseconds
     */
      async waitForElementDisplayed(element, timeout = 10000) {
      await element.waitForDisplayed({ timeout, timeoutMsg: 'Element not displayed within timeout' });
    }
  
    /**
     * Wait for the given element to be enabled
     * @param {WebdriverIO.Element} element Element to wait for
     * @param {number} timeout Timeout in milliseconds
     */
      async waitForElementEnabled(element, timeout = 10000) {
      await element.waitForEnabled({ timeout, timeoutMsg: 'Element not enabled within timeout' });
    }
  
    /**
     * Wait for the given element to be clickable
     * @param {WebdriverIO.Element} element Element to wait for
     * @param {number} timeout Timeout in milliseconds
     */
      async waitForElementClickable(element, timeout = 10000) {
      await element.waitForClickable({ timeout, timeoutMsg: 'Element not clickable within timeout' });
    }
  
    /**
     * Wait for the given element to have a certain text
     * @param {WebdriverIO.Element} element Element to wait for
     * @param {string} text Text to wait for
     * @param {number} timeout Timeout in milliseconds
     */
      async waitForElementText(element, text, timeout = 10000) {
      await element.waitForText({ timeout, timeoutMsg: `Text "${text}" not found within timeout` });
    }
  
    /**
     * Click on an element after waiting for it to be clickable
     * @param {WebdriverIO.Element} element Element to click
     */
      async clickElement(element) {
      await this.waitForElementClickable(element);
      await element.click();
    }
  
    /**
     * Set value in an input field after waiting for it to be enabled
     * @param {WebdriverIO.Element} element Input field element
     * @param {string} value Value to set
     */
      async setInputValue(element, value) {
      await this.waitForElementEnabled(element);
      await element.setValue(value);
    }

    /**
   * Verify if the given text is present in the UI within the specified locator
   * @param {WebdriverIO.Element} element Input field element
   * @param {string} text Text to verify
   * @param {number} timeout Timeout in milliseconds
   * @returns {boolean} True if text is present, false otherwise
   */
      async isTextPresentInUI(element, text, timeout = 10000) {
      try {
        await element.waitForExist({ timeout });
        const locatorText = await element.getText();
        if (!locatorText.includes(text)){
          throw new Error(`Message "${text}" not found in the UI`);
        };
      } catch (error) {
        throw new Error('Failed to verify messages in the UI'); // Element not found or text not present
      }
    }
  
  }
  module.exports = new Utils();
  