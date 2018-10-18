const colorH1 = (driver, By) => {
    try {
        driver.findElement(By.css('h1')).getCssValue('color')
            .then(color => {
                if (color === 'rgba(255, 0, 0, 1)') {
                    console.log('ok');
                } else {
                    console.log(color);
                }
            }).catch(e => {
                console.error(`.catch(${e})`);
                console.log('testColorH1');
            });
    } catch (e) {
        console.error(`try/catch(${e})`);
    }
};

module.exports = {
    colorH1
}