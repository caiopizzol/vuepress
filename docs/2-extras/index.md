---
sidebarDepth: 0
---

## Release Notes

### API v3.3
18th February 2022

#### 🏠 Expanded Proof of Address report
The Proof of Address report has been expanded to include new supported issuing countries and date validation logic.

The European Union, USA and Canada are now all supported issuing countries, in addition to the UK.

The report also now asserts whether the submitted document has a valid date of issue. We've added the valid_document_date sub-breakdown under document_classification. The relevant part of the response from the API contains the following for a clear breakdown result

```json
...
"document_classification":{
        "result":"clear",
        "breakdown":{
           "valid_document_date":{
              "result":"clear",
              "properties":{}
           }
...
```

## Versioning Policy

Refer to our API versioning guide for details on Harbour's versioning policy.

The following guide sets out Harbour's API versioning policy.

Harbour uses an API versioning policy to support the evolution and improvement of our services without impacting our current clients' integrations. It also creates a continuous and predictable release pattern for our API.

### How we version

Harbour introduces new changes to the API in 3 ways depending on the changes being implemented:

- current version implementation
- a minor version release
- a major version release

When Harbour releases a new API version, you can choose to upgrade to gain access to new features. When changes are implemented into the current API version, these features will become available to customers using this version, without needing an upgrade.

The most recent product improvements will be included in the latest version of the API. We recommend upgrading to the latest version in order to take advantage of new functionality and optimize for the best user experience.

Note: A publicly released version of an Harbour API will never change in any way that could impact your integration.

### Current version implementation

Harbour will implement changes into current API versions, without a new version release, when the changes being introduced will not interfere with your integration. These changes represent independent features which do not alter pre-existing logic. For example:

- adding new API endpoints
- adding optional request parameters to existing API endpoints
- sending webhooks for new event types (new event types won't be sent to existing webhooks)
- reordering properties returned from existing API endpoints
- adding a new report

In this case, you can use these changes immediately without having to upgrade API version (if you are currently on the API version in which the changes were introduced).

### Minor releases

Harbour will release a minor API version when the changes being introduced are considered backwards compatible, i.e. additive changes. For example:

- adding new properties to the responses from existing API endpoints
- altering the message attributes returned by validation failures or other errors
- adding new values to existing properties in responses from existing API endpoints

In this case, it is safe for you to move from one minor version to another (unless you consider additive changes to be backwards incompatible). Minor versions are released more frequently, and contain incremental changes to the API. An example of a minor release would be v3.1.

### Major releases
Harbour will release a major API version if any of the changes being introduced are backwards incompatible. In this case, if you would like to move to a new major version you will likely need to update your integration.

Major versions are released less frequently. An example of a major release would be v4.

Harbour considers the following changes to be backwards incompatible:

- removing a feature of the API
- removing or renaming a resource, field, method or an enum value
- changing the type of a field (eg. integer becomes string or float)
- changing the URL format
- adding a new or modifying an existing validation to an existing resource
- changing existing error response codes/messages
- modifying the expected payload of webhooks and async callbacks
- changing authentication mechanism
- changing the length of strings (eg. max_length changing from 100 to 255)
- changing the meaning of a field even if the type is unchanged