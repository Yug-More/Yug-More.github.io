"use client";
import { useState } from "react";
import results from "@/lib/market-results.json";
const names: Record<string,string> = {zero_return: "Zero return", historical_mean: "Historical mean", linear_regression: "Linear regression", random_forest: "Random forest", lstm: "LSTM"};
export function ResultsExplorer() {
  const [dataset, setDataset] = useState("NASDAQ-100");
  const [horizon, setHorizon] = useState("1");
  const rows = results.filter(r => r.dataset === dataset && r.horizon === horizon).sort((a,b) => Number(a.rmse)-Number(b.rmse));
  return <div className="results-explorer">
    <h3>Inspect the saved point forecasts</h3><p>Native pooled RMSE by index and forecast horizon. Lower is better; rankings alone do not establish a statistically reliable gain.</p>
    <div className="result-controls"><label>Index<select value={dataset} onChange={e=>setDataset(e.target.value)}><option>NASDAQ-100</option><option>S&amp;P 500</option></select></label><label>Horizon<select value={horizon} onChange={e=>setHorizon(e.target.value)}><option value="1">1 trading session</option><option value="5">5 trading sessions</option><option value="20">20 trading sessions</option></select></label></div>
    <div aria-live="polite" aria-atomic="true"><p className="work-meta">{dataset} · {horizon}-session horizon · {rows[0]?.n} forecasts per procedure</p><ol className="result-rows">{rows.map(row=><li key={row.model}><strong>{names[row.model]}</strong><span>RMSE {Number(row.rmse).toFixed(6)}</span><small>Skill vs zero: {(Number(row.skill_vs_zero)*100).toFixed(2)}%</small></li>)}</ol></div>
    <p className="method-note">RMSE measures error in forward log-return units. Skill is the saved MSE reduction relative to zero return; negative values indicate worse error. No ML gain survives the expanded multiple-comparison correction. Data: revision d2ce4c2, paper/tables/native_metrics.csv.</p>
  </div>;
}
