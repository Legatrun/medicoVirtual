# Médico Virtual - Registro de Síntomas

Este es un proyecto web de **Médico Virtual**, donde los pacientes pueden registrar sus síntomas a través de un formulario simple.

## Arquitectura: Arquitectura por componentes
Cada parte de la aplicación es un componente reutilizable como ser SimpleForm, InputField, ...etc
La validación se separa como lógica pura, lo que mantiene bajo acoplamiento.
Ventajas: simple, modular y suficiente para proyectos de este tamaño

En caso de crecer se optaría por una arquitectura de capas
Presentacion: todos los componentes
Aplicación: lógica, estados y hooks
Infraestuctura: servicios externos para enviar datos del formulario


## 🚀 Cómo arrancar el proyecto

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

### 1. Instalar el proyecto
npm install

### 2. Iniciar el proyecto
npm run dev

