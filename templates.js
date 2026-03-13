/* --- ADX Hierarchical UI Engine: Clinical, Ops, & Network --- */
const TEMPLATES = {
    network: (d) => `
        <div class="section-header"><h3>Daily: Operational Pulse</h3></div>
        <div class="daily-grid">
            <div class="daily-stat"><span class="stat-label">Network Referrals</span><span class="stat-value" style="font-size:2rem;">${d.referrals}</span></div>
            <div class="daily-stat"><span class="stat-label">Diag Throughput</span><span class="stat-value" style="font-size:2rem;">${d.throughput}</span></div>
            <div class="daily-stat alert"><span class="stat-label">Task Alerts (>48h)</span><span class="stat-value" style="font-size:2rem;">${d.alerts}</span></div>
            <div class="daily-stat"><span class="stat-label">Daily POS Coll</span><span class="stat-value" style="font-size:2rem;">${d.pos}</span></div>
        </div>
        <div class="section-header"><h3>Performance</h3></div>
        <div class="weekly-grid">
            <div class="weekly-stat"><span class="stat-label">Top Performers</span><div class="stat-value">${d.topPerformers}</div></div>
            <div class="weekly-stat"><span class="stat-label">Bottom Performers</span><div class="stat-value">${d.bottomPerformers}</div></div>
            <div class="weekly-stat"><span class="stat-label">Diag Accuracy</span><div class="stat-value">${d.accuracy}</div></div>
            <div class="weekly-stat"><span class="stat-label">Navigation Speed</span><div class="stat-value">${d.speed}</div></div>
        </div>
        <div style="margin-top:0.5rem; margin-bottom:1.5rem;"><a href="#.html" style="font-size:0.85rem; font-weight:700; color:var(--primary-navy);">View Full Performance Report →</a></div>
        <div class="section-header"><h3>The Value Proposition</h3></div>
        <table class="table-custom">
            <tbody>
                <tr><td><b>Net Savings Per Head</b></td><td>${d.savings}</td><td style="color:green; font-weight:800;">PASS</td></tr>
                <tr><td><b>Functional Trends</b></td><td>${d.success}</td><td>Aggregate Outcome</td></tr>
                <tr><td><b>Payer Mix / A/R</b></td><td>${d.aging}</td><td>Clearinghouse Status</td></tr>
                <tr><td><b>Network Utilization</b></td><td>${d.utilization}</td><td>Efficiency Index</td></tr>
            </tbody>
        </table>
        <div class="section-header"><h3>Strategic Evolution</h3></div>
        <div style="font-size:0.9rem; opacity:0.8; display:grid; grid-template-columns:1fr 1fr; gap:20px;">
            <div><b>Innovation Adoption:</b> ${d.innovation}</div>
            <div><b>Expansion Viability:</b> ${d.expansion}</div>
            <div><b>System Integrity:</b> ${d.integrity}</div>
            <div><b>Contractual Drift:</b> ${d.drift}</div>
        </div>`,

    practice: (d) => `
        <div class="section-header"><h3>Practice Impact</h3></div>
        <div class="daily-grid">
            <div class="daily-stat" style="border-left-color: #0a8f2c;"><span class="stat-label">Total Savings</span><span class="stat-value" style="color:#0a8f2c;">${d.totalSavings}</span></div>
            <div class="daily-stat"><span class="stat-label">Procedures Avoided</span><span class="stat-value">${d.procsAvoided}</span></div>
            <div class="daily-stat alert"><span class="stat-label">Unsigned Charts</span><span class="stat-value">${d.charts}</span></div>
            <div class="daily-stat"><span class="stat-label">POS Collected</span><span class="stat-value">${d.pos}</span></div>
        </div>
        <div class="section-header"><h3>Cost Comparison vs Standard Care</h3></div>
        <div class="deep-grid" style="grid-template-columns: 1fr 1fr 1fr;">
            <div class="deep-card" style="border-left: 4px solid #0a8f2c;">
                <h4>Practice Avg / Case</h4>
                <p style="font-size: 1.8rem; font-weight: 800; color: #0a8f2c; margin: 0.3rem 0 0 0;">${d.costPerCase}</p>
            </div>
            <div class="deep-card" style="border-left: 4px solid var(--secondary-red);">
                <h4>Standard Care Benchmark</h4>
                <p style="font-size: 1.8rem; font-weight: 800; color: var(--secondary-red); margin: 0.3rem 0 0 0;">$49,409</p>
            </div>
            <div class="deep-card" style="border-left: 4px solid var(--primary-navy);">
                <h4>Cost Reduction</h4>
                <p style="font-size: 2.2rem; font-weight: 800; color: var(--primary-navy); margin: 0.3rem 0 0 0;">${100-d.costPct}%</p>
            </div>
        </div>
        <div class="section-header"><h3>Performance Model</h3></div>
        <div class="weekly-grid">
            <div class="weekly-stat"><span class="stat-label">Time to Max Benefit</span><div class="stat-value">${d.timeToMax}</div></div>
            <div class="weekly-stat" style="grid-column: span 2;"><span class="stat-label">Referral Sources</span><div class="stat-value" style="font-size: 1rem;">PI: ${d.refPI} &nbsp;&bull;&nbsp; Employer: ${d.refEmployer} &nbsp;&bull;&nbsp; Self-Pay: ${d.refSelfPay}</div></div>
            <div class="weekly-stat"><span class="stat-label">Fee Autonomy</span><div class="stat-value" style="color: ${d.feeAutonomy === 'Independent' ? '#0a8f2c' : d.feeAutonomy === 'Under Review' ? '#D6001C' : '#cc8800'};">${d.feeAutonomy}</div></div>
        </div>
        <div class="section-header"><h3>Revenue Cycle</h3></div>
        <table class="table-custom">
            <tbody>
                <tr><td><b>A/R Aging</b></td><td>${d.ar}</td><td style="color:red;">Action Req</td></tr>
                <tr><td><b>Collection Ratio</b></td><td>${d.collection}</td><td style="color:green;">Healthy</td></tr>
                <tr><td><b>Net Revenue</b></td><td>${d.revenue}</td><td>Budget Met</td></tr>
            </tbody>
        </table>
        <div class="section-header"><h3>Staff Portal Access</h3></div>
        <p style="font-size:0.85rem; color:var(--text-muted); font-style:italic; margin-bottom:1.2rem;">Click to edit staff details</p>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; margin-bottom:2.5rem;">
            <div>
                <h4 style="font-size:0.75rem; font-weight:800; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.8rem;">Rendering Physicians</h4>
                <div style="display:flex; flex-direction:column; gap:0.5rem;">
                    ${d.staff.map(s => `<button class="staff-name physician">${s.physician}</button>`).join('')}
                </div>
            </div>
            <div>
                <h4 style="font-size:0.75rem; font-weight:800; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.8rem;">Administrative Staff</h4>
                <div style="display:flex; flex-direction:column; gap:0.5rem;">
                    ${d.staff.flatMap(s => s.admins).map(a => `<button class="staff-name admin">${a}</button>`).join('')}
                </div>
            </div>
        </div>`,

    patient: (p) => {
        const compClass = p.networkCompliance === 'Complete' ? 'green' : p.networkCompliance === 'Partial' ? 'yellow' : 'red';
        const respDir = p.response.startsWith('+') ? 'dir-up' : p.response.startsWith('-') ? 'dir-down' : '';
        const respIcon = p.response.startsWith('+') ? '▲' : p.response.startsWith('-') ? '▼' : '';
        const respLabel = p.response.startsWith('-') ? ' — flagged for review' : p.response.startsWith('+') ? ' — improving' : '';
        return `
        <div class="visit-context">
            <span class="ctx-badge navy">Referral: ${p.referralSource}</span>
            <span class="ctx-badge ${compClass}">Compliance: ${p.networkCompliance}</span>
            <span class="ctx-sep"></span>
            <span class="ctx-badge muted">Visit ${p.visitNum}</span>
            <span class="ctx-badge muted">Next: ${p.nextVisit}</span>
            <span class="ctx-sep"></span>
        </div>
        <div class="section-header"><h3>Current Visit</h3></div>
        <div class="daily-grid">
            <div class="daily-stat"><span class="stat-label">Chief Complaint</span><span class="stat-value" style="font-size:1.3rem;">${p.complaint}</span></div>
            <div class="daily-stat alert" style="background:#fff5f5;"><span class="stat-label" style="color:red;">ALLERGIES</span><span class="stat-value" style="font-size:1.3rem; color:red;">${p.allergies}</span></div>
            <div class="daily-stat"><span class="stat-label">Current Vitals</span><span class="stat-value" style="font-size:1.3rem;">${p.vitals}</span></div>
            <div class="daily-stat"><span class="stat-label">Active Orders</span><span class="stat-value" style="font-size:1.1rem;">${p.orders}</span></div>
        </div>
        <div class="section-header"><h3>Care Coordination</h3></div>
        <div class="weekly-grid">
            <div class="weekly-stat" style="grid-column: span 2;"><span class="stat-label">Active Problems</span><div class="stat-value" style="font-size:1.05rem;">${p.problems || '<span style="color:#999; font-style:italic;">Not yet documented</span>'}</div></div>
            <div class="weekly-stat"><span class="stat-label">Pain Trending</span><div class="stat-value">${p.pain}${p.priorPain && p.priorPain !== '—' ? ' <span style="font-size:0.85rem; color:#888; font-weight:600;">← was ' + p.priorPain + '</span>' : ''}</div></div>
            <div class="weekly-stat"><span class="stat-label">Functional Status <span class="narrative-label">Narrative</span></span><div class="narrative-tag">${p.functional}</div></div>
            <div class="weekly-stat"><span class="stat-label">Visit Summary</span><div class="stat-value" style="font-size:0.95rem;">${p.lastVisit}</div></div>
            <div class="weekly-stat"><span class="stat-label">Latest Results</span><div class="stat-value" style="font-size:0.95rem;">${p.results}</div></div>
        </div>
        <div class="section-header"><h3>Patient-Defined Outcomes</h3></div>
        <div class="prom-row">
            <div class="prom-card">
                <div class="prom-instrument">${p.pGoal1}</div>
                <div class="prom-score">${p.pGoal1Now}</div>
                <div class="prom-date">Start: ${p.pGoal1Start}</div>
            </div>
            <div class="prom-card">
                <div class="prom-instrument">${p.pGoal2}</div>
                <div class="prom-score">${p.pGoal2Now}</div>
                <div class="prom-date">Start: ${p.pGoal2Start}</div>
            </div>
        </div>
        <div class="section-header"><h3>Outcome Assessment</h3></div>
        <div class="deep-grid">
            <div class="deep-card">
                <h4>Medication Adherence</h4>
                <p><b>Adherence Rate:</b> ${p.adherence}<br><b>Medications:</b> ${p.meds}<br><b>Status:</b> Refill history verified. No gaps detected.</p>
            </div>
            <div class="deep-card">
                <h4>Treatment Response</h4>
                <p><span class="${respDir}">${respIcon} ${p.response}${respLabel}</span><br><b>Baseline Comparison:</b> ${p.results}<br><b>Pain Delta:</b> ${p.pain}</p>
            </div>
            <div class="deep-card">
                <h4>Care Gaps</h4>
                <p><b>Open Orders:</b> ${p.orders}<br><b>Compliance:</b> ${p.adherence}<br><b>Flag:</b> ${p.gaps}</p>
            </div>
        </div>
        <div class="section-header"><h3>Deep History</h3></div>
        <div class="deep-grid">
            <div class="deep-card muted-card">
                <h4>Comprehensive Surgical History</h4>
                <p>${p.surgery}<br><span style="color:#888; font-size:0.85rem;">Past procedures unrelated to current specialty.</span></p>
            </div>
            <div class="deep-card muted-card">
                <h4>Family Medical History</h4>
                <p>${p.family}<br><span style="color:#888; font-size:0.85rem;">Used for initial risk stratification.</span></p>
            </div>
            <div class="deep-card muted-card">
                <h4>Archived Records</h4>
                <p>${p.archive || '<span style="color:#999;">None on file</span>'}<br><span style="color:#888; font-size:0.85rem;">Documentation &amp; imaging &gt;5 years old.</span></p>
            </div>
            <div class="deep-card muted-card">
                <h4>Social History</h4>
                <p>${p.social}<br><span style="color:#888; font-size:0.85rem;">Employment &amp; lifestyle — flag if significant change.</span></p>
            </div>
        </div>
        <div class="visit-actions">
            <button class="btn-visit primary">Close Visit</button>
            <button class="btn-visit outline">Edit Last Visit</button>
            <button class="btn-visit outline">Flag for Follow-up</button>
            <button class="btn-visit primary">Send to Network</button>
        </div>`; },

    /* --- DR Admin Templates --- */
    drAdminOverview: (d) => `
        <div class="section-header"><h3>Network Summary</h3></div>
        <div class="daily-grid">
            <div class="daily-stat" style="border-left-color:#0a8f2c;"><span class="stat-label">Network Savings</span><span class="stat-value" style="color:#0a8f2c;">${d.networkSavings}</span></div>
            <div class="daily-stat"><span class="stat-label">Active Patients</span><span class="stat-value">${d.activePatients.toLocaleString()}</span></div>
            <div class="daily-stat"><span class="stat-label">Compliance Rate</span><span class="stat-value">${d.complianceRate}</span></div>
            <div class="daily-stat"><span class="stat-label">Cost Reduction</span><span class="stat-value">${d.avgCostReduction}</span></div>
        </div>
        <div class="section-header"><h3>Participants</h3></div>
        <div class="deep-grid" style="grid-template-columns: 1fr 1fr 1fr;">
            <div class="deep-card" style="border-left: 4px solid var(--primary-navy);">
                <h4>MSK Practices</h4>
                <p style="font-size: 2rem; font-weight: 800; color: var(--primary-navy); margin: 0.3rem 0 0 0;">${d.totalPractices}</p>
            </div>
            <div class="deep-card" style="border-left: 4px solid #0a8f2c;">
                <h4>TPAs</h4>
                <p style="font-size: 2rem; font-weight: 800; color: #0a8f2c; margin: 0.3rem 0 0 0;">${d.totalTPAs}</p>
            </div>
            <div class="deep-card" style="border-left: 4px solid #cc8800;">
                <h4>Researchers</h4>
                <p style="font-size: 2rem; font-weight: 800; color: #cc8800; margin: 0.3rem 0 0 0;">${d.totalResearchers}</p>
            </div>
        </div>
        <div class="section-header"><h3>Pending Actions</h3></div>
        <div class="weekly-grid">
            <div class="weekly-stat"><span class="stat-label">Pending Onboarding</span><div class="stat-value">${d.pendingOnboarding} Participants</div></div>
        </div>`,

    drAdminDetail: (item) => `
        <div class="section-header"><h3>Participant Details</h3></div>
        <div class="daily-grid">
            <div class="daily-stat"><span class="stat-label">Type</span><span class="stat-value" style="font-size:1.3rem;">${item.type}</span></div>
            <div class="daily-stat"><span class="stat-label">Status</span><span class="stat-value" style="font-size:1.3rem; color:${item.status === 'Active' ? '#0a8f2c' : item.status === 'Action Req' ? 'var(--secondary-red)' : '#cc8800'};">${item.status}</span></div>
            <div class="daily-stat"><span class="stat-label">Members</span><span class="stat-value" style="font-size:1.3rem;">${item.members.toLocaleString()}</span></div>
            <div class="daily-stat"><span class="stat-label">Compliance</span><span class="stat-value" style="font-size:1.3rem;">${item.compliance}</span></div>
        </div>
        <div class="section-header"><h3>Financial Impact</h3></div>
        <div class="weekly-grid">
            <div class="weekly-stat"><span class="stat-label">Total Savings</span><div class="stat-value">${item.savings}</div></div>
        </div>`,

    /* --- TPA Templates --- */
    tpaOverview: (d) => `
        <div class="section-header" style="display:flex; justify-content:space-between; align-items:center;">
            <h3>Monthly Operations & Member Engagement</h3>
            <span style="font-size:0.7rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.06em;">Book of Business — ${d.totalClients} Plan Sponsors &nbsp;|&nbsp; ${d.totalMembers.toLocaleString()} Members</span>
        </div>
        <div class="data-freshness"><span class="freshness-dot"></span>Last Sync: ${d.lastSyncHours}h ago &nbsp;|&nbsp; API Connected</div>
        <div class="daily-grid" style="grid-template-columns:repeat(5,1fr);">
            <div class="daily-stat hot-list-card" style="border-left-color:#cc8800;">
                <span class="stat-label">The Hot List</span>
                <span class="stat-value" style="font-size:2rem;">${d.hotList}</span>
                <span style="font-size:0.7rem; color:var(--text-muted); display:block; margin-top:0.2rem;">New ID'd Codes (Last 24h)</span>
            </div>
            <div class="daily-stat">
                <span class="stat-label">Outreach Status</span>
                <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-top:0.3rem;">
                    <div>
                        <div style="font-size:1.4rem; font-weight:800;">${d.outreachCalled} <span style="font-size:0.7rem; font-weight:600; color:var(--text-muted);">Called</span></div>
                        <div style="font-size:1.4rem; font-weight:800;">${d.outreachReached} <span style="font-size:0.7rem; font-weight:600; color:var(--text-muted);">Reached</span></div>
                    </div>
                    <div style="text-align:right;">
                        <div style="font-size:1.8rem; font-weight:800; color:var(--primary-navy);">${d.outreachOptIns}</div>
                        <div style="font-size:0.65rem; font-weight:800; text-transform:uppercase; color:var(--primary-navy);">Opt-Ins</div>
                    </div>
                </div>
            </div>
            <div class="daily-stat" style="border-left-color:var(--primary-navy);">
                <span class="stat-label">Current Active Cases</span>
                <a href="./analytics.html?view=tpa" style="text-decoration:none; color:inherit;">
                    <span class="stat-value" style="font-size:2rem;">${d.activeCases}</span>
                </a>
                <span style="font-size:0.7rem; font-weight:700; display:block; margin-top:0.2rem; color:${d.activeCasesTrend >= 0 ? '#0a8f2c' : 'var(--secondary-red)'};">${d.activeCasesTrend >= 0 ? '▲ +' : '▼ '}${d.activeCasesTrend} vs last week</span>
            </div>
            <div class="daily-stat alert friction-alerts-card">
                <span class="stat-label">Friction Alerts</span>
                <span class="stat-value" style="font-size:2rem;">${d.frictionAlerts}</span>
                <div class="friction-tags">
                    <span class="friction-tag tag-review">${d.frictionUnderReview} Under Review</span>
                    <span class="friction-tag tag-contacted">${d.frictionContacted} Contacted</span>
                    <span class="friction-tag tag-resolved">${d.frictionResolved} Resolved</span>
                </div>
                <a href="./analytics.html?view=tpa&report=tpa_perf2" style="font-size:0.65rem; font-weight:700; color:var(--secondary-red); display:block; margin-top:0.3rem;">View Friction Report →</a>
            </div>
            <div class="daily-stat" style="background:var(--primary-navy); border-left-color:transparent;">
                <span class="stat-label" style="color:rgba(255,255,255,0.6);">Closed Cases</span>
                <span class="stat-value" style="font-size:2rem; color:white;">${d.closedCasesThisWeek}</span>
                <span style="font-size:0.7rem; color:rgba(255,255,255,0.45); display:block; margin-top:0.2rem;">Resolved this week</span>
            </div>
        </div>

        <div class="section-header"><h3>YTD Clinical Pathway & Conversion Funnel</h3></div>
        <div style="background:white; border:1px solid #eee; border-radius:8px; padding:1.2rem; margin-bottom:1.5rem;">
            <div style="display:grid; grid-template-columns:1fr auto 1fr auto 1fr auto 1fr; gap:0.5rem; align-items:center; margin-bottom:1.2rem;">
                <div style="background:#f1f5f9; padding:0.9rem; text-align:center; border-radius:6px;">
                    <span style="display:block; font-size:1.8rem; font-weight:800;">${d.triggeredClaims}</span>
                    <span style="font-size:0.62rem; text-transform:uppercase; color:var(--text-muted); font-weight:700;">Triggered Claims</span>
                </div>
                <div style="color:#ccc; font-size:1rem; text-align:center;">▶</div>
                <div style="background:#dbeafe; padding:0.9rem; text-align:center; border-radius:6px;">
                    <span style="display:block; font-size:1.8rem; font-weight:800; color:var(--primary-navy);">${d.successfulOutreach}</span>
                    <span style="font-size:0.62rem; text-transform:uppercase; color:var(--primary-navy); font-weight:700;">Successful Outreach</span>
                </div>
                <div style="color:#ccc; font-size:1rem; text-align:center;">▶</div>
                <div style="background:var(--primary-navy); padding:0.9rem; text-align:center; border-radius:6px;">
                    <span style="display:block; font-size:1.8rem; font-weight:800; color:white;">${d.programOptIns}</span>
                    <span style="font-size:0.62rem; text-transform:uppercase; color:rgba(255,255,255,0.7); font-weight:700;">Program Opt-Ins</span>
                </div>
                <div style="color:#ccc; font-size:1rem; text-align:center;">▶</div>
                <div style="background:#0a8f2c; padding:0.9rem; text-align:center; border-radius:6px;">
                    <span style="display:block; font-size:1.8rem; font-weight:800; color:white;">${d.netAttributedSavings}</span>
                    <span style="font-size:0.62rem; text-transform:uppercase; color:rgba(255,255,255,0.7); font-weight:700;">Total Savings</span>
                </div>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; padding-top:1rem; border-top:1px solid #f0f0f0;">
                <div>
                    <div style="font-size:0.65rem; font-weight:800; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.5rem;">Avg Time to Member's First Visit — Portfolio Avg</div>
                    <div style="display:flex; align-items:baseline; gap:0.4rem; margin-bottom:0.4rem;">
                        <span style="font-size:2rem; font-weight:900; color:var(--primary-navy);">${d.avgTimeToFirstVisit}</span>
                        <span style="font-size:0.75rem; font-weight:700; color:var(--text-muted);">days from trigger</span>
                    </div>
                    <div style="width:100%; height:8px; background:#f0f0f0; border-radius:4px; margin-bottom:0.3rem;"><div style="width:${Math.min(d.avgTimeToFirstVisit * 10, 100)}%; height:100%; background:${d.avgTimeToFirstVisit <= 5 ? '#0a8f2c' : d.avgTimeToFirstVisit <= 7 ? '#cc8800' : 'var(--secondary-red)'}; border-radius:4px;"></div></div>
                    <div style="font-size:0.65rem; font-weight:700; color:${d.avgTimeToFirstVisit <= 5 ? '#0a8f2c' : '#cc8800'};">${d.avgTimeToFirstVisit <= 5 ? '✓ On Target' : '⚠ Above Target'} — Network Avg: 5.2 days</div>
                </div>
                <div>
                    <div style="font-size:0.65rem; font-weight:800; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.5rem;">Network Utilization — Portfolio Avg</div>
                    <div style="margin-bottom:0.5rem;">
                        <div style="display:flex; justify-content:space-between; font-size:0.72rem; font-weight:600; margin-bottom:0.2rem;"><span>COE Direction</span><span style="font-weight:800;">${d.coeDirection}%</span></div>
                        <div style="width:100%; height:8px; background:#f0f0f0; border-radius:4px;"><div style="width:${d.coeDirection}%; height:100%; background:var(--primary-navy); border-radius:4px;"></div></div>
                    </div>
                    <div>
                        <div style="display:flex; justify-content:space-between; font-size:0.72rem; font-weight:600; margin-bottom:0.2rem;"><span>Local / In-Network</span><span style="font-weight:800;">${d.inNetworkPct}%</span></div>
                        <div style="width:100%; height:8px; background:#f0f0f0; border-radius:4px;"><div style="width:${d.inNetworkPct}%; height:100%; background:#94a3b8; border-radius:4px;"></div></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-header"><h3>Value Validation & Defensibility</h3></div>
        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem; margin-bottom:1rem;">
            <div class="roi-card" style="background:#f8f9fb; border:1px solid #e8eaed; border-radius:8px; padding:1rem;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                    <span style="font-size:0.72rem; font-weight:800; color:var(--primary-navy);">Adjusted ROI</span>
                    <button class="roi-math-toggle" onclick="this.closest('.roi-card').querySelector('.roi-flyout').classList.toggle('hidden')">&#x1F4CA; View Math</button>
                </div>
                <div style="font-size:0.8rem; line-height:1.8; color:var(--text-muted);">
                    <div>Gross Savings: <strong style="color:#333;">${d.grossSavings}</strong></div>
                    <div>Est. Cons. Care Baseline: <strong style="color:#333;">${d.conservativeBaseline}</strong></div>
                    <div style="margin-top:0.4rem; font-size:0.88rem; font-weight:800; color:#0a8f2c;">Net Attributed: ${d.netAttributedSavings}</div>
                </div>
                <div class="roi-flyout hidden">
                    <span class="roi-formula-line">[Gross Savings] ${d.grossSavings}</span>
                    <span class="roi-formula-line">&minus; [Conservative Care Baseline] ${d.conservativeBaseline}</span>
                    <span class="roi-formula-divider"></span>
                    <span class="roi-formula-line roi-formula-result">= Net Attributed ROI: ${d.netAttributedSavings}</span>
                    <button class="btn-export-raw" onclick="exportROIData()">Export Raw Data (CSV)</button>
                </div>
            </div>
            <div style="background:#f8f9fb; border:1px solid #e8eaed; border-radius:8px; padding:1rem;">
                <div style="font-size:0.72rem; font-weight:800; color:var(--primary-navy); margin-bottom:0.6rem;">Stop-Loss Shielding</div>
                <div style="font-size:0.8rem; color:var(--text-muted); line-height:1.6;">
                    <strong style="font-size:1.2rem; color:#333; display:block; margin-bottom:0.4rem;">${d.stopLossRisk} High-Risk Cases</strong>
                    <span style="font-size:0.75rem;">Identifies members based on Probability of Breach. By utilizing Predictive Reserve (estimated future cost), we enable TPA intervention before potential high-cost claims reach the stop-loss carrier's threshold.</span>
                    <a href="./analytics.html?view=tpa&report=tpa_perf3" style="display:block; margin-top:0.5rem; font-size:0.72rem; font-weight:700; color:var(--primary-navy);">View High-Risk Case Report →</a>
                </div>
            </div>
            <div style="background:#f8f9fb; border:1px solid #e8eaed; border-radius:8px; padding:1rem; text-align:center;">
                <div style="font-size:0.72rem; font-weight:800; color:var(--primary-navy); text-align:left; margin-bottom:0.4rem;">Member Satisfaction</div>
                <div style="font-size:3rem; font-weight:900; color:var(--primary-navy); line-height:1;">${d.nps}</div>
                <div style="font-size:0.62rem; font-weight:800; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted); margin-top:0.2rem;">Net Promoter Score</div>
                <div style="font-size:0.72rem; font-style:italic; color:var(--text-muted); margin-top:0.5rem; line-height:1.4;">"The specialist call saved me from a 6-week recovery I didn't need."</div>
            </div>
        </div>

        <div class="section-header"><h3>Clinical Quality Scorecard</h3></div>
        <div class="clinical-scorecard">
            <div class="scorecard-card">
                <div class="scorecard-label">Clinical Efficacy Index</div>
                <div class="scorecard-value">${d.pdfiScore}</div>
                <div class="scorecard-sub">Member-defined functional goal achievement score</div>
            </div>
            <div class="scorecard-card">
                <div class="scorecard-label">Risk-Adjusted Complication Rate</div>
                <div class="scorecard-value">${d.complicationRate}%</div>
                <div class="scorecard-sub">Post-intervention complications, risk-stratified by acuity</div>
            </div>
            <div class="scorecard-card">
                <div class="scorecard-label">Re-admission Avoidance</div>
                <div class="scorecard-value">${d.readmissionAvoidance}%</div>
                <div class="scorecard-sub">Members not requiring re-admission within 90 days</div>
            </div>
        </div>`,

    tpaClientDetail: (item) => `
        <div class="section-header"><h3>Monthly Operations & Member Engagement</h3></div>
        <div class="data-freshness"><span class="freshness-dot"></span>Last Sync: ${item.lastSyncHours}h ago &nbsp;|&nbsp; API Connected</div>
        <div class="daily-grid" style="grid-template-columns:repeat(5,1fr);">
            <div class="daily-stat hot-list-card" style="border-left-color:#cc8800;">
                <span class="stat-label">The Hot List</span>
                <span class="stat-value" style="font-size:2rem;">${item.hotList}</span>
                <span style="font-size:0.7rem; color:var(--text-muted); display:block; margin-top:0.2rem;">New ID'd Codes (Last 24h)</span>
            </div>
            <div class="daily-stat">
                <span class="stat-label">Outreach Status</span>
                <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-top:0.3rem;">
                    <div>
                        <div style="font-size:1.4rem; font-weight:800;">${item.outreachCalled} <span style="font-size:0.7rem; font-weight:600; color:var(--text-muted);">Called</span></div>
                        <div style="font-size:1.4rem; font-weight:800;">${item.outreachReached} <span style="font-size:0.7rem; font-weight:600; color:var(--text-muted);">Reached</span></div>
                    </div>
                    <div style="text-align:right;">
                        <div style="font-size:1.8rem; font-weight:800; color:var(--primary-navy);">${item.outreachOptIns}</div>
                        <div style="font-size:0.65rem; font-weight:800; text-transform:uppercase; color:var(--primary-navy);">Opt-Ins</div>
                    </div>
                </div>
            </div>
            <div class="daily-stat" style="border-left-color:var(--primary-navy);">
                <span class="stat-label">Current Active Cases</span>
                <a href="./analytics.html?view=tpa" style="text-decoration:none; color:inherit;">
                    <span class="stat-value" style="font-size:2rem;">${item.activeCases}</span>
                </a>
                <span style="font-size:0.7rem; font-weight:700; display:block; margin-top:0.2rem; color:${item.activeCasesTrend >= 0 ? '#0a8f2c' : 'var(--secondary-red)'};">${item.activeCasesTrend >= 0 ? '▲ +' : '▼ '}${item.activeCasesTrend} vs last week</span>
            </div>
            <div class="daily-stat alert friction-alerts-card">
                <span class="stat-label">Friction Alerts</span>
                <span class="stat-value" style="font-size:2rem;">${item.frictionAlerts}</span>
                <div class="friction-tags">
                    <span class="friction-tag tag-review">${item.frictionUnderReview} Under Review</span>
                    <span class="friction-tag tag-contacted">${item.frictionContacted} Contacted</span>
                    <span class="friction-tag tag-resolved">${item.frictionResolved} Resolved</span>
                </div>
                <a href="./analytics.html?view=tpa&report=tpa_perf2" style="font-size:0.65rem; font-weight:700; color:var(--secondary-red); display:block; margin-top:0.3rem;">View Friction Report →</a>
            </div>
            <div class="daily-stat" style="background:var(--primary-navy); border-left-color:transparent;">
                <span class="stat-label" style="color:rgba(255,255,255,0.6);">Closed Cases</span>
                <span class="stat-value" style="font-size:2rem; color:white;">${item.closedCasesThisWeek}</span>
                <span style="font-size:0.7rem; color:rgba(255,255,255,0.45); display:block; margin-top:0.2rem;">Resolved this week</span>
            </div>
        </div>

        <div class="section-header"><h3>YTD Clinical Pathway & Conversion Funnel</h3></div>
        <div style="background:white; border:1px solid #eee; border-radius:8px; padding:1.2rem; margin-bottom:1.5rem;">
            <div style="display:grid; grid-template-columns:1fr auto 1fr auto 1fr auto 1fr; gap:0.5rem; align-items:center; margin-bottom:1.2rem;">
                <div style="background:#f1f5f9; padding:0.9rem; text-align:center; border-radius:6px;">
                    <span style="display:block; font-size:1.8rem; font-weight:800;">${item.triggeredClaims}</span>
                    <span style="font-size:0.62rem; text-transform:uppercase; color:var(--text-muted); font-weight:700;">Triggered Claims</span>
                </div>
                <div style="color:#ccc; font-size:1rem; text-align:center;">▶</div>
                <div style="background:#dbeafe; padding:0.9rem; text-align:center; border-radius:6px;">
                    <span style="display:block; font-size:1.8rem; font-weight:800; color:var(--primary-navy);">${item.successfulOutreach}</span>
                    <span style="font-size:0.62rem; text-transform:uppercase; color:var(--primary-navy); font-weight:700;">Successful Outreach</span>
                </div>
                <div style="color:#ccc; font-size:1rem; text-align:center;">▶</div>
                <div style="background:var(--primary-navy); padding:0.9rem; text-align:center; border-radius:6px;">
                    <span style="display:block; font-size:1.8rem; font-weight:800; color:white;">${item.programOptIns}</span>
                    <span style="font-size:0.62rem; text-transform:uppercase; color:rgba(255,255,255,0.7); font-weight:700;">Program Opt-Ins</span>
                </div>
                <div style="color:#ccc; font-size:1rem; text-align:center;">▶</div>
                <div style="background:#0a8f2c; padding:0.9rem; text-align:center; border-radius:6px;">
                    <span style="display:block; font-size:1.8rem; font-weight:800; color:white;">${item.savingsVelocityLabel}</span>
                    <span style="font-size:0.62rem; text-transform:uppercase; color:rgba(255,255,255,0.7); font-weight:700;">Total Savings</span>
                </div>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; padding-top:1rem; border-top:1px solid #f0f0f0;">
                <div>
                    <div style="font-size:0.65rem; font-weight:800; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.5rem;">Avg Time to Member's First Visit</div>
                    <div style="display:flex; align-items:baseline; gap:0.4rem; margin-bottom:0.4rem;">
                        <span style="font-size:2rem; font-weight:900; color:var(--primary-navy);">${item.avgTimeToFirstVisit}</span>
                        <span style="font-size:0.75rem; font-weight:700; color:var(--text-muted);">days from trigger</span>
                    </div>
                    <div style="width:100%; height:8px; background:#f0f0f0; border-radius:4px; margin-bottom:0.3rem;"><div style="width:${Math.min(item.avgTimeToFirstVisit * 10, 100)}%; height:100%; background:${item.avgTimeToFirstVisit <= 5 ? '#0a8f2c' : item.avgTimeToFirstVisit <= 7 ? '#cc8800' : 'var(--secondary-red)'}; border-radius:4px;"></div></div>
                    <div style="font-size:0.65rem; font-weight:700; color:${item.avgTimeToFirstVisit <= 5 ? '#0a8f2c' : '#cc8800'};">${item.avgTimeToFirstVisit <= 5 ? '✓ On Target' : '⚠ Above Target'} — Network Avg: 5.2 days</div>
                </div>
                <div>
                    <div style="font-size:0.65rem; font-weight:800; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.5rem;">Network Utilization</div>
                    <div style="margin-bottom:0.5rem;">
                        <div style="display:flex; justify-content:space-between; font-size:0.72rem; font-weight:600; margin-bottom:0.2rem;"><span>COE Direction</span><span style="font-weight:800;">${item.coeDirection}%</span></div>
                        <div style="width:100%; height:8px; background:#f0f0f0; border-radius:4px;"><div style="width:${item.coeDirection}%; height:100%; background:var(--primary-navy); border-radius:4px;"></div></div>
                    </div>
                    <div>
                        <div style="display:flex; justify-content:space-between; font-size:0.72rem; font-weight:600; margin-bottom:0.2rem;"><span>Local / In-Network</span><span style="font-weight:800;">${item.inNetworkPct}%</span></div>
                        <div style="width:100%; height:8px; background:#f0f0f0; border-radius:4px;"><div style="width:${item.inNetworkPct}%; height:100%; background:#94a3b8; border-radius:4px;"></div></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-header"><h3>Value Validation & Defensibility</h3></div>
        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem; margin-bottom:1rem;">
            <div class="roi-card" style="background:#f8f9fb; border:1px solid #e8eaed; border-radius:8px; padding:1rem;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                    <span style="font-size:0.72rem; font-weight:800; color:var(--primary-navy);">Adjusted ROI</span>
                    <button class="roi-math-toggle" onclick="this.closest('.roi-card').querySelector('.roi-flyout').classList.toggle('hidden')">&#x1F4CA; View Math</button>
                </div>
                <div style="font-size:0.8rem; line-height:1.8; color:var(--text-muted);">
                    <div>Gross Savings: <strong style="color:#333;">${item.grossSavings}</strong></div>
                    <div>Est. Cons. Care Baseline: <strong style="color:#333;">${item.conservativeBaseline}</strong></div>
                    <div style="margin-top:0.4rem; font-size:0.88rem; font-weight:800; color:#0a8f2c;">Net Attributed: ${item.netAttributedSavings}</div>
                </div>
                <div class="roi-flyout hidden">
                    <span class="roi-formula-line">[Gross Savings] ${item.grossSavings}</span>
                    <span class="roi-formula-line">&minus; [Conservative Care Baseline] ${item.conservativeBaseline}</span>
                    <span class="roi-formula-divider"></span>
                    <span class="roi-formula-line roi-formula-result">= Net Attributed ROI: ${item.netAttributedSavings}</span>
                    <button class="btn-export-raw" onclick="exportROIData()">Export Raw Data (CSV)</button>
                </div>
            </div>
            <div style="background:#f8f9fb; border:1px solid #e8eaed; border-radius:8px; padding:1rem;">
                <div style="font-size:0.72rem; font-weight:800; color:var(--primary-navy); margin-bottom:0.6rem;">Stop-Loss Shielding</div>
                <div style="font-size:0.8rem; color:var(--text-muted); line-height:1.6;">
                    <strong style="font-size:1.2rem; color:#333; display:block; margin-bottom:0.4rem;">${item.stopLossRisk} High-Risk Cases</strong>
                    <span style="font-size:0.75rem;">Identifies members based on Probability of Breach. By utilizing Predictive Reserve (estimated future cost), we enable TPA intervention before potential high-cost claims reach the stop-loss carrier's threshold.</span>
                    <a href="./analytics.html?view=tpa&report=tpa_perf3" style="display:block; margin-top:0.5rem; font-size:0.72rem; font-weight:700; color:var(--primary-navy);">View High-Risk Case Report →</a>
                </div>
            </div>
            <div style="background:#f8f9fb; border:1px solid #e8eaed; border-radius:8px; padding:1rem; text-align:center;">
                <div style="font-size:0.72rem; font-weight:800; color:var(--primary-navy); text-align:left; margin-bottom:0.4rem;">Member Satisfaction</div>
                <div style="font-size:3rem; font-weight:900; color:var(--primary-navy); line-height:1;">${item.nps}</div>
                <div style="font-size:0.62rem; font-weight:800; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted); margin-top:0.2rem;">Net Promoter Score</div>
                <div style="font-size:0.72rem; font-style:italic; color:var(--text-muted); margin-top:0.5rem; line-height:1.4;">"The specialist call saved me from a 6-week recovery I didn't need."</div>
            </div>
        </div>

        <div class="section-header"><h3>Clinical Quality Scorecard</h3></div>
        <div class="clinical-scorecard">
            <div class="scorecard-card">
                <div class="scorecard-label">Clinical Efficacy Index</div>
                <div class="scorecard-value">${item.pdfiScore}</div>
                <div class="scorecard-sub">Member-defined functional goal achievement score</div>
            </div>
            <div class="scorecard-card">
                <div class="scorecard-label">Risk-Adjusted Complication Rate</div>
                <div class="scorecard-value">${item.complicationRate}%</div>
                <div class="scorecard-sub">Post-intervention complications, risk-stratified by acuity</div>
            </div>
            <div class="scorecard-card">
                <div class="scorecard-label">Re-admission Avoidance</div>
                <div class="scorecard-value">${item.readmissionAvoidance}%</div>
                <div class="scorecard-sub">Members not requiring re-admission within 90 days</div>
            </div>
        </div>`,

    /* --- Research Templates --- */
    researchOverview: (d) => `
        <div class="section-header"><h3>Research Program Summary</h3></div>
        <div class="daily-grid">
            <div class="daily-stat"><span class="stat-label">Active Projects</span><span class="stat-value">${d.activeProjects}</span></div>
            <div class="daily-stat"><span class="stat-label">Total Subjects</span><span class="stat-value">${d.totalSubjects.toLocaleString()}</span></div>
            <div class="daily-stat"><span class="stat-label">Datasets Available</span><span class="stat-value">${d.datasetsAvailable}</span></div>
            <div class="daily-stat alert"><span class="stat-label">Pending IRB</span><span class="stat-value">${d.pendingIRB}</span></div>
        </div>
        <div class="section-header"><h3>Data Quality</h3></div>
        <div class="weekly-grid">
            <div class="weekly-stat"><span class="stat-label">Data Completeness</span><div class="stat-value" style="color:#0a8f2c;">${d.dataCompleteness}</div></div>
            <div class="weekly-stat"><span class="stat-label">Published Studies</span><div class="stat-value">${d.publishedStudies}</div></div>
        </div>`,

    researchProjectDetail: (item) => `
        <div class="section-header"><h3>Project Details</h3></div>
        <div class="daily-grid">
            <div class="daily-stat"><span class="stat-label">Status</span><span class="stat-value" style="font-size:1.3rem; color:${item.status.includes('Pending') ? '#cc8800' : '#0a8f2c'};">${item.status}</span></div>
            <div class="daily-stat"><span class="stat-label">Protocol</span><span class="stat-value" style="font-size:1.1rem;">${item.protocol}</span></div>
            <div class="daily-stat"><span class="stat-label">Subjects</span><span class="stat-value" style="font-size:1.3rem;">${item.subjects.toLocaleString()}</span></div>
            <div class="daily-stat"><span class="stat-label">IRB Status</span><span class="stat-value" style="font-size:1.3rem; color:${item.irb === 'Approved' ? '#0a8f2c' : '#cc8800'};">${item.irb}</span></div>
        </div>
        <div class="section-header"><h3>Research Team</h3></div>
        <div class="weekly-grid">
            <div class="weekly-stat"><span class="stat-label">Principal Investigator</span><div class="stat-value">${item.pi}</div></div>
            <div class="weekly-stat"><span class="stat-label">Institution</span><div class="stat-value">${item.institution}</div></div>
            <div class="weekly-stat"><span class="stat-label">Last Updated</span><div class="stat-value">${item.lastUpdated}</div></div>
        </div>`
};