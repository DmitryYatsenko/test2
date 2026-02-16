import {
  ArchetypeProfile,
  ArchetypeKey,
  ConfidenceLevel,
  LandingTrack,
  LandingVariant,
  QuestionVisual,
  QuizOption,
  QuizQuestion,
  ResponseQuality,
  ShadowResult,
} from "./types";

export const QUIZ_OPTIONS: QuizOption[] = [
  { label: "Часто", value: 3 },
  { label: "Иногда", value: 2 },
  { label: "Редко", value: 1 },
  { label: "Почти никогда", value: 0 },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    archetype: "king",
    text: "Когда нужно принять важное решение, ты обычно затягиваешь с финальным выбором?",
  },
  {
    id: 2,
    archetype: "king",
    text: "В течение месяца тебе не хватает устойчивой структуры и ясных приоритетов?",
  },
  {
    id: 3,
    archetype: "king",
    text: "Ты часто сомневаешься, что занимаешь своё место в работе или в семье?",
  },
  {
    id: 4,
    archetype: "warrior",
    text: "Ты запускаешь задачи с мотивацией, но регулярно теряешь темп до завершения?",
  },
  {
    id: 5,
    archetype: "warrior",
    text: "Тебе трудно удерживать рабочую дисциплину дольше 1-2 недель подряд?",
  },
  {
    id: 6,
    archetype: "warrior",
    text: "Даже понимая следующий шаг, ты откладываешь конкретное действие?",
  },
  {
    id: 7,
    archetype: "magician",
    text: "Ты часто уходишь в анализ вместо быстрого теста решения на практике?",
  },
  {
    id: 8,
    archetype: "magician",
    text: "Ты замечаешь, что живёшь в размышлениях больше, чем в реальных действиях?",
  },
  {
    id: 9,
    archetype: "magician",
    text: "Понимание себя редко переходит в измеримые изменения в жизни?",
  },
  {
    id: 10,
    archetype: "lover",
    text: "Ты часто чувствуешь эмоциональную усталость даже без критической перегрузки?",
  },
  {
    id: 11,
    archetype: "lover",
    text: "В близких отношениях ты склонен уходить в крайности: слияние или дистанция?",
  },
  {
    id: 12,
    archetype: "lover",
    text: "Ты периодически теряешь ощущение радости, вкуса и телесной энергии?",
  },
];

export const QUESTION_VISUALS: Record<number, QuestionVisual> = {
  1: {
    imagePath: "/images/questions/q1.png",
    alt: "Мужчина в деловой обстановке принимает сложное решение.",
    promptHint:
      "Realistic cinematic portrait of a thoughtful man in a dark office, deciding between two options, moody light, masculine style.",
  },
  2: {
    imagePath: "/images/questions/q2.jpg",
    alt: "Мужчина смотрит на план задач и календарь.",
    promptHint:
      "Photorealistic man reviewing schedule and task board, dark minimalist workspace, focused expression.",
  },
  3: {
    imagePath: "/images/questions/q3.jpg",
    alt: "Мужчина стоит в городе с ощущением поиска своего места.",
    promptHint:
      "Realistic man standing alone in evening city street, introspective mood, shallow depth of field.",
  },
  4: {
    imagePath: "/images/questions/q4.jpg",
    alt: "Мужчина начинает проект за ноутбуком.",
    promptHint:
      "Photorealistic man starting a new project at desk, energetic beginning, modern dark interior.",
  },
  5: {
    imagePath: "/images/questions/q5.jpg",
    alt: "Мужчина тренирует дисциплину утром.",
    promptHint:
      "Realistic morning routine of a man, workout clothes, discipline theme, soft natural light.",
  },
  6: {
    imagePath: "/images/questions/q6.jpg",
    alt: "Мужчина откладывает действие перед задачей.",
    promptHint:
      "Photorealistic man staring at task list and delaying action, tension in posture, dark neutral tones.",
  },
  7: {
    imagePath: "/images/questions/q7.jpg",
    alt: "Мужчина анализирует заметки и схемы.",
    promptHint:
      "Realistic man surrounded by notes and diagrams, overthinking mood, moody office lighting.",
  },
  8: {
    imagePath: "/images/questions/q8.jpg",
    alt: "Мужчина погружён в мысли.",
    promptHint:
      "Photorealistic close-up of man lost in thought, dark background, introspective expression.",
  },
  9: {
    imagePath: "/images/questions/q9.jpg",
    alt: "Мужчина читает и осознаёт, но не действует.",
    promptHint:
      "Realistic man reading self-development notes, reflective but static posture, cinematic shadows.",
  },
  10: {
    imagePath: "/images/questions/q10.jpg",
    alt: "Мужчина выглядит эмоционально уставшим.",
    promptHint:
      "Photorealistic tired man sitting late evening, emotional fatigue theme, low-key lighting.",
  },
  11: {
    imagePath: "/images/questions/q11.jpg",
    alt: "Мужчина в сцене отношений, напряжённая дистанция.",
    promptHint:
      "Realistic relationship scene with emotional distance, man in foreground, soft cinematic realism.",
  },
  12: {
    imagePath: "/images/questions/q12.jpg",
    alt: "Мужчина ищет возвращение энергии и вкуса к жизни.",
    promptHint:
      "Photorealistic man outdoors at sunrise, regaining vitality and life energy, warm natural light.",
  },
};

export const SHADOW_RESULTS: Record<ArchetypeKey, ShadowResult> = {
  king: {
    key: "king",
    title: "Тень Короля — Отсутствующий Центр",
    recognition:
      "Снаружи всё выглядит стабильно, но внутри нет ощущения внутреннего стержня и права вести свою жизнь с ясной позицией.",
    painPoints: [
      "Сложно удерживать долгосрочное направление.",
      "Решения принимаются с задержкой и внутренними сомнениями.",
      "Даже при успехах остаётся чувство не-своего места.",
    ],
    price:
      "Годы в режиме «почти реализован», когда сила есть, но не собрана в центр.",
    hope:
      "Когда Король возвращается, появляется ясность, структура и твоя взрослая внутренняя опора.",
  },
  warrior: {
    key: "warrior",
    title: "Тень Воина — Прокрастинирующий Боец",
    recognition:
      "Ты знаешь, что нужно делать, но между пониманием и действием возникает разрыв. Энергия уходит в старт без финиша.",
    painPoints: [
      "Проекты запускаются, но регулярно повисают в процессе.",
      "Дисциплина держится рывками, а не системой.",
      "Внутреннее напряжение растёт из-за незавершённых задач.",
    ],
    price:
      "Потерянная скорость жизни и уважение к себе из-за регулярного откладывания.",
    hope:
      "Сильный Воин возвращает темп, завершение и спокойную уверенность в своих действиях.",
  },
  magician: {
    key: "magician",
    title: "Тень Мага — Отстранённый Наблюдатель",
    recognition:
      "У тебя много понимания, инсайтов и анализа, но это не всегда превращается в реальную трансформацию в жизни.",
    painPoints: [
      "Переизбыток размышлений тормозит конкретные шаги.",
      "Знания копятся быстрее, чем внедряются в практику.",
      "Есть умная ясность, но мало ощутимых результатов.",
    ],
    price:
      "Жизнь проходит в подготовке к изменениям, а не в самих изменениях.",
    hope:
      "Интегрированный Маг даёт точность мышления и переводит понимание в действие.",
  },
  lover: {
    key: "lover",
    title: "Тень Любовника — Потерянная Энергия",
    recognition:
      "Внутри становится меньше живости: эмоции перегружают или отключаются, а вкус к жизни постепенно тускнеет.",
    painPoints: [
      "Эмоциональная усталость накапливается и снижает тонус.",
      "В отношениях сложно удерживать здоровую глубину и границы.",
      "Радость и контакт с телом становятся нестабильными.",
    ],
    price:
      "Потеря внутреннего огня, близости и ощущения полноценной жизни.",
    hope:
      "Сильный Любовник возвращает энергию, чувствительность и насыщенность каждого дня.",
  },
};

export const ARCHETYPE_LABELS: Record<ArchetypeKey, string> = {
  king: "Король",
  warrior: "Воин",
  magician: "Маг",
  lover: "Любовник",
};

export const LANDING_VARIANTS: Record<LandingTrack, LandingVariant> = {
  core: {
    track: "core",
    badge: "Мужская диагностика архетипов",
    headline: "Ты наладил свою жизнь.\nНо внутри знаешь - это не предел.",
    subheadline:
      "Ты чувствуешь, что живёшь не на все 100%?\nПройди тест на свой мужской архетип — это займёт всего 3 минуты.",
    bridge: "",
    cta: "Пройти диагностику",
    heroImagePath: "/images/landing/core-hero.jpg",
    heroImageAlt: "Серьёзный мужчина сосредоточенно смотрит в компьютер.",
    showBackButton: false,
  },
  discipline: {
    track: "discipline",
    badge: "Трек: Дисциплина и действие",
    headline: "Ты много понимаешь.\nНо не всегда доводишь до результата.",
    subheadline:
      "Если в твоей жизни есть рывки вместо системного движения,\nдиагностика покажет, какой архетип блокирует дисциплину и завершение.",
    bridge:
      "Ты не слабый.\nТы перегружен внутренним конфликтом.\n\nКогда архетипы в разбалансе,\nдаже сильный мужчина теряет темп.\n\n3 минуты теста дадут точку, откуда восстановить действие.",
    cta: "Открыть тест дисциплины",
  },
  energy: {
    track: "energy",
    badge: "Трек: Энергия и состояние",
    headline: "Ты держишься достойно.\nНо внутренней энергии становится меньше.",
    subheadline:
      "Диагностика покажет, где утекает эмоциональная и волевая сила,\nи какой архетип нужно вернуть в опору в первую очередь.",
    bridge:
      "Это не про усталость после недели.\nЭто про стратегическую потерю центра.\n\nЕсли не собрать архетипы,\nнормальная жизнь станет потолком.\n\nПройди тест и получи ясный вектор восстановления.",
    cta: "Пройти тест энергии",
  },
};

export function resolveDominantShadow(
  answers: Record<number, number>,
): ArchetypeKey {
  const scores: Record<ArchetypeKey, number> = {
    king: 0,
    warrior: 0,
    magician: 0,
    lover: 0,
  };

  QUIZ_QUESTIONS.forEach((question) => {
    scores[question.archetype] += answers[question.id] ?? 0;
  });

  const orderedKeys: ArchetypeKey[] = ["king", "warrior", "magician", "lover"];
  let dominant = orderedKeys[0];
  for (const key of orderedKeys) {
    if (scores[key] > scores[dominant]) dominant = key;
  }
  return dominant;
}

function resolveConfidence(top: number, second: number): ConfidenceLevel {
  const gap = top - second;
  if (gap >= 3) return "high";
  if (gap >= 2) return "medium";
  return "low";
}

export function resolveArchetypeProfile(
  answers: Record<number, number>,
): ArchetypeProfile {
  const scores: Record<ArchetypeKey, number> = {
    king: 0,
    warrior: 0,
    magician: 0,
    lover: 0,
  };

  QUIZ_QUESTIONS.forEach((question) => {
    scores[question.archetype] += answers[question.id] ?? 0;
  });

  const ranking = (Object.keys(scores) as ArchetypeKey[]).sort((a, b) => {
    if (scores[b] !== scores[a]) return scores[b] - scores[a];
    const order: ArchetypeKey[] = ["king", "warrior", "magician", "lover"];
    return order.indexOf(a) - order.indexOf(b);
  });

  const primary = ranking[0];
  const secondary = ranking[1];
  const topScore = scores[primary];
  const secondScore = scores[secondary];
  const confidence = resolveConfidence(topScore, secondScore);
  const confidencePercent = Math.round((topScore / 9) * 100);

  return {
    primary,
    secondary,
    scores,
    confidence,
    confidencePercent,
  };
}

export function assessResponseQuality(
  answers: Record<number, number>,
): ResponseQuality {
  const values = QUIZ_QUESTIONS.map((question) => answers[question.id] ?? 0);

  const changes = values.slice(1).reduce((acc, value, index) => {
    return acc + (value !== values[index] ? 1 : 0);
  }, 0);

  const uniqueCount = new Set(values).size;
  const flatPattern = uniqueCount === 1;
  const tooManySwitches = changes >= 10;
  const score = Math.max(0, Math.min(100, 100 - changes * 6 - (flatPattern ? 24 : 0)));

  if (flatPattern || tooManySwitches) {
    return {
      level: "random_like",
      score,
      note: "Ответы выглядят неоднородно. Рекомендуется повторить тест в спокойном состоянии.",
    };
  }

  if (changes >= 7) {
    return {
      level: "mixed",
      score,
      note: "Есть колебания между вариантами. Интерпретируй результат как ориентир, а не финальный вывод.",
    };
  }

  return {
    level: "stable",
    score,
    note: "Паттерн ответов достаточно устойчивый. Профиль можно использовать как рабочую опору.",
  };
}
