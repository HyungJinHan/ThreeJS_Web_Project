import {
  backend,
  creator,
  mobile,
  web,
  css,
  figma,
  git,
  html,
  javascript,
  nodejs,
  reactjs,
  tailwind,
  typescript,
  threejs,
  notion,
  python,
  next,
  firebase,
  mysql,
  electron,
  airbnb,
  chatGpt,
  crowdFunding,
  deliveryBee,
  firebaseChat,
  moogle,
  soloFitness,
  aiSchool,
  chosun,
  drone,
  ai900,
  kais,
  kiitBg,
  ts,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Electron",
    icon: electron,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "Notion",
  //   icon: notion,
  // },
];

// 경력
const experiences = [
  {
    title: "1종 보통운전면허 취득",
    company_name: "한국교통안전공단",
    icon: ts,
    iconBg: "#383E56",
    date: "2015.01",
    points: ["1종 보통운전면허 취득"],
  },
  {
    title: "초경량비행장치 지도조종자 취득",
    company_name: "한국교통안전공단",
    icon: ts,
    iconBg: "#E6DEDD",
    date: "2019.08",
    points: ["농업용 대형 드론 교관 자격증 취득"],
  },
  {
    title: "학사과정 졸업",
    company_name: "조선대학교",
    icon: chosun,
    iconBg: "#383E56",
    date: "2015.03 - 2021.02",
    points: ["글로벌 인문대학 일본어과 졸업"],
  },
  {
    title: "교육 교관 / 정비",
    company_name: "청년항공",
    icon: drone,
    iconBg: "#E6DEDD",
    date: "2020.03 - 2022.01 (총 1년 11개월)",
    points: [
      "자격증 반 교육 교관으로 활동",
      "드론 조립 및 센서 조정 등의 드론 정비 및 개발",
      "초, 고등학교 드론 방과후 강사로써 활동",
      "3D 모델링 및 3D 프린터를 통한 회사 자체 굿즈를 제작",
      "유튜브 콘텐츠 기획 및 제작 보조, 검토를 총괄",
    ],
  },
  {
    title: "학술대회 논문 제출 / 구두 발표",
    company_name: "한국정보시스템학회",
    icon: kais,
    iconBg: "#383E56",
    date: "2022.10",
    points: [
      "학술대회 장소 - 목포해양대학교 (발표자 : 한형진)",
      "저자 - 한형진, 김건, 김성환, 전우진, 문경현, 황기성",
      "1차 프로젝트 발표회 후, 우수 프로젝트로 선정되어 논문 작성, 제출 및 학술대회에 참여",
      '1차 프로젝트로 진행하게 된 "배달료 절감을 위한 그룹화 배달 서비스 연구 및 플랫폼 개발"을 주제로 논문을 작성',
      "논문 채택을 통한 학술대회에서 구두 발표를 진행",
    ],
  },
  {
    title: "Azure AI Fundamentals (AI-900) 취득",
    company_name: "Microsoft",
    icon: ai900,
    iconBg: "#E6DEDD",
    date: "2022.11",
    points: [
      "AI 워크로드 및 고려사항에 대한 공부를 통해 자격증을 취득",
      "머신러닝의 기본 원리에 대한 이해",
      "AI 모델 중 Computer Vision의 특징에 대한 개념을 정리",
      "자연어 처리의 특징에 대한 이해",
      "대화형 AI 워크로드에 대한 연구, 공부",
    ],
  },
  {
    title: "학술대회 논문 제출 / 구두 발표",
    company_name: "한국정보기술학회",
    icon: kiitBg,
    iconBg: "#383E56",
    date: "2022.12",
    points: [
      "학술대회 장소 - 제주 메종 글래드 호텔 (발표자 : 한형진)",
      "저자 - 한형진, 김건, 김성환, 전우진, 문경현, 황기성",
      "1차 프로젝트 발표회 후, 우수 프로젝트로 선정되어 논문 작성, 제출 및 학술대회에 참여",
      '1차 프로젝트로 진행하게 된 "배달료 절감을 위한 그룹화 배달 서비스 구축에 관한 연구"을 주제로 논문을 작성',
      "논문 채택을 통한 학술대회에서 구두 발표를 진행",
    ],
  },
  {
    title: "AI 서비스 트랙 교육 과정 수료",
    company_name: "인공지능사관학교",
    icon: aiSchool,
    iconBg: "#E6DEDD",
    date: "2022.06 - 2022.12 (총 6개월 / 1,300시간)",
    points: [
      "JavaScript와 Python을 기반으로 하는 AI 서비스 과정을 수료",
      "JavaScript 기반의 React를 활용한 프론트엔드 개발을 진행, 유저 친화적인 인터페이스 설계 공부 및 웹 표준을 준수한 코드를 설계하고 연구",
      "Node JS와 MySQL을 통한 백엔드 구축 및 Rest API 방식의 데이터 통신에 대해 이해",
      "1차, 최종 핵심 역량 프로젝트와 프로젝트 기획 부분 아이디어 해커톤 대회 최우수상 수상 및 토이 프로젝트 우수상을 수상",
      "Python의 다양한 패키지를 통한 AI 모델링의 원리 이해 및 AI 모델을 활용한 프로젝트 개발을 통한 교육을 진행",
      "기업 연계형 프로젝트 진행을 통한 현업 중심의 개발 방식을 습득",
    ],
  },
];

// 평가
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// 프로젝트
const projects = [
  {
    name: "AI Trainer 나 혼자 피트니스",
    description:
      "AI 기술인 OpenCV와 MediaPip`를 활용한 실시간 자세 측정 피트니스 서비스입니다. 직접 피트니스 센터를 방문하여 대면 운동을 하는 것이 아닌, 집에서 즐길 수 있는 홈 트레이닝 서비스로, 원하는 개수를 지정해서 운동을 시작하면 자세를 실시간으로 측정하여 정확한 자세로 운동을 할 시, 개수가 올라가도록 구현했습니다. 추가적으로 챌린지 시스템을 도입하여, 정해진 시간 내에 얼마나 정확한 자세로 많은 운동을 했는지를 랭킹으로 경쟁할 수 있습니다. 또한 서비스를 이용하는 유저 외에 피트니스 센터에 가입한 회원들을 관리할 수 있는 센터 컨텐츠 관리와 간단한 회원 관리를 추가했습니다.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
      {
        name: "Node JS",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "Kakaomap",
        color: "pink-text-gradient",
      },
      {
        name: "MediaPipe",
        color: "pink-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
      {
        name: "NumPy",
        color: "pink-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
      {
        name: "Yolov5",
        color: "pink-text-gradient",
      },
      {
        name: "Yolov5",
        color: "pink-text-gradient",
      },
      {
        name: "Jupyter Notebook",
        color: "pink-text-gradient",
      },
      {
        name: "VS Code",
        color: "pink-text-gradient",
      },
      {
        name: "Pycharm",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL Workbench",
        color: "pink-text-gradient",
      },
      {
        name: "Google Colab",
        color: "pink-text-gradient",
      },
      {
        name: "GitHub",
        color: "pink-text-gradient",
      },
    ],
    image: soloFitness,
    source_code_link:
      "https://github.com/HyungJinHan/AI_trainer_SoloFitness_Project",
    detail_link:
      "https://www.notion.so/hyungjinhan/AI-Trainer-96c4781a92c449269a4b9aed45110ec3",
  },
  {
    name: "ChatGPT Messenger",
    description:
      "현재 서비스를 진행 중인 `Chat GPT` 사이트를 클론하여 만든 프로젝트입니다. Open AI의 API를 사용하여 실제 AI를 통한 답변을 받을 수 있습니다. PC 뿐만이 아닌 반응형 스타일링을 통해 패드와 모바일 환경에도 적합할 수 있도록 화면을 설계했으며, 다양한 AI 모델을 선택해서 다양한 답변을 들을 수 있도록 구현했습니다. 또한 간편하게 회원가입 및 로그인이 가능하도록 Gmail을 통해 가입이 가능하며, Firebase 사용을 통해 자신이 어떠한 채팅을 했는지 내역을 확인할 수 있습니다.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Next JS",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "Vercel",
        color: "blue-text-gradient",
      },
      {
        name: "Google Cloud",
        color: "pink-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "blue-text-gradient",
      },
      {
        name: "VS Code",
        color: "green-text-gradient",
      },
      {
        name: "GitHub",
        color: "pink-text-gradient",
      },
    ],
    image: chatGpt,
    source_code_link: "https://github.com/HyungJinHan/ChatGPT_Messenger",
    detail_link:
      "https://www.notion.so/hyungjinhan/ChatGPT-Messenger-64cdb067fad74f62b2465c7924a7cc4e",
  },
  {
    name: "그룹화 배달 서비스 배달BEE",
    description:
      "높아지는 물가와 인건비로 인해 상승하는 배달 수수료를 절감하고자 함께 모여 배달을 시킬 수 있는 플랫폼 서비스입니다. 자신의 지역 내의 배달을 원하는 가게를 선택하고, 그룹을 만들어 한 번에 여러 음식을 배달시켜 배달 수수료를 절감하고 효율적인 배달 시장을 도모하고자 개발했습니다. 해당 그룹에 참여하여 배달할 음식을 선 결제를 하고, 참여 댓글을 남겨 인원 수 대비 배달 수수료를 절감할 수 있도록 구현하였고, 테스트용이지만 결제 기능을 추가하였습니다. 또한 서비스를 이용하는 유저 외에 플랫폼에 등록을 원하는 업주 페이지도 개발하여 적용시키게 되었습니다.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
      {
        name: "Node JS",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Kakaomap",
        color: "pink-text-gradient",
      },
      {
        name: "Kakaopay",
        color: "blue-text-gradient",
      },
      {
        name: "VS Code",
        color: "green-text-gradient",
      },
      {
        name: "MySQL Workbench",
        color: "pink-text-gradient",
      },
      {
        name: "GitHub",
        color: "blue-text-gradient",
      },
    ],
    image: deliveryBee,
    source_code_link: "https://github.com/HyungJinHan/DeliveryBee_Project",
    detail_link:
      "https://www.notion.so/hyungjinhan/BEE-3cb0ec9c54504933b14de75f9945a372",
  },
  {
    name: "thiredweb Crowdfunding 사이트",
    description:
      "이번 프로젝트는 실제 이더리움을 통한 개발 서버의 테스트 네트워크를 통해 GoerliETH를 사용하여 캠페인을 생성하고, 해당 캠페인을 진행하기 위해 후원을 받을 수 있는 사이트입니다. 현재 다양한 Crowdfunding 사이트에 아이디어를 착안하여, 자신이 진행하고자 하는 캠페인을 암호화폐로 후원받을 수 있습니다. 로그인 및 암호화폐 지갑 연동 등, 후원과 캠페인 생성을 위해 필요로 하는 정보는 MetaMask를 통해 진행되며, GOERLI FAUCET 사이트를 통해 해당 사이트에서 지원되는 화폐를 받아 서비스를 이용해보실 수 있습니다. 해당 프로젝트의 서비스를 이용하는 동안 실제 화폐는 사용되지 않습니다!",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
      {
        name: "thirdweb",
        color: "blue-text-gradient",
      },
      {
        name: "Vercel",
        color: "green-text-gradient",
      },
      {
        name: "Ethereum",
        color: "pink-text-gradient",
      },
      {
        name: "MetaMask",
        color: "blue-text-gradient",
      },
      {
        name: "VS Code",
        color: "blue-text-gradient",
      },
      {
        name: "GitHub",
        color: "blue-text-gradient",
      },
    ],
    image: crowdFunding,
    source_code_link:
      "https://github.com/HyungJinHan/Web3_Crowdfunding_Project",
    detail_link:
      "https://www.notion.so/hyungjinhan/thiredweb-Crowdfunding-dccab699ae0f4e35a5195ec282ca1d60",
  },
  {
    name: "Firebase 채팅 어플리케이션",
    description:
      "간단하게 유저들끼리 채팅을 할 수 있는 채팅 어플리케이션입니다. 간단한 회원가입을 통해 채팅 서비스를 이용할 수 있으며, 가입한 유저와의 개인 채팅이 가능하며, 동일한 관심사를 갖고 있는 유저들끼리 채팅할 수 있는 오픈 채팅방을 생성 및 참여하여 채팅을 즐길 수 있는 어플리케이션입니다. 또한 실제로 가입한 유저들이 언제 가입했는지 간단하게 확인할 수 있는 화면을 구성했습니다. 웹 어플리케이션이 아닌, 실제로 빌드 작업이 진행되어 각 데스크탑에 exe 파일을 설치하여 이용할 수 있는 채팅 앱입니다.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Next JS",
        color: "pink-text-gradient",
      },
      {
        name: "Styled Components",
        color: "pink-text-gradient",
      },
      {
        name: "Electron",
        color: "pink-text-gradient",
      },
      {
        name: "Ant Design",
        color: "pink-text-gradient",
      },
      {
        name: "Node JS",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "VS Code",
        color: "green-text-gradient",
      },
      {
        name: "MySQL Workbench",
        color: "pink-text-gradient",
      },
      {
        name: "GitHub",
        color: "blue-text-gradient",
      },
    ],
    image: firebaseChat,
    source_code_link: "https://github.com/HyungJinHan/firebase_chat_site",
    detail_link:
      "https://www.notion.so/hyungjinhan/Firebase-081db98431114e13b7f5d61bd77038d3",
  },
  {
    name: "Airbnb Clone Site",
    description:
      "현재 서비스를 진행 중인 Airbnb 사이트를 클론하여 만든 프로젝트입니다. Mapbox와 DatePicker 등, 다양한 오픈소스들을 사용하여 실제 실제 서비스 중인 Airbnb와 최대한 유사하게 제작하였습니다. PC 뿐만이 아닌 반응형 스타일링을 통해 패드와 모바일 환경에도 적합할 수 있도록 화면을 설계했으며, 화면에 많은 비중을 차지하는 Mapbox의 경우 큰 PC 화면에서만 보이도록 작업했습니다. 현재로써는 데이터 베이스를 사용하지 않은 간단한 프로젝트로 구현하게 되었지만, 추후에 많은 숙소 위치 등을 공개된 데이터를 통해 정보를 불러와 작업을 진행할 예정입니다!",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Next JS",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Node JS",
        color: "blue-text-gradient",
      },

      {
        name: "Vercel",
        color: "pink-text-gradient",
      },
      {
        name: "Mapbox",
        color: "blue-text-gradient",
      },
      {
        name: "VS Code",
        color: "green-text-gradient",
      },
      {
        name: "GitHub",
        color: "blue-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://github.com/HyungJinHan/Airbnb_Clone_Project",
    detail_link:
      "https://www.notion.so/hyungjinhan/Airbnb-Clone-Site-c4392ee163e94f53af3d58ecff57996c",
  },
  {
    name: "영화 검색 사이트 Moggle",
    description:
      "네이버 검색 API를 활용하여 간단한 토이 프로젝트로 제작한 영화 검색 사이트입니다. 다양한 영화 속 자신이 원하는 영화를 찾을 수 있도록 국가, 장르 등 다양한 선택지를 제공하여 영화를 검색할 수 있게 제작했습니다. 또한 구글을 레퍼런스로 하여 구글 검색과 비슷한 느낌으로 UI를 설계했습니다.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
      {
        name: "Node JS",
        color: "blue-text-gradient",
      },
      {
        name: "Naver API",
        color: "green-text-gradient",
      },
      {
        name: "VS Code",
        color: "green-text-gradient",
      },
      {
        name: "GitHub",
        color: "blue-text-gradient",
      },
    ],
    image: moogle,
    source_code_link: "https://github.com/HyungJinHan/OpenAPI_Toy_Project",
    detail_link:
      "https://www.notion.so/hyungjinhan/Moggle-4ecea3f30dbe431b8d688afcc12b1f8b",
  },
];

export { services, technologies, experiences, testimonials, projects };
