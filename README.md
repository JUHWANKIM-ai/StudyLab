# StudyLab

[![Python](https://img.shields.io/badge/python-3.9%2B-3776AB?logo=python&logoColor=white)](requirements.txt)
[![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?logo=pytorch&logoColor=white)](requirements.txt)
[![Gymnasium](https://img.shields.io/badge/Gymnasium-RL-0A7BBB)](rl/)
[![Jupyter](https://img.shields.io/badge/Jupyter-23%20notebooks-F37626?logo=jupyter&logoColor=white)](#repository-layout)

Study implementations kept in one place: reinforcement learning from dynamic programming to PPO, deep-learning
models, and quantitative-finance research code. The repository merges two earlier repositories,
**Study_RL** and **Study_DL_and_Coding**, with both commit histories preserved.

Nothing here is a finished product. Each directory is a self-contained study project, kept because the code
is worth rereading: the RL notebooks follow a course sequence and are meant to be read in order, while the
`quant/` projects are research code whose outputs (weights, backtest statistics) are committed next to them.

---

## What is inside

| Area | Directory | Content |
|---|---|---|
| Reinforcement learning | `rl/` | 12 notebooks, numbered by the course sequence: value iteration, policy iteration, Monte Carlo, SARSA, Q-learning, double Q-learning, DQN and its variants, dueling DQN, REINFORCE, TRPO, PPO. `rl/src/` holds the two algorithms written as scripts (A3C, TRPO). |
| Deep learning | `dl/msdiffusion/` | Diffusion model for satellite pattern-of-life identification. Third-party code kept for study — see `dl/msdiffusion/README.md` for its original instructions. |
| Quantitative finance | `quant/portfolio_backtest/` | Momentum and trend-following strategies (dual momentum, GTAA aggressive 3, GTAA 5, mean-reversion z-score, trend-following z-score, buy and hold) with a backtesting library and a metrics class. |
| | `quant/risk_estimation/` | SigCWGAN time-series generation (`lib/algos/sigcwgan.py`) used to estimate Value-at-Risk and Expected Shortfall, plus a GAT–TCN notebook that predicts a binary direction label from a graph of 10 stock closes, the traded volume and a sentiment score. |
| | `quant/wrds_pipeline/` | Download and reshape WRDS/Compustat firm characteristics and prices into per-firm parquet files. |
| | `quant/els_data_eda.ipynb` | Exploratory analysis of 102,607 Korean ELS/FCN disclosures (DART, 2015-01 to 2026-05, public offerings only). |
| Coding practice | `coding/baekjoon.ipynb` | Baekjoon solutions, 244 cells. |

## Pipelines

```
quant/portfolio_backtest
  yfinance prices ──► get_momentum ──► strategy weights ──► return_Table ──► METRICS
                                       (6 strategies)        (turnover, fees)   (describe, MDD, Calmar, t-stat)
                                                                               └─► general_results/*.csv

quant/risk_estimation
  stock prices ──► lib/data ──► SigCWGAN training (train.py) ──► generator weights
                                                                  └─► sample paths ──► VaR / ES ──► backtest

rl/
  notebook per algorithm: environment (Gymnasium) ──► agent ──► training loop ──► reward curve
```

## Results

Weekly returns of the portfolio strategies, 2000-09-10 to 2025-12-14 (1,319 weeks), read from
`quant/portfolio_backtest/general_results/period_statistics.csv`. These are the numbers the committed run produced;
they were not re-run here.

| | S&P 500 | Very conservative | Conservative | Balanced | Aggressive | Very aggressive | Dynamic |
|---|---|---|---|---|---|---|---|
| Mean (weekly) | 0.00115 | 0.00212 | 0.00227 | 0.00213 | 0.00168 | 0.00141 | **0.00377** |
| Std. dev. | 0.02453 | 0.02013 | 0.02041 | 0.02091 | 0.02120 | 0.02232 | **0.01866** |
| t-statistic | 1.80 | 4.11 | 4.28 | 3.92 | 3.08 | 2.44 | **8.42** |
| Min | −0.2008 | −0.1053 | −0.1297 | −0.1337 | −0.1721 | −0.1865 | −0.1053 |
| Skew | −0.886 | −0.360 | −0.648 | −0.795 | −0.967 | −0.955 | −0.372 |

Per-year figures are in `general_results/annual_statistics.csv`. No other project in this repository stores a
result table; the RL notebooks keep their reward curves as cell outputs.

## Repository layout

| Path | Content |
|---|---|
| `rl/notebooks/` | `08_value_iteration` … `30_ppo`, numbered as in the course |
| `rl/src/` | `a3c.py`, `trpo.py` |
| `rl/assets/` | figures used by the notebooks |
| `dl/msdiffusion/` | `main.py`, `model.py`, `dataset.py`, `config.py`, `logger.py`, `utils.py` |
| `quant/portfolio_backtest/` | `back_testing/` package, `back_testing.ipynb`, `risk.ipynb`, `general_results/` |
| `quant/risk_estimation/` | `lib/`, `back_testing/`, `train.py`, `evaluate.py`, `hyperparameters.py`, 4 notebooks, `numerical_results/`, `general_results/` |
| `quant/wrds_pipeline/` | `main.py`, `common.py`, 3 notebooks |
| `coding/` | `baekjoon.ipynb` |
| `ARCHITECTURE.md` | structure, dependencies, conventions, and the known duplication |

## Get Started

```bash
git clone https://github.com/JUHWANKIM-ai/StudyLab.git
cd StudyLab
pip install -r requirements.txt
```

Versions are unpinned on purpose: the notebooks were written over several years against different versions of
PyTorch and Gymnasium, and no single pinned set was verified to run all of them. `signatory` must match the
installed PyTorch version, and `torch_geometric` is needed only by `quant/risk_estimation/GATCN.ipynb`.

**Run each project from its own directory.** Imports such as `import back_testing as bt`, `from lib.utils import ...`
and `from hyperparameters import ...` are resolved relative to the working directory, so start Jupyter inside the
project folder rather than at the repository root:

```bash
cd quant/portfolio_backtest && jupyter lab back_testing.ipynb      # strategies and metrics
cd quant/risk_estimation   && python train.py                      # SigCWGAN training
cd dl/msdiffusion          && python main.py                       # see its own README for the dataset
cd rl                      && jupyter lab notebooks/18_dqn.ipynb   # any RL notebook, self-contained
```

Inputs are not distributed with the repository: `quant/risk_estimation/data/`, `quant/wrds_pipeline/Database/`
(WRDS credentials required) and `dl/msdiffusion/data/` are ignored by git.
