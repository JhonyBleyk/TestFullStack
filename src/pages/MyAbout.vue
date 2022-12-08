<template>
  <q-page padding>
    <h2>Stetic News</h2>
    <q-input class="shadow-5 q-pa-s" filled label="Buscar" v-model="filtro" />

    <div class="row">
      <h5 class="col">Cooperaciones</h5>
      <h5 class="col-2">Argentina</h5>
    </div>
    <p>
      "Nueva adquisición: SteticABC acaba de anunciar un acuerdo para comprar
      SteticDEF con el objetivo de aumentar su presencia en el mercado alemán.
      El acuerdo se estima en alrededor de 2 millones de euros Lea más en:
      <a href="https://SteticNews.com" target="_blank" rel="noopener"
        >SteticNews</a
      >
      o
      <a href="https://NewsDaily.com" target="_blank" rel="noopener"
        >NewsDaily</a
      >”.
    </p>
    <!-- /*<q-btn icon-right="ti-time">fecha & hora</q-btn>*/ -->

    <div id="q-app" style="min-height: 10px">
      <div class="q-px-lg q-pb-md">
        <q-timeline color="red">
          <q-timeline-entry heading body=""></q-timeline-entry>

          <q-timeline-entry
            title=""
            subtitle="Diciembre 05, 2022"
            avatar="https://cdn.quasar.dev/img/avatar3.jpg"
            :body="body"
          ></q-timeline-entry>
        </q-timeline>
      </div>
    </div>
    <div class="row">
      <h5 class="col">Lanzamientos de productos</h5>
      <h5 class="col-2">Portugal</h5>
    </div>

    <p class="shadow-5 q-pa-xl">
      La empresa Almalaser ha finalizado operaciones en Argentina, no ha podido
      continuar con sus labores dado que el mercado ha cambiado y no pudo
      competir con la tecnología que estan usando hoy en día los equipos,
      quedando atrás en el mercado.
      <a href="https://SteticNews.com" target="_blank" rel="noopener"
        >SteticNews</a
      >
      o
      <a href="https://NewsDaily.com" target="_blank" rel="noopener"
        >NewsDaily</a
      >”.
    </p>

    <!-- /*<q-btn icon-right="ti-time">fecha & hora</q-btn>*/ -->
    <div id="q-app" style="min-height: 10px">
      <div class="q-px-lg q-pb-md">
        <q-timeline color="red">
          <q-timeline-entry heading body=""></q-timeline-entry>

          <q-timeline-entry
            title=""
            subtitle="Diciembre 06, 2022"
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :body="body"
          ></q-timeline-entry>
        </q-timeline>
      </div>
    </div>

    <div class="row">
      <h5 class="col">Compras y adquisiciones</h5>
      <h5 class="col-2">Italia</h5>
    </div>
    <p class="shadow-5 q-pa-xl">
      La empresa Almalaser a finalizado operaciones en argentina, no ha podido
      continuar con sus labores dado que el mercado ha cambiado y no pudo
      competir con la tecnología que están usando hoy en día los equipos,
      quedando atrás en el mercado.
    </p>
    <p class="shadow-5 q-px-lg q-pb-md">
      Leer más en:
      <a href="https://SteticNews.com" target="_blank" rel="noopener"
        >SteticNews.com</a
      >
      o
      <a href="https://NewsDaily.com" target="_blank" rel="noopener"
        >NewsDaily.com</a
      >
    </p>
  </q-page>
  <!-- /*<q-btn icon-right="ti-time">fecha & hora</q-btn>*/ -->
  <div id="q-app" style="min-height: 10px">
    <div class="q-px-lg q-pb-md">
      <q-timeline color="red">
        <q-timeline-entry heading body=""></q-timeline-entry>

        <q-timeline-entry
          title=""
          subtitle="Diciembre 08, 2022"
          avatar="https://cdn.quasar.dev/img/avatar6.jpg"
          :body="body"
        ></q-timeline-entry>
      </q-timeline>
    </div>
  </div>

  <div class="q-pa-md">
    <div class="q-mb-sm">
      <q-badge color="teal"> {{ date }} </q-badge>
    </div>

    <q-btn icon="event" round color="primary">
      <q-popup-proxy
        @before-show="updateProxy"
        cover
        transition-show="scale"
        transition-hide="scale"
      >
        <q-date v-model="proxyDate">
          <div class="row items-center justify-end q-gutter-sm">
            <q-btn label="Cancel" color="primary" flat v-close-popup />
            <q-btn
              label="OK"
              color="primary"
              flat
              @click="save"
              v-close-popup
            />
          </div>
        </q-date>
      </q-popup-proxy>
    </q-btn>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const date = ref("Último acceso 2022/12/08");
    const proxyDate = ref("2022/12/08");

    return {
      date,
      proxyDate,

      updateProxy() {
        proxyDate.value = date.value;
      },

      save() {
        date.value = proxyDate.value;
      },
    };
  },
};
</script>
