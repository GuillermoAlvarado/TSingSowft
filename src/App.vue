<template>
  <v-app>
   <v-toolbar color="Disabled">
    <br>
    <v-img
      lazy-src="https://i.pinimg.com/originals/64/e9/bb/64e9bb82d8ff10d2d9c8d71565ca3b5e.png"
      max-height="150"
      max-width="150"
      src="https://i.pinimg.com/originals/64/e9/bb/64e9bb82d8ff10d2d9c8d71565ca3b5e.png"
    ></v-img>
      <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text  :to="{name:'Inicio'}">
         Inicio
      </v-btn>

        <v-btn text  :to="{name:'Servicio'}">
         Servicio
      </v-btn>
      <v-btn text  :to="{name:'Visitanos'}">
         Visitanos
      </v-btn>
   
      <v-btn text  :to="{name:'Galeria'}">
         Galeria
      </v-btn>

      <v-btn text  :to="{name:'Contactanos'}">
         Contactanos
      </v-btn>

    </v-toolbar-items>  
  </v-toolbar> 
  <router-view></router-view>

  <v-footer padless>
    <v-col class="text-center">
    <p class="font-weight-light">
      Homero 1258, Polanco, CDMX C.P. 11550
    </p>
    <p class="font-weight-regular">
      (55) 88 99 88 / (55) 66 77 88 22
    </p>
    </v-col>

    <v-row justify="center">
    <v-dialog
      v-model="dialog"
      width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
      <v-btn depressed large dark v-bind="attrs" v-on="on">Aviso de privacidad</v-btn>

      </template>
      <v-card>
        <v-card-title>
          <span class="headline">PRIVACIDAD DE CONTENIDOS Y PROTECCIÓN DE DATOS PERSONALES</span>
        </v-card-title>
        <v-card-text>
© Copyright 2016-2017 LABORATORIOS Y ESTÉTICA VENDOME S.A. Todos los
derechos reservados. Todos los textos, imágenes, gráficos, pistas de sonidos, datos
de vídeo y animación, así como su composición o diseño están protegidos por
derechos de autor y otras leyes de protección. Su contenido no puede copiarse
para fines comerciales o de otras, ni puede mostrarse, incluso en una versión
modificada, en otros sitios Web sin contar con previa autorización de
LABORATORIOS Y ESTÉTICA VENDOME S.A.
Colocar hipervínculos a la Página Web sólo está permitido por el previo
consentimiento otorgado por escrito otorgado por LABORATORIOS Y ESTÉTICA
VENDOME S.A. Nos gustaría señalar que ciertas imágenes que aparecen en el sitio
web de LABORATORIOS Y ESTÉTICA VENDOME S.A. son propiedad intelectual de
terceros.
En cumplimiento con lo establecido por la Ley Federal de Protección de Datos
Personales en Posesión de Particulares, LABORATORIOS Y ESTÉTICA VENDOME S.A.
(en lo sucesivo “LABORATORIOS Y ESTÉTICA VENDOME S.A.”) y/o STRAT VEC
GROUP S.C, en lo sucesivo “GRUPO STRAVE”, (hacen de su conocimiento la
política de privacidad y manejo de datos personales, en la que en todo momento
buscarán que el tratamiento de los mismos sea legítimo, controlado e informado,
a efecto de garantizar la privacidad de los mismos.
GRUPO STRAVE será el responsable de sus datos personales, su domicilio es:
Montecito N. 38, piso 7, oficina 34, Ciudad de México, C.P 03810, Delegación
Benito Juárez, Colonia Nápoles.
Los datos personales que proporcione cualquier persona física, incluyendo sin
limitar, toda persona que envíe información en el formulario de contacto de la
página oficial, contactos vía Facebook, Twitter, o cualquier red social, contactos
vía telefónica y clientes tendrán el uso que en forma enunciativa pero no
limitativa se describe a continuación:
 Para identificarle, ubicarle, comunicarle, contactarle, enviarle
información y/o proveer un servicio, así como su transmisión a terceros por
cualquier medio. El uso de los datos personales tendrá relación con el tipo de
interacción que usted tiene con LABORATORIOS Y ESTÉTICA VENDOME S.A., ya
sea comercial, civil, mercantil o de cualquier otra naturaleza.
Al visitar el sitio de LABORATORIOS Y ESTÉTICA VENDOME S.A. nosotros
recopilamos automáticamente algunos datos personales, que luego sumamos
a un conjunto para que no estén asociados a una única persona que sea
identificable. Con esta información elaboramos estadísticas sobre cuántos
usuarios visitaron nuestros sitios web y a qué páginas accedieron. Al recopilar
esta información, aprendemos a adaptar de la mejor manera a los sitios web a nuestros visitantes. Tal y como explicamos a continuación, recopilamos esta
información a través de "archivos temporales" o "web beacons".
 Archivos de registro: Los archivos temporales son archivos web del servidor
(como el nombre del dominio o la dirección IP, URL, el código de respuesta
http, el sitio web desde el que nos ha visitado o la fecha y duración de su
visita) que se crean automáticamente cuando un usuario de Internet visita
un sitio. Una vez que deje de usar nuestro sitio web, procesaremos y
utilizaremos esta información sólo para permitir más conexiones, para
temas de facturación, para detectar interrupciones en el equipo de
telecomunicaciones, así como para detectar abusos en nuestros servicios
de telecomunicaciones. Esta información se elimina inmediatamente una
vez finalizada la conexión al sitio web.
Esta información se utiliza para crear perfiles conjuntos generales de nuestra base
de usuarios del sitio, y no para crear perfiles de usuario personalizados.
 Web Beacons: Algunas páginas de nuestro sitio web contienen "web
beacons" (también conocidos como etiquetas de Internet, etiquetas de
píxel y clear GIFs). Los web beacons permiten a terceros obtener
información, como es la dirección IP del ordenador que ha descargado la
página en la que aparece el beacon, la URL de la página en la que
aparece el beacon, la hora en la que se produjo la visita a la página con
el beacon, el tipo de navegador utilizado para visitar la página, así como
la información de las cookies enviada por el tercero.
La temporalidad del manejo de los datos personales será indefinida a partir de la
fecha en que usted los proporcionó al Responsable.
En caso que deseé ejercer sus derechos de acceso, rectificación, cancelación u
oposición, estos los podrán ejercer en todo momento dirigiendo su solicitud a (i) al
correo electrónico contacto@strave.com y/o (ii) al siguiente domicilio: Montecito
N. 38, piso 7, oficina 34, Ciudad de México, C.P 03810, Delegación Benito Juárez,
Colonia Nápoles., de Lunes a Viernes de las 8:30 a las 17:30 horas, en días hábiles,
según corresponda. Para lo anterior, deberá hacernos saber fehacientemente los
datos personales que usted desea sean rectificados, cancelados o revisados, así
como el propósito para el cual los aportó y el nombre del Responsable a quien se
los entregó y en general cumplir los requisitos mencionados en el Art. 29 de la Ley
Federal de Protección de Datos Personales en Posesión de Particulares.
Grupo Strave podrá modificar el presente aviso de privacidad en cualquier
tiempo y lo mantendrá siempre a disposición por este conducto para su consulta.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="grey darken-1"
            text
            @click="dialog = false"
          >
            Entiendo
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

  </v-footer>

</v-app>
  
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>