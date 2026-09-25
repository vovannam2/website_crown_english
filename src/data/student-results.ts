import type { StudentResultsPageData } from "@/types/student-results";
// Static imports give updated images a new URL automatically on dev/build.
import studentsThumbnailsHaiNguyen70Image from "../../public/images/students/thumbnails/hai-nguyen-7-0.png";
import studentsResultsHaiNguyen70Image from "../../public/images/students/results/hai-nguyen-7-0.jpg";
import studentsThumbnailsKhanhLinh75Image from "../../public/images/students/thumbnails/khanh-linh-7-5.png";
import studentsResultsKhanhLinh75Image from "../../public/images/students/results/khanh-linh-7-5.png";
import studentsResultsNhuY70Image from "../../public/images/students/results/nhu-y-7-0.jpg";
import studentsResultsPhuongAnh75Image from "../../public/images/students/results/phuong-anh-7-5.jpg";
import studentsThumbnailsThienAn70Image from "../../public/images/students/thumbnails/thien-an-7-0.png";
import studentsResultsThienAn70Image from "../../public/images/students/results/thien-an-7-0.jpg";
import studentsThumbnailsThienAn75Image from "../../public/images/students/thumbnails/thien-an-7-5.png";
import studentsResultsThienAn75Image from "../../public/images/students/results/thien-an-7-5.png";
import studentsThumbnailsTraMy70Image from "../../public/images/students/thumbnails/tra-my-7-0.png";
import studentsResultsTraMy70Image from "../../public/images/students/results/tra-my-7-0.jpg";
import studentsThumbnailsVanDuc70Image from "../../public/images/students/thumbnails/van-duc-7-0.png";
import studentsResultsVanDuc70Image from "../../public/images/students/results/van-duc-7-0.png";
import studentsResultsVietBao80Image from "../../public/images/students/results/viet-bao-8-0.jpg";
import studentsResultsYenNhi70Image from "../../public/images/students/results/yen-nhi-7-0.png";
import studentsThumbnailsYenPhuong70Image from "../../public/images/students/thumbnails/yen-phuong-7-0.png";
import studentsResultsYenPhuong70Image from "../../public/images/students/results/yen-phuong-7-0.jpg";
import studentsClassroomsClassroom01Image from "../../public/images/students/classrooms/classroom-01.jpg";
import studentsClassroomsClassroom02Image from "../../public/images/students/classrooms/classroom-02.jpg";
import studentsClassroomsClassroom03Image from "../../public/images/students/classrooms/classroom-03.jpg";
import studentsClassroomsClassroom04Image from "../../public/images/students/classrooms/classroom-04.jpg";
import studentsClassroomsClassroom05Image from "../../public/images/students/classrooms/classroom-05.jpg";
import studentsClassroomsClassroom06Image from "../../public/images/students/classrooms/classroom-06.jpg";
import studentsClassroomsClassroom07Image from "../../public/images/students/classrooms/classroom-07.jpg";
import studentsClassroomsClassroom08Image from "../../public/images/students/classrooms/classroom-08.jpg";
import studentsClassroomsClassroom09Image from "../../public/images/students/classrooms/classroom-09.jpg";
import studentsClassroomsClassroom10Image from "../../public/images/students/classrooms/classroom-10.jpg";
import studentsClassroomsClassroom11Image from "../../public/images/students/classrooms/classroom-11.jpg";

import nhuYThumbnail from "../../public/images/students/thumbnails/nhu-y-7-0.png";
import phuongAnhThumbnail from "../../public/images/students/thumbnails/phuong-anh-7-5.png";

export const studentResultsPageData = {
  seo: {
    title: "Kết quả & Feedback học viên | Crown English",
    description:
      "Kết quả, bảng điểm, hình ảnh, video và feedback học viên tại Crown English.",
    h1: "Kết quả học viên tại Crown English",
    canonical: "/hoc-vien",
    searchIntent: "Xem kết quả và trải nghiệm thực tế của học viên",
    primaryTopic: "kết quả học viên Crown English",
    secondaryTopics: [
      "feedback học viên Crown English",
      "bảng điểm học viên IELTS",
    ],
    localSignals: [],
    schemaTypes: ["CollectionPage"],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Kết quả & Feedback học viên | Crown English",
      description: "Kết quả và feedback học viên tại Crown English.",
      image: "",
    },
  },

  hero: {
    title: "Học viên",
    description: "",
  },

  intro:
    "Tại Crown English, mỗi kết quả là một dấu mốc ghi nhận quá trình nỗ lực của học viên và sự đồng hành xuyên suốt từ đội ngũ giảng viên. Từ những cột mốc IELTS 7.0, 7.5 đến 8.0, các học viên đã chia sẻ những trải nghiệm thực tế về lộ trình học, quá trình cải thiện từng kỹ năng và sự hỗ trợ trong suốt quá trình học tập. Đây là nơi Crown English lưu lại những kết quả và cảm nhận chân thực từ chính học viên.",

  results: [
    {
      id: "hai-nguyen-7-0",
      name: "Hải Nguyên",
      exam: "IELTS",
      overall: "7.0",

      highlights: ["8.0 Listening", "8.0 Reading"],

      thumbnail: studentsThumbnailsHaiNguyen70Image.src,

      fullImage: studentsResultsHaiNguyen70Image.src,

      feedback:
        "Nhờ sự đồng hành của chị Khanh và đội ngũ IELTS Crown, mình đã đạt 7.0 IELTS ngay lần thi đầu tiên. Với học phí hợp lý, mình được chăm sóc kỹ lưỡng, sửa bài trực tiếp tại lớp và có lộ trình rõ ràng. Sự hỗ trợ tận tâm này thực sự xứng đáng và hiệu quả.",
    },

    {
      id: "khanh-linh-7-5",
      name: "Khánh Linh",
      exam: "IELTS",
      overall: "7.5",

      highlights: ["7.5 Listening", "7.5 Reading"],

      thumbnail: studentsThumbnailsKhanhLinh75Image.src,

      fullImage: studentsResultsKhanhLinh75Image.src,

      feedback:
        "Hi mọi người, mình là Linh và mình vừa đạt 7.5 IELTS overall, 7.5 Writing và 7.0 Speaking. Mình muốn gửi lời cảm ơn đặc biệt tới anh Trúc và thầy Alex cùng đội ngũ IELTS Crown đã luôn tận tình hướng dẫn và truyền cảm hứng cho mình. Mình tin rằng, với sự đồng hành đúng đắn, các bạn cũng sẽ sớm đạt được mục tiêu của mình.",
    },

    {
      id: "nhu-y-7-0",
      name: "Như Ý",
      exam: "IELTS",
      overall: "7.0",

      highlights: ["7.5 Listening", "7.0 Reading"],

      thumbnail: nhuYThumbnail.src,

      fullImage: studentsResultsNhuY70Image.src,

      feedback:
        "Hi mọi người, mình là Như Ý. Mình vừa thi xong và đã đạt Overall 7.0, nhả vía cho mọi người 7.5 listening và 7.0 reading nha. Chỉ sau 2 tháng học tập và luyện thi, nhờ sự hướng dẫn tận tình của chị Khanh, chị Quỳnh và thầy Alex cùng đội ngũ IELTS Crown mà mình đã đạt được aim. Hy vọng mọi người cũng sẽ tìm được một trung tâm phù hợp để sớm đạt IELTS nhé.",
    },

    {
      id: "phuong-anh-7-5",
      name: "Phương Anh",
      exam: "IELTS",
      overall: "7.5",

      highlights: ["8.5 Listening", "8.0 Reading"],

      thumbnail: phuongAnhThumbnail.src,

      fullImage: studentsResultsPhuongAnh75Image.src,

      feedback:
        "Nhờ sự đồng hành tận tâm của anh Hưng, chị Khanh, thầy Alex và chị Quỳnh, mình đã đạt được 7.5 IELTS Overall. Trong quá trình học, mình học với cường độ khá cao (4 buổi/tuần) nên bài tập nhiều và khá nặng, nhưng mình chưa từng bỏ cuộc. Một phần lớn là nhờ team admin Crown luôn quan tâm, hỏi thăm và theo sát mình, giúp mình có thêm động lực để cố gắng đến cùng. Hy vọng chia sẻ này sẽ tiếp thêm động lực cho mọi người trên hành trình chinh phục mục tiêu.",
    },

    {
      id: "thien-an-7-0",
      name: "Thiên Ân",
      exam: "IELTS",
      overall: "7.0",

      highlights: ["7.5 Listening", "7.5 Reading"],

      thumbnail: studentsThumbnailsThienAn70Image.src,

      fullImage: studentsResultsThienAn70Image.src,

      feedback:
        "Hi mọi người, mình là Thiên Ân và mình vừa đạt 7.0 IELTS overall ngay lần đầu tiên. Mình muốn gửi lời cảm ơn đặc biệt tới chị Khanh cùng đội ngũ IELTS Crown đã luôn tận tình hướng dẫn và hỗ trợ mình. Mình tin rằng, với sự đồng hành đúng đắn, các bạn cũng sẽ sớm đạt được mục tiêu của mình.",
    },

    {
      id: "thien-an-7-5",
      name: "Thiên Ân",
      exam: "IELTS",
      overall: "7.5",

      highlights: ["9.0 Reading", "7.5 Listening"],

      thumbnail: studentsThumbnailsThienAn75Image.src,

      fullImage: studentsResultsThienAn75Image.src,

      feedback:
        "Hi mọi người, mình là Thiên Ân. Mình đã thực sự vỡ òa khi nhận kết quả IELTS 7.5 Overall, đặc biệt là điểm 9.0 Reading. Trước đó, mình dù có nền tảng nhưng vẫn thiếu tự tin để bứt phá band cao. Quyết định chọn khóa Intensive tại IELTS Crown là bước ngoặt đúng đắn. Mình được chị Khanh giúp hệ thống tư duy Writing sắc bén và thầy Alex chỉnh sửa từng lỗi phát âm để nói tự nhiên hơn. Dù học từ xa, mình vẫn luôn được hỗ trợ 1-1 tận tình, chi tiết đến từng dấu phẩy. Đây thực sự là lộ trình bài bản cho những ai muốn nâng band như mình.",
    },

    {
      id: "tra-my-7-0",
      name: "Trà My",
      exam: "IELTS",
      overall: "7.0",

      highlights: ["7.0 Speaking", "7.5 Reading"],

      thumbnail: studentsThumbnailsTraMy70Image.src,

      fullImage: studentsResultsTraMy70Image.src,

      feedback:
        "Hi mọi người, mình là Trà My. Lúc đi thi về lo xỉu, sợ các kỹ năng kéo điểm nhau xuống rồi rớt aim. Ai dè nhận kết quả cái là phải nhắn tin khoe ngay với hai cô vì quá hạnh phúc luôn. Đạt luôn 7.0 Overall ngay lần đầu thi sau đúng 1 khóa học đối với mình cứ như giấc mơ vậy. Kỹ năng cực kỳ đều với 7.5 Reading, 7.0 Listening, 7.0 Speaking. Nhờ Ms Khanh và Ms Thúy Hiền sửa sạch lỗi tư duy cũ và chỉ cách quản lý thời gian siêu tốt, đi thi gặp đề khó mình vẫn bình tĩnh xử lý gọn gàng. Cảm ơn team Crown nhiều lắm luôn!",
    },

    {
      id: "van-duc-7-0",
      name: "Văn Đức",
      exam: "IELTS",
      overall: "7.0",

      highlights: ["7.5 Listening", "7.5 Reading"],

      thumbnail: studentsThumbnailsVanDuc70Image.src,

      fullImage: studentsResultsVanDuc70Image.src,

      feedback:
        "Hi mọi người, mình đạt IELTS 7.0 Overall, cải thiện từ 6.5 ở lần thi trước, đây là một cột mốc quan trọng và là minh chứng cho nỗ lực nghiêm túc của bản thân. Trong quá trình học, Team theo sát đốc thúc, feedback rõ ràng, hỗ trợ cả học tập lẫn đăng ký thi từ A-Z, giúp em yên tâm ôn luyện dù thi gấp, rất recommend IELTS Crown cho các bạn muốn học IELTS có người keep track kỹ, đặc biệt là học online.",
    },

    {
      id: "viet-bao-8-0",
      name: "Việt Bảo",
      exam: "IELTS",
      overall: "8.0",

      highlights: [
        "8.5 Listening",
        "7.5 Reading",
        "7.0 Writing",
        "8.0 Speaking",
      ],

      thumbnail: "",

      fullImage: studentsResultsVietBao80Image.src,

      feedback:
        "Chào mọi người, con là Việt Bảo sinh năm 2016, hiện đang sinh sống tại Đức. Con rất vui khi đạt được IELTS 8.0 Overall sau hai khóa học kèm 1:1 tại trung tâm. Do chênh lệch múi giờ nên nhiều khi thầy cô phải dạy con vào buổi khuya ở Việt Nam để phù hợp với lịch học bên Đức của con. Con rất cảm ơn chị Khanh và thầy Nhân đã luôn hỗ trợ đổi lịch linh hoạt và đồng hành cùng con trong suốt quá trình học. Con cảm ơn các thầy cô đã luôn tận tình hướng dẫn, giúp con tiến bộ từng ngày và đạt được kết quả như hôm nay.",
    },

    {
      id: "yen-nhi-7-0",
      name: "Yến Nhi",
      exam: "IELTS",
      overall: "7.0",

      highlights: ["8.5 Writing", "7.0 Reading"],

      thumbnail: "",

      fullImage: studentsResultsYenNhi70Image.src,

      feedback:
        "Hi mọi người, mình là Yến Nhi. Mình đã theo học khóa kèm 1:1 focus speaking cấp tốc và rất vui khi đạt IELTS 7.0 Overall. Mình xin gửi lời cảm ơn chân thành đến đội ngũ giảng viên và admin đã luôn tận tình hỗ trợ, giảng dạy và đồng hành cùng mình trong suốt quá trình học. Chúc các bạn học viên khác sẽ luôn cố gắng và đạt được kết quả như mong muốn nhé!",
    },

    {
      id: "yen-phuong-7-0",
      name: "Yến Phương",
      exam: "IELTS",
      overall: "7.0",

      highlights: ["8.0 Listening", "7.0 Reading"],

      thumbnail: studentsThumbnailsYenPhuong70Image.src,

      fullImage: studentsResultsYenPhuong70Image.src,

      feedback:
        "Hi mọi người, mình vừa hoàn thành xong kì thi IELTS và đã đạt được 7.0 Overall. Từ mức điểm ban đầu chưa ổn định, mình đã cải thiện rõ rệt nhờ có lộ trình học phù hợp và sự theo sát rất kỹ của các anh chị giảng viên cùng team admin.",
    },
  ],

  videos: [
    {
      id: "huong-linh-7-5",
      name: "Hương Linh",
      result: "IELTS 7.5",
      src: "/videos/students/huong-linh-7-5.mp4",
    },
    {
      id: "quoc-anh-7-0",
      name: "Quốc Anh",
      result: "IELTS 7.0",
      src: "/videos/students/quoc-anh-7-0.mp4",
    },
    {
      id: "tuan-hung-7-5",
      name: "Tuấn Hưng",
      result: "IELTS 7.5",
      src: "/videos/students/tuan-hung-7-5.mp4",
    },
  ],

  classMoments: [
    {
      image: studentsClassroomsClassroom01Image.src,
      alt: "Học viên trong lớp học tại Crown English",
    },
    {
      image: studentsClassroomsClassroom02Image.src,
      alt: "Học viên trong lớp học tại Crown English",
    },
    {
      image: studentsClassroomsClassroom03Image.src,
      alt: "Học viên trong lớp học tại Crown English",
    },
    {
      image: studentsClassroomsClassroom04Image.src,
      alt: "Học viên trong lớp học tại Crown English",
    },
    {
      image: studentsClassroomsClassroom05Image.src,
      alt: "Học viên trong lớp học tại Crown English",
    },
    {
      image: studentsClassroomsClassroom06Image.src,
      alt: "Học viên trong lớp học tại Crown English",
    },
    {
      image: studentsClassroomsClassroom07Image.src,
      alt: "Học viên trong lớp học tại Crown English",
    },
    {
      image: studentsClassroomsClassroom08Image.src,
      alt: "Học viên trong lớp học tại Crown English",
    },
    {
      image: studentsClassroomsClassroom09Image.src,
      alt: "Học viên trong lớp học tại Crown English",
    },
    {
      image: studentsClassroomsClassroom10Image.src,
      alt: "Học viên trong lớp học tại Crown English",
    },
    {
      image: studentsClassroomsClassroom11Image.src,
      alt: "Học viên trong lớp học tại Crown English",
    },
  ],
} as const satisfies StudentResultsPageData;
