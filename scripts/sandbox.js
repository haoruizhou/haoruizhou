// Sandbox Interactive Functions
(function() {
    'use strict';

    window.runConsoleDemo = function() {
        const output = document.getElementById('console-output');

        const responses = [
            '<span class="text-gray-500">root@wfr-sandbox:~#</span> Parsing intent...',
            '<span class="text-blue-400">DEBUG:</span> Identified target table: "engine_logs"',
            '<span class="text-blue-400">DEBUG:</span> Generated SQL: SELECT max(rpm) FROM run_4',
            '<span class="text-gray-500">root@wfr-sandbox:~#</span> Executing query...',
            '<span class="text-green-400 font-bold">RESULT:</span> Max RPM: 11,450'
        ];

        let i = 0;
        const interval = setInterval(() => {
            if(i < responses.length) {
                if(output) {
                    output.innerHTML += `<div>${responses[i]}</div>`;
                    output.scrollTop = output.scrollHeight;
                }
                i++;
            } else {
                clearInterval(interval);
            }
        }, 600);
    }

    console.log('[Sandbox] Interactive module loaded');
})();
