export const specialtiesMegaMenu = [
  {
    heading: "Centre of Excellence",
    items: [
      {
        label: "Pulmonology & Sleep Medicine",
        slug: "pulmonology-sleep-medicine"
      },
      {
        label: "Geriatric & Palliative Care (Old Age)",
        slug: "geriatric-palliative-care"
      },
      { label: "Internal Medicine", slug: "internal-medicine" },
      { label: "Gynaecology & Obstetrics", slug: "gynaecology-obstetrics" },
      { label: "Pediatrics & Neonatology", slug: "pediatrics-neonatology" },
      { label: "Bone & Joint Care", slug: "bone-joint-care" },
      { label: "Critical Care", slug: "critical-care" },
      { label: "Spine Care", slug: "spine-care" },
      { label: "Kidney Care", slug: "kidney-care" },
      { label: "Gastro Surgery", slug: "gastro-surgery" },
      { label: "Trauma & Emergency Care", slug: "trauma-emergency-care" }
    ]
  },
  {
    heading: "Procedures",
    items: [
      { label: "Bronchoscopy", slug: "bronchoscopy" },
      { label: "Appendix Surgery", slug: "appendix-surgery" },
      { label: "ACL Repair Surgery", slug: "acl-repair-surgery" },
      { label: "Hysterectomy", slug: "hysterectomy" },
      { label: "Laparoscopic Hernia Repair", slug: "laparoscopic-hernia-repair" },
      { label: "Gall Bladder Stone Removal", slug: "gall-bladder-stone-removal" },
      { label: "Ovarian Cyst Removal", slug: "ovarian-cyst-removal" },
      { label: "Knee & Hip Replacement", slug: "knee-hip-replacement" },
      { label: "Pediatric Surgery", slug: "pediatric-surgery" },
      { label: "Spinal Lamenectomy", slug: "spinal-lamenectomy" }
    ]
  },
  {
    heading: "Other Specialties",
    items: [
      { label: "Infectious Disease Management", slug: "infectious-disease-management" },
      { label: "Pain Management", slug: "pain-management" },
      { label: "Sports Injury Management", slug: "sports-injury-management" },
      { label: "Hypertension Management", slug: "hypertension-management" },
      { label: "Diabetes Management", slug: "diabetes-management" },
      { label: "Sleep Apnea Management", slug: "sleep-apnea-management" },
      { label: "COPD Management", slug: "copd-management" },
      { label: "ILD Management", slug: "ild-management" }
    ]
  }
];

export const specialtiesBySlug = specialtiesMegaMenu
  .flatMap((section) => section.items)
  .reduce((acc, item) => {
    acc[item.slug] = item;
    return acc;
  }, {});
