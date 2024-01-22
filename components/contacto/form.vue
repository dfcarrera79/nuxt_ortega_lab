<script setup lang="ts">
import { ref } from "vue";
import { useQuasar } from "quasar";

// Data
const $q = useQuasar();

const name = ref(null);
const email = ref(null);
const telefono = ref(null);
const asunto = ref(null);
const editor = ref("Mensaje: ");

// Methods
const onSubmit = () => {
  // Validate inputs
  if (!name.value || !email.value || !telefono.value || !asunto.value) {
    $q.notify({
      color: "negative",
      textColor: "white",
      icon: "warning",
      message: "Todos los campos son obligatorios",
    });
    return;
  }

  // Additional input validation logic can be added here

  // Prepare email content
  const subject = encodeURIComponent(asunto.value);
  const body = encodeURIComponent(
    `Nombre: ${name.value}\nTeléfono: ${telefono.value}\nEmail: ${email.value}\nAsunto: ${asunto.value}\nMensaje: ${editor.value}`
  );

  // Construct the mailto URL
  const mailtoUrl = `mailto:?subject=${subject}&body=${body}`;

  // Open user's default email client
  window.location.href = mailtoUrl;
};
</script>

<template>
  <div
    class="q-pa-md fit row wrap justify-around items-center content-center"
    style="max-width: 800px"
  >
    <q-form @submit="onSubmit" class="q-gutter-md">
      <div class="column justify-center">
        <div class="row justify-center q-gutter-md">
          <div style="width: 290px">
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
          <div style="width: 290px">
            <q-input
              dark
              v-model="telefono"
              label="Teléfono"
              lazy-rules
              :rules="[
                (val) => !!val || 'Por favor ingrese su número de teléfono',
                (val) =>
                  /^[0-9]{10}$/.test(val) ||
                  'Número de teléfono inválido (10 dígitos))',
              ]"
            />
          </div>
        </div>

        <div class="row justify-center q-gutter-md">
          <div style="width: 290px">
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
          <div style="width: 290px">
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

        <div class="q-pa-md" style="min-width: 650px">
          <q-editor
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
          label="Enviar"
          class="custom-btn et_pb_text_1"
          style="font-weight: bold"
          type="submit"
        >
          <q-icon left size="2em" name="chevron_right" />
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
