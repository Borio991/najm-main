import React, { useState } from 'react'
import Page from '../../components/layout/Page'
import CardEquipments from '../../components/ui/CardEquipments'
import Filter from '../../components/ui/Filter'
import Title from '../../components/ui/Title'
import { equipmentsData } from '../../data'
import { motion } from 'framer-motion'
import LangContext from '../../utils/store'
import { useContext } from 'react'

export default function Projects() {
  const { en } = useContext(LangContext)

  const [equipmentsList, setEquipmentsList] = useState(equipmentsData)
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setactiveGenre] = useState('all')
  return (
    <Page title="Equipments">
      <main className="mt-24  max-w-[95vw] ">
        <div className={`${en ? '' : 'rtl'} mx-auto max-w-7xl`}>
          <Title> {en ? 'Equipments' : 'معدات'} </Title>
          <p className="-mt-6 ">
            {en
              ? 'Huge Variety of Heavy and light Equipments'
              : 'مجموعة كبيرة من المعدات الثقيلة'}
          </p>
          <Filter
            equipmentsList={equipmentsList}
            setFiltered={setFiltered}
            activeGenre={activeGenre}
            setactiveGenre={setactiveGenre}
          />
          <motion.div
            layout
            className=" grid grid-cols-1 gap-4 py-4 md:grid-cols-2 xl:grid-cols-3"
          >
            {filtered.map((equipment) => (
              <CardEquipments key={equipment.id} {...equipment} />
            ))}
          </motion.div>
        </div>
      </main>
    </Page>
  )
}
