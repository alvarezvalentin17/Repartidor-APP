
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

}

var hoy = new Date();

var x = 0;
var b12 = 0;
var b20 = 0;
var r = 0;
var cajones = 0;

var a = document.getElementById("dato1").value;
var b = document.getElementById("dato2").value;
var c = document.getElementById("dato3").value;
var d = document.getElementById("dato4").value;



// Evento - ENTER
$(document).ready(function(){
  $("#dato1").keypress(function(e) {
      var code = (e.keyCode ? e.keyCode : e.which);
      if(code==13){
        sumarInputs1();
      }
  });
});

$(document).ready(function(){
  $("#dato2").keypress(function(e) {
      var code = (e.keyCode ? e.keyCode : e.which);
      if(code==13){
          sumarInputs2();
      }
  });
});

$(document).ready(function(){
  $("#dato3").keypress(function(e) {
      var code = (e.keyCode ? e.keyCode : e.which);
      if(code==13){
          sumarInputs3();
      }
  });
});

$(document).ready(function(){
  $("#dato4").keypress(function(e) {
      var code = (e.keyCode ? e.keyCode : e.which);
      if(code==13){
          sumarInputs4();
      }
  });
});

// Evento - Enter (fin)


//Recoleccion de datos - Inicia
  // Sifones
  function sumarInputs1() {
      a = document.getElementById("dato1").value;

      if (a == false) {
        swal({
          icon:'warning',
          title:'Debe ingresar un numero',
          timer:5000     
          })
      }
      else {
          x = x += parseInt(a);
          localStorage.setItem('sifonguardado',JSON.stringify(x))
          document.getElementById('mostrarX').innerHTML = x;
          cajones = x/6;
          document.getElementById('mostrarXX').innerHTML = (cajones.toFixed(1));
          document.getElementById('dato1').value = "";  
      }
      
  }


  // Bidones de 12 Lts
  function sumarInputs2() {
    b = document.getElementById("dato2").value;

    if (b == false) {
      swal({
        icon:'warning',
        title:'Debe ingresar un numero',
        timer:5000     
        })
    }
    else {
        b12 = b12 += parseInt(b);
        localStorage.setItem('b12guardado',JSON.stringify(b12))
        document.getElementById("mostrarB12").innerHTML = b12 
        document.getElementById('dato2').value = "";  
    }
    
}


  // Bidones de 20 Lts
  function sumarInputs3() {
    c = document.getElementById("dato3").value;

    if (c == false) {
        swal({
        icon:'warning',
        title:'Debe ingresar un numero',
        timer:5000     
        })
        }
    else {
        b20 = b20 += parseInt(c);
        localStorage.setItem('b20guardado',JSON.stringify(b20))
        document.getElementById("mostrarB20").innerHTML = b20;  
        document.getElementById('dato3').value = ""; 
    }
    
}

  // Refrescos
  function sumarInputs4() {
    d = document.getElementById("dato4").value;

    if (d == false) {
      swal({
        icon:'warning',
        title:'Debe ingresar un numero',
        timer:5000     
        })
    }
    else {
        r = r += parseInt(d);
        localStorage.setItem('refguardado',JSON.stringify(r))
        document.getElementById("mostrarR").innerHTML = r 
        document.getElementById('dato4').value = "";  
    }
    
}

// Recoleccion de datos - Termina 

// Limpieza - Inicia
function limpiar() {
  swal({
      title: "¡Aviso!",
      text: "¿Desea limpiar las ventas?",
      icon: "warning",
      buttons: true, 
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
              location.reload();
      }
                              
    });
}
// Limpieza - Termina
// Calculos

//Dinero total por producto - Inicia

function ventaTotal() {
  SifonPropio = x * 17;
  Bidon12Propio = b12 * 71;
  Bidon20Propio = b20 * 108;
  RefrescoPropio = r * 60;
  TotalGanancia = SifonPropio + Bidon12Propio + Bidon20Propio + RefrescoPropio;
  SifonFab = x * 11;
  Bidon12Fab = b12 * 109;
  Bidon20Fab = b20 * 182;
  TotalFabrica = SifonFab + Bidon12Fab + Bidon20Fab;
//Ganancias propias
  document.getElementById("GanSifonPropio").innerHTML= ("$ " + SifonPropio.toFixed(1)); 
  document.getElementById("GanBidon12Propio").innerHTML= ("$ " + Bidon12Propio.toFixed(1)); 
  document.getElementById("GanBidon20Propio").innerHTML= ("$ " + Bidon20Propio.toFixed(1)); 
  document.getElementById("GanRefrescoPropio").innerHTML= ("$ " + RefrescoPropio.toFixed(1)); 
  document.getElementById("totalGanancia").innerHTML= ("$ " + TotalGanancia.toFixed(1)); 
//Ganancias fabrica
  document.getElementById("GanSifonFab").innerHTML= ("$ " + SifonFab.toFixed(1)); 
  document.getElementById("GanBidon12Fab").innerHTML= ("$ " + Bidon12Fab.toFixed(1)); 
  document.getElementById("GanBidon20Fab").innerHTML= ("$ " + Bidon20Fab.toFixed(1)); 
  document.getElementById("GanRefrescoPropio").innerHTML= ("$ " + RefrescoPropio.toFixed(1)); 
  document.getElementById("totalGananciaFab").innerHTML= ("$ " + TotalFabrica.toFixed(1)); 


}

function ventaTotalSab() {
  SifonPropio = x*9.4;
  Bidon12Propio = b12 * 62;
  Bidon20Propio = b20 * 108;
  RefrescoPropio = r * 60;
  TotalGanancia = SifonPropio + Bidon12Propio + Bidon20Propio + RefrescoPropio;
  SifonFab = x *18.6;
  Bidon12Fab = b12 * 118;
  Bidon20Fab = b20 * 182;
  TotalFabrica = SifonFab + Bidon12Fab + Bidon20Fab;

//Ganancias propias
document.getElementById("GanSifonPropio").innerHTML= ("$ " + SifonPropio.toFixed(1)); 
document.getElementById("GanBidon12Propio").innerHTML= ("$ " + Bidon12Propio.toFixed(1)); 
document.getElementById("GanBidon20Propio").innerHTML= ("$ " + Bidon20Propio.toFixed(1)); 
document.getElementById("GanRefrescoPropio").innerHTML= ("$ " + RefrescoPropio.toFixed(1)); 
document.getElementById("totalGanancia").innerHTML= ("$ " + TotalGanancia.toFixed(1)); 
//Ganancias fabrica
document.getElementById("GanSifonFab").innerHTML= ("$ " + SifonFab.toFixed(1)); 
document.getElementById("GanBidon12Fab").innerHTML= ("$ " + Bidon12Fab.toFixed(1)); 
document.getElementById("GanBidon20Fab").innerHTML= ("$ " + Bidon20Fab.toFixed(1)); 
document.getElementById("totalGananciaFab").innerHTML= ("$ " + TotalFabrica.toFixed(1)); 
}


function recoverData(){
  if (x,b12,b20,r === 0){
    cajones=0;
    document.getElementById("dato1").value = JSON.parse(localStorage.getItem('sifonguardado'))
    document.getElementById("dato2").value = JSON.parse(localStorage.getItem('b12guardado'))
    document.getElementById("dato3").value = JSON.parse(localStorage.getItem('b20guardado'))
    document.getElementById("dato4").value = JSON.parse(localStorage.getItem('refguardado'))
    sumarInputs1(),sumarInputs2(),sumarInputs3(),sumarInputs4()
  } else {
    swal({
      icon:'warning',
      title:'No es posible recuperar datos, ya hay valores asignados',
      timer:5000     
      })
  }

}
