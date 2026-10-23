import { ServiceItem, ProjectItem, TranslationDict } from './types';

export const TRANSLATIONS: Record<'EN' | 'VI', TranslationDict> = {
  EN: {
    navbar: {
      about: "About",
      price: "Skills",
      projects: "Showcase",
      contact: "Inquiry",
    },
    hero: {
      heading: "Hi, i'm Nam",
      subtitle: "an IT hardware specialist & full-stack developer crafting high-performance systems and solid code",
    },
    about: {
      title: "About me",
      paragraph: "With over five years of multi-disciplinary experience in IT infrastructure and software engineering, I specialize in server orchestration, custom motherboard/workstation topologies, network engineering, and premium full-stack development. I enjoy designing architectures that handle extensive load while operating with pristine reliability. Let's engineer something outstanding!",
    },
    services: {
      title: "Capabilities",
    },
    projects: {
      title: "Projects",
    },
    buttons: {
      contact: "Contact Me",
      liveProject: "Launch Project",
    },
  },
  VI: {
    navbar: {
      about: "Giới thiệu",
      price: "Kỹ năng",
      projects: "Dự án",
      contact: "Liên hệ",
    },
    hero: {
      heading: "Hi, i'm Nam",
      subtitle: "chuyên gia phần cứng IT & nhà phát triển full-stack tạo nên hệ thống tối ưu và mã nguồn vững chắc",
    },
    about: {
      title: "Về tôi",
      paragraph: "Với hơn năm năm kinh nghiệm thực chiến trong hạ tầng IT và kỹ thuật phần mềm, tôi tự tin về tối ưu hóa máy chủ, cấu trúc phần cứng/máy trạm tùy biến, lắp đặt mạng doanh nghiệp và lập trình web full-stack. Tôi luôn hướng tới việc kiến tạo hệ thống chịu tải cao vận hành bền bỉ. Hãy cùng xây dựng điều đột phá!",
    },
    services: {
      title: "Thế mạnh",
    },
    projects: {
      title: "Đã triển khai",
    },
    buttons: {
      contact: "Liên hệ ngay",
      liveProject: "Xem chi tiết",
    },
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: "01",
    name: {
      EN: "Hardware Infrastructure",
      VI: "Hạ tầng & Thiết bị",
    },
    description: {
      EN: "Custorm server, in-depth performance testing, workstation assembly and deployment, and optimized hardware component upgrades for the system.",
      VI: "Thiết lập hệ thống máy chủ, đo kiểm hiệu năng chuyên sâu, lắp ráp triển khai máy trạm và nâng cấp linh kiện phần cứng tối ưu cho cho hệ thống",
    },
  },
  {
    id: "02",
    name: {
      EN: "Full-Stack Development",
      VI: "Lập trình Web Full-Stack",
    },
    description: {
      EN: "Engineering fast, modern React/TypeScript single page applications and responsive backends powered by Express, Node.js, and durable secure databases.",
      VI: "Xây dựng các sản phẩm Web hiện đại bằng React/TypeScript tốc độ cao cùng hệ thống backend mạnh mẽ sử dụng Express, Node.js và quản trị cơ sở dữ liệu an toàn.",
    },
  },
  {
    id: "03",
    name: {
      EN: "DevOps & virtualization",
      VI: "SysAdmin & DevOps",
    },
    description: {
      EN: "Container provisioning using Docker, automation of recurring developer workflows, CI/CD integrations, Linux system auditing, and secure terminal automation.",
      VI: "Đóng gói ứng dụng qua Docker, tự động hóa quy trình phát triển, tích hợp CI/CD, kiểm thử bảo mật nhân Linux và quản trị máy chủ qua giao diện dòng lệnh.",
    },
  },
  {
    id: "04",
    name: {
      EN: "Network Architecture",
      VI: "Giải pháp Mạng & Định tuyến",
    },
    description: {
      EN: "Designing custom network topologies, intelligent routing systems, firewall policy orchestration, and high-load communication stability.",
      VI: "Thiết kế sơ đồ mạng nội bộ, cấu hình định tuyến thông minh, quy chuẩn chính sách tường lửa bảo mật hệ thống và duy trì đường truyền tải trọng cao.",
    },
  },
  {
    id: "05",
    name: {
      EN: "Installed, deployed, and configured software applications for end-users",
      VI: "Cài đặt, triển khai, hướng dẫn sử dụng phần mềm cho người dùng cuối",
    },
    description: {
      EN: "Conducted training sessions and created user manuals to ensure smooth software adoption..",
      VI: "Hỗ trợ cài đặt, hướng dẫn triển khai và sử dụng các phần mềm cho người dùng nắm rõ qui trình.",
    },
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "01",
    name: "Website NodeJS",
    category: {
      EN: "Website Music",
      VI: "Webstie nghe nhạc trực tuyến",
    },
    col1Image1: "https://i.postimg.cc/28PzVnxy/Kham-pha.png",
    col1Image2: "https://i.postimg.cc/DzTYNz7R/room.png",
    col2Image: "https://i.postimg.cc/PrLXXSY4/Screenshot-2026-06-10-110958.png",
    link: "https://melody-ehdi.onrender.com/",
  },
  {
    id: "02",
    name: "Full stack web travel",
    category: {
      EN: "Website Travel",
      VI: "Website du lịch",
    },
    col1Image1: "https://i.postimg.cc/Rhqy4b6r/Screenshot-2026-06-10-130358.png",
    col1Image2: "https://i.postimg.cc/MZ4r15fM/Screenshot-2026-06-10-130657.png",
    col2Image: "https://i.postimg.cc/ZRPK6nVy/Screenshot-2026-06-10-130018.png",
    link: "https://remix-website-du-l-ch-t-tour-tr-c-tuy-n-1021144332335.us-west1.run.app/",
  },
  {
    id: "03",
    name: "Caculator simulator",
    category: {
      EN: "Solve Math",
      VI: "Giải toán",
    },
    col1Image1: "https://i.postimg.cc/0NsmYyJL/image.png",
    col1Image2: "https://i.postimg.cc/TYKrGS6z/image.png",
    col2Image: "https://i.postimg.cc/QdPYh5w9/image.png",
    link: "https://ais-dev-3ovjj4v7x2vnbgpfgtvxg4-501835782994.asia-east1.run.app",
  },
];

export const MARQUEE_IMAGES: string[] = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
];
