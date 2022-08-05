document.addEventListener('DOMContentLoaded', function() {
    // console.log(document.querySelectorAll('.how-we-work__step'))
    document.querySelectorAll('.how-we-work__step').forEach(function(tabsBtn) {
        // console.log(tabsBtn)
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.step').forEach(function(tabContent) {
                tabContent.classList.remove('step-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('step-active')
        })
    })

    var accordion = document.getElementById('accordion');
    accordion.addEventListener('click', change);

    function change(event) {
        var targ = event.target;
        if (targ.tagName !== 'H3') return;
        if (targ.classList.contains('select')) {
            hideAll();
        } else {
            hideAll();
            targ.classList.add('select');
            showText(targ.nextElementSibling);
        }
    }

    function hideAll() {
        var h3El = accordion.querySelectorAll('h3');
        var divEl = accordion.querySelectorAll('div');
        for (var i = 0; i < h3El.length; i++) {
            h3El[i].classList.remove('select');
        }
        for (var i = 0; i < divEl.length; i++) {
            divEl[i].style.height = '0';
        }
    }

    function showText(textEl) {
        textEl.style.height = textEl.scrollHeight + 'px';
    }
})