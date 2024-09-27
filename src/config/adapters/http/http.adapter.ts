export abstract class HttpAdapter {
  //abstract get<T>(url:string, options: any)
  //abstract get(url: string, options: any): Promise<any>;   //esta es una declaracion muy generica que tambien funciona
  abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>;
}
