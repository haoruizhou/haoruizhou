// Scraper Interactive Functions
(function() {
    'use strict';

    window.toggleStatus = function(element) {
        const indicator = element.querySelector('.status-indicator');

        if (indicator.innerText.includes('ACTIVE')) {
            // Turn Off
            indicator.innerHTML = `<span class="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.8)]"></span> OFFLINE`;
            indicator.className = "status-indicator text-red-500 font-bold flex items-center gap-2";
        } else {
            // Turn On
            indicator.innerHTML = `<span class="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.8)]"></span> ACTIVE`;
            indicator.className = "status-indicator text-green-500 font-bold flex items-center gap-2";
        }
    }

    console.log('[Scraper] Interactive module loaded');
})();
