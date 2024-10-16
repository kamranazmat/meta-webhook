"use strict";
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const whatsapp_1 = require("whatsapp");
// Your test sender phone number
const wa = new whatsapp_1.WhatsApp();
// Replace with the recipient phone number
const recipient_number = 0;
async function send_message() {
    const sent_text_message = wa.messages.text({ body: 'Hello world' }, recipient_number);
    await sent_text_message.then((res) => {
        console.log(res.raw_response());
    });
}
send_message();
function custom_callback(err, status_code, headers, body, resp) {
    console.log(`Incoming webhook status code: ${status_code}\n\nHeaders:
        ${JSON.stringify(headers)}\n\nBody: ${JSON.stringify(body)}`);
    if (resp) {
        resp.writeHead(200, { 'Content-Type': 'text/plain' });
        resp.end();
    }
    if (err) {
        console.log(`ERROR: ${err}`);
    }
}
wa.webhooks.start(custom_callback);
//# sourceMappingURL=app.js.map