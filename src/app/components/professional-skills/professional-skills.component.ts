import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-skills',
  templateUrl: './professional-skills.component.html',
  styleUrls: ['./professional-skills.component.scss']
})
export class ProfessionalSkillsComponent implements OnInit {

  frontend: any[] = [
    {
      data: {
        datasets: [
          {
            data: [3, 10],
            backgroundColor: ["#c2002e",
              "#c9c9ca",],
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      },
      language: 'Angular',
      img: 'assets/angular.png',
      descripcion: 'Angular es un framework de ingeniería de software de código abierto mantenido por Google, que sirve para desarrollar aplicaciones web de estilo Single Page.',
      site: 'https://angular.io/'
    },

    {
      data: {
        datasets: [
          {
            data: [3, 10],
            backgroundColor: ["#c2002e",
              "#c9c9ca",],
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      },
      language: 'HTML',
      img: 'assets/html.png',
      descripcion: 'El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos. Por ejemplo, sus contenidos podrían ser párrafos, una lista con viñetas, o imágenes y tablas de datos.',
      site: ''
    },

    {
      data: {
        datasets: [
          {
            data: [3, 10],
            backgroundColor: ["#c2002e",
              "#c9c9ca",],
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      },
      language: 'CSS/SCSS',
      img: 'assets/css.png',
      descripcion: ' es un lenguaje de hojas de estilo, sirve para organizar la presentación y aspecto de una página web, ya sea en un ordenador, un móvil, una Tablet, etc. SASS «Syntactically Awesome Stylesheets » (definido como CSS con superpoderes) es un metalenguaje de hojas de estilo.',
      site: ''
    },

    {
      data: {
        datasets: [
          {
            data: [3, 10],
            backgroundColor: ["#c2002e",
              "#c9c9ca",],
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      },
      language: 'Bootstrap',
      img: 'assets/bootstrap.png',
      descripcion: 'Bootstrap es un framework CSS de código abierto que favorece el desarrollo web de un modo más sencillo y rápido. Incluye plantillas de diseño basadas en HTML y CSS con la que es posible modificar tipografías, formularios, botones, tablas, navegaciones, menús desplegables, etc.',
      site: 'https://getbootstrap.com/',
    },

    {
      data: {
        datasets: [
          {
            data: [3, 10],
            backgroundColor: ["#c2002e",
              "#c9c9ca",],
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      },
      language: 'Tailwind',
      img: 'assets/tailwind.png',
      descripcion: 'Tailwind CSS es un framework CSS que permite un desarrollo ágil, basado en clases de utilidad que se pueden aplicar con facilidad en el código HTML y unos flujos de desarrollo que permiten optimizar mucho el peso del código CSS. Tailwind CSS es una potente herramienta para el desarrollo frontend.',
      site: 'https://tailwindcss.com/'
    },

    {
      data: {
        datasets: [
          {
            data: [3, 10],
            backgroundColor: ["#c2002e",
              "#c9c9ca",],
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      },
      language: 'JavaScript',
      img: 'assets/javascript.png',
      descripcion: 'JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web.',
      site: ''
    },

    {
      data: {
        datasets: [
          {
            data: [3, 10],
            backgroundColor: ["#c2002e",
              "#c9c9ca",],
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      },
      language: 'TypeScript',
      img: 'assets/typescript.png',
      descripcion: 'TypeScript es un lenguaje orientado a objetos (como el lenguaje R, por ejemplo). Esto quiere decir que tanto el cliente como el servidor tienen acceso a la escritura de código. Además, se trata de un código abierto. Por otro lado, destaca por ser multiplataforma y, por consiguiente, ser portátil.',
      site: 'https://www.typescriptlang.org/'
    },

    {
      data: {
        datasets: [
          {
            data: [3, 10],
            backgroundColor: ["#c2002e",
              "#c9c9ca",],
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      },
      language: 'GraphQl',
      img: 'assets/graphql.png',
      descripcion: 'GraphQL es un lenguaje de consulta y un tiempo de ejecución del servidor para las interfaces de programación de aplicaciones (API); su función es brindar a los clientes exactamente los datos que solicitan y nada más. Gracias a GraphQL, las API son rápidas, flexibles y sencillas para los desarrolladores.',
      site: ''
    },
  ];

  backend: any[] = [
    {
      data: {
        datasets: [
          {
            data: [3, 10],
            backgroundColor: ["#c2002e",
              "#c9c9ca",],
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      },
      language: 'Python',
      img: 'assets/python.png',
      descripcion: 'Python es un lenguaje de programación de alto nivel que se utiliza para desarrollar aplicaciones de todo tipo. A diferencia de otros lenguajes.',
      site: 'https://www.python.org/'
    },

    {
      data: {
        datasets: [
          {
            data: [3, 10],
            backgroundColor: ["#c2002e",
              "#c9c9ca",],
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      },
      language: 'Django',
      img: 'assets/django.png',
      descripcion: 'Django es un framework web de alto nivel que permite el desarrollo rápido de sitios web seguros y mantenibles.',
      site: 'https://www.djangoproject.com/'
    },

    {
      data: {
        datasets: [
          {
            data: [3, 10],
            backgroundColor: ["#c2002e",
              "#c9c9ca",],
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      },
      language: 'JavaScript',
      img: 'assets/javascript.png',
      descripcion: 'JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web.',
      site: ''
    },

    {
      data: {
        datasets: [
          {
            data: [3, 10],
            backgroundColor: ["#c2002e",
              "#c9c9ca",],
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      },
      language: 'NodeJs',
      img: 'assets/node.png',
      descripcion: 'Node. js es un entorno de tiempo de ejecución de JavaScript (de ahí su terminación en . js haciendo alusión al lenguaje JavaScript). Este entorno de tiempo de ejecución en tiempo real incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript.',
      site: 'https://nodejs.org/en/'
    },

    {
      data: {
        datasets: [
          {
            data: [3, 10],
            backgroundColor: ["#c2002e",
              "#c9c9ca",],
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      },
      language: 'NestJS',
      img: 'assets/nestjs.png',
      descripcion: 'El termostato Nest es mucho más que un simple termostato con forma circular que nos trae recuerdos de diferentes dispositivos, es un producto que mediante una combinación de sensores, algoritmos de aprendizaje y la computación en la nube es capaz de aprender de nuestro comportamiento y preferenciasEl termostato Nest es mucho más que un simple termostato con forma circular que nos trae recuerdos de diferentes dispositivos, es un producto que mediante una combinación de sensores, algoritmos de aprendizaje y la computación en la nube es capaz de aprender de nuestro comportamiento y preferencias.',
      site: 'https://nestjs.com'
    },

    {
      data: {
        datasets: [
          {
            data: [3, 10],
            backgroundColor: ["#c2002e",
              "#c9c9ca",],
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      },
      language: 'TypeScript',
      img: 'assets/typescript.png',
      descripcion: 'TypeScript es un lenguaje orientado a objetos (como el lenguaje R, por ejemplo). Esto quiere decir que tanto el cliente como el servidor tienen acceso a la escritura de código. Además, se trata de un código abierto. Por otro lado, destaca por ser multiplataforma y, por consiguiente, ser portátil.',
      site: 'https://www.typescriptlang.org'
    },

    {
      data: {
        datasets: [
          {
            data: [3, 10],
            backgroundColor: ["#c2002e",
              "#c9c9ca",],
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      },
      language: 'Type ORM',
      img: 'assets/typeorm.png',
      descripcion: 'Entidades del ORM en aplicaciones NestJS. Veremos el concepto de entity de TypeORM, cómo declarar entidades y cargarlas fácilmente desde el módulo principal y los módulos que las necesiten. Mejorar la configuración de Nest para bases de datos.',
      site: 'https://typeorm.io/'
    },
  ];

  movil: any[]=[
    {
      data: {
        datasets: [
          {
            data: [3, 10],
            backgroundColor: ["#c2002e",
              "#c9c9ca",],
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      },
      language: 'Java',
      img: 'assets/java.png',
      descripcion: 'Java es un lenguaje de programación ampliamente utilizado para codificar aplicaciones web. Ha sido una opción popular entre los desarrolladores durante más de dos décadas, con millones de aplicaciones Java en uso en la actualidad.',
      site: 'https://www.java.com'
    },

    {
      data: {
        datasets: [
          {
            data: [3, 10],
            backgroundColor: ["#c2002e",
              "#c9c9ca",],
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      },
      language: 'Kotlin',
      img: 'assets/kotlin.png',
      descripcion: 'Kotlin es un lenguaje de programación de tipado estático para Java, Android, el navegador y próximamente LLVM, 100% interoperable con Java, creado por Jetbrains, la compañía responsable, entre otros, de Intellij Idea.',
      site: 'https://kotlinlang.org/'
    },
  ]


  ngOnInit(): void {

  }
}