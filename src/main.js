const $ = (sel, ctx = document) => ctx.querySelector(sel);

const routes = {
  default: {
    h1: `Free SRT Splitter - Split Subtitle Files by Time or Size`,
    title: `Free SRT Splitter - Split Subtitle Files by Time or Size`,
    desc: `Split large SRT subtitle files into smaller parts by duration or character count. Merge multiple subtitle files into one. Works offline in your browser.`,
    keywords: 'SRT splitter online, split subtitle file, split SRT by time, merge SRT files free, subtitle file organizer'
  }
};

function applyRoute(route) {
  const r = routes[route];
  if (!r) return;
  document.title = r.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', r.desc);
  const elTitle = $('#page-title');
  if (elTitle) elTitle.textContent = r.h1;
  const elLead = $('#page-lead');
  if (elLead) elLead.textContent = r.desc;
  const canonical = $('#canonical');
  if (canonical) canonical.setAttribute('href', window.location.origin + window.location.pathname);
}

applyRoute('default');
