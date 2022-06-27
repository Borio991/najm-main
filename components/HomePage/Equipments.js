import React, { useContext } from 'react'
import Title from '../ui/Title'
import LangContext from '../../utils/store'
import HomePageEquipmentsCard from '../ui/HomePageEquipmentsCard'

export default function Equipments() {
  const { en } = useContext(LangContext)
  return (
    <div className="bg-zinc-200 px-4 py-2 sm:px-6 md:py-8 lg:px-12">
      <div className={`mx-auto max-w-7xl  py-2  md:py-8 ${en ? '' : 'rtl'}`}>
        <Title>{en ? 'Equipment' : 'معدات'}</Title>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <HomePageEquipmentsCard
            src="/images/eq-section/crane2.jpeg"
            title={en ? 'Crane' : 'رافعات'}
            subtitle={
              en
                ? 'Available in these weights :  25 t, 30 t, 50 t, 100 t, 120 t, 160 t, 220 t, 300 t, 500 t'
                : 'متوفر بهذه الاوزان : 25 طن، 30 طن، 50 طن، 100 طن، 120 طن، 160 طن، 220 طن، 300 طن، 500 طن'
            }
          />
          <HomePageEquipmentsCard
            src="/images/eq-section/jcb-backhoe.jpg"
            title={en ? 'JCB Backhoe' : 'حفار JCB'}
          />
          <HomePageEquipmentsCard
            src="/images/eq-section/telehandler.jpeg"
            title={en ? 'Telehandler' : 'ماكينة المناولة'}
          />
          <HomePageEquipmentsCard
            src="/images/equipments/forklift-4.jpeg"
            title={en ? 'ForkLift' : 'رافعة شوكية'}
            subtitle={
              en
                ? 'Available in these weights :  2.5 t, 3 t, 5 t, 7 t,10 t, 16 t, 20 t, 25 t'
                : 'متوفر بهذه الاوزان : 2.5 طن، 3 طن، 5 طن، 7 طن، 10 طن، 16 طن، 20 طن، 25 طن'
            }
          />
          <HomePageEquipmentsCard
            src="/images/equipments/bobcat1.jpeg"
            title={en ? 'Bobcat' : 'بوب كات'}
          />
          <HomePageEquipmentsCard
            src="/images/eq-section/more.jpeg"
            title={en ? 'Variety of Equipments' : 'مجموعة كبيرة من المعدات'}
          />
        </div>
      </div>
    </div>
  )
}
