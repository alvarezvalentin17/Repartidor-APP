
const firebaseConfig = {
    apiKey: "AIzaSyDs4gwSjRq_O-NYPXtQtuyXoAXFJqpZL_o",
    authDomain: "repartidor-app-aquapura.firebaseapp.com",
    projectId: "repartidor-app-aquapura",
    storageBucket: "repartidor-app-aquapura.appspot.com",
    messagingSenderId: "560220991748",
    appId: "1:560220991748:web:b54262c1574e00d3ad6051"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

// Guardar en base de datos la ganancia total.

function savedata() {
  swal({
    title: "¿Esta seguro de cerrar el dia?",
    text: "En caso afirmativo, se guardara las ganancias totales en la base de datos",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      //Guarda ganancia propias.
      db.collection("GananciaPropia").add({
        gananciatotal: TotalGanancia,
        fecha: hoy.toLocaleDateString('es-ES'),
      })
      .then((docRef) => {
          console.log("Registro exitoso (propio)");
      })
      .catch((error) => {
          swal("ERROR AL GRABAR DATOS")
      });

      //Guardar ganancia 
      db.collection("GananciaSoderia").add({
        gananciatotal: TotalFabrica,
        fecha: hoy.toLocaleDateString('es-ES'),
      })
      .then((docRef) => {
        console.log("Registro exitoso (Fabrica)");
      })
      .catch((error) => {
        swal("ERROR AL GRABAR DATOS")
      });

      swal("¡Los datos han sido guardados correctamente!", {
        icon: "success",
        }); 
        setTimeout(()=> {
          location.reload();
        },2000)
    }else {
      swal("Los datos no se han guardados")

    }
  })
}
      

  function view(){
      db.collection("GananciaPropia").where("fecha", "==", hoy.toLocaleDateString('es-ES'))
      .get().then((querySnapshot) => {
        basededatos1.innerHTML = ''
        
        querySnapshot.forEach((doc) => {
          const basededatos = doc.data();
            basededatos1.innerHTML+=
          `<p>Ganancia propia: $ ${basededatos.gananciatotal}</p>
          <p>Fecha: ${basededatos.fecha}</p>
          <p>-------------------------------</p>
          `
        });
      });
  
      db.collection("GananciaSoderia").where("fecha", "==", hoy.toLocaleDateString('es-ES'))
      .get().then((querySnapshot) => {
        basededatos1.innerHTML = ''
        
        querySnapshot.forEach((doc) => {
          const basededatos = doc.data();
            basededatos1.innerHTML+=
          `<p>Ganancia propia: $ ${basededatos.gananciatotal}</p>
          <p>Fecha: ${basededatos.fecha}</p>
          <p>-------------------------------</p>
          <p>Ganancia Fabrica: $ ${basededatos.gananciatotal}</p>
          <p>Fecha: ${basededatos.fecha}</p>
          `
        });
      });
    }