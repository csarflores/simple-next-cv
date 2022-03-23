"use strict";
exports.id = 1;
exports.ids = [1];
exports.modules = {

/***/ 9583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./utils/profile.js
var profile = __webpack_require__(2546);
;// CONCATENATED MODULE: ./components/Navbar.js



const Navbar = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "navbar navbar-expand-lg navbar-light bg-light",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container-fluid",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "navbar-brand",
                        children: "C\xe9sar Flores"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarColor03",
                    "aria-controls": "navbarColor03",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "navbar-toggler-icon"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarColor03",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "navbar-nav me-auto",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: profile/* linkedin */.kG,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        target: "_bank",
                                        children: "LinkedIn"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: profile/* whatsapp */.ON,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "btn btn-primary",
                                children: "Contr\xe1tame"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Footer.js



const Footer = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "text-center bg-light",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container p-4",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    children: "\xbfTomamos un caf\xe9?"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: profile/* whatsapp */.ON,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "btn btn-primary my-3",
                        children: "Agendar una reuni\xf3n"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "\xa9 C\xe9sar Flores - Simplex CV theme",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        new Date().getFullYear(),
                        " - Todos los derechos reservados"
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Layout.js



const Layout = ({ children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "bg-light",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "container py-4",
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
            ]
        })
    }));
};
/* harmony default export */ const components_Layout = (Layout);


/***/ }),

/***/ 1635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9583);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);



const custom404 = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: "Page Not Found",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "text-center py-3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: "404"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "Esta p\xe1gina no existe. Por favor retorna a",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: "inicio."
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (custom404);


/***/ }),

/***/ 8510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ }),

/***/ 4065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);

//Documento creado para editar las partes de html de cada página de la app

class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__["default"] {
    render() {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
            lang: "es",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "icon",
                            href: "/curriculum.ico"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "description",
                            content: "Curriculum Vitae y Portafolio de proyectos de C\xe9sar Flores. Administrativo y programador."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                    ]
                })
            ]
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);


/***/ }),

/***/ 2546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ON": () => (/* binding */ whatsapp),
/* harmony export */   "kG": () => (/* binding */ linkedin),
/* harmony export */   "nb": () => (/* binding */ skills),
/* harmony export */   "b8": () => (/* binding */ experience),
/* harmony export */   "PX": () => (/* binding */ contact),
/* harmony export */   "$L": () => (/* binding */ studies),
/* harmony export */   "vt": () => (/* binding */ references),
/* harmony export */   "ru": () => (/* binding */ courses)
/* harmony export */ });
{}const whatsapp = "https://wa.me/543492272189?text=Hola!%20Vi%20tu%20CV%20\xbfCharlamos?";
{}const linkedin = "https://www.linkedin.com/in/c%C3%A9sar-flores-6243ba60/";
const skills = [
    {
        skill: 'Administraci\xf3n y procesos',
        icon: '',
        percentage: '90'
    },
    {
        skill: 'Microsoft Office',
        icon: '',
        percentage: '90'
    },
    {
        skill: 'Contabilidad',
        icon: '',
        percentage: '70'
    },
    {
        skill: 'Pensamiento anal\xedtico',
        icon: '',
        percentage: '70'
    },
    {
        skill: 'HTML y CSS',
        icon: '',
        percentage: '70'
    },
    {
        skill: 'Bootstrap',
        icon: '',
        percentage: '50'
    },
    {
        skill: 'GitHub',
        icon: '',
        percentage: '50'
    },
    {
        skill: 'PHP',
        icon: '',
        percentage: '40'
    },
    {
        skill: 'JavaScript Vanilla',
        icon: '',
        percentage: '30'
    },
    {
        skill: 'Next JS',
        icon: '',
        percentage: '20'
    }
];
const experience = [
    {
        company: 'Centro de Embalajes SA',
        from: 'Oct 2018',
        to: 'Ene 2021',
        ocupation: 'Administrativo',
        description: 'Administraci\xf3n comercial:<br />* Gesti\xf3n de cuentas corrientes de clientes en Rafaela y las diferentes zonas comerciales.<br />* Rendici\xf3n diaria de cobranzas y posterior registro en el sistema.<br /><br /></br>Administraci\xf3n general:<br />* Tr\xe1mites bancarios.<br />* Conciliaciones bancarias.<br />* Conciliaciones cupones tarjetas de d\xe9bito y cr\xe9dito.<br />* Registraci\xf3n de cobranzas.<br />* Archivo.<br />* Actividades administrativas generales.'
    },
    {
        company: 'Limansky SA',
        from: 'Ene 2012',
        to: 'Ago 2017',
        ocupation: 'Control registraci\xf3n contable',
        description: 'Controlar las registraciones contables y realizar las acciones necesarias para brindar a las distintas direcciones de la empresa informaci\xf3n \xfatil, confiable y eficiente.<br />Tareas principales:<br />* Controlar las registraciones contables.<br />* Liderar las tareas para el cierre contable mensual.<br />* Realizar informes correspondientes al cierre contable mensual.<br />* Realizar tareas e informes para el cierre de balance.<br />* Mejora, re-ingenier\xeda de procesos administrativos y creaci\xf3n de modelos aplicando BI.<br />* Auditorias internas de procesos y creaci\xf3n de indicadores de gesti\xf3n utilizando Excel y Microstrategy.'
    },
    {
        company: 'Limansky SA',
        from: 'Ene 2010',
        to: 'Dic 2011',
        ocupation: 'Registraci\xf3n contable',
        description: 'Registrar los comprobantes de compras en el sistema contable interno.<br />Tareas principales:<br />* Registrar en el sistema interno de contabilidad todos los comprobantes de compras.<br />* Realizar controles para el cierre contable mensual.'
    },
    {
        company: 'Limansky SA',
        from: 'Dic 2007',
        to: 'Dic 2009',
        ocupation: 'Responsable de archivo',
        description: 'Tareas principales:<br />* Realizar un sistema l\xf3gico y eficiente para el archivo.<br />* Archivar la documentaci\xf3n.<br />* Controles mensuales de documentaci\xf3n.<br />* Atenci\xf3n de pedidos de documentaci\xf3n de clientes internos.<br />* Realizar los expurgos anuales.'
    },
    {
        company: 'Imtec SA',
        from: 'Abr 2007',
        to: 'Dic 2007',
        ocupation: 'Dise\xf1ador t\xe9cnico',
        description: 'Realizar los planos t\xe9cnicos de plantas de alimento balanceado y silos para luego pasarlos a producci\xf3n.'
    }
];
const contact = [
    {
        fechaNacimiento: '31 a\xf1os',
        domicilio: 'Dimas Mateos 690',
        ciudad: 'Rafaela',
        provincia: 'Santa Fe',
        pais: 'Argentina',
        celular: '+54 3492-272189',
        email: 'florescesar80@gmail.com'
    }
];
const studies = [
    {
        title: 'T\xe9cnico Universitario en Programaci\xf3n',
        institution: 'UTN Rafaela',
        from: '2022',
        to: 'actualidad',
        status: 'Cursando primer a\xf1o'
    },
    {
        title: 'Ingenier\xeda electromec\xe1nica',
        institution: 'UTN Rafaela',
        from: '2008',
        to: '2011',
        status: 'Incompleto'
    },
    {
        title: 'Operario de m\xe1quinas y herramientas con orientaci\xf3n en equipos electromec\xe1nicos',
        institution: 'EET 460',
        from: '2003',
        to: '2007',
        status: 'Secundario completo'
    }
];
const references = [
    {
        nameSurname: 'Yanina Cattaneo',
        relation: 'Colega de trabajo',
        company: 'Limansky SA',
        phone: '3492 - 505544',
        email: 'yanina.cattaneo@limansky.com'
    },
    {
        nameSurname: 'Marcelo Almarante',
        relation: 'Colega de trabajo',
        company: 'Limansky SA',
        phone: '3492 - 505544',
        email: 'marcelo.almarante@limansky.com'
    }
];
const courses = [
    {
        institution: "EDteam",
        nameCourse: "Programaci\xf3n desde cero",
        from: "24/09/2021",
        to: "26/09/2021",
        certificateURL: 'certificates/01edteam.png'
    },
    {
        institution: "Ministrerio de desarrollo productivo de Argentina",
        nameCourse: "Argentina Programa #S\xe9Programar",
        from: "Oct 2021",
        to: "Dic 2021",
        certificateURL: 'certificates/02argprograma.png'
    },
    {
        institution: "Ministrerio de desarrollo productivo de Argentina",
        nameCourse: "Argentina Programa #YoProgramo",
        from: "Feb 2022",
        to: "actualidad",
        certificateURL: 'encurso.png'
    }
];


/***/ }),

/***/ 7020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-5cd94c89d3acac5f.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/Q_VJxGHk88SGcxHeFRh5o/_buildManifest.js","static/Q_VJxGHk88SGcxHeFRh5o/_ssgManifest.js","static/Q_VJxGHk88SGcxHeFRh5o/_middlewareManifest.js"],"pages":{"/":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-a054bbf31fb90f6a.js","static/chunks/247-7619912a799cb623.js","static/chunks/pages/index-a2cd2b1ff92b0d57.js"],"/404":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-a054bbf31fb90f6a.js","static/chunks/pages/404-a70a9f2524801532.js"],"/_app":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-a054bbf31fb90f6a.js","static/css/5436457e1b9bb065.css","static/chunks/pages/_app-d1122d71626744bc.js"],"/_error":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-a054bbf31fb90f6a.js","static/chunks/pages/_error-2280fa386d040b66.js"],"/blog":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-a054bbf31fb90f6a.js","static/chunks/pages/blog-63c447ed55cf8193.js"],"/experience":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-a054bbf31fb90f6a.js","static/chunks/pages/experience-7dcba70c7b5ed54f.js"],"/gallery":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-a054bbf31fb90f6a.js","static/chunks/pages/gallery-ccf0abdb40e7b4fd.js"],"/github":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-a054bbf31fb90f6a.js","static/chunks/pages/github-57582753235714fa.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 3978:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 9450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;