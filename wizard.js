/* --- ADX Wizard: Practice Onboarding --- */
const WIZARD = {
    step: 1,
    open: () => {
        const m = document.createElement('div');
        m.id = 'wizMod'; m.className = 'modal-overlay';
        m.innerHTML = `<div class="modal-content high-density">
            <div class="wizard-sidebar">
                <div style="font-size:0.7rem; font-weight:800; text-transform:uppercase; letter-spacing:1px; opacity:0.5; margin-bottom:1.5rem;">New Practice</div>
                <div class="wizard-progress-item active" id="s1">1. Inheritance</div>
                <div class="wizard-progress-item" id="s2">2. Location</div>
                <div class="wizard-progress-item" id="s3">3. Contact</div>
                <div class="wizard-progress-item" id="s4">4. Physician</div>
                <div class="wizard-progress-item" id="s5">5. Access</div>
            </div>
            <div class="wizard-main">
                <div id="wizBody" style="padding:2.5rem 3rem; flex:1; overflow-y:auto;"></div>
                <div class="wizard-footer">
                    <button class="btn btn-outline" onclick="WIZARD.close()">Cancel</button>
                    <button class="btn btn-primary" id="wizNext" onclick="WIZARD.next()">Next Step</button>
                </div>
            </div>
        </div>`;
        document.body.appendChild(m); WIZARD.render();
    },
    render: () => {
        const b = document.getElementById('wizBody');
        [1,2,3,4,5].forEach(n => document.getElementById('s'+n).classList.toggle('active', n === WIZARD.step));
        const nextBtn = document.getElementById('wizNext');
        if(nextBtn) nextBtn.textContent = WIZARD.step === 5 ? 'Add Practice' : 'Next Step';

        const req = `<span style="color:#D6001C;">*</span>`;
        const states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'].map(s=>`<option>${s}</option>`).join('');
        const regions = ['Northeast','Southeast','Midwest','Southwest','West','Northwest'].map(r=>`<option>${r}</option>`).join('');

        if(WIZARD.step===1) b.innerHTML = `
            <h3 style="margin:0 0 0.4rem 0;">Location Inheritance</h3>
            <p style="color:var(--text-muted); font-size:0.85rem; margin:0 0 1.5rem 0;">Link to an existing branch or register a new location.</p>
            <div class="form-grid">
                <div class="form-group span-2"><label>Select Branch</label>
                    <select onchange="WIZARD.inherit(this.value)"><option value="">-- Select --</option><option value="new">+ Add New Branch</option><option value="PR1">Summit Musculoskeletal</option></select>
                </div>
                <div id="inhBox" class="inherited-data-box span-2">Choose <b>Add New Branch</b> to enter fresh regulatory data, or select an existing branch to inherit its Tax ID and compliance tier.</div>
            </div>`;

        if(WIZARD.step===2) b.innerHTML = `
            <h3 style="margin:0 0 0.4rem 0;">Location Details</h3>
            <p style="color:var(--text-muted); font-size:0.85rem; margin:0 0 1.5rem 0;">Physical address and regional classification for this practice.</p>
            <div class="form-grid">
                <div class="form-group span-2"><label>Practice Name ${req}</label><input type="text" placeholder="e.g. Summit Musculoskeletal – Denver"></div>
                <div class="form-group span-2"><label>Address Line 1 ${req}</label><input type="text" placeholder="Street address"></div>
                <div class="form-group span-2"><label>Address Line 2</label><input type="text" placeholder="Suite, floor, unit, etc."></div>
                <div class="form-group"><label>City ${req}</label><input type="text" placeholder="City"></div>
                <div class="form-group"><label>State ${req}</label><select><option value="">-- State --</option>${states}</select></div>
                <div class="form-group"><label>Zip Code ${req}</label><input type="text" placeholder="00000" maxlength="10"></div>
                <div class="form-group"><label>Region</label><select><option value="">-- Region --</option>${regions}</select></div>
            </div>`;

        if(WIZARD.step===3) b.innerHTML = `
            <h3 style="margin:0 0 0.4rem 0;">Contact Information</h3>
            <p style="color:var(--text-muted); font-size:0.85rem; margin:0 0 1.5rem 0;">Primary administrative contact for this location.</p>
            <div class="form-grid">
                <div class="form-group"><label>First Name ${req}</label><input type="text" placeholder="First name"></div>
                <div class="form-group"><label>Last Name ${req}</label><input type="text" placeholder="Last name"></div>
                <div class="form-group span-2"><label>Email Address ${req}</label><input type="email" placeholder="contact@practice.com"></div>
                <div class="form-group"><label>Phone Number ${req}</label><input type="tel" placeholder="(000) 000-0000"></div>
                <div class="form-group"><label>Fax Number ${req}</label><input type="tel" placeholder="(000) 000-0000"></div>
                <div class="form-group span-2"><label>Confidential Notice</label><textarea placeholder="Internal notes visible only to administrators..."></textarea></div>
            </div>`;

        if(WIZARD.step===4) b.innerHTML = `
            <h3 style="margin:0 0 0.4rem 0;">Physician Identity</h3>
            <p style="color:var(--text-muted); font-size:0.85rem; margin:0 0 1.5rem 0;">Primary rendering physician attached to this location.</p>
            <div class="form-grid">
                <div class="form-group"><label>First Name ${req}</label><input type="text" placeholder="First name"></div>
                <div class="form-group"><label>Last Name ${req}</label><input type="text" placeholder="Last name"></div>
                <div class="form-group span-2"><label>NPI Number ${req}</label><input type="text" placeholder="10-digit NPI" maxlength="10"></div>
                <div class="form-group"><label>Specialty</label><select><option value="">-- Select --</option><option>Musculoskeletal</option><option>Pain Management</option><option>Physical Medicine</option><option>Neurology</option><option>Orthopedics</option></select></div>
                <div class="form-group"><label>License State ${req}</label><select><option value="">-- State --</option>${states}</select></div>
            </div>`;

        if(WIZARD.step===5) b.innerHTML = `
            <h3 style="margin:0 0 0.4rem 0;">Access & Authorization</h3>
            <p style="color:var(--text-muted); font-size:0.85rem; margin:0 0 1.5rem 0;">Grant portal access to staff members for this location.</p>
            <div class="form-grid">
                <div class="form-group span-2"><label>Authorized User Emails</label><textarea placeholder="nurse@practice.com, admin@practice.com, billing@practice.com&#10;&#10;Separate multiple addresses with commas."></textarea></div>
            </div>
            <div style="margin-top:1.5rem; padding:1rem 1.2rem; background:#f0f4f8; border-radius:6px; border-left:4px solid var(--primary-navy); font-size:0.82rem; color:var(--text-muted);">
                <b style="color:var(--text-dark);">Ready to submit.</b> Users will receive an activation email. The practice will appear in the network within 24 hours after compliance review.
            </div>`;
    },
    inherit: (val) => {
        const box = document.getElementById('inhBox');
        if(val === 'new') box.innerHTML = `<b>New Branch Activation</b><br><span style="font-size:0.85rem; color:var(--text-muted);">Fresh regulatory data required. Complete all fields in the following steps.</span>`;
        else if(val) box.innerHTML = `<b>Inherited from Summit Musculoskeletal:</b><br><span style="font-size:0.85rem;">Tax ID: XX-XXX4492 &nbsp;|&nbsp; Compliance Tier: Level 1 MSK &nbsp;|&nbsp; Region: West</span>`;
    },
    next: () => { if(WIZARD.step < 5) { WIZARD.step++; WIZARD.render(); } else { WIZARD.close(); alert('New practice added.'); } },
    close: () => { document.getElementById('wizMod').remove(); WIZARD.step = 1; }
};
