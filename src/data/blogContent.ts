// Auto-extracted blog post bodies — do not edit manually
// Source: public/blog/*.html → python3 scripts (see CLAUDE.md)

export const blogContent: Record<string, string> = {
  "bayesian-learning-in-a-minute": `<figure class="blog-figure">
                        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*qkE0Tj7IeAVHty7v.png"
                             alt="Bayesian learning concept — updating prior beliefs with evidence to form posterior"
                             loading="eager">
                        <figcaption>Bayesian learning: start with a prior, observe evidence, update to a posterior. Repeat with every new data point.</figcaption>
                    </figure>

<h2 id="the-core-idea">The Core Idea</h2>
                        <p>
                            When you encounter data, some hypotheses become more likely than others.
                            Bayesian learning is a framework that <strong>formalizes this update process</strong> — expressing beliefs as probabilities and revising them mathematically as new evidence arrives.
                        </p>
                        <p>
                            Unlike frequentist approaches that treat probability as long-run frequency, Bayesian learning treats probability as <em>degree of belief</em>.
                            A hypothesis doesn't just have a fixed true/false status — it has a probability of being correct, and that probability changes with evidence.
                        </p>

                        <h2 id="bayes-theorem">Bayes Theorem</h2>

                        <div class="blog-formula-box">P(A|B) = P(B|A) × P(A) / P(B)</div>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*V0qGhJ4mEbm3QWwU278Kaw.png"
                                 alt="Bayes theorem formula P(A|B) = P(B|A) times P(A) divided by P(B)"
                                 loading="lazy">
                            <figcaption>Bayes theorem: the posterior probability of A given B equals the likelihood times the prior, normalized by the evidence.</figcaption>
                        </figure>

                        <p><strong>Components:</strong></p>
                        <ul>
                            <li><strong>P(A|B)</strong> — probability of event A given that B occurred</li>
                            <li><strong>P(B|A)</strong> — probability of event B given that A occurred</li>
                            <li><strong>P(A)</strong> — prior probability of A (before seeing B)</li>
                            <li><strong>P(B)</strong> — total probability of B (normalizing constant)</li>
                        </ul>

                        <h2 id="the-three-components-in-machine-learning">The Three Components in Machine Learning</h2>

                        <div class="blog-component">
                            <h3><span class="component-number">1</span> Prior Probability — P(H)</h3>
                            <p>Your initial belief about a hypothesis <em>before</em> observing any data. This encodes existing knowledge, expert opinion, or a uniform assumption if you have none. The prior is your starting point.</p>
                        </div>

                        <div class="blog-component">
                            <h3><span class="component-number">2</span> Likelihood — P(D|H)</h3>
                            <p>The probability of observing the data D <em>given</em> that hypothesis H is true. This is the bridge — it tells you how well each hypothesis explains what you've observed.</p>
                        </div>

                        <div class="blog-component">
                            <h3><span class="component-number">3</span> Posterior Probability — P(H|D)</h3>
                            <p>Your updated belief about hypothesis H <em>after</em> seeing the data D. This is what you actually want — the probability of the hypothesis being true in light of all available evidence.</p>
                        </div>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*uA4a24lLqK3kxCCA1aZTvg.png"
                                 alt="Prior, likelihood, and posterior probability diagram in Bayesian framework"
                                 loading="lazy">
                            <figcaption>Prior × Likelihood → Posterior. Each new observation shifts the distribution.</figcaption>
                        </figure>

                        <div class="blog-insight">
                            "Today's posterior is tomorrow's prior. Bayesian learning never stops updating."
                        </div>

                        <h2 id="example-disease-diagnosis">Example: Disease Diagnosis</h2>
                        <p>
                            A disease affects 1% of the population. A test for it is 99% accurate.
                            You test positive. What's the probability you actually have the disease?
                        </p>
                        <p>
                            Intuition says ~99%. Bayes theorem says something quite different.
                        </p>
                        <ul>
                            <li>Prior: P(disease) = 0.01</li>
                            <li>P(positive | disease) = 0.99</li>
                            <li>P(positive | no disease) = 0.01</li>
                        </ul>
                        <p>
                            Applying Bayes: P(disease | positive) ≈ <strong>50%</strong>.
                            The low base rate (1%) means even a highly accurate test produces many false positives on a healthy population.
                            This is why medical tests often require confirmation.
                        </p>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*ICBRKvivpwbgmSbZbZYKfA.png"
                                 alt="Disease diagnosis Bayesian example with 1% prevalence and 99% test accuracy"
                                 loading="lazy">
                            <figcaption>With 1% disease prevalence, a positive test result is only ~50% likely to indicate true disease.</figcaption>
                        </figure>

                        <h2 id="example-horse-race-hypothesis-convergence">Example: Horse Race — Hypothesis Convergence</h2>
                        <p>
                            Two horses have actual winning probabilities: Horse A = 0.3, Horse B = 0.7.
                            We start with three hypotheses about their true probabilities.
                            After each race, we update each hypothesis using Bayes theorem.
                        </p>
                        <p>
                            The hypothesis closest to the true probabilities (A: 0.3, B: 0.7) accumulates the highest posterior after multiple races.
                            False hypotheses gradually lose probability mass.
                        </p>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*QFoWVdfFTKceJ_GE2GVM_g.png"
                                 alt="Horse race Bayesian example with three competing hypotheses about win probabilities"
                                 loading="lazy">
                            <figcaption>Horse race: three competing hypotheses updated race by race — the truest hypothesis converges to the highest posterior.</figcaption>
                        </figure>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*GRdjSDwij0q50nHBL94MAA.png"
                                 alt="Bayesian convergence: posterior probability of correct hypothesis increases with more observations"
                                 loading="lazy">
                            <figcaption>Convergence: with enough data, the posterior concentrates on the hypothesis closest to the truth.</figcaption>
                        </figure>

                        <h2 id="why-bayesian-learning-matters">Why Bayesian Learning Matters</h2>
                        <ul>
                            <li><strong>Incorporates prior knowledge</strong> — expert opinions and domain knowledge become priors, not discarded information.</li>
                            <li><strong>Quantifies uncertainty</strong> — instead of a point prediction, you get a probability distribution.</li>
                            <li><strong>Updates dynamically</strong> — every new observation refines the posterior without retraining from scratch.</li>
                            <li><strong>Principled handling of small data</strong> — priors regularize when data is scarce.</li>
                        </ul>

                        <figure class="blog-figure blog-figure--narrow">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*flEUoBzTVG9N3n88zRPgnw.png"
                                 alt="Bayesian learning applications: medicine, finance, ML, spam detection"
                                 loading="lazy">
                            <figcaption>Bayesian methods span medicine, finance, NLP, and any domain where uncertainty must be explicitly modeled.</figcaption>
                        </figure>

                        <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>

                        <details class="faq-item">
                            <summary>What is Bayes theorem?</summary>
                            <p>P(A|B) = P(B|A) × P(A) / P(B). It gives you the probability of hypothesis A given evidence B, combining your prior belief P(A) with how likely the evidence is under that hypothesis P(B|A), normalized by total probability of evidence P(B).</p>
                        </details>

                        <details class="faq-item">
                            <summary>What is the difference between prior and posterior probability?</summary>
                            <p>Prior P(H): your belief about hypothesis H before seeing any data. Posterior P(H|D): your updated belief after incorporating observed data D. Bayesian learning is the process of converting priors into posteriors with evidence.</p>
                        </details>

                        <details class="faq-item">
                            <summary>What is likelihood in Bayesian learning?</summary>
                            <p>Likelihood P(D|H) is the probability of observing the data D given hypothesis H is true. It measures how well a hypothesis explains the observed evidence — the bridge between prior and posterior.</p>
                        </details>

                        <details class="faq-item">
                            <summary>Why is Bayesian learning useful in ML?</summary>
                            <p>Bayesian learning incorporates prior knowledge, quantifies uncertainty (outputs distributions, not point predictions), updates dynamically with new data, and handles small datasets via priors as regularization. Used in medicine, spam filtering, fraud detection, NLP, and more.</p>
                        </details>`,

  "ci-vs-pi-regression-bands": `<h2 id="two-bands">Two bands, two entirely different questions</h2>
            <p>
                When a regression model draws a line through data, it answers one question: <em>what is the average response at this X value?</em>
                But the moment you put that line in front of a stakeholder, two more questions always follow — and they require completely different bands to answer honestly.
            </p>
            <p>
                The first question is about the <strong>line itself</strong>: if you re-ran this study with a fresh sample, where would the regression line land?
                This is the <span class="ci">Confidence Interval (CI)</span> — uncertainty about the mean response.
            </p>
            <p>
                The second is about <strong>one specific new observation</strong>: given a territory you've never seen before, where will its actual number actually land?
                This is the <span class="pi">Prediction Interval (PI)</span> — uncertainty about a single draw from the distribution.
            </p>
            <p>
                They look like two concentric ribbons on a plot. The teal inner band is the <span class="ci">CI</span>. The clay outer band is the <span class="pi">PI</span>.
                They're not the same thing, and substituting one for the other is a quiet, expensive mistake.
            </p>

            <div class="bq">
                <p>The <span class="ci">CI</span> answers <em>where is the average?</em> The <span class="pi">PI</span> answers <em>where will the next point be?</em>
                One shrinks to zero as your sample grows. The other never shrinks past the noise floor.</p>
            </div>

            <h2 id="explore">Explore it</h2>
            <p>
                The simulation below uses a sales-territory example: each dot is a territory,
                X is monthly detailing calls to doctors, Y is new prescriptions written.
                A few things worth observing while you interact:
            </p>

            <ul class="hint-list">
                <li>
                    <span class="hint-icon">n ↑</span>
                    <span>The <span class="ci">teal CI band</span> tightens steadily toward the line. The <span class="pi">clay PI band</span> barely moves. More data nails down where the line is, but doesn't tame individual scatter.</span>
                </li>
                <li>
                    <span class="hint-icon">noise</span>
                    <span>Both bands widen, but the <span class="pi">PI</span> widens faster because it absorbs the full variance of individual territories.</span>
                </li>
                <li>
                    <span class="hint-icon">90/95/99</span>
                    <span>Confidence level scales both bands through the t-critical value. The <span class="pi">PI</span> stays outside the <span class="ci">CI</span> at every level.</span>
                </li>
                <li>
                    <span class="hint-icon">hover</span>
                    <span>See the exact <span class="ci">CI ±</span> and <span class="pi">PI ±</span> at any X. Both grow as you move toward the edges — the leverage effect.</span>
                </li>
            </ul>

            <div id="ci-pi-widget">
                <div class="w-wrap">
                    <div class="w-head">
                        <div class="w-kicker">Linear regression · seeing CI vs PI</div>
                        <div class="w-title">Best-fit line, <span class="light">with both uncertainty bands</span></div>
                        <p class="w-sub">Each dot is a sales territory. X is monthly detailing calls to doctors, Y is new prescriptions. Watch how the <b>teal CI band</b> hugs the line while the <b>clay PI band</b> stretches to catch the points.</p>
                    </div>
                    <div class="w-grid">
                        <div class="w-panel">
                            <div class="w-ptitle">Controls</div>
                            <div class="w-ctrl">
                                <label>Territories (data points) <span class="v" id="w_nVal"></span></label>
                                <input type="range" id="w_n" min="8" max="60" step="1" value="40">
                            </div>
                            <div class="w-ctrl">
                                <label>Scatter / noise <span class="v" id="w_noiseVal"></span></label>
                                <input type="range" id="w_noise" min="8" max="60" step="1" value="30">
                            </div>
                            <div class="w-divider"></div>
                            <div class="w-ctrl">
                                <label style="margin-bottom:8px">Confidence level</label>
                                <div class="w-seg" id="w_conf">
                                    <button data-c="90">90%</button>
                                    <button data-c="95" class="on">95%</button>
                                    <button data-c="99">99%</button>
                                </div>
                            </div>
                            <div class="w-divider"></div>
                            <div class="w-ptitle" style="margin-bottom:11px">Show / hide</div>
                            <div class="w-toggles">
                                <div class="w-tg on" data-t="points" style="--wsw:var(--w-dot)"><span class="box"></span> Data points</div>
                                <div class="w-tg on" data-t="fit"><span class="box"></span> Best-fit line</div>
                                <div class="w-tg on" data-t="ci" style="--wsw:var(--ci)"><span class="box"></span> CI band (the line)</div>
                                <div class="w-tg on" data-t="pi" style="--wsw:var(--pi)"><span class="box"></span> PI band (new point)</div>
                                <div class="w-tg on" data-t="mean"><span class="box"></span> Mean-of-X marker</div>
                            </div>
                            <div class="w-divider"></div>
                            <button class="w-regen" id="w_regen">New random sample</button>
                        </div>
                        <div>
                            <div class="w-plot-wrap">
                                <div class="w-legend">
                                    <div class="it"><span class="ln"></span> Best-fit line</div>
                                    <div class="it"><span class="sw" style="background:var(--w-ci-fill);border:1px solid var(--ci)"></span> CI band</div>
                                    <div class="it"><span class="sw" style="background:var(--w-pi-fill);border:1px solid var(--pi)"></span> PI band</div>
                                    <div class="it"><span class="sw" style="background:var(--w-dot);border-radius:50%;width:11px;height:11px"></span> Territory</div>
                                </div>
                                <canvas id="w_plot" height="440"></canvas>
                                <div class="w-tt" id="w_tt"></div>
                            </div>
                            <div class="w-stats">
                                <div class="w-stat" style="--wac:var(--w-ink)">
                                    <div class="k">Fitted line</div>
                                    <div class="val" id="w_sEq" style="font-size:15px">–</div>
                                    <div class="nt">Rx per extra call</div>
                                </div>
                                <div class="w-stat" style="--wac:var(--ci)">
                                    <div class="k">Points inside CI</div>
                                    <div class="val" id="w_sCI">–</div>
                                    <div class="nt">low: CI is not about points</div>
                                </div>
                                <div class="w-stat" style="--wac:var(--pi)">
                                    <div class="k">Points inside PI</div>
                                    <div class="val" id="w_sPI">–</div>
                                    <div class="nt" id="w_sPInote">should sit near the level</div>
                                </div>
                                <div class="w-stat" style="--wac:var(--w-muted)">
                                    <div class="k">PI vs CI width</div>
                                    <div class="val" id="w_sRatio">–</div>
                                    <div class="nt">at the mean of X</div>
                                </div>
                            </div>
                            <div class="w-insight" id="w_insight"></div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 id="math">What the math is actually saying</h2>
            <p>
                Both intervals use the same t-critical value and the same residual standard deviation <code>s</code>.
                The only difference is one term inside a square root:
            </p>

            <div class="formula-block" role="figure" aria-label="Standard error formulas for CI and PI">
                <div class="formula-caption">The only difference between CI and PI</div>
                <div class="formula"><span class="f-ci">SE<sub>mean</sub>(x)</span> = s · √( 1/n + (x − x̄)² / S<sub>xx</sub> )</div>
                <div class="formula"><span class="f-pi">SE<sub>pred</sub>(x)</span> = s · √( <span class="f-hi">1 +</span> 1/n + (x − x̄)² / S<sub>xx</sub> )</div>
            </div>

            <p>
                That <strong class="pi">"1 +"</strong> is the entire difference. It represents the variance of a single new observation around the true mean —
                variance that exists independently of how large your sample is.
                As n → ∞, <span class="ci">SE<sub>mean</sub></span> → 0, but <span class="pi">SE<sub>pred</sub></span> → s.
                You can have a million data points and the <span class="pi">PI</span> will still be wide if the underlying process is noisy.
                The noise is real; it doesn't average away.
            </p>
            <p>
                Both formulas also contain (x − x̄)² / S<sub>xx</sub>, which grows as you move away from the center of your data.
                This is why both bands <strong>pinch at the mean of X</strong> and flare toward the edges — the model is most certain where it has seen the most data, and extrapolation compounds every source of uncertainty.
            </p>

            <h2 id="use-cases">When to use each</h2>

            <div class="comparison-grid">
                <div class="cmp-card ci-card">
                    <h3>Use CI when asking about the population</h3>
                    <ul>
                        <li>Testing whether detailing calls have a significant effect on prescriptions at the population level</li>
                        <li>Estimating the average lift across all territories with a given call volume</li>
                        <li>Publishing research about the mean response curve</li>
                        <li>Comparing two groups — "does group A average higher than group B?"</li>
                    </ul>
                </div>
                <div class="cmp-card pi-card">
                    <h3>Use PI when deciding about one case</h3>
                    <ul>
                        <li>Forecasting one specific territory's prescription count next quarter</li>
                        <li>Deciding whether a single new patient will respond to a treatment</li>
                        <li>Setting an inventory threshold for one SKU at one store</li>
                        <li>Any time the question is "what will <em>this</em> observation be?" not "what is the average?"</li>
                    </ul>
                </div>
            </div>

            <div class="bq">
                <p>If your boss asks 'will this territory hit quota next quarter?' — the <span class="ci">CI band</span> is the wrong tool.
                A <span class="ci">CI</span> that says ±12 prescriptions around the mean tells you nothing about whether one territory will land inside or outside target.
                You need the <span class="pi">PI</span>. And it will almost always be wider than you hoped.</p>
            </div>

            <p>
                For more on the foundations that make this work, see <a href="linear-regression-in-a-minute.html">Linear Regression in a Minute</a>.
            </p>

            <a href="linear-regression-in-a-minute.html" class="related-card" aria-label="Related reading: Linear Regression in a Minute">
                <div class="related-card-icon"></div>
                <div>
                    <div class="rc-label">Related Reading</div>
                    <div class="rc-title">Linear Regression in a Minute</div>
                    <div class="rc-desc">The line, OLS derivation, assumptions, and diagnostics — the foundations that make CI and PI meaningful.</div>
                </div>
            </a>`,

  "conda-virtual-environment-commands": `<figure class="blog-figure">
                        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*vpISFPkJvs-K3WD-Yb3HyQ.png"
                             alt="Anaconda distribution — Python toolkit for data science with 300+ packages"
                             loading="eager">
                        <figcaption>Anaconda: the Python distribution for data science, bundling conda, 300+ packages, and environment management.</figcaption>
                    </figure>

<h2 id="why-anaconda">Why Anaconda?</h2>
                        <p>
                            Anaconda is a Python distribution built for data science. It ships with over 300 packages — NumPy, Pandas, Matplotlib, Scikit-learn, Jupyter — pre-installed.
                            More importantly, it includes <strong>conda</strong>, a package and environment manager that solves the version conflict problem data science practitioners constantly face.
                        </p>
                        <p>
                            Different projects often need different versions of the same library. Conda lets you create isolated environments — each with its own Python version and packages — so projects never interfere with each other.
                        </p>

                        <h2 id="video-tutorial">Video Tutorial</h2>
                        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:8px;margin:1.5rem 0;">
                            <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;"
                                    src="https://www.youtube.com/embed/oCY4NJWwYAo"
                                    title="Conda Virtual Environment Tutorial"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    loading="lazy"></iframe>
                        </div>

                        <h2 id="create-a-virtual-environment">Create a Virtual Environment</h2>
                        <p>Specify the Python version when creating — this prevents compatibility issues with packages like TensorFlow and PyTorch that require specific Python versions:</p>

                        <pre><code>conda create -n &lt;name of virtual environment&gt; python=x.x</code></pre>

                        <p>Example: <code>conda create -n myenv python=3.10</code></p>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*STS7htAtLE4EDJReNx6oFA.png"
                                 alt="conda create command creating a new virtual environment"
                                 loading="lazy">
                            <figcaption>Creating a conda environment with a specific Python version.</figcaption>
                        </figure>

                        <h2 id="activate-the-environment">Activate the Environment</h2>
                        <pre><code>conda activate &lt;name of virtual environment&gt;</code></pre>
                        <p>Your terminal prompt will show the environment name in parentheses once activated: <code>(myenv) $</code></p>

                        <h2 id="install-packages">Install Packages</h2>
                        <p><strong>Using conda</strong> (preferred for data science packages — handles non-Python dependencies):</p>
                        <pre><code>conda install &lt;package name&gt;</code></pre>

                        <p><strong>Using pip</strong> (for packages not available in the conda repository):</p>
                        <pre><code>pip install &lt;package name&gt;</code></pre>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*BEBwaAu58_nqhbozG6nDnA.png"
                                 alt="Installing packages in a conda virtual environment"
                                 loading="lazy">
                            <figcaption>Packages installed inside a conda environment are isolated from other environments.</figcaption>
                        </figure>

                        <h2 id="deactivate-the-environment">Deactivate the Environment</h2>
                        <pre><code>conda deactivate</code></pre>
                        <p>Returns you to the base environment.</p>

                        <h2 id="delete-an-environment">Delete an Environment</h2>
                        <pre><code>conda remove -n &lt;name of virtual environment&gt; --all</code></pre>
                        <p>The <code>--all</code> flag removes all packages along with the environment.</p>

                        <div class="blog-component">
                            <h3>Command Reference</h3>
                            <ul>
                                <li><code>conda create -n myenv python=3.10</code> — create environment with Python 3.10</li>
                                <li><code>conda activate myenv</code> — activate environment</li>
                                <li><code>conda install numpy</code> — install package via conda</li>
                                <li><code>pip install package</code> — install package via pip (when conda repo lacks it)</li>
                                <li><code>conda deactivate</code> — deactivate environment</li>
                                <li><code>conda remove -n myenv --all</code> — delete environment entirely</li>
                                <li><code>conda env list</code> — list all environments</li>
                            </ul>
                        </div>`,

  "confusion-matrix-metrics-in-a-minute": `<figure class="blog-figure">
                        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*fKaPc3crH8CdwikiCiS1wQ.png"
                             alt="Confusion matrix table with TP, TN, FP, FN quadrants labeled"
                             loading="eager">
                        <figcaption>The confusion matrix: actual vs predicted, broken into four outcomes that drive every classification metric.</figcaption>
                    </figure>

<h2 id="what-is-a-confusion-matrix">What Is a Confusion Matrix?</h2>
                        <p>
                            A confusion matrix is <strong>a table that describes the performance of a classification model by comparing actual labels with predicted labels</strong>.
                            It doesn't give you one number — it breaks predictions into four categories so you can see exactly where the model is right and where it fails.
                        </p>

                        <h2 id="the-four-core-elements">The Four Core Elements</h2>

                        <div class="blog-component">
                            <h3><span class="component-number">TP</span> True Positives</h3>
                            <p>Instances correctly predicted as positive. Model said positive, it was positive. The ideal outcome for positive cases.</p>
                        </div>

                        <div class="blog-component">
                            <h3><span class="component-number">TN</span> True Negatives</h3>
                            <p>Instances correctly predicted as negative. Model said negative, it was negative. The ideal outcome for negative cases.</p>
                        </div>

                        <div class="blog-component">
                            <h3><span class="component-number">FP</span> False Positives — Type I Error</h3>
                            <p>Instances incorrectly predicted as positive. Model said positive, it was actually negative. "False alarm."</p>
                        </div>

                        <div class="blog-component">
                            <h3><span class="component-number">FN</span> False Negatives — Type II Error</h3>
                            <p>Instances incorrectly predicted as negative. Model said negative, it was actually positive. "Missed detection."</p>
                        </div>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*46W6ANb7enl0SoAAoIb0mA.png"
                                 alt="TP TN FP FN quadrant visualization with actual vs predicted axes"
                                 loading="lazy">
                            <figcaption>TP and TN are correct predictions. FP is a false alarm. FN is a missed detection.</figcaption>
                        </figure>

                        <h2 id="the-metrics">The Metrics</h2>

                        <div class="blog-component">
                            <h3><span class="component-number">1</span> Accuracy</h3>
                            <div class="blog-formula-box">Accuracy = (TP + TN) / (TP + TN + FP + FN)</div>
                            <p>
                                Overall fraction of correct predictions. <strong>Suitable when classes are balanced.</strong>
                                On imbalanced datasets, a model predicting "always negative" on a 99% negative dataset achieves 99% accuracy — and catches zero positives. Accuracy is misleading here.
                            </p>
                        </div>

                        <figure class="blog-figure blog-figure--narrow">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*kUW3E7w6thfD11VCGPSz8Q.png"
                                 alt="Accuracy formula: (TP + TN) divided by total predictions"
                                 loading="lazy">
                            <figcaption>Accuracy: correct predictions over total — only reliable on balanced classes.</figcaption>
                        </figure>

                        <div class="blog-component">
                            <h3><span class="component-number">2</span> Precision</h3>
                            <div class="blog-formula-box">Precision = TP / (TP + FP)</div>
                            <p>
                                Of all instances the model predicted positive, what fraction actually were?
                                <strong>Use when false positives are costly.</strong>
                                Example: spam detection — flagging a legitimate email as spam is a false positive with real cost. A drug prescription model — giving a patient a drug they don't need is harmful.
                            </p>
                        </div>

                        <figure class="blog-figure blog-figure--narrow">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*nnvKaBsz1Wn6ZR48oExjMg.png"
                                 alt="Precision formula: TP divided by (TP + FP)"
                                 loading="lazy">
                            <figcaption>Precision: of predicted positives, how many were real? Minimize false alarms.</figcaption>
                        </figure>

                        <div class="blog-component">
                            <h3><span class="component-number">3</span> Recall (Sensitivity)</h3>
                            <div class="blog-formula-box">Recall = TP / (TP + FN)</div>
                            <p>
                                Of all actual positives, what fraction did the model catch?
                                <strong>Crucial when false negatives are costly.</strong>
                                Example: cancer screening — missing a real case (FN) is far worse than a false alarm. You want to catch every positive, even at the cost of some false positives.
                            </p>
                        </div>

                        <figure class="blog-figure blog-figure--narrow">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*9BovmTKy__XzDod50jMfow.png"
                                 alt="Recall formula: TP divided by (TP + FN)"
                                 loading="lazy">
                            <figcaption>Recall: of all actual positives, how many were caught? Minimize missed detections.</figcaption>
                        </figure>

                        <div class="blog-component">
                            <h3><span class="component-number">4</span> F1 Score</h3>
                            <div class="blog-formula-box">F1 = 2 × (Precision × Recall) / (Precision + Recall)</div>
                            <p>
                                The harmonic mean of precision and recall. <strong>Balances both when both types of error matter.</strong>
                                Preferred over accuracy on imbalanced datasets. A high F1 means both precision and recall are high — the model neither floods with false alarms nor misses real cases.
                            </p>
                        </div>

                        <figure class="blog-figure blog-figure--narrow">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*deoCYxH0AEYcNIRA5UorMw.png"
                                 alt="F1 score formula: 2 times precision times recall divided by precision plus recall"
                                 loading="lazy">
                            <figcaption>F1: harmonic mean of precision and recall — the go-to metric for imbalanced classification.</figcaption>
                        </figure>

                        <div class="blog-component">
                            <h3><span class="component-number">5</span> Specificity</h3>
                            <div class="blog-formula-box">Specificity = TN / (TN + FP)</div>
                            <p>
                                Of all actual negatives, what fraction were correctly identified as negative?
                                <strong>Important in medical diagnostics</strong> where correctly classifying healthy patients (true negatives) is critical — avoiding unnecessary treatments.
                            </p>
                        </div>

                        <figure class="blog-figure blog-figure--narrow">
                            <img src="https://miro.medium.com/v2/resize:fit:608/format:webp/1*rk6obJyPShw-ibFVEJLbnA.jpeg"
                                 alt="Specificity formula: TN divided by (TN + FP)"
                                 loading="lazy">
                            <figcaption>Specificity: of all actual negatives, how many were correctly identified? Complement to recall.</figcaption>
                        </figure>

                        <div class="blog-insight">
                            "Precision asks: when you say yes, how often are you right? Recall asks: when the answer is yes, how often do you say it?"
                        </div>

                        <h2 id="worked-example-pregnancy-diagnosis">Worked Example: Pregnancy Diagnosis</h2>
                        <p>
                            Consider a model diagnosing pregnancy (positive = pregnant, negative = not pregnant).
                        </p>

                        <figure class="blog-figure blog-figure--narrow">
                            <img src="https://miro.medium.com/v2/resize:fit:380/format:webp/1*8KXOIcAOkafhhqTlKibAhg.jpeg"
                                 alt="Example patient table: actual pregnancy status vs model prediction"
                                 loading="lazy">
                            <figcaption>Sample patient predictions: a mix of TP, TN, FP, and FN outcomes.</figcaption>
                        </figure>

                        <figure class="blog-figure blog-figure--narrow">
                            <img src="https://miro.medium.com/v2/resize:fit:334/format:webp/1*0i-w7nQ1L1L4KQqbKqps4g.jpeg"
                                 alt="True Positive count for pregnancy example"
                                 loading="lazy">
                            <figcaption>TP: model predicted pregnant, patient is pregnant.</figcaption>
                        </figure>

                        <figure class="blog-figure blog-figure--narrow">
                            <img src="https://miro.medium.com/v2/resize:fit:582/format:webp/1*x7-u5irpLI-ukKQv6eFGQg.jpeg"
                                 alt="Confusion matrix filled in for pregnancy diagnosis example"
                                 loading="lazy">
                            <figcaption>Confusion matrix for the pregnancy example: values filled for all four quadrants.</figcaption>
                        </figure>

                        <h2 id="applied-breast-cancer-classification-model">Applied: Breast Cancer Classification Model</h2>
                        <p>
                            A Support Vector Classifier (SVC) trained on the breast cancer dataset demonstrates these metrics in a real scenario.
                            With features from tumor biopsies, the model predicts malignant vs benign.
                        </p>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:404/format:webp/1*HDZhFMSGUlA9CCHGOKCHsw.jpeg"
                                 alt="Breast cancer SVC model training code in Python"
                                 loading="lazy">
                            <figcaption>SVC model training on the breast cancer dataset using sklearn.</figcaption>
                        </figure>

                        <figure class="blog-figure blog-figure--narrow">
                            <img src="https://miro.medium.com/v2/resize:fit:450/format:webp/1*2r-Jjl11HdR2a1d48Hb0_g.jpeg"
                                 alt="Confusion matrix output for breast cancer SVC model"
                                 loading="lazy">
                            <figcaption>Confusion matrix for the breast cancer SVC: TP, TN, FP, FN counts.</figcaption>
                        </figure>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:460/format:webp/1*140kj-QbbXSe01lUtLR4Nw.jpeg"
                                 alt="sklearn classification report showing precision, recall, F1 for breast cancer model"
                                 loading="lazy">
                            <figcaption>Classification report: precision, recall, F1 per class — the full picture beyond accuracy.</figcaption>
                        </figure>

                        <p>
                            The full Jupyter notebook with code is available on GitHub Gist:
                        </p>
                        <a href="https://gist.github.com/rishabh11336/1ba1949a8d19e5446347c5a4e39f53fb#file-classification_report-ipynb"
                           target="_blank" rel="noopener noreferrer" class="btn"
                           style="display:inline-flex;align-items:center;gap:8px;margin:10px 0 30px;">
                            View Notebook (GitHub Gist)
                        </a>

                        <h2 id="when-to-use-which-metric">When to Use Which Metric</h2>
                        <ul>
                            <li><strong>Balanced classes:</strong> accuracy is reliable</li>
                            <li><strong>Imbalanced classes:</strong> use F1, precision, or recall instead</li>
                            <li><strong>FP is costly</strong> (spam filter, drug prescription): optimize precision</li>
                            <li><strong>FN is costly</strong> (cancer screening, fraud detection): optimize recall</li>
                            <li><strong>Both errors matter:</strong> use F1 as the primary metric</li>
                            <li><strong>Medical diagnostics for healthy patients:</strong> include specificity</li>
                        </ul>

                        <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>

                        <details class="faq-item">
                            <summary>What is a confusion matrix?</summary>
                            <p>A table comparing actual vs predicted labels across four outcomes: True Positive (TP), True Negative (TN), False Positive (FP — Type I error), False Negative (FN — Type II error). It's the foundation for all classification metrics.</p>
                        </details>

                        <details class="faq-item">
                            <summary>What is the difference between precision and recall?</summary>
                            <p>Precision = TP / (TP + FP) — of predicted positives, how many were real? Use when FP is costly (spam, drug prescription). Recall = TP / (TP + FN) — of all actual positives, how many were caught? Use when FN is costly (cancer, fraud).</p>
                        </details>

                        <details class="faq-item">
                            <summary>What is the F1 score?</summary>
                            <p>F1 = 2 × (Precision × Recall) / (Precision + Recall). Harmonic mean of precision and recall. Preferred over accuracy on imbalanced datasets. A high F1 means the model is both precise and catches most positives.</p>
                        </details>

                        <details class="faq-item">
                            <summary>When should you use accuracy vs F1?</summary>
                            <p>Use accuracy when classes are balanced. Use F1 when imbalanced — a model that always predicts "negative" on a 99% negative dataset achieves 99% accuracy but 0% recall. F1 exposes this failure.</p>
                        </details>

                        <details class="faq-item">
                            <summary>What is specificity?</summary>
                            <p>Specificity = TN / (TN + FP). Of all actual negatives, how many were correctly identified? Critical in medicine for avoiding unnecessary treatment of healthy patients.</p>
                        </details>`,

  "convert-python-program-to-exe": `<figure class="blog-figure">
                        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*1-VzF9yWuBxQcFBqE8ntOA.png"
                             alt="Python program converted to Windows .exe executable"
                             loading="eager">
                        <figcaption>Convert Python scripts to standalone executables — no Python installation required on the target machine.</figcaption>
                    </figure>

<h2 id="why-convert-to-exe">Why Convert to exe?</h2>
                        <p>
                            Python makes building GUI apps easy with Tkinter and other libraries.
                            But sharing them is hard: recipients need Python installed, need the right packages, need to run scripts from terminal.
                            Converting to <code>.exe</code> removes all of this — users double-click and it works.
                        </p>

                        <h2 id="method-1-pyinstaller-command-line">Method 1: PyInstaller (Command Line)</h2>
                        <p>
                            PyInstaller bundles a Python program and all its dependencies into a single package.
                            The recipient doesn't need Python or any modules installed.
                            Output: <code>.exe</code> on Windows, standard executable on Linux, <code>.app</code> on macOS.
                        </p>

                        <h3>Step 1: Install PyInstaller</h3>
                        <pre><code>pip install pyinstaller</code></pre>

                        <h3>Step 2: Open terminal in your project folder</h3>
                        <p>Right-click the folder containing your Python file → "Open in Terminal" (or <code>cd</code> to the folder).</p>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*oy_bbQ_EsA31D3znSoJwfA.png"
                                 alt="Opening terminal in Python project folder"
                                 loading="lazy">
                            <figcaption>Open terminal in the folder containing your .py file before running pyinstaller.</figcaption>
                        </figure>

                        <h3>Step 3: Run the conversion command</h3>
                        <pre><code>pyinstaller --onefile -w 'filename.py'</code></pre>
                        <p>Replace <code>filename.py</code> with your actual file. Flags:</p>
                        <ul>
                            <li><strong><code>--onefile</code></strong> — bundles everything into a single <code>.exe</code></li>
                            <li><strong><code>-w</code></strong> — suppresses the console window (use for GUI apps)</li>
                        </ul>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*gOqMGVHNLSfJR-p1--DKiQ.png"
                                 alt="PyInstaller running — build and dist folder creation"
                                 loading="lazy">
                            <figcaption>PyInstaller creates build/ and dist/ folders plus a .spec configuration file.</figcaption>
                        </figure>

                        <h3>Step 4: Find your executable</h3>
                        <p>PyInstaller creates three outputs:</p>
                        <ul>
                            <li><strong><code>dist/</code></strong> — your distributable <code>.exe</code> file is here</li>
                            <li><strong><code>build/</code></strong> — internal metadata, useful for debugging build issues</li>
                            <li><strong><code>filename.spec</code></strong> — configuration file for advanced customization</li>
                        </ul>

                        <div class="blog-insight">
                            "Share only the <code>dist/</code> folder contents — the build/ folder and .spec file are build artifacts, not needed by end users."
                        </div>

                        <h2 id="method-2-auto-py-to-exe-gui">Method 2: auto-py-to-exe (GUI)</h2>
                        <p>
                            auto-py-to-exe provides a graphical browser-based interface built on top of PyInstaller.
                            It's more accessible for beginners and makes it easy to add extra files, icons, and configure advanced options visually.
                            The output is a built executable rather than the original source code — the GUI also provides some security by not exposing the .py directly.
                        </p>

                        <h3>Step 1: Install</h3>
                        <pre><code>pip install auto-py-to-exe</code></pre>

                        <h3>Step 2: Launch the GUI</h3>
                        <pre><code>auto-py-to-exe</code></pre>
                        <p>This opens a browser-based interface.</p>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*mFVPFfcW8BU7t-dSHtGDXQ.png"
                                 alt="auto-py-to-exe graphical interface"
                                 loading="lazy">
                            <figcaption>auto-py-to-exe launches a browser-based GUI — no command-line knowledge needed.</figcaption>
                        </figure>

                        <h3>Step 3: Select your Python file</h3>
                        <p>Click the Browse button and select your <code>.py</code> script.</p>

                        <h3>Step 4: Choose packaging mode</h3>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*IAfTCJRp766S7CHhPasUHw.png"
                                 alt="One File vs One Directory option in auto-py-to-exe"
                                 loading="lazy">
                            <figcaption>Choose One File for a single portable .exe, or One Directory for apps with media assets.</figcaption>
                        </figure>

                        <ul>
                            <li><strong>One File</strong> — single <code>.exe</code>, easy to share, but media files (images, sounds) are NOT bundled — use "Additional Files" for those</li>
                            <li><strong>One Directory</strong> — folder with executable and all dependencies, better for apps with asset files, faster startup (no extraction step)</li>
                        </ul>

                        <h3>Step 5: Add extra files if needed</h3>
                        <p>Use the "Additional Files" menu to include images, databases, or other assets your app requires.</p>

                        <h3>Step 6: Convert</h3>
                        <p>Click <strong>"CONVERT .PY TO .EXE"</strong>. When complete, the output path is shown — click "OPEN OUTPUT FOLDER" to access your executable.</p>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*d5tl4F2SB0IJ3govWa4T8A.png"
                                 alt="auto-py-to-exe conversion complete with output folder"
                                 loading="lazy">
                            <figcaption>Conversion complete — click "OPEN OUTPUT FOLDER" to find your .exe file.</figcaption>
                        </figure>

                        <div class="blog-component">
                            <h3>Method Comparison</h3>
                            <ul>
                                <li><strong>PyInstaller (CLI):</strong> faster for experienced users, scriptable, CI/CD friendly</li>
                                <li><strong>auto-py-to-exe (GUI):</strong> easier for beginners, visual configuration, same underlying engine</li>
                                <li><strong>Both produce:</strong> platform-specific executable — build on Windows for Windows, Linux for Linux, macOS for macOS</li>
                                <li><strong>One File vs One Directory:</strong> One File is simpler to share; One Directory is better for apps with bundled assets</li>
                            </ul>
                        </div>`,

  "convolutional-neural-networks-cnns-in-a-minute": `<figure class="blog-figure">
                        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*_JTlyhLpXhnP5lKZ.png"
                             alt="CNN pipeline: Input image → Filters → Convolution Layers → Pooling → Feed-forward layer"
                             loading="eager">
                        <figcaption>CNN pipeline: raw pixels → filter convolutions → pooled feature maps → fully connected prediction.</figcaption>
                    </figure>

<h2 id="what-is-a-cnn">What Is a CNN?</h2>
                        <p>
                            CNNs — also called ConvNets — are <strong>a specialized kind of neural network for processing data with grid-like topology</strong>.
                            Time-series data is a 1D grid (samples over time). Images are 2D grids (pixels in rows and columns).
                        </p>
                        <p>
                            Unlike fully connected networks that treat every input feature independently, CNNs exploit spatial structure.
                            Nearby pixels are related — a CNN learns that and encodes it into learned filters.
                        </p>

                        <div class="blog-insight">
                            "CNNs automatically extract hierarchical features: low-level edges → mid-level textures → high-level objects."
                        </div>

                        <!-- ── Core Components ── -->
                        <h2 id="core-components">Core Components</h2>

                        <div class="blog-component">
                            <h3><span class="component-number">1</span> Kernel (Filter)</h3>
                            <p>
                                A kernel is a small weighted matrix — typically 3×3 or 5×5 — that slides across the input.
                                At each position, it performs element-wise multiplication with the covered region, then sums the results to produce one output value.
                                Stacking these output values across all positions produces a <strong>feature map</strong>.
                            </p>
                            <p>
                                Each kernel learns to detect a specific pattern: one might detect vertical edges, another horizontal, another curves.
                                A typical conv layer applies many kernels in parallel — producing many feature maps.
                            </p>
                        </div>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*1UzJ9kvd5IKK5lma7EphIg.png"
                                 alt="Kernel sliding across input image, computing element-wise products to produce a feature map"
                                 loading="lazy">
                            <figcaption>The kernel slides across the input, computing a dot product at each position to build the feature map.</figcaption>
                        </figure>

                        <div class="blog-component">
                            <h3><span class="component-number">2</span> Stride</h3>
                            <p>
                                Stride is the step size of the kernel as it slides across the input — how many pixels it moves at each step.
                                Stride 1: kernel moves one pixel at a time, maximum resolution output.
                                Stride 2: kernel jumps two pixels, halving the spatial dimensions of the output.
                                Larger stride = smaller feature map = less computation, but lower resolution.
                            </p>
                        </div>

                        <div class="blog-component">
                            <h3><span class="component-number">3</span> Padding</h3>
                            <p>Extra pixels added around the input border before convolution:</p>
                            <ul>
                                <li><strong>Valid padding:</strong> No extra pixels. Output is smaller than input. Border information is lost.</li>
                                <li><strong>Same padding:</strong> Zeros added around the border. Output has the same spatial dimensions as input.</li>
                            </ul>
                        </div>

                        <div class="blog-component">
                            <h3><span class="component-number">4</span> Pooling</h3>
                            <p>
                                A downsampling operation that reduces spatial dimensions while retaining important information.
                                Pooling controls overfitting and reduces the number of parameters.
                            </p>
                            <ul>
                                <li><strong>Max Pooling:</strong> Takes the maximum value from each region. Retains the strongest activation — the most prominent feature.</li>
                                <li><strong>Average Pooling:</strong> Takes the mean across each region. Smoother, retains overall activation level.</li>
                            </ul>
                        </div>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*6u3QK9M9ZJws58P4SAr2AQ.png"
                                 alt="Max pooling: 2×2 window selects maximum value from each region, halving spatial dimensions"
                                 loading="lazy">
                            <figcaption>Max pooling: take the largest value from each 2×2 region — half the spatial size, strongest features preserved.</figcaption>
                        </figure>

                        <div class="blog-component">
                            <h3><span class="component-number">5</span> Flattening</h3>
                            <p>
                                After multiple conv+pool layers, the feature maps are 3D tensors (height × width × channels).
                                Flattening converts this into a 1D vector so it can be passed to fully connected (dense) layers for the final classification or regression.
                            </p>
                        </div>

                        <!-- ── Architecture ── -->
                        <h2 id="standard-cnn-architecture">Standard CNN Architecture</h2>
                        <p>A typical CNN processes an image through this sequence:</p>

                        <ol>
                            <li><strong>Input Layer</strong> — raw pixel values (e.g., 224×224×3 for an RGB image)</li>
                            <li><strong>Convolutional Layer</strong> — applies N kernels, produces N feature maps</li>
                            <li><strong>Activation (ReLU)</strong> — applies non-linearity: <code>max(0, x)</code></li>
                            <li><strong>Pooling Layer</strong> — downsample feature maps (typically 2×2 max pool)</li>
                            <li><strong>Repeat Conv+Pool</strong> — stack multiple blocks for deeper feature extraction</li>
                            <li><strong>Flatten</strong> — reshape 3D feature maps into 1D vector</li>
                            <li><strong>Fully Connected Layers</strong> — learn the mapping from features to output classes</li>
                            <li><strong>Output Layer</strong> — softmax for classification, sigmoid for binary</li>
                        </ol>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*0nn8970yydXMiG1o9S1AUA.png"
                                 alt="Full CNN architecture from input image through conv, pool, flatten to fully connected output"
                                 loading="lazy">
                            <figcaption>Full CNN architecture: each conv+pool block extracts increasingly abstract features before the classifier head.</figcaption>
                        </figure>

                        <div class="blog-insight">
                            "Early layers detect edges and textures. Deep layers detect ears, wheels, eyes — concepts composed from those edges."
                        </div>

                        <!-- Key Takeaways -->
                        <h2 id="key-takeaways">Key Takeaways</h2>
                        <ul>
                            <li><strong>CNNs exploit spatial structure</strong> — nearby pixels are related, and kernels learn to encode that.</li>
                            <li><strong>Kernels are learned</strong> — not hand-crafted. The network discovers what patterns to look for.</li>
                            <li><strong>Pooling reduces computation</strong> and adds partial translation invariance.</li>
                            <li><strong>Stack depth = abstraction level</strong> — deeper networks detect higher-level concepts.</li>
                            <li><strong>CNNs are the backbone</strong> of image classification, object detection, segmentation, and video analysis.</li>
                        </ul>

                        <!-- FAQ -->
                        <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>

                        <details class="faq-item">
                            <summary>What is a Convolutional Neural Network?</summary>
                            <p>A CNN is a specialized neural network for grid-like data — primarily images (2D pixel grids) and time series (1D). CNNs automatically learn hierarchical features through convolutional layers, detecting simple edges at low levels and complex objects at higher levels.</p>
                        </details>

                        <details class="faq-item">
                            <summary>What does a kernel (filter) do in a CNN?</summary>
                            <p>A kernel is a small weighted matrix (e.g., 3×3) that slides across the input performing element-wise multiplication and summation at each position. This produces a feature map highlighting specific patterns — edges, textures, shapes — depending on the learned weights.</p>
                        </details>

                        <details class="faq-item">
                            <summary>What is the difference between valid and same padding?</summary>
                            <p>Valid padding adds no extra pixels — output is smaller than input. Same padding adds zeros around the border so output has the same spatial dimensions as the input.</p>
                        </details>

                        <details class="faq-item">
                            <summary>What is max pooling and why is it used?</summary>
                            <p>Max pooling takes the maximum value from each region of the feature map, reducing spatial dimensions while retaining the strongest activations. It reduces computation, controls overfitting, and adds partial translation invariance.</p>
                        </details>

                        <details class="faq-item">
                            <summary>What is the standard CNN architecture?</summary>
                            <p>Input → Conv Layer → ReLU → Pooling → (repeat) → Flatten → Fully Connected → Output. Multiple conv+pool stacks extract progressively abstract features before the fully connected layers make the final prediction.</p>
                        </details>`,

  "cors-in-flask-bridging-frontend-and-backend": `<figure class="blog-figure">
                        <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*KVQJzRxFwfNvcZiGQRRFAA.png"
                             alt="CORS — Cross-Origin Resource Sharing between frontend and Flask backend"
                             loading="eager">
                        <figcaption>CORS bridges the browser's same-origin policy gap between your frontend and Flask API.</figcaption>
                    </figure>

<h2 id="what-is-cors">What Is CORS?</h2>
                        <p>
                            CORS stands for <strong>Cross-Origin Resource Sharing</strong>. It's a browser security mechanism that restricts web pages from making requests to a different <em>origin</em> — where origin means the combination of protocol, domain, and port.
                        </p>
                        <p>
                            When your React frontend at <code>localhost:5173</code> makes a request to your Flask API at <code>localhost:5000</code>, the browser sees two different origins (different ports) and blocks the request by default. This is the same-origin policy in action.
                        </p>
                        <p>
                            The server must explicitly opt in to cross-origin requests by including the correct <code>Access-Control-Allow-Origin</code> header in its responses. Without it, the browser rejects the response before your JavaScript ever sees it.
                        </p>

                        <div class="blog-insight">
                            "CORS is enforced by the browser, not the server. Your Flask API receives the request — but the browser blocks the response if the headers aren't right."
                        </div>

                        <h2 id="the-fix-flask-cors">The Fix: flask-cors</h2>
                        <p>
                            Flask doesn't handle CORS by default. The <code>flask-cors</code> package adds the required headers automatically. Install it:
                        </p>

                        <pre><code>pip install flask-cors</code></pre>

                        <h2 id="basic-usage">Basic Usage</h2>
                        <p>
                            For development or internal tools where any origin should be allowed, wrap your app with <code>CORS()</code>:
                        </p>

                        <pre><code>from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)</code></pre>

                        <p>This adds <code>Access-Control-Allow-Origin: *</code> to all responses — every origin can access your API. Useful during development; avoid in production.</p>

                        <h2 id="advanced-configuration">Advanced Configuration</h2>
                        <p>
                            For production, restrict access to specific origins and configure credential handling:
                        </p>

                        <pre><code>from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={
    r"/*": {
        "origins": "http://localhost:5173",
        "supports_credentials": True,
        "Access-Control-Allow-Credentials": True
    }
})</code></pre>

                        <div class="blog-component">
                            <h3>Configuration Options</h3>
                            <ul>
                                <li><strong><code>origins</code></strong> — allowed origin(s): a string, list, or <code>"*"</code> for all</li>
                                <li><strong><code>supports_credentials</code></strong> — allow cookies and Authorization headers in cross-origin requests</li>
                                <li><strong><code>methods</code></strong> — restrict to specific HTTP methods: <code>["GET", "POST"]</code></li>
                                <li><strong><code>allow_headers</code></strong> — specify which request headers are allowed</li>
                                <li><strong><code>r"/*"</code></strong> — route pattern: applies config to all routes (use <code>r"/api/*"</code> to scope it)</li>
                            </ul>
                        </div>

                        <h2 id="preflight-requests">Preflight Requests</h2>
                        <p>
                            For non-simple requests (custom headers, <code>DELETE</code>, <code>PUT</code>, requests with credentials), the browser sends an <strong>OPTIONS preflight request</strong> first — asking the server: "will you allow this?" The server must respond with the right <code>Access-Control-Allow-*</code> headers before the browser sends the actual request.
                        </p>
                        <p>
                            <code>flask-cors</code> handles preflight responses automatically — no extra code needed.
                        </p>

                        <div class="blog-component">
                            <h3>Common CORS Pitfalls</h3>
                            <ul>
                                <li><strong>Credentials + wildcard origin</strong> — browsers reject <code>Access-Control-Allow-Origin: *</code> when credentials are included. Must specify an explicit origin.</li>
                                <li><strong>Trailing slash mismatch</strong> — <code>http://localhost:5173</code> and <code>http://localhost:5173/</code> are treated as different origins by some browsers.</li>
                                <li><strong>HTTP vs HTTPS</strong> — protocol is part of the origin. A production HTTPS frontend cannot access an HTTP backend without CORS headers configured for the HTTPS origin.</li>
                            </ul>
                        </div>

                        <div class="blog-reference">
                            Reference: <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank" rel="noopener noreferrer">MDN Web Docs — Cross-Origin Resource Sharing (CORS)</a>
                        </div>`,

  "forecasting-in-a-minute": `<figure class="blog-figure">
                        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*DwsxFugEzwMEt0cX.jpg"
                             alt="FORECAST wooden blocks with a person holding a green upward arrow"
                             loading="eager">
                        <figcaption>Forecasting: using what you know to make an educated guess about what comes next.</figcaption>
                    </figure>

<!-- What Is Forecasting -->
                        <h2 id="what-is-forecasting">What Is Forecasting?</h2>
                        <p>
                            <strong>Forecasting is the process of using what you already know to make an educated guess about what will happen next.</strong>
                        </p>
                        <p>
                            Think about how you prepare for an exam. You don't study everything in the textbook from cover to cover.
                            Instead, you make predictions — which chapters did the teacher emphasize?
                            Which questions appeared in last year's paper? What topics were marked "important"?
                            That mental model is forecasting. You're using past signals to prioritize future effort.
                        </p>

                        <!-- Student analogy image -->
                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*kvei-dq4GL21BWDw.jpeg"
                                 alt="Student stressed with books in a library, representing the challenge of predicting what to study"
                                 loading="lazy">
                            <figcaption>Everyone forecasts — even students deciding what's worth studying before an exam.</figcaption>
                        </figure>

                        <!-- Why Does It Matter -->
                        <h2 id="why-does-it-matter">Why Does It Matter?</h2>
                        <p>
                            Without forecasting, every business decision is a coin flip. You're not managing risk — you're ignoring it.
                            Forecasting replaces random guessing with structured thinking. It forces you to make your assumptions visible
                            and traceable, so when reality diverges from the plan, you know exactly which assumption broke down.
                        </p>
                        <p>Key decisions that depend on forecasting:</p>
                        <ul>
                            <li>What interest rate should we charge to maximize profit after defaults?</li>
                            <li>How much capital do we need to invest this quarter?</li>
                            <li>What revenue should we project accounting for customer churn?</li>
                        </ul>

                        <!-- How Is Forecasting Used -->
                        <h2 id="how-is-forecasting-used">How Is Forecasting Used?</h2>
                        <p>Forecasting appears everywhere. The specific metric changes, but the underlying logic is the same — use known data to estimate unknown outcomes.</p>

                        <!-- Industry table image -->
                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*TQhx5U17IcCggvt8-5DpuA.png"
                                 alt="Table showing forecasting use cases across Banking & Lending, Retail, Healthcare, Government, and Startups"
                                 loading="lazy">
                            <figcaption>Forecasting across industries — the metric changes, but the discipline is identical.</figcaption>
                        </figure>

                        <!-- Types of Forecasting -->
                        <h2 id="types-of-forecasting">Types of Forecasting</h2>

                        <div class="blog-component">
                            <h3><span class="component-number">1</span> Time Series Forecasting</h3>
                            <p>Uses historical time-ordered data to predict future values. Assumes patterns (trends, seasonality, cycles) will continue. Examples: ARIMA, Prophet, LSTM.</p>
                        </div>

                        <div class="blog-component">
                            <h3><span class="component-number">2</span> Qualitative Forecasting</h3>
                            <p>Uses expert judgment, surveys, and market research instead of historical data. Best when data is scarce — new product launches, emerging markets.</p>
                        </div>

                        <div class="blog-component">
                            <h3><span class="component-number">3</span> Causal / Regression Forecasting</h3>
                            <p>Models the relationship between an outcome and its drivers. "Sales increase by X for every Y drop in price." Uses regression and statistical models.</p>
                        </div>

                        <div class="blog-component">
                            <h3><span class="component-number">4</span> Scenario Forecasting</h3>
                            <p>Builds multiple futures (optimistic, base, pessimistic) to bound uncertainty. Standard in strategic planning and risk management.</p>
                        </div>

                        <div class="blog-component">
                            <h3><span class="component-number">5</span> Market Sizing / Top-Down Forecasting</h3>
                            <p>Starts from a total addressable market and works down using penetration rate assumptions. Common in startup pitches and new business cases.</p>
                        </div>

                        <div class="blog-component">
                            <h3><span class="component-number">6</span> Inline Forecasting</h3>
                            <p>The forecast is <em>not a separate document</em>. It's woven directly into the decision model itself — future projections live in the same spreadsheet as the baseline, auto-updating when any assumption changes.</p>
                        </div>

                        <!-- Inline Forecasting deep-dive -->
                        <h2 id="inline-forecasting-deep-dive">Inline Forecasting — Deep Dive</h2>
                        <p>
                            Most forecasting approaches produce a separate report that gets attached to a decision. Inline forecasting eliminates that gap.
                            The model structure uses columns for years 2026–2029, with 2026 as the baseline calculation and future years using identical logic with updated growth assumptions.
                            Change one cell — say, the default rate — and every year's profit projection updates automatically.
                        </p>
                        <div class="blog-insight">
                            "The forecast is not a separate document. It's woven directly into the decision model itself."
                        </div>

                        <!-- Sample Problem -->
                        <h2 id="sample-problem-which-interest-rate-should-we-choose">Sample Problem: Which Interest Rate Should We Choose?</h2>
                        <p>
                            A lending company is deciding between <strong>30%</strong> and <strong>35%</strong> annual interest rates on $10,000 loans with 12-month repayment.
                            Higher rates mean more revenue per loan — but also higher default risk.
                            Which generates greater profit after accounting for defaults?
                        </p>
                        <p>
                            The inline model runs both scenarios side by side, projecting customer growth at +5% annually from a 2026 baseline of 375,649 customers.
                        </p>

                        <!-- Inline forecast table image -->
                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*kDwxeGq9ffOWS6Xj8xzwNw.png"
                                 alt="Inline forecast table: Customers Acquired and Profit (35% rate) projected for 2026, 2027, 2028, 2029"
                                 loading="lazy">
                            <figcaption>The inline model: 2026 baseline, +5% growth assumption, profit projected automatically through 2029.</figcaption>
                        </figure>

                        <p>
                            <strong>Result:</strong> The 35% rate generates approximately <strong>$67M more profit</strong> than the 30% rate — making it the financially superior choice at the modeled default rate.
                            The key insight isn't just the answer; it's that the model lets you instantly re-run the comparison if the default rate assumption changes.
                        </p>

                        <a href="https://docs.google.com/spreadsheets/d/1MySpj9e3pidjslyZtCg9BGJ5fko7bRPHEX3Ij1bs_AY/edit?usp=sharing"
                           target="_blank" rel="noopener noreferrer" class="btn"
                           style="display:inline-flex;align-items:center;gap:8px;margin:10px 0 30px;">
                            View the Model (Google Sheets)
                        </a>

                        <!-- Key Takeaways -->
                        <h2 id="key-takeaways">Key Takeaways</h2>
                        <ul>
                            <li><strong>Forecasting reduces uncertainty</strong> by making assumptions explicit and traceable — not by eliminating uncertainty.</li>
                            <li><strong>Inline forecasting</strong> consolidates assumptions, current calculations, and projections in one place, eliminating the static-report problem.</li>
                            <li><strong>Forecast quality = assumption quality.</strong> Garbage in, garbage out — but now you can see exactly where the garbage came from.</li>
                            <li><strong>Forecasting enables comparison.</strong> Without a model, you can't quantify the difference between two options.</li>
                        </ul>

                        <div class="blog-reference">
                            <strong>Disclaimer:</strong> The interest-rate example is simplified for educational purposes and does not constitute financial or investment advice. Real institutional models are significantly more complex.
                        </div>`,

  "http-methods-enhancing-web-communication": `<figure class="blog-figure">
                        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*0atRPBvfNfs3zkvj.png"
                             alt="HTTP methods — GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS diagram"
                             loading="eager">
                        <figcaption>HTTP methods define how clients and servers communicate — each verb signals a specific intended action on a resource.</figcaption>
                    </figure>

<h2 id="the-http-methods">The HTTP Methods</h2>
                        <p>
                            Every HTTP request includes a method (verb) that tells the server what operation the client wants to perform.
                            Choosing the right method makes APIs predictable, cacheable, and RESTful.
                        </p>

                        <div class="blog-component">
                            <h3>GET — Retrieve Data</h3>
                            <p>Fetches a resource from the server. Parameters are appended to the URL. Never use GET for sensitive data — the URL is visible in browser history, server logs, and referrer headers.</p>
                        </div>

                        <div class="blog-component">
                            <h3>POST — Submit Data</h3>
                            <p>Sends data to the server to create a new resource or trigger a state change. Data goes in the request body — not the URL. The right choice for form submissions, file uploads, and anything that changes server state.</p>
                        </div>

                        <div class="blog-component">
                            <h3>PUT — Replace a Resource</h3>
                            <p>Sends a complete replacement for an existing resource. If the resource doesn't exist, PUT creates it. The key distinction from PATCH: you must send the entire representation, not just the changed fields.</p>
                        </div>

                        <div class="blog-component">
                            <h3>DELETE — Remove a Resource</h3>
                            <p>Removes the specified resource from the server. Used to eliminate unnecessary or outdated data. Idempotent — calling DELETE on an already-deleted resource should return the same result.</p>
                        </div>

                        <div class="blog-component">
                            <h3>PATCH — Partial Update</h3>
                            <p>Updates specific fields of a resource without replacing the entire object. Use PATCH when you only want to change one attribute and leave the rest untouched — more efficient than PUT for large resources.</p>
                        </div>

                        <div class="blog-component">
                            <h3>HEAD — Headers Only</h3>
                            <p>Identical to GET but returns only the response headers, no body. Useful for checking if a resource exists, checking its size (Content-Length), or validating cache freshness without downloading the full content.</p>
                        </div>

                        <div class="blog-component">
                            <h3>OPTIONS — Query Capabilities</h3>
                            <p>Asks the server which HTTP methods are supported for a given endpoint. Browsers use OPTIONS automatically for CORS preflight requests — checking if cross-origin requests are allowed before sending the actual request.</p>
                        </div>

                        <div class="blog-insight">
                            "The right HTTP method makes your API self-documenting — anyone reading a request immediately knows the intended action and its safety guarantees."
                        </div>

                        <h2 id="python-examples-with-requests">Python Examples with <code>requests</code></h2>

                        <pre><code>import requests

# GET — retrieve user data
response = requests.get('https://api.example.com/users/123')

# POST — create a new user
data = {'name': 'John Doe', 'email': 'john.doe@example.com'}
response = requests.post('https://api.example.com/users', json=data)

# PUT — replace user record entirely
data = {'name': 'Jane Doe', 'email': 'jane@example.com'}
response = requests.put('https://api.example.com/users/123', json=data)

# PATCH — update just the name
response = requests.patch('https://api.example.com/users/123', json={'name': 'Jane Doe'})

# DELETE — remove the user
response = requests.delete('https://api.example.com/users/123')

# HEAD — check if resource exists without downloading body
response = requests.head('https://api.example.com/users/123')

# OPTIONS — query supported methods
response = requests.options('https://api.example.com/users/123')</code></pre>

                        <h2 id="quick-reference">Quick Reference</h2>
                        <ul>
                            <li><strong>GET:</strong> safe, idempotent — use for all read operations</li>
                            <li><strong>POST:</strong> not safe, not idempotent — creates new resources, triggers actions</li>
                            <li><strong>PUT:</strong> idempotent — full replacement, same result if called multiple times</li>
                            <li><strong>PATCH:</strong> not always idempotent — partial update, only changed fields</li>
                            <li><strong>DELETE:</strong> idempotent — remove resource, repeated calls return same result</li>
                            <li><strong>HEAD:</strong> safe, idempotent — metadata check, no body</li>
                            <li><strong>OPTIONS:</strong> safe — capability discovery, used in CORS preflight</li>
                        </ul>

                        <div class="blog-reference">
                            Reference: <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods" target="_blank" rel="noopener noreferrer">MDN Web Docs — HTTP request methods</a>
                        </div>`,

  "lazy-loading-for-enhanced-user-experience": `<figure class="blog-figure">
                        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*0OyD4-O4hN_QCJUh.jpg"
                             alt="Lazy loading concept — resources deferred until visible in viewport"
                             loading="eager">
                        <figcaption>Lazy loading: only load resources when the user is about to see them.</figcaption>
                    </figure>

<h2 id="the-problem">The Problem</h2>
                        <p>
                            By default, browsers load all images on a page immediately — whether the user will ever scroll to them or not.
                            On a page with 50 images, this means 50 network requests on load, most of them wasted on content below the fold.
                        </p>
                        <p>
                            The result: slower initial load, wasted bandwidth (especially on mobile), and a worse user experience for the content that actually matters — what's visible right now.
                        </p>

                        <h2 id="lazy-loading">Lazy Loading</h2>
                        <p>
                            Lazy loading defers image and media loading until they approach the user's viewport.
                            Resources below the fold are not fetched until the user scrolls near them.
                            One attribute in HTML enables this natively:
                        </p>

                        <pre><code>&lt;img src="image.jpg" loading="lazy" alt="Description"&gt;</code></pre>

                        <p>The browser tracks each image's position relative to the viewport and triggers a fetch only when it's within a certain distance of becoming visible.</p>

                        <div class="blog-component">
                            <h3>Advantages</h3>
                            <ul>
                                <li><strong>Reduces initial page load time</strong> — fewer requests on first paint</li>
                                <li><strong>Conserves bandwidth</strong> — images never seen are never downloaded</li>
                                <li><strong>Improves SEO rankings</strong> — Core Web Vitals (LCP, FID) improve with faster loads</li>
                                <li><strong>Decreases browser workload</strong> — fewer decode/render operations upfront</li>
                                <li><strong>Better performance on low-bandwidth connections</strong> — especially important on mobile</li>
                                <li><strong>Optimizes resource utilization</strong> — server and client both work less on initial load</li>
                            </ul>
                        </div>

                        <div class="blog-component">
                            <h3>Disadvantages</h3>
                            <ul>
                                <li><strong>Inappropriate for small-scale applications</strong> — overhead not worth it with few images</li>
                                <li><strong>Placeholders during rapid scroll</strong> — can cause layout shift or blank areas</li>
                                <li><strong>Additional server round-trips</strong> — resources fetched on demand instead of batch</li>
                            </ul>
                        </div>

                        <h2 id="eager-loading-default-behavior">Eager Loading (Default Behavior)</h2>
                        <p>
                            Eager loading — the browser default — fetches all images immediately on page load, regardless of viewport position.
                            It's the right choice for above-the-fold content: hero images, logos, critical visuals that should be ready instantly.
                        </p>

                        <pre><code>&lt;img src="hero.jpg" loading="eager" alt="Hero image"&gt;</code></pre>

                        <div class="blog-insight">
                            "Use loading='eager' for above-the-fold content. Use loading='lazy' for everything below."
                        </div>

                        <h2 id="when-to-use-which">When to Use Which</h2>
                        <ul>
                            <li><strong><code>loading="eager"</code>:</strong> hero images, logos, above-the-fold critical visuals — load immediately</li>
                            <li><strong><code>loading="lazy"</code>:</strong> everything else — blog post images, gallery thumbnails, footer content</li>
                            <li><strong>Small pages with few images:</strong> skip lazy loading — the overhead adds complexity without meaningful gain</li>
                            <li><strong>Image-heavy pages, long scrolls, mobile-first:</strong> lazy loading delivers the most impact</li>
                        </ul>

                        <div class="blog-reference">
                            Reference: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading" target="_blank" rel="noopener noreferrer">MDN Web Docs — img loading attribute</a>
                        </div>`,

  "linear-regression-in-a-minute": `<figure class="blog-figure">
                        <img src="https://miro.medium.com/v2/resize:fit:494/format:webp/1*Mjnp0tWPfCn8uomvTBnafw.gif"
                             alt="Gradient descent animation: line fitting to data points iteratively"
                             loading="eager">
                        <figcaption>Gradient descent: adjusting the line's slope and intercept step by step until the error is minimized.</figcaption>
                    </figure>

<h2 id="the-foundation-y-mx-b">The Foundation: y = mx + b</h2>
                        <p>
                            Linear regression starts from the same equation you learned in school.
                            Given data points (years, income), the goal is to find the line that best fits them — the one that minimizes prediction error across all points.
                        </p>
                        <div class="blog-formula-box">ŷ = θ₀ + θ₁x &nbsp;&nbsp; (hypothesis function)</div>
                        <p>
                            <strong>θ₀</strong> is the intercept (y-axis offset), <strong>θ₁</strong> is the slope.
                            The model learns these parameters from data.
                        </p>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*xdcpt_uRupa6v19rUg0SPQ.png"
                                 alt="Scatter plot of Canadian per capita income vs years with best-fit regression line"
                                 loading="lazy">
                            <figcaption>Canadian per capita income vs years — the regression line captures the trend through all data points.</figcaption>
                        </figure>

                        <h2 id="the-cost-function">The Cost Function</h2>
                        <p>
                            How do you measure how "wrong" the line is? The cost function quantifies total prediction error across all training examples.
                            Linear regression uses <strong>Mean Squared Error (MSE)</strong> — also called Least Squared Error.
                        </p>
                        <div class="blog-formula-box">J(θ) = (1/2m) Σ (ŷᵢ − yᵢ)²</div>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*3Tt2A04SyZqbrQvnzVEBQg.png"
                                 alt="Cost function J(theta) — mean squared error across all training examples"
                                 loading="lazy">
                            <figcaption>Cost function J(θ): average squared distance between predicted and actual values.</figcaption>
                        </figure>

                        <p>Squaring errors serves two purposes: negative errors don't cancel positive ones, and large errors are penalized more severely than small ones.</p>

                        <h2 id="gradient-descent">Gradient Descent</h2>
                        <p>
                            Gradient descent finds the parameters θ that minimize J(θ).
                            Starting from a random point, it computes the gradient (slope of the cost function surface) and takes a step downhill.
                            Repeat until convergence.
                        </p>
                        <div class="blog-formula-box">θⱼ := θⱼ − α × ∂J(θ)/∂θⱼ</div>
                        <p>
                            <strong>α</strong> is the learning rate — too large and it overshoots, too small and it converges slowly.
                        </p>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*Um_To9ilniK9ckICdOLTjw.png"
                                 alt="Gradient descent on cost function surface — bowl shape with arrow descending to minimum"
                                 loading="lazy">
                            <figcaption>Gradient descent: each step moves toward the minimum of the cost function bowl.</figcaption>
                        </figure>

                        <figure class="blog-figure blog-figure--narrow">
                            <img src="https://miro.medium.com/v2/resize:fit:554/format:webp/1*ojpugj3lrrztetEV_wjR0Q.gif"
                                 alt="Gradient descent animation on 2D cost surface converging to global minimum"
                                 loading="lazy">
                            <figcaption>Gradient descent converging on the 2D cost surface — each iteration reduces the error.</figcaption>
                        </figure>

                        <h2 id="evaluation-metrics">Evaluation Metrics</h2>

                        <div class="blog-component">
                            <h3>Mean Absolute Error (MAE)</h3>
                            <div class="blog-formula-box">MAE = (1/m) Σ |ŷᵢ − yᵢ|</div>
                            <p>Average absolute difference. Interpretable in original units. Less sensitive to outliers than MSE.</p>
                        </div>

                        <figure class="blog-figure blog-figure--narrow">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*S98h3h8LaUN2F6OH5SEpfA.png"
                                 alt="MAE formula — mean absolute error for regression evaluation"
                                 loading="lazy">
                            <figcaption>MAE: average of absolute prediction errors — interpretable in original data units.</figcaption>
                        </figure>

                        <div class="blog-component">
                            <h3>R² Score (Coefficient of Determination)</h3>
                            <div class="blog-formula-box">R² = 1 − SS_res / SS_tot</div>
                            <p>
                                Explains the proportion of variance in the target explained by the model.
                                R² = 1 means perfect fit; R² = 0 means the model does no better than predicting the mean.
                            </p>
                        </div>

                        <figure class="blog-figure blog-figure--narrow">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*3bTiUUu3lCQPN5CDWA4xrQ.png"
                                 alt="R² score visualization showing explained vs unexplained variance"
                                 loading="lazy">
                            <figcaption>R² score: what fraction of target variance does the model explain?</figcaption>
                        </figure>

                        <h2 id="multivariable-linear-regression">Multivariable Linear Regression</h2>
                        <p>
                            Real datasets have multiple features. Multivariable linear regression extends the hypothesis to many input dimensions:
                        </p>
                        <div class="blog-formula-box">ŷ = θ₀ + θ₁x₁ + θ₂x₂ + … + θₙxₙ</div>
                        <p>
                            With 2 features, the model fits a plane instead of a line.
                            With 3+ features, it fits a hyperplane — no longer visualizable, but the math is identical.
                        </p>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*Z4P72yHN_EKFkIaVuZUpeg.png"
                                 alt="Multivariable linear regression: best-fit plane through 3D data points"
                                 loading="lazy">
                            <figcaption>Multivariable regression with 2 features: the model fits a plane rather than a line.</figcaption>
                        </figure>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*3UU4_6Qz7nu6vJ0yblb6dg.png"
                                 alt="Multivariable linear regression Python code with sklearn"
                                 loading="lazy">
                            <figcaption>Multivariable linear regression implementation with sklearn.</figcaption>
                        </figure>

                        <figure class="blog-figure blog-figure--narrow">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*nDXRb6UsCCeyT0LXpgQ0sQ.png"
                                 alt="Linear regression prediction output and R² score result"
                                 loading="lazy">
                            <figcaption>Model output: predictions and R² score on test data.</figcaption>
                        </figure>

                        <div class="blog-insight">
                            "The goal is always the same: find the parameters that minimize the cost function. The dimension just changes."
                        </div>

                        <h2 id="implementation-notebooks">Implementation Notebooks</h2>
                        <p>Full implementations available on GitHub Gist:</p>
                        <div style="display:flex;gap:12px;flex-wrap:wrap;margin:12px 0 30px;">
                            <a href="https://gist.github.com/rishabh11336/6593b1430a11e615b8dbf3eb255412b4#file-machine_learning_with_python_linear_regression_with_one_variable-ipynb"
                               target="_blank" rel="noopener noreferrer" class="btn"
                               style="display:inline-flex;align-items:center;gap:8px;">
                                Single Variable (Gist)
                            </a>
                            <a href="https://gist.github.com/rishabh11336/483b762dbbab10c149c74b240f8c1015#file-linear_regression_multiple_variables-ipynb"
                               target="_blank" rel="noopener noreferrer" class="btn"
                               style="display:inline-flex;align-items:center;gap:8px;">
                                Multiple Variables (Gist)
                            </a>
                        </div>

                        <h2 id="key-takeaways">Key Takeaways</h2>
                        <ul>
                            <li><strong>Hypothesis:</strong> ŷ = θ₀ + θ₁x — a line (or hyperplane) parameterized by θ.</li>
                            <li><strong>Cost function (MSE):</strong> measures total squared error — what gradient descent minimizes.</li>
                            <li><strong>Gradient descent:</strong> iteratively adjusts θ downhill on the cost surface.</li>
                            <li><strong>R² score:</strong> how much variance the model explains — closer to 1 is better.</li>
                            <li><strong>Multivariable:</strong> same algorithm, extra θs — fits a plane or hyperplane instead of a line.</li>
                        </ul>`,

  "list-vs-set-in-a-minute": `<figure class="blog-figure">
                        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*VNv0DCA6RjMlSuc2EXQWFA.png"
                             alt="Python List vs Set performance comparison overview"
                             loading="eager">
                        <figcaption>List vs Set — same surface, completely different engines underneath.</figcaption>
                    </figure>

<h2 id="the-setup">The Setup</h2>
                        <p>
                            When building Python applications, selecting the right data structure affects both code readability and performance.
                            Lists and sets are two of the most frequently used containers — but they have dramatically different implementations under the hood.
                        </p>
                        <p>
                            A <strong>list</strong> stores elements in contiguous memory in insertion order. A <strong>set</strong> stores elements in a hash table — no guaranteed order, no duplicates, O(1) lookup.
                            Same Python syntax, completely different trade-offs.
                        </p>

                        <!-- ── Iteration Performance ── -->
                        <h2 id="iteration-lists-win">Iteration: Lists Win</h2>

                        <div class="blog-component">
                            <h3><span class="component-number">1</span> How Lists Iterate</h3>
                            <p>
                                Lists maintain elements in contiguous memory. When you loop over a list, Python steps through a flat block of memory — no jumping, no hashing, no indirection.
                                Cache-friendly sequential access makes this fast.
                            </p>
                        </div>

                        <div class="blog-component">
                            <h3><span class="component-number">2</span> How Sets Iterate</h3>
                            <p>
                                Sets use hash tables. Memory is sparse and scattered — Python must walk the internal hash array, skip empty buckets, and compute hashes as it goes.
                                More work per element, more cache misses.
                            </p>
                        </div>

                        <div class="blog-insight">
                            "Lists are faster than sets when it comes to iterating over elements."
                        </div>

                        <!-- Iteration benchmark image -->
                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*1Nw0V--ctqXU2T7z6dCNXg.png"
                                 alt="Benchmark showing list iteration speed vs set iteration speed in Python"
                                 loading="lazy">
                            <figcaption>Iteration benchmark: list's contiguous memory gives a consistent speed advantage over set's hash-table traversal.</figcaption>
                        </figure>

                        <!-- ── Membership Testing ── -->
                        <h2 id="membership-testing-sets-win-by-orders-of-magnitude">Membership Testing: Sets Win — By Orders of Magnitude</h2>

                        <div class="blog-component">
                            <h3><span class="component-number">1</span> List Membership — O(n)</h3>
                            <p>
                                <code>x in my_list</code> performs a linear scan — Python checks every element from index 0 until it finds a match or exhausts the list.
                                For a list of 1,000,000 elements, worst case means 1,000,000 comparisons.
                            </p>
                        </div>

                        <div class="blog-component">
                            <h3><span class="component-number">2</span> Set Membership — O(1)</h3>
                            <p>
                                <code>x in my_set</code> computes <code>hash(x)</code>, jumps directly to the corresponding bucket, and checks one (or a handful of) elements.
                                For a set of 1,000,000 elements, that's still one hash computation — regardless of size.
                            </p>
                        </div>

                        <div class="blog-insight">
                            "Sets are significantly faster than lists for membership operations."
                        </div>

                        <!-- Membership benchmark image -->
                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*1ANXbKi_PvS19K3xzPx9eg.png"
                                 alt="Benchmark showing set membership testing is dramatically faster than list membership at scale"
                                 loading="lazy">
                            <figcaption>Membership testing: set's O(1) hash lookup vs list's O(n) linear scan — the gap widens with collection size.</figcaption>
                        </figure>

                        <!-- ── Best Practices ── -->
                        <h2 id="best-practices">Best Practices</h2>

                        <div class="blog-component">
                            <h3>Use a List When:</h3>
                            <ul>
                                <li>Order matters — you need elements in insertion sequence</li>
                                <li>Index-based access is needed — <code>my_list[i]</code></li>
                                <li>Iteration and looping are the primary operations</li>
                                <li>Duplicates are allowed or required</li>
                            </ul>
                        </div>

                        <div class="blog-component">
                            <h3>Use a Set When:</h3>
                            <ul>
                                <li>Checking presence with the <code>in</code> operator</li>
                                <li>Ensuring uniqueness — sets automatically deduplicate</li>
                                <li>Rapid membership testing at any scale</li>
                                <li>Set operations: union (<code>|</code>), intersection (<code>&</code>), difference (<code>-</code>)</li>
                            </ul>
                        </div>

                        <!-- Full-width benchmark chart -->
                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:2000/format:webp/1*3QMiiabMz6gf3rHbqogxfQ.png"
                                 alt="Full comparison chart: list vs set across iteration and membership testing benchmarks"
                                 loading="lazy">
                            <figcaption>Complete benchmark: list dominates iteration, set dominates membership. The right choice depends entirely on your access pattern.</figcaption>
                        </figure>

                        <!-- Key Takeaways -->
                        <h2 id="key-takeaways">Key Takeaways</h2>
                        <ul>
                            <li><strong>Iteration →</strong> use a list. Contiguous memory = fast loops.</li>
                            <li><strong>Membership testing →</strong> use a set. Hash table = O(1) lookup, always.</li>
                            <li><strong>Need both?</strong> Keep a list for order/iteration, maintain a parallel set for fast lookups.</li>
                            <li><strong>These small decisions matter</strong> in performance-sensitive applications — switching list to set for <code>in</code> checks can reduce a tight loop from O(n²) to O(n).</li>
                        </ul>

                        <!-- FAQ Section -->
                        <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>

                        <details class="faq-item">
                            <summary>Is list or set faster for iteration in Python?</summary>
                            <p>Lists are faster for iteration. They store elements in contiguous memory, enabling cache-friendly sequential access. Sets use hash tables with scattered memory and hashing overhead, making iteration slower.</p>
                        </details>

                        <details class="faq-item">
                            <summary>Is list or set faster for membership testing (<code>in</code> operator)?</summary>
                            <p>Sets are dramatically faster. Sets use hash tables for O(1) average-case lookup. Lists perform a linear O(n) scan — checking every element until a match is found or the list is exhausted.</p>
                        </details>

                        <details class="faq-item">
                            <summary>When should you use a Python set instead of a list?</summary>
                            <p>Use a set when you need to check membership with <code>in</code>, ensure uniqueness, or perform rapid lookup at scale. Sets eliminate duplicates automatically and provide O(1) average-case membership testing.</p>
                        </details>

                        <details class="faq-item">
                            <summary>What is the time complexity of <code>in</code> for list vs set?</summary>
                            <p>For a list, <code>x in my_list</code> is O(n) — it scans every element. For a set, <code>x in my_set</code> is O(1) average case — it computes the hash and jumps directly to the bucket.</p>
                        </details>

                        <details class="faq-item">
                            <summary>Can a Python set contain duplicates?</summary>
                            <p>No. Sets automatically deduplicate — adding the same element twice has no effect. If you need to store duplicates, use a list or multiset (via <code>collections.Counter</code>).</p>
                        </details>`,

  "multiclass-vs-multilabel-classification-in-a-minute": `<figure class="blog-figure">
                        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*jSK1KjJylv5JER8pr0Qcog.png"
                             alt="Comparison diagram: multiclass classification (one label) vs multilabel classification (multiple labels)"
                             loading="eager">
                        <figcaption>Multiclass: pick one. Multilabel: pick any number. Same input — fundamentally different problem.</figcaption>
                    </figure>

<h2 id="the-core-distinction">The Core Distinction</h2>
                        <p>
                            Both approaches classify inputs into predefined categories. The difference is how many labels are allowed per prediction:
                        </p>
                        <ul>
                            <li><strong>Multiclass:</strong> each input gets exactly one label from N options</li>
                            <li><strong>Multilabel:</strong> each input can get any number of labels from N options simultaneously</li>
                        </ul>
                        <p>This distinction affects your output layer (softmax vs sigmoid), loss function (cross-entropy vs binary cross-entropy per label), and evaluation metrics.</p>

                        <!-- ── Multiclass ── -->
                        <h2 id="multiclass-classification">Multiclass Classification</h2>

                        <div class="blog-component">
                            <h3><span class="component-number">1</span> Binary Classification</h3>
                            <p>
                                A special case of multiclass with exactly two classes. After classification, the result can only be one of two options.
                                The model outputs a single probability — above 0.5 is class A, below is class B.
                            </p>
                            <p><strong>Examples:</strong></p>
                            <ul>
                                <li>Spam detection — spam or not spam</li>
                                <li>Sentiment analysis — positive or negative</li>
                                <li>Disease detection — disease present or absent</li>
                                <li>Gender classification — from a fixed set of two</li>
                            </ul>
                        </div>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*pUCExVD0UsSoo6cr.png"
                                 alt="Binary classification: input classified into one of exactly two classes"
                                 loading="lazy">
                            <figcaption>Binary classification: every input lands in one of exactly two buckets.</figcaption>
                        </figure>

                        <div class="blog-component">
                            <h3><span class="component-number">2</span> Multiclass Classification</h3>
                            <p>
                                More than two classes, but still exactly one label per prediction.
                                The model outputs a probability distribution across all classes (via softmax) and selects the highest.
                            </p>
                            <p><strong>Examples:</strong></p>
                            <ul>
                                <li>Digit recognition (MNIST) — classify as 0, 1, 2, … 9</li>
                                <li>Multi-sentiment analysis — very negative, negative, neutral, positive, very positive</li>
                                <li>Animal classification — cat, dog, bird, fish, …</li>
                                <li>Land-use detection — urban, forest, water, agricultural</li>
                                <li>Traffic sign classification — 30km/h, stop, yield, …</li>
                            </ul>
                        </div>

                        <figure class="blog-figure blog-figure--narrow">
                            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*iTA1nD_wq_f-w7z6"
                                 alt="Multiclass classification: input classified into one of many classes via softmax"
                                 loading="lazy">
                            <figcaption>Multiclass: softmax assigns probabilities across all classes — the winner takes all.</figcaption>
                        </figure>

                        <!-- ── Multilabel ── -->
                        <h2 id="multilabel-classification">Multilabel Classification</h2>
                        <p>
                            Multilabel allows instances to <strong>carry multiple labels simultaneously</strong>.
                            The model outputs an independent sigmoid probability per class — each class is a separate binary decision.
                            Zero, one, or many labels can be active at once.
                        </p>

                        <div class="blog-component">
                            <h3>Multilabel Examples</h3>
                            <ul>
                                <li><strong>Dog classification:</strong> breed (Labrador) + country of origin (UK) + gender (male) — three independent labels from three attribute sets</li>
                                <li><strong>Music genre tagging:</strong> a track can be classical-rock, indie-devotional, or jazz-pop — multiple genres simultaneously</li>
                                <li><strong>Object detection:</strong> an image contains dogs + humans + water + boats — all labels are correct, none excludes the others</li>
                                <li><strong>Document tagging:</strong> an article about climate policy is tagged with 'climate', 'policy', 'government', 'science' all at once</li>
                            </ul>
                        </div>

                        <div class="blog-insight">
                            "Multiclass: predict the one right answer. Multilabel: predict all correct answers."
                        </div>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*NBkaNm5QJJziNqRk"
                                 alt="Multilabel classification: image with multiple simultaneous labels — dogs, humans, water, boats"
                                 loading="lazy">
                            <figcaption>Multilabel: one image, many simultaneous correct labels — each is an independent binary prediction.</figcaption>
                        </figure>

                        <!-- Key Takeaways -->
                        <h2 id="key-takeaways">Key Takeaways</h2>
                        <ul>
                            <li><strong>Multiclass = one label per instance.</strong> Use softmax output + categorical cross-entropy loss.</li>
                            <li><strong>Multilabel = any number of labels per instance.</strong> Use sigmoid output per class + binary cross-entropy per label.</li>
                            <li><strong>Binary classification</strong> is a special case of multiclass with N=2.</li>
                            <li><strong>Evaluation differs:</strong> multiclass uses accuracy, top-k accuracy; multilabel uses Hamming loss, F1 per label, subset accuracy.</li>
                            <li><strong>Real-world signals are often multilabel</strong> — images, documents, audio naturally contain multiple independent attributes.</li>
                        </ul>

                        <!-- FAQ -->
                        <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>

                        <details class="faq-item">
                            <summary>What is the difference between multiclass and multilabel classification?</summary>
                            <p>Multiclass: each instance gets exactly one label from N options (e.g., digit recognition: 0–9). Multilabel: each instance can have any number of labels simultaneously (e.g., a photo tagged 'dog', 'outdoor', 'grass' all at once).</p>
                        </details>

                        <details class="faq-item">
                            <summary>What is binary classification?</summary>
                            <p>Binary classification is a special case of multiclass with exactly two classes. Each instance is classified as one of two outcomes — spam or not spam, positive or negative, disease or no disease.</p>
                        </details>

                        <details class="faq-item">
                            <summary>What are examples of multilabel classification?</summary>
                            <p>Dog breed + country of origin + gender simultaneously; music genre tagging (classical-rock, indie-devotional); image object detection identifying multiple objects; document tagging with multiple topics. Any task where an instance naturally belongs to multiple categories at once.</p>
                        </details>

                        <details class="faq-item">
                            <summary>When should you use multilabel instead of multiclass?</summary>
                            <p>Use multilabel when your data can have multiple correct labels simultaneously. If a song belongs to exactly one genre, that's multiclass. If it can blend multiple genres, that's multilabel. The key question: can one input legitimately have two or more correct labels?</p>
                        </details>`,

  "python-program-for-matrix-multiplication": `<figure class="blog-figure">
                        <img src="https://miro.medium.com/v2/resize:fit:598/format:webp/1*FWyBs9l0Zl9mTn-30Abhmw.png"
                             alt="Matrix multiplication — dot product of two matrices"
                             loading="eager">
                        <figcaption>Matrix multiplication: the dot product sums element-wise products across rows and columns.</figcaption>
                    </figure>

<h2 id="what-is-matrix-multiplication">What Is Matrix Multiplication?</h2>
                        <p>
                            A matrix is a 2D data structure where numbers are arranged into rows and columns.
                            Python has no built-in matrix type — nested lists represent matrices.
                        </p>
                        <p>
                            The <strong>matrix product</strong> (dot product) of matrices A and B computes:
                            <code>result[i][j] = sum(A[i][k] * B[k][j] for all k)</code>
                        </p>
                        <p>
                            Example: A = <code>[[1,2],[3,4]]</code>, B = <code>[[1,3],[2,5]]</code><br>
                            Result = <code>[[5,13],[11,29]]</code>
                        </p>
                        <p>Requirement: <strong>columns of A must equal rows of B</strong>. An (m×n) matrix times an (n×p) matrix gives an (m×p) result.</p>

                        <h2 id="approach-1-nested-loops">Approach 1: Nested Loops</h2>
                        <p>The most explicit approach — three nested loops iterate over every element combination:</p>

                        <pre><code>def Multiply(A, B):
    result = [[0,0,0], [0,0,0], [0,0,0]]
    for i in range(len(A)):
        for j in range(len(B[0])):
            for k in range(len(B)):
                result[i][j] += A[i][k] * B[k][j]

    for p in result:
        print(p)
    return 0

A = [[1, 2, 3], [6, 7, 4], [8, 10, 11]]
B = [[1, 5, 3], [2, 6, 5], [7, 4, 9]]

print("Result:")
Multiply(A, B)</code></pre>

                        <pre><code># Output:
# Result:
# [26, 29, 40]
# [48, 88, 89]
# [105, 144, 173]</code></pre>

                        <div class="blog-insight">
                            "The outer two loops select the output cell (i, j). The inner loop computes the dot product for that cell — summing A's row i against B's column j."
                        </div>

                        <h2 id="approach-2-list-comprehension">Approach 2: List Comprehension</h2>
                        <p>More concise — compresses the three loops into a single expression using <code>zip</code> and <code>sum</code>:</p>

                        <pre><code>def Multiply(X, Y):
    result = [[sum(a*b for a,b in zip(X_row, Y_col))
               for Y_col in zip(*Y)]
              for X_row in X]
    for k in result:
        print(k)
    return 0

A = [[6, 7, 2], [3, 5, 4], [1, 2, 3]]
B = [[1, 5], [2, 5], [6, 3]]

print("Result:")
Multiply(A, B)</code></pre>

                        <pre><code># Output:
# Result:
# [32, 71]
# [37, 52]
# [23, 24]</code></pre>

                        <p>
                            <code>zip(*Y)</code> transposes B — turning columns into rows so <code>zip(X_row, Y_col)</code> pairs matching elements.
                            <code>sum(a*b ...)</code> computes the dot product for each output cell.
                        </p>

                        <h2 id="approach-3-numpy">Approach 3: NumPy</h2>
                        <p>For any production or numerical computing use, NumPy's <code>dot()</code> is the right tool — implemented in optimized C/Fortran (BLAS), orders of magnitude faster than pure Python loops:</p>

                        <pre><code>import numpy as np

A = [[12, 7, 3], [4, 5, 6], [7, 8, 9]]
B = [[5, 8, 1, 2], [6, 7, 3, 0], [4, 5, 9, 1]]

result = np.dot(A, B)   # or: A @ B (Python 3.5+)

for p in result:
    print(p)</code></pre>

                        <pre><code># Output:
# [114 160  60  27]
# [ 74  97  73  14]
# [119 157 112  23]</code></pre>

                        <div class="blog-component">
                            <h3>Comparison</h3>
                            <ul>
                                <li><strong>Nested loops:</strong> most explicit, easiest to understand, slowest (pure Python overhead)</li>
                                <li><strong>List comprehension:</strong> concise, Pythonic, still pure Python — not suitable for large matrices</li>
                                <li><strong>NumPy dot():</strong> fastest by orders of magnitude, handles any shape, industry standard — use for anything beyond learning exercises</li>
                            </ul>
                        </div>

                        <div class="blog-reference">
                            Reference: <a href="https://numpy.org/doc/stable/reference/generated/numpy.dot.html" target="_blank" rel="noopener noreferrer">NumPy Docs — numpy.dot</a>
                        </div>`,

  "python-virtual-environment-introduction": `<figure class="blog-figure">
                        <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*DN1B1j4dSY33nSYEwHw13w.png"
                             alt="Python virtual environment — isolated package directories per project"
                             loading="eager">
                        <figcaption>Virtual environments create isolated package directories — each project gets its own Python and its own dependencies.</figcaption>
                    </figure>

<h2 id="why-do-we-need-virtual-environments">Why Do We Need Virtual Environments?</h2>
                        <p>
                            Python installs packages into a single global <code>site-packages</code> directory.
                            When you're working on two Django projects — one using Django 2.6, another needing Django 3.2 — they fight over the same installation slot.
                            Python can't have two versions of Django installed globally at once.
                        </p>
                        <p>
                            Virtual environments solve this by creating <strong>self-contained folders</strong>, each with their own Python interpreter and packages.
                            Project A sees Django 2.6. Project B sees Django 3.2. Neither knows the other exists.
                        </p>

                        <div class="blog-insight">
                            "Use a virtual environment whenever you work on any Python-based project — every project, no exceptions."
                        </div>

                        <h2 id="when-and-where-to-use-virtual-environments">When and Where to Use Virtual Environments</h2>
                        <p>
                            Always. Every Python project should have its own virtual environment.
                            Create it inside or alongside the project directory and activate it before installing any packages.
                            Never install project dependencies into the global Python installation.
                        </p>

                        <h2 id="how-does-a-virtual-environment-work">How Does a Virtual Environment Work?</h2>
                        <p>
                            <code>virtualenv</code> builds a folder containing a copy of the Python interpreter, pip, and an isolated <code>site-packages</code> directory.
                            When activated, your shell's <code>PATH</code> is prepended with the virtual environment's <code>bin/</code> directory — so <code>python</code> and <code>pip</code> point to the environment's copies, not the system's.
                        </p>

                        <h2 id="installing-virtualenv">Installing virtualenv</h2>
                        <pre><code>pip install virtualenv</code></pre>

                        <pre><code>virtualenv --version</code></pre>

                        <h2 id="creating-a-virtual-environment">Creating a Virtual Environment</h2>
                        <pre><code>virtualenv my_name</code></pre>

                        <p>To specify a Python version explicitly:</p>
                        <pre><code># Python 3
virtualenv -p /usr/bin/python3 virtualenv_name

# Python 2.7
virtualenv -p /usr/bin/python2.7 virtualenv_name</code></pre>

                        <h2 id="activating-the-environment">Activating the Environment</h2>

                        <p><strong>Linux / macOS:</strong></p>
                        <pre><code>source virtualenv_name/bin/activate</code></pre>

                        <p><strong>Windows:</strong></p>
                        <pre><code>virtualenv_name\\Scripts\\activate</code></pre>

                        <p>Once activated, the prompt changes to show the environment name:</p>
                        <pre><code>(virtualenv_name)$</code></pre>

                        <h2 id="installing-packages-inside-the-environment">Installing Packages Inside the Environment</h2>
                        <pre><code>(virtualenv_name)$ pip install Django==2.9</code></pre>
                        <p>This installs into the virtual environment only — not the system Python.</p>

                        <h2 id="deactivating">Deactivating</h2>
                        <pre><code>(virtualenv_name)$ deactivate</code></pre>
                        <p>Returns your shell to the system Python. The virtual environment persists on disk — just run <code>activate</code> again to re-enter it.</p>

                        <h2 id="video-tutorial">Video Tutorial</h2>
                        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:8px;margin:1.5rem 0;">
                            <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;"
                                    src="https://www.youtube.com/embed/5B_XTXXuvP8"
                                    title="Python Virtual Environment Tutorial"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    loading="lazy"></iframe>
                        </div>

                        <div class="blog-component">
                            <h3>Commands Summary</h3>
                            <ul>
                                <li><code>pip install virtualenv</code> — install virtualenv</li>
                                <li><code>virtualenv myenv</code> — create environment</li>
                                <li><code>virtualenv -p /usr/bin/python3 myenv</code> — create with specific Python</li>
                                <li><code>source myenv/bin/activate</code> — activate (Linux/Mac)</li>
                                <li><code>myenv\\Scripts\\activate</code> — activate (Windows)</li>
                                <li><code>pip install package==version</code> — install into environment</li>
                                <li><code>deactivate</code> — deactivate environment</li>
                            </ul>
                        </div>

                        <p>See also: <a href="requirements-txt-in-python.html">requirements.txt in Python</a> — how to capture and share your environment's exact dependencies.</p>`,

  "requirements-txt-in-python": `<figure class="blog-figure">
                        <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*mHsYmducGWeow9i5BvYK9w.png"
                             alt="requirements.txt file showing Python package versions"
                             loading="eager">
                        <figcaption>A requirements.txt file pins every dependency to an exact version — making environments reproducible.</figcaption>
                    </figure>

<h2 id="the-problem">The Problem</h2>
                        <p>
                            Three situations where version mismatches kill projects:
                        </p>
                        <ul>
                            <li><strong>Legacy projects:</strong> code written with an older scikit-learn uses an API that was renamed or removed in the version you have installed</li>
                            <li><strong>Collaboration:</strong> your colleague's environment has TensorFlow 2.12 while yours has 2.15 — different behavior, different errors</li>
                            <li><strong>Cloud deployment:</strong> your app works locally but breaks on AWS, Azure, or GCP because the platform installs the latest version, not the one you developed with</li>
                        </ul>

                        <div class="blog-insight">
                            "Good developers take time to maintain good projects — and that means pinning dependencies so the project works the same everywhere."
                        </div>

                        <h2 id="the-solution-requirements-txt">The Solution: requirements.txt</h2>
                        <p>
                            <code>requirements.txt</code> is a plain text file that lists every package name and its exact version number.
                            Anyone can recreate your exact environment from this one file.
                        </p>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*4XI2C-_4tPvrKDApbY4BwA.png"
                                 alt="pip freeze command output showing package versions"
                                 loading="lazy">
                            <figcaption><code>pip freeze</code> outputs every installed package and its version — redirect it to a file to capture your environment.</figcaption>
                        </figure>

                        <h2 id="command-1-create-requirements-txt">Command 1: Create requirements.txt</h2>
                        <p>Activate your virtual environment first, then run:</p>
                        <pre><code>pip freeze > requirements.txt</code></pre>
                        <p>
                            This captures every installed package and its exact version into the file.
                            Always run inside an activated virtual environment — otherwise you'll capture system-level packages too.
                        </p>

                        <h2 id="command-2-install-from-requirements-txt">Command 2: Install from requirements.txt</h2>
                        <pre><code>pip install -r requirements.txt</code></pre>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*ofS68eg78Yoch4UmoJ0CkA.png"
                                 alt="pip install -r requirements.txt installing packages"
                                 loading="lazy">
                            <figcaption><code>pip install -r requirements.txt</code> recreates the exact environment on any machine.</figcaption>
                        </figure>

                        <p>
                            The <code>-r</code> flag tells pip to read requirements from a file.
                            Every package is installed at the exact pinned version — same result on any machine, any cloud platform.
                        </p>

                        <h2 id="video-tutorial">Video Tutorial</h2>
                        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:8px;margin:1.5rem 0;">
                            <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;"
                                    src="https://www.youtube.com/embed/Rhhh10YhBTo"
                                    title="requirements.txt in Python Tutorial"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    loading="lazy"></iframe>
                        </div>

                        <div class="blog-component">
                            <h3>Best Practices</h3>
                            <ul>
                                <li><strong>Always work in a virtual environment</strong> — <code>pip freeze</code> from a global environment captures hundreds of unrelated packages</li>
                                <li><strong>Commit requirements.txt to version control</strong> — it belongs in your repo alongside your code</li>
                                <li><strong>Regenerate after adding packages</strong> — run <code>pip freeze > requirements.txt</code> every time you install a new dependency</li>
                                <li><strong>For production:</strong> consider pinning transitive dependencies with <code>pip-compile</code> from pip-tools for fully reproducible builds</li>
                            </ul>
                        </div>`,

  "scalars-vectors-matrices-tensor-in-a-minute": `<figure class="blog-figure">
                        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*DObOx-mf9qBNVn278L8B-g.png"
                             alt="Hierarchy diagram: scalar → vector → matrix → tensor"
                             loading="eager">
                        <figcaption>Scalar → Vector → Matrix → Tensor: each level adds a dimension.</figcaption>
                    </figure>

<h2 id="the-building-blocks-of-ml-math">The Building Blocks of ML Math</h2>
                        <p>
                            Every number that flows through a neural network — inputs, weights, activations, gradients — lives in one of four structures.
                            Understanding the difference between them is the prerequisite to reading any ML paper or debugging any PyTorch shape error.
                        </p>

                        <!-- ── Scalars ── -->
                        <div class="blog-component">
                            <h3><span class="component-number">0D</span> Scalar</h3>
                            <p>
                                A scalar is <strong>just a single number</strong>. It has magnitude only — no direction, no index.
                                Temperature, mass, learning rate, loss value — all scalars.
                            </p>
                            <div class="blog-formula-box">s ∈ ℝ &nbsp;&nbsp;→&nbsp;&nbsp; e.g. s = 3.14</div>
                            <p><strong>Properties:</strong> magnitude, arithmetic operations (+, −, ×, ÷).</p>
                        </div>

                        <!-- ── Vectors ── -->
                        <div class="blog-component">
                            <h3><span class="component-number">1D</span> Vector</h3>
                            <p>
                                A vector is an <strong>ordered array of numbers</strong> with both magnitude and direction.
                                Where a scalar answers "how much?", a vector answers "how much, in which direction?".
                                Word embeddings, feature rows, pixel intensities across a row — all vectors.
                            </p>
                            <div class="blog-formula-box">v ∈ ℝⁿ &nbsp;&nbsp;→&nbsp;&nbsp; v = [v₁, v₂, …, vₙ]</div>
                            <p><strong>Operations:</strong> addition, subtraction, scaling, dot product (→ scalar), cross product (→ vector).</p>
                        </div>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*m3s9Zs0HGKhEmTri.png"
                                 alt="Scalar as a point and vector as an arrow with direction in 2D space"
                                 loading="lazy">
                            <figcaption>Scalar: a point on the number line. Vector: an arrow in n-dimensional space with magnitude and direction.</figcaption>
                        </figure>

                        <!-- ── Matrices ── -->
                        <div class="blog-component">
                            <h3><span class="component-number">2D</span> Matrix</h3>
                            <p>
                                A matrix is a <strong>2D array</strong> identified by two indices: row <em>i</em> and column <em>j</em>.
                                Written in uppercase bold (<strong>A</strong>), with element A<sub>ij</sub> at row <em>i</em>, column <em>j</em>.
                                Weight matrices in fully connected layers, transformation matrices in graphics, covariance matrices in statistics — all 2D.
                            </p>
                            <div class="blog-formula-box">A ∈ ℝ^(m×n) &nbsp;&nbsp;→&nbsp;&nbsp; m rows, n columns</div>
                            <p><strong>Key properties:</strong></p>
                            <ul>
                                <li>Multiplication is <strong>non-commutative</strong> — AB ≠ BA in general</li>
                                <li>Determinant and inverse defined for square matrices</li>
                                <li>Transpose: swap rows and columns → Aᵀ</li>
                            </ul>
                            <p><strong>Applications:</strong> computer graphics transformations, solving linear systems (Ax = b), weight matrices in neural networks.</p>
                        </div>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*Jfkk3F3oopfnZf6AUZbfaw.png"
                                 alt="Matrix diagram showing rows and columns with element notation A_ij"
                                 loading="lazy">
                            <figcaption>Matrix: 2D grid of numbers indexed by row i and column j.</figcaption>
                        </figure>

                        <!-- ── Tensors ── -->
                        <div class="blog-component">
                            <h3><span class="component-number">nD</span> Tensor</h3>
                            <p>
                                A tensor <strong>generalizes scalars, vectors, and matrices to any number of dimensions</strong>.
                                A scalar is a 0D tensor. A vector is a 1D tensor. A matrix is a 2D tensor.
                                Beyond 2D, tensors are the natural language of deep learning.
                            </p>
                            <ul>
                                <li><strong>3D tensor:</strong> a single color image — (height, width, channels)</li>
                                <li><strong>4D tensor:</strong> a batch of images — (batch, height, width, channels)</li>
                                <li><strong>3D tensor:</strong> a tokenized sequence batch — (batch, sequence_length, embedding_dim)</li>
                            </ul>
                        </div>

                        <div class="blog-insight">
                            "A scalar is a 0D tensor. A vector is 1D. A matrix is 2D. Everything above 2D is just called a tensor."
                        </div>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*wZGWE7ckq20l92lN.png"
                                 alt="3D tensor visualization — layers of matrices stacked along a third axis"
                                 loading="lazy">
                            <figcaption>3D tensor: a stack of matrices — the building block for image data and sequence batches.</figcaption>
                        </figure>

                        <h2 id="how-they-connect-in-practice">How They Connect in Practice</h2>
                        <p>
                            In PyTorch, every data type is a <code>torch.Tensor</code>:
                        </p>
                        <ul>
                            <li><code>torch.tensor(3.14)</code> → scalar (0D)</li>
                            <li><code>torch.tensor([1, 2, 3])</code> → vector (1D, shape [3])</li>
                            <li><code>torch.zeros(3, 4)</code> → matrix (2D, shape [3, 4])</li>
                            <li><code>torch.zeros(8, 224, 224, 3)</code> → 4D tensor (batch of 8 RGB images)</li>
                        </ul>
                        <p>
                            Every layer's forward pass is a sequence of tensor operations — matrix multiplications, element-wise activations, convolutions — all operating on these four structures.
                        </p>

                        <!-- Summary image -->
                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*foL833kOeS5VR8ERGi8f-w.png"
                                 alt="Summary comparison of scalar, vector, matrix, and tensor with dimensions and ML use cases"
                                 loading="lazy">
                            <figcaption>All four structures — dimensions, notation, and typical ML applications at a glance.</figcaption>
                        </figure>

                        <!-- Key Takeaways -->
                        <h2 id="key-takeaways">Key Takeaways</h2>
                        <ul>
                            <li><strong>Scalar (0D):</strong> single number, magnitude only — loss, learning rate, temperature.</li>
                            <li><strong>Vector (1D):</strong> ordered array with magnitude + direction — embeddings, feature rows.</li>
                            <li><strong>Matrix (2D):</strong> rows × columns, non-commutative multiplication — weight matrices, transformations.</li>
                            <li><strong>Tensor (nD):</strong> generalization to n dimensions — everything in deep learning.</li>
                            <li>PyTorch and TensorFlow treat all four as <code>Tensor</code> objects — shape tells you the dimension.</li>
                        </ul>

                        <!-- FAQ -->
                        <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>

                        <details class="faq-item">
                            <summary>What is the difference between a scalar, vector, matrix, and tensor?</summary>
                            <p>A scalar is a single number (0D). A vector is a 1D ordered array with magnitude and direction. A matrix is a 2D array in rows and columns. A tensor is the n-dimensional generalization — scalar is 0D tensor, vector is 1D, matrix is 2D, higher-order arrays are 3D+.</p>
                        </details>

                        <details class="faq-item">
                            <summary>What is a tensor in machine learning?</summary>
                            <p>In ML, a tensor is a multi-dimensional array used to represent data and parameters. Images are 3D tensors (height × width × channels). Batches of images are 4D. PyTorch and TensorFlow use tensors as their fundamental data structure — all operations are tensor operations.</p>
                        </details>

                        <details class="faq-item">
                            <summary>Why is matrix multiplication non-commutative?</summary>
                            <p>Matrix multiplication AB ≠ BA in general because the order of row-column dot products changes. Reversing which matrix's rows pair with which matrix's columns produces a different result — and often a different output shape.</p>
                        </details>

                        <details class="faq-item">
                            <summary>What is the difference between dot product and cross product?</summary>
                            <p>The dot product (a · b) produces a scalar — it measures alignment between two vectors. The cross product (a × b) produces a new vector perpendicular to both — it measures the area of the parallelogram they span. Dot product is used in attention mechanisms; cross product is common in 3D graphics.</p>
                        </details>

                        <details class="faq-item">
                            <summary>How are tensors used in deep learning?</summary>
                            <p>Neural network weights, activations, gradients, and inputs are all tensors. A fully connected layer's weights are 2D tensors (matrices). Conv filters are 4D. Batched transformer inputs are 3D. Frameworks like PyTorch and TensorFlow optimize tensor operations for GPU parallelism.</p>
                        </details>`,

  "session-in-the-flask-for-login": `<h2 id="how-flask-sessions-work">How Flask Sessions Work</h2>
                        <p>
                            Flask sessions store data in a <strong>signed cookie</strong> on the user's browser.
                            The server signs the cookie with a secret key using HMAC — users can read the cookie but cannot modify it without the signature breaking.
                            On each request, Flask reads the cookie, verifies the signature, and exposes the data through the <code>session</code> object.
                        </p>
                        <p>
                            For login, you store a flag like <code>session['logged_in'] = True</code> after credentials check out. Every protected route then checks this flag before serving content.
                        </p>

                        <h2 id="step-1-set-a-secret-key">Step 1: Set a Secret Key</h2>
                        <p>The secret key signs session cookies. Without it, Flask raises a <code>RuntimeError</code> the moment you touch <code>session</code>.</p>

                        <pre><code>from flask import Flask, session, request, redirect, render_template

app = Flask(__name__)
app.secret_key = 'your_secret_key_here'   # use a long random string in production</code></pre>

                        <div class="blog-insight">
                            "In production, load the secret key from an environment variable — never hardcode it."
                        </div>

                        <h2 id="step-2-define-a-login-route">Step 2: Define a Login Route</h2>
                        <p>Handle both GET (show the form) and POST (validate credentials). On success, set the session flag and redirect to the protected page.</p>

                        <pre><code>@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username == 'admin' and password == 'password':
            session['logged_in'] = True
            return redirect('/')
    return render_template('login.html')</code></pre>

                        <h2 id="step-3-define-a-protected-route">Step 3: Define a Protected Route</h2>
                        <p>Check <code>session.get('logged_in')</code> before serving protected content. Redirect unauthenticated users to login.</p>

                        <pre><code>@app.route('/')
def index():
    if session.get('logged_in'):
        return render_template('index.html')
    return redirect('/login')</code></pre>

                        <h2 id="step-4-define-a-logout-route">Step 4: Define a Logout Route</h2>
                        <p><code>session.clear()</code> removes all session data, effectively logging the user out.</p>

                        <pre><code>@app.route('/logout')
def logout():
    session.clear()
    return redirect('/login')

if __name__ == '__main__':
    app.run(debug=True)</code></pre>

                        <h2 id="video-walkthroughs">Video Walkthroughs</h2>
                        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:8px;margin:1.5rem 0;">
                            <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;"
                                    src="https://www.youtube.com/embed/0Qw8MQ7lnk0"
                                    title="Flask Session Login Tutorial Part 1"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    loading="lazy"></iframe>
                        </div>

                        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:8px;margin:1.5rem 0;">
                            <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;"
                                    src="https://www.youtube.com/embed/X1IK5J1MlWY"
                                    title="Flask Session Login Tutorial Part 2"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    loading="lazy"></iframe>
                        </div>

                        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:8px;margin:1.5rem 0;">
                            <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;"
                                    src="https://www.youtube.com/embed/bkgcyov8w10"
                                    title="Flask Session Login Tutorial Part 3"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    loading="lazy"></iframe>
                        </div>

                        <div class="blog-component">
                            <h3>Security Notes</h3>
                            <ul>
                                <li><strong>Secret key:</strong> use a cryptographically random value (e.g., <code>secrets.token_hex(32)</code>) and load it from an environment variable</li>
                                <li><strong>Credential validation:</strong> never compare plain-text passwords — hash with <code>werkzeug.security</code> or <code>bcrypt</code></li>
                                <li><strong>Session expiry:</strong> set <code>app.permanent_session_lifetime</code> and <code>session.permanent = True</code> to control how long sessions last</li>
                                <li><strong>HTTPS only:</strong> set <code>SESSION_COOKIE_SECURE = True</code> in production so cookies are only sent over HTTPS</li>
                            </ul>
                        </div>

                        <div class="blog-reference">
                            Reference: <a href="https://flask.palletsprojects.com/en/latest/quickstart/#sessions" target="_blank" rel="noopener noreferrer">Flask Docs — Sessions</a>
                        </div>`,

  "sets-performance-better-vs-lists-why": `<figure class="blog-figure">
                        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*Bt9PM77fTvd-pW-t.png"
                             alt="Performance benchmark: Python set vs list for common operations"
                             loading="eager">
                        <figcaption>Benchmark: set operations scale at O(1) while list operations scale at O(n) — the gap widens with collection size.</figcaption>
                    </figure>

<h2 id="why-sets-excel-the-hash-table">Why Sets Excel: The Hash Table</h2>
                        <p>
                            A Python <code>set</code> is backed by a <strong>hash table</strong>.
                            When you add an element, Python computes <code>hash(element)</code> and stores it at that hash's bucket.
                            When you look up an element with <code>x in my_set</code>, Python computes the hash again and jumps directly to that bucket — one operation, regardless of how many elements are in the set.
                        </p>
                        <p>
                            This gives sets <strong>O(1) average-case complexity</strong> for:
                        </p>
                        <ul>
                            <li>Membership testing: <code>x in my_set</code></li>
                            <li>Add: <code>my_set.add(x)</code></li>
                            <li>Remove: <code>my_set.discard(x)</code></li>
                        </ul>
                        <p>
                            A <code>list</code> stores elements in contiguous memory in insertion order.
                            Membership testing (<code>x in my_list</code>) scans every element sequentially — <strong>O(n)</strong>.
                            For 1,000,000 elements, that's up to 1,000,000 comparisons vs one hash computation.
                        </p>

                        <div class="blog-insight">
                            "Sets excel at providing constant-time average complexity for common operations — the advantage becomes dramatic with larger datasets."
                        </div>

                        <h2 id="iteration-where-lists-have-the-edge">Iteration: Where Lists Have the Edge</h2>
                        <p>
                            Sets use sparse, scattered memory — the hash table has empty buckets between entries.
                            Iterating requires walking the internal array, skipping gaps.
                            Lists store elements densely — sequential memory access is cache-friendly and fast.
                        </p>
                        <p>
                            For tight iteration loops over large collections, lists are faster than sets.
                            This is the one case where the hash table structure works against sets.
                        </p>

                        <h2 id="when-to-use-sets">When to Use Sets</h2>
                        <ul>
                            <li><strong>Membership testing at scale</strong> — filtering large datasets for element presence</li>
                            <li><strong>Deduplication</strong> — <code>unique = set(my_list)</code> removes duplicates instantly</li>
                            <li><strong>Set algebra</strong> — union, intersection, difference operations at scale</li>
                            <li><strong>Data analysis</strong> — finding unique values, shared elements across datasets</li>
                            <li><strong>Large-scale computation</strong> — any lookup-heavy algorithm benefits from O(1) membership</li>
                        </ul>

                        <h2 id="the-practical-rule">The Practical Rule</h2>
                        <ul>
                            <li><strong>Lots of <code>in</code> checks?</strong> → use a set</li>
                            <li><strong>Lots of iteration / indexing?</strong> → use a list</li>
                            <li><strong>Need both?</strong> → keep a list for order, maintain a parallel set for lookups</li>
                        </ul>

                        <p>
                            See also: <a href="list-vs-set-in-a-minute.html">List vs Set in a Minute</a> — a deeper benchmark comparison with iteration and membership timing.
                        </p>`,

  "support-vector-machine-svm": `<figure class="blog-figure">
                        <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*_CK-pV3RqDmvKmPD3rR_Lw.png"
                             alt="Support Vector Machine — decision boundary with maximum margin"
                             loading="eager">
                        <figcaption>SVM: a powerful algorithm for linear and non-linear classification, regression, and outlier detection.</figcaption>
                    </figure>

<h2 id="what-is-a-support-vector-machine">What is a Support Vector Machine?</h2>
                        <p>
                            A Support Vector Machine (SVM) is a supervised machine learning algorithm used for <strong>linear or non-linear classification, regression, and outlier detection</strong>.
                            The core idea: find the hyperplane that best separates two classes with the maximum possible margin between them.
                        </p>

                        <h2 id="hyperplane-and-margins">Hyperplane and Margins</h2>
                        <p>
                            In 2D, a hyperplane is a line. In 3D, it's a plane. In N dimensions, it's an (N−1)-dimensional boundary that separates classes.
                            SVM doesn't just find any separating line — it finds the one that maximizes the margin to the nearest data points on each side.
                        </p>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*RYhCVthKlTtfyGoVu85uyw.png"
                                 alt="SVM hyperplane with margins L1, L2, L3"
                                 loading="lazy">
                            <figcaption>Three candidate boundaries: L1 and L3 are soft margins; L2 is the hard margin (optimal hyperplane).</figcaption>
                        </figure>

                        <ul>
                            <li><strong>L1, L3</strong> — Soft margins: closer to data points, smaller margin</li>
                            <li><strong>L2</strong> — Hard Margin / Hyperplane: maximum margin, optimal choice when data is linearly separable</li>
                        </ul>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*XoWVdFhccLdrRWjWnUG_xg.png"
                                 alt="SVM maximum margin hyperplane visualization"
                                 loading="lazy">
                            <figcaption>The optimal hyperplane maximizes the distance to the nearest data point on each side.</figcaption>
                        </figure>

                        <h2 id="support-vectors">Support Vectors</h2>
                        <p>
                            Support vectors are the <strong>data points closest to the margin boundary</strong>.
                            They are the critical points that define the margin — if you removed them, the hyperplane would shift.
                            The algorithm name comes from these vectors: the machine is "supported" by these boundary points.
                        </p>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*YclKaN_ivXWC4Bqxvx5p7g.png"
                                 alt="Support vectors — points closest to the margin"
                                 loading="lazy">
                            <figcaption>Support vectors: the critical points defining the margin. Only these points influence the hyperplane.</figcaption>
                        </figure>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*sWxvMO0uVznmscAuv3pKcQ.png"
                                 alt="Hard margin vs soft margin SVM comparison"
                                 loading="lazy">
                            <figcaption>Hard margin (no violations) vs soft margin (some misclassifications allowed for better generalization).</figcaption>
                        </figure>

                        <h2 id="regularization-c-and-gamma">Regularization (C) and Gamma</h2>
                        <p>
                            Two key hyperparameters tune SVM performance. High values in complex datasets can cause overfitting.
                        </p>

                        <h3>Regularization (C)</h3>
                        <p>
                            The C parameter controls the trade-off between maximizing the margin and minimizing misclassification.
                            A <strong>larger C</strong> penalizes misclassifications more heavily — narrower margin, more accurate on training data, higher risk of overfitting.
                            A <strong>smaller C</strong> tolerates more misclassifications — wider margin, better generalization.
                        </p>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*d0u6rPNcdhyuyEbPQ2RM7g.png"
                                 alt="Effect of C parameter on SVM margin width"
                                 loading="lazy">
                            <figcaption>Higher C → narrower margin with fewer misclassifications. Lower C → wider margin, more tolerant.</figcaption>
                        </figure>

                        <h3>Gamma</h3>
                        <p>
                            Gamma controls the <strong>influence radius of individual training points</strong> in non-linear kernels (RBF, Polynomial, Sigmoid).
                            High gamma: each point influences only a small region — complex, tight boundaries (overfitting risk).
                            Low gamma: each point influences a large region — smoother, simpler boundaries.
                        </p>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:498/format:webp/1*M9eDuMXB_QwLBxZ8DgP4Yg.png"
                                 alt="Gamma parameter effect on SVM decision boundary"
                                 loading="lazy">
                            <figcaption>Gamma determines the reach of each training point's influence — high gamma creates tighter, more complex boundaries.</figcaption>
                        </figure>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*iikDeBqz7QfXqVoX5LzHww.png"
                                 alt="SVM C and gamma interaction visualization"
                                 loading="lazy">
                            <figcaption>C and gamma interact: tuning both together determines the complexity and generalization of the SVM boundary.</figcaption>
                        </figure>

                        <h2 id="kernels">Kernels</h2>
                        <p>
                            Most real-world data isn't linearly separable. Kernels are mathematical functions that implicitly transform data into a higher-dimensional space where a linear hyperplane can separate it — without explicitly computing the transformation.
                        </p>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*uzpFA1evl_F8y_E-Q1wMjQ.png"
                                 alt="Non-linearly separable data transformed by kernel"
                                 loading="lazy">
                            <figcaption>Kernels map data to higher dimensions where a linear boundary becomes possible.</figcaption>
                        </figure>

                        <div class="blog-component">
                            <h3>Four Kernels</h3>
                            <ul>
                                <li><strong>Linear:</strong> <code>K(x, y) = x·y</code> — for linearly separable data, fastest, no transformation</li>
                                <li><strong>Polynomial:</strong> <code>K(x, y) = (γx·y + r)^d</code> — captures feature interactions up to degree d</li>
                                <li><strong>RBF (Radial Basis Function):</strong> <code>K(x, y) = exp(−γ||x−y||²)</code> — the default, works well for most problems, infinite-dimensional mapping</li>
                                <li><strong>Sigmoid:</strong> <code>K(x, y) = tanh(γx·y + r)</code> — similar to neural network activation, less common</li>
                            </ul>
                        </div>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*5aAQlGJjtLYPXCE0VnyItA.png"
                                 alt="Linear kernel SVM decision boundary"
                                 loading="lazy">
                            <figcaption>Linear kernel: optimal for linearly separable data — fastest computation, highest interpretability.</figcaption>
                        </figure>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*a9DYxiUuhe2FNY2KbhIm9g.png"
                                 alt="RBF kernel SVM — non-linear decision boundary"
                                 loading="lazy">
                            <figcaption>RBF kernel: creates non-linear boundaries by computing Gaussian distance to each support vector.</figcaption>
                        </figure>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*kUwPE4htkwYij-PvKuSmYQ.png"
                                 alt="Polynomial and Sigmoid kernel SVM boundaries"
                                 loading="lazy">
                            <figcaption>Polynomial kernel captures interactions between features; Sigmoid mirrors neural network behavior.</figcaption>
                        </figure>

                        <h2 id="implementation-iris-dataset">Implementation: Iris Dataset</h2>
                        <p>Load the Iris dataset and train an SVM classifier:</p>

                        <pre><code>import pandas as pd
from sklearn.datasets import load_iris

iris = load_iris()
# Features: sepal length, sepal width, petal length, petal width
# Classes: setosa, versicolor, virginica

df = pd.DataFrame(iris.data, columns=iris.feature_names)
df['target'] = iris.target
df['flower_name'] = df.target.apply(lambda x: iris.target_names[x])</code></pre>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*_2YLmnWn4Qupb1IrgSC3Gg.png"
                                 alt="Iris dataset scatter plot — petal length vs petal width"
                                 loading="lazy">
                            <figcaption>Iris dataset: petal features show clear separation between setosa and the other two classes.</figcaption>
                        </figure>

                        <pre><code>from sklearn.model_selection import train_test_split
from sklearn.svm import SVC

X = df.drop(['target', 'flower_name'], axis='columns')
y = df.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = SVC()
model.fit(X_train, y_train)
model.score(X_test, y_test)
# 0.9666666666666667

model.predict([[4.8, 3.0, 1.5, 0.3]])
# array([0])  → setosa</code></pre>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*g_jI2Qa75j4vBvgXhjDajg.png"
                                 alt="SVM model training on Iris dataset output"
                                 loading="lazy">
                            <figcaption>Default SVC achieves ~96.7% accuracy on the Iris test set.</figcaption>
                        </figure>

                        <h2 id="tuning-hyperparameters">Tuning Hyperparameters</h2>
                        <pre><code># Regularization (C)
model_C = SVC(C=1)
model_C.fit(X_train, y_train)
model_C.score(X_test, y_test)   # 0.9666

model_C = SVC(C=10)
model_C.fit(X_train, y_train)
model_C.score(X_test, y_test)   # 0.9666

# Gamma
model_g = SVC(gamma=10)
model_g.fit(X_train, y_train)
model_g.score(X_test, y_test)   # 0.9333 — overfitting with high gamma

# Kernels
model_linear = SVC(kernel='linear')
model_linear.fit(X_train, y_train)
model_linear.score(X_test, y_test)   # 1.0 — perfect on Iris

model_rbf = SVC(kernel='rbf')   # default
model_rbf.fit(X_train, y_train)
model_rbf.score(X_test, y_test)  # 0.9666</code></pre>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*ReDm1WUR8Cq8mWE55BLf9Q.png"
                                 alt="SVM hyperparameter tuning results — C, gamma, kernel comparison"
                                 loading="lazy">
                            <figcaption>Linear kernel achieves 100% on Iris — the dataset is linearly separable in 4D feature space.</figcaption>
                        </figure>

                        <div class="blog-insight">
                            "The linear kernel achieves 100% accuracy on Iris because the 4-dimensional feature space is linearly separable — the kernel trick maps apparent non-linearity in 2D to separability in higher dimensions."
                        </div>

                        <p>See also: <a href="svms-kernel-trick-in-a-minute.html">SVMs & Kernel Trick in a Minute</a> — a deeper dive into the mathematics behind SVM kernels.</p>`,

  "svms-kernel-trick-in-a-minute": `<figure class="blog-figure">
                        <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*bjKsTZda4iyyAEnw"
                             alt="Support Vector Machine concept overview — SVM separating data classes"
                             loading="eager">
                        <figcaption>SVMs: find the hyperplane that maximizes the margin between classes.</figcaption>
                    </figure>

<h2 id="what-is-a-support-vector-machine">What Is a Support Vector Machine?</h2>
                        <p>
                            An SVM is a supervised learning algorithm that identifies the <strong>optimal hyperplane separating different classes in the feature space</strong>.
                            Unlike other classifiers that just find any boundary that works, an SVM finds the one with the <em>maximum margin</em> — the widest gap between the boundary and the closest data points on either side.
                        </p>
                        <p>
                            Those closest points are called <strong>support vectors</strong>. They're the only data points that actually influence the boundary — everything else is irrelevant to the decision surface.
                        </p>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*KPnfSH9yiX3jF6UNGwtcgw.png"
                                 alt="SVM decision boundary with maximum margin hyperplane and support vectors"
                                 loading="lazy">
                            <figcaption>The SVM hyperplane (solid line) maximizes the margin (dashed lines). Support vectors are the closest points to the boundary.</figcaption>
                        </figure>

                        <h2 id="the-problem-non-linearly-separable-data">The Problem: Non-Linearly Separable Data</h2>
                        <p>
                            A straight hyperplane works fine when classes are cleanly separable. But real data is rarely that cooperative.
                            When classes form rings, spirals, or overlapping clusters, no straight line can separate them.
                        </p>

                        <figure class="blog-figure blog-figure--narrow">
                            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*AcDZSf2XlO5YGtlY"
                                 alt="Non-linearly separable data — two classes that cannot be separated by a straight line"
                                 loading="lazy">
                            <figcaption>Non-linearly separable data: no straight hyperplane can cleanly divide these classes.</figcaption>
                        </figure>

                        <h2 id="the-solution-the-kernel-trick">The Solution: The Kernel Trick</h2>
                        <p>
                            Instead of drawing a curved boundary in low-dimensional space, the kernel trick <strong>projects the data into a higher-dimensional feature space</strong>
                            where a straight hyperplane can separate the classes.
                        </p>
                        <p>
                            The key insight: you never actually compute the coordinates in that high-dimensional space.
                            Kernels compute the <em>dot products</em> in the transformed space directly from the original inputs — giving you the power of high-dimensional separation at low computational cost.
                        </p>

                        <div class="blog-insight">
                            "The kernel trick lets SVMs separate non-linear data without ever explicitly computing the transformation."
                        </div>

                        <figure class="blog-figure blog-figure--narrow">
                            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*7b3CJQrHX_y6lH54"
                                 alt="Kernel trick: data projected from 2D to 3D space where it becomes linearly separable"
                                 loading="lazy">
                            <figcaption>Kernel trick: project into higher dimensions → straight hyperplane becomes possible.</figcaption>
                        </figure>

                        <!-- ── Kernel Types ── -->
                        <h2 id="the-4-kernel-types">The 4 Kernel Types</h2>

                        <div class="blog-component">
                            <h3><span class="component-number">1</span> Linear Kernel</h3>
                            <p>
                                No transformation — computes a standard dot product in the original feature space.
                                Use when data is already linearly separable. Fast, interpretable, no hyperparameters to tune.
                            </p>
                            <div class="blog-formula-box">K(x, y) = x · y</div>
                        </div>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*j7IKhu4u5EXwhTpE.png"
                                 alt="Linear SVM kernel — straight hyperplane separating two classes"
                                 loading="lazy">
                            <figcaption>Linear kernel: works only when classes are linearly separable.</figcaption>
                        </figure>

                        <div class="blog-component">
                            <h3><span class="component-number">2</span> Polynomial Kernel</h3>
                            <p>
                                Maps data into a polynomial feature space. With degree 2, it considers not just original features but also their squares and cross-products (x², y², xy).
                                Captures feature interactions that a linear kernel misses.
                            </p>
                            <div class="blog-formula-box">K(x, y) = (x · y + c)ᵈ</div>
                        </div>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*bbJVAAl-nWqEQMWH"
                                 alt="Polynomial SVM kernel — curved decision boundary capturing feature interactions"
                                 loading="lazy">
                            <figcaption>Polynomial kernel: curved boundaries from feature interactions — degree controls complexity.</figcaption>
                        </figure>

                        <div class="blog-component">
                            <h3><span class="component-number">3</span> RBF — Radial Basis Function Kernel</h3>
                            <p>
                                The <strong>default kernel in sklearn's SVM</strong>. Computes similarity between points using Euclidean distance — points closer together get higher similarity scores.
                                Maps data into infinite-dimensional space, making it extremely flexible for complex boundaries.
                            </p>
                            <div class="blog-formula-box">K(x, y) = exp(−γ ‖x − y‖²)</div>
                        </div>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*WdyvJuTbjr1KeglRUmzL3w.gif"
                                 alt="RBF kernel animation — SVM decision boundary adapting to complex data shapes"
                                 loading="lazy">
                            <figcaption>RBF kernel animation: the boundary wraps tightly around complex data distributions.</figcaption>
                        </figure>

                        <h3>Tuning Gamma (γ) in RBF</h3>
                        <p>Gamma controls the <em>influence radius</em> of each training point — how far a single example reaches.</p>

                        <div class="blog-component">
                            <h3>High γ</h3>
                            <p>Each point influences only its immediate neighborhood. The boundary hugs the training data tightly, capturing fine-grained detail. Risk: overfitting.</p>
                        </div>

                        <figure class="blog-figure blog-figure--narrow">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*0JsU6S65lIB13I8Yer8uFQ.jpeg"
                                 alt="High gamma SVM — overly complex decision boundary that hugs training points"
                                 loading="lazy">
                            <figcaption>High γ: boundary memorizes the training data — good fit, poor generalization.</figcaption>
                        </figure>

                        <div class="blog-component">
                            <h3>Low γ</h3>
                            <p>Each point influences a wide area. The boundary is smooth and generalized. Risk: underfitting when data has complex structure.</p>
                        </div>

                        <figure class="blog-figure blog-figure--narrow">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*q6n7lQTtg8bj1KShIFCduQ.jpeg"
                                 alt="Low gamma SVM — overly smooth decision boundary that misses local structure"
                                 loading="lazy">
                            <figcaption>Low γ: boundary is too smooth — misses local structure, may underfit.</figcaption>
                        </figure>

                        <div class="blog-component">
                            <h3><span class="component-number">4</span> Sigmoid Kernel</h3>
                            <p>
                                Uses the hyperbolic tangent function — similar to the activation function in neural networks.
                                Produces S-shaped decision boundaries. Less commonly used than RBF but useful when the data exhibits neural-network-like behavior.
                            </p>
                            <div class="blog-formula-box">K(x, y) = tanh(αx · y + c)</div>
                        </div>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*ohroUBBQCu78yD_Y8qL_OA.gif"
                                 alt="Sigmoid kernel SVM animation — S-shaped decision boundary"
                                 loading="lazy">
                            <figcaption>Sigmoid kernel: mimics neural network activation, produces non-linear S-shaped boundaries.</figcaption>
                        </figure>

                        <!-- ── Summary ── -->
                        <h2 id="kernel-comparison-at-a-glance">Kernel Comparison at a Glance</h2>

                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*LM06-o8pwzsalHiTOydgyQ.jpeg"
                                 alt="Summary comparison of Linear, Polynomial, RBF, and Sigmoid SVM kernels"
                                 loading="lazy">
                            <figcaption>Kernel summary: choose based on data linearity, complexity, and the need for interpretability.</figcaption>
                        </figure>

                        <!-- Key Takeaways -->
                        <h2 id="key-takeaways">Key Takeaways</h2>
                        <ul>
                            <li><strong>SVM goal:</strong> find the hyperplane that maximizes the margin between classes — not just any separating boundary.</li>
                            <li><strong>Support vectors</strong> are the only training points that matter — the rest can be removed without changing the boundary.</li>
                            <li><strong>Kernel trick:</strong> maps data to higher dimensions implicitly, enabling linear separation of non-linear data at low compute cost.</li>
                            <li><strong>RBF is the default</strong> in sklearn — flexible for most problems; tune γ and C via cross-validation.</li>
                            <li><strong>High γ → overfitting. Low γ → underfitting.</strong> GridSearchCV over γ and C is the standard approach.</li>
                        </ul>

                        <!-- FAQ Section -->
                        <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>

                        <details class="faq-item">
                            <summary>What is a Support Vector Machine?</summary>
                            <p>An SVM finds the optimal hyperplane that separates different classes in the feature space, maximizing the margin between the closest data points (support vectors) of each class.</p>
                        </details>

                        <details class="faq-item">
                            <summary>What is the kernel trick in SVM?</summary>
                            <p>The kernel trick maps non-linearly separable data into a higher-dimensional feature space where it becomes linearly separable — without ever explicitly computing the coordinates in that high-dimensional space. This makes SVMs efficient even with complex, curved decision boundaries.</p>
                        </details>

                        <details class="faq-item">
                            <summary>What are the different SVM kernels?</summary>
                            <p>The four main kernels: (1) <strong>Linear</strong> — standard dot product, for linearly separable data; (2) <strong>Polynomial</strong> — captures squares and cross-products of features; (3) <strong>RBF</strong> — default in sklearn, Euclidean distance similarity; (4) <strong>Sigmoid</strong> — mimics neural network activation.</p>
                        </details>

                        <details class="faq-item">
                            <summary>What does gamma do in RBF SVM?</summary>
                            <p>Gamma controls influence radius per training point. High γ: tight, complex boundaries that capture fine detail — risks overfitting. Low γ: smooth, simple boundaries — risks underfitting.</p>
                        </details>

                        <details class="faq-item">
                            <summary>When should you use SVM over other classifiers?</summary>
                            <p>SVMs excel in high-dimensional spaces, when features outnumber samples, and when a clear margin exists. Strong for text classification, image recognition, bioinformatics. They scale poorly on very large datasets — consider gradient-boosted trees or neural networks then.</p>
                        </details>`,

  "transformers-in-a-minute": `<figure class="blog-figure">
                        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*adMgf9eqWEMHr7L-dPNaWQ.png"
                             alt="Transformer Architecture diagram showing encoder and decoder layers"
                             loading="eager">
                        <figcaption>The Transformer architecture — encoder (left) processes input, decoder (right) generates output.</figcaption>
                    </figure>

<p>
                            Transformers are the backbone of modern AI. GPT, BERT, T5, LLaMA — all built on the same core architecture.
                            Understanding it in one read is the goal here.
                        </p>

                        <!-- Why Not RNNs -->
                        <h2 id="why-not-rnns">Why Not RNNs?</h2>
                        <p>
                            Before Transformers, Recurrent Neural Networks (RNNs) dominated sequence modeling.
                            They had two critical flaws:
                        </p>
                        <ul>
                            <li><strong>Context collapse</strong> — earlier tokens are forgotten in long sequences (vanishing gradients).</li>
                            <li><strong>No parallelism</strong> — tokens processed one-by-one, making training painfully slow.</li>
                        </ul>
                        <p>Transformers solved both. Every token attends to every other token simultaneously.</p>

                        <!-- 6 Components -->
                        <h2 id="the-6-core-components">The 6 Core Components</h2>

                        <div class="blog-component">
                            <h3><span class="component-number">1</span> Input Embedding</h3>
                            <p>Raw text → numerical vectors. Similar meanings cluster nearby in high-dimensional space. Each token (word or subword unit) gets its own dense vector.</p>
                        </div>

                        <div class="blog-component">
                            <h3><span class="component-number">2</span> Positional Encoding</h3>
                            <p>All tokens are processed simultaneously, so the model has no built-in notion of order. Positional encoding adds a signal to each embedding so the model knows token 1 came before token 2.</p>
                        </div>

                        <div class="blog-component">
                            <h3><span class="component-number">3</span> Multi-Head Self-Attention</h3>
                            <p>
                                The heart of the Transformer. Each token scores its relevance against every other token.
                                Running <em>h</em> attention heads in parallel lets the model capture different relationship types at once —
                                syntax in one head, co-reference in another, semantics in a third.
                            </p>
                        </div>

                        <!-- Multi-Head Attention Diagram -->
                        <figure class="blog-figure blog-figure--narrow">
                            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*phR1pi8piCoLXhk8H1v4YA.png"
                                 alt="Multi-Head Attention diagram: V, K, Q inputs through Linear projections, Scaled Dot-Product Attention, Concat, Linear output"
                                 loading="lazy">
                            <figcaption>Multi-Head Attention: h parallel Scaled Dot-Product Attention heads, concatenated and projected.</figcaption>
                        </figure>

                        <div class="blog-component">
                            <h3><span class="component-number">4</span> Feed Forward Network (FFN)</h3>
                            <p>After attention, each token passes through an independent two-layer feed-forward network. Attention decides <em>what to look at</em>; FFN decides <em>what to do with it</em>.</p>
                        </div>

                        <div class="blog-component">
                            <h3><span class="component-number">5</span> Layer Norm + Residual Connections</h3>
                            <p>Residual connections let gradients flow back through deep stacks without vanishing. Layer Normalization keeps activations numerically stable after each sub-layer.</p>
                        </div>

                        <div class="blog-component">
                            <h3><span class="component-number">6</span> Encoder / Decoder Stacks</h3>
                            <p>
                                Encoders compress input into contextual representations; decoders generate output token by token.
                                <strong>GPT-style</strong> models are decoder-only.
                                <strong>BERT-style</strong> models are encoder-only.
                                <strong>T5 / BART</strong> use the full encoder-decoder setup.
                            </p>
                        </div>

                        <!-- Architecture comparison image -->
                        <figure class="blog-figure">
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*ggWYxdcvOPpCwPXI6sVUBg.png"
                                 alt="NLP Model Architectures best use cases: Decoder Only (GPT, Claude, Llama), Encoder Only (BERT, RoBERTa), Encoder-Decoder (T5, BART)"
                                 loading="lazy">
                            <figcaption>Choosing the right architecture: decoder-only for generation, encoder-only for understanding, encoder-decoder for translation/summarization.</figcaption>
                        </figure>

                        <!-- Attention Mechanism -->
                        <h2 id="the-attention-mechanism">The Attention Mechanism</h2>
                        <p>Attention uses three learned projections of the input — Query, Key, and Value:</p>

                        <div class="blog-formula-box">
                            <div class="formula">Attention(Q, K, V) = softmax( QK<sup>T</sup> / √d<sub>k</sub> ) · V</div>
                            <p class="formula-label">— Vaswani et al., "Attention Is All You Need", NeurIPS 2017</p>
                            <div class="formula-legend">
                                <span class="legend-item"><strong>Q</strong> — Query: what am I looking for?</span>
                                <span class="legend-item"><strong>K</strong> — Key: what do I offer?</span>
                                <span class="legend-item"><strong>V</strong> — Value: what do I actually pass on?</span>
                                <span class="legend-item"><strong>√d<sub>k</sub></strong> — prevents dot products from exploding, keeping softmax gradients healthy</span>
                            </div>
                        </div>

                        <div class="blog-insight">
                            Think of it as a soft database lookup: Q is your search query, K indexes the rows, and V is the content retrieved. The softmax turns raw similarity scores into a weighted sum over all tokens.
                        </div>

                        <!-- Tokenization -->
                        <h2 id="tokenization">Tokenization</h2>
                        <p>
                            Before any embedding, text is tokenized via <strong>Byte Pair Encoding (BPE)</strong>.
                            Words are split into subword units — <em>"unbelievable"</em> might become <code>["un", "believ", "able"]</code>.
                            This keeps vocabulary size manageable while gracefully handling rare words and domain-specific terminology.
                        </p>

                        <!-- Cross-Attention -->
                        <h2 id="cross-attention">Cross-Attention</h2>
                        <p>
                            In encoder-decoder models (T5, BART), the decoder's queries attend to the <em>encoder's</em> keys and values — not its own.
                            This lets the decoder "read" the full encoded input at every generation step, enabling translation and summarization.
                        </p>

                        <!-- Complexity -->
                        <h2 id="computational-complexity">Computational Complexity</h2>
                        <p>
                            Self-attention is <strong>O(n²)</strong> — every token pair is scored. Double the sequence length → 4× the compute.
                            This bottleneck spawned efficient variants:
                        </p>
                        <ul>
                            <li><strong>Flash Attention</strong> — IO-aware exact attention, no approximation</li>
                            <li><strong>Sparse Attention</strong> — attends to a subset of tokens per head</li>
                            <li><strong>Grouped-Query Attention (GQA)</strong> — shares K/V heads across Q heads, used in LLaMA 2+</li>
                        </ul>

                        <!-- FAQ — must be visible on page for Google FAQ rich results -->
                        <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>

                        <div class="blog-faq">
                            <details class="faq-item">
                                <summary>What is a Transformer model in AI?</summary>
                                <p>A Transformer is a deep learning architecture that uses self-attention to process all tokens simultaneously, rather than one at a time like RNNs. It is the backbone of GPT, BERT, T5, LLaMA, and virtually every modern LLM.</p>
                            </details>
                            <details class="faq-item">
                                <summary>What are the 6 core components of a Transformer?</summary>
                                <p>Input Embedding, Positional Encoding, Multi-Head Self-Attention, Feed Forward Network, Layer Normalization + Residual Connections, and Encoder/Decoder Stacks.</p>
                            </details>
                            <details class="faq-item">
                                <summary>What is the Attention formula?</summary>
                                <p><strong>Attention(Q, K, V) = softmax(QKᵀ / √dₖ) × V.</strong> Q = query, K = key, V = value. The √dₖ scaling prevents exploding dot products that collapse the softmax gradient.</p>
                            </details>
                            <details class="faq-item">
                                <summary>Why are Transformers better than RNNs?</summary>
                                <p>Two reasons: (1) all tokens are processed in parallel — much faster training; (2) self-attention gives every token direct access to every other token, solving the vanishing-gradient context problem that RNNs suffer on long sequences.</p>
                            </details>
                            <details class="faq-item">
                                <summary>What is the difference between GPT and BERT?</summary>
                                <p>GPT is decoder-only, trained for text generation. BERT is encoder-only, trained for text understanding (classification, embeddings). T5 and BART use the full encoder-decoder setup for translation and summarization.</p>
                            </details>
                            <details class="faq-item">
                                <summary>What is Multi-Head Attention?</summary>
                                <p>Running h attention heads in parallel on the same input, each learning different relationships (syntax, semantics, co-reference), then concatenating and projecting the results.</p>
                            </details>
                        </div>

                        <!-- Reference -->
                        <div class="blog-reference">
                            <strong>Primary reference:</strong> Vaswani, A., Shazeer, N., Parmar, N., et al. (2017).
                            <em>Attention Is All You Need.</em> NeurIPS 2017.
                        </div>`,

  "understanding-the-if-name-main": `<figure class="blog-figure">
                        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*7oU61NGNVu3-5ca3mm2HKw.png"
                             alt="Python __name__ == '__main__' concept illustration"
                             loading="eager">
                        <figcaption>The <code>__name__</code> variable is <code>"__main__"</code> when a script runs directly — and the module name when imported.</figcaption>
                    </figure>

<h2 id="what-is-if-name-main">What Is <code>if __name__ == "__main__"</code>?</h2>
                        <p>
                            Every Python file has a built-in variable called <code>__name__</code>.
                            When Python runs a file <em>directly</em> (e.g., <code>python app.py</code>), it sets <code>__name__</code> to the string <code>"__main__"</code>.
                            When that same file is <em>imported</em> by another script, <code>__name__</code> is set to the module's filename instead.
                        </p>
                        <p>
                            The guard <code>if __name__ == "__main__":</code> lets you write code that only executes when the file is the entry point — not when it's imported as a library.
                        </p>

                        <h2 id="what-is-top-level-code">What Is Top-Level Code?</h2>
                        <p>
                            Top-level code is any code at the outermost indentation — not inside a function or class.
                            Python executes all top-level code from top to bottom when a file is run.
                            The file Python runs first is the <strong>top-level module</strong>, and its <code>__name__</code> is <code>"__main__"</code>.
                        </p>

                        <h2 id="three-files-three-scenarios">Three Files — Three Scenarios</h2>

                        <p>Create three Python files to see how <code>__name__</code> behaves:</p>

                        <p><strong>app.py</strong> — run directly, no imports:</p>
                        <pre><code>print(__name__)
print("This is main script")</code></pre>
                        <p>Output: <code>__main__</code> — Python confirms this file is the entry point.</p>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*X0RmnSk_bMDXau8jSI3y-g.png"
                                 alt="app.py running directly — __name__ is __main__"
                                 loading="lazy">
                            <figcaption>Running app.py directly sets <code>__name__</code> to <code>"__main__"</code>.</figcaption>
                        </figure>

                        <p><strong>check1.py</strong> — function guarded by <code>if __name__ == "__main__"</code>:</p>
                        <pre><code>def my_function():
    print("Hello, World!")

if __name__ == "__main__":
    my_function()</code></pre>

                        <p>When you import <code>check1</code> from another script, <code>my_function()</code> does <em>not</em> run — the guard prevents it:</p>
                        <pre><code>import check1
print(check1.__name__)     # check1
print("This is main script")</code></pre>

                        <p><strong>check2.py</strong> — function called at top level (no guard):</p>
                        <pre><code>def my_function():
    print("Hello, World!")

my_function()   # runs on import — no guard!</code></pre>
                        <p>Importing <code>check2</code> will call <code>my_function()</code> immediately — an unintended side effect.</p>

                        <figure class="blog-figure" style="margin-top:1rem;">
                            <img src="https://miro.medium.com/v2/resize:fit:430/format:webp/1*0OGcyaROt2cDkuMM7hwi5A.png"
                                 alt="Comparison: with vs without the __name__ guard when importing"
                                 loading="lazy">
                            <figcaption>The guard prevents top-level code from running unexpectedly when a module is imported.</figcaption>
                        </figure>

                        <div class="blog-insight">
                            "Use <code>if __name__ == '__main__'</code> to keep your scripts reusable as modules — the guard separates entry-point logic from importable functions."
                        </div>

                        <h2 id="video-walkthrough">Video Walkthrough</h2>
                        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:8px;margin:1.5rem 0;">
                            <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;"
                                    src="https://www.youtube.com/embed/YjgWcqUVUuI"
                                    title="if __name__ == '__main__' Python Tutorial"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    loading="lazy"></iframe>
                        </div>

                        <h2 id="when-to-use-it">When to Use It</h2>
                        <ul>
                            <li><strong>Always</strong> — wrap any code that should only run when the file is the entry point</li>
                            <li><strong>Tests and demos</strong> — put quick test calls or demo output inside the guard</li>
                            <li><strong>CLI scripts</strong> — put your <code>main()</code> call inside the guard so the file is importable as a module</li>
                            <li><strong>Never inside functions/classes</strong> — the guard belongs at the top level</li>
                        </ul>`,

};
