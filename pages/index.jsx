import Link from "next/link"
import FeatureTitle from "../components/featureTitle"
import NavbarApp from "../components/navbar"
import Navigation from "../components/navigation"

const callouts = [
  {
    name: 'Fruits',
    imageSrc: './images/Fruits.png',
    imageAlt: 'Fruits',
    colorbg: 'bg-light-green/80',
    href: 'fruits',
  },
  {
    name: 'Healthy Food',
    imageSrc: './images/Healthyfood.png',
    imageAlt: 'Healthy Food',
    colorbg: 'bg-zinc-200/80',
    href: 'healthyfood',
  },
  {
    name: 'Junk Food',
    imageSrc: './images/Junkfood.png',
    imageAlt: 'Junk Food',
    colorbg: 'bg-light-orange/80',
    href: 'junkfood',
  },
  {
    name: 'Snacks',
    imageSrc: './images/Snacks.png',
    imageAlt: 'Snacks',
    colorbg: 'bg-gray-300/80',
    href: 'snacks',
  },

]
export default function Home() {

  return (
    <>
      <NavbarApp />
      <div className="px-10 my-10">
        <FeatureTitle text='My Plan' />
        <div className="w-full h-56 my-3 p-3 rounded-md bg-light-green">
          <p className="font-semibold">On Progress</p>
        </div>
        <div className="my-10">
          <FeatureTitle text='You Knows' />
          <div className="grid grid-cols-4 gap-3 mt-3 h-[115px]">
            {callouts.map(item => (
              <Link href={item.href} key={item.name}>
                <a className={`grid-rows-2 ${item.colorbg} rounded-md drop-shadow-sm hover:bg-midnight/20`}>
                  <img src={item.imageSrc} alt={item.imageAlt} className="mx-auto" />
                  <h2 className="text-dark-green text-center font-medium mt-2">{item.name}</h2>
                </a>
              </Link>
            ))}
          </div>
          <div className="flex justify-between flex-wrap my-10">
            {/* Cards Items */}
            <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
              <div className="shrink-0">
                <img src="" alt="" className="bg-red-400 h-28 object-cover rounded-t-md" />
              </div>
              <div className="px-3 py-3 text-dark-green ">
                <h3 className="text-lg font-medium">Title</h3>
                <p className="text-md font-mono">319 KCAL</p>
              </div>
            </div>
            <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
              <div className="shrink-0">
                <img src="" alt="" className="bg-red-400 h-28 object-cover rounded-t-md" />
              </div>
              <div className="px-3 py-3 text-dark-green ">
                <h3 className="text-lg font-medium">Title</h3>
                <p className="text-md font-mono">319 KCAL</p>
              </div>
            </div>
            <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
              <div className="shrink-0">
                <img src="" alt="" className="bg-red-400 h-28 object-cover rounded-t-md" />
              </div>
              <div className="px-3 py-3 text-dark-green ">
                <h3 className="text-lg font-medium">Title</h3>
                <p className="text-md font-mono">319 KCAL</p>
              </div>
            </div>
            <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
              <div className="shrink-0">
                <img src="" alt="" className="bg-red-400 h-28 object-cover rounded-t-md" />
              </div>
              <div className="px-3 py-3 text-dark-green ">
                <h3 className="text-lg font-medium">Title</h3>
                <p className="text-md font-mono">319 KCAL</p>
              </div>
            </div>
            <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
              <div className="shrink-0">
                <img src="" alt="" className="bg-red-400 h-28 object-cover rounded-t-md" />
              </div>
              <div className="px-3 py-3 text-dark-green ">
                <h3 className="text-lg font-medium">Title</h3>
                <p className="text-md font-mono">319 KCAL</p>
              </div>
            </div>
            <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
              <div className="shrink-0">
                <img src="" alt="" className="bg-red-400 h-28 object-cover rounded-t-md" />
              </div>
              <div className="px-3 py-3 text-dark-green ">
                <h3 className="text-lg font-medium">Title</h3>
                <p className="text-md font-mono">319 KCAL</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* <Navigation /> */}
    </>
  )
}
