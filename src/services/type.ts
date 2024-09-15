
enum iMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

type iAPIConfig = {
    method: iMethod,
    headers?: string,
    body?: string,
    params? : any,
    data? : any
}
 type iHeader = {
    Authorization? : string,
    'Content-Type'? : string,
    Accept?: string
 }