/**
 * BiggaHTTP Library
 * Simple library for making HTTP requests
 *
 * @version 1.0.0
 * @author  BiggaHD
 * @license MIT
 *
 **/

class BiggaHTTP {

  // GET Request 
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  // POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
   
  }

   // PUT Request
   async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    const resData = await response.json();
    return resData;
  }

  // DELETE Request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    
    const resData = await response(console.warn('Data Deleted!'));
    return resData;
  }
 }

 export const myHTTP = new BiggaHTTP();