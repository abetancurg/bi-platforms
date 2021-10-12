ENTENDER CONTEXTO DE USO DE LIBRERÍA AUTHSERVICE

    https://www.youtube.com/watch?v=AcuzemsJfxA

ACLARACIÓN USO DE CHILDREN VERSUS NAVIGATE_TO Y ROUTER_LINK:

Cuando se necesita usar navigate_to, por buenas prácticas es recomendable enviar en el value
el path de tanto el padre como el hijo: ejemplo /home/dashboard_de_x_operación, ya que cuando
se envía el mero path del hijo, puede que la aplicación no pueda identificarlo en los Routers.

Cuando se necesita usar Router_Link es recomendable usar el mero path del hijo, puesto que
angular halla fácilmente este tipo de path en los Routers.

    Ref: https://stackoverflow.com/a/45091814