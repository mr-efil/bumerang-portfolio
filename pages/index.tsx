import Image from "next/image";
import MenuToggleButton from "./components/MenuToggleButton";
import { useEffect, useRef, useState } from "react";
import GeneralBox from "./components/GeneralBox";
import SideOzellik from "./components/SideOzellik";
import FAQItem from "./components/FAQItem";
import Map from "./components/Map";
import BumerangWrapper from "./components/BumerangWrapper";
import BumerangBelt from "./components/BumerangBelt";

export default function Home() {
  const [chatShow, setChatShow] = useState(false);

  const [isVisible1, setIsVisible1] = useState(false);
  const ref1 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible1(entry.isIntersecting);
    });

    const currentRef = ref1.current; // Capture the current ref value

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref1]);

  const [isVisible2, setIsVisible2] = useState(false);
  const ref2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible2(entry.isIntersecting);
    });

    const currentRef = ref2.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref2]);

  const [isVisible3, setIsVisible3] = useState(false);
  const ref3 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible3(entry.isIntersecting);
    });

    const currentRef = ref3.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref3]);

  const [isVisible4, setIsVisible4] = useState(false);
  const ref4 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible4(entry.isIntersecting);
    });

    const currentRef = ref4.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref4]);

  const [isVisible5, setIsVisible5] = useState(false);
  const ref5 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible5(entry.isIntersecting);
    });

    const currentRef = ref5.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref5]);

  const [isVisible6, setIsVisible6] = useState(false);
  const ref6 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible6(entry.isIntersecting);
    });

    const currentRef = ref6.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref6]);

  const [isVisible7, setIsVisible7] = useState(false);
  const ref7 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible7(entry.isIntersecting);
    });

    const currentRef = ref7.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref7]);

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const targetPosition = window.scrollY + elementRect.top + 50;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  const faqData = [
    {
      question: "PATİKA NEDİR? NASIL KULLANILIR?",
      answer:
        "Tercih ettiğiniz 3 aydan 9 aya kadar süren ilerleme sürecini günü gününe eksik olduğunuz konulara göre belirleyen patika sistemi, planlamayı kolaylaştırarak sizlere yardımcı olur.",
    },
    {
      question: "BUMERANG ÖĞRENİM SÜRECİNİ NASIL GELİŞTİRİYOR?",
      answer:
        "Bumerang süreklilik felsefesini ele alan bir yapay zekayla geliştirilmiş, kullanıcıların günlük, haftalık, ve aylık gelişmelerine göre eksik olduğu kısımları saptayıp görevlendirmeler ve gelişmiş profil istatistikleriyle öğrenciye sunar.",
    },
    {
      question: "KENDİ OYUNUMUZU EKLEYEBİLİYOR MUYUZ?",
      answer:
        "Zaman yönetimi ve hızlı karar verme yetileri gibi sınavda ihtiyaç duyulan özelliklere göre seçilmiş oyunlara sizlerde katkıda bulunabilirsiniz.",
    },
    {
      question: "GELECEK ÖZELLİKLER NELERDİR?",
      answer:
        "Öğrencilerin sorumluluk bilincini artırmak amacıyla eş-koçluk platformu (Bumerang KOÇ) ve öğretmenlerin sınıflarının gelişimini ve ebeveynlerin çocuklarının ilerlemesini gözlemleyebileceği (Bumerang Takip)  uygulamasını sizlere sunacağız.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <main
      className={`flex h-auto flex-col items-center justify-between bg-[#f7f6f1]`}
      style={{ fontFamily: "Montserrat ; sans-serif" }}
    >
      <div
        className="z-10 h-fit w-full items-center flex flex-col overflow-y-visible overflow-x-hidden"
        style={{
          backgroundColor: chatShow ? "#0d0d0d" : "",
          transition: "background-color .5s ease-in-out",
          transformOrigin: "top-right",
        }}
      >
        <header className="w-full relative top-0 h-20 flex items-center justify-between z-50">
          <Image
            src="/logo-siyah.png"
            alt="lolol"
            width={150}
            height={150}
            className="relative left-8 object-contain lg:h-12 lg:w-auto"
            style={{ filter: chatShow ? "invert(1)" : "" }}
          />
          <MenuToggleButton setChatShow={setChatShow} chatShow={chatShow} />
        </header>
        <section
          key={"hero"}
          className="w-screen h-[900px] relative flex flex-col border-red-600 justify-start items-start overflow-visible"
          style={{
            opacity: chatShow ? 0 : 1,
            transition: "opacity .5s ease-in-out",
            perspective: 3000,
          }}
        >
          <div className="w-[2000px] h-screen absolute -top-16 md:top-0 -right-[36rem] sm:-right-80 md:-right-60 lg:-right-16 xl:right-0 xl:translate-x-[10%] 2xl:translate-x-0 scale-[70%] sm:scale-[75%] md:scale-[80%] lg:scale-100">
            <div className="w-[420px] h-96 absolute top-[415px] right-[640px] border-green-500 font-bold text-6xl text-[#0d0d0d] flex text-right justify-end overflow-hidden hero-100">
              <h1 className="flex h-fit items-end flex-col top-4 relative">
                <span className="text-[150px] bg-[#f7f6f1] hero-soru-100 z-20">
                  100
                </span>{" "}
                <span className="opacity-60 top-2 relative hero-soru z-10">
                  SORU
                </span>
              </h1>
            </div>
            <div className="w-[420px] h-96 absolute top-[-30px] right-[670px] border-green-500 font-bold text-6xl text-[#0d0d0d] flex items-end justify-end text-left  overflow-x-hidden hero-100">
              <h1 className="-rotate-90 scale-y-[65%] -right-12 bottom-32 relative w-fit flex flex-col-reverse items-end">
                <span className="text-[150px] bg-[#f7f6f1] hero-gun-100 z-20">
                  100
                </span>{" "}
                <span className="opacity-60 hero-gun z-10">GÜN</span>
              </h1>
            </div>
            <Image
              src="/new-hero.webp"
              alt="lolol"
              width={1200}
              height={1200}
              className="absolute w-[1200px] h-auto -z-10 object-contain right-0 -top-[90px] lg:overflow-visible"
            />
          </div>

          <h1 className="text-4xl font-bold italic text-left text-[#0d0d0d] relative top-52 left-24 drop-shadow-[0_2px_10px_rgba(255,255,255)] h-fit w-fit 2xl:left-96 lg:text-6xl hidden xl:flex">
            HEDEFLERİNİZE <br />
            ULAŞMANIZ <br /> İÇİN
          </h1>
          <h2 className="text-lg font-light italic text-left  text-[#0d0d0d] relative top-52 mt-16 left-24 h-fit w-fit 2xl:left-96 lg:text-xl hidden xl:flex">
            Sizler için <br />
            yeniden tasarladığımız <br />
            öğrenim metodunu <br />
            keşfedin.
          </h2>
          <div
            key={"hero buttons"}
            className="relative h-14 w-5/6 justify-between top-52 mt-16 left-24 items-center sm:justify-start space-x-2 2xl:left-96 hidden xl:flex"
          >
            <a href="https://www.bmrng.app">
              <button className="text-xl px-8 py-4 font-bold italic text-center text-[#f7f6f1] bg-[#0d0d0d] rounded hover:bg-transparent border hover:border-[#0d0d0d] hover:text-[#0d0d0d] duration-100">
                TEST ET
              </button>
            </a>
            <button
              className="text-xl px-6 py-4 font-light italic text-center text-[#0d0d0d] border border-black border-opacity-60 rounded opacity-60 hover:opacity-100 hover:bg-[#0d0d0d] hover:text-[#f7f6f1] duration-100"
              onClick={() => scrollToElement("erken")}
            >
              erken kayıt
            </button>
          </div>
        </section>
        <section
          key={"hero2"}
          className="w-full h-screen md:h-fit lg:h-screen md:py-48 lg:py-0 relative flex flex-col border-red-600 justify-center items-start overflow-visible visible xl:hidden"
          style={{
            opacity: chatShow ? 0 : 1,
            transition: "opacity .5s ease-in-out",
          }}
        >
          <BumerangBelt invert={false} id={1} drc={"right"} />
          {/* <BumerangWrapper invert={false} /> */}
          {/* <Image
            src="/new-hero.webp"
            alt="lolol"
            width={1200}
            height={1200}
            className="absolute h-5/6 -top-20 -right-14 -z-10 object-cover lg:right-24 lg:top-0 lg:overflow-visible"
          /> */}
          <div className="flex flex-col justify-start w-full h-fit relative left-8 md:left-24 lg:left-96 ">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold italic text-left text-[#0d0d0d] relative drop-shadow-[0_2px_10px_rgba(255,255,255)] flex h-fit w-fit ">
              HEDEFLERİNİZE <br />
              ULAŞMANIZ <br /> İÇİN
            </h1>
            <h2 className="text-lg md:text-2xl lg:text-xl font-light italic text-left  text-[#0d0d0d] relative mt-16 flex h-fit w-fit">
              Sizler için <br />
              yeniden tasarladığımız <br />
              öğrenim metodunu <br />
              keşfedin.
            </h2>
            <div
              key={"hero buttons"}
              className="relative h-14 w-5/6 flex justify-between mt-24 items-center sm:justify-start space-x-2"
            >
              <a href="https://www.bmrng.app">
                <button className="text-xl px-8 py-4 font-bold italic text-center text-[#f7f6f1] bg-[#0d0d0d] rounded hover:bg-transparent border hover:border-[#0d0d0d] hover:text-[#0d0d0d] duration-100">
                  TEST ET
                </button>
              </a>
              <button
                className="text-xl px-6 py-4 font-light italic text-center text-[#0d0d0d] border border-black border-opacity-60 rounded opacity-60 hover:opacity-100 hover:bg-[#0d0d0d] hover:text-[#f7f6f1] duration-100"
                onClick={() => scrollToElement("erken")}
              >
                erken kayıt
              </button>
            </div>
          </div>
        </section>
        <section
          key={"boxes"}
          className="w-full h-fit py-20 relative flex flex-wrap justify-center items-center border-red-600 lg:flex-row xl:w-5/6 2xl:w-[90%] lg:h-fit lg:my-8"
          style={{
            opacity: chatShow ? 0 : 1,
            transition: "opacity .5s ease-in-out",
          }}
        >
          <GeneralBox text1={"DENEME"} text2={"ZİNCİRİ"} number={1} />
          <GeneralBox text1={"EŞ-KOÇLUK"} text2={"SİSTEMİ"} number={2} />
          <GeneralBox text1={"BİREYSEL"} text2={"TAKVİM"} number={3} />

          <div
            className={`w-[90%] max-w-lg md:max-w-xl lg:max-w-md 2xl:max-w-sm h-40 rounded-lg flex flex-col justify-between items-center border border-[#0d0d0d] relative my-2.5 mx-2 hover:bg-[#0d0d0d] group`}
          >
            <span className="w-full text-base text-[#0d0d0d] font-light text-left top-4 left-5 relative group-hover:text-[#f7f6f1] ">
              {"// 4"}
            </span>
            <h2 className="w-full text-4xl text-[#0d0d0d] font-bold text-right bottom-4 right-5 relative group-hover:text-[#f7f6f1]">
              100 GÜN
              <br />
              <span className="text-3xl font-light">100 SORU</span>
            </h2>
          </div>
        </section>
        <section
          ref={ref1}
          key={"comp"}
          className="w-full h-screen relative flex flex-col items-start justify-start  border-red-600 lg:items-end"
          style={{
            opacity: chatShow ? 0 : 1,
            transition: "opacity .5s ease-in-out",
          }}
        >
          <span
            className={`lg:text-right lg:right-24 xl:right-48 2xl:right-96 lg:mt-48 lg:left-auto text-base md:text-xl lg:text-xl font-bold italic text-left  text-[#0d0d0d] relative top-0 mt-8 left-8 md:left-16 flex transition-opacity ease-in duration-500 delay-200 ${
              isVisible1 ? "opacity-30" : "opacity-0"
            }`}
          >
            denemeler
          </span>
          <h2
            className={`lg:text-right lg:right-24 xl:right-48 2xl:right-96 lg:left-auto text-4xl md:text-6xl lg:text-6xl font-bold italic text-left text-[#0d0d0d] relative top-0 mt-2 left-8 md:left-16 drop-shadow-[0_2px_10px_rgba(255,255,255)] flex h-fit w-fit transition-opacity delay-300 ease-in duration-500 ${
              isVisible1 ? "opacity-100" : "opacity-0"
            }`}
          >
            DENEME
            <br />
            ZİNCİRİ
          </h2> 
          <h3
            className={`lg:text-right lg:right-24 xl:right-48 2xl:right-96 lg:left-auto text-lg md:text-2xl lg:text-2xl font-light italic text-left top-0 mt-4 text-[#0d0d0d] relative left-8 md:left-16 flex h-fit w-fit transition-opacity ease-in duration-500 delay-500 ${
              isVisible1 ? "opacity-100" : "opacity-0"
            }`}
          >
            Rakiplerinizle sınavdan önce <br />
            mücadele etme fırsatı <br />
            edinin.
          </h3>
          <div className="absolute w-auto h-3/4 bottom-0 -left-20 -z-10 lg:-left-8 xl:-left-12 2xl:left-48">
            <Image
              src="/competition.webp"
              alt="lolol"
              width={3000}
              height={1800}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <section
          ref={ref2}
          key={"game"}
          className="w-full h-screen relative flex flex-col items-start justify-start  border-red-600  lg:items-start"
          style={{
            opacity: chatShow ? 0 : 1,
            transition: "opacity .5s ease-in-out",
          }}
        >
          <span
            className={`lg:left-24 xl:left-48 2xl:left-96 lg:mt-48  text-base md:text-xl lg:text-xl font-bold italic text-left  text-[#0d0d0d] relative top-0 mt-8 left-8 md:left-16 flex transition-opacity ease-in duration-500 delay-200 ${
              isVisible2 ? "opacity-30" : "opacity-0"
            }`}
          >
            koçluk
          </span>
          <h2
            className={`lg:left-24 xl:left-48 2xl:left-96 text-4xl md:text-6xl lg:text-6xl font-bold italic text-left text-[#0d0d0d] relative top-0 mt-2 left-8 md:left-16 drop-shadow-[0_2px_10px_rgba(255,255,255)] flex h-fit w-fit transition-opacity delay-300 ease-in duration-500 ${
              isVisible2 ? "opacity-100" : "opacity-0"
            }`}
          >
            EŞ-KOÇLUK
            <br />
            SİSTEMİ
          </h2>
          <h3
            className={`lg:left-24 xl:left-48 2xl:left-96 text-lg md:text-2xl lg:text-2xl font-light italic text-left top-0 mt-4 text-[#0d0d0d] relative left-8 md:left-16 flex h-fit w-fit transition-opacity ease-in duration-500 delay-500 ${
              isVisible2 ? "opacity-100" : "opacity-0"
            }`}
          >
            Sınava sizinle aynı ilerlemeye <br />
            sahip insanlarla <br />
            hazırlanın.
          </h3>
          <div className="absolute w-auto h-3/4 bottom-0 -left-36 -z-10 lg:-right-8 xl:right-12 2xl:right-64 lg:left-auto">
            <Image
              src="/game.webp"
              alt="lolol"
              width={3000}
              height={1800}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <section
          ref={ref3}
          key={"deneme"}
          className="w-full h-screen relative flex flex-col items-start justify-start  border-red-600  lg:items-end"
          style={{
            opacity: chatShow ? 0 : 1,
            transition: "opacity .5s ease-in-out",
          }}
        >
          <span
            className={`lg:text-right lg:right-24 xl:right-48 2xl:right-96 lg:mt-48 lg:left-auto md:text-xl lg:text-xl text-base font-bold italic text-left  text-[#0d0d0d] relative top-0 mt-8 left-8 md:left-16 flex transition-opacity ease-in duration-500 delay-200 ${
              isVisible3 ? "opacity-30" : "opacity-0"
            }`}
          >
            takvim
          </span>
          <h2
            className={`lg:text-right lg:right-24 xl:right-48 2xl:right-96 lg:left-auto text-4xl md:text-6xl lg:text-6xl font-bold italic text-left text-[#0d0d0d] relative top-0 mt-2 left-8 md:left-16 drop-shadow-[0_2px_10px_rgba(255,255,255)] flex h-fit w-fit transition-opacity delay-300 ease-in duration-500 ${
              isVisible3 ? "opacity-100" : "opacity-0"
            }`}
          >
            BİREYSEL
            <br />
            TAKVİM
          </h2>
          <h3
            className={`lg:text-right lg:right-24 xl:right-48 2xl:right-96 lg:left-auto text-lg md:text-2xl lg:text-2xl font-light italic text-left top-0 mt-4 text-[#0d0d0d] relative left-8 md:left-16 flex h-fit w-fit transition-opacity ease-in duration-500 delay-500 ${
              isVisible3 ? "opacity-100" : "opacity-0"
            }`}
          >
            Her ihtiyacınızı görecek takvim
            <br />
            uygulamasıyla hayatınızı
            <br />
            düzenleyin.
          </h3>
          <div className="absolute w-auto h-3/4 bottom-0 -right-24 -z-10 lg:-left-12 xl:left-24 2xl:left-64 lg:right-auto">
            <Image
              src="/deneme.webp"
              alt="lolol"
              width={3000}
              height={1800}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <section
          ref={ref5}
          key={"horizontal"}
          className="w-full h-fit relative flex flex-col  items-stretch justify-start bg-[#0d0d0d] pb-24 mt-24 lg:pb-48"
          style={{
            opacity: chatShow ? 0 : 1,
            transition: "opacity .5s ease-in-out",
          }}
        >
          <BumerangWrapper invert={true} />
          {/* <span className="font-bold text-xl absolute top-6 left-6 rotate-45 lg:text-3xl lg:left-12 lg:top-12">
            +
          </span>
          <span className="font-bold text-xl absolute top-6 right-6 rotate-45 lg:text-3xl lg:right-12 lg:top-12">
            +
          </span>
          <span className="font-bold text-xl absolute bottom-6 left-6 rotate-45 lg:text-3xl lg:left-12 lg:bottom-12">
            +
          </span>
          <span className="font-bold text-xl absolute bottom-6 right-6 rotate-45 lg:text-3xl lg:right-12 lg:bottom-12">
            +
          </span> */}
          <h2
            className={`lg:text-6xl text-2xl font-bold italic text-center text-[#f7f6f1] relative top-0 mt-24 mx-auto flex h-fit w-fit transition-opacity delay-300 ease-in duration-500 mb-16  ${
              isVisible5 ? "opacity-100" : "opacity-0"
            }`}
          >
            ÇALIŞMA
            <br />
            FELSEFEMİZİ
            <br />
            KEŞFEDİN
          </h2>
          <div className="flex flex-col lg:flex-row lg:justify-evenly">
            <SideOzellik
              title={"TAKVİM"}
              image={"/takvim.png"}
              position={"right"}
            >
              “Hayatı <span className="font-bold">sıkışık </span>değil
              <br /> <span className="font-bold">seri</span> yaşa”
            </SideOzellik>
            <SideOzellik title={"KÜRSÜ"} image={"/kursu.png"} position={"left"}>
              “<span className="font-bold">Tabanı </span>taşı
              <br /> <span className="font-bold">tavana</span> sınır koyma”
            </SideOzellik>

            <SideOzellik
              title={"PATİKA"}
              image={"/patika.png"}
              position={"right"}
            >
              “<span className="font-bold">Zekana </span>değil
              <br /> <span className="font-bold">çabana</span> güven”
            </SideOzellik>
          </div>
        </section>
        <section
          ref={ref6}
          key={"SSS"}
          className="w-full h-fit relative flex flex-col items-center justify-start text-[#0d0d0d] pb-24 lg:pb-48"
          style={{
            opacity: chatShow ? 0 : 1,
            transition: "opacity .5s ease-in-out",
          }}
        >
          <BumerangWrapper invert={false} />
          <h2
            className={`lg:text-6xl text-4xl font-bold italic text-center relative top-0 mt-24 mx-auto flex h-fit w-fit transition-opacity delay-300 ease-in duration-500 mb-16 `}
          >
            SSS
          </h2>

          <div className="w-full flex flex-col items-center">
            {faqData.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </section>

        <section
          ref={ref7}
          id="erken"
          key={"pricing"}
          className="w-full h-fit relative flex items-center justify-center text-[#0d0d0d] bg-[#0d0d0d] overflow-hidden"
          style={{
            opacity: chatShow ? 0 : 1,
            transition: "opacity .5s ease-in-out",
          }}
        >
          <Map />
        </section>

        <section
          ref={ref7}
          id="erken"
          key={"pricing"}
          className="w-full h-fit relative flex flex-col items-center justify-start text-[#0d0d0d] py-24 lg:flex-row lg:justify-center"
          style={{
            opacity: chatShow ? 0 : 1,
            transition: "opacity .5s ease-in-out",
          }}
        >
          <BumerangBelt invert={true} id={2} drc={"left"} />
          <div className="w-full lg:w-1/3 h-fit flex flex-col justify-start items-center">
            <div className="w-full lg:w-5/6 relative h-fit flex">
              <h3 className="text-base px-16 py-4 left-8 lg:left-0 flex relative font-light italic text-center text-[#0d0d0d] border border-black rounded-lg">
                TEMEL PAKET
              </h3>
            </div>
            {/* <div className="w-full relative h-fit flex justify-between space-x-3 px-8">
            <h3 className="py-4 w-full px-8 flex justify-center relative font-light text-base italic text-center text-[#0d0d0d] border border-black rounded-lg">
              YILLIK
            </h3>
            <h3 className="py-4 w-full px-8 flex justify-center relative font-bold text-base italic text-center text-[#f7f6f1] border border-[#f7f6f1] rounded-lg bg-[#0d0d0d]">
              ÜYE OL
            </h3>
          </div> */}
            <div className="w-5/6 relative h-72 flex flex-col items-center text-[#0d0d0d] border border-black my-4 rounded-lg">
              <div className="w-full relative top-0 flex items-center flex-col">
                <h3 className="w-5/6 text-4xl mt-8 flex relative font-bold italic text-left">
                  STANDART
                  <br />
                  ÜYELİK
                </h3>
                <h4 className="w-5/6 text-base mt-2 flex relative font-light italic text-left">
                  Erken erişim <br />
                  fiyatlarımızdan <br />
                  yararlanın.
                </h4>
              </div>
              <div className="w-full absolute bottom-0 flex items-center flex-col">
                <h3 className="w-5/6 text-base flex relative font-extralight text-right justify-end">
                  20% <br />
                  indirim
                </h3>
                <h4 className="w-5/6 text-5xl mt-2 flex relative font-bold text-right items-end justify-end mb-8">
                  999<span className="font-light text-2xl">₺</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 h-fit flex flex-col justify-start items-center">
            <div className="w-full lg:w-5/6 relative h-fit flex">
              <h3 className="text-base px-16 py-4 left-8 flex  lg:left-0 relative font-light italic text-center text-[#f7f6f1] border border-[#f7f6f1] rounded-lg bg-[#0d0d0d]">
                İLERİ PAKET
              </h3>
            </div>
            <div className="w-5/6 relative h-72 flex flex-col items-center text-[#f7f6f1] border border-[#f7f6f1] my-4 rounded-lg bg-[#0d0d0d]">
              <div className="w-full relative top-0 flex items-center flex-col">
                <h3 className="w-5/6 text-4xl mt-8 flex relative font-bold italic text-left">
                  GELİŞTİRİLMİŞ <br />
                  ÜYELİK
                </h3>
                <h4 className="w-5/6 text-base mt-2 flex relative font-light italic text-left">
                  Tek çekim <br />
                  fırsatından <br />
                  yararlanın.
                </h4>
              </div>
              <div className="w-full h-auto absolute bottom-0 flex items-center flex-col">
                <h3 className="w-5/6 text-base flex relative font-extralight text-right justify-end">
                  20% <br />
                  indirim
                </h3>
                <h4 className="w-5/6 text-5xl mt-2 flex relative font-bold text-right items-end justify-end mb-8">
                  2999<span className="font-light text-2xl">₺</span>
                </h4>
              </div>
            </div>
          </div>
        </section>
        <footer className="w-full flex justify-center bg-[#0d0d0d] text-white py-4 text-center">
          &copy; {new Date().getFullYear()} BUMERANG STARTDOWN.
          <br />
          Bütün hakları saklıdır.
        </footer>
      </div>
    </main>
  );
}

{
  /* <div className="w-full lg:w-1/3 h-fit flex flex-col justify-start items-center">
            <div className="w-full lg:w-5/6 relative h-fit flex">
              <h3 className="text-base px-16 py-4 left-8 flex  lg:left-0 relative font-light italic text-center text-[#f7f6f1] border border-[#f7f6f1] rounded-lg bg-[#0d0d0d]">
                YILLIK
              </h3>
            </div>
            <div className="w-5/6 relative h-72 flex flex-col items-center text-[#f7f6f1] border border-[#f7f6f1] my-4 rounded-lg bg-[#0d0d0d]">
              <div className="w-full relative top-0 flex items-center flex-col">
                <h3 className="w-5/6 text-4xl mt-8 flex relative font-bold italic text-left">
                  YILLIK <br />
                  ÜYELİK
                </h3>
                <h4 className="w-5/6 text-base mt-2 flex relative font-light italic text-left">
                  Tek çekim <br />
                  fırsatından <br />
                  yararlanın.
                </h4>
              </div>
              <div className="w-full h-auto absolute bottom-0 flex items-center flex-col">
                <h3 className="w-5/6 text-base flex relative font-extralight text-right justify-end">
                  50% <br />
                  indirim
                </h3>
                <h4 className="w-5/6 text-5xl mt-2 flex relative font-bold text-right items-end justify-end mb-8">
                  3000<span className="font-light text-2xl">₺</span>
                </h4>
              </div>
            </div>
          </div> */
}
