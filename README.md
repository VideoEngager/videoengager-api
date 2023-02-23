# VideoEngager Javascript SDK

<!-- BADGES -->
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/npm/v/videoengager-api)
![TypeScript](https://img.shields.io/badge/TypeScript-Built%20in-succes)
![JavaScript](https://img.shields.io/badge/JavaScript-Built%20in-succes)
![NodeJS](https://img.shields.io/badge/NodeJS-Compatible-succes)
![ReactJS](https://img.shields.io/badge/ReactJS-Compatible-succes)
![AngularJS](https://img.shields.io/badge/AngularJS-Compatible-succes)
![VueJS](https://img.shields.io/badge/VueJS-Compatible-succes)
![ReactNative](https://img.shields.io/badge/ReactNative-Compatible-succes)
![Ionic](https://img.shields.io/badge/Ionic-Compatible-succes)
![Cordova](https://img.shields.io/badge/Cordova-Compatible-succes)
![Ember.js](https://img.shields.io/badge/Ember.js-Compatible-succes)
![NextJS](https://img.shields.io/badge/Next-Compatible-succes)
![Nest.js](https://img.shields.io/badge/Nest.js-Compatible-succes)
![vite](https://img.shields.io/badge/vite-Compatible-succes)
<!-- END BADGES -->

VideoEngager Javascript SDK - Javascript SDK for VideoEngager API
- API version: 1.0.0
- Package version: 1.1.0

The VideoEngager Javascript SDK implements the client-side libraries used by
applications using VideoEngager API services. This SDK is distributed via:

- [CDN](https://unpkg.com/videoengager-js-sdk@1.1.0/dist/browser/main.js)
- [npm package](https://www.npmjs.com/package/videoengager-js-sdk)
- [CDN Module](https://unpkg.com/videoengager-js-sdk@1.1.0/dist/esm/index.js)

---

### Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Initializing the API client](#initializing-the-api-client)

  #### API References
- [authentication](#authentication)
- [callbacks](#callbacks)


---

## Installation

Install the package from npm:

```shell
npm install videoengager-js-sdk@latest --save
```

### Browser

The package also works in the browser environment. The client is exposed as `SmartVideoSdk` global variable when using from `https://unpkg.com/videoengager-js-sdk@1.1.0/dist/browser/main.js` file.

```html
<script src="https://unpkg.com/videoengager-js-sdk@1.1.0/dist/browser/main.js"></script>
<script>
  var smartVideoSdk = SmartVideoSdk
</script>
```

> You can also load VideoEngager Javascript SDK packages as script modules in browsers that support native ES modules.

```html
<script type="module">
  import * as smartVideoSdk from 'https://unpkg.com/videoengager-js-sdk@1.1.0/dist/esm/index.js';
</script>
```


## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var smartVideoSDK = require('videoengager-js-sdk');

const configuration = {
    pak: '134124-5134123-52341-213',
    basePath: 'https://prod.videoengager.com',
    externalId: 'Home',
    email: 'x@videoengager.com',
  };

smartVideoSDK.initializeSmartVideoClient(configuration);
// .. do something with the client
```

> initialization of the client generate token and store it to be used in all the requests.
> instead of generating accessToken using PAK and email, you can use your own accessToken.

```javascript
var smartVideoSDK = require('videoengager-js-sdk');

const configuration = {
    accessToken: 'yourAccessToken'
  };
smartVideoSDK.initializeSmartVideoClient(configuration)
```

> some of the requests are not required to be authenticated.
> to use the client without authentication, you can use the following code:

```javascript
var smartVideoSDK = require('videoengager-js-sdk');
const configuration = {
    basePath: 'https://prod.videoengager.com'
  };

smartVideoSDK.initializeSmartVideoClient(configuration);
// .. do something with the client
```
---

# Client API Reference



## authentication


<details>	
  <summary>Methods</summary>



### authenticatePartner

Authenticate Using Partner Access Key

This API will generate a token for the partner to use in the SDK

<details>

> Requires Authentication: false

#### Parameters

- **pak** (required) - TYPE:  [string](#string) - Partner API Key
- **externalId** (required) - TYPE:  [string](#string) - External ID
- **email** (required) - TYPE:  [string](#string) - partner email
  

```javascript

const response = await smartVideoSDK.authentication.authenticatePartner({
    pak,
    externalId,
    email
});

console.log(response.data); // response   

```

#### Return Type
> returns:  [AxiosPromise](https://github.com/axios/axios#response-schema)<[AuthenticatePartner200Response](#AuthenticatePartner200Response)>

> Example Response:
```json 
{
  "token_expiration" : 0,
  "token" : "eyJhbGciOiJIUzI1NXssInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2UxODhlNFEcwTNjNTY4ODAzYTljZTYiLCJwYWsiOiJERVYyIiwiaWF0IjoxNjc1NzkwODI5LCJleHAiOjE2NzgzODI4Mjl9.wIz7qVBUaWMxfH-IDCSkSWWsmKtc2QYPQoHpLUtLlAM"
}
```

</details>





</details>



## callbacks


<details>	
  <summary>Methods</summary>



### createCallback

Create New Genesys Callback

Notes.  *URL* is required, transferID is needed if you want to be able to deactive it later, pin will not be applied if brokerage settings doesn\'t allow it, if code is not provided, code automatically will be generated.

<details>

> Requires Authentication: true

#### Parameters

- **requestBody** (required) - TYPE:  [{ [key: string]: string; }](#{ [key: string]: string; }) - 
- **tenantId** (required) - TYPE:  [string](#string) - Tennant ID
  

```javascript

const response = await smartVideoSDK.callbacks.createCallback({
    requestBody,
    tenantId
});

console.log(response.data); // response   

```

#### Return Type
> returns:  [AxiosPromise](https://github.com/axios/axios#response-schema)<[CallbackObject](#CallbackObject)>

> Example Response:
```json 
{
  "genesys" : {
    "queueId" : "a1731678-13f6-4ab0-ac6d-f82813b7abee",
    "scriptId" : "950be2a3-65b7-461e-8ba2-f8fb62c2d95a",
    "conversation" : {
      "id" : "950be2a3-65b7-461e-8ba2-f8fb62c2d95a"
    }
  },
  "videoengager" : {
    "date" : 1676303962674,
    "code" : "k8DOH4",
    "subject" : "bla bla",
    "created" : "2023-02-13T15:59:22.684Z",
    "autoAnswer" : true,
    "active" : true,
    "meetingUrl" : "https://dev.videoengager.com/ve/k8DOH4",
    "duration" : 60,
    "phone" : "+971585194108",
    "name" : "Mamoun H",
    "agentUrl" : "https://dev.videoengager.com/ve/iqTF6W",
    "email" : "maamoon@callback.com",
    "scheduleId" : "82212b25-0976-2048-ed3e-6cb1fac47977",
    "customAttributes" : {
      "additionalProp1" : "value1",
      "additionalProp3" : "value2"
    }
  },
  "emailSent" : true,
  "icsCalendarData" : "BEGIN:VCALENDAR VERSION:2.0 CALSCALE:GREGORIAN PRODID:adamgibbons/ics METHOD:REQUEST X-PUBLISHED-TTL:PT1H BEGIN:VEVENT UID:82212b25-0976-2048-ed3e-6cb1fac47977 SUMMARY:Video Meeting DTSTAMP:20230213T155700Z DTSTART:20230213T155900Z SEQUENCE:1 DESCRIPTION:Start your video meeting by opening URL in your browser URL:https://dev.videoengager.com/ve/k8DOH4 LOCATION:https://dev.videoengager.com/ve/k8DOH4 STATUS:CONFIRMED CREATED:20230213T155900Z ATTENDEE;RSVP=TRUE;ROLE=OPT-PARTICIPANT;PARTSTAT=ACCEPTED;CN=Mamoun unde fined:mailto:maamoon@callback.com DURATION:PT60M END:VEVENT END:VCALENDAR"
}
```

</details>

---




### deleteCallbackByConversationId

remove callback by conversation ID

used to deactive remove callback by conversation ID

<details>

> Requires Authentication: true

#### Parameters

- **tenantId** (required) - TYPE:  [string](#string) - Tennant ID
- **conversationId** (required) - TYPE:  [string](#string) - Conversation ID
  

```javascript

const response = await smartVideoSDK.callbacks.deleteCallbackByConversationId({
    tenantId,
    conversationId
});

console.log(response.data); // response   

```

#### Return Type
> returns:  [AxiosPromise](https://github.com/axios/axios#response-schema)<[CallbackObject](#CallbackObject)>

> Example Response:
```json 
{
  "genesys" : {
    "queueId" : "a1731678-13f6-4ab0-ac6d-f82813b7abee",
    "scriptId" : "950be2a3-65b7-461e-8ba2-f8fb62c2d95a",
    "conversation" : {
      "id" : "950be2a3-65b7-461e-8ba2-f8fb62c2d95a"
    }
  },
  "videoengager" : {
    "date" : 1676303962674,
    "code" : "k8DOH4",
    "subject" : "bla bla",
    "created" : "2023-02-13T15:59:22.684Z",
    "autoAnswer" : true,
    "active" : true,
    "meetingUrl" : "https://dev.videoengager.com/ve/k8DOH4",
    "duration" : 60,
    "phone" : "+971585194108",
    "name" : "Mamoun H",
    "agentUrl" : "https://dev.videoengager.com/ve/iqTF6W",
    "email" : "maamoon@callback.com",
    "scheduleId" : "82212b25-0976-2048-ed3e-6cb1fac47977",
    "customAttributes" : {
      "additionalProp1" : "value1",
      "additionalProp3" : "value2"
    }
  },
  "emailSent" : true,
  "icsCalendarData" : "BEGIN:VCALENDAR VERSION:2.0 CALSCALE:GREGORIAN PRODID:adamgibbons/ics METHOD:REQUEST X-PUBLISHED-TTL:PT1H BEGIN:VEVENT UID:82212b25-0976-2048-ed3e-6cb1fac47977 SUMMARY:Video Meeting DTSTAMP:20230213T155700Z DTSTART:20230213T155900Z SEQUENCE:1 DESCRIPTION:Start your video meeting by opening URL in your browser URL:https://dev.videoengager.com/ve/k8DOH4 LOCATION:https://dev.videoengager.com/ve/k8DOH4 STATUS:CONFIRMED CREATED:20230213T155900Z ATTENDEE;RSVP=TRUE;ROLE=OPT-PARTICIPANT;PARTSTAT=ACCEPTED;CN=Mamoun unde fined:mailto:maamoon@callback.com DURATION:PT60M END:VEVENT END:VCALENDAR"
}
```

</details>

---




### getCallbackByConversationId

Get Single Callback

used to retrieve callback by conversation id

<details>

> Requires Authentication: true

#### Parameters

- **tenantId** (required) - TYPE:  [string](#string) - Tennant ID
- **conversationId** (required) - TYPE:  [string](#string) - Conversation ID
  

```javascript

const response = await smartVideoSDK.callbacks.getCallbackByConversationId({
    tenantId,
    conversationId
});

console.log(response.data); // response   

```

#### Return Type
> returns:  [AxiosPromise](https://github.com/axios/axios#response-schema)<[CallbackObject](#CallbackObject)>

> Example Response:
```json 
{
  "genesys" : {
    "queueId" : "a1731678-13f6-4ab0-ac6d-f82813b7abee",
    "scriptId" : "950be2a3-65b7-461e-8ba2-f8fb62c2d95a",
    "conversation" : {
      "id" : "950be2a3-65b7-461e-8ba2-f8fb62c2d95a"
    }
  },
  "videoengager" : {
    "date" : 1676303962674,
    "code" : "k8DOH4",
    "subject" : "bla bla",
    "created" : "2023-02-13T15:59:22.684Z",
    "autoAnswer" : true,
    "active" : true,
    "meetingUrl" : "https://dev.videoengager.com/ve/k8DOH4",
    "duration" : 60,
    "phone" : "+971585194108",
    "name" : "Mamoun H",
    "agentUrl" : "https://dev.videoengager.com/ve/iqTF6W",
    "email" : "maamoon@callback.com",
    "scheduleId" : "82212b25-0976-2048-ed3e-6cb1fac47977",
    "customAttributes" : {
      "additionalProp1" : "value1",
      "additionalProp3" : "value2"
    }
  },
  "emailSent" : true,
  "icsCalendarData" : "BEGIN:VCALENDAR VERSION:2.0 CALSCALE:GREGORIAN PRODID:adamgibbons/ics METHOD:REQUEST X-PUBLISHED-TTL:PT1H BEGIN:VEVENT UID:82212b25-0976-2048-ed3e-6cb1fac47977 SUMMARY:Video Meeting DTSTAMP:20230213T155700Z DTSTART:20230213T155900Z SEQUENCE:1 DESCRIPTION:Start your video meeting by opening URL in your browser URL:https://dev.videoengager.com/ve/k8DOH4 LOCATION:https://dev.videoengager.com/ve/k8DOH4 STATUS:CONFIRMED CREATED:20230213T155900Z ATTENDEE;RSVP=TRUE;ROLE=OPT-PARTICIPANT;PARTSTAT=ACCEPTED;CN=Mamoun unde fined:mailto:maamoon@callback.com DURATION:PT60M END:VEVENT END:VCALENDAR"
}
```

</details>

---




### getTennantAvailability

Get Availablity of tennant for tennant

should return Object of dates strings with true or false

<details>

> Requires Authentication: false

#### Parameters

- **tenantId** (required) - TYPE:  [string](#string) - Tennant ID
- **numberOfDays** (required) - TYPE:  [number](#number) - number of days to return
- **start** (required) - TYPE:  [string](#string) - start date (Number, Date ISO String, or Date)
  

```javascript

const response = await smartVideoSDK.callbacks.getTennantAvailability({
    tenantId,
    numberOfDays,
    start
});

console.log(response.data); // response   

```

#### Return Type
> returns:  [AxiosPromise](https://github.com/axios/axios#response-schema)<[{ [key: string]: number; }](#{ [key: string]: number; })>

> Example Response:
```json 
{
  "2023-02-13T15:59:22.684Z" : 1,
  "2023-02-13T16:59:22.684Z" : 1,
  "2023-02-13T17:59:22.684Z" : 0
}
```

</details>

---




### getTennantCalendar

Get Calendar configuration of tennant

Calendar configuration of tennant can be set in Settings page

<details>

> Requires Authentication: false

#### Parameters

- **tenantId** (required) - TYPE:  [string](#string) - Tennant ID
  

```javascript

const response = await smartVideoSDK.callbacks.getTennantCalendar({
    tenantId
});

console.log(response.data); // response   

```

#### Return Type
> returns:  [AxiosPromise](https://github.com/axios/axios#response-schema)<[string](#string)>


</details>

---




### listCallbacks

List Callbacks for specific tennant.

Returns a list of callbacks for specific tenant and period with Server Side Pagination, Sorting and Filtering.

<details>

> Requires Authentication: true

#### Parameters

- **tenantId** (required) - TYPE:  [string](#string) - Tenant ID
- **from** (required) - TYPE:  [string](#string) - start of the period
- **to** (required) - TYPE:  [string](#string) - End of the period
  
- **preferedAgent** - TYPE:  [string](#string) - filter result by preferred agent
- **orderBy** - TYPE:  [&#39;duration&#39; | &#39;created&#39; | &#39;date&#39; | &#39;canceled&#39;](#&#39;duration&#39; | &#39;created&#39; | &#39;date&#39; | &#39;canceled&#39;) - Order by (default is date)
- **asc** - TYPE:  [1 | -1](#1 | -1) - Order by ascending or descending
- **pageSize** - TYPE:  [number](#number) - Page size
- **page** - TYPE:  [number](#number) - Page number
- **searchBy** - TYPE:  [string](#string) - * Search by specific field (will search in all fields if not specified) &lt;br /&gt; * Allowed values: visitor.name, visitor.email, conversationId, visitor.phone, \&quot;customAttributes.*\&quot; * (where * is the name of the custom attribute) 
- **searchString** - TYPE:  [string](#string) - Search string
- **active** - TYPE:  [boolean](#boolean) - Filter by active or inactive
- **queueId** - TYPE:  [string](#string) - Filter by queue

```javascript

const response = await smartVideoSDK.callbacks.listCallbacks({
    tenantId,
    from,
    to,
    preferedAgent,
    orderBy,
    asc,
    pageSize,
    page,
    searchBy,
    searchString,
    active,
    queueId
});

console.log(response.data); // response   

```

#### Return Type
> returns:  [AxiosPromise](https://github.com/axios/axios#response-schema)<[CallbacksList](#CallbacksList)>

> Example Response:
```json 
{
  "queueId" : "82212b25-0976-2048-ed3e-6cb1fac47977",
  "data" : [ {
    "genesys" : {
      "queueId" : "a1731678-13f6-4ab0-ac6d-f82813b7abee",
      "scriptId" : "950be2a3-65b7-461e-8ba2-f8fb62c2d95a",
      "conversation" : {
        "id" : "950be2a3-65b7-461e-8ba2-f8fb62c2d95a"
      }
    },
    "videoengager" : {
      "date" : 1676303962674,
      "code" : "k8DOH4",
      "subject" : "bla bla",
      "created" : "2023-02-13T15:59:22.684Z",
      "autoAnswer" : true,
      "active" : true,
      "meetingUrl" : "https://dev.videoengager.com/ve/k8DOH4",
      "duration" : 60,
      "phone" : "+971585194108",
      "name" : "Mamoun H",
      "agentUrl" : "https://dev.videoengager.com/ve/iqTF6W",
      "email" : "maamoon@callback.com",
      "scheduleId" : "82212b25-0976-2048-ed3e-6cb1fac47977",
      "customAttributes" : {
        "additionalProp1" : "value1",
        "additionalProp3" : "value2"
      }
    },
    "emailSent" : true,
    "icsCalendarData" : "BEGIN:VCALENDAR VERSION:2.0 CALSCALE:GREGORIAN PRODID:adamgibbons/ics METHOD:REQUEST X-PUBLISHED-TTL:PT1H BEGIN:VEVENT UID:82212b25-0976-2048-ed3e-6cb1fac47977 SUMMARY:Video Meeting DTSTAMP:20230213T155700Z DTSTART:20230213T155900Z SEQUENCE:1 DESCRIPTION:Start your video meeting by opening URL in your browser URL:https://dev.videoengager.com/ve/k8DOH4 LOCATION:https://dev.videoengager.com/ve/k8DOH4 STATUS:CONFIRMED CREATED:20230213T155900Z ATTENDEE;RSVP=TRUE;ROLE=OPT-PARTICIPANT;PARTSTAT=ACCEPTED;CN=Mamoun unde fined:mailto:maamoon@callback.com DURATION:PT60M END:VEVENT END:VCALENDAR"
  }, {
    "genesys" : {
      "queueId" : "a1731678-13f6-4ab0-ac6d-f82813b7abee",
      "scriptId" : "950be2a3-65b7-461e-8ba2-f8fb62c2d95a",
      "conversation" : {
        "id" : "950be2a3-65b7-461e-8ba2-f8fb62c2d95a"
      }
    },
    "videoengager" : {
      "date" : 1676303962674,
      "code" : "k8DOH4",
      "subject" : "bla bla",
      "created" : "2023-02-13T15:59:22.684Z",
      "autoAnswer" : true,
      "active" : true,
      "meetingUrl" : "https://dev.videoengager.com/ve/k8DOH4",
      "duration" : 60,
      "phone" : "+971585194108",
      "name" : "Mamoun H",
      "agentUrl" : "https://dev.videoengager.com/ve/iqTF6W",
      "email" : "maamoon@callback.com",
      "scheduleId" : "82212b25-0976-2048-ed3e-6cb1fac47977",
      "customAttributes" : {
        "additionalProp1" : "value1",
        "additionalProp3" : "value2"
      }
    },
    "emailSent" : true,
    "icsCalendarData" : "BEGIN:VCALENDAR VERSION:2.0 CALSCALE:GREGORIAN PRODID:adamgibbons/ics METHOD:REQUEST X-PUBLISHED-TTL:PT1H BEGIN:VEVENT UID:82212b25-0976-2048-ed3e-6cb1fac47977 SUMMARY:Video Meeting DTSTAMP:20230213T155700Z DTSTART:20230213T155900Z SEQUENCE:1 DESCRIPTION:Start your video meeting by opening URL in your browser URL:https://dev.videoengager.com/ve/k8DOH4 LOCATION:https://dev.videoengager.com/ve/k8DOH4 STATUS:CONFIRMED CREATED:20230213T155900Z ATTENDEE;RSVP=TRUE;ROLE=OPT-PARTICIPANT;PARTSTAT=ACCEPTED;CN=Mamoun unde fined:mailto:maamoon@callback.com DURATION:PT60M END:VEVENT END:VCALENDAR"
  }, {
    "genesys" : {
      "queueId" : "a1731678-13f6-4ab0-ac6d-f82813b7abee",
      "scriptId" : "950be2a3-65b7-461e-8ba2-f8fb62c2d95a",
      "conversation" : {
        "id" : "950be2a3-65b7-461e-8ba2-f8fb62c2d95a"
      }
    },
    "videoengager" : {
      "date" : 1676303962674,
      "code" : "k8DOH4",
      "subject" : "bla bla",
      "created" : "2023-02-13T15:59:22.684Z",
      "autoAnswer" : true,
      "active" : true,
      "meetingUrl" : "https://dev.videoengager.com/ve/k8DOH4",
      "duration" : 60,
      "phone" : "+971585194108",
      "name" : "Mamoun H",
      "agentUrl" : "https://dev.videoengager.com/ve/iqTF6W",
      "email" : "maamoon@callback.com",
      "scheduleId" : "82212b25-0976-2048-ed3e-6cb1fac47977",
      "customAttributes" : {
        "additionalProp1" : "value1",
        "additionalProp3" : "value2"
      }
    },
    "emailSent" : true,
    "icsCalendarData" : "BEGIN:VCALENDAR VERSION:2.0 CALSCALE:GREGORIAN PRODID:adamgibbons/ics METHOD:REQUEST X-PUBLISHED-TTL:PT1H BEGIN:VEVENT UID:82212b25-0976-2048-ed3e-6cb1fac47977 SUMMARY:Video Meeting DTSTAMP:20230213T155700Z DTSTART:20230213T155900Z SEQUENCE:1 DESCRIPTION:Start your video meeting by opening URL in your browser URL:https://dev.videoengager.com/ve/k8DOH4 LOCATION:https://dev.videoengager.com/ve/k8DOH4 STATUS:CONFIRMED CREATED:20230213T155900Z ATTENDEE;RSVP=TRUE;ROLE=OPT-PARTICIPANT;PARTSTAT=ACCEPTED;CN=Mamoun unde fined:mailto:maamoon@callback.com DURATION:PT60M END:VEVENT END:VCALENDAR"
  }, {
    "genesys" : {
      "queueId" : "a1731678-13f6-4ab0-ac6d-f82813b7abee",
      "scriptId" : "950be2a3-65b7-461e-8ba2-f8fb62c2d95a",
      "conversation" : {
        "id" : "950be2a3-65b7-461e-8ba2-f8fb62c2d95a"
      }
    },
    "videoengager" : {
      "date" : 1676303962674,
      "code" : "k8DOH4",
      "subject" : "bla bla",
      "created" : "2023-02-13T15:59:22.684Z",
      "autoAnswer" : true,
      "active" : true,
      "meetingUrl" : "https://dev.videoengager.com/ve/k8DOH4",
      "duration" : 60,
      "phone" : "+971585194108",
      "name" : "Mamoun H",
      "agentUrl" : "https://dev.videoengager.com/ve/iqTF6W",
      "email" : "maamoon@callback.com",
      "scheduleId" : "82212b25-0976-2048-ed3e-6cb1fac47977",
      "customAttributes" : {
        "additionalProp1" : "value1",
        "additionalProp3" : "value2"
      }
    },
    "emailSent" : true,
    "icsCalendarData" : "BEGIN:VCALENDAR VERSION:2.0 CALSCALE:GREGORIAN PRODID:adamgibbons/ics METHOD:REQUEST X-PUBLISHED-TTL:PT1H BEGIN:VEVENT UID:82212b25-0976-2048-ed3e-6cb1fac47977 SUMMARY:Video Meeting DTSTAMP:20230213T155700Z DTSTART:20230213T155900Z SEQUENCE:1 DESCRIPTION:Start your video meeting by opening URL in your browser URL:https://dev.videoengager.com/ve/k8DOH4 LOCATION:https://dev.videoengager.com/ve/k8DOH4 STATUS:CONFIRMED CREATED:20230213T155900Z ATTENDEE;RSVP=TRUE;ROLE=OPT-PARTICIPANT;PARTSTAT=ACCEPTED;CN=Mamoun unde fined:mailto:maamoon@callback.com DURATION:PT60M END:VEVENT END:VCALENDAR"
  }, {
    "genesys" : {
      "queueId" : "a1731678-13f6-4ab0-ac6d-f82813b7abee",
      "scriptId" : "950be2a3-65b7-461e-8ba2-f8fb62c2d95a",
      "conversation" : {
        "id" : "950be2a3-65b7-461e-8ba2-f8fb62c2d95a"
      }
    },
    "videoengager" : {
      "date" : 1676303962674,
      "code" : "k8DOH4",
      "subject" : "bla bla",
      "created" : "2023-02-13T15:59:22.684Z",
      "autoAnswer" : true,
      "active" : true,
      "meetingUrl" : "https://dev.videoengager.com/ve/k8DOH4",
      "duration" : 60,
      "phone" : "+971585194108",
      "name" : "Mamoun H",
      "agentUrl" : "https://dev.videoengager.com/ve/iqTF6W",
      "email" : "maamoon@callback.com",
      "scheduleId" : "82212b25-0976-2048-ed3e-6cb1fac47977",
      "customAttributes" : {
        "additionalProp1" : "value1",
        "additionalProp3" : "value2"
      }
    },
    "emailSent" : true,
    "icsCalendarData" : "BEGIN:VCALENDAR VERSION:2.0 CALSCALE:GREGORIAN PRODID:adamgibbons/ics METHOD:REQUEST X-PUBLISHED-TTL:PT1H BEGIN:VEVENT UID:82212b25-0976-2048-ed3e-6cb1fac47977 SUMMARY:Video Meeting DTSTAMP:20230213T155700Z DTSTART:20230213T155900Z SEQUENCE:1 DESCRIPTION:Start your video meeting by opening URL in your browser URL:https://dev.videoengager.com/ve/k8DOH4 LOCATION:https://dev.videoengager.com/ve/k8DOH4 STATUS:CONFIRMED CREATED:20230213T155900Z ATTENDEE;RSVP=TRUE;ROLE=OPT-PARTICIPANT;PARTSTAT=ACCEPTED;CN=Mamoun unde fined:mailto:maamoon@callback.com DURATION:PT60M END:VEVENT END:VCALENDAR"
  } ],
  "preferedAgent" : "82212b25-0976-2048-ed3e-6cb1fac47977",
  "count" : 52,
  "searchBy" : "customAttributes.customID",
  "pageSize" : 100,
  "orderBy" : "date",
  "active" : true,
  "asc" : 1,
  "searchString" : "asdasd",
  "from" : "2023-02-13T15:59:22.684Z",
  "to" : "2023-02-13T15:59:22.684Z",
  "page" : 1
}
```

</details>

---




### removeCallbackByScheduleId

remove callback by schedule ID

used to deactive remove callback by schedule ID

<details>

> Requires Authentication: true

#### Parameters

- **tenantId** (required) - TYPE:  [string](#string) - Tennant ID
- **scheduleId** (required) - TYPE:  [string](#string) - Schedule ID
  

```javascript

const response = await smartVideoSDK.callbacks.removeCallbackByScheduleId({
    tenantId,
    scheduleId
});

console.log(response.data); // response   

```

#### Return Type
> returns:  [AxiosPromise](https://github.com/axios/axios#response-schema)<[CallbackObject](#CallbackObject)>

> Example Response:
```json 
{
  "genesys" : {
    "queueId" : "a1731678-13f6-4ab0-ac6d-f82813b7abee",
    "scriptId" : "950be2a3-65b7-461e-8ba2-f8fb62c2d95a",
    "conversation" : {
      "id" : "950be2a3-65b7-461e-8ba2-f8fb62c2d95a"
    }
  },
  "videoengager" : {
    "date" : 1676303962674,
    "code" : "k8DOH4",
    "subject" : "bla bla",
    "created" : "2023-02-13T15:59:22.684Z",
    "autoAnswer" : true,
    "active" : true,
    "meetingUrl" : "https://dev.videoengager.com/ve/k8DOH4",
    "duration" : 60,
    "phone" : "+971585194108",
    "name" : "Mamoun H",
    "agentUrl" : "https://dev.videoengager.com/ve/iqTF6W",
    "email" : "maamoon@callback.com",
    "scheduleId" : "82212b25-0976-2048-ed3e-6cb1fac47977",
    "customAttributes" : {
      "additionalProp1" : "value1",
      "additionalProp3" : "value2"
    }
  },
  "emailSent" : true,
  "icsCalendarData" : "BEGIN:VCALENDAR VERSION:2.0 CALSCALE:GREGORIAN PRODID:adamgibbons/ics METHOD:REQUEST X-PUBLISHED-TTL:PT1H BEGIN:VEVENT UID:82212b25-0976-2048-ed3e-6cb1fac47977 SUMMARY:Video Meeting DTSTAMP:20230213T155700Z DTSTART:20230213T155900Z SEQUENCE:1 DESCRIPTION:Start your video meeting by opening URL in your browser URL:https://dev.videoengager.com/ve/k8DOH4 LOCATION:https://dev.videoengager.com/ve/k8DOH4 STATUS:CONFIRMED CREATED:20230213T155900Z ATTENDEE;RSVP=TRUE;ROLE=OPT-PARTICIPANT;PARTSTAT=ACCEPTED;CN=Mamoun unde fined:mailto:maamoon@callback.com DURATION:PT60M END:VEVENT END:VCALENDAR"
}
```

</details>

---




### updateCallbackByConversationId

Update Single Callback

used to update callback schedule time by conversation id

<details>

> Requires Authentication: true

#### Parameters

- **callbackUpdateRequest** (required) - TYPE:  [CallbackUpdateRequest](#CallbackUpdateRequest) - callback object
- **tenantId** (required) - TYPE:  [string](#string) - Tennant ID
- **conversationId** (required) - TYPE:  [string](#string) - Conversation ID
  

```javascript

const response = await smartVideoSDK.callbacks.updateCallbackByConversationId({
    callbackUpdateRequest,
    tenantId,
    conversationId
});

console.log(response.data); // response   

```

#### Return Type
> returns:  [AxiosPromise](https://github.com/axios/axios#response-schema)<[CallbackObject](#CallbackObject)>

> Example Response:
```json 
{
  "genesys" : {
    "queueId" : "a1731678-13f6-4ab0-ac6d-f82813b7abee",
    "scriptId" : "950be2a3-65b7-461e-8ba2-f8fb62c2d95a",
    "conversation" : {
      "id" : "950be2a3-65b7-461e-8ba2-f8fb62c2d95a"
    }
  },
  "videoengager" : {
    "date" : 1676303962674,
    "code" : "k8DOH4",
    "subject" : "bla bla",
    "created" : "2023-02-13T15:59:22.684Z",
    "autoAnswer" : true,
    "active" : true,
    "meetingUrl" : "https://dev.videoengager.com/ve/k8DOH4",
    "duration" : 60,
    "phone" : "+971585194108",
    "name" : "Mamoun H",
    "agentUrl" : "https://dev.videoengager.com/ve/iqTF6W",
    "email" : "maamoon@callback.com",
    "scheduleId" : "82212b25-0976-2048-ed3e-6cb1fac47977",
    "customAttributes" : {
      "additionalProp1" : "value1",
      "additionalProp3" : "value2"
    }
  },
  "emailSent" : true,
  "icsCalendarData" : "BEGIN:VCALENDAR VERSION:2.0 CALSCALE:GREGORIAN PRODID:adamgibbons/ics METHOD:REQUEST X-PUBLISHED-TTL:PT1H BEGIN:VEVENT UID:82212b25-0976-2048-ed3e-6cb1fac47977 SUMMARY:Video Meeting DTSTAMP:20230213T155700Z DTSTART:20230213T155900Z SEQUENCE:1 DESCRIPTION:Start your video meeting by opening URL in your browser URL:https://dev.videoengager.com/ve/k8DOH4 LOCATION:https://dev.videoengager.com/ve/k8DOH4 STATUS:CONFIRMED CREATED:20230213T155900Z ATTENDEE;RSVP=TRUE;ROLE=OPT-PARTICIPANT;PARTSTAT=ACCEPTED;CN=Mamoun unde fined:mailto:maamoon@callback.com DURATION:PT60M END:VEVENT END:VCALENDAR"
}
```

</details>





</details>





---
---
## Objects Reference
---


#### AuthenticatePartner200Response

<details>

### Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **token** | **string** |  | [optional] [default to undefined] |
| **token_expiration** | **number** |  | [optional] [default to undefined] |

</details>

#### AuthenticatePartner400Response

<details>

### Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **error** | **string** |  | [optional] [default to undefined] |

</details>

#### CallbackObject

<details>

### Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **genesys** | [**CallbackObjectGenesys**](#CallbackObjectGenesys) |  | [optional] [default to undefined] |
| **videoengager** | [**CallbackObjectVideoengager**](#CallbackObjectVideoengager) |  | [optional] [default to undefined] |
| **icsCalendarData** | **string** | ics Data, can be downloaded as ics file, and then send as attachment in the mail | [optional] [default to undefined] |
| **emailSent** | **boolean** | wether notification email has been send to visitor or not | [optional] [default to undefined] |

</details>

#### CallbackObjectGenesys

<details>

### Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **scriptId** | **string** |  | [optional] [default to undefined] |
| **queueId** | **string** |  | [optional] [default to undefined] |
| **conversation** | [**CallbackObjectGenesysConversation**](#CallbackObjectGenesysConversation) |  | [optional] [default to undefined] |

</details>

#### CallbackObjectGenesysConversation

<details>

### Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **string** |  | [default to undefined] |

</details>

#### CallbackObjectVideoengager

<details>

### Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **autoAnswer** | **boolean** |  | [default to undefined] |
| **name** | **string** | visitor Name | [default to undefined] |
| **email** | **string** | visitor Email | [default to undefined] |
| **phone** | **string** | visitor Phone | [default to undefined] |
| **subject** | **string** | subject | [default to undefined] |
| **meetingUrl** | **string** | Visitor Join Meeting URL | [default to undefined] |
| **code** | **string** | Short URL Code for generating short URL | [default to undefined] |
| **date** | **number** | scheduled Time | [default to undefined] |
| **agentUrl** | **string** | Agent Meeting URL, Only Available upon creation | [optional] [default to undefined] |
| **created** | **string** | Created At | [default to undefined] |
| **duration** | **number** | Duration of callback in minutes | [default to undefined] |
| **scheduleId** | **string** | scheduleId | [default to undefined] |
| **customAttributes** | **{ [key: string]: string; }** | Custom Attributes | [optional] [default to undefined] |
| **active** | **boolean** | wether this callback is active or canceled | [default to undefined] |

</details>

#### CallbackUpdateError

<details>

### Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **error** | **string** |  | [optional] [default to undefined] |

</details>

#### CallbackUpdateRequest

<details>

### Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **date** | **string** | Date to update callback to (ISO 8601 format), Note that date should be in the future and not more than 30 days from now | [default to undefined] |

</details>

#### CallbacksList

<details>

### Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **data** | [**Array&lt;CallbackObject&gt;**](#Array&lt;CallbackObject&gt;) |  | [optional] [default to undefined] |
| **from** | **string** |  | [optional] [default to undefined] |
| **to** | **string** |  | [optional] [default to undefined] |
| **count** | **number** |  | [optional] [default to undefined] |
| **page** | **number** |  | [optional] [default to undefined] |
| **pageSize** | **number** |  | [optional] [default to undefined] |
| **orderBy** | **string** |  | [optional] [default to undefined] |
| **asc** | **number** |  | [optional] [default to undefined] |
| **preferedAgent** | **string** |  | [optional] [default to undefined] |
| **active** | **boolean** |  | [optional] [default to undefined] |
| **queueId** | **string** |  | [optional] [default to undefined] |
| **searchBy** | **string** |  | [optional] [default to undefined] |
| **searchString** | **string** |  | [optional] [default to undefined] |

</details>

#### CreateCallbackRequest

<details>

### Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **preferedAgent** | **string** | used to add agent ID preferred routing, MUST exist if callbackOwned is True; | [optional] [default to undefined] |
| **callbackOwned** | **boolean** | used to give prefered Agent ownership of the callback, will not work without prefered Agent ID | [optional] [default to undefined] |
| **firstname** | **string** |  | [default to undefined] |
| **lastname** | **string** |  | [optional] [default to undefined] |
| **customer_email** | **string** |  | [default to undefined] |
| **creator** | **string** | Identify the creater of the scheduled meeting. | [optional] [default to undefined] |
| **_customer_number** | **string** |  | [default to undefined] |
| **_desired_time** | **string** |  | [default to undefined] |
| **veSubject** | **string** |  | [optional] [default to undefined] |
| **customer_subject** | **string** |  | [optional] [default to undefined] |
| **scriptId** | **string** | used to add script ID  to the callback (if not provided, default script in settings will be used) | [optional] [default to undefined] |
| **queueId** | **string** | used to add queue ID  to the callback (if not provided, default script in settings will be used) | [optional] [default to undefined] |

</details>
