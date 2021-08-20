TROUBLE SHOOTING

Descripción de problema: Property 'value' does not exist on type 'EventTarget'
Solución: Agregar $any a las propiedades del método que se esté utilizando, 
          para que las propiedades terminen así: ($any($event.target).value)