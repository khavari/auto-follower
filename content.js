(function () {
    if (document.querySelectorAll('#tbl2 center a')[1] && document.querySelector('#Hint')) {
        setTimeout(function () {

            document.querySelectorAll('#tbl2 center a')[1].click();
        }, 10000);
    }

    if (document.querySelector('#recaptcha-anchor')) {
        document.querySelector('#recaptcha-anchor').click();
        // document.querySelector('.recaptcha-checkbox.goog-inline-block.recaptcha-checkbox-unchecked.rc-anchor-checkbox').click();
    }

})();


