/* --- ADX URL-Driven Router --- */
/* Reads ?view= parameter, resolves config, syncs DOM */

const ROUTER = {

    getView: () => {
        const params = new URLSearchParams(window.location.search);
        return params.get('view') || 'msk_physician';
    },

    getConfig: () => {
        const key = ROUTER.getView();
        return VIEW_CONFIG[key] || VIEW_CONFIG['msk_physician'];
    },

    buildUrl: (page) => {
        const view = ROUTER.getView();
        return page + '?view=' + view;
    },

    /* Resolve a data source expression like "PRACTICES[0]" or "NETWORK_STATS" from globals */
    resolveDataSource: (expr) => {
        const match = expr.match(/^(\w+)(?:\[(\d+)\])?$/);
        if (!match) return null;
        const obj = window[match[1]];
        if (!obj) return null;
        return match[2] !== undefined ? obj[parseInt(match[2])] : obj;
    },

    /* Render top navigation from config */
    /* page: 'dashboard' uses onclick switchMode; any other page links back to dashboard.html */
    renderNav: (config, page) => {
        const nav = document.getElementById('topNav');
        if (!nav) return;
        var org = localStorage.getItem('dr_target_org') || 'Derived Results';
        nav.innerHTML = config.nav.map(item => {
            var label = item.label.replace('{org}', org);
            if (item.href) {
                const href = item.href.includes('?') ? item.href : ROUTER.buildUrl(item.href);
                return '<a href="' + href + '" id="nav-' + item.id + '">' + label + '</a>';
            } else if (page === 'dashboard') {
                return '<a onclick="switchMode(\'' + item.mode + '\')" id="nav-' + item.id + '">' + label + '</a>';
            } else {
                return '<a href="./dashboard.html?view=' + ROUTER.getView() + '" id="nav-' + item.id + '">' + label + '</a>';
            }
        }).join('');
    },

    /* Initialize page: sync DOM to current view config */
    init: (page) => {
        const config = ROUTER.getConfig();

        // Update page title
        document.title = 'Derived Results | ' + config.label;

        // Render nav (pass page so mode-items behave correctly)
        ROUTER.renderNav(config, page);

        // Update logo to link back to selector
        const logo = document.querySelector('.logo-area');
        if (logo) {
            logo.href = 'selector.html';
            logo.removeAttribute('onclick');
        }

        // Update all data-view-field elements
        document.querySelectorAll('[data-view-field]').forEach(el => {
            const field = el.getAttribute('data-view-field');
            const value = field.split('.').reduce((o, k) => o && o[k], config);
            if (value !== undefined) el.textContent = value;
        });

        return config;
    },

    /* Load additional data files, returns a Promise */
    loadDataFiles: (config) => {
        const loads = (config.dataFiles || []).map(f => {
            return new Promise((resolve) => {
                const s = document.createElement('script');
                s.src = f;
                s.onload = resolve;
                s.onerror = resolve;
                document.head.appendChild(s);
            });
        });
        return Promise.all(loads);
    },

    /* Get reports for current audience from REPORT_REGISTRY */
    getReports: () => {
        const view = ROUTER.getView();
        const reports = [];
        for (const id in REPORT_REGISTRY) {
            const r = REPORT_REGISTRY[id];
            if (r.audiences.includes(view)) {
                reports.push({ id: id, name: r.name, cat: r.cat, desc: r.desc });
            }
        }
        return reports;
    }
};
