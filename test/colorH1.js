const colorH1 = (driver, By) => {
    try {
        driver.findElement(By.css('input')).getCssValue('color')
            .then(color => {
                if (color === 'rgba(255, 0, 0, 1)') {
                    console.log('ok');
                } else {
                    // console.log(color);
                }
            }).catch(e => {
                eror
                console.error(`.catch(${e})`);
                // const er = new Error('colorH1');
                // er.name = 'My error';
                // throw er;

            });
    } catch (e) {
        console.error(`try/catch(${e})`);

    }
};

module.exports = {
    colorH1
};