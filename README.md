# Angular-Simulacro

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

Un proyecto de simulación y práctica desarrollado con Angular para demostrar conceptos fundamentales del framework y mejores prácticas de desarrollo web moderno.

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Prerrequisitos](#prerrequisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Scripts Disponibles](#scripts-disponibles)
- [Desarrollo](#desarrollo)
- [Construcción](#construcción)
- [Pruebas](#pruebas)
- [Contribuir](#contribuir)
- [Licencia](#licencia)
- [Autor](#autor)

## 📖 Descripción

Angular-Simulacro es un proyecto educativo diseñado para practicar y demostrar las capacidades de Angular. Este proyecto incluye implementaciones de componentes, servicios, routing, formularios reactivos, y otras características esenciales del ecosistema Angular.

### Objetivos del Proyecto

- 🎯 Demostrar buenas prácticas de desarrollo con Angular
- 🏗️ Implementar arquitectura escalable y mantenible
- 🧪 Mostrar diferentes patrones de diseño en Angular
- 📱 Crear interfaces de usuario responsivas y accesibles
- 🔧 Integrar herramientas de desarrollo modernas

## ✨ Características

- **Componentes Modulares**: Arquitectura basada en componentes reutilizables
- **Routing Avanzado**: Navegación con guard de rutas y lazy loading
- **Formularios Reactivos**: Validación robusta y manejo de estado
- **Servicios HTTP**: Integración con APIs REST
- **Estado Centralizado**: Gestión de estado con observables y servicios
- **Responsive Design**: Interfaz adaptable a diferentes dispositivos
- **Internacionalización**: Soporte multi-idioma (i18n)
- **Pruebas Unitarias**: Cobertura completa con Jest/Jasmine
- **PWA Ready**: Funcionalidades de Progressive Web App

## 🛠️ Tecnologías

### Core
- **Angular** 15+ - Framework principal
- **TypeScript** 4.8+ - Lenguaje de desarrollo
- **RxJS** 7+ - Programación reactiva

### UI/UX
- **Angular Material** - Componentes de diseño
- **Bootstrap** 5+ - Framework CSS
- **Sass/SCSS** - Preprocesador CSS

### Herramientas de Desarrollo
- **Angular CLI** - Herramientas de línea de comandos
- **ESLint** - Linting de código
- **Prettier** - Formateo de código
- **Husky** - Git hooks

### Testing
- **Jasmine** - Framework de testing
- **Karma** - Test runner
- **Protractor/Cypress** - Testing E2E

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16.0 o superior)
- **npm** (versión 8.0 o superior) o **yarn**
- **Angular CLI** (versión 15.0 o superior)

```bash
# Verificar versiones
node --version
npm --version
ng version
```

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/INizetich/Angular-Simulacro.git
   cd Angular-Simulacro
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno** (opcional)
   ```bash
   cp src/environments/environment.example.ts src/environments/environment.ts
   ```

## 💻 Uso

### Desarrollo

Para iniciar el servidor de desarrollo:

```bash
ng serve
```

La aplicación estará disponible en `http://localhost:4200/`

### Modo de Producción

Para construir la aplicación para producción:

```bash
ng build --prod
```

## 📁 Estructura del Proyecto

```
Angular-Simulacro/
├── src/
│   ├── app/
│   │   ├── components/          # Componentes reutilizables
│   │   ├── pages/              # Páginas principales
│   │   ├── services/           # Servicios de la aplicación
│   │   ├── models/             # Interfaces y modelos
│   │   ├── guards/             # Guards de rutas
│   │   ├── pipes/              # Pipes personalizados
│   │   ├── directives/         # Directivas personalizadas
│   │   ├── shared/             # Módulos y componentes compartidos
│   │   └── core/               # Servicios singleton y configuración
│   ├── assets/                 # Recursos estáticos
│   ├── environments/           # Configuraciones de entorno
│   └── styles/                 # Estilos globales
├── e2e/                        # Pruebas end-to-end
├── docs/                       # Documentación adicional
└── dist/                       # Build de producción
```

## 🎯 Scripts Disponibles

```bash
# Desarrollo
npm start                 # Iniciar servidor de desarrollo
npm run serve            # Alias para ng serve

# Construcción
npm run build            # Build de producción
npm run build:dev        # Build de desarrollo

# Testing
npm test                 # Ejecutar pruebas unitarias
npm run test:watch       # Pruebas en modo watch
npm run e2e              # Pruebas end-to-end
npm run test:coverage    # Reporte de cobertura

# Calidad de Código
npm run lint             # Ejecutar linter
npm run lint:fix         # Corregir errores de linting
npm run format           # Formatear código con Prettier

# Utilidades
npm run analyze          # Analizar bundle
npm run docs             # Generar documentación
```

## 🔧 Desarrollo

### Creación de Componentes

```bash
ng generate component components/mi-componente
ng generate service services/mi-servicio
ng generate guard guards/mi-guard
```

### Convenciones de Código

- Usar **camelCase** para variables y métodos
- Usar **PascalCase** para clases e interfaces
- Usar **kebab-case** para selectores de componentes
- Seguir las guías de estilo oficiales de Angular

### Git Workflow

1. Crear rama para nueva feature: `git checkout -b feature/nueva-funcionalidad`
2. Hacer commits descriptivos siguiendo conventional commits
3. Crear Pull Request con descripción detallada

## 🏗️ Construcción

### Build de Desarrollo
```bash
ng build
```

### Build de Producción
```bash
ng build --configuration production
```

### Optimizaciones Incluidas
- Tree-shaking
- Minificación
- Compresión gzip
- Service Workers (PWA)
- Lazy loading de módulos

## 🧪 Pruebas

### Pruebas Unitarias
```bash
ng test
```

### Pruebas E2E
```bash
ng e2e
```

### Cobertura de Código
```bash
ng test --code-coverage
```

Los reportes se generan en la carpeta `coverage/`

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guías de Contribución

- Seguir las convenciones de código del proyecto
- Incluir pruebas para nuevas funcionalidades
- Actualizar documentación cuando sea necesario
- Respetar el estilo de commits convencionales

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**INizetich**

- GitHub: [@INizetich](https://github.com/INizetich)
- Proyecto: [Angular-Simulacro](https://github.com/INizetich/Angular-Simulacro)

---

⭐ Si este proyecto te ha sido útil, ¡no olvides darle una estrella!

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:

- Abre un [issue](https://github.com/INizetich/Angular-Simulacro/issues)
- Revisa la [documentación](docs/)
- Consulta las [FAQ](docs/FAQ.md)

---

**¡Happy Coding!** 🚀