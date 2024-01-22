<script setup lang="ts">
import { onMounted } from "vue";
import { reveal } from "../composables/services";
import Form from "../components/contacto/form.vue";

onMounted(() => {
  reveal(".pgraph");
  reveal(".container_img");
  reveal("hr");
  reveal(".custom-caption");
});

if (process.client) {
  window.addEventListener("scroll", () => reveal(".pgraph"));
  window.addEventListener("scroll", () => reveal(".container_img"));
  window.addEventListener("scroll", () => reveal("hr"));
  window.addEventListener("scroll", () => reveal(".custom-caption"));
}

// Methods
const openGoogleMapsAgustin = () => {
  const url =
    "https://www.google.com/maps/@-4.0003684,-79.2030775,3a,75y,268.29h,90t/data=!3m7!1e1!3m5!1sN5hSASqIToKlFNO02yAZgQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DN5hSASqIToKlFNO02yAZgQ%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D268.2858%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?hl=es&entry=ttu";
  window.open(url, "_blank"); // Abre en una nueva pestaña o ventana
};

const openGoogleMapsMedilab = () => {
  const url =
    "https://www.google.com/maps/place/CL%C3%8DNICA+MEDILAB/@-3.9934766,-79.2118545,3a,75y,118.84h,90t/data=!3m7!1e1!3m5!1sti68H30Nt-mNO8hFiwv-zg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dti68H30Nt-mNO8hFiwv-zg%26cb_client%3Dsearch.gws-prod.gps%26w%3D211%26h%3D120%26yaw%3D118.84169%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m14!1m7!3m6!1s0x91cb37fe302b46c7:0x2d38793b9e7b469!2sCL%C3%8DNICA+MEDILAB!8m2!3d-3.9935924!4d-79.2116469!16s%2Fg%2F11b6bjf5xt!3m5!1s0x91cb37fe302b46c7:0x2d38793b9e7b469!8m2!3d-3.9935924!4d-79.2116469!16s%2Fg%2F11b6bjf5xt?hl=es&entry=ttu";
  window.open(url, "_blank"); // Abre en una nueva pestaña o ventana
};
</script>

<template>
  <div class="element">
    <q-img class="full-width" style="max-height: 200px">
      <img src="../assets/row-bgimage.jpg" />
    </q-img>
    <div
      class="font-bold q-pt-sm justify-center custom-caption"
      style="font-family: 'Lato'"
    >
      <div class="text-h4 q-pt-xl justify-center">Contáctenos</div>
    </div>

    <hr class="q-mb-md" />

    <div class="q-pa-md row q-gutter-md justify-evenly pgraph">
      <q-card dark class="my-card" flat bordered>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7960.197383907843!2d-79.203723!3d-4.00013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb37fe57ea6d83%3A0x17847b501837cffe!2sHospital%20Cl%C3%ADnica%20%22San%20Agustin%22%20en%20Loja!5e0!3m2!1ses!2sec!4v1705680556333!5m2!1ses!2sec"
          width="400"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <q-list class="et_pb_text_1">
          <q-item clickable @click="openGoogleMapsAgustin">
            <q-item-section avatar>
              <q-icon color="white" name="location_on" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Dirección</q-item-label>
              <q-item-label caption class="text-white"
                >Azuay y 18 de Noviembre, Hospital Clínica San Agustín, Bloque
                B, 4to Piso, Consultorio 503.</q-item-label
              >
            </q-item-section>
          </q-item>

          <q-item clickable href="https://wa.me/593995984963">
            <q-item-section avatar>
              <q-icon color="white" name="call" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Teléfonos</q-item-label>
              <q-item-label caption class="text-white"
                >072582017 – 0995984963 – 0958864552 – 0999258627</q-item-label
              >
            </q-item-section>
          </q-item>

          <q-item clickable href="mailto:resultados@ortegalab.com">
            <q-item-section avatar>
              <q-icon color="white" name="mail" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Email</q-item-label>
              <q-item-label caption class="text-white"
                >resultados@ortegalab.com</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>

      <q-card dark class="my-card text-white" flat bordered>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3980.1304255675373!2d-79.211647!3d-3.993592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb37fe302b46c7%3A0x2d38793b9e7b469!2sCL%C3%8DNICA%20MEDILAB!5e0!3m2!1ses!2sec!4v1705680863775!5m2!1ses!2sec"
          width="400"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <q-list class="et_pb_text_1">
          <q-item clickable @click="openGoogleMapsMedilab">
            <q-item-section avatar>
              <q-icon color="white" name="location_on" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Dirección</q-item-label>
              <q-item-label caption class="text-white"
                >Av. Eugenio Espejo y Calicuchima, Medihospital, Planta Baja,
                Consultorios 9 y 10.</q-item-label
              >
            </q-item-section>
          </q-item>

          <q-item clickable href="https://wa.me/593995984963">
            <q-item-section avatar>
              <q-icon color="white" name="call" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Teléfonos</q-item-label>
              <q-item-label caption class="text-white"
                >3950500 – 3950600 – 0995984963 – 0958864552 –
                0999258627</q-item-label
              >
            </q-item-section>
          </q-item>

          <q-item clickable href="mailto:resultados@ortegalab.com">
            <q-item-section avatar>
              <q-icon color="white" name="mail" />
            </q-item-section>

            <q-item-section class="text-white">
              <q-item-label>Email</q-item-label>
              <q-item-label caption class="text-white"
                >resultados@ortegalab.com</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
  </div>

  <div class="element column justify-center">
    <div
      class="font-bold q-pt-sm justify-center custom-caption"
      style="font-family: 'Lato'"
    >
      <div class="text-h4 q-pt-xl justify-center">Reserva tu cita</div>
      <div class="text-subtitle1">¡Estamos a su servicio!</div>
    </div>

    <hr class="q-mb-md" />
    <div class="row justify-center">
      <Form />
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
.my-card {
  width: 100%;
  max-width: 402px;
  background: rgba(255, 255, 255, 0);
  color: white;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); // Agrega una sombra al hacer hover
    opacity: 0.9; // Reduce ligeramente la opacidad al hacer hover
  }
  &.animate-on-scroll {
    opacity: 1;
    transform: translateY(0);
    transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out,
      opacity 0.5s ease-in-out;
  }
}
.element {
  background-image: linear-gradient(
    142deg,
    #5b5b5b 0%,
    rgba(0, 0, 0, 0.9) 100%
  ) !important;
}

.custom-caption {
  font-size: 48px !important;
  line-height: 1.1em !important;
  text-transform: uppercase;
  color: #fff;
  font-weight: 400;
  padding: 12px;
  transition: transform 0.7s ease 0.5s;
  transform: translateY(200px);
  opacity: 0;
  text-align: center;
}

.custom-caption.active {
  transform: translateY(0px);
  opacity: 1;
}

hr {
  border: none;
  height: 0.75px;
  background-color: white;
  width: 35%; /* You can adjust this value to set the desired length */
  transition: transform 0.7s ease 0.5s;
  transform: translateX(-600px);
  opacity: 0;
}

hr.active {
  transform: translateX(0px);
  opacity: 1;
}

.pgraph {
  opacity: 0;
  transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
}

.pgraph.active {
  opacity: 1;
}
</style>
