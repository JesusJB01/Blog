import {
  
  ArrowPathRoundedSquareIcon,
  BookOpenIcon,
    CurrencyDollarIcon,
  CursorArrowRaysIcon,
    HeartIcon,
  PencilSquareIcon,
    PencilIcon
} from "@heroicons/react/24/outline";



const products = [
  {
    name: "Blog",
    description: "Actualizaciones y articulos sobre PBE",
    href: "/blog",
    icon: PencilSquareIcon,
  },
  {
    name: "Cursos Gratis",
    description: "Cursos totalmente gratuitos",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Formaciones",
    description: "Sube al siguiente nivel",
    href: "#",
    icon:BookOpenIcon,
  },
  {
    name: "Vida Sana",
    description: "Articulos sobre la vida cotidiana",
    href: "#",
    icon:HeartIcon,
  },
  {
    name: "Articulos Relacionados",
    description: "Articulos relacionados a la Psicologia",
    href: "#",
    icon: ArrowPathRoundedSquareIcon,
  },
];
const callsToAction = [
  { name: "Donaciones", href: "#", icon: CurrencyDollarIcon },
  { name: "Publica con nosotros", href: "#", icon: PencilIcon },
];

const Menu = [
    {
        name: "Directorio",
        href: "#",
    },
    {
        name: "Contacto",
        href: "/contacto",
    },
    {
        name: "Nuestro Equipo",
        href: "/team",
    },
]

export { products, callsToAction, Menu };
