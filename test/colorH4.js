const colorH4 = (driver, By) => {
    try {
        driver.findElement(By.css('input')).getCssValue('color')
            .then(color => {
                if (color === 'rgba(255, 0, 0, 1)') {
                    console.log('ok');
                } else {

                }
            }).catch(e => {
                process.exitCode = 1;
                console.error(`.catch(${e})`);
            });
    } catch (e) {
        console.error(`try/catch(${e})`);

    }
};

module.exports = {
    colorH4
};