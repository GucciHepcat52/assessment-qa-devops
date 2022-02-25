
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:3000/')
})

afterAll(async () => {
    await driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000);
})

test('click draw button', async () => {
    const drawButton = await driver.findElement(By.id("draw"))
    await drawButton.click()
    driver.sleep(2000)
})

test('draw button displays id=choices div', async () => {
    const drawButton = await driver.findElement(By.id("draw"))
    await drawButton.click()
    const choices = await driver.findElement(By.id("choices"))
    const choicesDisplayed = await choices.isDisplayed()
    expect(choicesDisplayed).toBe(true);
    await driver.sleep(3000)
})
