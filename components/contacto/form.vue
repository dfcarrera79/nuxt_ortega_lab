<script setup lang="ts">
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useAppStore } from "../../store/app";

// Data
const name = ref("");
const email = ref("");
const asunto = ref("");
const editor = ref("");
const $q = useQuasar();
const show = ref(true);
const telefono = ref("");
const appStore = useAppStore();

// Methods
const submitEmail = async () => {
  try {
    const apiUrl = "http://186.5.111.32:3009/enviar_correo/respuestaLab";
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "resultados@ortegalab.com",
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
            <!-- <q-input
              dark
              v-model="name"
              label="Nombre"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Por favor escriba su nombre',
              ]"
            /> -->

            <div class="form__group field">
              <input
                type="input"
                class="form__field"
                v-model="name"
                required
                :style="
                  appStore.darkMode
                    ? 'border-bottom: 2px solid #fff;'
                    : 'border-bottom: 2px solid #696969;'
                "
              />
              <label
                for="name"
                class="form__label"
                :style="appStore.darkMode ? 'color: #fff;' : 'color: #696969;'"
                >Nombre</label
              >
            </div>
          </div>
          <div class="et_pb_text_1" style="width: 290px">
            <!-- <q-input
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
            /> -->
            <div class="form__group field">
              <input
                type="input"
                class="form__field"
                :style="
                  appStore.darkMode
                    ? 'border-bottom: 2px solid #fff;'
                    : 'border-bottom: 2px solid #696969;'
                "
                v-model="telefono"
                required
              />
              <label
                for="name"
                class="form__label"
                :style="appStore.darkMode ? 'color: #fff;' : 'color: #696969;'"
                >Teléfono</label
              >
            </div>
          </div>
        </div>

        <div class="row justify-center q-gutter-md">
          <div class="et_pb_text_1" style="width: 290px">
            <!-- <q-input
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
            /> -->
            <div class="form__group field">
              <input
                type="input"
                class="form__field"
                :style="
                  appStore.darkMode
                    ? 'border-bottom: 2px solid #fff;'
                    : 'border-bottom: 2px solid #696969;'
                "
                v-model="email"
                required
              />
              <label
                for="name"
                class="form__label"
                :style="appStore.darkMode ? 'color: #fff;' : 'color: #696969;'"
                >Email</label
              >
            </div>
          </div>
          <div class="et_pb_text_1" style="width: 290px">
            <!-- <q-input
              dark
              v-model="asunto"
              label="Asunto"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Por favor escriba un asunto',
              ]"
            /> -->
            <div class="form__group field">
              <input
                type="input"
                class="form__field"
                :style="
                  appStore.darkMode
                    ? 'border-bottom: 2px solid #fff;'
                    : 'border-bottom: 2px solid #696969;'
                "
                v-model="asunto"
                required
              />
              <label
                for="name"
                class="form__label"
                :style="appStore.darkMode ? 'color: #fff;' : 'color: #696969;'"
                >Asunto</label
              >
            </div>
          </div>
        </div>

        <div class="q-pa-md et_pb_text_1" style="min-width: 300px">
          <q-editor
            placeholder="Mensaje: "
            v-model="editor"
            min-height="8rem"
          />
        </div>
      </div>

      <div>
        <q-btn
          outline
          no-caps
          :disable="
            name === '' ||
            (telefono === '' && email === '') ||
            editor === 'Mensaje: '
          "
          label="Enviar"
          class="custom-btn et_pb_text_1"
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

$primary: #1976d2;
$secondary: #0080ff;
$white: #fff;
$gray: #696969;
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 70%;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  outline: 0;
  font-size: 1.3rem;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: $gray;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $primary;
    font-weight: 700;
  }
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary, $secondary);
  border-image-slice: 1;
}
/* reset input */
.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}
</style>
