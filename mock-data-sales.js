/* --- Sales Engine Mock Data --- */

var SALES_BROKERS = [
    {
        id: 'BRK-01',
        name: 'Rick Delgado',
        firm: 'Pinnacle Benefits Group',
        gaAffiliation: 'National Benefits Alliance',
        groups: [
            {
                id: 'GRP-01', name: 'Acme Manufacturing', lives: 450, type: 'acquisition',
                claimsAccuracy: 99.2, memberGrievances: 1, memberNPS: 72, auditReadiness: 'On Track', fundingStatus: 'Fully Insured',
                industry: 'Manufacturing', sic: '3599', incumbent: 'Blue Cross', carrier: 'BUCA',
                currentPEPY: 19250, benchmarkPEPY: 16800, pepyDelta: 14.6,
                renewalDate: 'Jan 1, 2027', daysToRenewal: 288, hasAudit: false,
                planType: 'Self-Funded', status: 'prospect', dataBridgeStatus: 'not-started',
                brokerCommission: '$48/member/mo', scheduleA: 142500, scheduleC: 28200,
                incumbentStated:     { networkFees: 12600, pbmRebates: 0,     stopLoss: 38400, admin: 18000 },
                incumbentNormalized: { networkFees: 14200, pbmRebates: -8400, stopLoss: 42100, admin: 22800 },
                tpaProposed:         { networkFees: 8400,  pbmRebates: -6200, stopLoss: 32000, admin: 14400 },
                ninetyDay: { adjudicationAccuracy: 98.4, idCardDelivery: 85, slaPerformance: 96.2, portalActivation: 72, providerAccuracy: 94, pharmacyIntegration: 100 }
            },
            {
                id: 'GRP-02', name: 'Summit Logistics Corp', lives: 310, type: 'acquisition',
                claimsAccuracy: 96.5, memberGrievances: 8, memberNPS: 48, auditReadiness: 'Not Started', fundingStatus: 'Fully Insured',
                industry: 'Transportation', sic: '4210', incumbent: 'Cigna', carrier: 'BUCA',
                currentPEPY: 21400, benchmarkPEPY: 17200, pepyDelta: 24.4,
                renewalDate: 'Mar 1, 2027', daysToRenewal: 347, hasAudit: true,
                planType: 'Self-Funded', status: 'prospect', dataBridgeStatus: 'not-started',
                brokerCommission: '$52/member/mo', scheduleA: 96200, scheduleC: 22100,
                incumbentStated:     { networkFees: 14800, pbmRebates: 0,     stopLoss: 44200, admin: 21600 },
                incumbentNormalized: { networkFees: 16900, pbmRebates: -9200, stopLoss: 48800, admin: 26400 },
                tpaProposed:         { networkFees: 9600,  pbmRebates: -7100, stopLoss: 35200, admin: 15800 },
                ninetyDay: { adjudicationAccuracy: 97.8, idCardDelivery: 0, slaPerformance: 0, portalActivation: 0, providerAccuracy: 91, pharmacyIntegration: 88 }
            },
            {
                id: 'GRP-03', name: 'Heritage Senior Living', lives: 185, type: 'retention',
                claimsAccuracy: 97.2, memberGrievances: 8, retentionStatus: 'At Risk', memberNPS: 54, auditReadiness: 'Pending Review', fundingStatus: 'Self-Funded',
                industry: 'Healthcare', sic: '8051', incumbent: 'TPA (Current)', carrier: 'TPA',
                currentPEPY: 24800, benchmarkPEPY: 22100, pepyDelta: 12.2,
                renewalDate: 'Jul 1, 2026', daysToRenewal: 104, hasAudit: false,
                planType: 'Self-Funded', status: 'active', dataBridgeStatus: 'complete',
                brokerCommission: '$38/member/mo', scheduleA: 84200, scheduleC: 18400,
                incumbentStated:     { networkFees: 18200, pbmRebates: -4200, stopLoss: 52400, admin: 16800 },
                incumbentNormalized: { networkFees: 18200, pbmRebates: -4200, stopLoss: 52400, admin: 16800 },
                tpaProposed:         { networkFees: 18200, pbmRebates: -4200, stopLoss: 52400, admin: 16800 },
                ninetyDay: { adjudicationAccuracy: 99.1, idCardDelivery: 100, slaPerformance: 97.8, portalActivation: 88, providerAccuracy: 96, pharmacyIntegration: 100 }
            },
            {
                id: 'GRP-04', name: 'Redstone Energy Partners', lives: 620, type: 'acquisition',
                claimsAccuracy: 98.8, memberGrievances: 3, memberNPS: 68, auditReadiness: 'Complete', fundingStatus: 'Fully Insured',
                industry: 'Energy', sic: '1311', incumbent: 'Aetna', carrier: 'BUCA',
                currentPEPY: 17800, benchmarkPEPY: 15400, pepyDelta: 15.6,
                renewalDate: 'Sep 1, 2026', daysToRenewal: 166, hasAudit: true,
                planType: 'Self-Funded', status: 'prospect', dataBridgeStatus: 'not-started',
                brokerCommission: '$44/member/mo', scheduleA: 163600, scheduleC: 38400,
                incumbentStated:     { networkFees: 11200, pbmRebates: 0,     stopLoss: 36200, admin: 16400 },
                incumbentNormalized: { networkFees: 13100, pbmRebates: -7800, stopLoss: 40600, admin: 20800 },
                tpaProposed:         { networkFees: 7800,  pbmRebates: -5600, stopLoss: 28800, admin: 13200 },
                ninetyDay: { adjudicationAccuracy: 0, idCardDelivery: 0, slaPerformance: 0, portalActivation: 0, providerAccuracy: 0, pharmacyIntegration: 0 }
            }
        ]
    },
    {
        id: 'BRK-02',
        name: 'Sandra Chen',
        firm: 'Pacific Coast Benefits',
        gaAffiliation: 'Western GA Consortium',
        groups: [
            {
                id: 'GRP-05', name: 'Coastal Hospitality Group', lives: 280, type: 'acquisition',
                claimsAccuracy: 97.4, memberGrievances: 4, memberNPS: 61, auditReadiness: 'Not Required', fundingStatus: 'Fully Insured',
                industry: 'Hospitality', sic: '7011', incumbent: 'UnitedHealthcare', carrier: 'BUCA',
                currentPEPY: 20100, benchmarkPEPY: 16400, pepyDelta: 22.6,
                renewalDate: 'Nov 1, 2026', daysToRenewal: 227, hasAudit: false,
                planType: 'Self-Funded', status: 'prospect', dataBridgeStatus: 'not-started',
                brokerCommission: '$55/member/mo', scheduleA: 92400, scheduleC: 19800,
                incumbentStated:     { networkFees: 13400, pbmRebates: 0,     stopLoss: 41600, admin: 19800 },
                incumbentNormalized: { networkFees: 15200, pbmRebates: -8800, stopLoss: 46200, admin: 24200 },
                tpaProposed:         { networkFees: 8800,  pbmRebates: -6400, stopLoss: 33400, admin: 14600 },
                ninetyDay: { adjudicationAccuracy: 0, idCardDelivery: 0, slaPerformance: 0, portalActivation: 0, providerAccuracy: 0, pharmacyIntegration: 0 }
            },
            {
                id: 'GRP-06', name: 'TechVista Solutions', lives: 150, type: 'retention',
                claimsAccuracy: 99.1, memberGrievances: 1, retentionStatus: 'Stable', memberNPS: 78, auditReadiness: 'On Track', fundingStatus: 'Self-Funded',
                industry: 'Technology', sic: '7372', incumbent: 'TPA (Current)', carrier: 'TPA',
                currentPEPY: 16200, benchmarkPEPY: 15800, pepyDelta: 2.5,
                renewalDate: 'Jun 1, 2026', daysToRenewal: 74, hasAudit: false,
                planType: 'Self-Funded', status: 'active', dataBridgeStatus: 'complete',
                brokerCommission: '$32/member/mo', scheduleA: 57600, scheduleC: 14200,
                incumbentStated:     { networkFees: 9800,  pbmRebates: -3200, stopLoss: 34600, admin: 14200 },
                incumbentNormalized: { networkFees: 9800,  pbmRebates: -3200, stopLoss: 34600, admin: 14200 },
                tpaProposed:         { networkFees: 9800,  pbmRebates: -3200, stopLoss: 34600, admin: 14200 },
                ninetyDay: { adjudicationAccuracy: 99.4, idCardDelivery: 100, slaPerformance: 98.6, portalActivation: 91, providerAccuracy: 97, pharmacyIntegration: 100 }
            },
            {
                id: 'GRP-07', name: 'Mountain View School District', lives: 520, type: 'acquisition',
                claimsAccuracy: 98.2, memberGrievances: 2, memberNPS: 65, auditReadiness: 'Complete', fundingStatus: 'Fully Insured',
                industry: 'Education', sic: '8211', incumbent: 'Anthem', carrier: 'BUCA',
                currentPEPY: 18600, benchmarkPEPY: 15900, pepyDelta: 17.0,
                renewalDate: 'Aug 1, 2026', daysToRenewal: 135, hasAudit: true,
                planType: 'Self-Funded', status: 'prospect', dataBridgeStatus: 'not-started',
                brokerCommission: '$42/member/mo', scheduleA: 131000, scheduleC: 31200,
                incumbentStated:     { networkFees: 12200, pbmRebates: 0,     stopLoss: 38800, admin: 17200 },
                incumbentNormalized: { networkFees: 14000, pbmRebates: -8200, stopLoss: 43400, admin: 21800 },
                tpaProposed:         { networkFees: 8200,  pbmRebates: -5800, stopLoss: 30200, admin: 13800 },
                ninetyDay: { adjudicationAccuracy: 0, idCardDelivery: 0, slaPerformance: 0, portalActivation: 0, providerAccuracy: 0, pharmacyIntegration: 0 }
            }
        ]
    },
    {
        id: 'BRK-03',
        name: 'Marcus Williams',
        firm: 'Heartland Employee Benefits',
        gaAffiliation: 'Midwest Benefits Group',
        groups: [
            {
                id: 'GRP-08', name: 'Prairie Agriculture Co-op', lives: 340, type: 'retention',
                claimsAccuracy: 98.4, memberGrievances: 3, retentionStatus: 'Stable', memberNPS: 71, auditReadiness: 'On Track', fundingStatus: 'Self-Funded',
                industry: 'Agriculture', sic: '0100', incumbent: 'TPA (Current)', carrier: 'TPA',
                currentPEPY: 17400, benchmarkPEPY: 16200, pepyDelta: 7.4,
                renewalDate: 'Oct 1, 2026', daysToRenewal: 196, hasAudit: true,
                planType: 'Self-Funded', status: 'active', dataBridgeStatus: 'complete',
                brokerCommission: '$36/member/mo', scheduleA: 73400, scheduleC: 16800,
                incumbentStated:     { networkFees: 10400, pbmRebates: -3600, stopLoss: 36200, admin: 15200 },
                incumbentNormalized: { networkFees: 10400, pbmRebates: -3600, stopLoss: 36200, admin: 15200 },
                tpaProposed:         { networkFees: 10400, pbmRebates: -3600, stopLoss: 36200, admin: 15200 },
                ninetyDay: { adjudicationAccuracy: 98.8, idCardDelivery: 100, slaPerformance: 97.2, portalActivation: 82, providerAccuracy: 95, pharmacyIntegration: 100 }
            },
            {
                id: 'GRP-09', name: 'Central States Trucking', lives: 410, type: 'acquisition',
                claimsAccuracy: 95.8, memberGrievances: 7, memberNPS: 42, auditReadiness: 'Not Started', fundingStatus: 'Fully Insured',
                industry: 'Transportation', sic: '4213', incumbent: 'Blue Cross', carrier: 'BUCA',
                currentPEPY: 22800, benchmarkPEPY: 17600, pepyDelta: 29.5,
                renewalDate: 'Dec 1, 2026', daysToRenewal: 257, hasAudit: false,
                planType: 'Self-Funded', status: 'prospect', dataBridgeStatus: 'not-started',
                brokerCommission: '$58/member/mo', scheduleA: 142800, scheduleC: 34200,
                incumbentStated:     { networkFees: 15800, pbmRebates: 0,     stopLoss: 48200, admin: 23400 },
                incumbentNormalized: { networkFees: 18200, pbmRebates: -10400, stopLoss: 54600, admin: 28800 },
                tpaProposed:         { networkFees: 10200, pbmRebates: -7800,  stopLoss: 36400, admin: 16200 },
                ninetyDay: { adjudicationAccuracy: 0, idCardDelivery: 0, slaPerformance: 0, portalActivation: 0, providerAccuracy: 0, pharmacyIntegration: 0 }
            },
            {
                id: 'GRP-10', name: 'Heartland Community College', lives: 180, type: 'retention',
                claimsAccuracy: 98.8, memberGrievances: 6, retentionStatus: 'At Risk', memberNPS: 58, auditReadiness: 'Pending Review', fundingStatus: 'Self-Funded',
                industry: 'Education', sic: '8222', incumbent: 'TPA (Current)', carrier: 'TPA',
                currentPEPY: 15800, benchmarkPEPY: 15200, pepyDelta: 3.9,
                renewalDate: 'Jul 1, 2026', daysToRenewal: 104, hasAudit: false,
                planType: 'Self-Funded', status: 'active', dataBridgeStatus: 'complete',
                brokerCommission: '$30/member/mo', scheduleA: 64800, scheduleC: 12600,
                incumbentStated:     { networkFees: 9200,  pbmRebates: -2800, stopLoss: 32400, admin: 13600 },
                incumbentNormalized: { networkFees: 9200,  pbmRebates: -2800, stopLoss: 32400, admin: 13600 },
                tpaProposed:         { networkFees: 9200,  pbmRebates: -2800, stopLoss: 32400, admin: 13600 },
                ninetyDay: { adjudicationAccuracy: 99.2, idCardDelivery: 100, slaPerformance: 98.1, portalActivation: 86, providerAccuracy: 96, pharmacyIntegration: 100 }
            }
        ]
    }
];

var SALES_FIDUCIARY_DOCS = [
    { id: 'doc-01', name: 'CAA Transparency Disclosure',    status: 'auto-populated',  legalApproved: true,  fiduciarySignoff: false, desc: 'Mandatory report under the Consolidated Appropriations Act (2021) disclosing all direct and indirect compensation paid to the TPA and Broker.' },
    { id: 'doc-02', name: 'ASA Contract Review',            status: 'pending-review',  legalApproved: false, fiduciarySignoff: false, desc: 'A side-by-side comparison of the standard Administrative Services Agreement versus the Sales Promise version that includes your specific pricing and performance guarantees.' },
    { id: 'doc-03', name: 'ERISA 408(b)(2) Fee Disclosure', status: 'complete',        legalApproved: true,  fiduciarySignoff: true,  desc: 'The required document that allows plan fiduciaries to determine if TPA service fees are reasonable as defined by the Department of Labor.' },
    { id: 'doc-04', name: 'Stop-Loss RFP Comparison',       status: 'in-progress',     legalApproved: false, fiduciarySignoff: false, desc: 'Documentation proving that multiple stop-loss carriers were shopped to ensure the employer received the most competitive market rate.' },
    { id: 'doc-05', name: 'Plan Document Amendment',        status: 'pending-review',  legalApproved: false, fiduciarySignoff: false, desc: 'Formal legal updates to the employer health plan rules to ensure they align with the new TPA clinical and administrative workflows.' }
];

var SALES_MILESTONES = [
    { id: 'ms-01', phase: 'Pre-Implementation', task: 'Data Bridge Authentication',  status: 'complete',    dueDate: 'Week 1',  owner: 'TPA Ops',    desc: 'The secure connection established in the sales phase is now feeding the live claims system.' },
    { id: 'ms-02', phase: 'Pre-Implementation', task: 'Census File Transfer',        status: 'complete',    dueDate: 'Week 1',  owner: 'Broker',     desc: 'Employee demographic data transferred securely from the broker for enrollment processing.' },
    { id: 'ms-03', phase: 'Pre-Implementation', task: 'Claims History Extraction',   status: 'complete',    dueDate: 'Week 2',  owner: 'TPA Ops',    desc: '24-month claims history pulled via Data Bridge for actuarial modeling and stop-loss pricing.' },
    { id: 'ms-04', phase: 'Implementation',     task: 'Stop-Loss Placement',         status: 'in-progress', dueDate: 'Week 3',  owner: 'TPA Ops',    desc: 'Finalizing specific and aggregate stop-loss coverage based on extracted claims data.' },
    { id: 'ms-05', phase: 'Implementation',     task: 'ID Card Production',          status: 'in-progress', dueDate: 'Week 3',  owner: 'Vendor',     desc: 'Physical and digital member ID cards being produced with new plan identifiers and network info.' },
    { id: 'ms-06', phase: 'Implementation',     task: 'Provider Directory Load',     status: 'pending',     dueDate: 'Week 4',  owner: 'Network',    desc: 'The final data sync ensuring the Find a Doctor tool matches the contracted network.' },
    { id: 'ms-07', phase: 'Implementation',     task: 'Banking & Trust Setup',       status: 'pending',     dueDate: 'Week 4',  owner: 'Finance',    desc: 'Connecting the Employer Bank to the TPA Trust account for weekly claim funding cycles.' },
    { id: 'ms-08', phase: 'Post-Go-Live',       task: 'First Claims Adjudication',   status: 'pending',     dueDate: 'Week 6',  owner: 'TPA Ops',    desc: 'Initial batch of live claims processed through the new system to verify accuracy.' },
    { id: 'ms-09', phase: 'Post-Go-Live',       task: 'Member Portal Launch',        status: 'pending',     dueDate: 'Week 7',  owner: 'IT',         desc: 'Employee-facing portal goes live with EOB access, provider search, and digital ID cards.' },
    { id: 'ms-10', phase: 'Post-Go-Live',       task: '90-Day Performance Review',   status: 'pending',     dueDate: 'Week 12', owner: 'Account Mgr', desc: 'Comprehensive review mapping actual performance against original sales guarantees.', isGuarantee: true }
];

var SALES_TOP50 = [
    { memberId: 'MBR-2201', ytdSpend: 148200, primaryDx: 'M54.5 \u2014 Low Back Pain',           currentProvider: 'Denver Spine Institute',      inNetwork: true,  riskTier: 'high' },
    { memberId: 'MBR-2202', ytdSpend: 124800, primaryDx: 'M17.11 \u2014 Primary Osteoarthritis',  currentProvider: 'Rocky Mountain Ortho',        inNetwork: true,  riskTier: 'high' },
    { memberId: 'MBR-2203', ytdSpend: 112400, primaryDx: 'G89.29 \u2014 Chronic Pain Syndrome',   currentProvider: 'National Pain Centers',       inNetwork: false, riskTier: 'high' },
    { memberId: 'MBR-2204', ytdSpend: 98600,  primaryDx: 'M47.816 \u2014 Cervical Spondylosis',   currentProvider: 'Front Range Neurosurgery',    inNetwork: true,  riskTier: 'high' },
    { memberId: 'MBR-2205', ytdSpend: 87200,  primaryDx: 'M75.10 \u2014 Rotator Cuff Tear',       currentProvider: 'Peak Sports Medicine',        inNetwork: true,  riskTier: 'medium' },
    { memberId: 'MBR-2206', ytdSpend: 76400,  primaryDx: 'M51.16 \u2014 Lumbar Disc Degeneration', currentProvider: 'University Spine Center',    inNetwork: false, riskTier: 'medium' },
    { memberId: 'MBR-2207', ytdSpend: 68900,  primaryDx: 'M16.11 \u2014 Primary Hip OA',          currentProvider: 'Colorado Joint Replacement',  inNetwork: true,  riskTier: 'medium' },
    { memberId: 'MBR-2208', ytdSpend: 64200,  primaryDx: 'S83.511A \u2014 ACL Sprain',            currentProvider: 'Summit Orthopedics',          inNetwork: true,  riskTier: 'medium' },
    { memberId: 'MBR-2209', ytdSpend: 58400,  primaryDx: 'M79.3 \u2014 Panniculitis',             currentProvider: 'Midwest Pain Management',     inNetwork: false, riskTier: 'medium' },
    { memberId: 'MBR-2210', ytdSpend: 52800,  primaryDx: 'M48.06 \u2014 Lumbar Spinal Stenosis',  currentProvider: 'Heartland Spine Clinic',      inNetwork: true,  riskTier: 'low' },
    { memberId: 'MBR-2211', ytdSpend: 48200,  primaryDx: 'M23.20 \u2014 Meniscal Derangement',    currentProvider: 'Prairie Orthopedic Group',    inNetwork: true,  riskTier: 'low' },
    { memberId: 'MBR-2212', ytdSpend: 44600,  primaryDx: 'M76.60 \u2014 Achilles Tendinitis',     currentProvider: 'Foot & Ankle Specialists',    inNetwork: true,  riskTier: 'low' },
    { memberId: 'MBR-2213', ytdSpend: 41200,  primaryDx: 'M25.50 \u2014 Joint Pain',              currentProvider: 'Community Health Partners',   inNetwork: false, riskTier: 'low' },
    { memberId: 'MBR-2214', ytdSpend: 38800,  primaryDx: 'M62.81 \u2014 Muscle Weakness',         currentProvider: 'Regional Physical Therapy',   inNetwork: true,  riskTier: 'low' },
    { memberId: 'MBR-2215', ytdSpend: 35400,  primaryDx: 'M79.1 \u2014 Myalgia',                  currentProvider: 'Integrated Pain Solutions',   inNetwork: true,  riskTier: 'low' }
];
