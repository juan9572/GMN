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
        path: "/Metodos/SENL/Busqueda-Incremental",
        category: "SENL"
    },
    {
        id: 2,
        icon: <IoMdCut />,
        title: "Bisección",
        path: "/Metodos/SENL/Biseccion",
        category: "SENL"
    },
    {
        id: 3,
        icon: <FaRulerHorizontal />,
        title: "Regla Falsa",
        path: "/Metodos/SENL/Regla-Falsa",
        category: "SENL"
    },
    {
        id: 4,
        icon: <MdGpsFixed />,
        title: "Punto Fijo",
        path: "/Metodos/SENL/Punto-Fijo",
        category: "SENL"
    },
    {
        id: 5,
        icon: <MdAreaChart />,
        title: "Newton-Raphson",
        path: "/Metodos/SENL/Newton-Raphson",
        category: "SENL"
    },
    {
        id: 6,
        icon: <BiShapeTriangle />,
        title: "Secante",
        path: "/Metodos/SENL/Secante",
        category: "SENL"
    },
    {
        id: 7,
        icon: <TbBoxMultiple2 />,
        title: "Newton-Raphson-Raíces-Múltiples",
        path: "/Metodos/SENL/Newton-Raphson-Raices-Multiples",
        category: "SENL"
    },
    {
        id: 8,
        icon: <TbVariableOff/>,
        title: "Eliminación Gaussiana (Simple)",
        path: "/Metodos/SSDE/Eliminacion-Gaussiana-Simple",
        category: "SSDE"
    },
    {
        id: 9,
        icon: <VscReplace/>,
        title: "Eliminación Gaussiana (Pivote Parcial)",
        path: "/Metodos/SSDE/Eliminacion-Gaussiana-Pivote-Parcial",
        category: "SSDE"
    },
    {
        id: 10,
        icon: <VscReplaceAll/>,
        title: "Eliminación Gaussiana (Pivote Total)",
        path: "/Metodos/SSDE/Eliminacion-Gaussiana-Pivote-Total",
        category: "SSDE"
    },
    {
        id: 11,
        icon: <VscCombine/>,
        title: "Factorización LU (Simple)",
        path: "/Metodos/SSDE/Factorizacion-LU-Simple",
        category: "SSDE"
    },
    {
        id: 12,
        icon: <TbArrowsSplit2/>,
        title: "Factorización LU (Parcial)",
        path: "/Metodos/SSDE/Factorizacion-LU-Parcial",
        category: "SSDE"
    },
    {
        id: 13,
        icon: <SiMatrix/>,
        title: "Croult",
        path: "/Metodos/SSDE/Croult",
        category: "SSDE"
    },
    {
        id: 14,
        icon: <TbVariable/>,
        title: "Doolittle",
        path: "/Metodos/SSDE/Doolittle",
        category: "SSDE"
    },
    {
        id: 15,
        icon: <MdOutlinePivotTableChart/>,
        title: "Cholesky",
        path: "/Metodos/SSDE/Cholesky",
        category: "SSDE"
    },
    {
        id: 16,
        icon: <MdOutlineViewArray/>,
        title: "Método Iterativo (Jacobi, Gauss-Seidel & SOR)",
        path: "/Metodos/SSDE/Iterativo",
        category: "SSDE"
    },
    {
        id: 17,
        icon: <VscSymbolArray/>,
        title: "Vandermonde",
        path: "/Metodos/Interpolacion/Vandermonde",
        category: "Interpolation"
    },
    {
        id: 18,
        icon: <TbMathSymbols/>,
        title: "Newton (Diferencias Divididas)",
        path: "/Metodos/Interpolacion/Newton-Diferencias-Divididas",
        category: "Interpolation"
    },
    {
        id: 19,
        icon: <TbGeometry/>,
        title: "Lagrange",
        path: "/Metodos/Interpolacion/Lagrange",
        category: "Interpolation"
    },
    {
        id: 20,
        icon: <TbMathMin />,
        title: "Spline (lineal)",
        path: "/Metodos/Interpolacion/SplineLineal",
        category: "Interpolation"
    },
    {
        id: 21,
        icon: <TbMathMin />,
        title: "Spline (cuadrática)",
        path: "/Metodos/Interpolacion/SplineCuadratica",
        category: "Interpolation"
    },
    {
        id: 22,
        icon: <TbMathMin />,
        title: "Spline (cúbica)",
        path: "/Metodos/Interpolacion/SplineCubica",
        category: "Interpolation"
    }
]


export const faqs = [
    {
        id: 1,
        question: "Como deberia meter los inputs de los metodos? (los que no son funciones)",
        answer: "Lo ideal es que solo se ingresen numeros en los campos abiertos de todos los metodos, en los casos en los que se tiene que poner un string se le brinda al usuario un select para que escoja entre varias opciones."
    },
    {
        id: 2,
        question: "Como deberia ingresar funciones a los campos?",
        answer: "La sintaxis para las funciones que manejamos dentro de la pagina se basa unicamente en el parser de la libreria mathjs, por lo tanto, a la hora de escribir una funcion deberias seguir la siguiente documentacion https://mathjs.org/docs/expressions/syntax.html#operators"
    },
    {
        id: 3,
        question: "Existen restricciones en los metodos?",
        answer: "Si, los metodos tienen restricciones basicas para evitar que la pagina explote por errores que se pueden preveer, sin embargo no se asegura que todo caso este cubierto. Algunas restricciones son globales, por ejemplo el maximo de iteraciones que permitimos dentro de nuestros evaluadores de metodos es 500."
    }
]
