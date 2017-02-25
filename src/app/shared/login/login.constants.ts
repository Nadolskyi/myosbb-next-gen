export class LoginConstants {
  public static get Login(){
    return {
      serverUrl: 'http://localhost:8080/myosbb',
      auth: 'Authorization',
      contentType: 'Content-Type',
      appJson: 'application/json',
      appXwfu: 'application/x-www-form-urlencoded',
      accept: 'Accept',
      basicToken: 'Basic  Y2xpZW50YXBwOjEyMzQ1Ng==',
      bearer: 'Bearer'
    }
  }
}
