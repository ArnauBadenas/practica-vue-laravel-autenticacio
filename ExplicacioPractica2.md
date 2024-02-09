# EXPLICACIÓ EXERCICIS Ús d’interceptors Axios

## Ex4: De tornada al navegador i amb les developer tools en marxa, fes clic sobre My profile i torna a Links. Què observes? Quins codis d’error veus a la resposta de xarxa? Pots donar un raonament. (Afegeix un txt amb la teva explicació al lliurament del Classroom.)

Habent iniciat sessió, esborro la carpeta sessions, clico my profile i torno a links.
A la consola, rebo el missatge següent:
```bash
XHRGET http://localhost/api/user (Error 500, not found)
message	"file_put_contents(/var/www/html/storage/framework/sessions/TIC1MxQ08Ri6ZFEHhF6CKux9LiHfnMuI1eE5B6ao): Failed to open stream: No such file or directory"
```


Es pot observar que s'intenta obrir el fitxer de sessió del usuari dins de laravel, però no pot degut a que l'acabem d'esborrar.
Com no pot obtenir el fitxer de  sessió, no es pot completar el get del usuari ja que les dades s'agafen de dins del fitxer de sessió.

## Ex5: Cerca informació i intenta donar una solució on aplicar un axios interceptor. En quin arxiu creus que hem d’aplicar el codi?

Crec que el millor arxiu per a posar els interceptors es el mateix arxiu del plugin axios, anomenat en aquest cas axiosPlugin.ts. Això centralitza millor els interceptors i permet configurar-ho més fàcilment.

El que volem que fagi el interceptor es que si no hi ha un codi de sessió envii un missatge al usuari dient que inici sessió en lloc de dir directament que no troba el arxiu de sessions.
