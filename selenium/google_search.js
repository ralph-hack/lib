const {Builder, By, Key, until} = require('selenium-webdriver')
	
var driver = new Builder()
    .forBrowser('chrome')
	.build();
	
driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('wiki', Key.RETURN);
driver.wait(check_title, 5000);
driver.wait(until.titleIs('wiki - Google Search'), 5000);

function check_title(){
	var promise = driver.getTitle().then( function(title) {
		if (title === 'wiki - Google Search')
		{
			console.log('success');
			return true;
		}
		else 
		{
			console.log('fail -- ' + title);
		}
	});
	return promise;
}