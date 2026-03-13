/* --- DR Admin Mock Data --- */

var DR_ADMIN_OVERVIEW = {
    totalPractices: 18,
    totalTPAs: 4,
    totalResearchers: 6,
    networkSavings: '$18.2M',
    activePatients: 2840,
    complianceRate: '94%',
    avgCostReduction: '79%',
    pendingOnboarding: 3
};

var DR_ADMIN_ENTITIES = [
    { id:'E1',  name:'Summit View MSK',                 type:'MSK Practice',  status:'Active',    members:142,  compliance:'98%',  savings:'$1.24M' },
    { id:'E2',  name:'Front Range Spine & Orthopaedics', type:'MSK Practice', status:'Active',    members:198,  compliance:'95%',  savings:'$1.68M' },
    { id:'E3',  name:'Cherry Creek Orthopedic Group',   type:'MSK Practice',  status:'Active',    members:264,  compliance:'97%',  savings:'$2.14M' },
    { id:'E4',  name:'Centennial Sports Medicine',      type:'MSK Practice',  status:'Active',    members:231,  compliance:'99%',  savings:'$1.92M' },
    { id:'E5',  name:'Boulder Valley Orthopaedics',     type:'MSK Practice',  status:'Active',    members:248,  compliance:'98%',  savings:'$2.06M' },
    { id:'E6',  name:'Mountain West Benefits',          type:'TPA',           status:'Active',    members:3200, compliance:'92%',  savings:'$4.8M' },
    { id:'E7',  name:'Front Range Employers Trust',     type:'TPA',           status:'Active',    members:2800, compliance:'89%',  savings:'$3.6M' },
    { id:'E8',  name:'Colorado Benefit Solutions',      type:'TPA',           status:'Active',    members:1500, compliance:'94%',  savings:'$1.9M' },
    { id:'E9',  name:'Peak Performance Plans',          type:'TPA',           status:'Onboarding', members:900, compliance:'—',    savings:'—' },
    { id:'E10', name:'CU Anschutz Medical Research',    type:'Researcher',    status:'Active',    members:0,    compliance:'100%', savings:'—' },
    { id:'E11', name:'Denver Health Research Institute', type:'Researcher',    status:'Active',    members:0,    compliance:'96%',  savings:'—' },
    { id:'E12', name:'National Jewish Health',          type:'Researcher',    status:'Pending',   members:0,    compliance:'—',    savings:'—' },
    { id:'E13', name:'Rocky Mountain MSK Specialists',  type:'MSK Practice',  status:'Review',    members:72,   compliance:'78%',  savings:'$580k' },
    { id:'E14', name:'South Denver Neurology Group',    type:'MSK Practice',  status:'Action Req', members:32,  compliance:'62%',  savings:'$280k' }
];
