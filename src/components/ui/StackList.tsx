import React from 'react'
import { BiLogoRedux, BiLogoTypescript } from 'react-icons/bi'
import { FaReact } from 'react-icons/fa'
import { SiCypress, SiJest, SiStyledcomponents } from 'react-icons/si'

function StackList() {
  return (
    <div className="flex flex-wrap gap-4 w-full justify-center">
      <div className="flex flex-col items-center justify-center text-center">
        <BiLogoTypescript className="text-5xl" />
        <h2 className="mt-2">Typescript</h2>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <FaReact className="text-5xl" />
        <h2 className="mt-2">React</h2>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <BiLogoRedux className="text-5xl" />
        <h2 className="mt-2">Redux/RTKQuery</h2>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <SiStyledcomponents className="text-5xl" />
        <h2 className="mt-2">Styled Components</h2>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <SiJest className="text-5xl" />
        <h2 className="mt-2">Jest</h2>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <SiCypress className="text-5xl" />
        <h2 className="mt-2">Cypress</h2>
      </div>
    </div>
  )
}
export default StackList
