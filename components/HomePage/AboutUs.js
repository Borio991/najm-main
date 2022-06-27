import React, { useContext } from 'react'
import Title from '../../components/ui/Title'
import ListItem from '../ui/ListItem'
import AchievmentItem from '../ui/AchievmentItem'
import { BsFillBookmarkCheckFill } from 'react-icons/bs'
import { FaMedal, FaSmileBeam } from 'react-icons/fa'
import LanguageContext from '../../utils/store'

export default function AboutUs() {
  const { en } = useContext(LanguageContext)
  return (
    <div
      className={`section-height  px-4 py-2 sm:px-6 md:py-8 lg:px-8 ${
        en ? '' : 'rtl'
      }`}
    >
      <div className="  mx-auto max-w-7xl">
        <Title>{en ? 'About Us' : 'من نحن'}</Title>
        <div className="flex flex-col items-start justify-center md:flex-row">
          <div className="flex-1 md:mt-10">
            <div>
              <p className="mx-4 w-5/6 leading-8">
                <span className="text-lg font-bold text-heading">
                  {en ? 'Najm Al Mashriq' : 'نجم المشرق'}
                </span>{' '}
                {en
                  ? 'is a construction company that focuses heavily on leasing heavy and light equipment for construction and building purposes, event services, festivals and celebrations, as well as sports racing services and logistical services in all regions of the Kingdom of Saudi Arabia and the Arab Gulf states.'
                  : 'هي شركة إنشاءات تركز بشكل كبير على تأجير المعدات الثقيلة والخفيفة للأغراض الإنشائية و البناء و خدمات الفعاليات و المهرجانات و الاحتفالات و كذلك خدمات السباقات الرياضية و الخدمات اللوجستية في جميع مناطق المملكة العربية السعودية و دول الخليج العربي'}
              </p>

              <p className="mx-4 mt-4 w-5/6 leading-8 ">
                <span className="text-lg font-bold ">
                  {en
                    ? 'We are committed to the creation of long lasting relationships :'
                    : 'نحن نؤمن بإنشاء علاقات طويلة الامد : '}
                </span>{' '}
                {en
                  ? 'With our customers, our staff and our suppliers. We respect all of them in our business and will never disadvantage them to secure short-term gain. We will keep the promises we make to our clients'
                  : 'مع عملائنا وموظفينا وموردينا. نحن نحترم جميعاً في أعمالنا ولن تضر بهم لتأمين مكاسب قصيرة المدى. سنفي بالوعود التي قطعناها على أنفسنا لعملائنا '}
              </p>
              <p className="mx-4 mt-4 w-5/6 leading-8 ">
                <span className="text-lg font-bold">
                  {en
                    ? 'We are passionate about our work:'
                    : 'نحن شغوفون بعملنا : '}
                </span>{' '}
                {en
                  ? 'Passion drives our commitment to continuous improvement and excellence in delivery, which generates happy customers and healthy profits'
                  : 'يقود الشغف التزامنا بالتحسين المستمر و التميز في التسليم مما يولد عملاء سعداء وأرباح جيدة'}
              </p>
            </div>

            <div className="mx-4 mt-8">
              <h2 className="mb-3  ml-4 mt-4 w-5/6 text-3xl font-bold tracking-wide text-slate-700 underline underline-offset-8">
                {en ? 'Vision 2030' : 'رؤية 2030'}
              </h2>
              <p className="mx-4  mb-8 w-5/6  text-lg leading-8 tracking-wider">
                {en
                  ? 'Under the leadership of the Custodian of the Two Holy Mosques, Vision 2030 was launched, a roadmap drawn up by His Royal Highness the Crown Prince, to harness the strengths God bestowed upon us – our strategic position, investment power and place at the center of Arab and Islamic worlds. The full attention of the Kingdom, and our Leadership, is on harnessing our potential to achieve our ambitions.'
                  : 'بدعم ورعاية خادم الحرمين الشريفين حفظه الله، أُطلقت رؤية المملكة 2030، وهي رؤية سمو ولي العهد لمستقبل هذا الوطن العظيم، والتي تسعى لاستثمار مكامن قوّتنا التي حبانا الله بها، من موقع استراتيجي متميز، وقوة استثمارية رائدة، وعمق عربيّ وإسلاميّ، حيث تولي القيادة لذلك كل الاهتمام، وتسخّر كل الإمكانات لتحقيق الطموحات.'}
              </p>
              <ListItem
                text={
                  en
                    ? 'Construction and building equipment rental with and without operator'
                    : 'تأجير معدات البناء والتشييد مع مشغل و بدون مشغل'
                }
              />
              <ListItem
                text={
                  en
                    ? 'Rental of cranes for construction purposes'
                    : 'تأجير الرافعات لأغراض البناء'
                }
              />
              <ListItem
                text={
                  en
                    ? 'General construction of residential and non-residential building'
                    : 'انشاء المباني السكنية و غير السكنية'
                }
              />
              <ListItem
                text={
                  en
                    ? 'Residential and non-residential building renovations'
                    : 'تجديد المباني السكنية وغير السكنية'
                }
              />
              <ListItem
                text={
                  en
                    ? 'sports public constrution including stadiums'
                    : 'انشاء المباني الرياضية بما في ذلك الملاعب'
                }
              />
            </div>
          </div>

          <div className="mx-4 mt-8 flex flex-1 flex-col justify-center">
            <AchievmentItem
              icon={<BsFillBookmarkCheckFill fill="#d71d1d" size={36} />}
              number="12 +"
              text={en ? 'Years in Business' : 'سنوات في العمل'}
            />
            <AchievmentItem
              icon={<FaMedal fill="#d71d1d" size={36} />}
              number="1600 +"
              text={en ? 'Project Finished' : 'عدد المشاريع المنجزة'}
            />
            <AchievmentItem
              icon={<FaSmileBeam fill="#d71d1d" size={36} />}
              number="210 +"
              text={en ? 'Satisfied Client' : 'عملاء راضون'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
