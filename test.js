let a = [
  { level: 1, name: "백스텝", requiredLevel: 1, },
  { level: 1, name: "암흑참", requiredLevel: 1, },
  { level: 1, name: "퀵 스탠딩", requiredLevel: 1, },
  { level: 1, name: "승천검", requiredLevel: 1, },
  { level: 1, name: "회전격", requiredLevel: 10, },
  { level: 1, name: "처단", requiredLevel: 10, },
  { level: 1, name: "연환격", requiredLevel: 15, },
  { level: 1, name: "양의공", requiredLevel: 15, },
  { level: 1, name: "삼재검", requiredLevel: 15, },
  { level: 1, name: "회륜", requiredLevel: 15, },
  { level: 10, name: "오기조원", requiredLevel: 20, },
  { level: 2, name: "비상", requiredLevel: 25, },
  { level: 1, name: "일화도강", requiredLevel: 25, },
  { level: 30, name: "극검", requiredLevel: 30, },
  { level: 43, name: "거압", requiredLevel: 30, },
  { level: 41, name: "비연장", requiredLevel: 35, },
  { level: 27, name: "난화검", requiredLevel: 35, },
  { level: 38, name: "폭검", requiredLevel: 40, },
  { level: 38, name: "폭멸장", requiredLevel: 40, },
  { level: 36, name: "혜성만리", requiredLevel: 45, },
  { level: 13, name: "경전지화", requiredLevel: 50, },
  { level: 1, name: "십자검", requiredLevel: 60, },
  { level: 2, name: "백보신장", requiredLevel: 70, },
  { level: 21, name: "연화검무", requiredLevel: 75, },
  { level: 18, name: "연화섬", requiredLevel: 80, },
  { level: 7, name: "월광비무", requiredLevel: 85, },
  { level: 11, name: "엽해소옥", requiredLevel: 95, },
  { level: 4, name: "월하무즉정야", requiredLevel: 100,}
]

const asdf = (arr)=>{
  let d = []
  arr.forEach(element => {
    if(element.level > 1){d.push(element)}
  });
  return d
}

console.log(asdf(a));