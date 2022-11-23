import {
  TbBoxMultiple2, 
  TbMathSymbols, 
  TbGeometry, 
  TbMathMin,
  TbVariableOff,
  TbArrowsSplit2,
  TbVariable
} from 'react-icons/tb'
import {
  MdAreaChart,
  MdGpsFixed,
  MdOutlineViewArray,
  MdOutlinePivotTableChart 
} from 'react-icons/md'
import { 
  VscReplace,
  VscSymbolArray,
  VscReplaceAll,
  VscCombine
} from 'react-icons/vsc'
import { SiMatrix } from 'react-icons/si'
import { FaSearch, FaRulerHorizontal } from 'react-icons/fa'
import { IoMdCut } from 'react-icons/io'
import { BiShapeTriangle } from 'react-icons/bi'

export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "Métodos",
        path: '/Metodos'
    },
    {
        name: "Ayuda",
        path: '/Ayuda'
    }
]

export const listaMetodos = [
    {
        id: 1,
        icon: <FaSearch />,
        title: "Búsqueda Incremental",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/SENL/Busqueda-Incremental",
        category: "SENL"
    },
    {
        id: 2,
        icon: <IoMdCut />,
        title: "Bisección",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/SENL/Biseccion",
        category: "SENL"
    },
    {
        id: 3,
        icon: <FaRulerHorizontal />,
        title: "Regla Falsa",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/SENL/Regla-Falsa",
        category: "SENL"
    },
    {
        id: 4,
        icon: <MdGpsFixed />,
        title: "Punto Fijo",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/SENL/Punto-Fijo",
        category: "SENL"
    },
    {
        id: 5,
        icon: <MdAreaChart />,
        title: "Newton-Raphson",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/SENL/Newton-Raphson",
        category: "SENL"
    },
    {
        id: 6,
        icon: <BiShapeTriangle />,
        title: "Secante",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/SENL/Secante",
        category: "SENL"
    },
    {
        id: 7,
        icon: <TbBoxMultiple2 />,
        title: "Newton-Raphson-Raíces-Múltiples",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/SENL/Newton-Raphson-Raices-Multiples",
        category: "SENL"
    },
    {
        id: 8,
        icon: <TbVariableOff/>,
        title: "Eliminación Gaussiana (Simple)",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/SSDE/Eliminacion-Gaussiana-Simple",
        category: "SSDE"
    },
    {
        id: 9,
        icon: <VscReplace/>,
        title: "Eliminación Gaussiana (Pivote Parcial)",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/SSDE/Eliminacion-Gaussiana-Pivote-Parcial",
        category: "SSDE"
    },
    {
        id: 10,
        icon: <VscReplaceAll/>,
        title: "Eliminación Gaussiana (Pivote Total)",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/SSDE/Eliminacion-Gaussiana-Pivote-Total",
        category: "SSDE"
    },
    {
        id: 11,
        icon: <VscCombine/>,
        title: "Factorización LU (Simple)",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/SSDE/Factorizacion-LU-Simple",
        category: "SSDE"
    },
    {
        id: 12,
        icon: <TbArrowsSplit2/>,
        title: "Factorización LU (Parcial)",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/SSDE/Factorizacion-LU-Parcial",
        category: "SSDE"
    },
    {
        id: 13,
        icon: <SiMatrix/>,
        title: "Croult",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/SSDE/Croult",
        category: "SSDE"
    },
    {
        id: 14,
        icon: <TbVariable/>,
        title: "Doolittle",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/SSDE/Doolittle",
        category: "SSDE"
    },
    {
        id: 15,
        icon: <MdOutlinePivotTableChart/>,
        title: "Cholesky",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/SSDE/Cholesky",
        category: "SSDE"
    },
    {
        id: 16,
        icon: <MdOutlineViewArray/>,
        title: "Método Iterativo (Jacobi, Gauss-Seidel & SOR)",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/SSDE/Iterativo",
        category: "SSDE"
    },
    {
        id: 17,
        icon: <VscSymbolArray/>,
        title: "Vandermonde",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/Interpolacion/Vandermonde",
        category: "Interpolation"
    },
    {
        id: 18,
        icon: <TbMathSymbols/>,
        title: "Newton (Diferencias Divididas)",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/Interpolacion/Newton-Diferencias-Divididas",
        category: "Interpolation"
    },
    {
        id: 19,
        icon: <TbGeometry/>,
        title: "Lagrange",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/Interpolacion/Lagrange",
        category: "Interpolation"
    },
    {
        id: 20,
        icon: <TbMathMin />,
        title: "Spline (lineal)",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/Interpolacion/SplineLineal",
        category: "Interpolation"
    },
    {
        id: 21,
        icon: <TbMathMin />,
        title: "Spline (cuadrática)",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/Interpolacion/SplineCuadratica",
        category: "Interpolation"
    },
    {
        id: 22,
        icon: <TbMathMin />,
        title: "Spline (cúbica)",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/Metodos/Interpolacion/SplineCubica",
        category: "Interpolation"
    }
]


export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!"
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui. Eos, omnis beatae? Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate? Qui totam est omnis dolor nobis quisquam veritatis a!"
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    }
]
