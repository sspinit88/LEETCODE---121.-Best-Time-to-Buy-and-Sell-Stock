/*
121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:

    1 <= prices.length <= 105
    0 <= prices[i] <= 104

*/

/**
 * This function calculates the maximum profit from buying and selling a stock.
 * Эта функция вычисляет максимальную прибыль от покупки и продажи акции.
 * 
 * @param {number[]} prices - The array of stock prices. Массив цен на акции.
 * @return {number} The maximum profit. Максимальная прибыль.
 */
 function maxProfit(prices) {
  // Initialize the minimum price as the first price and the maximum profit as 0.
  // Инициализируем минимальную цену как первую цену и максимальную прибыль как 0.
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
      // If the current price is less than the minimum price, update the minimum price.
      // Если текущая цена меньше минимальной цены, обновляем минимальную цену.
      if (prices[i] < minPrice) {
          minPrice = prices[i];
      } 
      // If the difference between the current price and the minimum price is greater than the maximum profit, update the maximum profit.
      // Если разница между текущей ценой и минимальной ценой больше максимальной прибыли, обновляем максимальную прибыль.
      else if (prices[i] - minPrice > maxProfit) {
          maxProfit = prices[i] - minPrice;
      }
  }

  return maxProfit;
}

/*
This solution has a time complexity of O(n) and a space complexity of O(1), 
where n is the length of the array.
*/
