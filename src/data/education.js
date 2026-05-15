export const education = [
  {
    institution: { en: 'Modern University for Technology and Information (MTI)', ar: 'جامعة الحديثة للتكنولوجيا والمعلومات (MTI)' },
    degree: { en: "Bachelor's in Computer Science and Artificial Intelligence", ar: 'بكالوريوس علوم الحاسب والذكاء الاصطناعي' },
    specialization: { en: 'Computer Science', ar: 'علوم الحاسب' },
    location: 'Cairo, Egypt',
    period: { start: 'Sep 2020', end: 'Jul 2024' },
    graduationProject: {
      title: { en: 'Face Aging System using GANs', ar: 'نظام تشيخ الوجه باستخدام GANs' },
      description: {
        en: 'A Generative Adversarial Network that models the aging process on human faces. Two networks — a generator that produces aged images, and a discriminator that evaluates realism. Trained on a diverse facial-image dataset across various ages.',
        ar: 'شبكة عدائية تولد صور تشيخ للوجه البشري. شبكتان — generator يولد صور التشيخ و discriminator يقيّم الواقعية. تدرّبت على dataset متنوع من الصور بأعمار مختلفة.',
      },
      stack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'GANs', 'Deep Learning'],
    },
  },
]
