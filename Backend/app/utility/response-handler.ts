export interface ResponsesI {
  [key: string]: UserResponseI;
}

export interface UserResponseI {
  statusCode: number;
  message: string;
}

export class ResponseHandler{
  constructor(
      public data : any = null,
      public err : any = null
  ){
      this.data = data;
      this.err = err;
  }
}