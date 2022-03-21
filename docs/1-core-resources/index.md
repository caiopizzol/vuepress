---
sidebarDepth: 0
---


## Agreement Link



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
