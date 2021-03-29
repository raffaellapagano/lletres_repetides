 //Exercici 1
        // Crea un array amb el teu nom on cada posició correspongui a una lletra.
        // Fes un bucle que recorri aquest array i mostri per consola cadascuna de les lletres.
        
        function repetirArray() {
        let arrayLetras = document.getElementById("formNom1").value;
        let text= "";
        for (let i = 0; i < arrayLetras.length; i++) {
            text= text + arrayLetras[i] + "\n";
        }

        document.getElementById("modalbody").innerHTML = text;
    }

        //Exercici 2
        // Al bucle, si la lletra és una vocal imprimeix a la consola: ‘He trobat la VOCAL: __’. Sinó, imprimeix: ‘He trobat la CONSONTANT: __’.
        // Si trobes un número, mostra per pantalla: ‘Els noms de persones no contenen el número: __’

        function vocalOconsonant() {
    
        let arrayLetras = (document.getElementById("formNom2").value).toUpperCase();
        let text= "";

        for (i = 0; i < arrayLetras.length; i++) {
            if (arrayLetras[i] == "A" || arrayLetras[i] == "E" || arrayLetras[i] == "I" || arrayLetras[i] == "O" || arrayLetras[i] == "U"){
                text= text + "He trobat la VOCAL " + arrayLetras[i] + "<br/>";
            } else if(isNaN(arrayLetras[i]) == false){
                text= text +"Els noms de persones no contenen el número: " + arrayLetras[i] + "<br/>";
            }else{
                text= text +"He trobat la CONSONANT " + arrayLetras[i] + "<br/>";
            }
        }
        document.getElementById("modalbody2").innerHTML ="Partim del nom " + arrayLetras + ":<br/>" + text;
    }

        // // Exercici 3
        // // Emmagatzemar en un Map les lletres de l'array y el nombre de vegades que apareixen.
        
        function numDeLletres() {
        let name = document.getElementById("formNom3").value;
        let text= ""; 
        let myName = name.split("");
        const myMap = new Map ();

        myName.map(letter => {
            if (myMap.has(letter)){
                let letterCount = myMap.get(letter);
                myMap.set(letter, letterCount + 1)
            }else{
                myMap.set(letter, 1);
            }
        });

        for (var [key, value] of myMap) {
            text = text + key + " : " + value + "<br/>";
          }
        
        document.getElementById("modalbody3").innerHTML = text;
    }
        
   

        // //Ejercicio 4
        // // Crea otra array con tu apellido donde cada posición corresponda a una letra.
        // // Combinar los dos arrays en uno. Además, añade una posición con un espacio vacío entre la primera y la segunda. Es decir, partimos de 'array name y surname y al terminar la ejecución sólo tendremos una que se llamará fullname.
        function nomCognom() {
        let name = document.getElementById("formNom4").value;
        let surname = document.getElementById("formCognom").value;
        let espacio = " ";

        let fullName = [].concat(name, espacio, surname);
        document.getElementById("modalbody4").innerHTML = fullName.join("");
        }

        // //Nivell 2 EXPRESIONS
        // // Crea una funció que retorni un array amb tots els email (sense repetir) del següent text:

        // var str =
        //     'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';

        function searchEmails() {
            let str = document.getElementById("comment").value;
            // str = str.split("");
            var myRe = /([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.\ñ])+\.([A-Za-z]{2,4})/gi;
            var myArray = str.match(myRe);
            const myUniqueArray = [...new Set(myArray)];
            document.getElementById("modalbody5").innerHTML = "Emails: " + myUniqueArray;
        }
        