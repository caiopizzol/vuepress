# Getting Started

<Block>

## Login

You can use this API to login the application with your account.

### Endpoint

```bash
POST /auth/login
```

### Parameters

|   Name   |  Type  | Description |      Required      |
| :------: | :----: | :---------: | :----------------: |
| username | string |  username   | :heavy_check_mark: |
|  phone   | string |    phone    | :heavy_minus_sign: |
| password | string |  password   | :heavy_check_mark: |

### Response

```json
Status: 200

{
  "username": "username",
  "email": "email"
}
```

<Example>

<CURL>
```bash
curl -X GET https://api.github.com/users/sqrthree
```
</CURL>

</Example>

</Block>

<Block>

## Signup

You can use this API to signup the application with your account.

### Endpoint

```bash
POST /auth/signup
```

### Parameters

|   Name   |  Type  | Description |      Required      |
| :------: | :----: | :---------: | :----------------: |
| username | string |  username   | :heavy_check_mark: |
|  phone   | string |    phone    | :heavy_check_mark: |
| password | string |  password   | :heavy_check_mark: |

### Response

```json
Status: 200

{
  "username": "username",
  "email": "email"
}
```

<Example>

<CURL>
```bash
curl -X POST http://api.example.com/api/auth/login \
  --data '{
    "username": "my-username",
    "password": "my-password"
  }'
```
</CURL>

</Example>

</Block>





## Agreement




## List all agreements

A detailed description of the operation. Use markdown for rich text representation, such as **bold**, *italic*, and [links](https://swagger.io).

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




## Get agreement by ID

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


# Core Resources




## AgreementLink




### id

Type: string

Id of the agreement link
### title

Type: string

Request title of the agreement link
### date_created

Type: string

Date and time the agreement link was created
### date_updated

Type: string

Date and time the agreement link was created
### auth_mode

Type: string<br /><br />Enum: <ul><li>`PASSCODE`</li><li>`EMAILS`</li><li>`PUBLIC`</li></ul>

Authentication mode of the agreement link
### is_active

Type: boolean

Active status of the agreement link
### url_link

Type: string

Agreement link URL
### url

Type: string

Agreement link details





##### Example
```json
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
```



## Error

Parcial implementation of [RFC7807](https://tools.ietf.org/html/rfc7807) Problem Details object.



### error

Type: integer<br />_**required**_

Error code for internal control
### message

Type: string<br />_**required**_

A short, human-readable summary of the problem type.  It SHOULD NOT change from occurrence to occurrence of the problem.
### detail

Type: string<br />_**required**_

A human-readable explanation specific to this occurrence of the problem
### more_info

Type: string

A URI reference that explains the error in more detail (if needed).





##### Example
```json
{
    "error": 2003,
    "message": "Incorrect username and password.",
    "detail": "Ensure that the username and password included in the request are correct.",
    "more_info": "https://knowledgebase.harbourshare.com/knowledge/errors/2003"
}
```
