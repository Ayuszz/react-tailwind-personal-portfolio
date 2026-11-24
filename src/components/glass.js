// Geometry for the intro's glass pane: a radial "starburst" crack pattern.
// Coordinates are percentages of the viewport (0–100), so the same numbers
// drive both the SVG crack lines and the CSS clip-path shards.

const RAYS = 12;
const RADII = [0, 9, 24, 48, 160]; // last ring sits far off-screen
const C = { x: 50, y: 46 };

const rand = (a, b) => a + Math.random() * (b - a);

const angles = Array.from({ length: RAYS }, (_, i) => ((i * 360) / RAYS + rand(-9, 9)) * (Math.PI / 180));

// P[ring][ray]
const P = RADII.map((r, j) =>
  angles.map((t) => {
    if (j === 0) return { ...C };
    const rr = r * rand(0.82, 1.18);
    return { x: C.x + rr * Math.cos(t), y: C.y + rr * Math.sin(t) * 1.15 };
  })
);

const fmt = (p) => `${p.x.toFixed(2)}% ${p.y.toFixed(2)}%`;

export const shards = [];
for (let j = 0; j < RADII.length - 1; j++) {
  for (let i = 0; i < RAYS; i++) {
    const n = (i + 1) % RAYS;
    const pts = j === 0 ? [C, P[1][i], P[1][n]] : [P[j][i], P[j][n], P[j + 1][n], P[j + 1][i]];
    const cx = pts.reduce((a, p) => a + p.x, 0) / pts.length;
    const cy = pts.reduce((a, p) => a + p.y, 0) / pts.length;
    const len = Math.hypot(cx - C.x, cy - C.y) || 1;
    const dx = (cx - C.x) / len;
    const dy = (cy - C.y) / len;
    const push = rand(35, 75) + j * 15;
    shards.push({
      clip: `polygon(${pts.map(fmt).join(", ")})`,
      ring: j,
      tx: `${(dx * push).toFixed(1)}vw`,
      ty: `${(dy * push + rand(25, 60)).toFixed(1)}vh`, // outward + gravity
      rx: `${rand(-80, 80).toFixed(0)}deg`,
      ry: `${rand(-80, 80).toFixed(0)}deg`,
      rz: `${rand(-140, 140).toFixed(0)}deg`,
      delay: j * 60 + rand(0, 80),
    });
  }
}

// crack line segments, inner ones first
export const cracks = [];
for (let j = 0; j < RADII.length - 1; j++) {
  for (let i = 0; i < RAYS; i++) {
    cracks.push({ a: P[j][i], b: P[j + 1][i] }); // along a ray
    if (j >= 1) cracks.push({ a: P[j][i], b: P[j][(i + 1) % RAYS] }); // around a ring
  }
}
cracks.forEach((c) => (c.d = Math.hypot((c.a.x + c.b.x) / 2 - C.x, (c.a.y + c.b.y) / 2 - C.y)));
cracks.sort((p, q) => p.d - q.d);
