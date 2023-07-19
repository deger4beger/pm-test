import Carousel from "./components/carousel";

function App() {

  const rules = [
    {
      text: "Зарегистрируйтесь и создайте профиль на странице акции",
      img: "public/assets/rules-1.svg"
    },
    {
      text: "Выполняйте задания каждый день и получайте сундуки с призами",
      img: "public/assets/rules-2.svg"
    },
    {
      text: "Набирайте баллы и поднимайтесь в рейтинге. Чем выше рейтинг, тем больше вероятность выигрыша",
      img: "public/assets/rules-3.svg"
    },
    {
      text: "Получайте гарантированные призы и бонусы",
      img: "public/assets/rules-4.svg"
    },
  ]

  const carouselItems = [
    {
      img: "public/assets/bronze-chest.png",
      text: "Бронзовый сундук",
    },
    {
      img: "public/assets/silver-chest.png",
      text: "Серебряный сундук",
    },
    {
      img: "public/assets/gold-chest.png",
      text: "Золотой сундук",
    },
    {
      img: "public/assets/platinum-chest.png",
      text: "Платиновый сундук",
    },
    {
      img: "public/assets/diamond-chest.png",
      text: "Алмазный сундук",
    }
  ]

  return (
    <div className="h-[2000px]">
      <div className='w-full h-[1080px] bg-main-bg bg-no-repeat text-white'>
        <div className='flex justify-between items-center px-[13px] py-[20px]'>
          <img
            src='public/assets/main-logo.png'
            alt='#'
          />
          <div className='flex items-center'>
            <div className='text-xl mr-5 pb-3'>
              <span className="text-yellow-300 underline hover:cursor-pointer">RU</span>
              <span className='px-2 relative bottom-[2px] text-gray-300'>|</span>
              <span className="hover:cursor-pointer">KZ</span>
            </div>
          <img
            src='public/assets/main-btn.png'
            alt='#'
            className="hover:cursor-pointer"
          />
          </div>
        </div>
        <img src="public/assets/main-text.svg" className='pl-[200px]' alt="#" />
      </div>
      <div className="bg-rules-bg bg-no-repeat h-[1080px] relative bottom-[560px] pt-[230px] text-white flex justify-center items-center font-parimatch flex-col">
        <div className="text-7xl italic">
          Как принять участие
        </div>
        <div className="flex mt-12">
          { rules.map(({ text, img }, index) => {
            return (
              <div key={index} className="text-center">
                <img src={img} alt="#" className="w-[250px] h-[220px] mx-[50px]" />
                <div className="w-[300px] text-center font-sans text-gray-300 pt-2">{text}</div>
              </div>
            );
          }) }
        </div>
      </div>
      <div className="h-[700px] bg-gradient-to-t from-black to-cyan-950 relative bottom-[760px] pt-12">
        <div className="flex justify-center text-white flex-col items-center">
          <div className="text-7xl">
            Сундуки
          </div>
          <div className="mt-6 font-sans text-gray-400 text-xl">
            Чем выше место в рейтиге, тем выше шанс выиграть призы
          </div>
          <Carousel items={carouselItems} />
        </div>
      </div>
    </div>
  )
}

export default App