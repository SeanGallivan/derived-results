/* --- Medical Researcher Mock Data --- */

var RESEARCH_OVERVIEW = {
    activeProjects: 6,
    totalSubjects: 4200,
    datasetsAvailable: 12,
    pendingIRB: 2,
    publishedStudies: 8,
    dataCompleteness: '94.6%'
};

var RESEARCH_PROJECTS = [
    { id:'RP1', name:'Lumbar Stenosis Outcomes Study',         status:'Active — Enrolling',   lastUpdated:'2026-02-28', pi:'Dr. Sarah Mitchell',       subjects:340,  institution:'CU Anschutz',        irb:'Approved', protocol:'Prospective Cohort' },
    { id:'RP2', name:'PRP vs Cortisone RCT',                   status:'Data Collection',      lastUpdated:'2026-02-20', pi:'Dr. James Okafor',          subjects:180,  institution:'Denver Health',       irb:'Approved', protocol:'Randomized Controlled Trial' },
    { id:'RP3', name:'Cervical Radiculopathy Natural History',  status:'Active — Enrolling',   lastUpdated:'2026-02-15', pi:'Dr. Lauren Fitzgerald',     subjects:520,  institution:'National Jewish',    irb:'Approved', protocol:'Prospective Cohort' },
    { id:'RP4', name:'MSK Cost-Effectiveness Model',           status:'Analysis',             lastUpdated:'2026-02-10', pi:'Dr. Kwame Asante',          subjects:2800, institution:'CU Anschutz',        irb:'Approved', protocol:'Retrospective Analysis' },
    { id:'RP5', name:'PROM Validation — Functional Goals',     status:'IRB Pending',          lastUpdated:'2026-01-28', pi:'Dr. Anita Patel',           subjects:0,    institution:'Denver Health',       irb:'Pending',  protocol:'Validation Study' },
    { id:'RP6', name:'Employer Program ROI Analysis',           status:'IRB Pending',          lastUpdated:'2026-01-15', pi:'Dr. Patrick Donovan',       subjects:0,    institution:'CU Anschutz',        irb:'Pending',  protocol:'Retrospective Analysis' }
];
