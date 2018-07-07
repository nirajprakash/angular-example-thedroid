import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'technology-view',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  _mCurrentTechs = [];

  constructor() {

    this._mContent = this.contents["android"];
    this._mCurrentTechs = this.mTechs["android"];
  }

  ngOnInit() {

  }
  @Input("hoverColorClass") set hoverColor(value: string) {

    console.log(value);
    this._mClassHoverColor = value;
  }

  _mClassIntugineHoverColor: string = 'tdw-hover-card-up-intugine';
  _mClassPepstudyHoverColor: string = 'tdw-hover-card-up-pepstudy';
  _mClassSignzyHoverColor: string = 'tdw-hover-card-up-signzy';
  _mClassXpediHoverColor: string = 'tdw-hover-card-up-xpedi';
  _mClassHoverColor: string = 'tdw-hover-card-up';

  _mTabName = "android";
  _mContent;

  contents = {
    android: {
      title: "Android",
      detail: ["Language support in Kotlin and java",
        "Modules/Components based architecture",
        "Configurable App theme"]

    },

    web: {
      title: "Web",
      detail: ["Language support in Typescript",
        "Web Components based architecture",
        "Design implementation mostly in SCSS"]

    },
    backend: {
      title: "Backend",
      detail: ["Rest Api Architecture",
        "Lang support in Javascript and Typescript"]

    },
    design: {
      title: "design",
      detail: ["Material based design",
        "Paper elements based components"]

    }

  };


  mTechs = {
    android:[
      {
        "id": "111",
        "name": "Glide",
        "detail": "Image loading framework for Android...",
        "logo": "assets/img/glide.png",
        "link": "https://github.com/bumptech/glide/releases/tag/v3.7.0",
        "tab": "android"
      },
      {
        "id": "112",
        "name": "Retrofit",
        "detail": "Http client for Android and Java...",
        "logo": "assets/img/square.png",
        "link": "http://square.github.io/retrofit/",
        "tab": "android"
      },
      {
        "id": "113",
        "name": "RxJava",
        "detail": "An API for asynchronous programming with observable streams...",
        "logo": "assets/img/RxJava-logo.png",
        "link": "http://reactivex.io/",
        "tab": "android"
      },
      {
        "id": "114",
        "name": "LeakCanary",
        "detail": "A memory leak detection library for Android and Java....",
        "logo": "assets/img/leak-canary.png",
        "link": "https://github.com/nirajprakash/porfolio/blob/master/src/app/ui/onepage/onepage.component.html",
        "tab": "android"
      }
  
    ],
    web:[

      {
        "id": "101",
        "name": "Angular",
        "detail": "Platform for building mobile and desktop web applications...",
        "logo": "assets/img/angular.png",
        "link": "https://angular.io/",
        "tab": "web"
      },
  
      {
        "id": "102",
        "name": "Polymer",
        "detail": "A JavaScript library for building web applications using custom HTML elements...",
        "logo": "assets/img/polymer.png",
        "link": "https://www.polymer-project.org/",
        "tab": "web"
      },
      {
        "id": "131",
        "name": "MaterializeCss",
        "detail": "Responsive CSS framework based on Material Design by Google ..",
        "logo": "assets/img/materialize.png",
        "link": "http://materializecss.com/",
        "tab": "web"
      },
  
      {
        "id": "132",
        "name": "MDL",
        "detail": "library for web developers based on Google's Material Design Philosophy...",
        "logo": "assets/img/getmdl.png",
        "link": "https://getmdl.io/",
        "tab": "web"
      }
    ],
    backend:[
      {
        "id": "122",
        "name": "HapiJs",
        "detail": "A framework for building applications and services...",
        "logo": "assets/img/hapi.png",
        "link": "https://hapijs.com/",
        "tab": "back-end"
      },
  
      {
        "id": "123",
        "name": "Express",
        "detail": "Web Application framework for Node.js...",
        "logo": "assets/img/express.png",
        "link": "https://expressjs.com/",
        "tab": "back-end"
      },
      {
        "id": "124",
        "name": "Sequelize",
        "detail": "An ORM for Node.js...",
        "logo": "assets/img/sequelize.png",
        "link": "http://docs.sequelizejs.com/",
        "tab": "back-end"
      },
      {
        "id": "125",
        "name": "knexJS",
        "detail": "SQL query builder for Postgres, MySQL...",
        "logo": "assets/img/knexJS-logo.png",
        "link": "http://knexjs.org/",
        "tab": "back-end"
      }
    ],
    design:[
      {
        "id": "122",
        "name": "Adobe XD",
        "detail": "A framework for building applications and services...",
        "logo": "assets/img/xd.svg",
        "link": "https://www.adobe.com/products/xd.html",
        "tab": "design"
      },
  
      {
        "id": "122",
        "name": "Adobe PS",
        "detail": "A framework for building applications and services...",
        "logo": "assets/img/ps.svg",
        "link": "https://www.adobe.com/products/photoshop.html",
        "tab": "design"
      },
      {
        "id": "122",
        "name": "Adobe Illustrator",
        "detail": "A framework for building applications and services...",
        "logo": "assets/img/ai.svg",
        "link": "https://www.adobe.com/products/illustrator.html",
        "tab": "design"
      }
    ]
  }

  onTabChanged(tab: string) {
    console.log(tab)
    this._mContent = this.contents[tab];
    this._mTabName = tab;
    this._mCurrentTechs = this.mTechs[tab];

  }
}
