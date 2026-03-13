/* --- TPA Mock Data --- */

var TPA_OVERVIEW = {
    /* Portfolio summary */
    totalClients: 8,
    totalMembers: 12400,
    avgSavingsPerMember: '$4,280',
    claimsThroughput: '94.2%',
    networkSavings: '$6.8M',
    avgCostPerCase: '$8,940',
    denialRate: '4.1%',
    activeReferrals: 342,

    /* Roll-up operational fields (aggregated across all 8 plan sponsors) */
    hotList: 56,
    outreachCalled: 177,
    outreachReached: 76,
    outreachOptIns: 50,
    frictionAlerts: 10,
    frictionUnderReview: 4, frictionContacted: 3, frictionResolved: 3,
    lastSyncHours: 4, apiConnected: true,
    complicationRate: 2.1, readmissionAvoidance: 94.6,
    activeCases: 592,
    activeCasesTrend: 26,
    closedCasesThisWeek: 73,
    avgTimeToFirstVisit: 4.7,
    triggeredClaims: 596,
    successfulOutreach: 373,
    programOptIns: 140,
    conservativeShift: 55,
    compliantPct: 69,
    trendToSurgeryPct: 21,
    nonResponsivePct: 10,
    coeDirection: 68,
    inNetworkPct: 32,
    grossSavings: '$1.69M',
    conservativeBaseline: '($507,000)',
    netAttributedSavings: '$1.18M',
    stopLossRisk: 16,
    nps: 80,
    pdfiScore: 72,
    outcomeVerification: '90% Surgery-Free',
    mskTrend: '-3.7% YoY'
};

/* TPA_CLIENTS sorted by savingsVelocity descending */
var TPA_CLIENTS = [
    {
        id:'C1', name:'Mountain West Benefits', memberCount:3200, planType:'Self-Funded', region:'CO',
        savingsToDate:'$4.8M', avgCost:'$7,200', compliance:'92%', activeReferrals:86,
        savingsVelocity: 82, savingsVelocityLabel: '$82k', avgMemberSavings: '$1,500',
        hotList: 14, outreachCalled: 42, outreachReached: 18, outreachOptIns: 12,
        frictionAlerts: 2,
        frictionUnderReview: 1, frictionContacted: 1, frictionResolved: 0,
        lastSyncHours: 3, apiConnected: true,
        complicationRate: 1.8, readmissionAvoidance: 96.2,
        activeCases: 142, activeCasesTrend: 12, closedCasesThisWeek: 18, avgTimeToFirstVisit: 3.8,
        triggeredClaims: 142, successfulOutreach: 89, programOptIns: 34, conservativeShift: 14,
        compliantPct: 70, trendToSurgeryPct: 20, nonResponsivePct: 10,
        coeDirection: 68, inNetworkPct: 32,
        grossSavings: '$420,000', conservativeBaseline: '($126,000)', netAttributedSavings: '$294,000',
        stopLossRisk: 4, nps: 82, pdfiScore: 78,
        outcomeVerification: '92% Surgery-Free', mskTrend: '-4.2% YoY'
    },
    {
        id:'C2', name:'Front Range Employers Trust', memberCount:2800, planType:'Level-Funded', region:'CO',
        savingsToDate:'$3.6M', avgCost:'$8,100', compliance:'89%', activeReferrals:72,
        savingsVelocity: 68, savingsVelocityLabel: '$68k', avgMemberSavings: '$1,286',
        hotList: 11, outreachCalled: 36, outreachReached: 15, outreachOptIns: 10,
        frictionAlerts: 1,
        frictionUnderReview: 0, frictionContacted: 1, frictionResolved: 0,
        lastSyncHours: 5, apiConnected: true,
        complicationRate: 2.0, readmissionAvoidance: 95.1,
        activeCases: 118, activeCasesTrend: 8, closedCasesThisWeek: 14, avgTimeToFirstVisit: 4.2,
        triggeredClaims: 118, successfulOutreach: 74, programOptIns: 28, conservativeShift: 11,
        compliantPct: 72, trendToSurgeryPct: 18, nonResponsivePct: 10,
        coeDirection: 72, inNetworkPct: 28,
        grossSavings: '$340,000', conservativeBaseline: '($102,000)', netAttributedSavings: '$238,000',
        stopLossRisk: 3, nps: 79, pdfiScore: 74,
        outcomeVerification: '89% Surgery-Free', mskTrend: '-3.8% YoY'
    },
    {
        id:'C5', name:'Western States Workers Comp', memberCount:1800, planType:'Workers Comp', region:'CO/WY',
        savingsToDate:'$2.4M', avgCost:'$7,800', compliance:'96%', activeReferrals:52,
        savingsVelocity: 52, savingsVelocityLabel: '$52k', avgMemberSavings: '$1,389',
        hotList: 9, outreachCalled: 28, outreachReached: 12, outreachOptIns: 8,
        frictionAlerts: 0,
        frictionUnderReview: 0, frictionContacted: 0, frictionResolved: 0,
        lastSyncHours: 2, apiConnected: true,
        complicationRate: 1.6, readmissionAvoidance: 97.0,
        activeCases: 96, activeCasesTrend: -4, closedCasesThisWeek: 11, avgTimeToFirstVisit: 5.1,
        triggeredClaims: 94, successfulOutreach: 62, programOptIns: 22, conservativeShift: 9,
        compliantPct: 76, trendToSurgeryPct: 16, nonResponsivePct: 8,
        coeDirection: 74, inNetworkPct: 26,
        grossSavings: '$260,000', conservativeBaseline: '($78,000)', netAttributedSavings: '$182,000',
        stopLossRisk: 2, nps: 88, pdfiScore: 82,
        outcomeVerification: '94% Surgery-Free', mskTrend: '-5.1% YoY'
    },
    {
        id:'C3', name:'Colorado Benefit Solutions', memberCount:1500, planType:'Self-Funded', region:'CO',
        savingsToDate:'$1.9M', avgCost:'$9,400', compliance:'94%', activeReferrals:41,
        savingsVelocity: 44, savingsVelocityLabel: '$44k', avgMemberSavings: '$1,267',
        hotList: 7, outreachCalled: 22, outreachReached: 10, outreachOptIns: 6,
        frictionAlerts: 1,
        frictionUnderReview: 1, frictionContacted: 0, frictionResolved: 0,
        lastSyncHours: 4, apiConnected: true,
        complicationRate: 2.4, readmissionAvoidance: 93.8,
        activeCases: 74, activeCasesTrend: 6, closedCasesThisWeek: 9, avgTimeToFirstVisit: 4.6,
        triggeredClaims: 76, successfulOutreach: 48, programOptIns: 18, conservativeShift: 7,
        compliantPct: 68, trendToSurgeryPct: 22, nonResponsivePct: 10,
        coeDirection: 65, inNetworkPct: 35,
        grossSavings: '$220,000', conservativeBaseline: '($66,000)', netAttributedSavings: '$154,000',
        stopLossRisk: 2, nps: 76, pdfiScore: 69,
        outcomeVerification: '88% Surgery-Free', mskTrend: '-3.1% YoY'
    },
    {
        id:'C6', name:'Mile High Municipal Trust', memberCount:1200, planType:'Self-Funded', region:'Denver',
        savingsToDate:'$1.5M', avgCost:'$8,600', compliance:'91%', activeReferrals:35,
        savingsVelocity: 36, savingsVelocityLabel: '$36k', avgMemberSavings: '$1,250',
        hotList: 6, outreachCalled: 18, outreachReached: 8, outreachOptIns: 5,
        frictionAlerts: 2,
        frictionUnderReview: 1, frictionContacted: 0, frictionResolved: 1,
        lastSyncHours: 6, apiConnected: true,
        complicationRate: 2.6, readmissionAvoidance: 92.5,
        activeCases: 62, activeCasesTrend: 3, closedCasesThisWeek: 8, avgTimeToFirstVisit: 4.9,
        triggeredClaims: 62, successfulOutreach: 38, programOptIns: 14, conservativeShift: 5,
        compliantPct: 65, trendToSurgeryPct: 24, nonResponsivePct: 11,
        coeDirection: 62, inNetworkPct: 38,
        grossSavings: '$180,000', conservativeBaseline: '($54,000)', netAttributedSavings: '$126,000',
        stopLossRisk: 3, nps: 74, pdfiScore: 65,
        outcomeVerification: '86% Surgery-Free', mskTrend: '-2.8% YoY'
    },
    {
        id:'C4', name:'Peak Performance Plans', memberCount:900, planType:'Level-Funded', region:'CO',
        savingsToDate:'$820k', avgCost:'$10,200', compliance:'88%', activeReferrals:24,
        savingsVelocity: 24, savingsVelocityLabel: '$24k', avgMemberSavings: '$933',
        hotList: 4, outreachCalled: 14, outreachReached: 6, outreachOptIns: 4,
        frictionAlerts: 1,
        frictionUnderReview: 0, frictionContacted: 1, frictionResolved: 0,
        lastSyncHours: 4, apiConnected: true,
        complicationRate: 2.9, readmissionAvoidance: 91.4,
        activeCases: 44, activeCasesTrend: -2, closedCasesThisWeek: 6, avgTimeToFirstVisit: 5.4,
        triggeredClaims: 48, successfulOutreach: 28, programOptIns: 10, conservativeShift: 4,
        compliantPct: 62, trendToSurgeryPct: 26, nonResponsivePct: 12,
        coeDirection: 58, inNetworkPct: 42,
        grossSavings: '$120,000', conservativeBaseline: '($36,000)', netAttributedSavings: '$84,000',
        stopLossRisk: 1, nps: 71, pdfiScore: 61,
        outcomeVerification: '85% Surgery-Free', mskTrend: '-2.2% YoY'
    },
    {
        id:'C7', name:'Rocky Mountain School District', memberCount:600, planType:'Level-Funded', region:'CO',
        savingsToDate:'$680k', avgCost:'$9,800', compliance:'85%', activeReferrals:18,
        savingsVelocity: 18, savingsVelocityLabel: '$18k', avgMemberSavings: '$1,133',
        hotList: 3, outreachCalled: 10, outreachReached: 4, outreachOptIns: 3,
        frictionAlerts: 3,
        frictionUnderReview: 1, frictionContacted: 1, frictionResolved: 1,
        lastSyncHours: 5, apiConnected: true,
        complicationRate: 3.2, readmissionAvoidance: 89.8,
        activeCases: 32, activeCasesTrend: 1, closedCasesThisWeek: 4, avgTimeToFirstVisit: 6.2,
        triggeredClaims: 34, successfulOutreach: 20, programOptIns: 8, conservativeShift: 3,
        compliantPct: 58, trendToSurgeryPct: 28, nonResponsivePct: 14,
        coeDirection: 54, inNetworkPct: 46,
        grossSavings: '$90,000', conservativeBaseline: '($27,000)', netAttributedSavings: '$63,000',
        stopLossRisk: 1, nps: 68, pdfiScore: 58,
        outcomeVerification: '83% Surgery-Free', mskTrend: '-1.8% YoY'
    },
    {
        id:'C8', name:'Front Range Tech Alliance', memberCount:400, planType:'Self-Funded', region:'Boulder',
        savingsToDate:'$420k', avgCost:'$7,500', compliance:'97%', activeReferrals:14,
        savingsVelocity: 12, savingsVelocityLabel: '$12k', avgMemberSavings: '$1,050',
        hotList: 2, outreachCalled: 7, outreachReached: 3, outreachOptIns: 2,
        frictionAlerts: 0,
        frictionUnderReview: 0, frictionContacted: 0, frictionResolved: 0,
        lastSyncHours: 2, apiConnected: true,
        complicationRate: 1.2, readmissionAvoidance: 98.1,
        activeCases: 24, activeCasesTrend: 2, closedCasesThisWeek: 3, avgTimeToFirstVisit: 3.2,
        triggeredClaims: 22, successfulOutreach: 14, programOptIns: 6, conservativeShift: 2,
        compliantPct: 64, trendToSurgeryPct: 24, nonResponsivePct: 12,
        coeDirection: 76, inNetworkPct: 24,
        grossSavings: '$60,000', conservativeBaseline: '($18,000)', netAttributedSavings: '$42,000',
        stopLossRisk: 0, nps: 91, pdfiScore: 88,
        outcomeVerification: '96% Surgery-Free', mskTrend: '-6.2% YoY'
    }
];


/* --- Performance Report Detail Data --- */

var TPA_ACTIVE_CASES = [
    { memberId:'MBR-0441', caseId:'MSK-2841', pathway:'Lumbar Spine',          status:'Active Treatment', lastMilestone:'Week 6 Functional Assessment',          projectedCompletion:'Aug 14, 2026', estimatedSavings:'8,200' },
    { memberId:'MBR-0892', caseId:'MSK-2756', pathway:'Knee (Non-Surgical)',   status:'Evaluation',       lastMilestone:'Initial Intake & Risk Stratification',  projectedCompletion:'Sep 02, 2026', estimatedSavings:'1,500' },
    { memberId:'MBR-1103', caseId:'MSK-2698', pathway:'Hip Replacement Alt.',  status:'Active Treatment', lastMilestone:'COE Second Opinion Completed',           projectedCompletion:'Jul 28, 2026', estimatedSavings:'2,400' },
    { memberId:'MBR-0574', caseId:'MSK-2611', pathway:'Cervical Spine',        status:'Post-Op/Recovery', lastMilestone:'Discharge from Surgical Care',           projectedCompletion:'Jun 30, 2026', estimatedSavings:'4,100' },
    { memberId:'MBR-1247', caseId:'MSK-2589', pathway:'Lumbar Spine',          status:'Active Treatment', lastMilestone:'Physical Therapy Authorization',         projectedCompletion:'Aug 22, 2026', estimatedSavings:'9,700' },
    { memberId:'MBR-0318', caseId:'MSK-2543', pathway:'Shoulder (Rotator Cuff)', status:'Evaluation',    lastMilestone:'MRI Review Scheduled',                   projectedCompletion:'Sep 15, 2026', estimatedSavings:'7,300' },
    { memberId:'MBR-0785', caseId:'MSK-2501', pathway:'Knee (Surgical)',       status:'Post-Op/Recovery', lastMilestone:'Post-Surgical PT Week 4',                projectedCompletion:'Jul 07, 2026', estimatedSavings:'1,800' },
    { memberId:'MBR-1056', caseId:'MSK-2488', pathway:'Lumbar Spine',          status:'Active Treatment', lastMilestone:'Conservative Care Protocol Initiated',   projectedCompletion:'Oct 01, 2026', estimatedSavings:'5,600' }
];

var TPA_FRICTION_LOG = [
    { caseId:'MSK-2544', managerId:'CM-07', flagDate:'Mar 03, 2026', category:'TPA Coordination Delay', narrative:'Prior auth not submitted within SLA window; member delayed 8 days.',                        interventionStatus:'In-Progress' },
    { caseId:'MSK-2601', managerId:'CM-12', flagDate:'Mar 05, 2026', category:'Member Dissatisfaction',  narrative:'Member expressed frustration with provider availability; escalated to nurse navigator.',   interventionStatus:'Open'        },
    { caseId:'MSK-2712', managerId:'CM-04', flagDate:'Feb 28, 2026', category:'Provider Access Issue',   narrative:'Preferred COE provider not accepting new patients; alternative sourced.',                  interventionStatus:'Resolved'    },
    { caseId:'MSK-2699', managerId:'CM-07', flagDate:'Mar 07, 2026', category:'TPA Coordination Delay', narrative:'Claims data missing for 3 visits; Deep Hook sync pending manual reconciliation.',         interventionStatus:'Open'        },
    { caseId:'MSK-2580', managerId:'CM-09', flagDate:'Mar 01, 2026', category:'Member Dissatisfaction',  narrative:'Member missed 2 PT appointments; re-engagement call completed, care plan adjusted.',      interventionStatus:'Resolved'    },
    { caseId:'MSK-2741', managerId:'CM-12', flagDate:'Mar 09, 2026', category:'Provider Access Issue',   narrative:'Specialist waitlist 6+ weeks; expedited referral pathway initiated.',                     interventionStatus:'In-Progress' },
    { caseId:'MSK-2633', managerId:'CM-04', flagDate:'Mar 06, 2026', category:'TPA Coordination Delay', narrative:'EOB discrepancy flagged; billing team notified, under review.',                           interventionStatus:'In-Progress' }
];

var TPA_HIGH_RISK = [
    { memberId:'MBR-0441', ytdSpend:'2,400',  predictiveSpend:'9,100',  breachProb:94, icd10:'M54.5 — Low Back Pain',                action:'COE Referral Initiated'         },
    { memberId:'MBR-1103', ytdSpend:'4,200',  predictiveSpend:'12,000', breachProb:91, icd10:'M16.1 — Prim. Osteoarthritis, Hip',   action:'Care Mgmt Outreach'             },
    { memberId:'MBR-0785', ytdSpend:'8,900',  predictiveSpend:'7,500',  breachProb:88, icd10:'M17.11 — Prim. Osteoarthritis, Knee', action:'COE Second Opinion'             },
    { memberId:'MBR-0574', ytdSpend:'1,300',  predictiveSpend:'04,800', breachProb:86, icd10:'M47.816 — Spondylosis, Lumbar',       action:'Auth Review Expedited'          },
    { memberId:'MBR-1247', ytdSpend:'9,700',  predictiveSpend:'8,200',  breachProb:82, icd10:'M54.4 — Lumbago with Sciatica',       action:'Conservative Protocol Override' },
    { memberId:'MBR-0318', ytdSpend:'3,200',  predictiveSpend:'1,600',  breachProb:79, icd10:'M75.1 — Rotator Cuff Syndrome',       action:'PT Extension Authorized'        },
    { memberId:'MBR-0892', ytdSpend:'8,600',  predictiveSpend:'4,900',  breachProb:76, icd10:'M22.41 — Chondromalacia, R Knee',     action:'Watchful Waiting Protocol'      },
    { memberId:'MBR-1056', ytdSpend:'5,100',  predictiveSpend:'9,400',  breachProb:71, icd10:'M54.51 — Vertebrogenic Low Back',     action:'Pending TPA Review'             }
];


/* --- Plan Sponsor Report Detail Data --- */

var TPA_RENEWAL_LEDGER = [
    { sponsor:'Mountain West Benefits',       yoyChange:'-8.2%',  adminFee:'Matched',    perfGuarantee:'Met',      rebate:'$14,400', milestone:'Renewal Signed Q1 2026' },
    { sponsor:'Alpine Health Alliance',       yoyChange:'-11.4%', adminFee:'Matched',    perfGuarantee:'Met',      rebate:'$22,100', milestone:'Pending Board Approval'  },
    { sponsor:'Colorado Employers Group',     yoyChange:'-6.8%',  adminFee:'Matched',    perfGuarantee:'Partial',  rebate:'$9,800',  milestone:'Renewal Signed Q1 2026' },
    { sponsor:'Summit Valley Schools',        yoyChange:'-4.3%',  adminFee:'Adj. +$200', perfGuarantee:'Met',      rebate:'$6,200',  milestone:'Proposal Delivered'     },
    { sponsor:'Centennial Construction Co.',  yoyChange:'-9.7%',  adminFee:'Matched',    perfGuarantee:'Exceeded', rebate:'$11,500', milestone:'Renewal Signed Q1 2026' },
    { sponsor:'Mile High Municipal Trust',    yoyChange:'-2.8%',  adminFee:'Adj. -$100', perfGuarantee:'Partial',  rebate:'$3,600',  milestone:'Under Negotiation'      },
    { sponsor:'Peak Performance Plans',       yoyChange:'-2.2%',  adminFee:'Matched',    perfGuarantee:'Met',      rebate:'$2,800',  milestone:'Proposal Delivered'     },
    { sponsor:'Rocky Mountain School Dist.',  yoyChange:'-1.8%',  adminFee:'Matched',    perfGuarantee:'Partial',  rebate:'$2,100',  milestone:'In Review'              }
];

var TPA_FIDUCIARY_LEDGER = [
    { sponsor:'Mountain West Benefits',       slaPenalties:'$0',     planAmendments:0, avgResponseTime:'1.4d', feeDisclosure:'Current', auditStatus:'Clean'       },
    { sponsor:'Alpine Health Alliance',       slaPenalties:'$1,200', planAmendments:1, avgResponseTime:'2.1d', feeDisclosure:'Current', auditStatus:'Reviewed'    },
    { sponsor:'Colorado Employers Group',     slaPenalties:'$0',     planAmendments:0, avgResponseTime:'1.8d', feeDisclosure:'Current', auditStatus:'Clean'       },
    { sponsor:'Summit Valley Schools',        slaPenalties:'$800',   planAmendments:2, avgResponseTime:'3.2d', feeDisclosure:'Pending', auditStatus:'Under Review' },
    { sponsor:'Centennial Construction Co.',  slaPenalties:'$0',     planAmendments:0, avgResponseTime:'1.1d', feeDisclosure:'Current', auditStatus:'Clean'       },
    { sponsor:'Mile High Municipal Trust',    slaPenalties:'$400',   planAmendments:1, avgResponseTime:'2.8d', feeDisclosure:'Current', auditStatus:'Reviewed'    },
    { sponsor:'Peak Performance Plans',       slaPenalties:'$0',     planAmendments:0, avgResponseTime:'2.2d', feeDisclosure:'Current', auditStatus:'Clean'       },
    { sponsor:'Rocky Mountain School Dist.',  slaPenalties:'$0',     planAmendments:1, avgResponseTime:'1.9d', feeDisclosure:'Current', auditStatus:'Clean'       }
];

var TPA_CLAIMS_LEDGER = [
    { claimId:'CLM-44891', serviceDate:'Feb 14, 2026', npiTaxId:'1234567890', icdCpt:'M54.5 / 97110',   billed:'$480',    allowed:'$342',    memberShare:'$68',  remarkCode:'CO-45'  },
    { claimId:'CLM-44902', serviceDate:'Feb 15, 2026', npiTaxId:'9876543210', icdCpt:'M17.11 / 99213',  billed:'$320',    allowed:'$280',    memberShare:'$56',  remarkCode:'PR-2'   },
    { claimId:'CLM-44918', serviceDate:'Feb 17, 2026', npiTaxId:'1122334455', icdCpt:'M16.1 / 27447',   billed:'$28,400', allowed:'$19,600', memberShare:'$0',   remarkCode:'OA'     },
    { claimId:'CLM-44933', serviceDate:'Feb 18, 2026', npiTaxId:'5544332211', icdCpt:'M75.1 / 97012',   billed:'$240',    allowed:'$192',    memberShare:'$38',  remarkCode:'CO-45'  },
    { claimId:'CLM-44947', serviceDate:'Feb 19, 2026', npiTaxId:'1234567890', icdCpt:'M54.4 / 72148',   billed:'$1,800',  allowed:'$1,440',  memberShare:'$288', remarkCode:'PR-2'   },
    { claimId:'CLM-44961', serviceDate:'Feb 21, 2026', npiTaxId:'6677889900', icdCpt:'M22.41 / 99214',  billed:'$360',    allowed:'$316',    memberShare:'$63',  remarkCode:'CO-4'   },
    { claimId:'CLM-44975', serviceDate:'Feb 22, 2026', npiTaxId:'9876543210', icdCpt:'M47.816 / 72100', billed:'$620',    allowed:'$496',    memberShare:'$99',  remarkCode:'CO-45'  },
    { claimId:'CLM-44988', serviceDate:'Feb 24, 2026', npiTaxId:'1122334455', icdCpt:'M54.51 / 97530',  billed:'$380',    allowed:'$304',    memberShare:'$61',  remarkCode:'PR-2'   }
];


/* --- Member Outcomes Report Detail Data --- */

var TPA_MEMBER_OUTCOMES = [
    { memberId:'MBR-0441', diagGroup:'Lower Back',      painInitial:7.2, painCurrent:2.1, rtwExpected:'Apr 14, 2026', rtwActual:'Mar 28, 2026', milestoneCompletion:92, csat:9 },
    { memberId:'MBR-0892', diagGroup:'Joint (Knee)',     painInitial:6.8, painCurrent:3.2, rtwExpected:'May 02, 2026', rtwActual:'May 02, 2026', milestoneCompletion:68, csat:8 },
    { memberId:'MBR-1103', diagGroup:'Joint (Hip)',      painInitial:8.1, painCurrent:1.8, rtwExpected:'Mar 30, 2026', rtwActual:'Mar 22, 2026', milestoneCompletion:100, csat:10 },
    { memberId:'MBR-0574', diagGroup:'Cervical Spine',   painInitial:6.4, painCurrent:2.9, rtwExpected:'Jun 15, 2026', rtwActual:'Jun 09, 2026', milestoneCompletion:85, csat:8 },
    { memberId:'MBR-1247', diagGroup:'Lower Back',       painInitial:7.9, painCurrent:3.6, rtwExpected:'Aug 01, 2026', rtwActual:'Pending',      milestoneCompletion:54, csat:7 },
    { memberId:'MBR-0318', diagGroup:'Shoulder',         painInitial:5.8, painCurrent:2.4, rtwExpected:'Sep 10, 2026', rtwActual:'Pending',      milestoneCompletion:38, csat:9 },
    { memberId:'MBR-0785', diagGroup:'Joint (Knee)',     painInitial:7.4, painCurrent:1.6, rtwExpected:'Jul 07, 2026', rtwActual:'Jun 28, 2026', milestoneCompletion:100, csat:10 },
    { memberId:'MBR-1056', diagGroup:'Lower Back',       painInitial:6.2, painCurrent:4.1, rtwExpected:'Oct 01, 2026', rtwActual:'Pending',      milestoneCompletion:22, csat:7 }
];

var TPA_SAVINGS_DETAIL = [
    { claimId:'CLM-44918', procedureDesc:'Lumbar Fusion (L4-L5)',          tpaCost:'$42,800', drCost:'$8,200',   savings:'$34,600', savingsCategory:'Volume Avoidance', dateSaved:'Feb 17, 2026' },
    { claimId:'CLM-45102', procedureDesc:'Total Knee Replacement',          tpaCost:'$38,400', drCost:'$0',       savings:'$38,400', savingsCategory:'Volume Avoidance', dateSaved:'Feb 28, 2026' },
    { claimId:'CLM-44891', procedureDesc:'Lumbar Epidural Steroid Inj.',    tpaCost:'$4,200',  drCost:'$480',     savings:'$3,720',  savingsCategory:'Rate Reduction',   dateSaved:'Feb 14, 2026' },
    { claimId:'CLM-45211', procedureDesc:'Hip Arthroplasty',                tpaCost:'$51,600', drCost:'$0',       savings:'$51,600', savingsCategory:'Volume Avoidance', dateSaved:'Mar 04, 2026' },
    { claimId:'CLM-44947', procedureDesc:'Lumbar MRI (Outpatient Hosp.)',   tpaCost:'$3,200',  drCost:'$1,800',   savings:'$1,400',  savingsCategory:'Site Shift',       dateSaved:'Feb 19, 2026' },
    { claimId:'CLM-45088', procedureDesc:'Rotator Cuff Repair (Arthro.)',   tpaCost:'$22,100', drCost:'$0',       savings:'$22,100', savingsCategory:'Volume Avoidance', dateSaved:'Feb 26, 2026' },
    { claimId:'CLM-44961', procedureDesc:'Cervical Disc Injection (C5-C6)', tpaCost:'$5,400',  drCost:'$360',     savings:'$5,040',  savingsCategory:'Rate Reduction',   dateSaved:'Feb 21, 2026' },
    { claimId:'CLM-45144', procedureDesc:'Knee Arthroscopy',                tpaCost:'$18,900', drCost:'$0',       savings:'$18,900', savingsCategory:'Volume Avoidance', dateSaved:'Mar 01, 2026' }
];
