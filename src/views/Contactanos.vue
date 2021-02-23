<template>

  <v-container grid-list-md text-md-center >
      <v-layout row wrap>
           <v-flex > <br>
           <h1>
               <p class="font-weight-light"> AGENDA </p>
           </h1>
            <subtitle-1>    
             <p class="font-weight-light"> TU CITA CON NOSOTROS </p>
            </subtitle-1>
              <br> <br>
<v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="depressed large dark"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Generar cita    
        </v-btn>

      </template>
      <v-card>
        <v-card-title>
          <span class="headline">DATOS DE CITA</span>
        </v-card-title>
        <v-card-text>
          <v-container >
           <v-form @submit.prevent='validar'>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="APELLIDO PATERNO"  v-model="Apaterno"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4" >
                <v-text-field label="APELLIDO MATERNO" v-model="Amaterno"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="NOMBRE(S)" persistent-hint required v-model="nombre"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field type="email" label="E-MAIL" required v-model="email"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-autocomplete v-model="servicio"
                  :items="['CORTE', 'COLOR', 'PEINADO', 'TRATAMIENTOS', 'MANI  /  PEDI', 'CERA', 'MAQUILLAJE', 'PESTAÑA']"
                  label="SERVICIO">
                </v-autocomplete>
              </v-col>
              <v-col cols="12" >
                <v-text-field label="Descripcion del servicio" required v-model="descripcion"></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" >
                <v-select v-model="edad"
                  :items="['0-12', '13-29', '30-54', '54+']"
                  label="EDAD"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete v-model="sexo"
                  :items="['HOMBRE', 'MUJER']"
                  label="SEXO"
                ></v-autocomplete>
              </v-col>
        <v-btn color="blue darken-1" text @click="dialog = false">
            CERRAR
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false" type="submit">
            GUARDAR
          </v-btn>
            </v-row>
           </v-form>
          </v-container>
     
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row><br><br><br>
              <subtitle-1>    
             <p class="font-weight-light"> SIGUENOS EN NUESTRAS REDES SOCIALES</p>
            </subtitle-1>
         <v-btn icon href="https://www.instagram.com/" target="_blank" > <v-icon>fab fa-instagram</v-icon></v-btn>
         <v-btn icon href="https://www.facebook.com" target="_blank"> <v-icon>fab fa-facebook-square</v-icon></v-btn>

</v-flex>
        <v-flex >
            <br>
            <subtitle-1>    
             <p class="font-weight-light"> RECUERDA DONDE NOS ENCONTRAMOS </p>
            </subtitle-1>

                <div class="Mapa" style="width:700px;height:400px;" >
                <GoogleMapLoader apiKey=''></GoogleMapLoader>
                </div>

 
            </v-flex>
     </v-layout>

    <v-snackbar
      v-model="snackbar">
      {{ text }}
        <v-btn color="grey darken-2" flat v-bind="attrs" @click= "snackbar = false">
          Cerrar
        </v-btn>
    </v-snackbar>

  </v-container> 
</template>

<script>
    import GoogleMapLoader from './GoogleMapLoader.vue'
    
    export default {
      data() {
        return {
            apiKey: '',
            dialog: false,
            Apaterno:'',
            Amaterno:'',
            nombre:'',
            email:'',
            servicio:'',
            descripcion: '',
            sexo:'',
            edad: '',
            snackbar: false,
            text:' '
        }
       },
     methods:{
      validar(){
        if(this.Apaterno === '' || this.Amaterno === '' || this.nombre === '' || this.email ==='' || 
            this.descripcion ==='' || this.sexo === '' || this.servicio === '' || this.edad ===''){
            this.snackbar=true;
            this.text= 'Llena todos los campos ';
            this.dialog=true
        }//Fin de if 
        else {
            this.snackbar=true;
            this.text= 'Cita generada';
            this.Apaterno=''
            this.Amaterno=''
            this.nombre=''
            this.email=''
            this.servicio=''
            this.descripcion=''
            this.sexo=''
            this.edad= ''           
        }//Fin de else
      }//Termina validar    
     },//Termina mehods
     components:{
        GoogleMapLoader 
    }
        
    }


</script>