const colorH1 = (driver, By) => {
    try {
        driver.findElement(By.css('input')).getCssValue('color')
            .then(color => {
                if (color === 'rgba(255, 0, 0, 1)') {
                    console.log('ok');
                } else {
                    require('url').parse(() => {
                    });
                }
            }).catch(e => {
                error = require('./error');
                console.error(`.catch(${e})`);
            });
    } catch (e) {
        console.error(`try/catch(${e})`);

    }
};

module.exports = {
    colorH1
};