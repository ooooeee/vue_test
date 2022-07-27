const form = document.getElementById('popup')
            form.addEventListener(document.addEventListener('keydown', function (e) {
                if (e.which ===27) {
                    const popupactive = document.querySelector('.popup.open');
                    popupClose(popupActive);
                }
            }))