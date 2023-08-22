PI Web API client for Angular 14+
===

## Overview
This repository has the source code package of the PI Web API client for Angular, which compiles for .NET Standard 2.0 and .NET Framework 4.5.2. PI Web API 2018 swagger specification was used to create this package.


## Requirements

 - PI Web API 2018+ instance available on your domain or a public network.


## Compability

This library is compatible with:

 - Angular 14.0+

## Installation

Install the package on your Angular app using npm:

```bash
$ npm install piwebapi-angular --save
```

## Consuming your library

Add PIWebApi as a provider on your Angular `AppModule`:

```typescript
import { PIWebAPIService } from 'angular-piwebapi';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PIWebApi],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## Documentation

All PI Web API server methods are mapped on this client. Please refer to [PI Web API help page](/piwebapi/help). 

## CORS

- Configure PI Web API CORS correctly to avoid being blocked by the browser.
 

### Set up the instance of the PI Web API top level object.

If you want to use basic or kerberos authentication, use the correct method as shown below:

#### Basic authentication

```typescript
    this.piwebapi.setBasicAuth("https://webserver/piwebapi/", "username", "password");
``` 

#### Kerberos authentication

```typescript
    this.piwebapi.setKerberosAuth("https://webserver/piwebapi/");
``` 

If you want to test if it connects, just execute the code below:

```typescript
    this.piwebapi.home.get().subscribe({
      next: (res) => { console.log(res) }, 
      error: (error) => { console.log(error.json()) }
    });
``` 

### Get the PI Data Archive WebId

```typescript
    this.piwebapi.dataServer.getByPath('\\\\SERVERNAME').subscribe({
      next: (res) => { console.log(res) }, 
      error: (error) => { console.log(error.json()) }
    });
```

### Create a new PI Point

```typescript
    var newPoint = new PWAPoint();
    newPoint.Name = "NEWPOINT";
    newPoint.Descriptor = "Test PI Point for Angular PI Web API Client";
    newPoint.PointClass = "classic";
    newPoint.PointType = "float32";
    newPoint.Future = false;
    this.piwebapi.dataServer.createPoint(piDataArchiveWebId, newPoint).subscribe({
      next: (res) => { console.log(res) }, 
      error: (error) => { console.log(error.json()) }
    });    
```

### Get PI Point WebId

```typescript
    this.piwebapi.point.getByPath("\\\\SERVERNAME\\sinusoid").subscribe({
      next: (res) => { console.log(res) }, 
      error: (error) => { console.log(error.json()) }
    }); 
```

### Using bulk methods

```typescript
    var webIds = []
    webIds.push(point1webId);
    webIds.push(point2webId);
    webIds.push(point3webId);

    this.piwebapi.streamSet.getRecordedAdHoc(webIds, undefined, "*", undefined, true, 1000, undefined, "*-3d", undefined).subscribe({
      next: (res) => { console.log(res) }, 
      error: (error) => { console.log(error.json()) }
    });           
```


## Licensing
Copyright PIDevGuru

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   
Please see the file named [LICENSE.md](LICENSE.md).
