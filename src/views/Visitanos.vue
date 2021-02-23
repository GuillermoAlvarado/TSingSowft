<template>
 <div>
      <v-container grid-list-md text-md-center >
   <v-layout row wrap>
           <v-flex >
              <v-card  color="Disabled">
                <v-card-text class="px-0">Horario</v-card-text>
              </v-card>
                  <p class="font-weight-regular"><br>
                  TELEFONOS: <br><br>
                     (55) 55 88 99 88 / (55) 55 66 77 88 22<br><br><br>
                  
                  DIRECCION:<br>
                     Homero 1258, Polanco, CDMX C.P. 11550<br><br><br>

                  HORARIOS:<br>

                  DE LUNES A VIERNES<br>
                  DE 10:00 AM A 8:00 PM <br>

                  SABADOS<br>
                  DE 10:00 AM A 6:00 PM<br>
                  </p>
            </v-flex>
            <v-flex >
              <v-card  color="Disabled">
                <v-card-text class="px-0">Calendario</v-card-text>
              </v-card>
<br>
                    <v-row justify="center" >
                        <v-date-picker
                        v-model="date"
                        readonly
                        color="grey"></v-date-picker>
                    </v-row>
              </v-flex>
   </v-layout>
  </v-container>
 </div>
</template>

<script>
  export default {
    data () {
      return {
        date: new Date().toISOString().substr(0, 10),
      }
    },
  }
</script>