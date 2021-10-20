import { Builder, Capabilities, By } from "selenium-webdriver"
import { findSafariDriver } from "selenium-webdriver/safari"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// First we're going to navigate to Google.com
beforeAll(async () => {
    await (await driver).get('http://127.0.0.1:5500/movieList/index.html')
})

// And after our test has completed, we want to close our browser
afterAll(async () => {

    await driver.sleep(5000)
    await driver.quit()
})



// This test will require you to change some values in order to get your tests up and running
// You'll want to change each of the commented out pieces below
test('I can add a movie', async () => {

    // For this line you'll need to put the name of the search bar which you can find by inspecting that element in Chrome
    let movieBar = await driver.findElement(By.name('t'))

    // This time you'll just finish this string with something you want to search on Google, make sure you leanve that \n !
    await movieBar.sendKeys('Tanner\n')

    // This line will pause our automation so you can see your search!
    await driver.sleep(2000)
    
})
it("i can delete a movie" , async () => {

    // For this line you'll need to put the name of the search bar which you can find by inspecting that element in Chrome
    let movieBar = await driver.findElement(By.name('t'))
    let delBtn = await driver.findElement(By.name('x'))

    // This time you'll just finish this string with something you want to search on Google, make sure you leanve that \n !
    await movieBar.sendKeys('Ethan\n')

    await driver.sleep(2000)
    await delBtn.click()
    await driver.sleep(2000)
    
})

it("i can cross off a movie" , async () => {

    // For this line you'll need to put the name of the search bar which you can find by inspecting that element in Chrome
    let movieBar = await driver.findElement(By.name('t'))

    // This time you'll just finish this string with something you want to search on Google, make sure you leanve that \n !
    await movieBar.sendKeys('john\n')

    // This line will pause our automation so you can see your search!
    await driver.sleep(2000)

    await driver.findElement(By.xpath('/html/body/main/ul/li[2]/span')).click()
    await driver.sleep(2000)
    
})