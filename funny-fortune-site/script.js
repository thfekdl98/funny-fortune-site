const fortunes = [
    "오늘은 엘리베이터 버튼을 누르자마자 문이 열릴 것입니다.",
    "커피를 마시려는 순간, 딱 원하는 온도가 될 것입니다.",
    "길을 걷다 우연히 아는 사람과 마주칠 확률이 낮아집니다.",
    "지하철 문이 닫히기 전에 타려다 신발만 타는 경험을 할 수도 있습니다.",
    ...Array.from({ length: 496 }, (_, i) => `웃긴 운세 ${i + 5}: 오늘의 행운은 특별하지 않지만, 웃음이 당신을 찾아옵니다!`)
  ];
  
  const explanations = [
    "이 운세는 당신의 성격이 반영된 결과입니다. 긍정적으로 행동하세요!",
    "행운을 얻으려면 주변 사람들과 좋은 관계를 유지하세요.",
    "오늘은 예상치 못한 일이 생길 수 있으니 유연하게 대처하세요.",
    ...Array.from({ length: 496 }, (_, i) => `운세 설명 ${i + 5}: 더 나은 내일을 위해 준비해 보세요!`)
  ];
  
  const extraInfo = [
    "오늘의 행운 색깔은 파란색입니다. 마음의 평화를 가져다줄 것입니다.",
    "조심해야 할 것은 과도한 지출입니다. 지갑을 단단히 지키세요!",
    "곁에 두면 좋은 물건: 작은 공책. 아이디어가 떠오를 수 있습니다.",
    ...Array.from({ length: 496 }, (_, i) => `추가 정보 ${i + 5}: 웃음을 잃지 마세요!`)
  ];
  
  function displayRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    document.getElementById("fortune").innerText = fortunes[randomIndex];
    document.getElementById("explain-btn").classList.remove("hidden");
  }
  
  function displayExplanation() {
    const randomIndex = Math.floor(Math.random() * explanations.length);
    document.getElementById("detailed-explanation").innerText = explanations[randomIndex];
    document.getElementById("detailed-explanation").classList.remove("hidden");
    document.getElementById("extra-ad-container").classList.remove("hidden");
  }
  
  function displayExtraInfo() {
    const randomIndex = Math.floor(Math.random() * extraInfo.length);
    document.getElementById("extra-info").innerText = extraInfo[randomIndex];
    document.getElementById("extra-info").classList.remove("hidden");
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    displayRandomFortune();
  
    document.getElementById("explain-btn").addEventListener("click", displayExplanation);
    document.getElementById("extra-ad-container").addEventListener("click", displayExtraInfo);
  });
  