# Content audit

Generated 2026-10-12 from the static export (`out/`). Nothing has been merged or deleted.
**Waiting for your decision** on each merge below.

## Columns

- **Words**: text inside the article body (`.blog-prose`) only. Excludes the title, breadcrumbs, related posts and footer.
- **Body in / out**: links to other posts written inside article bodies, coming in from other posts and going out to them.
- **Template in**: how many other posts link here from the new Related and Previous/Next blocks.
- **Home**: linked from the homepage.

| Slug | Series | Words | Body in | Body out | Template in | Home | Flag | Suggestion |
|---|---|---:|---:|---:|---:|:-:|---|---|
| `how-i-built-my-data-science-portfolio` | guides | 1754 | 1 | 2 | 1 | ✓ |  | Keep. |
| `transformers-in-a-minute` | in-a-minute | 2139 | 3 | 2 | 11 | ✓ |  | Keep. |
| `ci-vs-pi-regression-bands` | in-a-minute | 2307 | 5 | 3 | 6 | ✓ |  | Keep. |
| `forecasting-in-a-minute` | in-a-minute | 723 | 2 | 2 | 5 | ✓ |  | Keep. |
| `svms-kernel-trick-in-a-minute` | in-a-minute | 902 | 1 | 2 | 9 | ✓ | ⚠ support-vector-machine-svm | **Merge into support-vector-machine-svm** (both under 1,000 words, same series), or keep it only if expanded into a kernel-only deep dive. |
| `convolutional-neural-networks-cnns-in-a-minute` | in-a-minute | 840 | 4 | 2 | 2 | ✓ |  | Keep. |
| `scalars-vectors-matrices-tensor-in-a-minute` | in-a-minute | 855 | 4 | 3 | 10 | ✓ |  | Keep. |
| `multiclass-vs-multilabel-classification-in-a-minute` | in-a-minute | 640 | 2 | 2 | 6 |  | thin (<700) | Expand: sklearn OneVsRest vs MultiOutput code, metrics per case. |
| `confusion-matrix-metrics-in-a-minute` | in-a-minute | 1893 | 4 | 3 | 4 |  |  | Keep. |
| `bayesian-learning-in-a-minute` | in-a-minute | 742 | 0 | 2 | 3 |  |  | Keep. |
| `linear-regression-in-a-minute` | in-a-minute | 586 | 2 | 3 | 3 |  | thin (<700) | Expand: statsmodels fit + residual checks; link to CI-vs-PI. |
| `support-vector-machine-svm` | in-a-minute | 828 | 3 | 3 | 2 |  | ⚠ svms-kernel-trick-in-a-minute | **Merge target.** Make it the SVM pillar (margins, C, soft margin) and absorb the kernel-trick section. |
| `lazy-loading-for-enhanced-user-experience` | web-dev | 1053 | 2 | 2 | 4 | ✓ |  | Keep. |
| `cors-in-flask-bridging-frontend-and-backend` | web-dev | 447 | 2 | 2 | 3 |  | thin (<700) | Expand to ~1,200 words: preflight OPTIONS, credentials, the `*` pitfall, `resources=` and `@cross_origin`. |
| `http-methods-enhancing-web-communication` | web-dev | 532 | 3 | 3 | 4 |  | thin (<700) | Expand: idempotency/safety table, status codes per method, Flask examples. |
| `session-in-the-flask-for-login` | web-dev | 1019 | 2 | 2 | 5 |  |  | Keep. |
| `list-vs-set-in-a-minute` | python | 673 | 1 | 1 | 12 | ✓ | ⚠ sets-performance-better-vs-lists-why; thin (<700) | **Merge target.** Fold the benchmarks from sets-performance in; keep this URL (slug matches the query "list vs set"). |
| `sets-performance-better-vs-lists-why` | python | 970 | 1 | 1 | 9 | ✓ | ⚠ list-vs-set-in-a-minute | **Merge into list-vs-set-in-a-minute**, then turn this URL into a redirect stub. |
| `python-virtual-environment-introduction` | python | 1016 | 4 | 2 | 2 |  | partial: conda-virtual-environment-commands | Keep. Narrow to venv/virtualenv, link to conda for the alternative. |
| `conda-virtual-environment-commands` | python | 899 | 2 | 2 | 8 |  | partial: python-virtual-environment-introduction | Keep. Retarget as a conda cheat sheet (create, activate, export, env create -f). |
| `requirements-txt-in-python` | python | 922 | 2 | 2 | 5 |  |  | Keep. |
| `python-program-for-matrix-multiplication` | python | 484 | 1 | 3 | 1 |  | thin (<700) | Expand (loops vs NumPy `@` benchmark) or fold into scalars-vectors-matrices-tensor. |
| `convert-python-program-to-exe` | python | 554 | 1 | 1 | 2 |  | thin (<700) | Expand: PyInstaller flags, --onefile, data files, AV false positives. |
| `understanding-the-if-name-main` | python | 1014 | 0 | 2 | 9 |  |  | Keep. |

## Summary

- **Thin (<700 words), 7 posts:** `cors-in-flask-bridging-frontend-and-backend` (447), `python-program-for-matrix-multiplication` (484), `http-methods-enhancing-web-communication` (532), `convert-python-program-to-exe` (554), `linear-regression-in-a-minute` (586), `multiclass-vs-multilabel-classification-in-a-minute` (640), `list-vs-set-in-a-minute` (673).
- **Overlapping pairs (merge candidates):**
  1. `list-vs-set-in-a-minute` + `sets-performance-better-vs-lists-why`: same query, same series.
  2. `support-vector-machine-svm` + `svms-kernel-trick-in-a-minute`: both under 1,000 words, same series.
- **Partial overlap (differentiate, don't merge):** `python-virtual-environment-introduction` vs `conda-virtual-environment-commands`.
- **Weakly linked:** `bayesian-learning-in-a-minute` and `understanding-the-if-name-main` get no in-body links. `python-program-for-matrix-multiplication` and `how-i-built-my-data-science-portfolio` get only one template link. Add contextual links to them from related posts.
- `ci-vs-pi-regression-bands` reuses `linear-regression-in-a-minute`'s cover image. Give it its own image.

## If you approve a merge

1. Move the content into the target post and set its `updated` date in `src/data/content.ts`.
2. Remove the merged post from `blogPosts` / `blogContent` so it leaves the sitemap, blog index and related blocks.
3. Add `public/blog/<old-slug>/index.html` as a redirect stub that points at the target. Use the same pattern as the existing `public/blog/<slug>.html` stubs: `noindex, follow`, a canonical to the target, a 0-second meta refresh, a JS `location.replace`, and a `<noscript>` link. Repoint the old `public/blog/<old-slug>.html` stub at the target too.
4. On Medium, set the old story's canonical to the target URL.
