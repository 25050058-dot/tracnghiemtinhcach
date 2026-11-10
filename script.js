const menuToggle = document.querySelector(".menu-toggle");
const primaryMenu = document.querySelector("#primary-menu");

menuToggle?.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  primaryMenu?.classList.toggle("is-open", !isExpanded);
});

const questions = [
  ["Sau một tuần làm việc/học tập căng thẳng, cách bạn nạp lại năng lượng tốt nhất là:", "Tụ tập, đi chơi, trò chuyện cùng nhóm bạn.", "Dành thời gian một mình ở nhà đọc sách, xem phim hoặc nghỉ ngơi.", "EI"],
  ["Trong các sự kiện, buổi tiệc hoặc cuộc họp đông người:", "Bạn dễ dàng bắt chuyện, làm quen với nhiều người mới.", "Bạn chỉ thoải mái trò chuyện với một vài người quen từ trước.", "EI"],
  ["Phong cách làm việc ưa thích của bạn là:", "Thảo luận nhóm, trao đổi ý kiến liên tục để tìm ra giải pháp.", "Độc lập suy nghĩ kỹ lưỡng trước khi chia sẻ ý tưởng với người khác.", "EI"],
  ["Mọi người xung quanh thường nhận xét bạn là người:", "Cởi mở, năng động, dễ gần và nói nhiều.", "Kín đáo, điềm tĩnh, ít chia sẻ đời tư và lắng nghe nhiều hơn.", "EI"],
  ["Khi nảy ra một suy nghĩ hoặc ý tưởng mới:", "Bạn bộc lộ và nói ra ngay lập tức.", "Bạn âm thầm xử lý, suy ngẫm trong đầu trước rồi mới nói ra khi cần.", "EI"],
  ["Khi tiếp nhận một thông tin hoặc vấn đề mới, bạn tập trung hơn vào:", "Chi tiết, số liệu thực tế, thông tin cụ thể hiện có.", "Bức tranh toàn cảnh, ý nghĩa ẩn đằng sau và các khả năng tương lai.", "SN"],
  ["Khi giải quyết công việc, bạn ưu tiên:", "Sử dụng những phương pháp đã có hiệu quả thực tế từ trước.", "Thử nghiệm những ý tưởng mới, cách làm sáng tạo đột phá.", "SN"],
  ["Bạn cảm thấy hứng thú hơn với bài viết hoặc cuộc trò chuyện về:", "Sự thật, con người, sự kiện thực tế diễn ra hàng ngày.", "Lý thuyết, triết lý, khái niệm trừu tượng hoặc viễn cảnh tương lai.", "SN"],
  ["Khi thực hiện một dự án, phong cách của bạn là:", "Làm từng bước theo hướng dẫn chi tiết, thực tế và cụ thể.", "Nắm ý tưởng chung rồi tự linh hoạt liên tưởng cách làm.", "SN"],
  ["Khi kể về một trải nghiệm hoặc chuyến đi:", "Bạn kể chi tiết địa điểm, thời gian, ăn gì, làm gì.", "Bạn kể về cảm giác chung, cảm hứng và những bài học rút ra.", "SN"],
  ["Khi đưa ra một quyết định quan trọng, bạn dựa vào:", "Phân tích logic, tính đúng-sai và sự công bằng khách quan.", "Giá trị cá nhân, cảm xúc và tác động của nó đến người khác.", "TF"],
  ["Trong các cuộc tranh luận hoặc xung đột:", "Bạn tập trung vào sự thật khách quan, bất chấp có thể làm tổn thương người khác.", "Bạn cố gắng duy trì sự hòa khí và quan tâm tới sự tổn thương của đối phương.", "TF"],
  ["Khi thấy đồng nghiệp hoặc bạn bè gặp khó khăn trong công việc:", "Bạn phân tích nguyên nhân và đưa ra lời khuyên/giải pháp thực tế ngay.", "Bạn lắng nghe, an ủi, thấu hiểu và chia sẻ cảm xúc với họ trước.", "TF"],
  ["Điều gì khiến bạn thấy khó chịu hơn?", "Sự thiếu logic, bất hợp lý và quyết định cảm tính.", "Sự vô cảm, thờ ơ và thiếu sự đồng cảm giữa con người.", "TF"],
  ["Bạn mong muốn được người khác ghi nhận vì:", "Năng lực, sự thông minh và kết quả công việc hiệu quả.", "Lòng tốt, sự nhiệt tình và những đóng góp cho tập thể.", "TF"],
  ["Phong cách sống và làm việc hàng ngày của bạn:", "Lên kế hoạch chi tiết, có danh sách việc cần làm (To-do list) và tuân thủ đúng.", "Linh hoạt, tùy cơ ứng biến và xử lý theo tình huống phát sinh.", "JP"],
  ["Khi chuẩn bị cho một chuyến đi du lịch:", "Bạn lên lịch trình chi tiết từ phòng ở, điểm đến cho từng ngày.", "Bạn chỉ đặt vé/phòng cơ bản, còn chơi đâu thì đến nơi mới tính tiếp.", "JP"],
  ["Cảm giác của bạn đối với hạn chót công việc (deadline):", "Bạn hoàn thành sớm để tránh áp lực phút chót.", "Bạn chỉ thật sự có hứng thú và bứt phá làm việc sát giờ hạn chót.", "JP"],
  ["Bạn thích môi trường làm việc như thế nào?", "Trật tự, rõ ràng, có quy trình và định hướng cụ thể.", "Tự do, sáng tạo, không bị gò bó bởi quy tắc cứng nhắc.", "JP"],
  ["Khi công việc hoặc kế hoạch bất ngờ bị thay đổi:", "Bạn cảm thấy bực bội, khó chịu vì bị vỡ kế hoạch ban đầu.", "Bạn dễ dàng thích nghi và coi đó là trải nghiệm mới thú vị.", "JP"],
  ["Khi đứng trước một tranh chấp tài chính hay công việc:", "Bạn căn cứ tuyệt đối vào luật lệ, hợp đồng và nguyên tắc.", "Bạn cân nhắc hoàn cảnh thực tế và tình cảm của các bên liên quan.", "TF"],
  ["Phong cách sống và làm việc hàng ngày của bạn:", "Lên kế hoạch chi tiết, có danh sách việc cần làm (To-do list) và tuân thủ đúng.", "Linh hoạt, tùy cơ ứng biến và xử lý theo tình huống phát sinh.", "JP"],
  ["Khi chuẩn bị cho một chuyến đi du lịch:", "Bạn lên lịch trình chi tiết từ phòng ở, điểm đến cho từng ngày.", "Bạn chỉ đặt vé/phòng cơ bản, còn chơi đâu thì đến nơi mới tính tiếp.", "JP"],
  ["Cảm giác của bạn đối với hạn chót công việc (deadline):", "Bạn hoàn thành sớm để tránh áp lực phút chót.", "Bạn chỉ thật sự có hứng thú và bứt phá làm việc sát giờ hạn chót.", "JP"],
  ["Bạn thích môi trường làm việc như thế nào?", "Trật tự, rõ ràng, có quy trình và định hướng cụ thể.", "Tự do, sáng tạo, không bị gò bó bởi quy tắc cứng nhắc.", "JP"],
  ["Khi công việc hoặc kế hoạch bất ngờ bị thay đổi:", "Bạn cảm thấy bực bội, khó chịu vì bị vỡ kế hoạch ban đầu.", "Bạn dễ dàng thích nghi và coi đó là trải nghiệm mới thú vị.", "JP"],
  ["Không gian sống và làm việc cá nhân của bạn thường:", "Gọn gàng, ngăn nắp, mọi thứ đều ở đúng vị trí cố định.", "Đôi lúc bừa bộn một chút nhưng bạn vẫn biết mọi thứ ở đâu.", "JP"],
  ["Khi làm việc nhóm, bạn muốn:", "Phân công nhiệm vụ rõ ràng và chốt thời hạn cụ thể ngay từ đầu.", "Giữ mọi lựa chọn mở và điều chỉnh công việc linh hoạt theo tiến độ.", "JP"],
  ["Trước khi đưa ra một quyết định mua sắm lớn:", "Bạn chốt quyết định nhanh chóng sau khi đã chọn đúng tiêu chí.", "Bạn tiếp tục tìm kiếm thêm thông tin và do dự trước khi quyết định.", "JP"],
  ["Bạn tự đánh giá mình là người:", "Kỷ luật, đúng giờ và luôn giữ lời hứa theo kế hoạch.", "Tự do, bộc phát và thích tùy hứng trong công việc lẫn cuộc sống.", "JP"],
];

const typeDetails = {
  INTJ: { name: "Nhà chiến lược", group: "Nhà phân tích (Analysts)", description: "Độc lập, có tầm nhìn, thích tư duy dài hạn và xây dựng hệ thống rõ ràng." },
  INTP: { name: "Nhà phân tích", group: "Nhà phân tích (Analysts)", description: "Tò mò, logic, thích khám phá ý tưởng và đặt câu hỏi sâu." },
  ENTJ: { name: "Nhà lãnh đạo", group: "Nhà phân tích (Analysts)", description: "Quyết đoán, định hướng mục tiêu, mạnh về tổ chức và dẫn dắt." },
  ENTP: { name: "Nhà khai phá", group: "Nhà phân tích (Analysts)", description: "Nhanh trí, linh hoạt, thích đổi mới và nhìn ra khả năng mới." },
  INFJ: { name: "Người bảo vệ", group: "Người ngoại giao (Diplomats)", description: "Đồng cảm, sâu sắc, định hướng giá trị và xây dựng kết nối có ý nghĩa." },
  INFP: { name: "Người hòa giải", group: "Người ngoại giao (Diplomats)", description: "Nhạy cảm, tinh tế, giàu trí tưởng tượng và trung thành với lý tưởng sống." },
  ENFJ: { name: "Người chỉ dạy", group: "Người ngoại giao (Diplomats)", description: "Nhiệt huyết, tốt bụng, mạnh về định hướng con người và truyền cảm hứng." },
  ENFP: { name: "Người truyền cảm hứng", group: "Người ngoại giao (Diplomats)", description: "Sáng tạo, linh hoạt, tràn đầy năng lượng tích cực và thích khám phá ý tưởng." },
  ISTJ: { name: "Người nguyên tắc", group: "Người trông nom (Sentinels)", description: "Trách nhiệm, nguyên tắc, coi trọng trật tự, ổn định và quy trình rõ ràng." },
  ISFJ: { name: "Người nuôi dưỡng", group: "Người trông nom (Sentinels)", description: "Tận tụy, chu đáo, thấu hiểu nhu cầu người khác và sẵn sàng hỗ trợ." },
  ESTJ: { name: "Người quản lý", group: "Người trông nom (Sentinels)", description: "Nguyên tắc, quyết đoán, giỏi tổ chức, điều hành và duy trì kỷ luật." },
  ESFJ: { name: "Người quan tâm", group: "Người trông nom (Sentinels)", description: "Thân thiện, chu đáo, giàu tình cảm và luôn kết nối mọi người." },
  ISTP: { name: "Nhà kỹ thuật", group: "Người thám hiểm (Explorers)", description: "Thực tế, linh hoạt, giỏi giải quyết vấn đề và thích phân tích cơ chế." },
  ISFP: { name: "Nghệ sĩ", group: "Người thám hiểm (Explorers)", description: "Nhẹ nhàng, tinh tế, cảm nhận tốt cái đẹp và sống trọn vẹn ở hiện tại." },
  ESTP: { name: "Người thực thi", group: "Người thám hiểm (Explorers)", description: "Năng động, nhạy bén, thích hành động thực tế và chinh phục thử thách." },
  ESFP: { name: "Người trình diễn", group: "Người thám hiểm (Explorers)", description: "Vui vẻ, bộc phát, giàu năng lượng và lan tỏa niềm vui tới mọi người." },
};

const axisOptions = {
  EI: ["E", "I"],
  SN: ["S", "N"],
  TF: ["T", "F"],
  JP: ["J", "P"],
};

const quizMain = document.querySelector("[data-quiz-level]");
const questionList = document.querySelector("[data-question-list]");
const questionNavigator = document.querySelector("[data-question-navigator]");

if (quizMain && questionList && questionNavigator) {
  const level = Number(quizMain.dataset.quizLevel);
  const selectedQuestions = questions.slice(0, level);

  questionList.innerHTML = selectedQuestions.map(([prompt, optionA, optionB], index) => {
    const number = index + 1;
    return `
      <article class="question-card" id="question-${number}" data-question="${number}">
        <div class="question-card-top"><span class="question-label">Câu hỏi ${number}</span></div>
        <h${number === 1 ? "1" : "2"}>${prompt}</h${number === 1 ? "1" : "2"}>
        <div class="answer-options">
          <label class="answer-option"><input type="radio" name="question-${number}" value="A" /><span class="answer-letter">A.</span><span>${optionA}</span></label>
          <label class="answer-option"><input type="radio" name="question-${number}" value="B" /><span class="answer-letter">B.</span><span>${optionB}</span></label>
        </div>
      </article>`;
  }).join("");

  questionNavigator.innerHTML = selectedQuestions.map((_, index) =>
    `<button type="button" class="question-number${index === 0 ? " current" : ""}" data-go-question="${index + 1}" aria-label="Đi đến câu ${index + 1}">${index + 1}</button>`,
  ).join("");

  const quizCards = [...questionList.querySelectorAll("[data-question]")];
  const questionButtons = [...questionNavigator.querySelectorAll("[data-go-question]")];
  const answeredCount = document.querySelector("[data-answered-count]");
  const submitButton = document.querySelector("[data-submit-quiz]");
  const dialog = document.querySelector("[data-quiz-dialog]");
  const dialogTitle = document.querySelector("#dialog-title");
  const dialogMessage = document.querySelector("[data-dialog-message]");
  const dialogConfirm = document.querySelector("[data-dialog-confirm]");
  const dialogCancel = document.querySelector("[data-dialog-cancel]");
  let activeQuestion = 1;
  let saveFailed = false;

  const answeredQuestions = () => quizCards.filter((card) =>
    card.querySelector('input[type="radio"]:checked'),
  );

  const updateProgress = () => {
    const answeredIds = new Set(answeredQuestions().map((card) => card.dataset.question));
    answeredCount.textContent = String(answeredIds.size);

    questionButtons.forEach((button) => {
      const questionId = button.dataset.goQuestion;
      const isAnswered = answeredIds.has(questionId);
      const isCurrent = Number(questionId) === activeQuestion;
      button.classList.toggle("answered", isAnswered);
      button.classList.toggle("current", isCurrent);
      button.setAttribute(
        "aria-label",
        `Câu ${questionId}, ${isAnswered ? "đã trả lời" : "chưa trả lời"}${isCurrent ? ", đang xem" : ""}`,
      );
    });
  };

  const submitAnswers = () => {
    const answers = Object.fromEntries(quizCards.map((card, index) => {
      const choice = card.querySelector('input[type="radio"]:checked');
      return [String(index + 1), choice?.value ?? null];
    }));

    try {
      localStorage.setItem("mbtiQuizResult", JSON.stringify({
        level,
        answers,
        submittedAt: new Date().toISOString(),
      }));
      window.location.href = "ketqua.html";
    } catch (error) {
      saveFailed = true;
      dialogTitle.textContent = "Không thể lưu kết quả";
      dialogMessage.textContent = "Trình duyệt không cho phép lưu câu trả lời. Hãy bật bộ nhớ trang web rồi thử nộp lại.";
      dialogCancel.hidden = true;
      dialogConfirm.textContent = "Đóng";
      dialog.showModal();
      console.error("Could not save MBTI quiz result.", error);
    }
  };

  quizCards.forEach((card) => card.addEventListener("change", updateProgress));

  questionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeQuestion = Number(button.dataset.goQuestion);
      document.querySelector(`#question-${activeQuestion}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      updateProgress();
    });
  });

  submitButton.addEventListener("click", () => {
    const unanswered = level - answeredQuestions().length;
    if (unanswered > 0) {
      dialogTitle.textContent = "Chưa hoàn thành bài làm";
      dialogMessage.textContent = `Bạn còn ${unanswered} câu chưa trả lời. Bạn có muốn tiếp tục làm bài hay vẫn nộp?`;
      dialogCancel.hidden = false;
      dialogConfirm.textContent = "Vẫn nộp bài";
      dialog.showModal();
      return;
    }

    submitAnswers();
  });

  dialogCancel.addEventListener("click", () => dialog.close());
  dialogConfirm.addEventListener("click", () => {
    if (saveFailed) {
      dialog.close();
      return;
    }

    submitAnswers();
  });

  if ("IntersectionObserver" in window) {
    quizCards.forEach((card) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          activeQuestion = Number(card.dataset.question);
          updateProgress();
        }
      }, { threshold: 0.55 });
      observer.observe(card);
    });
  }

  updateProgress();
}

const resultRoot = document.querySelector("[data-result]");

if (resultRoot) {
  const typeElement = document.querySelector("[data-result-type]");
  const nameElement = document.querySelector("[data-result-name]");
  const groupElement = document.querySelector("[data-result-group]");
  const descriptionElement = document.querySelector("[data-result-description]");
  const progressElement = document.querySelector("[data-result-progress]");
  const balanceElement = document.querySelector("[data-result-balance]");

  try {
    const savedResult = JSON.parse(localStorage.getItem("mbtiQuizResult") ?? "null");
    if (!savedResult || !savedResult.answers || ![10, 20, 30].includes(savedResult.level)) {
      throw new Error("No valid MBTI quiz result was found.");
    }

    const totals = Object.fromEntries(Object.keys(axisOptions).map((axis) => [
      axis,
      Object.fromEntries(axisOptions[axis].map((letter) => [letter, 0])),
    ]));
    const lastChoice = {};
    let answered = 0;

    for (const [questionNumber, choice] of Object.entries(savedResult.answers)) {
      if (choice !== "A" && choice !== "B") continue;
      const axis = questions[Number(questionNumber) - 1]?.[3];
      if (!axis || !totals[axis]) continue;
      const letter = axisOptions[axis][choice === "A" ? 0 : 1];
      totals[axis][letter] += 1;
      lastChoice[axis] = letter;
      answered += 1;
    }

    const letters = Object.keys(axisOptions).map((axis) => {
      const [first, second] = axisOptions[axis];
      const firstTotal = totals[axis][first];
      const secondTotal = totals[axis][second];
      if (firstTotal === 0 && secondTotal === 0) return "?";
      if (firstTotal === secondTotal) return lastChoice[axis];
      return firstTotal > secondTotal ? first : second;
    });
    const type = letters.join("");
    const details = typeDetails[type];

    typeElement.textContent = type;
    nameElement.textContent = details?.name ?? "Kết quả chưa đầy đủ";
    groupElement.textContent = details?.group ?? "Chưa đủ câu trả lời để xác định nhóm tính cách";
    descriptionElement.textContent = details?.description
      ?? "Một hoặc nhiều trục tính cách chưa có câu trả lời. Hãy làm lại bài test và trả lời đủ câu để nhận kết quả MBTI.";
    progressElement.textContent = `Đã trả lời ${answered}/${savedResult.level} câu hỏi.`;
    balanceElement.textContent = letters.includes("?")
      ? "Trục có dấu “?” chưa có dữ liệu để kết luận."
      : "Kết quả được xác định theo lựa chọn chiếm đa số ở từng cặp tính cách. Khi một cặp cân bằng, câu trả lời sau cùng trong cặp đó được dùng để phân định.";
  } catch (error) {
    typeElement.textContent = "--";
    nameElement.textContent = "Chưa có kết quả";
    groupElement.textContent = "Hãy hoàn thành bài trắc nghiệm trước";
    descriptionElement.textContent = "Không tìm thấy câu trả lời đã lưu trên trình duyệt này. Bắt đầu một bài test để xem kết quả MBTI của bạn.";
    progressElement.textContent = "";
    balanceElement.textContent = "";
    console.error("Could not load MBTI quiz result.", error);
  }
}
