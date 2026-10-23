import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, ProjectItem } from '../types';
import { X, Send, Copy, Check, ExternalLink, Mail, MessageSquare, Briefcase, Award, User, GraduationCap, Calendar, MapPin, Code, Server, Network } from 'lucide-react';

interface PopupsProps {
  language: Language;
  showContact: boolean;
  initialTab?: 'profile' | 'contact';
  onCloseContact: () => void;
  activeProject: ProjectItem | null;
  onCloseProject: () => void;
}

const LOCALIZATION = {
  EN: {
    contactTitle: "Let's innovate together",
    contactSubtitle: "Tell me about your technical goals and let's build robust systems & solid code.",
    labelName: "Your Name",
    labelEmail: "Email Address",
    labelService: "Project Category",
    labelMessage: "Project Concept / Hardware - Software Requirement",
    submitButton: "Send Inquiry",
    sending: "Transmitting package...",
    thanksTitle: "Message Delivered!",
    thanksMessage: "Thank you for reaching out, Nam will review your requirements and respond within 24 hours.",
    copyEmail: "Copy email address",
    copied: "Copied!",
    close: "Close",
    liveTitle: "System Blueprint",
    liveSubtitle: "You are attempting to access the live architecture for:",
    liveWarn: "Since this is simulated in our high-end portfolio workspace, you can explore the design elements below or connect with Nam to request standard custom sandbox trials or repository source code access.",
    actionVisit: "Open Demo",
    actionDirect: "Request System Assets",
    formValidation: "Please fill in all details before transmitting."
  },
  VI: {
    contactTitle: "Hợp Tác Công Nghệ",
    contactSubtitle: "Hãy chia sẻ bài toán kỹ thuật của bạn để cùng xây dựng hạ tầng tối ưu và mã nguồn vững chắc.",
    labelName: "Họ và Tên",
    labelEmail: "Địa chỉ Email",
    labelService: "Hạng mục Dự án",
    labelMessage: "Yêu cầu kỹ thuật / Ý tưởng dự án",
    submitButton: "Gửi Yêu Cầu",
    sending: "Đang truyền tải dữ liệu...",
    thanksTitle: "Gửi Thành Công!",
    thanksMessage: "Cảm ơn bạn đã liên hệ, Nam sẽ xem xét yêu cầu kỹ thuật và phản hồi trong vòng 24 giờ tới.",
    copyEmail: "Sao chép địa chỉ email",
    copied: "Đã sao chép!",
    close: "Đóng",
    liveTitle: "Hồ Sơ Hệ Thống",
    liveSubtitle: "Bạn đang chuẩn bị tham quan mô hình công nghệ của:",
    liveWarn: "Vì đây là một sản phẩm thuộc không gian hồ sơ năng lực cao cấp, bạn có thể tham khảo các sơ đồ công nghệ hoặc nhắn tin trao đổi trực tiếp với Nam để trải nghiệm hoặc nhận mã nguồn.",
    actionVisit: "Xem Demo ",
    actionDirect: "Yêu Cầu Tệp Sơ Đồ",
    formValidation: "Vui lòng nhập đầy đủ chi tiết trước khi gửi."
  }
};

const RESUME_LOCALIZATION = {
  EN: {
    tabProfile: "About & Resume",
    tabContact: "Send Message",
    personalInfo: "Personal Profile",
    education: "Education & Major",
    experience: "Core Experience",
    fullName: "Full Name",
    birthYear: "Birth Year",
    nationality: "Nationality",
    vietnam: "Vietnam",
    major: "Major",
    university: "University",
    studyField: "Field of Study",
    timelinePresent: "Present",
    currentLocation: "Location",
    phone:"Phone number",
  },
  VI: {
    tabProfile: "Hồ Sơ Cá Nhân",
    tabContact: "Gửi Tin Nhắn",
    personalInfo: "Thông Tin Cá Nhân",
    education: "Quá Trình Học Tập",
    experience: "Kinh Nghiệm Làm Việc",
    fullName: "Họ và Tên",
    birthYear: "Năm sinh",
    nationality: "Quốc tịch",
    vietnam: "Việt Nam",
    major: "Ngành học / Chuyên ngành",
    university: "Trường học",
    studyField: "Ngành học",
    timelinePresent: "Hiện tại",
    currentLocation: "Địa chỉ",
    phone:"Số điện thoại",

  }
};

const PROFILE_DATA = {
  fullName: "Huỳnh Trương Nam",
  birthYear: "2002",
  nationality: {
    EN: "Vietnamese",
    VI: "Việt Nam"
  },
  location: {
    EN: "Can Tho City, Vietnam",
    VI: "TP.Cần Thơ, Việt Nam"
  },
  phone: "0762829389",
  education: {
    school: {
      EN: "Can Tho UNIVERSITY",
      VI: "Trường Đại học Cần Thơ"
    },
    major: {
      EN: "Computer Networks and Data Communications",
      VI: "Mạng máy tính và truyền thông dữ liệu"
    },
    timeline: "2020 - 2025"
  },
  experience: [
    {
      role: {
        EN: "IT Infrastructure & Server Virtualization",
        VI: "Hạ Tầng IT & Ảo Hóa Máy Chủ"
      },
      company: {
        EN: "Freelance ",
        VI: "Dự án Tự do "
      },
      timeline: {
        EN: "2020 - Present",
        VI: "2020 - Hiện tại"
      },
      icon: "server",
      bullets: {
        EN: [
          "Provision high-performance server structures with Proxmox VE, and physical rack optimization.",
          "Coordinate sophisticated load-balancing policies, routing structures, and hardware benchmarks.",
          "Configure enterprise security policies and secure firewall sandboxes."
        ],
        VI: [
          "Xây dựng hạ tầng máy chủ ảo hóa cao cấp qua  Proxmox VE và tối ưu hóa hệ cứng server vật lý.",
          "Cấu hình định tuyến, chính sách an toàn thông tin và đo kiểm hiệu năng phần cứng doanh nghiệp.",
          "Cài đặt, hướng dẫn vận hành hệ thống phần cứng và phần mềm chuyên dụng cho người dùng cuối bền bỉ."
        ]
      }
    },
    {
      role: {
        EN: "Full-Stack Web Developer",
        VI: "Lập Trình Viên Web Full-Stack"
      },
      company: {
        EN: "Creative Single Page Applications",
        VI: "Phát triển Ứng dụng Web"
      },
      timeline: {
        EN: "2022 - Present",
        VI: "2022 - Hiện tại"
      },
      icon: "code",
      bullets: {
        EN: [
          "Craft pristine interactive dashboards with React, TypeScript, dynamic Tailwind styles, and fine-tuned animations.",
          "Design durable, light RESTful and service-authoritative backends via Node.js, Express, and secure cloud storage.",
          "Streamline operational performance through isolated containers using Docker and automatic script tooling."
        ],
        VI: [
          "Phát triển các trang web chất lượng cao bằng React, TypeScript, Tailwind CSS kết hợp chuyển động trực quan mượt mà.",
          "Thiết lập hệ thống backend bảo mật, chuẩn tối ưu hóa cơ sở dữ liệu và xử lý API tin cậy thông qua Node.js/Express.",
          "Đóng gói quy trình CI/CD, tự động hóa quản trị Linux Terminal qua shell scripts hiệu quả và nhanh chóng."
        ]
      }
    }
  ]
};

export const Popups: React.FC<PopupsProps> = ({
  language,
  showContact,
  initialTab,
  onCloseContact,
  activeProject,
  onCloseProject
}) => {
  const t = LOCALIZATION[language];
  const r = RESUME_LOCALIZATION[language];

  // Tab Choice State: profile or contact
  const [activeTab, setActiveTab] = useState<'profile' | 'contact'>('profile');

  React.useEffect(() => {
    if (showContact && initialTab) {
      setActiveTab(initialTab);
    }
  }, [showContact, initialTab]);

  // Contact Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Hardware Infrastructure');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const servicesList = [
    "Hardware Infrastructure",
    "Full-Stack Development",
    "DevOps & virtualization",
    "Network Architecture"
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("namhuynh1234kk@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMsg(t.formValidation);
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate sending inquiry
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setService('Hardware Infrastructure');
    setMessage('');
    setIsSuccess(false);
    setErrorMsg('');
    setActiveTab('profile'); // reset default tab to profile
    onCloseContact();
  };

  return (
    <>
      <AnimatePresence>
        {/* Contact Modal */}
        {showContact && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetForm}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-xl rounded-[32px] border border-white/10 bg-[#0F0F0F] p-5 sm:p-7 overflow-hidden select-none shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-10"
            >
              
              {/* Radial premium glow background */}
              <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-fuchsia-800/10 blur-[120px] pointer-events-none" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-orange-700/10 blur-[120px] pointer-events-none" />

              {/* Close Button & Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
                  <span className="font-mono text-[10px] text-purple-300 uppercase tracking-widest">
                    SYSTEMS CODESIGNER / PORTFOLIO FILE
                  </span>
                </div>
                <button
                  onClick={resetForm}
                  className="p-1.5 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-[#D7E2EA] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Elegant Tabs Selection */}
              <div className="flex border-b border-white/5 mb-5 gap-4">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`pb-2.5 text-xs sm:text-xs font-bold uppercase tracking-widest relative transition-all cursor-pointer ${
                    activeTab === 'profile'
                      ? 'text-white'
                      : 'text-[#D7E2EA]/40 hover:text-[#D7E2EA]/60'
                  }`}
                >
                  {r.tabProfile}
                  {activeTab === 'profile' && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-fuchsia-500 to-amber-500"
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`pb-2.5 text-xs sm:text-xs font-bold uppercase tracking-widest relative transition-all cursor-pointer ${
                    activeTab === 'contact'
                      ? 'text-white'
                      : 'text-[#D7E2EA]/40 hover:text-[#D7E2EA]/60'
                  }`}
                >
                  {r.tabContact}
                  {activeTab === 'contact' && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-fuchsia-500 to-amber-500"
                    />
                  )}
                </button>
              </div>

              {/* Scrollable Container wrapper to keep modal safe on small mobile viewports */}
              <div className="max-h-[66vh] overflow-y-auto pr-1 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
                
                {activeTab === 'profile' ? (
                  <div className="space-y-4 animate-fadeIn">
                    
                    {/* Part 1: Personal Info Card */}
                    <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02]/50 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-3.5 border-b border-white/5 pb-2">
                        <User className="w-4 h-4 text-purple-400" />
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#D7E2EA]">
                          {r.personalInfo}
                        </h4>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs">
                        <div className="flex flex-col gap-1">
                          <span className="text-[#D7E2EA]/40 uppercase tracking-wider text-[10px]">{r.fullName}</span>
                          <span className="text-[#D7E2EA] font-semibold">{PROFILE_DATA.fullName}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[#D7E2EA]/40 uppercase tracking-wider text-[10px]">{r.birthYear}</span>
                          <span className="text-[#D7E2EA] font-semibold">{PROFILE_DATA.birthYear}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[#D7E2EA]/40 uppercase tracking-wider text-[10px]">{r.nationality}</span>
                          <span className="text-[#D7E2EA] font-semibold">{PROFILE_DATA.nationality[language]}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[#D7E2EA]/40 uppercase tracking-wider text-[10px]">{r.currentLocation}</span>
                          <span className="text-[#D7E2EA] font-semibold">{PROFILE_DATA.location[language]}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[#D7E2EA]/40 uppercase tracking-wider text-[10px]">{r.phone}</span>
                          <span className="text-[#D7E2EA] font-semibold">{PROFILE_DATA.phone}</span>
                        </div>
                      </div>
                    </div>

                    {/* Part 2: Education Group */}
                    <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02]/50 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
                        <GraduationCap className="w-4 h-4 text-purple-400" />
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#D7E2EA]">
                          {r.education}
                        </h4>
                      </div>

                      <div className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="w-7 h-7 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                            <GraduationCap className="w-3.5 h-3.5" />
                          </div>
                          <div className="w-[1px] flex-1 bg-white/10 my-1" />
                        </div>
                        
                        <div className="flex-1 space-y-1 text-xs">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <span className="text-[#D7E2EA] font-bold">{PROFILE_DATA.education.school[language]}</span>
                            <span className="px-2 py-0.5 rounded bg-white/5 text-[9px] font-mono text-[#D7E2EA]/60 border border-white/5">
                              {PROFILE_DATA.education.timeline}
                            </span>
                          </div>
                          <p className="text-[#D7E2EA]/75 font-medium flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-purple-400" />
                            <span>{r.major}: <strong>{PROFILE_DATA.education.major[language]}</strong></span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Part 3: Work Experience Group */}
                    <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02]/50 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                        <Briefcase className="w-4 h-4 text-purple-400" />
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#D7E2EA]">
                          {r.experience}
                        </h4>
                      </div>

                      <div className="space-y-5">
                        {PROFILE_DATA.experience.map((exp, idx) => (
                          <div key={idx} className="flex gap-3 align-top">
                            <div className="flex flex-col items-center">
                              <div className="w-7 h-7 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                                {exp.icon === 'server' ? (
                                  <Server className="w-3.5 h-3.5" />
                                ) : (
                                  <Code className="w-3.5 h-3.5" />
                                )}
                              </div>
                              {idx < PROFILE_DATA.experience.length - 1 && (
                                <div className="w-[1px] flex-1 bg-white/10 my-2" />
                              )}
                            </div>
                            
                            <div className="flex-1 space-y-1.5 text-xs">
                              <div className="flex items-center justify-between gap-1 flex-wrap">
                                <span className="text-[#D7E2EA] font-bold uppercase tracking-tight text-[11px]">
                                  {exp.role[language]}
                                </span>
                                <span className="px-2 py-0.5 rounded bg-white/5 text-[9px] font-mono text-[#D7E2EA]/50 border border-white/5">
                                  {exp.timeline[language]}
                                </span>
                              </div>
                              <p className="text-purple-300 font-medium text-[10px] uppercase font-mono tracking-widest">
                                {exp.company[language]}
                              </p>
                              
                              <ul className="space-y-1.5 pl-1.5 mt-2">
                                {exp.bullets[language].map((bullet, i) => (
                                  <li key={i} className="text-[#D7E2EA]/75 leading-relaxed text-[11px] flex items-start gap-2">
                                    <span className="text-purple-400 mt-1 block h-1 w-1 shrink-0 rounded-full bg-purple-400" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Button to switch tab to let them message Nam directly */}
                    <button
                      onClick={() => setActiveTab('contact')}
                      className="w-full py-3.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider text-[#D7E2EA] transition-all transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                      style={{
                        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1'
                      }}
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{language === 'EN' ? "Let's work together" : "Gửi yêu cầu thiết kế dự án"}</span>
                    </button>

                  </div>
                ) : (
                  
                  // Contact Inquiry Form Panel
                  !isSuccess ? (
                    <form onSubmit={handleFormSubmit} className="space-y-3.5 relative animate-fadeIn">
                      
                      {/* Name field */}
                      <div>
                        <label className="text-[10px] font-semibold uppercase tracking-widest text-[#D7E2EA]/40 block mb-1">
                          {t.labelName}
                        </label>
                        <input
                          type="text"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2 text-[#D7E2EA] text-xs focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all"
                          placeholder="e.g. Alexis Carter"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      {/* Email field */}
                      <div>
                        <label className="text-[10px] font-semibold uppercase tracking-widest text-[#D7E2EA]/40 block mb-1">
                          {t.labelEmail}
                        </label>
                        <input
                          type="email"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2 text-[#D7E2EA] text-xs focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all"
                          placeholder="alexis@creative.studio"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      {/* Service selector chips */}
                      <div>
                        <label className="text-[10px] font-semibold uppercase tracking-widest text-[#D7E2EA]/40 block mb-1.5">
                          {t.labelService}
                        </label>
                        <div className="flex flex-wrap gap-1">
                          {servicesList.map((srv) => (
                            <button
                              key={srv}
                              type="button"
                              onClick={() => setService(srv)}
                              className={`text-[10px] px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                                service === srv
                                  ? 'bg-white text-[#0C0C0C] border-white font-semibold'
                                  : 'border-white/10 text-[#D7E2EA]/70 hover:border-white/30 bg-white/[0.01]'
                              }`}
                            >
                              {srv}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Message field */}
                      <div>
                        <label className="text-[10px] font-semibold uppercase tracking-widest text-[#D7E2EA]/40 block mb-1">
                          {t.labelMessage}
                        </label>
                        <textarea
                          rows={2.5}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2 text-[#D7E2EA] text-xs focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all resize-none"
                          placeholder="What project parameters can I configure for you?"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </div>

                      {/* Direct Contact info */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-2.5 border border-dashed border-white/10 rounded-xl bg-white/[0.01] text-[10px] gap-2">
                        <span className="text-[#D7E2EA]/60 font-mono">namhuynh1234kk@gmail.com</span>
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="flex items-center gap-1 text-[9px] text-white/80 hover:text-white cursor-pointer px-2 py-1 rounded bg-white/[0.05] hover:bg-white/[0.1] transition-all"
                        >
                          {copiedEmail ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedEmail ? t.copied : t.copyEmail}</span>
                        </button>
                      </div>

                      {/* Errors */}
                      {errorMsg && (
                        <p className="text-[10px] text-red-400 font-semibold text-center">
                          {errorMsg}
                        </p>
                      )}

                      {/* Submit button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 rounded-xl text-center text-xs font-semibold uppercase tracking-wider text-[#D7E2EA] relative overflow-hidden transition-all duration-300 transform active:scale-95 cursor-pointer disabled:opacity-70 disabled:pointer-events-none"
                        style={{
                          background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                          boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1'
                        }}
                      >
                        <span className="flex items-center justify-center gap-2">
                          <Send className="w-3.5 h-3.5" />
                          <span>{isSubmitting ? t.sending : t.submitButton}</span>
                        </span>
                      </button>

                    </form>
                  ) : (
                    <div className="py-6 flex flex-col items-center text-center space-y-3 animate-fadeIn">
                      <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/30">
                        <Check className="w-6 h-6 text-green-400" />
                      </div>
                      <h4 className="text-lg font-bold uppercase text-[#D7E2EA]">
                        {t.thanksTitle}
                      </h4>
                      <p className="text-xs text-[#D7E2EA]/75 max-w-sm">
                        {t.thanksMessage}
                      </p>
                      <button
                        onClick={resetForm}
                        className="mt-3 px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 text-[10px] uppercase font-bold tracking-widest text-[#D7E2EA]"
                      >
                        {t.close}
                      </button>
                    </div>
                  )
                )}

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {/* Project Link Trigger Overlay */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onCloseProject}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className="relative w-full max-w-md rounded-[32px] border border-white/15 bg-[#0C0C0C] p-6 sm:p-8 overflow-hidden select-none shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-10 text-center"
            >
              
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-500 via-purple-600 to-amber-500" />

              {/* Close Icon */}
              <button
                onClick={onCloseProject}
                className="absolute top-4 right-4 p-1.5 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-[#D7E2EA] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 border border-white/10">
                <Briefcase className="w-6 h-6 text-[#D7E2EA]" />
              </div>

              <h3 className="text-xl font-bold uppercase tracking-tight text-[#D7E2EA] mb-2">
                {t.liveTitle}
              </h3>

              <p className="text-xs text-[#D7E2EA]/50 uppercase tracking-widest">
                {t.liveSubtitle}
              </p>
              
              {/* Highlight Name */}
              <p className="text-xl sm:text-2xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#D7E2EA] to-[#646973] my-2">
                {activeProject.name}
              </p>

              <p className="text-xs sm:text-sm text-[#D7E2EA]/70 px-2 leading-relaxed bg-[#0F0F0F] rounded-2xl py-4 border border-white/5 my-4">
                {t.liveWarn}
              </p>

              {/* Button Triggers */}
              <div className="space-y-2.5 mt-5">
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-[#0C0C0C] font-semibold text-xs sm:text-sm uppercase tracking-widest transition-all hover:bg-white/95 active:scale-98"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{t.actionVisit}</span>
                </a>

                <button
                  onClick={onCloseProject}
                  className="w-full py-3 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.1] text-xs sm:text-sm text-[#D7E2EA] font-semibold uppercase tracking-widest transition-all"
                >
                  {t.actionDirect}
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
