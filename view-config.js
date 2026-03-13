/* --- ADX View Configuration Registry --- */
/* Add a new audience by adding an entry to VIEW_CONFIG and tagging reports in REPORT_REGISTRY */

const VIEW_CONFIG = {

    msk_physician: {
        key: 'msk_physician',
        label: 'MSK Physician Practice',
        description: 'Musculoskeletal physician practice management',

        nav: [
            { id: 'patients',  label: '{org}', mode: 'patients',  isHome: true },
            { id: 'analytics', label: 'Analytics',   href: 'analytics.html' },
            { id: 'messages',  label: 'Messages',    href: '#.html' }
        ],

        homeModes: {
            patients: {
                dataSource: 'PATIENTS',
                sortField: 'lastSeenDate',
                sortDir: 'desc',
                itemMainField: 'name',
                itemSubField: 'sub',
                searchPlaceholder: 'Search patients...',
                overviewEntity: 'PRACTICES[0]',
                overviewTemplate: 'practice',
                overviewHeader: { title: '{entity.name}', subtitle: 'Practice Impact & Performance' },
                overviewActions: ['Edit Practice', 'Run Report', 'Audit Billing', 'Staff Alert'],
                detailTemplate: 'patient',
                detailHeaderBuilder: 'patientHeader',
                detailHasTabs: true,
                tabs: ['Information', 'Evaluation & Treatment', 'Documents', 'Imaging', 'Messages', 'Analytics'],
                quickActions: ['BBHI-2', 'PROM', 'Schedule', 'Summary']
            },
            practices: {
                dataSource: 'PRACTICES',
                sortField: null,
                itemMainField: 'name',
                itemSubField: 'days',
                itemSubPrefix: 'Avg Pipeline: ',
                itemSubSuffix: ' Days',
                searchPlaceholder: 'Search practices...',
                showAddButton: true,
                addButtonLabel: '+ Add New Practice',
                overviewEntity: 'NETWORK_STATS',
                overviewTemplate: 'network',
                overviewHeader: { title: 'Network Management', subtitle: 'Operational Pulse & Strategic Evolution' },
                overviewActions: ['Message', 'Add User'],
                detailTemplate: 'practice',
                detailHeaderBuilder: 'practiceHeader',
                detailHasTabs: false
            }
        },

        analytics: {
            overviewRenderer: 'renderMSKOverview',
            hasAdHoc: true
        },

        dataFiles: []
    },

    dr_admin: {
        key: 'dr_admin',
        label: 'Derived Results Admin',
        description: 'Network administration and oversight across all participating audiences',

        nav: [
            { id: 'entities',  label: '{org}', mode: 'entities', isHome: true },
            { id: 'analytics', label: 'Analytics',  href: 'analytics.html' },
            { id: 'messages',  label: 'Messages',   href: '#.html' }
        ],

        homeModes: {
            entities: {
                dataSource: 'DR_ADMIN_ENTITIES',
                sortField: 'name',
                sortDir: 'asc',
                itemMainField: 'name',
                itemSubField: 'type',
                searchPlaceholder: 'Search participants...',
                overviewEntity: 'DR_ADMIN_OVERVIEW',
                overviewTemplate: 'drAdminOverview',
                overviewHeader: { title: 'Network Overview', subtitle: 'All participating audiences and network health' },
                overviewActions: ['Add Participant', 'Export'],
                detailTemplate: 'drAdminDetail',
                detailHeaderBuilder: 'simpleHeader',
                detailHasTabs: false
            }
        },

        analytics: {
            overviewRenderer: 'renderDRAdminAnalytics',
            hasAdHoc: true
        },

        dataFiles: ['mock-data-admin.js']
    },

    tpa: {
        key: 'tpa',
        label: 'Third Party Administrators',
        description: 'Plan sponsor client management, member analytics, and cost reporting',

        nav: [
            { id: 'clients',   label: '{org}', mode: 'clients', isHome: true },
            { id: 'analytics', label: 'Analytics',  href: 'analytics.html' },
            { id: 'messages',  label: 'Messages',   href: '#.html' }
        ],

        homeModes: {
            clients: {
                dataSource: 'TPA_CLIENTS',
                sortField: 'savingsVelocity',
                sortDir: 'desc',
                itemMainField: 'name',
                itemSubField: 'savingsVelocityLabel',
                itemSubSuffix: ' Savings',
                searchPlaceholder: 'Search plan sponsors...',
                overviewEntity: 'TPA_OVERVIEW',
                overviewTemplate: 'tpaOverview',
                overviewHeader: { title: '{org} Dashboard', subtitle: 'Member and plan sponsor analytics' },
                overviewActions: [{ label: 'Support' }, { label: 'Run Report', href: 'analytics.html' }],
                detailTemplate: 'tpaClientDetail',
                detailHeaderBuilder: 'tpaClientHeader',
                detailHasTabs: false
            }
        },

        analytics: {
            overviewRenderer: 'renderTPAAnalytics',
            hasAdHoc: true
        },

        dataFiles: ['mock-data-tpa.js']
    },

    researcher: {
        key: 'researcher',
        label: 'Medical Researcher',
        description: 'Research project management, de-identified data access, and program analytics',

        nav: [
            { id: 'projects',  label: '{org}', mode: 'projects', isHome: true },
            { id: 'analytics', label: 'Analytics',   href: 'analytics.html' },
            { id: 'messages',  label: 'Messages',    href: '#.html' }
        ],

        homeModes: {
            projects: {
                dataSource: 'RESEARCH_PROJECTS',
                sortField: 'lastUpdated',
                sortDir: 'desc',
                itemMainField: 'name',
                itemSubField: 'status',
                searchPlaceholder: 'Search projects...',
                overviewEntity: 'RESEARCH_OVERVIEW',
                overviewTemplate: 'researchOverview',
                overviewHeader: { title: 'Research Hub', subtitle: 'Active programs and de-identified data access' },
                overviewActions: ['New Project', 'Export Data'],
                detailTemplate: 'researchProjectDetail',
                detailHeaderBuilder: 'simpleHeader',
                detailHasTabs: true,
                tabs: ['Overview', 'Cohort', 'Data Sets', 'Publications'],
                quickActions: ['Request Data', 'Run Query']
            }
        },

        analytics: {
            overviewRenderer: 'renderResearchAnalytics',
            hasAdHoc: true
        },

        dataFiles: ['mock-data-researcher.js']
    }
};

/* --- Analytics Report Registry --- */
/* Each report is tagged with the audiences that can see it */

const REPORT_REGISTRY = {
    /* MSK Physician Reports */
    overview:  { name: 'Network Outcomes Overview',   cat: '_top',   desc: '', audiences: ['msk_physician'] },
    r1:  { name: 'Outcomes by Practice',              cat: 'NETWORK OPERATIONS',       desc: 'Which practices are current on tracking, which are lagging, ranked by completion rate.', audiences: ['msk_physician'] },
    r2:  { name: 'Outcomes by Provider',              cat: 'NETWORK OPERATIONS',       desc: 'Patient improvement metrics compared across all participating physicians, flagging outliers in both directions.', audiences: ['msk_physician'] },
    r3:  { name: 'Referral ROI Summary',              cat: 'NETWORK OPERATIONS',       desc: 'Referrals sent vs. outcomes achieved vs. cost savings generated — the core proof-of-model report.', audiences: ['msk_physician'] },
    r4:  { name: 'My Patient Outcomes',               cat: 'PARTICIPATING PHYSICIANS', desc: 'Longitudinal outcome trends for their patient cohort, with network benchmark comparison.', audiences: ['msk_physician'] },
    r5:  { name: 'My Referral Activity',              cat: 'PARTICIPATING PHYSICIANS', desc: 'Referrals received this month, last month, rolling 90 days, with revenue attribution.', audiences: ['msk_physician'] },
    r6:  { name: 'Care Gap Report',                   cat: 'PARTICIPATING PHYSICIANS', desc: 'Patients with overdue orders, missing PROMs, or flagged non-compliance, sorted by urgency.', audiences: ['msk_physician'] },
    r7:  { name: 'PROM Trend Report',                 cat: 'PARTICIPATING PHYSICIANS', desc: 'Outcome measure scores over time per patient, filterable by diagnosis and subspecialty.', audiences: ['msk_physician'] },
    r8:  { name: 'Tracking Compliance Status',        cat: 'PRACTICE ADMINS',          desc: 'Which visits are documented, which are incomplete, which are overdue — the daily worklist.', audiences: ['msk_physician'] },
    r9:  { name: 'Billing Status Summary',            cat: 'PRACTICE ADMINS',          desc: 'Claims clean vs. outstanding, last processed date, items requiring action.', audiences: ['msk_physician'] },
    r10: { name: 'Staff Productivity Report',         cat: 'PRACTICE ADMINS',          desc: 'Entries completed per day/week by user, useful for workload management and catching gaps when staff turns over.', audiences: ['msk_physician'] },
    r11: { name: 'Episode of Care Summary',           cat: 'OTHER',                    desc: 'Full patient journey from first referral through discharge, with all visits, outcomes, and cost data in one view.', audiences: ['msk_physician'] },
    r12: { name: 'Network Standing Report',           cat: 'OTHER',                    desc: "Each practice's compliance rate, referral volume, and outcome scores in a single scorecard.", audiences: ['msk_physician'] },

    /* DR Admin Reports */
    dr_overview: { name: 'Network Health Overview', cat: '_top', desc: '', audiences: ['dr_admin'] },
    dr1: { name: 'Network Health Dashboard',          cat: 'NETWORK HEALTH',     desc: 'Overall network compliance, savings trajectory, and operational alerts.', audiences: ['dr_admin'] },
    dr2: { name: 'Audience Participation Summary',    cat: 'NETWORK HEALTH',     desc: 'Active practices, TPAs, and researchers with engagement scores.', audiences: ['dr_admin'] },
    dr3: { name: 'Compliance Audit Trail',            cat: 'NETWORK HEALTH',     desc: 'Tracking completion rates across all participants, flagging delinquencies.', audiences: ['dr_admin'] },
    dr4: { name: 'Practice Performance Comparison',   cat: 'AUDIENCE ANALYTICS', desc: 'Side-by-side cost and outcome metrics for all participating practices.', audiences: ['dr_admin'] },
    dr5: { name: 'TPA Savings Attribution',           cat: 'AUDIENCE ANALYTICS', desc: 'Cost savings generated per TPA client with member-level breakdowns.', audiences: ['dr_admin'] },
    dr6: { name: 'Research Program Status',           cat: 'AUDIENCE ANALYTICS', desc: 'Active research projects, IRB status, and data utilization metrics.', audiences: ['dr_admin'] },

    /* TPA Reports */
    tpa_overview:    { name: '{org} Performance Overview',  cat: '_top',          desc: '', audiences: ['tpa'] },
    tpa_perf1:       { name: 'Current Active MSK Case Lifecycle',        cat: 'PERFORMANCE',   desc: 'Comprehensive view of clinical progression and financial liability for all members currently engaged in the MSK carve-out.', audiences: ['tpa'] },
    tpa_perf2:       { name: 'Case Friction & Intervention Log',         cat: 'PERFORMANCE',   desc: 'Early warning system for cases experiencing clinical, administrative, or sentiment-based barriers.', audiences: ['tpa'] },
    tpa_perf3:       { name: 'High-Risk Stop Loss & Predictive Reserve', cat: 'PERFORMANCE',   desc: 'Predictive analysis of members approaching the Specific Stop Loss threshold to trigger proactive TPA intervention.', audiences: ['tpa'] },
    tpa_renewal:     { name: 'MSK Carve-Out Renewal & ROI Validation',              cat: 'PLAN SPONSOR',  desc: 'Savings attribution, outcome verification, and program ROI formatted for plan renewal conversations.', audiences: ['tpa'] },
    tpa3:            { name: 'Plan Sponsor Fiduciary Scorecard',      cat: 'PLAN SPONSOR',  desc: 'Utilization and outcome scores for each plan sponsor.', audiences: ['tpa'] },
    tpa4:            { name: 'Claims & Billing Transparency Summary',    cat: 'PLAN SPONSOR',  desc: 'Claims throughput, denials, and outstanding balances by client.', audiences: ['tpa'] },
    tpa1:            { name: 'Member Clinical Outcomes & Productivity Tracker',     cat: 'MEMBER OUTCOMES', desc: 'Patient improvement metrics across all plan sponsor clients.', audiences: ['tpa'] },
    tpa2:            { name: 'Comparative Cost Savings & ROI by Client',      cat: 'MEMBER OUTCOMES', desc: 'Savings generated per plan sponsor with per-member averages.', audiences: ['tpa'] },

    /* Researcher Reports */
    res_overview: { name: 'Research Program Overview', cat: '_top', desc: '', audiences: ['researcher'] },
    res1: { name: 'Cohort Analysis',                  cat: 'RESEARCH PROGRAMS', desc: 'De-identified cohort demographics, diagnoses, and outcome distributions.', audiences: ['researcher'] },
    res2: { name: 'Outcome Trends by Protocol',       cat: 'RESEARCH PROGRAMS', desc: 'Longitudinal outcome data across treatment protocols and patient groups.', audiences: ['researcher'] },
    res3: { name: 'Data Completeness Report',         cat: 'DATA QUALITY',      desc: 'Missing fields, incomplete records, and data quality scores by dataset.', audiences: ['researcher'] },
    res4: { name: 'IRB & Compliance Status',          cat: 'DATA QUALITY',      desc: 'Institutional review board approvals, expiration dates, and renewal status.', audiences: ['researcher'] },

    /* Shared Reports */
    adhoc: { name: 'Ad Hoc Report Builder', cat: '_adhoc', desc: 'Build custom queries and visualizations from any data in the network.', audiences: ['msk_physician', 'dr_admin', 'tpa', 'researcher'] }
};
