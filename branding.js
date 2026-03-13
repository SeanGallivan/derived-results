/* --- DR White-Label Branding Utility ---
 * Reads localStorage('dr_target_org') and injects the value into any
 * element with data-branding="org-name", then updates the page title.
 * Falls back to "Derived Results" if no value is stored.
 */
(function() {
    var org = localStorage.getItem('dr_target_org') || 'Derived Results';

    function applyBranding() {
        document.querySelectorAll('[data-branding="org-name"]').forEach(function(el) {
            el.textContent = org;
        });
        if (org !== 'Derived Results') {
            document.title = document.title.replace('Derived Results', org);
        }
        // Hide "Powered by" when using default branding (redundant)
        document.querySelectorAll('.powered-badge').forEach(function(el) {
            el.style.display = (org === 'Derived Results') ? 'none' : '';
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyBranding);
    } else {
        applyBranding();
    }
})();
