

$(function () {

  /*
   *  En una situación normal, las entradas serían ingresadas usando un json para 
   *  mantener una división de responsabilidades más adecuada, pero el buscador 
   *  restringe la lectura de archivos en modo file::, asi que lo mantengo como 
   *  un array constante de datos.
  */
  const entradas = [

    // Java
    {
      id: "java",
      titulo: "Primer contacto en java",
      fecha: "15 de enero de 2026",
      fechaOrden: "2026-01-15",
      categoria: "JAVA",
      colorCategoria: "var(--rosa)",
      thumb: "thumb-cyan",
      etiquetas: ["Java", "Programación"],
      resumen: "Un gestor de tareas por consola como primer contacto en java.",
      contenido: `
        <p>La primera vez que utilicé <strong>Java</strong> fue para realizar el típico <code>Hola mundo</code>; 
        nada nuevo ni original, ya que tenía algo de experiencia en programación en <strong>C</strong>. 
        Sin embargo, quise hacer algo distinto: aprovechando la ventaja de que Java cuenta con estructuras de datos por defecto,
        a diferencia de <strong>C</strong>, decidí crear un gestor de tareas por consola (lo que es lo mismo, una to-do list). 
        Nada complejo; ni siquiera contaba con una forma de almacenar los datos en un fichero o similar.</p>

        <h5>1. La clase Tarea</h5>
        <p>Una tarea tiene un identificador, un título y si está hecha o no:</p>
        <pre><code>public class Tarea {
    private int id;
    private String titulo;
    private boolean completada;

    public Tarea(int id, String titulo) {
        this.id = id;
        this.titulo = titulo;
        this.completada = false;
    }

    public void completar() {
        this.completada = true;
    }
}</code></pre>

        <h5>2. Guardar las tareas en una lista</h5>
        <p>Usé un <code>ArrayList</code>, que es como un array pero que crece solo:</p>
        <pre><code>List&lt;Tarea&gt; tareas = new ArrayList&lt;&gt;();
tareas.add(new Tarea(1, "Estudiar Java"));
tareas.add(new Tarea(2, "Hacer la compra"));</code></pre>

        <h5>3. Errores que cometí</h5>
        <ul>
          <li>Al momento de generar el código, no hice ninguna función que generara un archivo de guardado.</li>
          <li>El código en sí no siguió ningún patrón de diseño, ya que era un código muy simple, por lo que a la larga acabaría siendo un código monolítico.</li>
          <li>El código no tenía interfaz gráfica ni protección de ningún tipo.</li>
        </ul>

        <h5>4. Lo que aprendí</h5>
        <p>Java puede ser uno de los mejores lenguajes de programación que existen debido, 
          en parte, a su JVM, que permite usar Java en casi cualquier dispositivo.
          Esto, sumado a su seguridad y robustez, lo convierte en la opción idónea para software escalable.</p>
      `
    },

    /* Linux */
    {
      id: "linux",
      titulo: "yo uso Arch Linux",
      fecha: "8 de febrero de 2026",
      fechaOrden: "2026-02-08",
      categoria: "LINUX",
      colorCategoria: "var(--azul)",
      thumb: "thumb-magenta",
      etiquetas: ["Linux", "Sistemas Operativos"],
      resumen: "Instalé Arch linux en mi ordenador personal, debido a los problemas en Windows.",
      contenido: `
        <p>Como lo lees, instalé <code>Arch Linux</code> en mi ordenador personal debido a los constantes
           problemas que Windows ha tenido en los últimos años. Lo lógico hubiera sido usar un <strong>Sistema Operativo</strong>
           más acorde a mi experiencia como Ubuntu o Mint, pero eso seria aburrido, y a mí no me gusta aburrirme.</p>
        <p>Instalar arch fue fácil, pese a que destruí la distribución en mi primer intento de configurarlo,
           mi configuración, para hacerlo corto, utiliza Wayland junto a Hyprland, varios drivers de NVIDIA y algunas configuraciones más.</p>

        <h5>1. Los comandos que más uso</h5>
        <pre><code>pwd              # señala el directorio en el que me encuentro
ls               # ver los archivos del directorio, aunque suelo usar ll tambien
cd /home         # entrar en otra carpeta o cd .. para volver a la anterior
mkdir {nombre del directorio}      # crear una carpeta
cp a.txt b.txt   # copiar un archivo
mv a.txt b.txt   # mover o renombrar
rm archivo       # borrar (¡cuidado! un error y borras el directorio raíz)
sudo pacman -Syu # actualiza el sistema junto a los programas instalados</code></pre>

        <h5>2. Las carpetas principales</h5>
        <p>En Linux no hay discos <code>C:</code>. Todo cuelga de la raíz <code>/</code> lo cual
          ha sido, un problema para mi, ya que no le di suficiente espacio para las actualizaciones:</p>
        <pre><code>/home   → las carpetas de los usuarios
/etc    → configuración del sistema
/var    → registros (logs)
/tmp    → archivos temporales</code></pre>

        <h5>3. Permisos</h5>
        <p>Con <code>chmod</code> se cambian los permisos de un archivo. Cada número
        vale: 4 = leer, 2 = escribir, 1 = ejecutar.</p>
        <pre><code>chmod 755 script.sh   # el dueño puede todo, los demás solo leer y ejecutar</code></pre>

        <h5>4. Instalar programas</h5>
        <pre><code>sudo pacman -Syu
sudo pacman -S firefox</code></pre>

        <h5>Lo que aprendí</h5>
        <p>Linux al principio puede ser bastante exigente, 
          en especial si eliges una distribución que viene básicamente sin nada como Arch. 
          Manejar todo con la terminal, entender el porqué ocurren o fallan las cosas del sistema 
          y tener que ingeniártelas para resolver problemas que tú mismo te buscas al modificar un archivo 
          son el pan de cada día. Pero con el tiempo te acostumbras, te sueltas y empiezas a actuar con más soltura 
          y control; la libertad de poder hacer lo que quieras con tu sistema sin depender de una empresa o terceros es algo increíble.</p>
      `
    },

    /* SQL */
    {
      id: "sql",
      titulo: "Creación de una base de datos con SQL",
      fecha: "2 de marzo de 2026",
      fechaOrden: "2026-03-02",
      categoria: "SQL",
      colorCategoria: "var(--azul-claro)",
      thumb: "thumb-yellow",
      etiquetas: ["SQL", "Bases de Datos"],
      resumen: "Diseñé una base de datos de una biblioteca con tablas, claves y consultas.",
      contenido: `
        <p>Hice una base de datos para una <strong>biblioteca</strong>: autores, libros
        y préstamos. Antes de escribir nada dibujé el esquema en un papel.</p>

        <h5>1. Crear la base de datos</h5>
        <pre><code>CREATE DATABASE biblioteca;
USE biblioteca;</code></pre>

        <h5>2. Crear una tabla</h5>
        <pre><code>CREATE TABLE autor (
    id_autor INT AUTO_INCREMENT PRIMARY KEY,
    nombre   VARCHAR(80) NOT NULL
);</code></pre>
        <p><code>PRIMARY KEY</code> significa que ese campo identifica a cada fila
        y no se puede repetir. <code>AUTO_INCREMENT</code> hace que el número
        suba solo (1, 2, 3...).</p>

        <h5>3. Insertar datos</h5>
        <pre><code>INSERT INTO autor (nombre) VALUES ('Cervantes');
INSERT INTO autor (nombre) VALUES ('García Márquez');</code></pre>

        <h5>4. Consultar datos</h5>
        <pre><code>SELECT * FROM autor;                      -- ver todo
SELECT nombre FROM autor WHERE id_autor = 1;   -- solo uno</code></pre>

        <h5>5. Relacionar dos tablas</h5>
        <p>Un autor puede tener varios libros. Eso se hace con una
        <strong>clave foránea</strong>:</p>
        <pre><code>CREATE TABLE libro (
    id_libro INT AUTO_INCREMENT PRIMARY KEY,
    titulo   VARCHAR(150),
    id_autor INT,
    FOREIGN KEY (id_autor) REFERENCES autor(id_autor)
);</code></pre>

        <h5>Lo que aprendí</h5>
        <p>Que lo importante no es memorizar SQL, sino saber organizar los datos:
        qué tablas hacen falta y cómo se relacionan entre ellas.</p>
        
        <h5>Problemas que tuve</h5>
        <p>Al principio me planteé usar <code>Docker</code> como contenedor de la base de datos, 
          pero mi falta de experiencia hizo que terminara teniendo problemas para conectar el SQL de <code>Docker</code>
          con <code>Nvim</code>. Tras varias horas, terminé desistiendo y usando la terminal directamente.</p>
      `
    },
        //git
    {
      id: "git",
      titulo: "Aprendiendo Git y GitHub",
      fecha: "20 de marzo de 2026",
      fechaOrden: "2026-03-20",
      categoria: "GIT",
      colorCategoria: "var(--rojo)",
      thumb: "thumb-cyan",
      etiquetas: ["Git", "GitHub"],
      resumen: "Aprendí a guardar versiones de mis proyectos y a subirlos a GitHub para no perderlos.",
      contenido: `
        <p>Al principio me confundió que <code>Git</code> y <code>GitHub</code> no fueran lo mismo. Había usado <code>GitHub</code> en el pasado para descargar mods,
        ejecutables y algún que otro proyecto de código abierto, así que pensé que se trataba de lo mismo. 
        A raíz de este error, terminé descubriendo una de las herramientas de desarrollo de software más importantes hasta la fecha.</p>

        <h5>1. Qué es Git y qué es GitHub</h5>
        <p><code>Git</code> es un programa que se instala en tu ordenador y sirve para
        guardar versiones de tu proyecto. Permite entre otras cosas: crear ramas del mismo proyecto, que varias personas trabajen en el mismo código en simultaneo,
        permite gestionar los cambios realizados o volver a versiones anteriores del mismo proyecto. Por otro lado tenemos a <code>GitHub</code>, una página web donde puedes subir
        esos proyectos para tenerlos en la nube y compartirlos.</p>

        <h5>2. Instalar y configurar</h5>
        <p>Se descarga de <code>git-scm.com</code> y se instala como cualquier programa.
        Después, en la terminal, hay que decirle quién eres (esto se hace una sola vez):</p>
        <pre><code>git config --global user.name "nombre de usuario"
git config --global user.email "tuCorreo@email.com"</code></pre>
        <p>Esa información es la que aparecerá en cada cambio que guardes.</p>

        <h5>3. Los comandos comunes</h5>
        <p>Estos son los que uso el 90% del tiempo:</p>
        <pre><code>git init          # empezar a controlar una carpeta
git status        # ver qué archivos han cambiado
git add .         # preparar todos los cambios
git commit -m "nombreDelCambio"   # guardar los cambios
git log           # ver el historial de cambios</code></pre>
        <p>El flujo normal es: haces cambios en tu código, los miras con <code>status</code>,
        los preparas con <code>add</code>, y los guardas con <code>commit</code>.</p>

        <h5>4. Ramas</h5>
        <p>Una rama sirve para probar cosas sin tocar la versión principal
        del proyecto. Si sale bien, la juntas. Si sale mal, la borras y no ha pasado nada.</p>
        <pre><code>git branch nueva-idea    # crear una rama
git checkout nueva-idea  # cambiarte a ella
git checkout main        # volver a la principal
git merge nueva-idea     # juntar los cambios</code></pre>
        <p>Al principio me pareció medio absurdo tener que realizar todo esto, pero conforme crecen los proyectos simplemente terminas
        obligado a mantener una correcta organización, no solo del codigo, sino de los cambios que se hacen en él.</p>

        <h5>5. Subir el proyecto a GitHub</h5>
        <p>Primero creas un repositorio vacío en GitHub (con el botón "New repository").
        Después, en tu terminal, conectas tu proyecto local con el de GitHub:</p>
        <pre><code>git remote add origin https://github.com/TU-USUARIO/mi-proyecto.git
git branch -M main
git push -u origin main</code></pre>
        <p>La primera vez te pide iniciar sesión. A partir de ahí, cada vez que quieras
        subir cambios nuevos:</p>
        <pre><code>git add .
git commit -m "Nuevo cambio"
git push</code></pre>
        <p>Y si estás en otro ordenador y quieres bajarte los cambios:</p>
        <pre><code>git clone https://github.com/TU-USUARIO/mi-proyecto.git</code></pre>

        <h5>6. Errores que cometí</h5>
        <ul>
          <li><strong>Hacer commits enormes:</strong> mejor muchos pequeños con mensajes
              claros que uno gigante con "cambios varios".</li>
          <li><strong>No leer lo que dice <code>git status</code>:</strong> ahí te explica
              exactamente qué hacer. Es como una guía.</li>
          <li><strong>Realizar los cambios en la rama raíz:</strong> la lógica dice que <code>Git</code> permite varias ramas precisamente para no hacer cambios en la rama raíz.</li>
          <li><strong>Usar <code>git push --force</code>:</strong> práctica desaconsejada y bastante riesgosa</li>
        </ul>
        <h5>Lo que aprendí</h5>
        <p>Que <code>Git</code> no es solo para equipos. Aunque trabajes solo, sirve para no perder
        el trabajo, probar cosas nuevas y poder volver atrás si algo se rompe.
        Y <code>GitHub</code> es perfecto para tener los proyectos a la vista cuando quieres enseñarlos.</p>
      `
    }
  ];

  /* Crea las tarjetas, o mas bien devuelve un string en formato html que genera las tarjetas*/
  function crearTarjeta(entrada) {
    return `
      <article class="entry-card boton-leer" data-id="${entrada.id}">
        <div class="entry-thumb ${entrada.thumb}"></div>
        <div class="entry-body">
          <span class="entry-cat" style="color: ${entrada.colorCategoria};">
            ${entrada.categoria}
          </span>
          <h3 class="entry-title">${entrada.titulo}</h3>
          <p class="entry-desc">${entrada.resumen}</p>
          <div class="entry-meta">
            <span><i class="bi bi-calendar3"></i> ${entrada.fecha}</span>
            <span class="entry-arrow"><i class="bi bi-arrow-up-right"></i></span>
          </div>
        </div>
      </article>
    `;
  }


  /* esta funcion vuelve las tarjetas un elemento del DOM*/
  function pintarEntradas(lista) {
    const $contenedor = $("#listaEntradas");
    $contenedor.empty();

    $("#contador").text(lista.length + " de " + entradas.length);

    if (lista.length === 0) {
      $("#sinResultados").removeClass("d-none");
      return;
    }
    $("#sinResultados").addClass("d-none");


    lista.forEach(entrada => $contenedor.append(crearTarjeta(entrada)));
  }

  /* Buscador */
  $("#buscador").on("input", function () {
    const texto = $(this).val().toLowerCase();

    const filtradas = entradas.filter(function (entrada) {
      return entrada.titulo.toLowerCase().includes(texto) ||
        entrada.resumen.toLowerCase().includes(texto) ||
        entrada.categoria.toLowerCase().includes(texto) ||
        entrada.etiquetas.join(" ").toLowerCase().includes(texto);
    });

    pintarEntradas(filtradas);
  });


  // modals
  const modal = new bootstrap.Modal(document.getElementById("modalEntrada"));

  $("#listaEntradas").on("click", ".boton-leer", function () {
    const id = $(this).data("id");
    const entrada = entradas.find(function (cualquier) { return cualquier.id === id; });

    $("#modalTitulo").text(entrada.titulo);
    $("#modalCuerpo").html(
      '<p class="text-muted small">' + entrada.fecha + ' · ' + entrada.categoria + '</p>' +
      entrada.contenido
    );

    modal.show();
  });


  /* Formulario de contacto */
  $("#formContacto").on("submit", function (evento) {
    evento.preventDefault();

    if (!this.checkValidity()) {
      $(this).addClass("was-validated");
      return;
    }

    $("#avisoContacto").html(
      '<div class="alert alert-success">¡Gracias! Tu mensaje se ha enviado (demo).</div>'
    );

    this.reset();
    $(this).removeClass("was-validated");
  });


  /* Años y arranque */
  $("#anio").text(new Date().getFullYear());
  entradas.sort((a, b) => b.fechaOrden.localeCompare(a.fechaOrden)); // ordenar por fecha
  pintarEntradas(entradas);

});
