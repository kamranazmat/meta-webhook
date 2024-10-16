# WhatsApp Node.js Project Template

This GitHub template lets you get started building your own WhatsApp applications using the [WhatsApp Business Platform Node.js SDK for the Cloud API, hosted by Meta](https://github.com/WhatsApp/WhatsApp-Nodejs-SDK). This project template is written in Typescript and can be easily transpiled into Node.js, and made to be modified as needed to suite your needs.

## Getting started
This repository uses GitHub templates. You can create your [own project repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) to work off of locally, or start evaluating using this [template in a GitHub codespace](https://docs.github.com/en/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template). We'll assume codespaces for this brief guide to send a text-based message via WhatsApp.

### Prerequisites
1. Familiarity with Typescript.
2. Complete the steps in the [official docs](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started#set-up-developer-assets) for getting started with the Cloud API. Stop once you've [sent a test message](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started#sent-test-message).
3. Respond to that message with anything. This puts the conversation into a [user-initiated conversations](https://developers.facebook.com/docs/whatsapp/conversation-types) session, which allows other messages to be received via API calls for 24-hours.

### Open, edit, run
Sending a message using the SDK and the provided template is easy and only requires a few inputs to send a message. In order to receive messages or use other features, that requires further configuration and exploration of the code and the SDK's features. Using codespaces, you can create changes and fork your changes to a new project. Note that you should ensure you do _NOT_ add and commit any credentials or secrets, they will be publicly accessible.

1. Click the green **Use this template** button in the repo landing page --> **Open in a codespace**. This will open a new tab and the web IDE.
2. Open the *.env* file in the root directory, add the values for the **WA_PHONE_NUMBER_ID** and **CLOUD_API_ACCESS_TOKEN** variables, and save after you're done. This will be the minimum configuration to get the application running and able to send messages.
3. Open the *src/app.ts* file and fill in the value for the **recipient_number** variable with the integer value for the number including the country code (i.e. without the "+" symbol).
4. Install dependencies and run application with ts-node using `yarn install & yarn start` in the terminal window.

### Next steps
View the [WhatsApp Business Platform Node.js SDK documentation](https://animated-garbanzo-y2rne5q.pages.GitHub.io/) to learn how to use the SDK and it's other features.

## Code of Conduct
Meta has adopted a Code of Conduct that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.

## Contribute
See the [CONTRIBUTING](CONTRIBUTING.md) file for our development process, how to propose bugfixes and improvements, and how to build and test your changes to Jest.

## License
The WhatsApp Business Platform Node.js SDK for the Cloud API is Meta Platforms licensed, as found in the LICENSE file.
