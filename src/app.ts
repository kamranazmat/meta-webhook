/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { WhatsApp } from 'whatsapp';
import { IncomingHttpHeaders, ServerResponse } from 'http';

const wa = new WhatsApp();

// Replace with the recipient phone number
const recipient_number = 0;

async function send_message() {
	const sent_text_message = wa.messages.text(
		{ body: 'Hello world' },
		recipient_number,
	);

	await sent_text_message.then((res: any) => {
		console.log(res.raw_response());
	});
}

send_message();

function custom_callback(
	err: Error,
	status_code: number,
	headers: IncomingHttpHeaders,
	body: Record<string, string>,
	resp: ServerResponse,
) {
	console.log(
		`Incoming webhook status code: ${status_code}\n\nHeaders:
        ${JSON.stringify(headers)}\n\nBody: ${JSON.stringify(body)}`,
	);

	if (resp) {
		resp.writeHead(200, { 'Content-Type': 'text/plain' });
		resp.end();
	}

	if (err) {
		console.log(`ERROR: ${err}`);
	}
}

wa.webhooks.start(custom_callback);
