// Placeholder project content. Replace with real project details, images, and
// outcomes as case studies become available for publication. No client names,
// metrics, or credentials are implied — all copy here is illustrative only.

export const categories = [
  'All',
  'AMR Platforms',
  'Custom Machines',
  'Part Feeding',
  'Machine Tending',
  'Measurement Systems',
  'Product Design',
  'Robotics',
  'Fixtures & Tooling',
]

export const projects = [
  {
    slug: 'modular-amr-platform',
    title: 'Modular Autonomous Mobile Robot Platform',
    category: 'AMR Platforms',
    tags: ['AMR', 'Mechanical Architecture', 'Robotics', 'Custom Machine Design'],
    summary:
      'Development of a modular autonomous mobile platform designed around payload handling, mobility, sensor integration, and future system expansion.',
    placeholder: true,
    challenge:
      'A mobile platform needed to carry varying payload types across a facility while leaving room for the sensor suite, battery system, and drive hardware to change as the program matured. The mechanical architecture had to support that uncertainty without becoming a redesign every time a component changed.',
    approach: [
      { stage: 'Requirements', detail: 'Defined payload envelope, ground clearance, duty cycle, and facility constraints (doorways, ramps, charging areas).' },
      { stage: 'Architecture', detail: 'Established a modular chassis concept separating drive, power, payload, and sensor subsystems into independently serviceable modules.' },
      { stage: 'Mechanical Design', detail: 'Detailed the chassis structure, drive integration, battery tray, and sensor mounting points in CAD, with tolerances set for repeatable assembly.' },
      { stage: 'Prototype', detail: 'Built a first mechanical prototype to validate fit, access for service, and integration with the drive and sensor hardware.' },
      { stage: 'Validation', detail: 'Iterated on mounting geometry and structural details based on prototype fit-up and access checks.' },
    ],
    engineering: [
      'Modular chassis architecture with defined mechanical interfaces between subsystems',
      'Drive system integration and mounting for differential or mecanum configurations',
      'Battery tray and power distribution layout with service access in mind',
      'Sensor mounting positions coordinated with fields of view and cable routing',
      'Structural design for the payload deck sized to the target load case',
    ],
    outcome:
      'The resulting architecture gave the program a mechanical platform that could accept new sensors, payload fixtures, and drive configurations without a ground-up redesign — the kind of flexibility a developing AMR program needs.',
    heroKind: 'amr',
  },
  {
    slug: 'purpose-built-assembly-machine',
    title: 'Purpose-Built Assembly Machine',
    category: 'Custom Machines',
    tags: ['Custom Machine Design', 'Mechanism Development', 'DFA'],
    summary:
      'A dedicated assembly machine architected around a specific part family, combining multiple mechanisms into one coordinated station.',
    placeholder: true,
    challenge:
      'An assembly operation performed manually needed to move to a dedicated machine, with several sub-operations — part orientation, joining, and verification — combined into a single station without exceeding the available floor space.',
    approach: [
      { stage: 'Requirements', detail: 'Captured part geometry, tolerance stack-up, cycle time target, and floor space constraints.' },
      { stage: 'Architecture', detail: 'Laid out the station as a set of coordinated stations on a common index, sequencing each sub-operation.' },
      { stage: 'Mechanical Design', detail: 'Designed the mechanisms for orientation, joining, and in-process verification, along with the frame and guarding concept.' },
      { stage: 'Prototype', detail: 'Validated critical mechanisms individually before integrating them onto the full station.' },
      { stage: 'Validation', detail: 'Ran the assembled station through representative parts to confirm mechanism timing and part flow.' },
    ],
    engineering: [
      'Mechanism development for part orientation and joining operations',
      'Machine layout coordinating multiple stations on a shared index',
      'Component selection for actuation, guiding, and sensing elements',
      'Design for manufacturability and design for assembly throughout',
      'Engineering documentation prepared for build and future maintenance',
    ],
    outcome:
      'The station consolidated what had been a multi-step manual process into a single coordinated machine, engineered with service access and future tooling changeovers in mind.',
    heroKind: 'machine',
  },
  {
    slug: 'vibratory-part-feeding-system',
    title: 'Vibratory Part Feeding System',
    category: 'Part Feeding',
    tags: ['Part Feeding', 'Part Presentation', 'Tooling'],
    summary:
      'A part feeding and presentation system engineered around an irregular part geometry that made off-the-shelf feeders unreliable.',
    placeholder: true,
    challenge:
      'The part geometry was prone to jamming and inconsistent orientation in a standard feeder bowl, which meant the downstream pick-and-place system could not rely on a consistent part presentation.',
    approach: [
      { stage: 'Requirements', detail: 'Characterized the part geometry, acceptable orientations, and required feed rate.' },
      { stage: 'Architecture', detail: 'Selected a feeding strategy and defined the handoff interface to the downstream pick operation.' },
      { stage: 'Mechanical Design', detail: 'Designed the tooling profile, orientation features, and reject mechanism for out-of-orientation parts.' },
      { stage: 'Prototype', detail: 'Tested tooling geometry on sample parts to tune reliability before committing to final tooling.' },
      { stage: 'Validation', detail: 'Confirmed consistent orientation and feed rate across a representative part sample.' },
    ],
    engineering: [
      'Custom feeder tooling profile matched to part geometry',
      'Orientation and reject features to remove parts presented incorrectly',
      'Transfer mechanism to hand parts to the downstream automation',
      'End-of-arm tooling coordination with the pick-and-place system',
    ],
    outcome:
      'The feeding system gave the downstream robotic pick operation a consistent, correctly oriented part on every cycle, removing the reliability gap that generic feeder tooling could not close.',
    heroKind: 'feeding',
  },
  {
    slug: 'cnc-machine-tending-cell',
    title: 'Robotic CNC Machine Tending Cell',
    category: 'Machine Tending',
    tags: ['Machine Tending', 'Robotic Workcells', 'End-of-Arm Tooling'],
    summary:
      'Mechanical design for a robotic cell tending multiple CNC machines, including tooling, staging, and part transfer.',
    placeholder: true,
    challenge:
      'A production cell needed a single robot to tend multiple CNC machines with different fixturing, while keeping cycle time competitive with the manual process it was replacing.',
    approach: [
      { stage: 'Requirements', detail: 'Mapped machine cycle times, part staging needs, and reachability constraints for a shared robot.' },
      { stage: 'Architecture', detail: 'Defined the cell layout, robot placement, and staging locations for raw and finished parts.' },
      { stage: 'Mechanical Design', detail: 'Designed end-of-arm tooling capable of handling the part family across machines, plus staging fixtures.' },
      { stage: 'Prototype', detail: 'Verified tooling and staging fixtures against sample parts and machine chuck interfaces.' },
      { stage: 'Validation', detail: 'Checked full-cell reach and timing against the target cycle.' },
    ],
    engineering: [
      'Cell layout coordinating robot reach across multiple machine tools',
      'End-of-arm tooling designed for multi-part handling',
      'Staging fixtures for raw and finished part flow',
      'Safety and guarding considerations integrated into the layout',
    ],
    outcome:
      'The cell layout and tooling let one robot reliably tend multiple machines, with fixturing designed to accommodate the part family without tool changes.',
    heroKind: 'workcell',
  },
  {
    slug: 'automated-dimensional-inspection-fixture',
    title: 'Automated Dimensional Inspection Fixture',
    category: 'Measurement Systems',
    tags: ['Measurement Systems', 'Precision Fixtures', 'Vision Integration'],
    summary:
      'A precision fixture and motion system built around a dimensional inspection requirement, integrating vision-based measurement.',
    placeholder: true,
    challenge:
      'A dimensional check performed manually with handheld gauges was inconsistent between operators and too slow for the intended production rate. The part needed to be located precisely and repeatably for a vision system to measure it automatically.',
    approach: [
      { stage: 'Requirements', detail: 'Defined the dimensions to be measured, required repeatability, and target cycle time.' },
      { stage: 'Architecture', detail: 'Selected a part locating strategy and camera/sensor arrangement suited to the geometry.' },
      { stage: 'Mechanical Design', detail: 'Designed the precision locating fixture, part clamping, and sensor mounting to hold tolerance through the cycle.' },
      { stage: 'Prototype', detail: 'Validated locating repeatability and measurement consistency against known reference parts.' },
      { stage: 'Validation', detail: 'Confirmed measurement repeatability and cycle time across a representative sample.' },
    ],
    engineering: [
      'Precision locating fixture designed around the measurement tolerance',
      'Vision-system integration and mounting for consistent imaging conditions',
      'Automated part positioning for repeatable presentation to the sensor',
      'Fixture design coordinated with the inspection software interface',
    ],
    outcome:
      'The fixture gave the inspection system a consistent, repeatable part presentation, removing operator-to-operator variation from the measurement.',
    heroKind: 'measurement',
  },
  {
    slug: 'handheld-diagnostic-device',
    title: 'Handheld Diagnostic Device',
    category: 'Product Design',
    tags: ['Product Design', 'DFM', 'Prototyping'],
    summary:
      'Mechanical product development for a handheld device, from early concept through a manufacturable design.',
    placeholder: true,
    challenge:
      'A handheld device concept needed to move from an early proof-of-concept to a design that could be manufactured at volume, without compromising the ergonomics or sensor placement that made the concept work.',
    approach: [
      { stage: 'Requirements', detail: 'Defined ergonomic, sensor placement, and durability requirements alongside target manufacturing processes.' },
      { stage: 'Architecture', detail: 'Established the internal layout — board placement, battery, sensor, and enclosure structure.' },
      { stage: 'Mechanical Design', detail: 'Developed the enclosure and internal mechanical design with DFM and DFT in mind.' },
      { stage: 'Prototype', detail: 'Built functional prototypes to validate fit, ergonomics, and assembly sequence.' },
      { stage: 'Validation', detail: 'Refined the design based on prototype assembly and use testing before production handoff.' },
    ],
    engineering: [
      'Product architecture balancing ergonomics with internal component layout',
      'Enclosure and mechanical design developed for injection-molded production',
      'Design for manufacturability and design for test built in from early concept',
      'Prototyping used to validate assembly sequence ahead of tooling commitment',
    ],
    outcome:
      'The design carried the original concept through to a structure that could be built with production tooling, with the assembly sequence validated before committing to tooling investment.',
    heroKind: 'product',
  },
  {
    slug: 'collaborative-robot-workcell',
    title: 'Collaborative Robot Workcell',
    category: 'Robotics',
    tags: ['Robotics', 'Robotic Workcells', 'Safety'],
    summary:
      'Mechanical design for a collaborative robot workcell integrating fixturing, tooling, and safety considerations for close human interaction.',
    placeholder: true,
    challenge:
      'A collaborative robot needed to work alongside operators on a shared task, which meant the fixturing, tooling, and layout all had to account for close human proximity in addition to the process itself.',
    approach: [
      { stage: 'Requirements', detail: 'Captured the shared task sequence, reach requirements, and human interaction points.' },
      { stage: 'Architecture', detail: 'Defined the cell layout and hand-off points between operator and robot.' },
      { stage: 'Mechanical Design', detail: 'Designed fixturing and end-of-arm tooling with mechanical safety considerations for shared workspace.' },
      { stage: 'Prototype', detail: 'Mocked up the cell layout to check reach, sightlines, and interaction sequence.' },
      { stage: 'Validation', detail: 'Walked through the process with the physical layout to confirm the handoff sequence worked as intended.' },
    ],
    engineering: [
      'Cell layout designed around shared human/robot task sequencing',
      'Fixturing and tooling designed with mechanical safety in mind',
      'End-of-arm tooling suited to the handoff between operator and robot',
    ],
    outcome:
      'The resulting cell layout supported the shared task sequence with fixturing and tooling designed specifically for close human interaction.',
    heroKind: 'workcell',
  },
  {
    slug: 'multi-part-workholding-system',
    title: 'Multi-Part Workholding System',
    category: 'Fixtures & Tooling',
    tags: ['Fixtures & Tooling', 'Workholding', 'DFM'],
    summary:
      'A modular workholding system designed to hold multiple part variants on a common fixture base.',
    placeholder: true,
    challenge:
      'A machining operation needed to hold several part variants without a separate fixture for each one, to keep changeover time and tooling cost reasonable.',
    approach: [
      { stage: 'Requirements', detail: 'Reviewed the part family and identified common locating and clamping features.' },
      { stage: 'Architecture', detail: 'Defined a common fixture base with interchangeable locating elements per part variant.' },
      { stage: 'Mechanical Design', detail: 'Designed the base plate, locating pins, and quick-change clamping elements.' },
      { stage: 'Prototype', detail: 'Verified locating repeatability and changeover time on sample parts.' },
      { stage: 'Validation', detail: 'Confirmed the fixture held tolerance across all part variants in the family.' },
    ],
    engineering: [
      'Common fixture base with variant-specific locating inserts',
      'Quick-change clamping elements to reduce changeover time',
      'Workholding tolerance verified against the part family requirements',
    ],
    outcome:
      'The modular fixture reduced the number of dedicated fixtures needed for the part family, while holding the required locating tolerance for each variant.',
    heroKind: 'fixture',
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}
