const colorH1 = (driver, By) => {

    driver.findElement(By.css('input')).getCssValue('color')
        .then(color => {
            if (color === 'rgba(255, 0, 0, 1)') {
                console.log('ok');
            } else {
                // console.log(color);
            }
        });

};

module.exports = {
    colorH1
};