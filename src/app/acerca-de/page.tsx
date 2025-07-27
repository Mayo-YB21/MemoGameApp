// app/acerca-de/page.tsx
interface Integrante {
  name: string;
}

const desarrolladores: Integrante[] = [
  { name: 'Sebastian Osorio Rendon' },
  { name: 'Victor Eduardo Rizo Gonzalez' },
  { name: 'Jose Antonio Valeriano' },
  { name: 'Yahir Bello Mayo' },
];

const disenadoras: Integrante[] = [
  { name: 'Renata Carballo Campos' },
  { name: 'Sarahí Onofre Cortes' },
  { name: 'María Félix Dimayuga Hernández' },
  { name: 'Nasya Hernández Flores' },
  { name: 'Valeria Huerta Peñaloza' },
  { name: 'Paris Mikel Bustamantes Bárcenas' },
];

const Page = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Nuestro Equipo
        </h1>

        {/* Desarrolladores */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Desarrolladores de Software
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {desarrolladores.map((dev) => (
              <div
                key={dev.name}
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
              >
                <div className="h-20 w-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {dev.name
                    ?.split(' ')
                    .map((n) => n[0])
                    .join('')
                    .toUpperCase()}
                </div>
                <p className="text-lg font-semibold text-gray-900">{dev.name}</p>
                <p className="text-sm text-gray-500">Desarrollador</p>
              </div>
            ))}
          </div>
        </div>

        {/* Diseñadoras */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Diseñadoras de Imágenes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {disenadoras.map((dis) => (
              <div
                key={dis.name}
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
              >
                <div className="h-20 w-20 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {dis.name
                    ?.split(' ')
                    .map((n) => n[0])
                    .join('')
                    .toUpperCase()}
                </div>
                <p className="text-lg font-semibold text-gray-900">{dis.name}</p>
                <p className="text-sm text-gray-500">Diseñadora</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
