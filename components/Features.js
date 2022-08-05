import Anim from "../public/panoramic.gif"
const features = [
    {
      name: 'Minimal and thoughtful',
      description:
        'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
      imageSrc: Anim.src,
      imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    },
    {
      name: 'Refined details',
      description:
        'We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.',
      imageSrc: 'https://i.ibb.co/yntQTZ7/Hero.png',
      imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Features() {
    return (
      <div className="bg-black">
        <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Everything you want to do</h2>
            <p className="mt-4 text-gray-500">
              As a digital creative, your laptop or tablet is at the center of your work. Keep your device safe with a
              fabric sleeve that matches in quality and looks.
            </p>
          </div>
  
          <div className="mt-16 space-y-16">
            {features.map((feature, featureIdx) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
              >
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                    'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                  )}
                >
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                </div>
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                    'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                  )}
                >
                  <div className="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                    <img src={feature.imageSrc} alt={feature.imageAlt} className="object-center object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  