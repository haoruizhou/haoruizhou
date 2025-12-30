// Project Pecan Interactive Functions
(function() {
    'use strict';

    window.simulatePecan = function() {
        const bar = document.getElementById('pecan-bar');
        const status = document.getElementById('pecan-status');
        const log = document.getElementById('pecan-log');

        if(status) {
            status.innerText = "ESTABLISHING...";
            status.className = "text-amber-400 font-bold blink";
        }

        // Animate Bar
        if(bar) bar.style.width = "100%";

        // Fake Logs
        let logs = [
            "Connecting to MQTT Broker...",
            "Subscribing to topic: wfr/telemetry/v1",
            "Handshake ACK received.",
            "Decoded Frame ID: 0x4F2 (RPM)",
            "Decoded Frame ID: 0x4F3 (Oil_Press)",
            "Stream Stable. Bandwidth: 12kb/s"
        ];

        let i = 0;
        const interval = setInterval(() => {
            if(i < logs.length) {
                if(log) {
                    log.innerHTML += `<div>> ${logs[i]}</div>`;
                    log.scrollTop = log.scrollHeight;
                }
                i++;
            } else {
                clearInterval(interval);
                if(status) {
                    status.innerText = "CONNECTED (100hz)";
                    status.className = "text-green-500 font-bold";
                }
            }
        }, 300);
    }

    console.log('[Pecan] Interactive module loaded');
})();
