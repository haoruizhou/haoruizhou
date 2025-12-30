<h1 class="text-2xl text-white font-bold mb-2">PROJECT PECAN: WIRELESS DIAGNOSTIC</h1>
<div class="text-gray-500 text-xs mb-4 border-b border-gray-700 pb-2">DATE: OCT 2024 // TEAM: WESTERN FORMULA RACING</div>

<div class="flex gap-2 mb-8">
<span class="px-2 py-1 bg-blue-900 text-blue-200 border border-blue-700 rounded text-xs">REACT</span>
<span class="px-2 py-1 bg-purple-900 text-purple-200 border border-purple-700 rounded text-xs">C++</span>
<span class="px-2 py-1 bg-orange-900 text-orange-200 border border-orange-700 rounded text-xs">CAN BUS</span>
</div>

<div class="mb-8">
<a href="https://0001200.xyz/project-pecan-website/" target="_blank" class="px-3 py-2 bg-green-900/50 hover:bg-green-800 text-green-200 rounded border border-green-700 text-sm transition">VIEW PROJECT SITE &rarr;</a>
</div>

<h3>// INTERACTIVE DIAGNOSTICS</h3>
<div class="bg-black border border-gray-700 p-4 rounded font-mono text-xs mb-6">
<div class="flex justify-between mb-2">
<span>CAN_BUS_LINK:</span>
<span id="pecan-status" class="text-red-500 font-bold blink">DISCONNECTED</span>
</div>
<div class="w-full bg-gray-900 h-2 rounded overflow-hidden mb-4 border border-gray-700">
<div id="pecan-bar" class="bg-blue-500 h-full w-0 transition-all duration-[2000ms] ease-out"></div>
</div>
<button onclick="simulatePecan()" class="bg-blue-900/50 hover:bg-blue-800 text-blue-200 px-3 py-2 rounded border border-blue-700 w-full mb-3 transition">
[ INITIATE DATA LINK ]
</button>
<div id="pecan-log" class="font-mono text-[10px] text-gray-600 h-16 overflow-hidden border-t border-gray-800 pt-2">
// System ready. Waiting for handshake...
</div>
</div>

<h3>// SITUATION REPORT</h3>
<p>Western Formula Racing previously relied on proprietary, dongle-based CAN-bus hardware. This created a bottleneck where only one engineer could view live vehicle data at a time. Furthermore, the physical tether forced engineers to stand directly next to the car, creating logistical challenges during complex testing scenarios.</p>

<h3>// TECHNICAL SOLUTION</h3>
<p>I architected an ESP32 and React-based hardware-software solution. The ESP32 connects to the vehicle's CAN High/Low lines, hosts a custom React frontend, and transmits data via WebSockets. Anyone within range of the ESP32's WiFi hotspot can view live telemetry and transmit CAN messages. This eliminated the dependency on $1,500 proprietary hardware, replacing it with a solution costing just $50 in parts.</p>

<h3>// OPEN SOURCE</h3>
<p>Formula SAE competitions foster a competitive yet collaborative environment. Following the precedent of our team open sourcing our firmware, Project PECAN is released as an AGPLv3-licensed open source project.</p>