import localQA1Image from "../../public/images/Q&A/faq-hoc-voi-ms-khanh.jpg";
import localQA2Image from "../../public/images/Q&A/faq-khong-the-theo-hoc-hoan-hoc-phi.jpg";
import localQA3Image from "../../public/images/Q&A/faq-dong-hoc-phi-theo-khoa.jpg";
import localQA4Image from "../../public/images/Q&A/faq-cham-soc-hoc-vien-va-cham-bai.jpg";
import localQA5Image from "../../public/images/Q&A/faq-so-giao-vien-trong-mot-khoa.jpg";
import localQA6Image from "../../public/images/Q&A/faq-hoat-dong-nhom-trong-lop.jpg";
import localQA7Image from "../../public/images/Q&A/faq-cam-ket-6-0-6-5-va-aim-7-0.jpg";
import localQA9Image from "../../public/images/Q&A/faq-uu-dai-khi-dang-ki-nhieu-khoa.jpg";
import localQA10Image from "../../public/images/Q&A/faq-lop-cap-toc-day-nhanh-thoi-gian.jpg";
import localQA11Image from "../../public/images/Q&A/faq-dong-hoc-phi-theo-thang-hay-khoa.jpg";
import localQA12Image from "../../public/images/Q&A/faq-phi-hoc-thu-co-hoan-lai-khong.jpg";
import localQA13Image from "../../public/images/Q&A/faq-hoc-online-hoc-phi-co-thap-hon-offline.jpg";
import localQA14Image from "../../public/images/Q&A/faq-vao-sau-lop-hoc-phi-nhu-the-nao.jpg";
import localQA15Image from "../../public/images/Q&A/faq-writing-lop-advance-day-nhu-nao.jpg";
import localQA16Image from "../../public/images/Q&A/faq-co-day-online-khong.jpg";
import localQA17Image from "../../public/images/Q&A/faq-lo-trinh-mat-goc-den-6-5.jpg";
import localQA18Image from "../../public/images/Q&A/faq-cam-ket-dau-ra.jpg";
import localQA19Image from "../../public/images/Q&A/faq-vi-sao-hoc-phi-re-hon-trung-tam-khac.jpg";
export const faqsPageData = {
  seo: {
    title: "Câu hỏi thường gặp về khóa học | Crown English",

    description:
      "Giải đáp các câu hỏi thường gặp về khóa học, học phí, lộ trình, giảng viên, học online, IELTS và Tiếng Anh giao tiếp tại Crown English.",

    h1: "Câu hỏi thường gặp tại Crown English",

    canonical: "/cau-hoi-thuong-gap",

    searchIntent:
      "Giải đáp thắc mắc về khóa học, học phí, lộ trình và chính sách tại Crown English trước khi đăng ký",

    primaryTopic: "câu hỏi thường gặp Crown English",

    secondaryTopics: [
      "học phí Crown English",
      "lộ trình học Crown English",
      "giảng viên Crown English",
      "học online Crown English",
      "chính sách học tại Crown English",
      "IELTS hay Tiếng Anh giao tiếp",
    ],

    localSignals: [],

    schemaTypes: ["FAQPage"],

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: "Câu hỏi thường gặp về khóa học | Crown English",

      description:
        "Giải đáp về khóa học, học phí, lộ trình, giảng viên và các chính sách học tập tại Crown English.",

      image: "",
    },
  },

  hero: {
    title: "Câu hỏi thường gặp",
    description: "",
  },

  qaImageAudit: {
    imageDirectory: "public/images/Q&A",
    totalImages: 19,
    processedImages: 19,
    extractedFaqs: 18,
    skippedImages: [
      {
        file: "faq-ms-khanh-faq-cover.jpg",
        status: "SKIPPED_NON_QA",
        reason: "Ảnh bìa/chủ đề, không có cặp câu hỏi và câu trả lời.",
      },
    ],
    duplicates: [],
    needsReview: [
      {
        file: "faq-cam-ket-6-0-6-5-va-aim-7-0.jpg",
        reason:
          "Câu trả lời trong ảnh kết thúc bằng dấu phẩy, có thể thiếu phần sau.",
      },
      {
        file: "faq-lo-trinh-mat-goc-den-6-5.jpg",
        reason:
          "Cụm mở đầu trong ảnh giống 'Từ level em-6.5+'; giữ nguyên nhưng cần rà lại với nguồn gốc.",
      },
      {
        file: "faq-cam-ket-dau-ra.jpg",
        reason:
          "Nội dung về cam kết đầu ra có thể chưa thống nhất với QA7 nên cần chốt lại wording.",
      },
    ],
    conflicts: [
      {
        files: ["faq-cam-ket-6-0-6-5-va-aim-7-0.jpg", "faq-cam-ket-dau-ra.jpg"],
        reason:
          "QA7 nói chỉ cam kết đầu ra 6.0-6.5, còn QA18 nói không truyền thông cam kết đầu ra.",
      },
    ],
  },

  items: [
    {
      id: "giao-tiep-hay-ielts-toeic",
      question:
        "Em đang phân vân giữa việc học Tiếng Anh Giao Tiếp hay Luyện thi IELTS/TOEIC. Crown English có lời khuyên nào cho em không?",
      answer: [
        "Việc lựa chọn giữa Tiếng Anh Giao Tiếp và Chứng chỉ Học thuật (IELTS/TOEIC) phụ thuộc rất lớn vào mục tiêu đầu ra và thời gian đầu tư của bạn. Mỗi chương trình đòi hỏi định hướng, phương pháp tiếp cận và mức độ cam kết khác nhau:",
        "1. Tiếng Anh Giao Tiếp Thực Chiến (Focus: Listening & Speaking)",
        '- Đặc điểm: Tập trung 100% vào phản xạ Nghe - Nói chủ động thông qua các chủ đề đời sống, công việc và thảo luận/tranh luận (Debate). Môi trường hoàn toàn bằng Tiếng Anh giúp tạo hiệu ứng "tắm ngôn ngữ" ngay tại lớp.',
        "- Ưu điểm: Phương pháp thực tế, áp dụng được ngay, giảm tối đa áp lực học tập và xây dựng sự tự tin nhanh chóng.",
        "- Phù hợp với bạn khi: Bạn cần sử dụng tiếng Anh ngay trong công việc/cuộc sống hằng ngày, muốn giao tiếp tự nhiên và chưa có kế hoạch thi lấy chứng chỉ gấp.",
        "2. Luyện Thi Chứng Chỉ Học Thuật – IELTS / TOEIC (Focus: 4 Kỹ Năng Học Thuật)",
        "- Đặc điểm: Nghiên cứu ngôn ngữ chuyên sâu, phát triển tư duy phản biện và kỹ năng viết luận học thuật.",
        "- Ưu điểm: Giúp cải thiện toàn diện và bền vững cả 4 kỹ năng (Nghe - Nói - Đọc - Viết), tạo nền tảng vững chắc cho việc học tập/làm việc trong môi trường quốc tế.",
        "- Thách thức: Yêu cầu lộ trình dài hạn (thường từ 6 tháng đến trên 1 năm), đòi hỏi sự kiên trì, nỗ lực và mục tiêu đầu ra rõ ràng để duy trì động lực.",
        "LỜI KHUYÊN TỪ CROWN ENGLISH:",
        "● Nếu bạn chưa có nhu cầu lấy chứng chỉ gấp: Lựa chọn tối ưu là bắt đầu với khóa Giao tiếp thực chiến để xây dựng nền tảng phản xạ tự nhiên và cảm hứng ngôn ngữ. Khi phản xạ đã vững vàng, việc chuyển tiếp sang luyện thi IELTS sẽ trở nên nhẹ nhàng và hiệu quả hơn rất nhiều.",
        "● Nếu bạn muốn phát triển toàn diện hoặc có mục tiêu du học, xét tuyển, thăng tiến: Hãy bắt đầu lộ trình IELTS ngay từ bây giờ để tối ưu hóa thời gian và nhận được sự bảo chứng chất lượng đầu ra tốt nhất.",
        "Đội ngũ cố vấn tại Crown English luôn sẵn sàng đánh giá trình độ miễn phí và tư vấn lộ trình cá nhân hóa giúp bạn tiết kiệm tối đa thời gian và chi phí.",
      ],
    },
    {
      id: "qa-01-hoc-voi-ms-khanh",
      category: "teachers",
      speaker: "Ms. Khanh",
      sourceImage: localQA1Image.src,
      question: "Em đăng kí có được học với chị không",
      answer: [
        "Hầu hết các lớp chị đứng nè, nhưng có những lớp/levels có giáo viên của chị đứng lớp nữa. Các anh chị đều đã được chị training kỹ lưỡng, đảm bảo giảng dạy đúng văn hoá học viên, theo lộ trình chuẩn chung, và đồng bộ về phương pháp. Đội ngũ giáo viên đều đạt IELTS 7.5-8.0, hiện đang giảng dạy full-time tại trung tâm, nên em yên tâm về chất lượng chuyên môn cũng như sự tận tâm trong việc theo sát và chăm lo cho học viên nè.",
      ],
    },
    {
      id: "qa-02-khong-the-theo-hoc-hoan-hoc-phi",
      category: "refund-policy",
      speaker: "Ms. Khanh",
      sourceImage: localQA2Image.src,
      question:
        "Sau này em bận em không theo học nữa, chị có hoàn học phí không",
      answer: [
        "Chị cũng rất buồn vì học viên vì bất kì lý do nào không thể theo học được em nè. Tuy nhiên, khi em đã đóng học phí thì em chính thức trở thành học viên của lớp/khóa mà em đã đăng ký, và hiện tại bên chị chưa có chính sách hoàn học phí. Dù vậy, chị luôn cố gắng hỗ trợ tối đa cho học viên. Trong trường hợp này, bên chị sẽ hỗ trợ em bảo lưu và đóng băng học phí, để khi em ổn định lại, em có thể quay lại học bất cứ lúc nào, và không có thời hạn. Ngoài ra, em cũng có thể chuyển học phí cho bạn bè hoặc người thân học tiếp khóa đó, với điều kiện là đúng level phù hợp với chương trình đã đăng ký nha em. Chị mong em hiểu là mọi chính sách đều hướng đến việc bảo vệ quyền lợi học viên lâu dài, và chị luôn sẵn sàng đồng hành, hỗ trợ học viên nè.",
      ],
    },
    {
      id: "qa-03-dong-hoc-phi-theo-khoa",
      category: "tuition",
      speaker: "Ms. Khanh",
      sourceImage: localQA3Image.src,
      question: "Bên chị đóng học phí theo khoá hả?",
      answer: [
        "Đúng rồi em nè, bên chị đóng học phí theo khoá nhen. Việc đóng theo khoá bên chị chỉ thu theo 3 tháng/lần or khoá nhỏ, không thu theo khoá lớn. Và vì chỉ 1 tháng bên chị rất tối ưu với mình rồi em nè, nên là tụi chị chỉ đóng theo khoá. Và chị cũng hi vọng rằng khi tụi em quyết định đăng kí học, ít nhất phải 1-3 khoá IELTS mới ra được outcomes và đầu ra mong muốn, đó là lý do tại sao chị khuyến khích học viên đóng theo khoá đó, để tụi em có động lực theo chị đến cuối hành trình và sự kỉ luật khuôn khổ để em thấy được đầu ra sau này. Khi có đầu ra em lại có niềm tin về bản thân và sự tự tin để tiếp tục chinh chiến tiếp em nè.",
      ],
    },
    {
      id: "qa-04-cham-soc-hoc-vien-va-cham-bai",
      category: "student-support",
      speaker: "Ms. Khanh",
      sourceImage: localQA4Image.src,
      question: "Bên mình quy trình chăm sóc học viên và chấm bài như thế nào?",
      answer: [
        "Bên chị sẽ có lịch chăm sóc và hỏi thăm học viên liên tục đó em nè, trải nghiệm học viên là sự ưu tiên mà chị luôn hướng đến nên em yên tâm nè, lớp chị rất chú trọng phần này. Bài tập bên chị sẽ có trên drive và được chấm chữa bài thông qua team trợ giảng. Các anh chị là team nội bộ được training như quy trình giảng dạy, và chỉ làm công việc độc lập - chấm và chữa bài, feedback bài cho học viên, sau đó giáo viên và chị sẽ double-check lại bước hai. Việc phân chia team rõ ràng sẽ giúp quy trình liền mạch và các em sẽ được chăm sóc liên tục mà không bị bỏ rơi đằng sau nhen.",
      ],
    },
    {
      id: "qa-05-so-giao-vien-trong-mot-khoa",
      category: "teachers",
      speaker: "Ms. Khanh",
      sourceImage: localQA5Image.src,
      question: "Một khoá sẽ có mấy giáo viên, có bị đổi giáo viên không?",
      answer: [
        "Em yên tâm bên chị sẽ không có đổi giáo viên hay sẽ có sự thay đổi đột ngột gây cản trở trải nghiệm học của em nè (trừ trường hợp ngoại lệ), một lớp sẽ có hai giáo viên dạy và đồng hành em đến cuối chặng em hen. Việc 1 lớp hai giáo viên rất lợi, vì mỗi giáo viên sẽ có thế mạnh và dạy kĩ năng các anh/chị tự tin nhất, và việc phân chia 2 giáo viên/một lớp sẽ đỡ gánh nặng, tránh trường hợp các anh chị giáo viên sẽ ưu thích dạy skills 'dễ' hơn, và dạy lệch kĩ năng kia, sau này sẽ không tốt cho hành trình đạt aim em nè.",
      ],
    },
    {
      id: "qa-06-hoat-dong-nhom-trong-lop",
      category: "learning-method",
      speaker: "Ms. Khanh",
      sourceImage: localQA6Image.src,
      question: "Bên mình có hoạt động nhóm trong lớp không?",
      answer: [
        "Chị chia sẻ thực luôn là bên chị không lồng ghép hoạt động vào giờ dạy nhen. Vì bản chất tụi em học IELTS nên bộ môn này cần mình phải self-practice liên tục và chấm chữa bài solo, tức giáo viên phải cá nhân hoá bài chữa cho em. Việc lồng hoạt động vào giờ học chỉ có lớp giao tiếp, giúp em kích thích nói và môi trường để tương tác với nhau. Còn IELTS mình sẽ tập trung phương pháp học thuật nặng và làm bài tập liên tục. Cả hai platforms bên chị đều sử dụng ứng dụng DOC để tụi em làm và được chấm chữa feedback trong lớp luôn em nha.",
      ],
    },
    {
      id: "qa-07-cam-ket-6-0-6-5-va-aim-7-0",
      category: "commitment",
      speaker: "Ms. Khanh",
      sourceImage: localQA7Image.src,
      needsReview: true,
      reviewNote:
        "Câu trả lời trong ảnh kết thúc bằng dấu phẩy, có thể thiếu phần sau.",
      conflictsWith: ["qa-18-cam-ket-dau-ra"],
      question: "chị chỉ cam kết 6.0-6.5 thôi hả? em muốn đạt 7.0 thì sao ạ?",
      answer: [
        "Chị có khoá Intensive - level luyện thi chuyên sâu, được thiết kế để giúp học viên tập trung tối đa và hệ thống hóa toàn bộ kiến thức IELTS. Tuy nhiên, bên chị chỉ cam kết đầu ra 6.0 - 6.5 vì đây là mức điểm mà hầu hết học viên có thể đạt được nếu áp dụng đúng phương pháp học và kiến thức đã được giảng dạy trong khóa. Để đạt 7.0 hoặc cao hơn, Khóa intensive sẽ trang bị nền tảng vững chắc và kỹ thuật làm bài, nhưng để vươn lên 7.0+, học viên cần đầu tư thêm thời gian và nỗ lực cá nhân. Đây cũng là lý do tại sao bên chị chỉ cam kết 6.0 - 6.5,",
      ],
    },
    {
      id: "qa-09-uu-dai-khi-dang-ki-nhieu-khoa",
      category: "promotion",
      speaker: "Ms. Khanh",
      sourceImage: localQA9Image.src,
      question:
        "Em đăng kí 2 khóa trở lên thì mình có ưu đãi gì không chị ha ?",
      answer: [
        "Có chứ em nè, đặc biệt lớp kèm, hay lớp Premium, bên chị đều hỗ trợ và ưu đãi cho em hết nhen ^^",
      ],
    },
    {
      id: "qa-10-lop-cap-toc-day-nhanh-thoi-gian",
      category: "ielts-one-to-one",
      speaker: "Ms. Khanh",
      sourceImage: localQA10Image.src,
      question:
        "Bên chị có lớp nào cấp tốc đẩy nhanh thời gian học không ha chị ?",
      answer: [
        "Chị có em nè, nếu em muốn học cấp tốc thì chị có lớp kèm 1:1 nè, Lớp kèm giáo viên sẽ theo sát level của học viên, soạn giáo án và lộ trình cá nhân hóa để học viên đạt đầu ra sớm nhất, lộ trình lớp kèm thì sẽ rút ngắn và nhanh hơn lớp nhóm đồng tuỳ vào level input của em nha.",
      ],
    },
    {
      id: "qa-11-dong-hoc-phi-theo-thang-hay-khoa",
      category: "tuition",
      speaker: "Ms. Khanh",
      sourceImage: localQA11Image.src,
      question: "Học phí bên mình đóng theo tháng hay theo khoá đó chị ?",
      answer: [
        "Do học phí bên chị đã rẻ hơn rất nhiều trung tâm rồi ý nên em cố gắng đóng theo khoá luôn để cho tiết kiệm và cũng có động lực học em ha. Chứ nếu em đóng theo từng tháng thì chị tính phí chênh lệch nè, còn theo khóa tính ra là 800k/tháng thôi em nè.",
      ],
    },
    {
      id: "qa-12-phi-hoc-thu-co-hoan-lai-khong",
      category: "trial-class",
      speaker: "Ms. Khanh",
      sourceImage: localQA12Image.src,
      question:
        "Chị ơi phí học thử buổi đầu nếu em không theo lớp thì có được hoàn lại không ạ?",
      answer: [
        "Buổi học thử em sẽ nhận đầy đủ giáo trình và nắm được phương pháp dạy bên chị nè. Đây sẽ là phí học thử & giáo trình không hoàn lại được em nhen. Trộm vía, hầu hết các bạn học thử đều tiếp tục theo lớp, chỉ có một vài trường hợp cần điều chỉnh lớp thôi nè.",
      ],
    },
    {
      id: "qa-13-hoc-online-hoc-phi-co-thap-hon-offline",
      category: "online-learning",
      speaker: "Ms. Khanh",
      sourceImage: localQA13Image.src,
      question: "Học online học phí có thấp hơn học offline không chị?",
      answer: [
        "Bản chất học online bên chị chỉ khác nhau về hình thức thôi nè, quy trình học, benefits, đảm bảo đầu ra và tất tần tật đều giống offline cả. Cho nên chất lượng tương đương nhau hen, em yên tâm sẽ được chăm sóc rất kĩ nè.",
      ],
    },
    {
      id: "qa-14-vao-sau-lop-hoc-phi-nhu-the-nao",
      category: "tuition",
      speaker: "Ms. Khanh",
      sourceImage: localQA14Image.src,
      question: "Chị ơi, em vào sau lớp thì học phí như thế nào ạ?",
      answer: [
        "Em đừng lo nha, nếu em vào sau thì học phí chỉ tính từ buổi học thử + 24 buổi của khoá đó, nên không lo bị thiệt đâu em nhen, chị cũng bù buổi em miss với lớp mới và cả record cho em nữa nè.",
      ],
    },
    {
      id: "qa-15-writing-lop-advance-day-nhu-nao",
      category: "ielts-writing",
      speaker: "Ms. Khanh",
      sourceImage: localQA15Image.src,
      question:
        "Đối với kĩ năng Writing ở lớp Advance thì chị dạy như nào vậy ạ ??",
      answer: [
        "Writing ở Lớp Advance mình học full writing task 1 và tasks 2. Ở lớp Advance chị không dạy và xẻ nhỏ từng phần như Newbie á, nhưng chị vẫn đi lại lý thuyết kĩ và bày em ráp những CỤM từ vựng band cao vào writing task, Task 2 viết luận thì paraphrase và phát triển ý tưởng em sâu hơn, có thể viết được đoạn văn dài và dùng nhiều câu phức hen. xong hết rồi tụi mình sẽ practice thực hành ngay tại lớp, chị sẽ chấm bài cho TỪNG BẠN Luôn ha, trực tiếp tại lớp luôn để em hiểu em sai cái gì, e yếu chỗ nào và vidu của giáo viên cho em dễ hiểu nhen.",
      ],
    },
    {
      id: "qa-16-co-day-online-khong",
      category: "online-learning",
      speaker: "Ms. Khanh",
      sourceImage: localQA16Image.src,
      question:
        "Chị ơi, em ở xa quá, không biết là bên mình có nhận dạy online không ạ ???",
      answer: [
        "Bên chị dạy theo mô hình Hybrid online offline kết hợp nè. Nếu em học online thì khi chị gọi tương tác trong lớp em phải mở mic nè, với lại cần tập trung hơn nữa nha. Còn lại thì kiến thức đều như nhau ấy. Em yên tâm là giáo viên vẫn đảm bảo follow cả các bạn online và offline nè.",
      ],
    },
    {
      id: "qa-17-lo-trinh-mat-goc-den-6-5",
      category: "ielts-roadmap",
      speaker: "Ms. Khanh",
      sourceImage: localQA17Image.src,
      needsReview: true,
      reviewNote:
        "Cụm mở đầu trong ảnh giống 'Từ level em-6.5+'; giữ nguyên để tránh tự sửa nguồn.",
      question:
        "Nếu em học lại từ mất gốc thì học trong bao lâu để đạt aim 6.5 ạ chị ?",
      answer: [
        "Từ level em-6.5+ em sẽ học qua 3 khoá lớp tiêu chuẩn trong vòng 10 tháng nè",
        "Lớp Foundation (0-3.5+) - lớp nền tảng (3 tháng) - 24b",
        "Lớp Newbie (3.5-5.0+) - nhập môn IELTS (3 tháng) - 24b",
        "Lớp Advance (5.0-6.5+) - lớp luyện đề (4 tháng) - 32b",
      ],
    },
    {
      id: "qa-18-cam-ket-dau-ra",
      category: "commitment",
      speaker: "Ms. Khanh",
      sourceImage: localQA18Image.src,
      needsReview: true,
      reviewNote:
        "Nội dung có thể chưa thống nhất với QA7 về cách truyền thông cam kết đầu ra.",
      conflictsWith: ["qa-07-cam-ket-6-0-6-5-va-aim-7-0"],
      question: "Bên chị có cam kết đầu ra không ?",
      answer: [
        "Bên chị không truyền thông cam kết đầu ra vì kết quả thi phụ thuộc vào nhiều yếu tố, bao gồm cả giáo viên và học viên. Chị chỉ cam kết về nội dung giảng dạy, chính sách và sự tận tụy của thầy cô. Tuy nhiên, chị chưa thấy học viên nào chăm chỉ, học đầy đủ và theo lộ trình mà không đạt aim. Các em cứ tự tin học nghiêm túc, tương tác với thầy cô để đạt mục tiêu. Nếu có trục trặc, chị sẽ sắp xếp học lại miễn phí để đạt kết quả nhaa.",
      ],
    },
    {
      id: "qa-19-vi-sao-hoc-phi-re-hon-trung-tam-khac",
      category: "tuition",
      speaker: "Ms. Khanh",
      sourceImage: localQA19Image.src,
      question:
        "Vì sao học phí bên chị giá lại rẻ hơn các trung tâm ở ngoài nhiều vậy ạ?",
      answer: [
        "Bên chị giá như vậy là hợp lý chứ không phải giá rẻ do chị không chạy quảng cáo rầm rộ làm cho học phí của em bị độn lên. Bên cạnh đó chị cần đầu ra của mọi người hơn và hầu hết các bạn đến học bên chị đều được giới thiệu mà đến nên chất lượng được đảm bảo nha. Các học viên bên chị chủ yếu là sinh viên và người đi làm, bây giờ kinh tế đang đi xuống mà thu học phí đắt thì sẽ khó cho mọi người nè. Chị hỗ trợ cho mọi người học phí tối ưu nhất nè.",
      ],
    },
  ],
} as const;
