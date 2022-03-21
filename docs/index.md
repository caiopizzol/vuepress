---
sidebarDepth: 0
home: false
---

## Harbour API
Easily and securely integrate Harbour with any system
::: tip
Our API is REST-based and receives and returns JSON-encoded responses using standard HTTP response codes and API key authentication — you can use this to easily query agreement data, create a new agreement, and more.
:::

## Documentation

## 1. Quick start

Try it out now (with our test sandbox account)

<CodeSwitcher :languages="{sh:'CURL',js:'NodeJS',py:'Python'}">
<template v-slot:sh>

```bash
curl -X GET 'https://api.myharbourshare.com/v1/agreements?offset=0&limit=10' \
    -H 'X-API-KEY: APIKEY-SANDBOX_a5a9a1d624164984b8ce93745d0766eb'
```

</template>
<template v-slot:js>

```js
const request = require('request');
const options = {
  method: 'GET',
  url: 'https://api.myharbourshare.com/v1/agreements?offset=0&limit=10',
  headers: {
    'X-API-KEY: APIKEY-SANDBOX_a5a9a1d624164984b8ce93745d0766eb'
  }
}
```

</template>
<template v-slot:py>

```python
import requests

url = 'https://api.myharbourshare.com/v1/agreements?offset=0&limit=10'
headers = 'X-API-KEY: APIKEY-SANDBOX_a5a9a1d624164984b8ce93745d0766eb'

r = requests.request('GET', url, headers)
```

</template>
</CodeSwitcher>

<Button>Get data ⚡</Button>

## 2. Authentication

The Harbour API uses token-based authentication. API keys must be included in the header of all requests made to the API.

You can generate new credentials and find your existing ones in your [Harbour Settings](https://www.myharbourshare.com/login).

```json
API Key

x-api-key: <YOUR_API_KEY>
```

::: danger
- You must never **use API tokens in the frontend of your application** or malicious users could discover them in your source code. You should only use them on your server.

- You should **limit API credentials access** to only the minimum number of people necessary.

- You should **not embed API credentials in your backend code even** if it’s not public - this increases the risk that they will be discovered. Instead, you should store them in configuration files or environment variables.
:::

## 3. Rate Limits

Harbour's API enforces a maximum volume of requests per minute for all clients. Unless contractually agreed otherwise, the maximum rate is XXX requests per minute.

Any request over the limit will return a `429 Too Many Requests` error.

```json
HTTP/1.1 429 Too Many Requests
Content-Type: application/json

{
  "error": {
    "type": "rate_limit",
    "message": "Rate limit exceeded. Please try again later."
  }
}
```

## 4. List Agreements

 detailed description of the operation. Use markdown for rich text representation, such as **bold**, *italic*, and [links](https://swagger.io).

```
GET /agreements
```




### Responses

**200** OK

#### Response Body:



| Field | Type | Description |
| ----- | ---- | ------------|
| agreements | array |  |
| count | integer |  |
| next | string |  |
| previous | string |  |


##### Example
```json
{
    "agreements": [
        {
            "id": "AGREE-123456_99999",
            "title": "Harbour License Agreement",
            "status": "Pending",
            "folder": "My agreements",
            "links": [
                {
                    "id": "AbCd1234",
                    "title": "Harbour License Agreement",
                    "date_created": "2022-01-01T23:59:59.999999Z",
                    "date_updated": "2022-01-01T23:59:59.999999Z",
                    "auth_mode": "PUBLIC",
                    "is_active": "true",
                    "url_link": "https://new.myharbourshare.com/agree/AbCd1234",
                    "url": "https://api.harbourshare.com/agreements/AGREE-123456_99999/links/AbCd1234"
                }
            ],
            "date_created": "2022-01-01T23:59:59.999999Z",
            "creator_email": "harbour@harbourshare.com",
            "pdf_file": "https://file.download",
            "url": "https://api.harbourshare.com/agreements/AGREE-123456_99999"
        }
    ],
    "count": 200,
    "next": "https://api.harbourshare.com/agreements?offset=20?limit=10",
    "previous": "https://api.harbourshare.com/agreements?offset=10?limit=10"
}
```


**401** 



**default** 




## 5. Get Agreement by ID

A detailed description of the operation. Use markdown for rich text representation, such as **bold**, *italic*, and [links](https://swagger.io).

```
GET /agreements/{agreement_id}
```




### Responses

**200** OK

#### Response Body [Agreement](agreement.html):



| Field | Type | Description |
| ----- | ---- | ------------|
| id | string | Id of the agreement |
| title | string | Title of the agreement |
| status | string<br /><br />Enum: <ul><li>`Draft`</li><li>`Pending`</li><li>`Ongoing`</li><li>`Completed`</li></ul> | Status of the agreement |
| folder | string | Folder where the agreement is located |
| links | array |  |
| date_created | string | Date and time the agreement was created |
| creator_email | string | Email of the person who created the agreement |
| pdf_file | string | The PDF file of the agreement |
| url | string | Agreement details |


##### Example
```json
{
    "id": "AGREE-123456_99999",
    "title": "Harbour License Agreement",
    "status": "Pending",
    "folder": "My agreements",
    "links": [
        {
            "id": "AbCd1234",
            "title": "Harbour License Agreement",
            "date_created": "2022-01-01T23:59:59.999999Z",
            "date_updated": "2022-01-01T23:59:59.999999Z",
            "auth_mode": "PUBLIC",
            "is_active": "true",
            "url_link": "https://new.myharbourshare.com/agree/AbCd1234",
            "url": "https://api.harbourshare.com/agreements/AGREE-123456_99999/links/AbCd1234"
        }
    ],
    "date_created": "2022-01-01T23:59:59.999999Z",
    "creator_email": "harbour@harbourshare.com",
    "pdf_file": "https://file.download",
    "url": "https://api.harbourshare.com/agreements/AGREE-123456_99999"
}
```


**401** 



**default**