<template>
  <v-row>
    <v-col cols="12" sm="3" lg="3" xl="3" class="border-thin h-100">
      <v-select
        label="posizione fiscale"
        variant="solo"
        density="compact"
      ></v-select>

      <div class="d-flex">
        <v-btn prepend-icon="mdi-file-document-outline" variant="text">
          Fatture
        </v-btn>
      </div>
      <div class="d-flex">
        <v-btn prepend-icon="mdi-account-multiple-outline" variant="text">
          Clienti
        </v-btn>
      </div>
      <div class="d-flex">
        <v-btn prepend-icon="mdi mdi-table" variant="text">
          Corrispettivi
        </v-btn>
      </div>
      <v-divider></v-divider>

      <div class="d-flex justify mt-6 ml-6"><h5>Notifiche</h5></div>

      <v-timeline align="start" side="end">
        <v-timeline-item dot-color="pink" size="small">
          <div class="text-right"><strong>1 set 2024</strong></div>
          <div class="text-caption">Invio dichiarazione IVA</div>
          <div class="text-caption">Adempimento</div>
        </v-timeline-item>

        <v-timeline-item dot-color="teal-lighten-3" size="small">
          <div class="text-right"><strong>1 set 2024</strong></div>
          <div class="text-caption">Invio dichiarazione IVA</div>
          <div class="text-caption">Adempimento</div>
        </v-timeline-item>

        <v-timeline-item dot-color="pink" size="small">
          <div class="text-right"><strong>1 set 2024</strong></div>
          <div class="text-caption">Invio dichiarazione IVA</div>
          <div class="text-caption">Adempimento</div>
        </v-timeline-item>
      </v-timeline>
    </v-col>

    <v-col cols="12" sm="8" lg="8" xl="8">
      <v-row>
        <v-col cols="12" sm="4" lg="4" xl="4">
          <v-select
            label="Codice ateco"
            variant="solo"
            density="compact"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="4" lg="4" xl="4">
          <v-select
            label="Anno fiscale"
            variant="solo"
            density="compact"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="4" lg="4" xl="4">
          <div>
            <v-btn
              class="text-body-1"
              prepend-icon="mdi-file-document-outline"
              variant="text"
              density="compact"
            >
              Aggiungi posizione fiscale
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="4" lg="4" xl="4">
          <v-card color="deep-purple-accent-2" elevation="0">
            <v-card-text
              ><h5>Fatturato</h5>
              1.000,00 €</v-card-text
            >
          </v-card>
        </v-col>
        <v-col cols="12" sm="4" lg="4" xl="4">
          <v-card color="teal-lighten-1" elevation="0">
            <v-card-text
              ><h5>Incassato</h5>
              1.000,00 €</v-card-text
            >
          </v-card></v-col
        >
        <v-col cols="12" sm="4" lg="4" xl="4"
          ><v-card class="" color="cyan-darken-2" elevation="0">
            <v-card-text
              ><h5>Da incassare</h5>
              1.000,00 €</v-card-text
            >
          </v-card></v-col
        >
      </v-row>

      <div class="mt-4">
        <v-img
          cover
          src="https://www.edrawsoft.com/images/chartstypes/column-chart-example.png"
        ></v-img>
      </div>

      <v-row>
        <v-col cols="12" sm="3" lg="3" xl="3">
          <v-card class="mt-4" elevation="2">
            <v-card-text class="text-center"
              ><h5><strong>Rilevanza fiscale</strong></h5>
              11689.60
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3" lg="3" xl="3">
          <v-card class="mt-4" elevation="2">
            <v-card-text class="text-center"
              ><h5><strong>Puoi ancora incassare</strong></h5>
              73310.40
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3" lg="3" xl="3">
          <v-card class="mt-4" elevation="2">
            <v-card-text class="text-center"
              ><h6><strong>Limite incassi Fortettario</strong></h6>

              <v-divider
                :thickness="3"
                class="border-opacity-58"
                color="info"
              ></v-divider>

              13.75%
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3" lg="3" xl="3">
          <v-card class="mt-4" elevation="2">
            <v-card-text class="text-center"
              ><h5><strong>Limite annuo</strong></h5>
              85000
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="4" lg="4" xl="4" class="d-flex justify-center">
          <v-btn
            class="w-100"
            prepend-icon="mdi-file-document-outline"
            color="green"
            density="default"
          >
            Situazione contabile
          </v-btn>
        </v-col>
        <v-col cols="12" sm="4" lg="4" xl="4" class="d-flex justify-center">
          <v-btn
            class="w-100"
            prepend-icon="mdi-file-document-outline"
            color="light-blue"
            density="default"
          >
            Situazione fiscale
          </v-btn>
        </v-col>
        <v-col cols="12" sm="4" lg="4" xl="4" class="d-flex justify-center">
          <v-btn
            class="w-100"
            prepend-icon="mdi-file-document-outline"
            color="yellow-lighten-1"
            density="default"
          >
            Requisito forfettario
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup></script>


  const msg = ref('Hello World!')
</script>
