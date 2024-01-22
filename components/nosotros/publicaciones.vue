<script setup lang="ts">
import { onMounted } from "vue";
import { reveal } from "../../composables/services";

onMounted(() => {
  reveal(".pgraph");
  reveal("hr");
  reveal(".custom-caption");
});

if (process.client) {
  window.addEventListener("scroll", () => reveal("hr"));
  window.addEventListener("scroll", () => reveal(".custom-caption"));
}

// Data
const publicaciones = [
  {
    icon: "looks_one",
    label: "Cystic paraganglioma of the anterior mediastinum.",
    caption:
      "Ortega PF, Sosa LA, Patel M, Zambrano E. Cystic paraganglioma of the anterior mediastinum. Ann Diagn Pathol. 2010 Oct;14(5):341-6. doi: 10.1016/j.anndiagpath.2010.04.008. PMID: 20850697.",
  },
  {
    icon: "looks_two",
    label:
      "CD8-positive primary cutaneous anaplastic large T-cell lymphoma (PCALCL): case report and review of this unusual variant of PCALCL.",
    caption:
      "Plaza JA, Ortega P, Lynott J, Mullane M, Kroft S, Olteanu H. CD8-positive primary cutaneous anaplastic large T-cell lymphoma (PCALCL): case report and review of this unusual variant of PCALCL. Am J Dermatopathol. 2010 Jul;32(5):489-91. doi: 10.1097/DAD.0b013e3181c57ec2. PMID: 20442639.",
  },
  {
    icon: "looks_3",
    label:
      "Immunolabeling pattern of podoplanin (d2-40) may distinguish basal cell carcinomas from trichoepitheliomas: a clinicopathologic and immunohistochemical study of 49 cases.",
    caption:
      "Plaza JA, Ortega PF, Bengana C, Stockman DL, Suster S. Immunolabeling pattern of podoplanin (d2-40) may distinguish basal cell carcinomas from trichoepitheliomas: a clinicopathologic and immunohistochemical study of 49 cases. Am J Dermatopathol. 2010 Oct;32(7):683-7. doi:10.1097/DAD.0b013e3181cf8fb4. PMID: 20559122.",
  },
  {
    icon: "looks_4",
    label:
      "Value of p63 and podoplanin (D2-40) immunoreactivity in the distinction between primary cutaneous tumors and adenocarcinomas metastatic to the skin: a clinicopathologic and immunohistochemical study of 79 cases.",
    caption:
      "Plaza JA, Ortega PF, Stockman DL, Suster S. Value of p63 and podoplanin (D2-40) immunoreactivity in the distinction between primary cutaneous tumors and adenocarcinomas metastatic to the skin: a clinicopathologic and immunohistochemical study of 79 cases. J Cutan Pathol. 2010 Apr;37(4):403-10. doi: 10.1111/j.1600-0560.2010.01517.x. PMID: 20377670.",
  },
  {
    icon: "looks_5",
    label:
      "Lucio Leprosy with Lucio's phenomenon, digital gangrene and anticardiolipin antibodies.",
    caption:
      "Nunzie E, Ortega Cabrera LV, Macanchi Moncayo FM, Ortega Espinosa PF, Clapasson A, Massone C. Lucio Leprosy with Lucio's phenomenon, digital gangrene and anticardiolipin antibodies. Lepr Rev. 2014 Sep;85(3):194-200. PMID: 25509720.",
  },
  {
    icon: "looks_6",
    label:
      "Liposarcomas of the posterior mediastinum: clinicopathologic study of 18 cases.",
    caption:
      "Ortega P, Suster D, Falconieri G, Zambrano E, Moran CA, Morrison C, Suster S. Liposarcomas of the posterior mediastinum: clinicopathologic study of 18 cases. Mod Pathol. 2015 May;28(5):721-31. doi: 10.1038/modpathol.2014.152. Epub 2014 Dec 5. PMID: 25475695.",
  },
];
</script>

<template>
  <div
    class="element fit column wrap justify-center items-center content-center q-pb-xl"
    style="height: 600px"
  >
    <div class="text-left font-bold q-pt-sm custom-caption title">
      <div class="text-h4 q-pt-xl">Artículos científicos de especialidad</div>
      <div class="text-h4">disponibles en PUBMED</div>
      <hr class="q-mb-md" style="min-width: 350px" />
    </div>

    <div class="q-pa-md text-white pgraph" style="max-width: 600px">
      <q-list
        bordered
        class="rounded-borders et_pb_text_1"
        v-for="(publicacion, index) in publicaciones"
        :key="index"
      >
        <q-expansion-item
          group="somegroup"
          :icon="publicacion.icon"
          :label="publicacion.label"
          header-class="text-white"
        >
          <q-card style="background: rgba(255, 255, 255, 0)">
            <q-card-section>
              {{ publicacion.caption }}
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
  width: 100%;
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
