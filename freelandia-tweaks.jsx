/* ============================================================
   Freelandia — Tweaks app
   Drives CSS variables on :root from the tweak panel.
   Palette · font pair · hero style · roundness · density
   ============================================================ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "germany",
  "fonts": "editorial",
  "hero": "accent",
  "radius": "soft",
  "density": "regular"
}/*EDITMODE-END*/;

const PALETTES = {
  germany:{ accent:'#c81e36', deep:'#a8182d', tint:'#f6e2e4', on:'#fff7f6', heroBg:'#14223d', heroGrad:'#21386a', swatch:['#c81e36','#14223d','#e8ebf0'] },
  royal:  { accent:'#2b4c87', deep:'#21395f', tint:'#e6ebf4', on:'#f6f8fc', heroBg:'#14223d', heroGrad:'#21386a', swatch:['#2b4c87','#14223d','#e8ebf0'] },
  petrol: { accent:'#1e7e8c', deep:'#176470', tint:'#e0eff1', on:'#f4fbfc', heroBg:'#114e58', heroGrad:'#1a6b76', swatch:['#1e7e8c','#114e58','#e8ebf0'] },
  terra:  { accent:'#c2613b', deep:'#a44e2d', tint:'#f6e7df', on:'#fff8f4', heroBg:'#7a3a22', heroGrad:'#9a4a2c', swatch:['#c2613b','#7a3a22','#e8ebf0'] },
  amber:  { accent:'#b5832e', deep:'#976b22', tint:'#f4ebd7', on:'#fff9ee', heroBg:'#2e2a20', heroGrad:'#4a3f28', swatch:['#b5832e','#2e2a20','#e8ebf0'] },
  plum:   { accent:'#7a4a86', deep:'#633a6e', tint:'#f0e8f2', on:'#fbf7fc', heroBg:'#3a2742', heroGrad:'#533963', swatch:['#7a4a86','#3a2742','#e8ebf0'] },
};

const FONTS = {
  editorial: { head:"'Source Serif 4', Georgia, serif", body:"'Golos Text', system-ui, sans-serif" },
  lora:      { head:"'Lora', Georgia, serif",           body:"'Manrope', system-ui, sans-serif" },
  ptserif:   { head:"'PT Serif', Georgia, serif",       body:"'Commissioner', system-ui, sans-serif" },
};

const RADII   = { sharp:['4px','4px'], soft:['14px','10px'], round:['22px','16px'] };
const DENSITY = { compact:'66px', regular:'92px', comfy:'116px' };

function heroVars(mode, p) {
  if (mode === 'dark') {
    return {
      '--hero-bg':'#14181f',
      '--hero-grad':`color-mix(in srgb, ${p.accent} 50%, #14181f)`,
      '--hero-ink':'#eceef2',
      '--hero-ink-soft':'rgba(236,238,242,.66)',
      '--hero-line':'rgba(255,255,255,.10)',
      '--hero-glow':`color-mix(in srgb, ${p.accent} 38%, transparent)`,
    };
  }
  if (mode === 'light') {
    return {
      '--hero-bg':'#faf8f2',
      '--hero-grad':p.tint,
      '--hero-ink':'#18202c',
      '--hero-ink-soft':'#545d6a',
      '--hero-line':'#cdc8bb',
      '--hero-glow':`color-mix(in srgb, ${p.accent} 13%, transparent)`,
    };
  }
  // accent (default): white-alpha inks read on any colored ground
  return {
    '--hero-bg':p.heroBg,
    '--hero-grad':p.heroGrad,
    '--hero-ink':'#fbfbfd',
    '--hero-ink-soft':'rgba(255,255,255,.74)',
    '--hero-line':'rgba(255,255,255,.16)',
    '--hero-glow':'rgba(255,255,255,.18)',
  };
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const r = document.documentElement.style;
    const p = PALETTES[t.palette] || PALETTES.royal;
    r.setProperty('--accent', p.accent);
    r.setProperty('--accent-deep', p.deep);
    r.setProperty('--accent-tint', p.tint);
    r.setProperty('--on-accent', p.on);
    r.setProperty('--head-bg', p.heroBg);

    const hv = heroVars(t.hero, p);
    Object.keys(hv).forEach((k) => r.setProperty(k, hv[k]));
    document.body.classList.remove('hero-accent', 'hero-dark', 'hero-light');
    document.body.classList.add('hero-' + t.hero);

    const f = FONTS[t.fonts] || FONTS.editorial;
    r.setProperty('--serif', f.head);
    r.setProperty('--sans', f.body);

    const rad = RADII[t.radius] || RADII.soft;
    r.setProperty('--radius', rad[0]);
    r.setProperty('--radius-sm', rad[1]);

    r.setProperty('--sec-pad', DENSITY[t.density] || DENSITY.regular);
  }, [t]);

  const paletteOf = (swatch) => {
    const key = Object.keys(PALETTES).find(
      (k) => JSON.stringify(PALETTES[k].swatch) === JSON.stringify(swatch)
    );
    return key || 'royal';
  };

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Палитра" />
      <TweakColor
        label="Цвет"
        value={(PALETTES[t.palette] || PALETTES.royal).swatch}
        options={Object.keys(PALETTES).map((k) => PALETTES[k].swatch)}
        onChange={(sw) => setTweak('palette', paletteOf(sw))}
      />

      <TweakSection label="Шрифты" />
      <TweakSelect
        label="Пара"
        value={t.fonts}
        options={[
          { value: 'editorial', label: 'Source Serif + Golos' },
          { value: 'lora', label: 'Lora + Manrope' },
          { value: 'ptserif', label: 'PT Serif + Commissioner' },
        ]}
        onChange={(v) => setTweak('fonts', v)}
      />

      <TweakSection label="Hero" />
      <TweakRadio
        label="Фон"
        value={t.hero}
        options={[
          { value: 'accent', label: 'Акцент' },
          { value: 'dark', label: 'Тёмный' },
          { value: 'light', label: 'Светлый' },
        ]}
        onChange={(v) => setTweak('hero', v)}
      />

      <TweakSection label="Форма" />
      <TweakRadio
        label="Углы"
        value={t.radius}
        options={[
          { value: 'sharp', label: 'Острые' },
          { value: 'soft', label: 'Мягкие' },
          { value: 'round', label: 'Круглые' },
        ]}
        onChange={(v) => setTweak('radius', v)}
      />
      <TweakRadio
        label="Плотность"
        value={t.density}
        options={[
          { value: 'compact', label: 'Плотно' },
          { value: 'regular', label: 'Норма' },
          { value: 'comfy', label: 'Просторно' },
        ]}
        onChange={(v) => setTweak('density', v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<App />);
