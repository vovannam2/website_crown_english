import type { TeachersPageData } from "@/types/teachers";
// Static imports give updated images a new URL automatically on dev/build.
import teachersMrHungImage from "../../public/images/teachers/mr-hung.png";
import teachersMsUyenImage from "../../public/images/teachers/ms-uyen.png";
import teachersMsMinhTuImage from "../../public/images/teachers/ms-minh-tu.png";
import teachersMrNghiaImage from "../../public/images/teachers/mr-nghia.png";
import teachersMsNguyenKhanhImage from "../../public/images/teachers/ms-nguyen-khanh.png";
import teachersMsLinhNguyenImage from "../../public/images/teachers/ms-linh-nguyen.png";
import teachersMsYenImage from "../../public/images/teachers/ms-yen.png";
import teachersMrManImage from "../../public/images/teachers/mr-man.png";
import teachersMsHangImage from "../../public/images/teachers/ms-hang.png";
import teachersMsHanLeImage from "../../public/images/teachers/ms-han-le.png";
import teachersMsThaoPhanImage from "../../public/images/teachers/ms-thao-phan.png";
import teachersMrAlexNguyenImage from "../../public/images/teachers/mr-alex-nguyen.png";
import teachersMrMinhHieuImage from "../../public/images/teachers/mr-minh-hieu.png";
import teachersMrMinhQuocImage from "../../public/images/teachers/mr-minh-quoc.png";
import teachersMrDucChauImage from "../../public/images/teachers/mr-duc-chau.png";
import teachersMsThucDoanImage from "../../public/images/teachers/ms-thuc-doan.png";
import teachersMsHuongQuynhImage from "../../public/images/teachers/ms-huong-quynh.png";
import teachersMrThanhTrucImage from "../../public/images/teachers/mr-thanh-truc.png";
import teachersMrTrongHuyImage from "../../public/images/teachers/mr-trong-huy.png";
import teachersMrHoangLamImage from "../../public/images/teachers/mr-hoang-lam.png";
import teachersMrHuynhVongImage from "../../public/images/teachers/mr-huynh-vong.png";
import teachersMrKhoaImage from "../../public/images/teachers/mr-khoa.png";
import teachersMrPhanGiangImage from "../../public/images/teachers/mr-phan-giang.png";
import teachersMrHoangNamImage from "../../public/images/teachers/mr-hoang-nam.png";
import teachersMrNhanTriImage from "../../public/images/teachers/mr-nhan-tri.png";
import teachersMrHoangDinhImage from "../../public/images/teachers/mr-hoang-dinh.png";
import teachersMsThuyHienImage from "../../public/images/teachers/ms-thuy-hien.png";
import teachersMsCatQuynhImage from "../../public/images/teachers/ms-cat-quynh.png";
import teachersMsHuongGiangImage from "../../public/images/teachers/ms-huong-giang.png";
import teachersMsHongMaiImage from "../../public/images/teachers/ms-hong-mai.png";
import teachersMsNhuQuynhImage from "../../public/images/teachers/ms-nhu-quynh.png";
import teachersMsKyDuyenImage from "../../public/images/teachers/ms-ky-duyen.png";
import teachersMsCamCatImage from "../../public/images/teachers/ms-cam-cat.png";
import teachersMsAnhLeImage from "../../public/images/teachers/ms-anh-le.png";

export const teachersPageData = {
  seo: {
    title: "Đội ngũ giảng viên | Crown English",
    description:
      "Tìm hiểu đội ngũ giảng viên Crown English, chuyên môn, phương pháp đào tạo và cách giảng viên đồng hành cùng học viên trong quá trình học.",
    h1: "Đội ngũ giảng viên Crown English",
    canonical: "/giang-vien",
    searchIntent: "Tìm hiểu đội ngũ giảng viên và chuyên môn",
    primaryTopic: "giảng viên Crown English",
    secondaryTopics: ["đội ngũ giảng viên IELTS", "giảng viên IELTS 7.5 8.0"],
    localSignals: [],
    schemaTypes: ["CollectionPage"],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Đội ngũ giảng viên | Crown English",
      description:
        "Đội ngũ giảng viên chuyên nghiệp và phương pháp đào tạo tại Crown English.",
      image: "",
    },
  },

  hero: {
    // Chọn ba hồ sơ để hiển thị ảnh ở đầu trang, theo thứ tự trái / giữa / phải.
    featuredIds: ["ms-minh-tu", "ms-nguyen-khanh", "mr-hung"],
    title: "Giảng viên",
    description: "",
  },

  intro:
    "Tại Crown English, chất lượng giảng dạy không chỉ nằm ở bằng cấp cá nhân mà còn ở sự đồng bộ về phương pháp, tư duy và tinh thần trách nhiệm. Chúng tôi tự hào xây dựng đội ngũ giảng viên chuyên nghiệp, tận tâm và luôn đặt tiến bộ của học viên làm trung tâm.",

  standards: [
    {
      title: "Chuẩn Hóa Phương Pháp & Đồng Bộ Chất Lượng",
      items: [
        "Đào tạo bài bản: Tất cả giảng viên tại Crown English đều trải qua quy trình tuyển chọn khắt khe và chương trình đào tạo nội bộ chuyên sâu. Điều này đảm bảo toàn bộ khóa học được vận hành theo một lộ trình chuẩn duy nhất, đúng định hướng và văn hóa học tập cốt lõi của trung tâm.",
        "Đồng bộ phương pháp: Dù học với bất kỳ giảng viên nào, học viên luôn nhận được trải nghiệm học tập nhất quán, tinh gọn và tối ưu hiệu quả.",
      ],
    },
    {
      title: "Chuyên Môn Vượt Trội & Sự Tận Tụy",
      items: [
        "Trình độ cao: 100% giảng viên sở hữu chứng chỉ IELTS 7.5 – 8.0 với năng lực sư phạm thực chiến.",
        "Giảng dạy Full-time: Đội ngũ giảng viên làm việc toàn thời gian tại trung tâm, cho phép thầy cô dành trọn tâm huyết, theo sát tiến độ, sửa bài chi tiết và đồng hành cùng học viên trong suốt hành trình.",
      ],
    },
    {
      title: "Năng Lượng Tích Cực & Linh Hoạt Hỗ Trợ",
      items: [
        "Môi trường năng động: Giảng viên Crown English mang nguồn năng lượng tích cực, truyền cảm hứng và sự tự tin, giúp buổi học trở nên cởi mở, không áp lực vô hình.",
        "Linh hoạt & Tối ưu trải nghiệm: Sự hài lòng và tiến bộ của học viên luôn là ưu tiên hàng đầu. Nếu phát hiện lộ trình hay phong cách học chưa thực sự phù hợp, trung tâm sẵn sàng hỗ trợ chuyển đổi lớp học hoàn toàn miễn phí để đảm bảo hiệu quả tối đa.",
      ],
    },
  ],

  teachers: [
    {
      id: "mr-hung",
      name: "Mr Hung",
      role: "",
      image: teachersMrHungImage.src,

      achievements: [
        "Cử nhân ĐH Ngân Hàng TPHCM",
        "IELTS 7.5",
        "Chứng chỉ TESOL",
      ],

      experience: ["2 năm giảng dạy TA Giao Tiếp và IELTS band 7.0"],

      strengths: ["Sở trường các lớp Newbie và Advance"],

      quote: "A different language is a different vision of life.",
    },

    {
      id: "ms-uyen",
      name: "Ms Uyen",
      role: "",
      image: teachersMsUyenImage.src,

      achievements: [
        "Cử nhân ĐH Kinh tế TPHCM",
        "IELTS 7.5 ( Speaking 7.0 )",
        "TOEIC 915 và IC3",
      ],

      experience: ["Trên 2 năm giảng dạy TA Giao Tiếp cho người mới bắt đầu"],

      strengths: ["Sở trường các lớp giao tiếp"],

      quote: "Knowledge of languages is the doorway to wisdom.",
    },

    {
      id: "ms-minh-tu",
      name: "Ms Minh Tu",
      role: "",
      image: teachersMsMinhTuImage.src,

      achievements: [
        "Cử nhân ĐH Ngoại Ngữ - Tin Học Tp.HCM",
        "IELTS 7.5",
        "Chứng chỉ ĐH sư phạm, chứng chỉ TESOL",
      ],

      experience: [
        "Trên 5 năm giảng dạy chứng chỉ IELTS và tiếng Anh giao tiếp cho người mới bắt đầu",
      ],

      strengths: [],

      quote: "Knowledge of languages is the doorway to wisdom.",
    },

    {
      id: "mr-nghia",
      name: "Mr Nghia",
      role: "",
      image: teachersMrNghiaImage.src,

      achievements: [
        "Cử nhân ĐH Tôn Đức Thắng TPHCM",
        "IELTS 7.5",
        "Chứng chỉ TESOL",
      ],

      experience: ["2 năm giảng dạy các lớp tiếng Anh 4 kỹ năng"],

      strengths: ["Sở trường các lớp giao tiếp"],

      quote: "Learning English in funnier way.",
    },

    {
      id: "mr-thuan",
      name: "Mr Thuan",
      role: "",
      image: "",

      achievements: [
        "Cử nhân ĐH Quốc Gia TPHCM",
        "IELTS 7.5",
        "Chứng chỉ TESOL",
      ],

      experience: ["2 năm giảng dạy IELTS and General English"],

      strengths: ["Sở trường các lớp IELTS"],

      quote: "Making English learning fun every day",
    },

    {
      id: "ms-nguyen-khanh",
      name: "Ms Nguyen Khanh",
      role: "",
      image: teachersMsNguyenKhanhImage.src,

      achievements: [
        "Cử nhân ĐH RMIT - SGS , Đối Tác Liên Kết IDP",
        "Du Học Sinh Canada 4 năm",
        "Cựu học sinh BA tại Brock University - Canada",
        "IELTS 8.0 ( Writing 8.0)",
      ],

      experience: [
        "4 năm kinh nghiệm dạy IELTS",
        "Giám Đốc Học Thuật trung tâm IELTS Top HCM",
      ],

      strengths: ["Sở trường các lớp IELTS mọi level , IELTS Intensive"],

      quote:
        "Develop a passion for learning. If you do, you will never cease to grow.",
    },

    {
      id: "ms-linh-nguyen",
      name: "Ms Linh Nguyen",
      role: "",
      image: teachersMsLinhNguyenImage.src,

      achievements: [
        "Cử nhân ĐH Khoa Học Xã Hội và Nhân Văn",
        "Chứng chỉ TESOL",
        "IELTS 8.0",
      ],

      experience: [
        "4 năm kinh nghiệm dạy IELTS",
        "Giám Đốc Học Thuật trung tâm IELTS Shinee",
      ],

      strengths: ["Sở trường các lớp IELTS mọi level , IELTS Intensive"],

      quote:
        "Develop a passion for learning. If you do, you will never cease to grow.",
    },

    {
      id: "ms-yen",
      name: "Ms Yen",
      role: "",
      image: teachersMsYenImage.src,

      achievements: ["Cử nhân ĐH Ngoại Thương", "IELTS 8.0. & TESOL"],

      experience: [
        "trên 4 năm kinh nghiệm dạy IELTS, năng lượng và sự kỉ luật cho học viên.",
      ],

      strengths: [
        "Sở trường các lớp IELTS mọi level từ Newbie & Advance/ Intensive",
      ],

      quote: "Learning English is the first step towards global fluency.",
    },

    {
      id: "mr-man",
      name: "Mr Man",
      role: "",
      image: teachersMrManImage.src,

      achievements: ["Bằng TESOL", "IELTS 8.0 - Chứng chỉ Sư phạm"],

      experience: ["4 năm kinh nghiệm dạy IELTS và Giao Tiếp"],

      strengths: [
        "Sở trường các lớp IELTS general , Giao tiếp và lớp kèm",
        "Chuyên dạy general IELTS Định Cư và IELTS du học",
      ],

      quote: "Language limitation is a limitation of vision",
    },

    {
      id: "ms-hang",
      name: "Ms Hang",
      role: "",
      image: teachersMsHangImage.src,

      achievements: [
        "Cử nhân ĐH Quốc Tế - ĐH Quốc gia TPHCM.",
        "IELTS 8.0 (Listening, Reading: 9.0).",
        "TOEIC 960.",
      ],

      experience: ["Trên 2 năm kinh nghiệm dạy đa dạng level."],

      strengths: ["Sở trường dạy IELTS và TOEIC."],

      quote:
        "A good education can change anyone. A good teacher can change everything!",
    },

    {
      id: "ms-han-le",
      name: "Ms Han Le",
      role: "",
      image: teachersMsHanLeImage.src,

      achievements: [
        "Cử nhân ĐH Kinh Tế TpHCM",
        "IELTS 7.5    Speaking: 7.5    TOEIC 915",
        "Chứng chỉ TESOL",
      ],

      experience: ["3 năm kinh nghiệm dạy IELTS đủ level và các lớp giao tiếp"],

      strengths: [],

      quote: "Learning English is the first step towards global fluency.",
    },

    {
      id: "ms-thao-phan",
      name: "Ms Thao Phan",
      role: "",
      image: teachersMsThaoPhanImage.src,

      achievements: [
        "Cử nhân ĐH Khoa Học Xã Hội và Nhân Văn",
        "IELTS 7.5",
        "TOEIC 980",
        "Chứng chỉ TESOL",
      ],

      experience: ["3 năm kinh nghiệm dạy IELTS và TOEIC"],

      strengths: [],

      quote: "Life is a constant teacher; keep learning to keep living.",
    },

    {
      id: "mr-alex-nguyen",
      name: "Mr Alex Nguyen",
      role: "",
      image: teachersMrAlexNguyenImage.src,

      achievements: ["Cử nhân ĐH Greenwich TPHCM", "IELTS 7.5", "Bằng TESOL"],

      experience: ["4 năm kinh nghiệm dạy IELTS"],

      strengths: ["Sở trường các lớp kèm IELTS mọi level và lớp cấp tốc"],

      quote: "Set your target and keep trying until you reach it",
    },

    {
      id: "mr-minh-hieu",
      name: "Mr Minh Hieu",
      role: "",
      image: teachersMrMinhHieuImage.src,

      achievements: [
        "Cử nhân ĐH Kinh Tế TPHCM",
        "IELTS 7.5    TOEIC 810",
        "Chuyên ngành Ngôn ngữ Anh",
      ],

      experience: ["3 năm kinh nghiệm dạy IELTS và tiếng Anh giao tiếp"],

      strengths: ["Sở trường các lớp kèm IELTS mọi level và lớp cấp tốc"],

      quote: "Set your target and keep trying until you reach it",
    },

    {
      id: "mr-minh-quoc",
      name: "Mr Minh Quoc",
      role: "",
      image: teachersMrMinhQuocImage.src,

      achievements: [
        "Cử nhân ĐH Tôn Đức Thắng TPHCM",
        "IELTS 7.5 - Chứng chỉ giảng dạy TESOL 120h",
        "Chuyên ngành Ngôn ngữ Anh, Loại Giỏi",
      ],

      experience: ["3 năm kinh nghiệm dạy IELTS và tiếng Anh giao tiếp"],

      strengths: ["Sở trường các lớp kèm IELTS mọi level và lớp cấp tốc"],

      quote: "Set your target and keep trying until you reach it",
    },

    {
      id: "mr-duc-chau",
      name: "Mr Duc Chau",
      role: "",
      image: teachersMrDucChauImage.src,

      achievements: [
        "Cử nhân ĐH Tôn Đức Thắng TPHCM",
        "IELTS 7.0 ( Reading 8.5 )",
        "Chứng chỉ giảng dạy TESOL 120h",
        "TOEIC 880",
      ],

      experience: ["3 năm kinh nghiệm dạy IELTS và tiếng Anh giao tiếp"],

      strengths: ["Sở trường các lớp kèm IELTS mọi level và lớp cấp tốc"],

      quote: "Set your target and keep trying until you reach it",
    },

    {
      id: "ms-thuc-doan",
      name: "Ms Thuc Doan",
      role: "",
      image: teachersMsThucDoanImage.src,

      achievements: [
        "Cử nhân Ngôn ngữ học ĐH KHXHVNV loại Giỏi",
        "IELTS 7.5   TESOL   TEFL   TOEIC 810",
        "Xuất sắc đạt nhiều học bổng, giải thưởng",
      ],

      experience: ["3 năm kinh nghiệm ôn các chứng chỉ và tiếng Anh giao tiếp"],

      strengths: ["Sở trường các lớp kèm cấp tốc mọi level"],

      quote: "Believe and Work Hard - You Can Get It!!",
    },

    {
      id: "ms-huong-quynh",
      name: "Ms Huong Quynh",
      role: "",
      image: teachersMsHuongQuynhImage.src,

      achievements: [
        "Cử nhân Sư phạm Anh - ĐH Sài Gòn",
        "IELTS 7.5   TESOL",
        "Xuất sắc đạt nhiều học bổng, giải thưởng",
      ],

      experience: ["4 năm kinh nghiệm ôn luyện IELTS và tiếng Anh giao tiếp"],

      strengths: ["Sở trường các lớp kèm cấp tốc mọi level"],

      quote: "Believe and Work Hard - You Can Get It!!",
    },

    {
      id: "mr-thanh-truc",
      name: "Mr Thanh Truc",
      role: "",
      image: teachersMrThanhTrucImage.src,

      achievements: [
        "Cử nhân Đại học Mở TPHCM",
        "Bằng TESOL",
        "IELTS 7.5 ( W 7.5 )",
      ],

      experience: [
        "3 năm kinh nghiệm dạy IELTS và tiếng Anh giao tiếp",
        "Kinh nghiệm dạy các bạn tuổi teen, anh chị lớn",
      ],

      strengths: [
        "Chuyên dạy Writing IELTS và tự soạn Giáo Án cho nhiều level khác nhau",
      ],

      quote: "There is no substitute for hard work",
    },

    {
      id: "mr-trong-huy",
      name: "Mr Trong Huy",
      role: "",
      image: teachersMrTrongHuyImage.src,

      achievements: ["Cử nhân Ngành Ngôn ngữ Anh", "IELTS 8.0 ( Speaking 8.0)"],

      experience: [
        "3 năm kinh nghiệm dạy IELTS và tiếng Anh giao tiếp",
        "Có kinh nghiệm dạy 1vs1 cũng như lớp nhóm đông",
      ],

      strengths: ["Chuyên dạy ôn cấp tốc Speaking IELTS"],

      quote: "Learning is like rowing upstream, not to advance is to drop back",
    },

    {
      id: "mr-hoang-lam",
      name: "Mr Hoang Lam",
      role: "",
      image: teachersMrHoangLamImage.src,

      achievements: [
        "Cử nhân Ngành Ngôn ngữ Anh",
        "IELTS 7.5 ( Lis 8.5 +Read 9.0)",
        "PTE 90/90",
      ],

      experience: [
        "3 năm kinh nghiệm dạy IELTS và tiếng Anh giao tiếp",
        "Có kinh nghiệm dạy 1vs1 cũng như lớp nhóm đông",
      ],

      strengths: ["Chuyên dạy ôn cấp tốc Speaking IELTS"],

      quote: "Learning is like rowing upstream, not to advance is to drop back",
    },

    {
      id: "mr-huynh-vong",
      name: "Mr Huynh Vong",
      role: "",
      image: teachersMrHuynhVongImage.src,

      achievements: [
        "Cử nhân Ngôn ngữ Anh Đại học Công Nghiệp HCM",
        "TESOL 120HRS      Chứng chỉ Nghiệp vụ Sư Phạm",
        "IELTS 7.5   HSK3",
      ],

      experience: [
        "5 năm kinh nghiệm dạy IELTS và tiếng Anh giao tiếp",
        "Có kinh nghiệm dạy 1vs1 cũng như lớp nhóm đông",
      ],

      strengths: ["Chuyên dạy ôn cấp tốc Speaking IELTS"],

      quote: "Learning is like rowing upstream, not to advance is to drop back",
    },

    {
      id: "mr-khoa",
      name: "Mr Khoa",
      role: "",
      image: teachersMrKhoaImage.src,

      achievements: [
        "Cử nhân Ngôn ngữ Anh Đại học Công Nghiệp HCM",
        "TESOL 120HRS      Chứng chỉ Nghiệp vụ Sư Phạm",
        "IELTS 7.0 ( Reading + Lis 7.5)",
      ],

      experience: [
        "5 năm kinh nghiệm dạy IELTS và tiếng Anh giao tiếp",
        "Có kinh nghiệm dạy 1vs1 cũng như lớp nhóm đông",
      ],

      strengths: ["Chuyên dạy ôn cấp tốc Speaking IELTS"],

      quote: "Learning is like rowing upstream, not to advance is to drop back",
    },

    {
      id: "mr-phan-giang",
      name: "Mr Phan Giang",
      role: "",
      image: teachersMrPhanGiangImage.src,

      achievements: [
        "Cử nhân Đại học Bách Khoa",
        "TESOL 120HRS      Chứng chỉ Nghiệp vụ Sư Phạm",
        "IELTS 7.5 ( Reading 8.5 và Speaking 7.0 )",
      ],

      experience: [
        "5 năm kinh nghiệm dạy IELTS và tiếng Anh giao tiếp",
        "Có kinh nghiệm dạy 1vs1 cũng như lớp nhóm đông",
      ],

      strengths: ["Chuyên dạy ôn cấp tốc Speaking IELTS và giao tiếp"],

      quote: "Learning is like rowing upstream, not to advance is to drop back",
    },

    {
      id: "mr-hoang-nam",
      name: "Mr Hoang Nam",
      role: "",
      image: teachersMrHoangNamImage.src,

      achievements: [
        "Cử nhân Đại học FPT",
        "TESOL 120HRS      TOEIC 820",
        "IELTS 7.5",
      ],

      experience: [
        "5 năm kinh nghiệm dạy IELTS và tiếng Anh giao tiếp",
        "Có kinh nghiệm dạy 1vs1 cũng như lớp nhóm đông",
      ],

      strengths: ["Chuyên dạy ôn cấp tốc Speaking IELTS và giao tiếp"],

      quote: "Learning is like rowing upstream, not to advance is to drop back",
    },

    {
      id: "mr-nhan-tri",
      name: "Mr Nhan Tri",
      role: "",
      image: teachersMrNhanTriImage.src,

      achievements: ["Cử nhân Đại học Nguyễn Tất Thành", "IELTS 8.0"],

      experience: [
        "5 năm kinh nghiệm dạy IELTS và tiếng Anh giao tiếp",
        "Có kinh nghiệm làm về mảng học thuật",
      ],

      strengths: ["Chuyên dạy giao tiếp cho người đi làm"],

      quote: "Learning is like rowing upstream, not to advance is to drop back",
    },

    {
      id: "mr-hoang-dinh",
      name: "Mr Hoang Dinh",
      role: "",
      image: teachersMrHoangDinhImage.src,

      achievements: [
        "Cử nhân Đại học Bách Khoa",
        "TESOL 120HRS      Chứng chỉ Nghiệp vụ Sư Phạm",
        "IELTS 7.5 ( Reading 8.5 và Speaking 7.0 )",
      ],

      experience: [
        "5 năm kinh nghiệm dạy IELTS và tiếng Anh giao tiếp",
        "Có kinh nghiệm dạy 1vs1 cũng như lớp nhóm đông",
      ],

      strengths: ["Chuyên dạy ôn cấp tốc Speaking IELTS và giao tiếp"],

      quote: "Learning is like rowing upstream, not to advance is to drop back",
    },

    {
      id: "ms-thuy-hien",
      name: "Ms Thuy Hien",
      role: "",
      image: teachersMsThuyHienImage.src,

      achievements: ["Cử nhân Đại học Luật HCM", "IELTS 7.5"],

      experience: [
        "3 năm kinh nghiệm dạy IELTS và tiếng Anh giao tiếp",
        "Sử dụng 100% English trong môi trường giảng dạy",
      ],

      strengths: [
        "Nhẹ nhàng và tinh tế, giúp học viên mở lòng học tập hiệu quả",
      ],

      quote: "Learning is like rowing upstream, not to advance is to drop back",
    },

    {
      id: "ms-cat-quynh",
      name: "Ms Cat Quynh",
      role: "",
      image: teachersMsCatQuynhImage.src,

      achievements: ["Cử nhân Đại học Sài Gòn", "IELTS 7.5 ( Speaking 7.5)"],

      experience: [
        "4 năm kinh nghiệm dạy IELTS và tiếng Anh giao tiếp",
        "Sử dụng 100% English trong môi trường giảng dạy",
      ],

      strengths: [
        "Đã có kinh nghiệm giảng dạy dày dặn trong các trường công lập",
      ],

      quote: "Learning is like rowing upstream, not to advance is to drop back",
    },

    {
      id: "ms-huong-giang",
      name: "Ms Huong Giang",
      role: "",
      image: teachersMsHuongGiangImage.src,

      achievements: [
        "Thạc sĩ Ngôn ngữ Anh Đại học Khoa học xã hội và Nhân văn",
        "IELTS 8.5   TESOL",
      ],

      experience: [
        "8 năm kinh nghiệm dạy IELTS và tiếng Anh giao tiếp",
        "Sử dụng 100% English trong môi trường giảng dạy",
      ],

      strengths: [
        "Đã có kinh nghiệm giảng dạy dày dặn phù hợp với tất cả các lứa tuổi học viên.",
      ],

      quote: "Learning is like rowing upstream, not to advance is to drop back",
    },

    {
      id: "ms-hong-mai",
      name: "Ms Hong Mai",
      role: "",
      image: teachersMsHongMaiImage.src,

      achievements: [
        "Cử nhân Đại học Tôn Đức Thắng",
        "Thạc sĩ ngôn ngữ trường Đại học Mở",
        "IELTS 7.5",
      ],

      experience: [
        "4 năm kinh nghiệm dạy IELTS và tiếng Anh giao tiếp",
        "Sử dụng 100% English trong môi trường giảng dạy",
      ],

      strengths: [
        "Đã có kinh nghiệm giảng dạy dày dặn trong các trường công lập",
      ],

      quote: "Learning is like rowing upstream, not to advance is to drop back",
    },

    {
      id: "ms-nhu-quynh",
      name: "Ms Nhu Quynh",
      role: "",
      image: teachersMsNhuQuynhImage.src,

      achievements: ["Cử nhân Đại học Sư Phạm", "IELTS 7.5"],

      experience: ["3 năm kinh nghiệm dạy IELTS và tiếng Anh giao tiếp"],

      strengths: [
        "Chuyên dạy lớp nền IELTS",
        "Đã có kinh nghiệm giảng dạy dày dặn trong các trường công lập",
      ],

      quote: "Learning is like rowing upstream, not to advance is to drop back",
    },

    {
      id: "ms-ky-duyen",
      name: "Ms Ky Duyen",
      role: "",
      image: teachersMsKyDuyenImage.src,

      achievements: [
        "Cử nhân Đại học Ritsumeikan Asia Pacific - Japan",
        "IELTS 7.5",
      ],

      experience: [
        "5 năm kinh nghiệm dạy IELTS và tiếng Anh giao tiếp",
        "Sử dụng 100% English trong môi trường giảng dạy",
      ],

      strengths: [
        "Đã có kinh nghiệm giảng dạy dày dặn trong các trường công lập",
      ],

      quote: "Learning is like rowing upstream, not to advance is to drop back",
    },

    {
      id: "ms-cam-cat",
      name: "Ms Cam Cat",
      role: "",
      image: teachersMsCamCatImage.src,

      achievements: [
        "Cử nhân Ngôn Ngữ Anh Đại học Hoa Sen",
        "IELTS 7.5 ( Reading 8.5)",
      ],

      experience: [
        "5 năm kinh nghiệm dạy IELTS và tiếng Anh giao tiếp",
        "Sử dụng 100% English trong môi trường giảng dạy",
      ],

      strengths: [
        "Đã có kinh nghiệm giảng dạy dày dặn trong các trường công lập và tư thục",
      ],

      quote: "Learning is a treasure that will follow its owner everywhere",
    },

    {
      id: "ms-anh-le",
      name: "Ms Anh Le",
      role: "",
      image: teachersMsAnhLeImage.src,

      achievements: [
        "Cử nhân trường Tampere University of Applied Sciences",
        "IELTS 7.5 (Listening 8.5, Reading 8.0)",
      ],

      experience: [
        "2 năm kinh nghiệm gia sư IELTS và tiếng Anh giao tiếp",
        "Du học sinh Phần Lan",
        "Sử dụng 100% tiếng anh trong môi trường giảng dạy",
      ],

      strengths: [],

      quote: "Transform your English, expand your horizon",
    },
  ],
} as const satisfies TeachersPageData;
