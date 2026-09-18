<script setup lang="ts">
// AiEngineering component
</script>

<template>
  <section class="section" id="ai-engineering">
    <div class="shell">
      <div class="eyebrow mono reveal">AI ENGINEERING</div>
      <h2 class="reveal-lines" data-lines>
        <span class="line">Integrating intelligence</span>
        <span class="line">into business workflows.</span>
      </h2>
      <div class="reveal" style="display: flex; flex-wrap: wrap; gap: 3rem; align-items: center; margin-top: 3rem;">
        <div style="flex: 1; min-width: 300px;">
          <h3 style="margin-bottom: 1rem; font-size: 1.2rem;">AI Systems I Build</h3>
          <ul style="list-style: none; color: #9a9d9f; font-size: 0.95rem; line-height: 1.8;">
            <li>✓ Multi-Agent Architectures (Supervisor Pattern)</li>
            <li>✓ Model Context Protocol (MCP) Integrations</li>
            <li>✓ Deterministic AI Tool-calling &amp; Guardrails</li>
            <li>✓ RAG-based Knowledge Systems</li>
            <li>✓ AI Agents &amp; Telegram AI Bots</li>
            <li>✓ Workflow Automation (n8n)</li>
          </ul>
        </div>
        <div
          style="flex: 1; min-width: 300px; background: rgba(255,255,255,0.02); backdrop-filter: blur(16px); padding: 2.5rem; border-radius: 16px; border: 1px solid rgba(255,255,255,0.06); display: flex; flex-direction: column; gap: 0.75rem;"
        >
          <div><span class="mono" style="color: #e63946; font-size: 0.85rem; letter-spacing: 0.05em;">USER</span></div>
          <div style="padding-left: 1rem; color: rgba(255,255,255,0.2);">↓</div>
          <div><span class="mono" style="color: #eceae6; font-size: 0.85rem; letter-spacing: 0.05em;">AI SUPERVISOR</span></div>
          <div style="padding-left: 1rem; color: rgba(255,255,255,0.2);">↓</div>
          <div><span class="mono" style="color: #eceae6; font-size: 0.85rem; letter-spacing: 0.05em;">DOMAIN AGENTS</span></div>
          <div style="padding-left: 1rem; color: rgba(255,255,255,0.2);">↓</div>
          <div><span class="mono" style="color: #eceae6; font-size: 0.85rem; letter-spacing: 0.05em;">MCP &amp; TOOLS</span></div>
          <div style="padding-left: 1rem; color: rgba(255,255,255,0.2);">↓</div>
          <div><span class="mono" style="color: #e63946; font-size: 0.85rem; letter-spacing: 0.05em;">ERP DATA</span></div>
        </div>
      </div>
    </div>
  </section>
</template>
