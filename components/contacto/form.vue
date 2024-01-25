<script setup lang="ts">
import { ref } from "vue";
import { useQuasar } from "quasar";

// Data
const $q = useQuasar();
const name = ref("");
const email = ref("");
const telefono = ref(null);
const asunto = ref("");
const editor = ref("");
const show = ref(true);

// Methods
const submitEmail = async () => {
  try {
    const apiUrl = "http://127.0.0.1:3009/v1/reclamos/reclamo/respuestaLab";
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "dfcarrera@outlook.com",
        asunto: asunto.value,
        respuesta: `Nombre: ${name.value}, \nTeléfono: ${telefono.value}, \nEmail: ${email.value}, \nAsunto: ${asunto.value}, \nMensaje: ${editor.value}`,
      }),
    });

    if (response.ok) {
      $q.notify({
        color: "positive",
        textColor: "white",
        icon: "done",
        message: "Correo electrónico enviado exitosamente",
      });
      show.value = false;
    }
  } catch (error) {
    $q.notify({
      color: "negative",
      textColor: "white",
      icon: "error",
      message: "Error al enviar el correo electrónico",
    });
  }
};
</script>

<template>
  <div
    class="q-pa-md fit row wrap justify-around items-center content-center"
    style="max-width: 800px"
  >
    <q-form @submit="submitEmail" class="q-gutter-md" v-show="show">
      <div class="column justify-center">
        <div class="row justify-center q-gutter-md">
          <div class="et_pb_text_1" style="width: 290px">
            <q-input
              dark
              v-model="name"
              label="Nombre"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Por favor escriba su nombre',
              ]"
            />
          </div>
          <div class="et_pb_text_1" style="width: 290px">
            <q-input
              dark
              v-model="telefono"
              label="Teléfono"
              lazy-rules
              :rules="[
                (val) => !!val || 'Por favor ingrese su número de teléfono',
                (val) =>
                  /^[0-9]{7,14}$/.test(val) ||
                  'Número de teléfono inválido (Min. 7 dígitos, Max. 14 dígitos)',
              ]"
            />
          </div>
        </div>

        <div class="row justify-center q-gutter-md">
          <div class="et_pb_text_1" style="width: 290px">
            <q-input
              dark
              v-model="email"
              label="Email"
              lazy-rules
              :rules="[
                (val) => !!val || 'Por favor ingrese su correo',
                (val) =>
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ||
                  'Dirección de correo inválida',
              ]"
            />
          </div>
          <div class="et_pb_text_1" style="width: 290px">
            <q-input
              dark
              v-model="asunto"
              label="Asunto"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Por favor escriba un asunto',
              ]"
            />
          </div>
        </div>

        <div class="q-pa-md et_pb_text_1" style="min-width: 300px">
          <q-editor
            placeholder="Mensaje: "
            v-model="editor"
            min-height="8rem"
            :content-style="{ backgroundColor: 'rgba(192, 192, 192, 1)' }"
          />
        </div>
      </div>

      <div>
        <q-btn
          outline
          color="white"
          no-caps
          :disable="
            name === '' ||
            (telefono === '' && email === '') ||
            editor === 'Mensaje: '
          "
          label="Enviar"
          class="custom-btn et_pb_text_1"
          style="font-weight: bold"
          type="submit"
        >
          <q-icon left size="2em" name="chevron_right" />
          <q-tooltip
            transition-show="scale"
            transition-hide="scale"
            anchor="center right"
            self="center start"
            v-if="name === '' || editor === 'Mensaje: '"
          >
            <span class="et_pb_text_1"
              >Por favor, ingrese al menos un nombre y una forma de contacto
              (teléfono o email).</span
            >
          </q-tooltip>
        </q-btn>
      </div>
    </q-form>
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
.custom-btn:hover .q-icon {
  animation: moveIconToRight 0.1s ease-in-out;
  animation-delay: 50ms;
  animation-fill-mode: forwards;
}

@keyframes moveIconToRight {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(8px);
  }
}

.custom-btn:not(:hover) .q-icon {
  display: none;
}
</style>
