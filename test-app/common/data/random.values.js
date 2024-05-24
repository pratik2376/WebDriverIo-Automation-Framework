const randomValues = {
    /**
     * Generate a random integer between min (inclusive) and max (inclusive)
     * @param {number} min - Minimum value (inclusive)
     * @param {number} max - Maximum value (inclusive)
     * @returns {number} - Random integer
     */
    getRandomInt: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  
    /**
     * Generate a random float between min (inclusive) and max (exclusive)
     * @param {number} min - Minimum value (inclusive)
     * @param {number} max - Maximum value (exclusive)
     * @returns {number} - Random float
     */
    getRandomFloat: function(min, max) {
      return Math.random() * (max - min) + min;
    },
  
    /**
     * Generate a random string of specified length
     * @param {number} length - Length of the string
     * @returns {string} - Random string
     */
    getRandomString: function(length) {
      const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return result;
    },
  
    /**
     * Generate a random boolean value (true or false)
     * @returns {boolean} - Random boolean
     */
    getRandomBoolean: function() {
      return Math.random() < 0.5;
    }
  };
  
  module.exports = randomValues;
  