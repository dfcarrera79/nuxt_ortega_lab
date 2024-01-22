<script setup lang="ts">
function reveal(clase: string) {
  var reveals = document.querySelectorAll(clase);

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

if (process.client) {
  window.addEventListener("scroll", () => reveal(".pgraph"));
  window.addEventListener("scroll", () => reveal(".container_img"));
  window.addEventListener("scroll", () => reveal("hr"));
  window.addEventListener("scroll", () => reveal(".custom-caption"));
}
</script>

<template>
  <div
    class="element fit column wrap justify-center items-center content-center q-pb-xl"
    style="height: 600px"
  >
    <div class="fit row wrap justify-center items-center content-center">
      <div class="container_outer_img">
        <div class="column container_img">
          <q-img
            src="../assets/img6.png"
            fit="scale-down"
            style="max-width: 500px"
          />
          <p class="q-mt-xs text-white et_pb_text_1">
            Plataforma WebLab para visualización de resultados ONLINE
          </p>
          <div style="max-width: 200px">
            <q-btn
              outline
              color="white"
              no-caps
              label="Saber más"
              class="custom-btn et_pb_text_1"
              href="http://ortegalabcloud.com/"
              style="font-weight: bold"
            >
              <q-icon left size="2em" name="chevron_right" />
            </q-btn>
          </div>
        </div>
      </div>
      <div class="wrap column q-pa-xl" style="max-width: 500px">
        <div
          class="text-left font-bold q-pt-sm custom-caption title"
          style="font-family: 'Lato'"
        >
          <div class="text-h4">¿Qué es WebLAB?</div>
        </div>
        <hr class="q-mb-md" />
        <div class="text-subtitle1 text-left text-white pgraph et_pb_text_1">
          <p>
            WebLAB es un sistema de acceso directo del cliente a los resultados
            de laboratorio de biopsia y examenes citológicos.
          </p>
          <p>
            El sistema WebLAB se ejecuta a través de INTERNET mediante un
            servicio WEB. Su uso requiere una computadora, telefono inteligente
            o tablet, con conexión a INTERNET y un navegador web instalado
            (generalmente Google Chrome).
          </p>
          <p>
            Para ingresar haga click en el botón RESULTADOS ONLINE, y luego
            ingrese su usuario y contraseña. Una vez dentro de nuestra
            plataforma, realice la búsqueda ingresando previamente la fecha
            DESDE y HASTA. Luego aparecerá sus resultados en formato PDF para
            que Ud. pueda visualizarlos, imprimirlos o descargarlos.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.et_pb_text_1 {
  line-height: 1.6em;
  font-family: "Josefin Sans", Helvetica, Arial, Lucida, sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.6em;
  margin-bottom: 29px !important;
}
.custom-caption {
  text-align: left !important;
  font-size: 48px !important;
  line-height: 1.1em !important;
  text-transform: uppercase;
  color: #fff;
  font-weight: 400;
  padding: 12px;
  transition: transform 0.7s ease 0.5s;
  transform: translateX(1400px);
  opacity: 0;
}

.custom-caption.active {
  transform: translateX(0px);
  opacity: 1;
}

.element {
  background-image: linear-gradient(
    142deg,
    #5b5b5b 0%,
    rgba(0, 0, 0, 0.9) 100%
  ) !important;
}

hr {
  border: none;
  height: 0.75px;
  background-color: white;
  width: 100%; /* You can adjust this value to set the desired length */
  transition: transform 0.7s ease 0.5s;
  transform: translateX(600px);
  opacity: 0;
}

hr.active {
  transform: translateX(0px);
  opacity: 1;
}

.title {
  overflow: hidden;
  height: auto;
}

.container_outer_img {
  margin: 50px;
  width: 50%;
  overflow: hidden;
}

.container_img {
  width: 100%;
  transition: transform 1.25s ease-in-out;
  transform: translateX(500px) scale(0.2);
}

.container_img.active {
  transform: translateX(0px) scale(1);
}

.pgraph {
  opacity: 0;
  transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
}

.pgraph.active {
  opacity: 1;
}
</style>
