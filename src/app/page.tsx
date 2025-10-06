// src/app/page.tsx

// Importamos el componente Header desde nuestro alias @/
import { Header } from '@/components/Header'; 
import { Footer } from '@/components/Footer'; // Lo importaremos en el siguiente paso

export default function LandingPage() {
  return (
    // Contenedor principal para toda la página
    <div className="min-h-screen flex flex-col">
      
      {/* 1. HEADER (Pegado a la parte superior con sombra) */}
      <Header />
      
      <main className="flex-grow">
        
        {/* 1. HERO: El Gancho Principal */}
        <section id="hero" className="text-center py-20 md:py-32 bg-gray-50">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-4 leading-tight">
            Gestión de Condominios <span className="text-blue-600">Inteligente</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto">
            Automatiza la administración, reduce la morosidad y transforma la experiencia de los residentes con nuestra plataforma impulsada por IA.
          </p>
          <a href="#contact" 
             className="inline-block px-10 py-4 bg-yellow-500 text-gray-900 text-lg font-bold rounded-full shadow-xl hover:bg-yellow-600 transition duration-300 transform hover:scale-105">
            ¡Quiero una Demo Gratuita!
          </a>
        </section>

        {/* 2. CARACTERÍSTICAS CLAVE */}
        <section id="features" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              Funcionalidades Diseñadas para la Excelencia Administrativa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Tareas 1-3 van aquí, usa los snippets anteriores */}
              {/* Tarjeta 1: Finanzas */}
              <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">
                <div className="text-5xl text-blue-600 mb-4">💰</div> 
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Gestión de Cuotas Inteligente</h3>
                <p className="text-gray-600">Automatiza el envío de facturas, recordatorios de pago y aplica recargos automáticamente. Reduce la morosidad con análisis predictivo.</p>
              </div>
              {/* Tarjeta 2: Comunicación */}
              <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">
                <div className="text-5xl text-blue-600 mb-4">🗣️</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Comunicación Centralizada</h3>
                <p className="text-gray-600">Envía comunicados urgentes o anuncios masivos en segundos. El historial de comunicaciones elimina disputas y aumenta la transparencia.</p>
              </div>
              {/* Tarjeta 3: Reservas */}
              <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">
                <div className="text-5xl text-blue-600 mb-4">🗓️</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Reservas de Amenidades en Tiempo Real</h3>
                <p className="text-gray-600">Permite a los residentes reservar salones, canchas o áreas comunes directamente desde la app. Cero conflictos por doble reserva.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. VENTAJA IA */}
        <section id="ai-advantage" className="py-16 md:py-24 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">TU VENTAJA COMPETITIVA</p>
                    <h2 className="mt-2 text-4xl font-bold text-gray-900">La Gestión es Futuro: Integración de Inteligencia Artificial</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Asistente Virtual 24/7 y Predicción de Problemas</h3>
                        <p className="text-lg text-gray-700 mb-6">Nuestra IA no es solo un *chatbot*; es un miembro del equipo. Libera a tu personal de responder preguntas repetitivas y obtén información que previene el caos.</p>
                        <ul className="space-y-4 text-left text-gray-700">
                            <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span><span className="font-semibold">Chatbot Basado en LLM:</span> Responde instantáneamente sobre reglamentos, horarios y trámites, 24/7.</li>
                            <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span><span className="font-semibold">Análisis Predictivo de Morosidad:</span> Identifica riesgos de retraso en pagos, permitiendo intervención proactiva.</li>
                            <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span><span className="font-semibold">Clasificación Automática de Tareas:</span> Categoriza reportes de incidentes y asigna automáticamente al equipo correcto.</li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        {/* Placeholder para la imagen de IA */}
                        <div className="bg-blue-200 w-full max-w-md h-80 rounded-2xl flex items-center justify-center text-blue-800 text-xl font-medium shadow-xl">
                            [Imagen/Gráfico de IA]
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 4. FORMULARIO DE CONTACTO (CTA) */}
        <section id="contact" className="py-16 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Transforma tu Administración Hoy</h2>
                <p className="text-xl text-gray-600 mb-10">Solicita una demo gratuita de 30 minutos y descubre cuánto tiempo y dinero puede ahorrar tu condominio.</p>
                
                <form 
                    method="POST" 
                    data-netlify="true" 
                    name="demo_request"
                    className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 space-y-4">
                    
                    <input type="hidden" name="form-name" value="demo_request" />

                    <input type="text" name="name" placeholder="Tu Nombre Completo" required
                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
                    
                    <input type="email" name="email" placeholder="Correo Electrónico Corporativo" required
                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
                           
                    <input type="text" name="condominium" placeholder="Nombre del Condominio" required
                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
                    
                    <input type="number" name="units" placeholder="Número de Unidades/Apartamentos" required
                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"/>

                    <button type="submit" 
                            className="w-full px-6 py-3 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                        SOLICITAR DEMO
                    </button>
                </form>
            </div>
        </section>

      </main>

      {/* 5. FOOTER (Pie de página) */}
      <Footer /> 
    </div>
  );
}