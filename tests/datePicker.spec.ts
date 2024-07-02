import { expect, test } from "@playwright/test";

test("Interaction with datepicker using moment ", async ({ page }) => {

//     await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
   
    
//     async function selectDate(date: number, dateToSelect:string){
//     await page.click("input[@placeholder='Start date']");
//     const mmYY = page.locator("(//tabel[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
//     const prev = page.locator("(//tabel[@class='table-condensed']//th[@class='prev'])[1]");
//     const next = page.locator("(//tabel[@class='table-condensed']//th[@class='next'])[1]");
//     const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
   
// console.log("this month? "+ thisMonth);
// while(await mmYY.textContent() ! = dateToSelect){
//     if(thisMonth){
//         await prev.click();
//     }else{
//         await next.click();
//     }
// }
// await page.waitForTimeout(1000);
// await page.click('//td[@class='day'][text()='${date}']');
// }
})