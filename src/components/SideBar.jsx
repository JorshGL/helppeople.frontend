import React from 'react'
import Button from "@mui/material/Button"
import { AdminPanelSettings, HowToReg, Work } from '@mui/icons-material'

const SideBar = () => {
  const links = [
    {
      'name': 'Registrar ciudadano',
      'icon': <HowToReg />,
      'path': '/'
    },
    {
      'name': 'Administrar ciudadanos',
      'icon': <AdminPanelSettings />,
      'path': '/admin'
    },
    {
      'name': 'Vacantes',
      'icon': <Work />,
      'path': '/vacancies'
    },
  ]
  return (
    <div variant='permanent' className='flex flex-col items-center justify-center shadow-lg shadow-black/40 gap-5'>

      {links.map((link, index) => (
        <Button className='w-5/6' style={{justifyContent: 'flex-start'}} variant='text' startIcon={link.icon} href={link.path} key={index}>
          {link.name}
        </Button>
      ))}
    </div>
  )
}

export default SideBar
