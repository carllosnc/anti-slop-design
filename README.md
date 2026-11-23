# anti-slop-design

Skill para agentes de código (OpenCode, Claude Code, compatível com `.claude/skills` e
`.agents/skills`) que aplica **guardrails de design anti-"slop"**: o oposto do
[Slopstrap](https://slopstrap.mikelacher.com/), a sátira do Mike Lacher que embala todos
os clichês do design "vibecoded" por LLM em componentes prontos.

> *"Make your site look hastily vibecoded."*

O Slopstrap é piada — mas ele é um catálogo preciso do que **não** fazer. Esta skill
inverte cada componente dele em uma regra de ouro: se o seu output poderia ter saído de
`Slopstrap.slopify()`, refaça o design.

## O que a skill evita

| Slop | Regra |
|---|---|
| Gradiente roxo→ciano em títulos, botões e preços | Uma cor de destaque sólida; no máximo um gradiente estático, nunca em texto |
| Orbs borrados ambientes + página slate-950 | Fundo escolhido para o público, plano ou com textura sutil |
| Título com uma palavra aleatória em serifa itálica | Ênfase tipográfica só quando faz parte de um sistema consistente |
| Sublinhado de marca-texto em preposições | Sublinhado só em links, ou nenhum |
| Bolinhas de status piscando sem backend | Indicador de status só com dados reais e ao vivo |
| Badges e pills com shimmer em tudo | No máximo um badge por tela, apenas para estado real |
| Cards de vidro com glow, spotlight e nested cards | Superfícies sólidas, no máximo um nível de aninhamento |
| Bordas esquerdas coloridas de 4px em tudo | Destaque por espaçamento e tipografia; cor só quando codifica significado |
| Grid bento como layout padrão | Layout derivado da hierarquia do conteúdo |
| Contadores animados com métricas inventadas | Números estáticos, com período e fonte |
| Marquee infinito de logos de startups | Logos reais e autorizados, estáticos — ou nenhuma faixa |
testimonials falsos (Dr. Sarah Chen…) | Depoimentos reais com atribuição — ou a seção inteira omitida |
| Card do meio do pricing com beam rotativo | Destaque com borda simples ou label estático |
| Copy "It's not just X — it's Y", excesso de em-dash, superlativos | Frases diretas, específicas e verificáveis |
| Emoji (✨⚡🚀) em títulos, botões e ícones | Um conjunto de ícones real, ou nenhum |

## Estrutura

```text
.opencode/skills/anti-slop-design/
├── SKILL.md                      # Workflow, orçamento de decoração, não-negociáveis
└── references/
    ├── anti-patterns.md          # Catálogo visual/interação (10 seções, com assinaturas .slop-*)
    ├── copywriting.md            # Anti-padrões de texto e copy
    └── checklist.md              # Checklist de revisão pré-entrega
```

## Instalação

**Neste projeto** (já funciona automaticamente — o OpenCode descobre `.opencode/skills`):

```powershell
# basta existir no repositório
```

**Global (todos os projetos):**

```powershell
# OpenCode
Copy-Item -Recurse .opencode\skills\anti-slop-design "$env:USERPROFILE\.config\opencode\skills\"

# ou compatibilidade Claude Code / Agents
Copy-Item -Recurse .opencode\skills\anti-slop-design "$env:USERPROFILE\.claude\skills\"
```

**Em outro repositório:** copie a pasta `anti-slop-design/` para `.opencode/skills/`,
`.claude/skills/` ou `.agents/skills/` dele.

## Uso

- Mencione `@anti-slop-design` no prompt, ou
- peça algo como *"revise este componente com a anti-slop-design"* — o OpenCode
  anuncia a skill quando a descrição combina com a tarefa (criar/revisar UI, landing
  page, componentes, copy de tela).

## Créditos

- Satira de origem: [Slopstrap](https://slopstrap.mikelacher.com/) por
  [Mike Lacher](https://mikelacher.com). Todo o catálogo de anti-padrões é uma inversão
  do conteúdo dele — credite-o ao forkar.
