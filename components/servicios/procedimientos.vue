<script setup lang="ts">
import { onMounted } from "vue";

// Methods
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

onMounted(() => {
  reveal(".pgraph");
  reveal("hr");
  reveal(".custom-caption");
});

if (process.client) {
  window.addEventListener("scroll", () => reveal("hr"));
  window.addEventListener("scroll", () => reveal("pgraph"));
  window.addEventListener("scroll", () => reveal(".custom-caption"));
}
</script>

<template>
  <div
    class="fit column wrap justify-center items-center content-center q-pb-xl"
    style="height: 600px"
  >
    <div class="text-left font-bold q-pt-sm custom-caption title">
      <div class="text-h4 q-pt-xl" style="font-family: 'Lato'">
        Detalle de procedimientos realizados
      </div>
    </div>

    <hr class="q-mb-md" style="width: 720px" />
    <div class="q-pa-md text-white" style="max-width: 900px">
      <q-list bordered class="rounded-borders et_pb_text_1">
        <q-expansion-item
          group="somegroup"
          label="Diagnostico histopatológico de órganos o piezas quirúrgicas"
          header-class="text-white text-h5"
        >
          <q-card style="background: rgba(255, 255, 255, 0)">
            <q-card-section>
              <div class="et_pb_text_1">
                Consiste en el análisis anatomopatológico completo de un órgano.
                Entre los que podemos nombrar los siguientes:
                <ul>
                  <li>
                    Sistema Reproductor Femenino: vulva, vagina, útero, trompas
                    de Falopio, ovarios, y glándula mamaria.
                  </li>
                  <li>
                    Sistema urinario y aparato genital masculino: testículos,
                    cordón espermático, epidídimo, próstata, pene, escroto,
                    patología quirúrgica del riñón, vías urinarias (uréter y
                    uretra) y vejiga de la orina.
                  </li>
                  <li>
                    Tracto digestivo, hígado, vías biliares y páncreas. Biopsias
                    gástricas y de recto.
                  </li>
                  <li>
                    Órganos endocrinos y sistema neuroendócrino difuso. Biopsias
                    diagnósticas de riñón no neoplásico (con estudio de
                    inmunofluorecencia).
                  </li>
                  <li>
                    Sistema nervioso central y periférico y músculo esquelético
                    no tumoral.
                  </li>
                  <li>
                    Boca, área maxilofacial, cuello, y vías respiratorias
                    extrapulmonares.
                  </li>
                  <li>Pulmón, pleura y mediastino.</li>
                  <li>Piel y sus anexos.</li>
                  <li>
                    Otras muestras obtenidas mediante cirugía no englobadas en
                    los anteriores órganos y sistemas.
                  </li>
                </ul>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          group="somegroup"
          label="Biopsias de piel y dermatopatología"
          header-class="text-white text-h5"
        >
          <q-card style="background: rgba(255, 255, 255, 0)">
            <q-card-section>
              <div>
                <p>
                  Consiste en la extracción de un pequeño pedazo de piel, que se
                  examina para buscar afecciones o enfermedades y determinar su
                  diagnóstico.
                </p>
                <strong>Razones para realizar una biopsia de Piel.</strong>

                <p>
                  El médico creerá conveniente tomar una biopsia para el
                  diagnóstico de causa de alguna erupción cutánea y en casos
                  mayores para asegurarse que un crecimiento o lesión de piel
                  pueda ser cáncer.
                </p>

                <strong>¿Qué pasa una vez extraída la biopsia?</strong>

                <p>
                  La biopsia debe ser enviada a patología para su respectivo
                  análisis, en nuestra área especial en el campo de la
                  dermatopatología se realiza el proceso de acondicionamiento,
                  tratamiento y conservación de la muestra para análisis y
                  estudio pertinente que determinará el diagnóstico adecuado.
                </p>

                <strong>Los resultados.</strong>

                <p>
                  Los resultados podrán ser desde alteraciones inflamatorias
                  (eczemas), infecciones por hongos o bacterias, psoriasis,
                  melanoma etc. Hay una diversidad en cuanto a afecciones de
                  piel. Muchas de las enfermedades de la piel pueden parecerse
                  clínicamente, por lo tanto, el clínico solicita la biopsia
                  para confirmar su presunción diagnóstica o descartarla.
                </p>

                <strong>Tratamiento.</strong>

                <p>
                  Finalmente, con el diagnóstico el paciente acudirá al médico
                  tratante generalmente el Dermatólogo quien determinará e
                  indicará su plan de tratamiento.
                </p>

                <strong
                  >¿Por qué es importante el análisis de un Dermatopatólogo
                  certificado?</strong
                >

                <p>
                  La piel es el órgano más extenso del cuerpo humano y sus
                  múltiples afecciones son de gran complejidad, esta es una rama
                  que necesita de subespecialidad para su adecuado diagnóstico,
                  en estrecho trabajo con el médico dermatólogo.
                </p>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          group="somegroup"
          label="Transoperatorio por congelación"
          header-class="text-white text-h5"
        >
          <q-card style="background: rgba(255, 255, 255, 0)">
            <q-card-section>
              <div>
                <strong>¿En qué consiste? </strong>

                <p>
                  Es un procedimiento solicitado durante una intervención
                  quirúrgica, se realiza análisis citológico más cortes
                  histológicos del tejido enviado para diagnóstico que defina la
                  conducta del órgano durante la cirugía. En nuestro medio se
                  realiza mucho en el diagnóstico de
                  <strong>carcinoma papilar de tiroides.</strong>
                </p>

                <strong>¿Por qué es importante?</strong>

                <p>
                  Es estudio transoperatorio constituye un método de gran ayuda
                  para el cirujano ya que su diagnóstico inmediato:
                </p>

                <ol>
                  <li>Guía el tratamiento.</li>
                  <li>Evita mutilaciones innecesarias al paciente.</li>
                  <li>
                    Muchas veces se considera terapéutica. Su eficacia es de 97%
                    a nivel mundial.
                  </li>
                </ol>

                <strong>Algunos de sus beneficios son:</strong>

                <ul>
                  <li>Conduce una decisión terapéutica.</li>
                  <li>Determina si la lesión es benigna o maligna.</li>
                  <li>
                    Asegura que los márgenes de excisión quirúrgica estén libres
                    se tumor.
                  </li>
                </ul>

                <strong>Diagnóstico.</strong>

                <p>El diagnóstico se hará de forma clara:</p>

                <ol>
                  <li>Positivo para malignidad</li>
                  <li>Negativo para malignidad.</li>
                  <li>Diferido.</li>
                </ol>

                <strong>¿Cuáles son los beneficios para el paciente? </strong>

                <p>
                  El paciente tendrá la tranquilidad de saber que su operación
                  quirúrgica estará guiada y sometida con los más altos
                  estándares lo que lo pondrá en menor riesgo y con un optimo
                  resultado.
                </p>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          group="somegroup"
          label="Base líquida"
          header-class="text-white text-h5"
        >
          <q-card style="background: rgba(255, 255, 255, 0)">
            <q-card-section>
              <div>
                <strong> ¿Qué es y para qué sirve? </strong>

                <p>
                  La citología en base líquida es un método que busca evitar
                  resultados falsos negativos (falta de células anormales cuando
                  están presentes), ya que brinda mejores resultados gracias a
                  su proceso automatizado. Se puede utilizar en el análisis de
                  varios tipos de punciones o líquidos como: Papanicolaous,
                  tiroides, líquido ascitico, derrame pleura, orina, etc.
                </p>

                <strong
                  >Importancia en detección de alteraciones de cuello uterino/
                  Papanicolaous.</strong
                >

                <p>
                  La muestra tomada de cérvix, es transferida a un vial que
                  contiene un preservante que dispersa el fluido suspendido que
                  se selecciona para su procesamiento, las células se separan
                  por centrifugación o filtración y se depositan en una lámina
                  como una fina capa por la aplicación de presión, lo que
                  permite obtener una muestra libre de impurezas y contar solo
                  con las células que requieren análisis.
                </p>

                <p>
                  Mediante este proceso se evita un falso negativo en casos de
                  alto riesgo como Lesiones de algo grado o cáncer de cuello
                  uterino.
                </p>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          group="somegroup"
          label="¿Qué es virus de papiloma humano (HPV)?"
          header-class="text-white text-h5"
        >
          <q-card style="background: rgba(255, 255, 255, 0)">
            <q-card-section>
              <div>
                <div>
                  <p>
                    El HPV es una infección que causa comúnmente crecimientos en
                    la piel o en las membranas mucosas conocidos como verrugas.
                    Existen más de cien variedades del virus. Es de transmisión
                    sexual, dependiendo del tipo puede ser inofensivo, pero en
                    otros casos puede provocar verrugas genitales o cáncer.
                  </p>

                  <strong
                    >¿Cuándo debo hacerme un estudio para descartar HPV?</strong
                  >

                  <p>
                    Debes realizar una consulta si tienes verrugas incomodas,
                    luego tú médico determinará si necesitas realizarte el
                    análisis molecular para detección de Virus de Papiloma
                    Humano (HPV).
                  </p>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          group="somegroup"
          label="Inmunohistoquímica"
          header-class="text-white text-h5"
        >
          <q-card style="background: rgba(255, 255, 255, 0)">
            <q-card-section>
              <div>
                <strong> ¿Qué es y para qué sirve? </strong>

                <div>
                  <p>
                    Es un método en el que se usan anticuerpos a fin de
                    determinar si hay ciertos antígenos (marcadores) en una
                    muestra de tejido. Por lo general, los anticuerpos van
                    unidos a una enzima o un tinte fluorescente. Cuando los
                    anticuerpos se unen al antígeno en la muestra de tejido, se
                    activa la enzima o el tinte y se observa el antígeno al
                    microscopio. Las pruebas inmunohistoquímicas se usan para
                    ayudar a diagnosticar enfermedades como el cáncer. También
                    se utilizan para ayudar a diferenciar entre tipos de cáncer.
                  </p>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          group="somegroup"
          label="Inmunofluorescencia"
          header-class="text-white text-h5"
        >
          <q-card style="background: rgba(255, 255, 255, 0)">
            <q-card-section>
              <div>
                <strong> ¿Qué es y para qué sirve? </strong>

                <div>
                  <p>
                    La inmunofluorescencia directa se utiliza para el
                    diagnóstico de enfermedades de tipo autoinmunitario, es
                    decir, aquellas en las que las propias defensas pierden el
                    control y atacan algún órgano de nuestro organismo. En
                    nuestro caso, resulta de gran utilidad para el diagnóstico
                    de enfermedades de la piel y mucosas, como el lupus
                    eritematoso, enfermedades ampollosas autoinmunes (pénfigos,
                    penfigoides, etc.) y vasculitis (inflamaciones de los vasos
                    sanguíneos).
                  </p>

                  <p>
                    Esta técnica se realiza tras la obtención de una biopsia de
                    piel o mucosas (por ejemplo, de la boca, la conjuntiva del
                    ojo,). Una vez realizada podremos observar si un paciente
                    posee anticuerpos que atacan la propia piel. En el caso de
                    que el paciente tenga estos anticuerpos, veremos un depósito
                    fluorescente típico.
                  </p>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
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
}

hr {
  border: none;
  height: 0.75px;
  background-color: white;
  transition: transform 0.7s ease 0.5s;
  transform: translateX(-600px);
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
.pgraph {
  opacity: 0;
  transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
}

.pgraph.active {
  opacity: 1;
}
</style>
