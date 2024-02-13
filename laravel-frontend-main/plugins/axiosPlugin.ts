import axios from "axios";

export default defineNuxtPlugin(async (nuxtApp) => {
    //l'URL base
    axios.defaults.baseURL = "http://localhost";
    axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Accept"] = "application/json";
    //enviem les cookies amb la petició
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;

    //finalment fem una única petició ajax al
    //endpoint configurat per Laravel sanctum per obtenir la cookie CRSF inicial
    await axios.get("/sanctum/csrf-cookie");

    //Interceptors
    axios.interceptors.response.use(
        response => response,
        error => {
          const status = error.response ? error.response.status : null;
          
          if (status === 500) {
            console.log("Session file doesnt exist")            
          } else {
            // Handle other errors
          }
          
          return Promise.reject(error);
        }
      );
})
